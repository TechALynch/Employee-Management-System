const db = require('../db');
const { Employee } = require('../models/index');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    // Create an Employee instance
    const employee1 = new Employee({
        firstName: 'Anthony',
        lastName: 'Johnston',
        tel: '617-384-2045',
        email: 'anthony.johnston001@gmail.com',
        address: '108 Oak Street',
        position: 'Lead Security Officer',
        locationPreference: '535 Tremont Street',
        availability: false,
        hourlyPayRate: 25.0,
    });

    // Save the Employee instance to the database
    await employee1.save();

     const employee2 = new Employee({
        firstName: 'John',
        lastName: 'Smith',
        tel: '403-204-1246',
        email: 'John.SmithweF@gmail.com',
        address: '123 Elm Street',
        position: 'Security Officer',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 20.0,
    });

    await employee2.save();

    const employee3 = new Employee({
        firstName: 'Emily',
        lastName: 'Johnson',
        tel: '406-536-3613',
        email: 'Emily.Johnson@gmail.com',
        address: '456 Oak Avenue',
        position: 'Security Supervisor',
        locationPreference: '535 Tremont Street',
        availability: false,
        hourlyPayRate: 22.0,
    });

    await employee3.save();

    const employee4 = new Employee({
        firstName: 'Michael',
        lastName: 'Davis',
        tel: '582-152-2042',
        email: 'Michael.Davis@gmail.com',
        address: '789 Maple Lane',
        position: 'Security Guard',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 18.0,
    });

    await employee4.save();

    const employee5 = new Employee({
        firstName: 'Sarah',
        lastName: 'Anderson',
        tel: '617-283-7298',
        email: 'Sarah.Anderson@gmail.com',
        address: '234 Oak Road',
        position: 'Security Officer',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 21.5,
    });

    await employee5.save();

    const employee6 = new Employee({
        firstName: 'William',
        lastName: 'Brown',
        tel: '617-382-9145',
        email: 'William.Brown@gmail.com',
        address: '111 Pine Road',
        position: 'Security Supervisor',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 24.0,
    });

    await employee6.save();

    const employee7 = new Employee({
        firstName: 'Robert',
        lastName: 'Wilson',
        tel: '291-283-4824',
        email: 'Robert.Wilson@gmail.com',
        address: '321 Oak Street',
        position: 'Security Guard',
        locationPreference: '535 Tremont Street',
        availability: false,
        hourlyPayRate: 20.5,
    });

    await employee7.save();

    const employee8 = new Employee({
        firstName: 'Jennifer',
        lastName: 'Lee',
        tel: '508-283-6277',
        email: 'Jennifer.Lee@gmail.com',
        address: '987 Elm Lane',
        position: 'Senior Security Officer',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 23.0,
    });

    await employee8.save();

    const employee9 = new Employee({
        firstName: 'Samuel',
        lastName: 'Garcia',
        tel: '617-456-7890',
        email: 'Samuel.Garcia@gmail.com',
        address: '654 Pine Road',
        position: 'Security Officer',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 19.0,
    });

    await employee9.save();

    const employee10 = new Employee({
        firstName: 'Megan',
        lastName: 'Harris',
        tel: '617-123-4567',
        email: 'Megan.Harris@gmail.com',
        address: '456 Cedar Street',
        position: 'Security Supervisor',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 25.0,
    });

    await employee10.save();

    const employee11 = new Employee({
        firstName: 'David',
        lastName: 'Martin',
        tel: '617-890-1234',
        email: 'David.Martin@gmail.com',
        address: '876 Oak Road',
        position: 'Lead Security Officer',
        locationPreference: '535 Tremont Street',
        availability: false,
        hourlyPayRate: 27.0,
    });

    await employee11.save();

    const employee12 = new Employee({
        firstName: 'Sophia',
        lastName: 'Jackson',
        tel: '617-555-6789',
        email: 'Sophia.Jackson@gmail.com',
        address: '567 Elm Avenue',
        position: 'Security Officer',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 20.0,
    });

    await employee12.save();

    const employee13 = new Employee({
        firstName: 'Liam',
        lastName: 'Moore',
        tel: '617-333-2222',
        email: 'Liam.Moore@gmail.com',
        address: '777 Pine Road',
        position: 'Security Supervisor',
        locationPreference: '535 Tremont Street',
        availability: true,
        hourlyPayRate: 24.5,
    });

    await employee13.save();

    const employee14 = new Employee({
        firstName: 'Olivia',
        lastName: 'Thomas',
        tel: '617-777-5555',
        email: 'Olivia.Thomas@gmail.com',
        address: '654 Oak Lane',
        position: 'Security Guard',
        locationPreference: '123 Main Street',
        availability: false,
        hourlyPayRate: 21.0,
    });

    await employee14.save();

    const employee15 = new Employee({
        firstName: 'Noah',
        lastName: 'Hernandez',
        tel: '617-999-8888',
        email: 'Noah.Hernandez@gmail.com',
        address: '111 Maple Road',
        position: 'Security Officer',
        locationPreference: '123 Main Street',
        availability: true,
        hourlyPayRate: 22.0,
    });

    await employee15.save();

    const employee16 = new Employee({
        firstName: 'Emma',
        lastName: 'White',
        tel: '617-444-3333',
        email: 'Emma.White@gmail.com',
        address: '123 Pine Street',
        position: 'Senior Security Officer',
        locationPreference: '123 Main Street',
        availability: false,
        hourlyPayRate: 26.0,
    });

    await employee16.save();

    const employee17 = new Employee({
        firstName: 'Ella',
        lastName: 'Wilson',
        tel: '617-666-9999',
        email: 'Ella.Wilson@gmail.com',
        address: '456 Cedar Avenue',
        position: 'Security Officer',
        locationPreference: '123 Main Street',
        availability: true,
        hourlyPayRate: 20.0,
    });

    await employee17.save();

    const employee18 = new Employee({
        firstName: 'James',
        lastName: 'Roberts',
        tel: '617-222-1111',
        email: 'James.Roberts@gmail.com',
        address: '789 Pine Lane',
        position: 'Lead Security Officer',
        locationPreference: '123 Main Street',
        availability: true,
        hourlyPayRate: 25.0,
    });

    await employee18.save();

    const employee19 = new Employee({
        firstName: 'Ava',
        lastName: 'Davis',
        tel: '123-456-7890',
        email: 'Ava.Davis@gmail.com',
        address: '234 Maple Street',
        position: 'Security Supervisor',
        locationPreference: '123 Main Street',
        availability: false,
        hourlyPayRate: 22.0,
    });

    await employee19.save();

    const employee20 = new Employee({
        firstName: 'Daniel',
        lastName: 'Clark',
        tel: '234-567-8901',
        email: 'Daniel.Clark@gmail.com',
        address: '555 Elm Lane',
        position: 'Security Guard',
        locationPreference: '123 Main Street',
        availability: true,
        hourlyPayRate: 19.5,
    });

    await employee20.save();

    const employee21 = new Employee({
        firstName: 'Grace',
        lastName: 'Smith',
        tel: '345-678-9012',
        email: 'Grace.Smith@gmail.com',
        address: '123 Pine Street',
        position: 'Senior Security Officer',
        locationPreference: '123 Main Street',
        availability: true,
        hourlyPayRate: 26.0,
    });
    await employee21.save();
    
    const employee22 = new Employee({
        firstName: 'Liam',
        lastName: 'Roberts',
        tel: '456-789-9273',
        email: 'Liam.Roberts@gmail.com',
        address: '987 Cedar Road',
        position: 'Security Officer',
        locationPreference: '789 Pine Road',
        availability: true,
        hourlyPayRate: 20.0,
    });
    await employee22.save();
    
    const employee23 = new Employee({
        firstName: 'Mia',
        lastName: 'Johnson',
        tel: '567-890-1234',
        email: 'Mia.Johnson@gmail.com',
        address: '654 Maple Lane',
        position: 'Security Supervisor',
        locationPreference: '789 Pine Road',
        availability: false,
        hourlyPayRate: 23.0,
    });
    await employee23.save();
    
    const employee24 = new Employee({
        firstName: 'Oliver',
        lastName: 'Davis',
        tel: '678-901-2345',
        email: 'Oliver.Davis@gmail.com',
        address: '333 Elm Street',
        position: 'Security Guard',
        locationPreference: '789 Pine Road',
        availability: true,
        hourlyPayRate: 21.5,
    });
    await employee24.save();
    
    const employee25 = new Employee({
        firstName: 'Emma',
        lastName: 'Wilson',
        tel: '789-832-3456',
        email: 'Emma.Wilson@gmail.com',
        address: '111 Cedar Lane',
        position: 'Lead Security Officer',
        locationPreference: '789 Pine Road',
        availability: false,
        hourlyPayRate: 27.0,
    });
    await employee25.save();
    
    const employee26 = new Employee({
        firstName: 'Noah',
        lastName: 'Brown',
        tel: '890-123-4567',
        email: 'Noah.Brown@gmail.com',
        address: '876 Elm Avenue',
        position: 'Security Officer',
        locationPreference: '789 Pine Road',
        availability: true,
        hourlyPayRate: 20.0,
    });
    await employee26.save();
    
    const employee27 = new Employee({
        firstName: 'Sophia',
        lastName: 'Johnson',
        tel: '987-654-3210',
        email: 'Sophia.Johnson@gmail.com',
        address: '777 Pine Road',
        position: 'Security Supervisor',
        locationPreference: '789 Pine Road',
        availability: true,
        hourlyPayRate: 24.5,
    });
    await employee27.save();
    
    const employee28 = new Employee({
        firstName: 'Liam',
        lastName: 'Roberts',
        tel: '876-543-2109',
        email: 'Liam.Roberts@gmail.com',
        address: '654 Oak Lane',
        position: 'Security Guard',
        locationPreference: '456 Cedar Avenue',
        availability: false,
        hourlyPayRate: 21.0,
    });
    await employee28.save();
    
    const employee29 = new Employee({
        firstName: 'Olivia',
        lastName: 'Thomas',
        tel: '765-432-1098',
        email: 'Olivia.Thomas@gmail.com',
        address: '111 Maple Road',
        position: 'Security Officer',
        locationPreference: '456 Cedar Avenue',
        availability: true,
        hourlyPayRate: 22.0,
    });
    await employee29.save();
    
    const employee30 = new Employee({
        firstName: 'Noah',
        lastName: 'Hernandez',
        tel: '654-321-2845',
        email: 'Noah.Hernandez@gmail.com',
        address: '123 Pine Street',
        position: 'Senior Security Officer',
        locationPreference: '456 Cedar Avenue',
        availability: false,
        hourlyPayRate: 26.0,
    });

    await employee30.save();

    const employee31 = new Employee({
        firstName: 'Isabella',
        lastName: 'Lopez',
        tel: '234-381-8901',
        email: 'Isabella.Lopez@gmail.com',
        address: '456 Pine Avenue',
        position: 'Security Guard',
        locationPreference: '456 Cedar Avenue',
        availability: true,
        hourlyPayRate: 19.0,
    });
    await employee31.save();
    
    const employee32 = new Employee({
        firstName: 'Henry',
        lastName: 'Garcia',
        tel: '425-555-1234',
        email: 'Henry.Garcia@gmail.com',
        address: '789 Elm Street',
        position: 'Security Supervisor',
        locationPreference: '555 Elm Lane',
        availability: true,
        hourlyPayRate: 24.0,
    });
    await employee32.save();
    
    const employee33 = new Employee({
        firstName: 'Aria',
        lastName: 'Martinez',
        tel: '312-555-5678',
        email: 'Aria.Martinez@gmail.com',
        address: '333 Cedar Lane',
        position: 'Security Officer',
        locationPreference: '555 Elm Lane',
        availability: false,
        hourlyPayRate: 22.5,
    });
    await employee33.save();
    
    const employee34 = new Employee({
        firstName: 'Jack',
        lastName: 'Johnson',
        tel: '818-555-9876',
        email: 'Jack.Johnson@gmail.com',
        address: '777 Pine Street',
        position: 'Security Guard',
        locationPreference: '555 Elm Road',
        availability: true,
        hourlyPayRate: 20.5,
    });
    await employee34.save();
    
    const employee35 = new Employee({
        firstName: 'Evelyn',
        lastName: 'Thompson',
        tel: '202-555-6543',
        email: 'Evelyn.Thompson@gmail.com',
        address: '234 Elm Avenue',
        position: 'Lead Security Officer',
        locationPreference: '222 Oak Road',
        availability: false,
        hourlyPayRate: 28.0,
    });
    await employee35.save();
    
    const employee36 = new Employee({
        firstName: 'Oliver',
        lastName: 'Smith',
        tel: '303-555-8765',
        email: 'Oliver.Smith@gmail.com',
        address: '876 Cedar Street',
        position: 'Security Guard',
        locationPreference: '222 Oak Road',
        availability: true,
        hourlyPayRate: 21.0,
    });
    await employee36.save();
    
    const employee37 = new Employee({
        firstName: 'Ella',
        lastName: 'Anderson',
        tel: '415-555-2345',
        email: 'Ella.Anderson@gmail.com',
        address: '111 Oak Road',
        position: 'Security Officer',
        locationPreference: '222 Oak Road',
        availability: true,
        hourlyPayRate: 19.5,
    });
    await employee37.save();
    
    const employee38 = new Employee({
        firstName: 'William',
        lastName: 'Davis',
        tel: '512-555-7890',
        email: 'William.Davis@gmail.com',
        address: '789 Elm Lane',
        position: 'Security Supervisor',
        locationPreference: '222 Oak Road',
        availability: false,
        hourlyPayRate: 23.0,
    });
    await employee38.save();
    
    const employee39 = new Employee({
        firstName: 'Mia',
        lastName: 'Moore',
        tel: '617-555-5432',
        email: 'Mia.Moore@gmail.com',
        address: '456 Pine Lane',
        position: 'Lead Security Officer',
        locationPreference: '222 Oak Road',
        availability: true,
        hourlyPayRate: 27.0,
    });
    await employee39.save();
    
    const employee40 = new Employee({
        firstName: 'James',
        lastName: 'Roberts',
        tel: '305-555-8901',
        email: 'James.Roberts@gmail.com',
        address: '123 Elm Avenue',
        position: 'Security Officer',
        locationPreference: '333 Pine Street',
        availability: true,
        hourlyPayRate: 20.0,
    });
    await employee40.save();
    
    const employee41 = new Employee({
        firstName: 'Charlotte',
        lastName: 'Brown',
        tel: '408-555-4321',
        email: 'Charlotte.Brown@gmail.com',
        address: '777 Oak Street',
        position: 'Security Guard',
        locationPreference: '333 Pine Street',
        availability: true,
        hourlyPayRate: 22.0,
    });
    await employee41.save();
    
    const employee42 = new Employee({
        firstName: 'Henry',
        lastName: 'Williams',
        tel: '213-555-6789',
        email: 'Henry.Williams@gmail.com',
        address: '555 Elm Lane',
        position: 'Security Supervisor',
        locationPreference: '333 Pine Street',
        availability: false,
        hourlyPayRate: 24.0,
    });
    await employee42.save();
    
    const employee43 = new Employee({
        firstName: 'Aria',
        lastName: 'Lopez',
        tel: '404-555-2109',
        email: 'Aria.Lopez@gmail.com',
        address: '456 Pine Avenue',
        position: 'Security Officer',
        locationPreference: '777 Cedar Lane',
        availability: true,
        hourlyPayRate: 19.0,
    });
    await employee43.save();
    
    const employee44 = new Employee({
        firstName: 'Liam',
        lastName: 'Garcia',
        tel: '510-555-3456',
        email: 'Liam.Garcia@gmail.com',
        address: '789 Elm Street',
        position: 'Lead Security Officer',
        locationPreference: '777 Cedar Lane',
        availability: true,
        hourlyPayRate: 25.0,
    });
    await employee44.save();
    
    const employee45 = new Employee({
        firstName: 'Sophia',
        lastName: 'Martinez',
        tel: '786-555-4612',
        email: 'Sophia.Martinez@gmail.com',
        address: '333 Cedar Lane',
        position: 'Security Guard',
        locationPreference: '777 Cedar Lane',
        availability: false,
        hourlyPayRate: 22.5,
    });
    await employee45.save();
    
    const employee46 = new Employee({
        firstName: 'Lucas',
        lastName: 'Johnson',
        tel: '702-555-5678',
        email: 'Lucas.Johnson@gmail.com',
        address: '777 Pine Street',
        position: 'Security Officer',
        locationPreference: '777 Cedar Lane',
        availability: true,
        hourlyPayRate: 20.5,
    });
    await employee46.save();
    
    const employee47 = new Employee({
        firstName: 'Olivia',
        lastName: 'Thompson',
        tel: '305-555-5432',
        email: 'Olivia.Thompson@gmail.com',
        address: '234 Elm Avenue',
        position: 'Lead Security Officer',
        locationPreference: '888 Elm Street',
        availability: false,
        hourlyPayRate: 28.0,
    });
    await employee47.save();
    
    const employee48 = new Employee({
        firstName: 'Elijah',
        lastName: 'Smith',
        tel: '212-555-2345',
        email: 'Elijah.Smith@gmail.com',
        address: '876 Cedar Street',
        position: 'Security Guard',
        locationPreference: '888 Elm Street',
        availability: true,
        hourlyPayRate: 21.0,
    });
    await employee48.save();
    
    const employee49 = new Employee({
        firstName: 'Ava',
        lastName: 'Davis',
        tel: '972-555-8765',
        email: 'Ava.Davis@gmail.com',
        address: '111 Oak Road',
        position: 'Security Officer',
        locationPreference: '888 Elm Street',
        availability: true,
        hourlyPayRate: 19.5,
    });
    await employee49.save();
    
    const employee50 = new Employee({
        firstName: 'William',
        lastName: 'Moore',
        tel: '213-555-1098',
        email: 'William.Moore@gmail.com',
        address: '789 Elm Lane',
        position: 'Security Supervisor',
        locationPreference: '999 Pine Lane',
        availability: false,
        hourlyPayRate: 23.0,
    });
    
    await employee50.save();    

};

const run = async () => {
    await main();
    db.close();
};

run();
