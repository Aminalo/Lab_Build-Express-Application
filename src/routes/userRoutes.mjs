import { Router } from 'express';
const router = Router();

// Simple JSON route so /user works immediately
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Aminata' }]);
});

export default router;