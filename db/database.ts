import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'localhost',
    user: 'user',
    database: 'reser',
    password: '1111',
})

export const db = pool.promise()
