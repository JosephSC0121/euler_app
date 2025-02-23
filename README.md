# 🖥️ Euler App

![Tauri](https://img.shields.io/badge/Tauri-Desktop%20App-blue?logo=tauri)
![React](https://img.shields.io/badge/React-18-blue?logo=react)

> A desktop application for managing and storing Project Euler code snippets. The app uses **Monaco Editor** to recognize programming languages and provides easy access to saved solutions.

## ✨ Features

- Organize and store multiple Project Euler solutions.
- Supports multiple programming languages via **Monaco Editor**.
- Local file storage for offline access.
- Lightweight and fast, built with **Tauri** and **React**.

## 📂 Folder Structure

```plaintext
.  
├── src/  # Main application source code  
│   ├── components/  # UI components  
│   ├── editor/  # Monaco Editor instance  
│   ├── storage/  # File handling logic  
│   ├── App.tsx  # Main application entry  
│   └── main.rs  # Tauri backend  
├── public/  # Static assets  
├── tauri.conf.json  # Tauri configuration  
└── package.json  
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```sh
pnpm install
```

### 2️⃣ Run the App in Development Mode
```sh
pnpm tauri dev
```

### 3️⃣ Build for Production
```sh
pnpm tauri build
```

## ⚙️ Configuration
Modify `tauri.conf.json` to adjust app settings, storage paths, and permissions.
