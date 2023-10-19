const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts');
require('dotenv').config();

// include controller name and path here
const employeeController = require('./controllers/employeeController')
const clientController = require('./controllers/clientController')
const locationController = require('./controllers/locationController')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/employees', employeeController.getAllEmployees)
app.get('/clients', clientController.getAllClients)
app.get('/locations', locationController.getAllLocations)

app.get('/employee/:id', employeeController.getOneEmployee)
app.get('/client/:id', clientController.getOneClient)
app.get('/location/:id', locationController.getOneLocation)

app.post('/employee', employeeController.createEmployee)
app.post('/client', clientController.createClient)
app.post('/location', locationController.createLocation)

app.put('/employee/:id', employeeController.updateEmployee)
app.put('/client/:id', clientController.updateClient)
app.put('/location/:id', locationController.updateLocation)

app.delete('/employee/:id', employeeController.deleteEmployee)
app.delete('/client/:id', clientController.deleteClient)
app.delete('/location/:id', locationController.deleteLocation)

// Route to search employees by first and last name
app.get('/employees/:firstName', employeeController.getEmployeeByfName);


app.get('/', (req, res) => {
    res.send('Landing root!!')
  })

  //Static Files
app.use(express.static('clientFE')); //static pages

// // Templating Engine
app.use(expressLayout);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  

  //handle
app.get('*', (req, res) => {
  res.status(404).render()
});



// const express = require('express');


// const connectDB = require('./db/index')

// const app = express();
// const PORT = 3001 || process.env.PORT;

// //connect to database
// connectDB();

// app.use(express.urlencoded({ extended: true })); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
// app.use(express.json()); //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.



// //Home
// app.get ('/', (req, res) => {
//     res.send('Welcome');
// });


// app.listen(PORT, () =>  {
//     console.log(`server running on port ${PORT}`)
// });
