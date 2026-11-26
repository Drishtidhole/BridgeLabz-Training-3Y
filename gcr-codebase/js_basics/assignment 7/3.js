const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");

let currentStep = 0;

const inputs = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("password")
];

function showStep() {
    steps.forEach(function (step, index) {
        step.classList.toggle("active", index === currentStep);
    });

    backButton.style.display = currentStep === 0 ? "none" : "inline-block";
    nextButton.textContent = currentStep === 2 ? "Submit" : "Next";
}

function validateStep() {
    const value = inputs[currentStep].value.trim();

    if (value === "") {
        alert("This field is required");
        return false;
    }

    if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        alert("Enter a valid email");
        return false;
    }

    if (currentStep === 2 && value.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    return true;
}

nextButton.addEventListener("click", function () {
    if (!validateStep()) return;

    if (currentStep < 2) {
        currentStep++;
        showStep();
    } else {
        steps.forEach(function (step) {
            step.style.display = "none";
        });

        backButton.style.display = "none";
        nextButton.style.display = "none";

        summary.innerHTML = `
            <h3>Form Completed Successfully</h3>
            <p>Name: ${inputs[0].value}</p>
            <p>Email: ${inputs[1].value}</p>
            <p>Password: ${"*".repeat(inputs[2].value.length)}</p>
        `;
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();