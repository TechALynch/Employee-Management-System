createEmployeebtn = document.getElementById("createEmployeebtn")

createEmployeebtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const base_Url = "http://localhost:3001/";
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const position = document.getElementById("position").value
    const locationPreference = document.getElementById("locationPreference").value
    const availability = document.getElementById("availability").value
    const hourlyPayRate = document.getElementById("hourlyPayRate").value
    console.log('employee Create')
    try {
        
        const response = await axios.post(`${base_Url}employee`, {
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: email,
            address: address,
            position: position,
            locationPreference: locationPreference,
            availability: true,
            hourlyPayRate: hourlyPayRate
        })

        console.log('Employee created:', response.data)
        alert('Employee Created Successfully');

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
        console.error('Error creating Employee:', error)
    }
})

function myFunction() { //w3Schools
    const myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
  }