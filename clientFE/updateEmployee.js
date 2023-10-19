document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the update form elements
    const updateForm = document.querySelector('form');
    const _idField = updateForm.querySelector('input[name="_id"]');
    const firstNameField = updateForm.querySelector('input[name="firstName"]');
    const lastNameField = updateForm.querySelector('input[name="lastName"]');
    const telField = updateForm.querySelector('input[name="tel"]');
    const emailField = updateForm.querySelector('input[name="email"]');
    const addressField = updateForm.querySelector('input[name="address"]');
    const positionField = updateForm.querySelector('input[name="position"]');
    const locationPreferenceField = updateForm.querySelector('input[name="locationPreference"]');
    const availabilityField = updateForm.querySelector('input[name="availability"]');
    const hourlyPayRateField = updateForm.querySelector('input[name="hourlyPayRate"]');

    // Get a reference to the "Update" button
    const updateButton = document.querySelector('.crud-button[data-action="update"]');

    // Add a click event listener to the "Update" button
    updateButton.addEventListener('click', function (event) {
        // Prevent the default behavior of the button
        event.preventDefault();

        // Extract the _id from the data attribute
        const _id = updateButton.getAttribute('data-employee-id');

        // Populate the form fields with the data
        _idField.value = employeesInfo._id;
        firstNameField.value = employeesInfo.firstName;
        lastNameField.value = employeesInfo.lastName;
        telField.value = employeesInfo.tel;
        emailField.value = employeesInfo.email;
        addressField.value = employeesInfo.address;
        positionField.value = employeesInfo.position;
        locationPreferenceField.value = employeesInfo.locationPreference;
        availabilityField.checked = true; // You may need to adjust this based on your data
        hourlyPayRateField.value = employeesInfo.hourlyPayRate;
    });
});

function myFunction() { //w3Schools
    const myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
  }
