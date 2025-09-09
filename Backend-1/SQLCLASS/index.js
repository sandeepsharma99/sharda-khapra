import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';
import express from 'express';

const app = express();

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'My_app',
  password:'India@12345678'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
/* --- */

app.get("/",(req,res)=>{
  let q = `select count(*) from user`;
  try{
    const [rows] = await connection.query(q);
    console.log(rows);
    }catch(err){
        console.log(err);
        res.send("some error in database")
    }
})



app.listen("3000", ()=>{
  console.log("server is listening on 8080")
})

// to run conection and run query/operations

// try{
//     const [rows] = await connection.query(q,[data]);
//     console.log(rows);
//     }catch(err){
//         console.log(err);
//     }

// connection.end();


// /*  --- inserting new data */
// let q = "INSERT INTO user(id,username, email,password) --VALUES ?";

// let data =[];
// for(let i =1; i<=100; i++){
//   data.push(getRandomUser());  // 100random user data
// }

// let users = [
//              ["01","sand","sandy@gmail.com", "pass123"],
//              ["02","rma","eg@gmail.com", "pass456"]
//             ];
