const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(csurf({ cookie: true }));

// Secret token
const secretKey = 'your-secret-key';

// Validation and Sanitization Middleware
const validateLoginForm = [
  body('username').notEmpty().trim().escape(),
  body('password').notEmpty().trim().escape(),
];

// Sample user data (in production, this would be fetched from a database)
const users = [
  { id: 1, username: 'admin', password: 'password', role: 'admin' },
  { id: 2, username: 'user', password: '123456', role: 'user' },
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/login', validateLoginForm, (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { username, password } = req.body;

  // Check if the user exists and the password is correct
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Generate a JWT token with the user's ID and role
    const token = jwt.sign({ id: user.id, role: user.role }, secretKey);
    req.session.isAuthenticated = true;
    res.cookie('jwtToken', token); // Store the token in a cookie
    return res.redirect('/dashboard');
  } else {
    return res.redirect('/');
  }
});

app.get('/dashboard', (req, res) => {
  // Check if the user is authenticated using sessions
  if (req.session.isAuthenticated) {
    // Extract the token from the cookie
    const token = req.cookies.jwtToken;
    
    try {
      // Verify and decode the JWT token
      const decoded = jwt.verify(token, secretKey);
      
      // Access the user's ID and role from the decoded token
      const userRole = decoded.role;

      // Perform authorization based on the user's role
      if (userRole === 'admin') {
        return res.render('dashboard', { user: 'Admin' });
      } else {
        return res.render('dashboard', { user: 'User' });
      }
    } catch (error) {
      return res.redirect('/');
    }
  } else {
    return res.redirect('/');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


