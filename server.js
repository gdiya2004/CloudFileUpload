require("dotenv").config();
const express = require("express");
const multer = require("multer");
const { BlobServiceClient } = require("@azure/storage-blob");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const upload = multer({ storage: multer.memoryStorage() });

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.CONTAINER_NAME;

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({error:"No file uploaded"});
        }
        if (req.file.size > 2 * 1024 * 1024) {
            return res.status(400).json({ error: "File is too large:Max size 2MB" });
        }
        const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];

        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).json({ error: "Invalid file type" });
        }
        const blobName = Date.now() + "-" + req.file.originalname;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        await blockBlobClient.uploadData(req.file.buffer, {
            blobHTTPHeaders: {
                blobContentType: req.file.mimetype
            }
        });

        const url = blockBlobClient.url;
        res.json({
            message: "Upload successful",
            fileUrl: url
        });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));