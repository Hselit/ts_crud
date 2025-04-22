import express from 'express';
import actorRoute from './routes/actorRoute';

const app = express();

app.use(express.json());

app.use('/api/actor',actorRoute);

const port = 3000;
app.listen(port,()=>{
   console.log(`Server running at ${port}`);
});