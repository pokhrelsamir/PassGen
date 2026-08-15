// =================================
// DOM Elements
// =================================

const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");


// =================================
// Character Sets
// =================================

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// =================================
// Generate Password
// =================================

function generatePassword() {

    const length = Number(lengthSlider.value);

    let characters = "";

    // Add selected character sets
    if (uppercaseCheckbox.checked) {
        characters += uppercaseChars;
    }

    if (lowercaseCheckbox.checked) {
        characters += lowercaseChars;
    }

    if (numbersCheckbox.checked) {
        characters += numberChars;
    }

    if (symbolsCheckbox.checked) {
        characters += symbolChars;
    }


    // Prevent empty character set
    if (characters.length === 0) {

        passwordInput.value = "";

        passwordInput.placeholder =
            "Select at least one option";

        return;
    }


    let password = "";

    // Generate random password
    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }


    passwordInput.value = password;

    passwordInput.placeholder = "Your password";
}


// =================================
// Update Password Length
// =================================

lengthSlider.addEventListener("input", () => {

    lengthValue.textContent = lengthSlider.value;

    generatePassword();
});


// =================================
// Generate Button
// =================================

generateBtn.addEventListener("click", generatePassword);


// =================================
// Character Option Changes
// =================================

uppercaseCheckbox.addEventListener(
    "change",
    generatePassword
);

lowercaseCheckbox.addEventListener(
    "change",
    generatePassword
);

numbersCheckbox.addEventListener(
    "change",
    generatePassword
);

symbolsCheckbox.addEventListener(
    "change",
    generatePassword
);


// =================================
// Copy Password
// =================================

copyBtn.addEventListener("click", async () => {

    const password = passwordInput.value;

    if (!password) {
        return;
    }


    try {

        await navigator.clipboard.writeText(password);

        const originalText = copyBtn.textContent;

        copyBtn.textContent = "Copied!";

        setTimeout(() => {

            copyBtn.textContent = originalText;

        }, 1500);

    } catch (error) {

        console.error(
            "Failed to copy password:",
            error
        );

    }
});


// =================================
// Initial Password
// =================================

generatePassword();