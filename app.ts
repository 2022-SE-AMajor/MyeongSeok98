import express  from 'express';
import cors from "cors";

import { login } from './controller/auth';
import { db } from './db/database';

const app = express();

app.use(express.json())
app.use(cors());

app.post('/login', login);


db.getConnection().then((connection)=>console.log('Mysql 연결완료'))

app.listen(process.env.PORT||4000,()=>{
    console.log('4000번 포트에서 대기중');
  })
