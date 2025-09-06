import { Router } from 'express';
const router = Router();

// For now, send plain text so we don't need views yet
router.get('/', (req, res) => {
  res.send('Home OK — views coming next 👋');
});

export default router;