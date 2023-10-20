const homeButton = document.getElementById('viewEmployeebtn');

homeButton.addEventListener('click', function () {
    // Replace 'index.html' with the actual URL of your home page
    window.location.href = 'index.html';
});

function getEmployeeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
// Retrieve employeeId from the URL
const employeeId = getEmployeeIdFromUrl();

// Function to update the employee details in the HTML
async function updateEmployeeDetails() {
    const base_Url = "http://localhost:3001/";

    try {
        // Make an API request to get the employee details
        const response = await axios.get(`${base_Url}employee/${employeeId}`);
        const employeesInfo = response.data;

        // Update the HTML content with the employee details
        document.getElementById('firstName').textContent = employeesInfo.firstName;
        document.getElementById('lastName').textContent = employeesInfo.lastName;
        document.getElementById('tel').textContent = employeesInfo.tel;
        document.getElementById('email').textContent = employeesInfo.email;
        document.getElementById('address').textContent = employeesInfo.address;
        document.getElementById('position').textContent = employeesInfo.position;
        document.getElementById('locationPreference').textContent = employeesInfo.locationPreference;
        document.getElementById('availability').textContent = employeesInfo.availability;
        document.getElementById('hourlyPayRate').textContent = employeesInfo.hourlyPayRate;
    } catch (error) {
        console.error('Error updating Employee details:', error);
    }
}

// Call the function to update employee details when the page loads
updateEmployeeDetails();


function myFunction() { //w3Schools
    const myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
  }