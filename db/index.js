
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.x22l0ca.mongodb.net/emdbs')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

// const mongoose = require('mongoose')
// mongoose.set('strictQuery', false);
// const connectDB = async() => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`Database Connected: ${conn.connection.host}`)
//     } catch (error) {
//         console.log(error);
//     }
// }
// module.exports = connectDB