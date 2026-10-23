document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("willForm");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Function to ensure only one checkbox is checked at a time
    function handleCheckboxChange(event) {
        checkboxes.forEach(checkbox => {
            if (checkbox !== event.target) {
                checkbox.checked = false;
            }
        });

        // If the clicked checkbox is checked, uncheck it (toggle behavior)
        if (event.target.checked) {
            event.target.checked = false;
        }

        // If no checkbox is checked, set the first one as checked by default
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!anyChecked && checkboxes.length > 0) {
            checkboxes[0].checked = true;
        }

        // Update the hidden input field with the selected value
        const selectedValue = Array.from(checkboxes).find(checkbox => checkbox.checked)?.value || "";
        document.getElementById("selectedCheckbox").value = selectedValue;
    }
    // Attach change event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", handleCheckboxChange);
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const fullName = document.getElementById('fullName').value.trim();
        const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
        const address = document.getElementById('address').value.trim();
        const beneficiaries = document.getElementById('beneficiaries').value.trim();
        const executors = document.getElementById('executors').value.trim();
        const otherInstructions = document.getElementById('otherInstructions').value.trim();
        const additionalInstructions = document.getElementById('additionalInstructions').value.trim();
        const martialStatus = document.getElementById('martialStatus').value;
        const message = document.getElementById("message");

        // Clear previous messages
        message.textContent = "";
        message.style.color = "red";

        // Validation
        if (!fullName) {
            message.textContent = "Please enter your full name.";
            return;
        }

        if (!age || age < 18) {
            message.textContent = "You must be at least 18 years old to create a will.";
            return;
        }

        if (!beneficiary) {
            message.textContent = "Please enter the beneficiary's name.";
            return;
        }
        if (!address) {
            message.textContent = "Please enter your address.";
            return;
        }
        if (!executors) {
            message.textContent = "Please enter the executor(s) name.";
            return;
        }
    });

    // Clear previous messages
    message.textContent = "";

    // If all validations pass
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    console.log({
        fullName: fullName,
        age: age,
        beneficiary: beneficiary,
    });

    // Initial setup: Check the first checkbox by default
    if (checkboxes.length > 0) {
        checkboxes[0].checked = true;
        document.getElementById("selectedCheckbox").value = checkboxes[0].value;
    }

});