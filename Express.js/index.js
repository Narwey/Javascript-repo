    // basic express application
    
    const express = require('express');

    const app = express();

    const port = 4000 ;

    app.listen( port , () => 
        console.log(`our server is running on ${port}`)
    );

    // lets create the get method 

    // app.get('/getRequest' , (req,res)=>{
    //     res.send('Hello my name is anouar and this is get method'); 
    // });

    app.post ('/postRequest' , (req,res)=> {
        res.send('Hello This is POST METHOD')
    });