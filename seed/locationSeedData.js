const db = require('../db');
const { Employee, Client, Location } = require('../models/index');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {  

    // Create a Location instance
    const location1 = new Location({
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States of America',
        contractAddress: '535 Tremont Street',
    });

    // Save the Location instance to the database
    await location1.save();

    const location2 = new Location({
        city: 'New York',
        state: 'New York',
        country: 'United States of America',
        contractAddress: '123 Main Street',
    });

    await location2.save();

    const location3 = new Location({
        city: 'Chicago',
        state: 'Illinois',
        country: 'United States of America',
        contractAddress: '789 Pine Road',
    });

    await location3.save();

    const location4 = new Location({
        city: 'Los Angeles',
        state: 'California',
        country: 'United States of America',
        contractAddress: '456 Cedar Avenue',
    });

    await location4.save();

    const location5 = new Location({
        city: 'San Francisco',
        state: 'California',
        country: 'United States of America',
        contractAddress: '555 Elm Lane',
    });

    await location5.save();

    const location6 = new Location({
        city: 'Miami',
        state: 'Florida',
        country: 'United States of America',
        contractAddress: '222 Oak Road',
    });

    await location6.save();

    const location7 = new Location({
        city: 'Dallas',
        state: 'Texas',
        country: 'United States of America',
        contractAddress: '333 Pine Street',
    });

    await location7.save();

    const location8 = new Location({
        city: 'Seattle',
        state: 'Washington',
        country: 'United States of America',
        contractAddress: '777 Cedar Lane',
    });

    await location8.save();

    const location9 = new Location({
        city: 'Atlanta',
        state: 'Georgia',
        country: 'United States of America',
        contractAddress: '888 Elm Street',
    });

    await location9.save();

    const location10 = new Location({
        city: 'Denver',
        state: 'Colorado',
        country: 'United States of America',
        contractAddress: '999 Pine Lane',
    });

    await location10.save();

};

const run = async () => {
    await main();
    db.close();
};

run();
