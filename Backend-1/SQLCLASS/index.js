import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'My_app',
  password:'India@12345678'
});

// to run conection
try{
    const [rows] = await connection.query("SHOW TABLES");
    console.log(rows);
    }catch(err){
        console.log(err);
    }

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };
}

