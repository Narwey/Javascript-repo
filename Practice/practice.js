const { promises } = require('dns');
const EventEmitter = require('events');

const Emitter = new EventEmitter();


    Emitter.on("order pizza",(size,type) => {
         console.log(`Order received pizza ordred + ${size} and + ${type}`)});

    Emitter.emit("order pizza","Xlarge","fruitsdemere");


    // Promises practice //

    function CartOrder(cart){
          const p = new Promise(function(resolved,rejected){
               if(order = true){
                    resolved() ;
               }else{
                    rejected() ;
               }
          })
          return p ;
    }

    // express routes //

    const express = require('express');

    const app = express();

    const Monster = {
     '1':{
          name:"gromp",
          health: "lowHp",
     },
     '2':{
          name:"wolves",
          health:"FullHp",
     }
    }

    const monsterRouter = express.Router(); // Create an instance of a router for monsterRouter

    app.use('/Monster' , monsterRouter); // Mount it means we want this to be our starting / route so all monsterRoute would start with /'Monster'//

    monsterRouter.get('/:id' , (req , res , next)=>{
     // monsterRouter.get('/:id') === app.get('/monsters/:id')
     const monster = Monster[req.params.id];
          if(monster){
               res.send(monster);
          }else{
               res.status(404).send();
          }
    });
