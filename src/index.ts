import express from 'express';
import userRoutes from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);


const port = 3000;
app.listen(port,()=>{
   console.log(`Server running at ${port}`);
});