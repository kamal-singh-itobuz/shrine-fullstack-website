import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/homeRoutes.js';
import aboutusRoutes from './routes/aboutusRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import pastorRoutes from './routes/pastorRoutes.js';
import videoListRoutes from './routes/videoListRoutes.js';
import eventsRoutes from './routes/eventsRoutes.js';
import eventsDetailsRoutes from './routes/eventsDetailsRoutes.js';
const PORT = process.env.PORT || 8082;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/home', homeRoutes);
app.use('/aboutus', aboutusRoutes);
app.use('/faq', faqRoutes);
app.use('/gallery', galleryRoutes);
app.use('/pastor', pastorRoutes);
app.use('/video-list', videoListRoutes);
app.use('/events', eventsRoutes);
app.use('/event-details', eventsDetailsRoutes);

app.listen(PORT, () => console.log(`Server is listeneing on the port ${PORT}`));

