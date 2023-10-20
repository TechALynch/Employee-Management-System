function getEmployeeIdFromUrl() {
    // Parse the query string and retrieve the employeeId parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
console.log(getEmployeeIdFromUrl());

updateEmployeebtn = document.getElementById("updateEmployeebtn");

updateEmployeebtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const base_Url = "http://localhost:3001/";
    const employeeId = getEmployeeIdFromUrl(); // Retrieve employeeId from the URL
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const position = document.getElementById("position").value;
    const locationPreference = document.getElementById("locationPreference").value;
    const hourlyPayRate = document.getElementById("hourlyPayRate").value;
    console.log('Employee Update');

    try {
        const response = await axios.put(`${base_Url}employee/${employeeId}`, {
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: email,
            address: address,
            position: position,
            locationPreference: locationPreference,
            availability: true,
            hourlyPayRate: hourlyPayRate
        });

        console.log('Employee Updated:', response.data);
        alert('Employee Updated Successfully');

        // Clear the form by resetting the input fields
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("email").value = '';
        document.getElementById("address").value = '';
        document.getElementById("position").value = '';
        document.getElementById("locationPreference").value = '';
        document.getElementById("hourlyPayRate").value = '';

    } catch (error) {
        console.error('Error updating Employee:', error);
    }
});

function myFunction() { //w3Schools
    const myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
}
