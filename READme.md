# ☁️ Cloud File Upload System (Azure)

A full-stack cloud-based file upload application that allows users to upload files securely to Azure Blob Storage with real-time feedback and file access links.

---

## 🚀 Live Demo

👉 https://fileupload-apcvdtcxf8fwbech.southeastasia-01.azurewebsites.net/

---

## 🧠 Overview

This project demonstrates how to build and deploy a cloud-integrated application using Node.js and Azure services. Users can upload files through a simple UI, and the backend processes and stores them in Azure Blob Storage.

---

## 🏗️ Architecture

User → Frontend (HTML/CSS/JS) → Node.js Backend → Azure Blob Storage

---

## ⚙️ Features

* 📁 File upload to Azure Blob Storage
* 🔒 File validation (type & size)
* ⚡ Real-time upload status
* 🔗 Generates file URL after upload
* 📋 Copy-to-clipboard functionality
* 🌐 Deployed on Azure App Service

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **File Handling:** Multer
* **Cloud Storage:** Azure Blob Storage
* **Deployment:** Azure App Service

---

## 📦 Installation (Local Setup)

1. Clone the repository:

git clone https://github.com/gdiya2004/CloudFileUpload
cd file-upload-app

2. Install dependencies:

npm install

3. Create a `.env` file:

AZURE_STORAGE_CONNECTION_STRING=your_connection_string
CONTAINER_NAME=uploads

4. Run the server:

node server.js

5. Open in browser:

http://localhost:3000

---

## 🔐 Environment Variables

| Variable                        | Description                     |
| ------------------------------- | ------------------------------- |
| AZURE_STORAGE_CONNECTION_STRING | Azure storage connection string |
| CONTAINER_NAME                  | Blob container name             |

---

## 📂 Supported File Types

* PNG
* JPG
* PDF

### 📏 Max File Size

* 2 MB

---

## ☁️ Deployment

* Hosted using Azure App Service
* Integrated with Azure Blob Storage
* Environment variables configured in Azure portal

---

## 🧠 Learnings

* Integrated cloud storage with backend services
* Handled file uploads using Multer
* Managed environment variables securely
* Deployed full-stack app on Azure
* Implemented proper error handling and validation

---

## 📄 Future Improvements

* Drag & drop upload
* Upload progress bar
* Authentication system
* File deletion feature
* Dashboard for uploaded files

---

## 👨‍💻 Author

Diya Gupta

---

## ⭐ Acknowledgements

* Microsoft Azure Documentation
* Node.js & Express community
