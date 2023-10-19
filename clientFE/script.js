
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const employeesContent = document.getElementById("employeeInserts");

  document.addEventListener("DOMContentLoaded", async function () {
    const base_Url = "http://localhost:3001/";
    const pageSize = 5; // Number of results per page
    let currentPage = 1;

    async function getAllEmployees(page) {
        try {
            // Calculate the range of data to fetch based on the page
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const response = await axios.get(`${base_Url}employees`);

            if (response.data.length > 0) {
                // Clear the employeesContent before appending new data
                employeesContent.innerHTML = "";

                for (let i = start; i < end && i < response.data.length; i++) { //chat gpt fix
                    const employeesInfo = response.data[i];

                    // Create a div for each record and set its class
                    const recordDiv = document.createElement('div');
                    recordDiv.className = 'record';

                    // Display each employeesInfo object attribute
                    recordDiv.innerHTML = `
                        <div class="row">
                                <p class="record-item"> ${employeesInfo.firstName}</p>
                                <p class="record-item"> ${employeesInfo.lastName}</p>
                                <p class="record-item"> ${employeesInfo.tel}</p>
                                <p class="record-item"> ${employeesInfo.email}</p>
                            <div class="record-actions">
                                <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="view">View</button>
                                <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="update">Update</button>
                                <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="delete">Delete</button>
                            </div>
                        </div>
                        <hr>
                    `;
                    // Add event listeners to the buttons
                    const buttons = document.querySelectorAll('.crud-button');

                    buttons.forEach(button => {
                        button.addEventListener('click', async function () {
                            const action = button.getAttribute('data-action');
                            const employeeId = button.getAttribute('data-employee-id');
                            
                            // Redirect based on the button's action
                            switch (action) {
                                case 'view':
                                    window.location.href = `viewEmployee.html?id=${employeeId}`;
                                    break;
                                case 'update':
                                    window.location.href = `updateEmployee.html?id=${employeeId}`;
                                    break;
                                case 'delete':
                                    try {
                                        // Send a DELETE request to your API to delete the selected employee
                                        await axios.delete(`${baseUrl}employee/${employeeId}`);
                    
                                        // Display a success message to the user
                                        alert('Employee deleted successfully.');
                    
                                        // Remove the deleted employee from the UI here if needed
                                        button.parentElement.parentElement.remove();
                                    } catch (error) {
                                        // Handle errors that occur during the DELETE request
                                        console.error('Error deleting employee:', error);
                                        alert('Error deleting employee.');
                                    }
                                    break;
                            }
                        });
                    });
                    
                    // Append the record div to the employeesContent
                    employeesContent.appendChild(recordDiv);
                }

                // Add "Previous Page" and "Next Page" buttons
                if (currentPage > 1) {
                    const prevPageButton = document.createElement('button');
                    prevPageButton.innerText = 'Previous Page';
                    prevPageButton.className = 'page-button';
                    prevPageButton.addEventListener('click', () => {
                        currentPage--;
                        getAllEmployees(currentPage); //chat gpt fix
                    });
                    // Append the "Previous Page" button at the end
                    employeesContent.appendChild(prevPageButton);
                }

                if (response.data.length > end) {
                    const nextPageButton = document.createElement('button');
                    nextPageButton.innerText = 'Next Page';
                    nextPageButton.className = 'page-button';
                    nextPageButton.addEventListener('click', () => {
                        currentPage++;
                        getAllEmployees(currentPage);
                    });
                    employeesContent.appendChild(nextPageButton);
                }
            } else {
                // Show a message if no data is returned
                employeesContent.innerHTML = "No employees found.";
            }
        } catch (error) {
            // Show an error message in a popup or log it to the console
            console.error("Error:", error);
            employeesContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
        }
    }

    // Fetch the first page of data
    getAllEmployees(currentPage);
});

// Add an event listener to the search button
searchButton.addEventListener('click', async () => {
    const employeeSearch = searchBar.value;
    const base_Url = "http://localhost:3001/";
    
    // Clear the employeesContent before appending new data
    employeesContent.innerHTML = "";

    try {
        // Make the API request to fetch the data for the current page
        const response = await axios.get(`${base_Url}employee/${employeeSearch}`);
        console.log('Searching for:', employeeSearch);
        const employeesInfo = response.data; // Assuming the response contains employee data

        // Create a div for each record and set its class
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record';
        
        // Display each employee's information
        recordDiv.innerHTML = `
            <div class="row">
                <p class="record-item"> ${employeesInfo.firstName}</p>
                <p class="record-item"> ${employeesInfo.lastName}</p>
                <p class="record-item"> ${employeesInfo.tel}</p>
                <p class="record-item"> ${employeesInfo.email}</p>
                <div class="record-actions">
                    <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="view">View</button>
                    <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="update">Update</button>
                    <button class="crud-button" data-employee-id="${employeesInfo._id}" data-action="delete">Delete</button>
                </div>
            </div>
            <hr>
        `;
        // Append the record to a container in your HTML
        const recordsContainer = document.getElementById('records-container');
        recordsContainer.appendChild(recordDiv);
    } catch (error) {
        console.error('Error fetching data:', error);
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