const db = require('../db');
const { Client } = require('../models/index');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    // Create a Client instance
    const client1 = new Client({
        establishmentName: 'Cyclorama',
        firstName: 'John',
        lastName: 'Doe',
        tel: '839-283-2045',
        email: 'John.Doe@gmail.com',
        contractAddress: '535 Tremont Street',
        contractTotal: 50000,
    });

    // Save the Client instance to the database
    await client1.save();

    const client2 = new Client({
        establishmentName: 'Security Solutions Inc.',
        firstName: 'Jane',
        lastName: 'Smith',
        tel: '617-283-8303',
        email: 'Security.SmithweF@gmail.com',
        contractAddress: '123 Main Street',
        contractTotal: 75000,
    });

    await client2.save();

    const client3 = new Client({
        establishmentName: 'Safe Haven Mall',
        firstName: 'Robert',
        lastName: 'Johnson',
        tel: '372-283-2943',
        email: 'Haven.Mall@gmail.com',
        contractAddress: '789 Pine Road',
        contractTotal: 60000,
    });

    await client3.save();

    const client4 = new Client({
        establishmentName: 'City Park Apartments',
        firstName: 'Maria',
        lastName: 'Garcia',
        tel: '617-384-2034',
        email: 'Park.Apartments@gmail.com',
        contractAddress: '456 Cedar Avenue',
        contractTotal: 35000,
    });

    await client4.save();

    const client5 = new Client({
        establishmentName: 'TechHub Inc.',
        firstName: 'Michael',
        lastName: 'Davis',
        tel: '283-2839-1205',
        email: 'TechHub.Davis@gmail.com',
        contractAddress: '555 Elm Lane',
        contractTotal: 80000,
    });

    await client5.save();

    const client6 = new Client({
        establishmentName: 'Sunset Mall',
        firstName: 'Sophia',
        lastName: 'Johnson',
        tel: '283-392-2943',
        email: 'Sunset.Mall@gmail.com',
        contractAddress: '222 Oak Road',
        contractTotal: 60000,
    });

    await client6.save();

    const client7 = new Client({
        establishmentName: 'ABC Corporation',
        firstName: 'Daniel',
        lastName: 'Williams',
        tel: '384-392-2819',
        email: 'ABC.Williams@gmail.com',
        contractAddress: '333 Pine Street',
        contractTotal: 45000,
    });

    await client7.save();

    const client8 = new Client({
        establishmentName: 'XYZ Enterprises',
        firstName: 'Melissa',
        lastName: 'Brown',
        tel: '382-800-8392',
        email: 'XYZ.Enterprises@gmail.com',
        contractAddress: '777 Cedar Lane',
        contractTotal: 60000,
    });

    await client8.save();

    const client9 = new Client({
        establishmentName: 'Sunrise Hospital',
        firstName: 'David',
        lastName: 'Taylor',
        tel: '123-294-5920',
        email: 'Sunrise.Hospital@gmail.com',
        contractAddress: '888 Elm Street',
        contractTotal: 70000,
    });

    await client9.save();

    const client10 = new Client({
        establishmentName: 'Riverfront Apartments',
        firstName: 'Emily',
        lastName: 'Miller',
        tel: '984-391-4920',
        email: 'Riverfront.Apartments@gmail.com',
        contractAddress: '999 Pine Lane',
        contractTotal: 55000,
    });

    await client10.save();
};

const run = async () => {
    await main();
    db.close();
};

run();
