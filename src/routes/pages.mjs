import { Router } from 'express';

const router = Router();

// Home: render a view
router.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home',
    description: 'Express lab: EJS templates, route params, middleware, and static CSS.'
  });
});

// Contact (GET): render a simple form
// If redirected with ?submitted=1, show a success banner in the view
router.get('/contact', (req, res) => {
  const submitted = req.query.submitted === '1';
  res.render('contact', {
    pageTitle: 'Contact',
    description: 'Send a message using the form.',
    submitted
  });
});

// Contact (POST): log payload, then redirect (PRG pattern) to avoid resubmission
router.post('/contact', (req, res) => {
  console.log('📨 Contact form:', req.body);
  // Post/Redirect/Get: show success state via query param
  res.redirect('/contact?submitted=1');
});

// Route param: personalized page
router.get('/greet/:name', (req, res) => {
  res.render('greet', {
    pageTitle: `Hello, ${req.params.name}!`,
    name: req.params.name
  });
});

export default router;