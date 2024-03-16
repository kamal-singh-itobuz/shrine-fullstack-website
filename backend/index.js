import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/homeRoutes.js';
const PORT = 8082;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/home', homeRoutes);


app.listen(PORT, () => console.log(`Server is listeneing on the port ${PORT}`));

