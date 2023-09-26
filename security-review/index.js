const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

// Middleware

app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false , cookie: {secure: true ,maxAge : 3000000}, rolling: true ,}));
app.use(bodyParser.urlencoded({ extended: true }));

// data 

const users = [
  { id: 1, username: 'admin', passwordHash: '$2b$10$S3zDBk65sT.9O56f1xKkN.n56Uve.l7uV79oFv8lFkZNukMWIjyTum' },
];


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.passwordHash)) {
    req.session.isAuthenticated = true;
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    // Sanitize the error message
    const errorMessage = 'Invalid username or password';
    res.send(escapeHtml(errorMessage)); // Escape HTML to prevent XSS
  }
});

// Function to escape HTML entities
function escapeHtml(unsafe) {
  return unsafe.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}



app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.send(`<h1>Welcome to your profile, ${req.session.username}</h1>`);
  } else {
    res.redirect('/login');
  }
});

// for the logout we need to destroy the session 
app.get('/logout', (req, res) => {
  // Destroy the session on logout
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/');
  });
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
