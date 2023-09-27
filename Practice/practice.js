// const { promises } = require('dns');
// const EventEmitter = require('events');

// const Emitter = new EventEmitter();


//     Emitter.on("order pizza",(size,type) => {
//          console.log(`Order received pizza ordred + ${size} and + ${type}`)});

//     Emitter.emit("order pizza","Xlarge","fruitsdemere");


//     // Promises practice //

//     function CartOrder(cart){
//           const p = new Promise(function(resolved,rejected){
//                if(order = true){
//                     resolved() ;
//                }else{
//                     rejected() ;
//                }
//           })
//           return p ;
//     }

//     // express routes //

//     const express = require('express');

//     const app = express();

//     const Monster = {
//      '1':{
//           name:"gromp",
//           health: "lowHp",
//      },
//      '2':{
//           name:"wolves",
//           health:"FullHp",
//      }
//     }

//     const monsterRouter = express.Router(); // Create an instance of a router for monsterRouter

//     app.use('/Monster' , monsterRouter); // Mount it means we want this to be our starting / route so all monsterRoute would start with /'Monster'//

//     monsterRouter.get('/:id' , (req , res , next)=>{
//      // monsterRouter.get('/:id') === app.get('/monsters/:id')
//      const monster = Monster[req.params.id];
//           if(monster){
//                res.send(monster);
//           }else{
//                res.status(404).send();
//           }
//     });
// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const xss = require('xss');
// const app = express();
// // parse the body data
// app.use(express.json());
// // Define route for user registration
// app.post('/register', [
//   body('name').notEmpty().trim().escape(),
//   body('email').isEmail().normalizeEmail(),
//   body('password').isLength({ min: 6 }),
// ], (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   // Sanitize the user input
//   const { name, email, password } = req.body;
//   const sanitizedData = {
//     name: xss(name),
//     email: xss(email),
//     password: xss(password),
//   };

//   // Store the sanitized data in a database or perform further actions

//   // Return success response
//   return res.status(200).json({ message: 'User registered successfully' });
// });

// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json())

// // Secret key for JWT
// const secretKey = 'your-secret-key';

// // Sample user data (in production, this would be fetched from a database)
// const users = [
//   { id: 1, username: 'user1', password: 'password1', role: 'user' },
//   { id: 2, username: 'admin', password: 'admin123', role: 'admin' },
// ];

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Find the user based on the provided username
//   const user = users.find((u) => u.username === username);

//   // Check if the user exists and the password is correct
//   if (!user || user.password !== password) {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }

//   // Generate a JWT token with the user's ID and role
//   const token = jwt.sign({ id: user.id, role: user.role }, secretKey);

//   // Return the token as the login response
//   return res.status(200).json({ token });
// });

// // Protected route
// app.get('/protected', (req, res) => {
//   // Extract the token from the Authorization header
//   const token = req.headers.authorization.split(' ')[1];

//   try {
//     // Verify and decode the JWT token
//     const decoded = jwt.verify(token, secretKey);

//     // Access the user's ID and role from the decoded token
//     const userId = decoded.id;
//     const userRole = decoded.role;

//     // Perform authorization based on the user's role
//     if (userRole === 'admin') {
//       return res.status(200).json({ message: 'Access granted for admin user' });
//     } else {
//       return res.status(403).json({ error: 'Access denied' });
//     }
//   } catch (error) {
//     return res.status(401).json({ error: 'Invalid token' });
//   }
// });

// Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


