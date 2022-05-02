import { db } from "../db/database";

const { pool } = require("../db/database");

const users = [
    {
        id:'admin',
        password:'admin',
        reservation:'2020-11-20',
    }
]


const ReservationUsers = [
    {
        customer_id:'admin',
        date:'2020-11-20',
        time:'18:06',
    }
]

//DB연결 없이 사용되는 임시 사용코드
//export async function findUserById(user:any){
//    const {id} = user
//    const result = users.filter( user=> user.id === id)
//   return result[0]
//}





//DB연결 시 사용될 코드
 export async function findUserById(user:any){
   const {id } = user
     return db.execute('SELECT * from user where id=?',
     [id]).then((result:any)=>{
         //console.log(result);
         return result[0][0];
     })
 }




