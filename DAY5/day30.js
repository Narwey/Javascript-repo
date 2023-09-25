const express = require('express');
const path = require('path');
const { BugHandler, Logging } = require('./middle');
const app = express();
const PORT = 3000 ;

let products = [
    { id: 1, name: 'iPhone', price: 1099.99 , description : 'this is an iphone with a good price', image : 'Iphone.jpeg'},
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 , description : 'this is an samsung with a good price',image : 'Samsung.jpeg' },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 , description : 'this is a samsung with a good price', image : 'PS5.jpeg' },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 , description : 'this is a MacBook Pro with a very good price' , image : 'Macbook.jpeg' },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 , description : 'i dont know what is this XD' , image : 'Mavic.jpeg'},
  ];
app.use(express.json());
app.use(Logging);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');



// set Cache-Control and Expires 
app.use('/public', (res, next) => {
    res.set('Cache-Control', 'public, max-age=2628000'); //  a month
    const expire = new Date(Date.now() + 2628000 * 1000);
    res.set('Expires', expire.toUTCString());
    console.log(expire);
    next();
});

// our get request for all product 
app.get('/', ( req , res )=> {
    res.render('home', {products});
});

// our get request for a specific product by ID 
app.get('/products/:id' , ( req , res ) => {
    const id = parseInt(req.params.id);
    const Unique = products.find((x) => x.id === id );
    if(Unique){
        res.render('productdetails',{ products : Unique });    
    }else{
        res.status(404).send("Product majach l dar");
    }
});

app.use(BugHandler);

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });