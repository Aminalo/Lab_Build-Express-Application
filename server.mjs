// Import
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import globalERR from './src/middleware/globalERR.mjs';
import userRoutes from './src/routes/userRoutes.mjs';
import pagesRoutes from './src/routes/pages.mjs';

// ESM __dirname (car on est en .mjs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Env
const app = express();
const PORT = process.env.PORT || 3000;

// View engine (EJS): nos vues sont dans src/views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static (sert /public à la racine)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', pagesRoutes);        // pages + views + download + route params
app.use('/user', userRoutes);     // JSON demo

// 404 simple (pas de view d'erreur pour rester à 4 templates)
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Global error handling
app.use(globalERR);

// Server listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});