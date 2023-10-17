const db = require('../db');
const { Employee, Client, Location } = require('../models/index');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    // Create an Employee instance
    const employee1 = new Employee({
        firstName: 'Anthony',
        lastName: 'Johnston',
        address: '108 Oak Street',
        position: 'Lead Security Officer',
        locationPreference: '535 Tremont Street',
        availability: false,
        hourlyPayRate: 25.0,
    });

    // Save the Employee instance to the database
    await employee1.save();

    //  const employee2 = new Employee({
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     address: '123 Elm Street',
    //     position: 'Security Officer',
    //     locationPreference: '123 Main Street',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });

    // await employee2.save();

    // const employee3 = new Employee({
    //     firstName: 'Emily',
    //     lastName: 'Johnson',
    //     address: '456 Oak Avenue',
    //     position: 'Security Supervisor',
    //     locationPreference: '789 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 22.0,
    // });

    // await employee3.save();

    // const employee4 = new Employee({
    //     firstName: 'Michael',
    //     lastName: 'Davis',
    //     address: '789 Maple Lane',
    //     position: 'Security Guard',
    //     locationPreference: '456 Oak Avenue',
    //     availability: true,
    //     hourlyPayRate: 18.0,
    // });

    // await employee4.save();

    // const employee5 = new Employee({
    //     firstName: 'Sarah',
    //     lastName: 'Anderson',
    //     address: '234 Oak Road',
    //     position: 'Security Officer',
    //     locationPreference: '567 Cedar Street',
    //     availability: true,
    //     hourlyPayRate: 21.5,
    // });

    // await employee5.save();

    // const employee6 = new Employee({
    //     firstName: 'William',
    //     lastName: 'Brown',
    //     address: '111 Pine Road',
    //     position: 'Security Supervisor',
    //     locationPreference: '123 Elm Street',
    //     availability: true,
    //     hourlyPayRate: 24.0,
    // });

    // await employee6.save();

    // const employee7 = new Employee({
    //     firstName: 'Robert',
    //     lastName: 'Wilson',
    //     address: '321 Oak Street',
    //     position: 'Security Guard',
    //     locationPreference: '789 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 20.5,
    // });

    // await employee7.save();

    // const employee8 = new Employee({
    //     firstName: 'Jennifer',
    //     lastName: 'Lee',
    //     address: '987 Elm Lane',
    //     position: 'Senior Security Officer',
    //     locationPreference: '234 Oak Avenue',
    //     availability: true,
    //     hourlyPayRate: 23.0,
    // });

    // await employee8.save();

    // const employee9 = new Employee({
    //     firstName: 'Samuel',
    //     lastName: 'Garcia',
    //     address: '654 Pine Road',
    //     position: 'Security Officer',
    //     locationPreference: '111 Cedar Avenue',
    //     availability: true,
    //     hourlyPayRate: 19.0,
    // });

    // await employee9.save();

    // const employee10 = new Employee({
    //     firstName: 'Megan',
    //     lastName: 'Harris',
    //     address: '456 Cedar Street',
    //     position: 'Security Supervisor',
    //     locationPreference: '789 Maple Road',
    //     availability: true,
    //     hourlyPayRate: 25.0,
    // });

    // await employee10.save();

    // const employee11 = new Employee({
    //     firstName: 'David',
    //     lastName: 'Martin',
    //     address: '876 Oak Road',
    //     position: 'Lead Security Officer',
    //     locationPreference: '123 Pine Lane',
    //     availability: false,
    //     hourlyPayRate: 27.0,
    // });

    // await employee11.save();

    // const employee12 = new Employee({
    //     firstName: 'Sophia',
    //     lastName: 'Jackson',
    //     address: '567 Elm Avenue',
    //     position: 'Security Officer',
    //     locationPreference: '555 Maple Lane',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });

    // await employee12.save();

    // const employee13 = new Employee({
    //     firstName: 'Liam',
    //     lastName: 'Moore',
    //     address: '777 Pine Road',
    //     position: 'Security Supervisor',
    //     locationPreference: '222 Cedar Street',
    //     availability: true,
    //     hourlyPayRate: 24.5,
    // });

    // await employee13.save();

    // const employee14 = new Employee({
    //     firstName: 'Olivia',
    //     lastName: 'Thomas',
    //     address: '654 Oak Lane',
    //     position: 'Security Guard',
    //     locationPreference: '333 Elm Road',
    //     availability: false,
    //     hourlyPayRate: 21.0,
    // });

    // await employee14.save();

    // const employee15 = new Employee({
    //     firstName: 'Noah',
    //     lastName: 'Hernandez',
    //     address: '111 Maple Road',
    //     position: 'Security Officer',
    //     locationPreference: '789 Cedar Lane',
    //     availability: true,
    //     hourlyPayRate: 22.0,
    // });

    // await employee15.save();

    // const employee16 = new Employee({
    //     firstName: 'Emma',
    //     lastName: 'White',
    //     address: '123 Pine Street',
    //     position: 'Senior Security Officer',
    //     locationPreference: '456 Elm Avenue',
    //     availability: false,
    //     hourlyPayRate: 26.0,
    // });

    // await employee16.save();

    // const employee17 = new Employee({
    //     firstName: 'Ella',
    //     lastName: 'Wilson',
    //     address: '456 Cedar Avenue',
    //     position: 'Security Officer',
    //     locationPreference: '777 Oak Street',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });

    // await employee17.save();

    // const employee18 = new Employee({
    //     firstName: 'James',
    //     lastName: 'Roberts',
    //     address: '789 Pine Lane',
    //     position: 'Lead Security Officer',
    //     locationPreference: '111 Elm Road',
    //     availability: true,
    //     hourlyPayRate: 25.0,
    // });

    // await employee18.save();

    // const employee19 = new Employee({
    //     firstName: 'Ava',
    //     lastName: 'Davis',
    //     address: '234 Maple Street',
    //     position: 'Security Supervisor',
    //     locationPreference: '456 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 22.0,
    // });

    // await employee19.save();

    // const employee20 = new Employee({
    //     firstName: 'Daniel',
    //     lastName: 'Clark',
    //     address: '555 Elm Lane',
    //     position: 'Security Guard',
    //     locationPreference: '333 Oak Avenue',
    //     availability: true,
    //     hourlyPayRate: 19.5,
    // });

    // await employee20.save();

    // const employee21 = new Employee({
    //     firstName: 'Grace',
    //     lastName: 'Smith',
    //     address: '123 Pine Street',
    //     position: 'Senior Security Officer',
    //     locationPreference: '456 Elm Avenue',
    //     availability: true,
    //     hourlyPayRate: 26.0,
    // });
    // await employee21.save();
    
    // const employee22 = new Employee({
    //     firstName: 'Liam',
    //     lastName: 'Roberts',
    //     address: '987 Cedar Road',
    //     position: 'Security Officer',
    //     locationPreference: '222 Elm Lane',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });
    // await employee22.save();
    
    // const employee23 = new Employee({
    //     firstName: 'Mia',
    //     lastName: 'Johnson',
    //     address: '654 Maple Lane',
    //     position: 'Security Supervisor',
    //     locationPreference: '789 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 23.0,
    // });
    // await employee23.save();
    
    // const employee24 = new Employee({
    //     firstName: 'Oliver',
    //     lastName: 'Davis',
    //     address: '333 Elm Street',
    //     position: 'Security Guard',
    //     locationPreference: '777 Oak Avenue',
    //     availability: true,
    //     hourlyPayRate: 21.5,
    // });
    // await employee24.save();
    
    // const employee25 = new Employee({
    //     firstName: 'Emma',
    //     lastName: 'Wilson',
    //     address: '111 Cedar Lane',
    //     position: 'Lead Security Officer',
    //     locationPreference: '123 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 27.0,
    // });
    // await employee25.save();
    
    // const employee26 = new Employee({
    //     firstName: 'Noah',
    //     lastName: 'Brown',
    //     address: '876 Elm Avenue',
    //     position: 'Security Officer',
    //     locationPreference: '555 Cedar Lane',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });
    // await employee26.save();
    
    // const employee27 = new Employee({
    //     firstName: 'Sophia',
    //     lastName: 'Johnson',
    //     address: '777 Pine Road',
    //     position: 'Security Supervisor',
    //     locationPreference: '222 Elm Street',
    //     availability: true,
    //     hourlyPayRate: 24.5,
    // });
    // await employee27.save();
    
    // const employee28 = new Employee({
    //     firstName: 'Liam',
    //     lastName: 'Roberts',
    //     address: '654 Oak Lane',
    //     position: 'Security Guard',
    //     locationPreference: '333 Elm Road',
    //     availability: false,
    //     hourlyPayRate: 21.0,
    // });
    // await employee28.save();
    
    // const employee29 = new Employee({
    //     firstName: 'Olivia',
    //     lastName: 'Thomas',
    //     address: '111 Maple Road',
    //     position: 'Security Officer',
    //     locationPreference: '789 Cedar Lane',
    //     availability: true,
    //     hourlyPayRate: 22.0,
    // });
    // await employee29.save();
    
    // const employee30 = new Employee({
    //     firstName: 'Noah',
    //     lastName: 'Hernandez',
    //     address: '123 Pine Street',
    //     position: 'Senior Security Officer',
    //     locationPreference: '456 Elm Avenue',
    //     availability: false,
    //     hourlyPayRate: 26.0,
    // });

    // await employee30.save();

    // const employee31 = new Employee({
    //     firstName: 'Isabella',
    //     lastName: 'Lopez',
    //     address: '456 Pine Avenue',
    //     position: 'Security Guard',
    //     locationPreference: '222 Cedar Road',
    //     availability: true,
    //     hourlyPayRate: 19.0,
    // });
    // await employee31.save();
    
    // const employee32 = new Employee({
    //     firstName: 'Henry',
    //     lastName: 'Garcia',
    //     address: '789 Elm Street',
    //     position: 'Security Supervisor',
    //     locationPreference: '111 Oak Lane',
    //     availability: true,
    //     hourlyPayRate: 24.0,
    // });
    // await employee32.save();
    
    // const employee33 = new Employee({
    //     firstName: 'Aria',
    //     lastName: 'Martinez',
    //     address: '333 Cedar Lane',
    //     position: 'Security Officer',
    //     locationPreference: '789 Maple Avenue',
    //     availability: false,
    //     hourlyPayRate: 22.5,
    // });
    // await employee33.save();
    
    // const employee34 = new Employee({
    //     firstName: 'Jack',
    //     lastName: 'Johnson',
    //     address: '777 Pine Street',
    //     position: 'Security Guard',
    //     locationPreference: '555 Elm Road',
    //     availability: true,
    //     hourlyPayRate: 20.5,
    // });
    // await employee34.save();
    
    // const employee35 = new Employee({
    //     firstName: 'Evelyn',
    //     lastName: 'Thompson',
    //     address: '234 Elm Avenue',
    //     position: 'Lead Security Officer',
    //     locationPreference: '333 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 28.0,
    // });
    // await employee35.save();
    
    // const employee36 = new Employee({
    //     firstName: 'Oliver',
    //     lastName: 'Smith',
    //     address: '876 Cedar Street',
    //     position: 'Security Guard',
    //     locationPreference: '123 Maple Lane',
    //     availability: true,
    //     hourlyPayRate: 21.0,
    // });
    // await employee36.save();
    
    // const employee37 = new Employee({
    //     firstName: 'Ella',
    //     lastName: 'Anderson',
    //     address: '111 Oak Road',
    //     position: 'Security Officer',
    //     locationPreference: '555 Cedar Avenue',
    //     availability: true,
    //     hourlyPayRate: 19.5,
    // });
    // await employee37.save();
    
    // const employee38 = new Employee({
    //     firstName: 'William',
    //     lastName: 'Davis',
    //     address: '789 Elm Lane',
    //     position: 'Security Supervisor',
    //     locationPreference: '654 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 23.0,
    // });
    // await employee38.save();
    
    // const employee39 = new Employee({
    //     firstName: 'Mia',
    //     lastName: 'Moore',
    //     address: '456 Pine Lane',
    //     position: 'Lead Security Officer',
    //     locationPreference: '987 Cedar Street',
    //     availability: true,
    //     hourlyPayRate: 27.0,
    // });
    // await employee39.save();
    
    // const employee40 = new Employee({
    //     firstName: 'James',
    //     lastName: 'Roberts',
    //     address: '123 Elm Avenue',
    //     position: 'Security Officer',
    //     locationPreference: '456 Maple Road',
    //     availability: true,
    //     hourlyPayRate: 20.0,
    // });
    // await employee40.save();
    
    // const employee41 = new Employee({
    //     firstName: 'Charlotte',
    //     lastName: 'Brown',
    //     address: '777 Oak Street',
    //     position: 'Security Guard',
    //     locationPreference: '111 Cedar Lane',
    //     availability: true,
    //     hourlyPayRate: 22.0,
    // });
    // await employee41.save();
    
    // const employee42 = new Employee({
    //     firstName: 'Henry',
    //     lastName: 'Williams',
    //     address: '555 Elm Lane',
    //     position: 'Security Supervisor',
    //     locationPreference: '987 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 24.0,
    // });
    // await employee42.save();
    
    // const employee43 = new Employee({
    //     firstName: 'Aria',
    //     lastName: 'Lopez',
    //     address: '456 Pine Avenue',
    //     position: 'Security Officer',
    //     locationPreference: '654 Cedar Avenue',
    //     availability: true,
    //     hourlyPayRate: 19.0,
    // });
    // await employee43.save();
    
    // const employee44 = new Employee({
    //     firstName: 'Liam',
    //     lastName: 'Garcia',
    //     address: '789 Elm Street',
    //     position: 'Lead Security Officer',
    //     locationPreference: '222 Elm Road',
    //     availability: true,
    //     hourlyPayRate: 25.0,
    // });
    // await employee44.save();
    
    // const employee45 = new Employee({
    //     firstName: 'Sophia',
    //     lastName: 'Martinez',
    //     address: '333 Cedar Lane',
    //     position: 'Security Guard',
    //     locationPreference: '444 Pine Lane',
    //     availability: false,
    //     hourlyPayRate: 22.5,
    // });
    // await employee45.save();
    
    // const employee46 = new Employee({
    //     firstName: 'Lucas',
    //     lastName: 'Johnson',
    //     address: '777 Pine Street',
    //     position: 'Security Officer',
    //     locationPreference: '555 Oak Road',
    //     availability: true,
    //     hourlyPayRate: 20.5,
    // });
    // await employee46.save();
    
    // const employee47 = new Employee({
    //     firstName: 'Olivia',
    //     lastName: 'Thompson',
    //     address: '234 Elm Avenue',
    //     position: 'Lead Security Officer',
    //     locationPreference: '333 Pine Road',
    //     availability: false,
    //     hourlyPayRate: 28.0,
    // });
    // await employee47.save();
    
    // const employee48 = new Employee({
    //     firstName: 'Elijah',
    //     lastName: 'Smith',
    //     address: '876 Cedar Street',
    //     position: 'Security Guard',
    //     locationPreference: '123 Elm Lane',
    //     availability: true,
    //     hourlyPayRate: 21.0,
    // });
    // await employee48.save();
    
    // const employee49 = new Employee({
    //     firstName: 'Ava',
    //     lastName: 'Davis',
    //     address: '111 Oak Road',
    //     position: 'Security Officer',
    //     locationPreference: '555 Pine Street',
    //     availability: true,
    //     hourlyPayRate: 19.5,
    // });
    // await employee49.save();
    
    // const employee50 = new Employee({
    //     firstName: 'William',
    //     lastName: 'Moore',
    //     address: '789 Elm Lane',
    //     position: 'Security Supervisor',
    //     locationPreference: '654 Cedar Avenue',
    //     availability: false,
    //     hourlyPayRate: 23.0,
    // });

    // await employee50.save();    

    // Create a Client instance
    const client1 = new Client({
        establishmentName: 'Cyclorama',
        firstName: 'John',
        lastName: 'Doe',
        contractAddress: '535 Tremont Street',
        contractTotal: 50000,
    });

    // Save the Client instance to the database
    await client1.save();

    // const client2 = new Client({
    //     establishmentName: 'Security Solutions Inc.',
    //     firstName: 'Jane',
    //     lastName: 'Smith',
    //     contractAddress: '123 Main Street',
    //     contractTotal: 75000,
    // });

    // await client2.save();

    // const client3 = new Client({
    //     establishmentName: 'Safe Haven Mall',
    //     firstName: 'Robert',
    //     lastName: 'Johnson',
    //     contractAddress: '789 Pine Road',
    //     contractTotal: 60000,
    // });

    // await client3.save();

    // const client4 = new Client({
    //     establishmentName: 'City Park Apartments',
    //     firstName: 'Maria',
    //     lastName: 'Garcia',
    //     contractAddress: '111 Cedar Avenue',
    //     contractTotal: 35000,
    // });

    // await client4.save();

    // const client5 = new Client({
    //     establishmentName: 'TechHub Inc.',
    //     firstName: 'Michael',
    //     lastName: 'Davis',
    //     contractAddress: '456 Oak Avenue',
    //     contractTotal: 80000,
    // });

    // await client5.save();

    // const client6 = new Client({
    //     establishmentName: 'Sunset Mall',
    //     firstName: 'Sophia',
    //     lastName: 'Johnson',
    //     contractAddress: '789 Maple Road',
    //     contractTotal: 60000,
    // });

    // await client6.save();

    // const client7 = new Client({
    //     establishmentName: 'ABC Corporation',
    //     firstName: 'Daniel',
    //     lastName: 'Williams',
    //     contractAddress: '222 Elm Street',
    //     contractTotal: 45000,
    // });

    // await client7.save();

    // const client8 = new Client({
    //     establishmentName: 'XYZ Enterprises',
    //     firstName: 'Melissa',
    //     lastName: 'Brown',
    //     contractAddress: '333 Oak Avenue',
    //     contractTotal: 60000,
    // });

    // await client8.save();

    // const client9 = new Client({
    //     establishmentName: 'Sunrise Hospital',
    //     firstName: 'David',
    //     lastName: 'Taylor',
    //     contractAddress: '444 Pine Road',
    //     contractTotal: 70000,
    // });

    // await client9.save();

    // const client10 = new Client({
    //     establishmentName: 'Riverfront Apartments',
    //     firstName: 'Emily',
    //     lastName: 'Miller',
    //     contractAddress: '555 Cedar Lane',
    //     contractTotal: 55000,
    // });

    // await client10.save();

    // Create a Location instance
    const location1 = new Location({
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States of America',
        contractAddress: '535 Tremont Street',
    });

    // Save the Location instance to the database
    await location1.save();

    // const location2 = new Location({
    //     city: 'New York',
    //     state: 'New York',
    //     country: 'United States of America',
    //     contractAddress: '123 Main Street',
    // });

    // await location2.save();

    // const location3 = new Location({
    //     city: 'Chicago',
    //     state: 'Illinois',
    //     country: 'United States of America',
    //     contractAddress: '789 Pine Road',
    // });

    // await location3.save();

    // const location4 = new Location({
    //     city: 'Los Angeles',
    //     state: 'California',
    //     country: 'United States of America',
    //     contractAddress: '456 Cedar Avenue',
    // });

    // await location4.save();

    // const location5 = new Location({
    //     city: 'San Francisco',
    //     state: 'California',
    //     country: 'United States of America',
    //     contractAddress: '555 Elm Lane',
    // });

    // await location5.save();

    // const location6 = new Location({
    //     city: 'Miami',
    //     state: 'Florida',
    //     country: 'United States of America',
    //     contractAddress: '222 Oak Road',
    // });

    // await location6.save();

    // const location7 = new Location({
    //     city: 'Dallas',
    //     state: 'Texas',
    //     country: 'United States of America',
    //     contractAddress: '333 Pine Street',
    // });

    // await location7.save();

    // const location8 = new Location({
    //     city: 'Seattle',
    //     state: 'Washington',
    //     country: 'United States of America',
    //     contractAddress: '777 Cedar Lane',
    // });

    // await location8.save();

    // const location9 = new Location({
    //     city: 'Atlanta',
    //     state: 'Georgia',
    //     country: 'United States of America',
    //     contractAddress: '888 Elm Street',
    // });

    // // Save the Location instance to the database
    // await location9.save();

    // // Create a Location instance
    // const location10 = new Location({
    //     city: 'Denver',
    //     state: 'Colorado',
    //     country: 'United States of America',
    //     contractAddress: '999 Pine Lane',
    // });

    // // Save the Location instance to the database
    // await location10.save();

};

const run = async () => {
    await main();
    // db.close();
};

run();
