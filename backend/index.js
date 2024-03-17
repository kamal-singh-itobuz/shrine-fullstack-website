import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/homeRoutes.js';
import aboutusRoutes from './routes/aboutusRoutes.js';
const PORT = process.env.PORT || 8082;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/home', homeRoutes);
app.use('/aboutus', aboutusRoutes);

app.listen(PORT, () => console.log(`Server is listeneing on the port ${PORT}`));

