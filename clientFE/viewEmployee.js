const homeButton = document.getElementById('viewEmployeebtn');

homeButton.addEventListener('click', function () {
    // Replace 'index.html' with the actual URL of your home page
    window.location.href = 'index.html';
});


function myFunction() { //w3Schools
    const myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
  }