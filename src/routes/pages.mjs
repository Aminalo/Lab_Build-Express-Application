import { Router } from 'express';

const router = Router();

// Home (renders a view)
router.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home',
    description: 'Express lab: EJS templates, route params, middleware, and static CSS.'
  });
});

// Contact (GET renders a basic form)
router.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact',
    description: 'Send a message using the form.'
  });
});

// Contact (POST logs the payload and renders a success page)
router.post('/contact', (req, res) => {
  console.log('📨 Contact form:', req.body);
  res.render('success', {
    pageTitle: 'Submitted',
    data: req.body
  });
});

// Route parameter example (renders a personalized page)
router.get('/greet/:name', (req, res) => {
  res.render('greet', {
    pageTitle: `Hello, ${req.params.name}!`,
    name: req.params.name
  });
});

export default router;