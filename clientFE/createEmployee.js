createEmployeebtn = document.getElementById("createEmployeebtn")

createEmployeebtn.addEventListener('click', async () => {
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

    try {
        
        const response = await axios.post(`${base_Url}employee`, {
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: email,
            address: address,
            position: position,
            locationPreference: locationPreference,
            availability: availability,
            hourlyPayRate: hourlyPayRate
        })

        console.log('Employee created:', response.data)
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