# 🔐 PassGen — Password Generator

<div align="center">

<img src="https://img.shields.io/badge/PassGen-Password%20Generator-6366f1?style=for-the-badge&logo=keycdn&logoColor=white" alt="PassGen">

### Simple • Fast • Secure

A lightweight password generator built with **HTML, CSS, and JavaScript** for creating customizable passwords directly in your browser.

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Yes-22c55e?style=flat-square" alt="Responsive">
</p>

</div>

---

## 📸 Screenshots

### Desktop

<div align="center">

<img src="assets/screenshots/main.png" alt="PassGen Desktop Screenshot" width="850">

</div>

### Mobile

<div align="center">

<img src="assets/screenshots/mobile.png" alt="PassGen Mobile Screenshot" width="350">

</div>

> **Note:** Add your screenshots to:
>
> `assets/screenshots/main.png`
>
> `assets/screenshots/mobile.png`

---

## ✨ Features

* 🔑 Generate random passwords instantly
* 📏 Adjustable password length
* 🔠 Uppercase character support
* 🔡 Lowercase character support
* 🔢 Number support
* 🔣 Symbol support
* 📋 One-click password copying
* ⚡ Instant password regeneration
* 📱 Responsive design
* 🚫 Prevents generation when no character type is selected
* 🌐 Runs completely in the browser
* 🧩 No backend or database required

---

## 🎯 Password Options

PassGen allows users to customize generated passwords using four character categories:

| Option    | Characters      |
| --------- | --------------- |
| Uppercase | `A-Z`           |
| Lowercase | `a-z`           |
| Numbers   | `0-9`           |
| Symbols   | `! @ # $ % ...` |

The password length can be adjusted from **4 to 50 characters**.

---

## 🛠️ Tech Stack

### Frontend

* **HTML5** — Page structure and semantic markup
* **CSS3** — Styling, layout, and responsive design
* **JavaScript** — Password generation and user interaction
* **Clipboard API** — Copy generated passwords

### Dependencies

PassGen has **no external JavaScript dependencies**.

```text
HTML
CSS
JavaScript
```

---

## 📂 Project Structure

```text
PassGen/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/PassGen.git
```

### 2. Navigate to the Project

```bash
cd PassGen
```

### 3. Open the Application

Open:

```text
index.html
```

in your preferred web browser.

No installation, package manager, or server is required.

---

## 💡 How It Works

PassGen builds a character pool based on the options selected by the user.

For example:

```text
Uppercase  → ABCDEFGHIJKLMNOPQRSTUVWXYZ
Lowercase  → abcdefghijklmnopqrstuvwxyz
Numbers    → 0123456789
Symbols    → !@#$%^&*...
```

JavaScript then randomly selects characters from the available pool until the requested password length is reached.

The generated password can then be copied using the browser's **Clipboard API**.

---

## 🔐 Privacy

PassGen operates entirely on the client side.

* No passwords are sent to a server.
* No passwords are stored in a database.
* No account is required.
* No personal information is collected by the application.

Generated passwords exist only in the browser while the page is being used.

---

## 📱 Responsive Design

PassGen is designed to work across different screen sizes:

```text
Desktop
   ↓
Tablet
   ↓
Mobile
```

The interface automatically adapts to smaller screens while maintaining usability.

---

## 🎨 Interface

The application follows a minimal interface focused on:

* Clear controls
* Simple navigation
* Easy password copying
* Responsive layouts
* Minimal visual distractions

---

## 🔮 Future Improvements

Possible future enhancements include:

* [ ] Password strength indicator
* [ ] Secure random generation using `crypto.getRandomValues()`
* [ ] Avoid duplicate characters
* [ ] Guarantee at least one character from each selected category
* [ ] Password generation history
* [ ] Dark mode
* [ ] Custom symbol selection
* [ ] Export generated passwords
* [ ] Password strength estimation

---

## 📌 Project Status

**Status:** Completed ✅

PassGen currently provides the core functionality required to generate and copy customizable passwords.

---

## 👨‍💻 Author

**Samir Pokhrel**

B.Sc. CSIT Student & Developer

### Connect

<p>
  <a href="https://github.com/SamirPokhrel">
    <img src="https://img.shields.io/badge/GitHub-SamirPokhrel-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## 📄 License

Copyright © 2026 **Samir Pokhrel**

This project is intended for educational and portfolio purposes.

---

<div align="center">

### 🔐 PassGen

**Generate. Copy. Secure.**

</div>
