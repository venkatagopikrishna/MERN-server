/*const http = require('http');


http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3001, () => console.log("Server live on port 3001"));*/

const fs=require("fs")
/*const filedata=fs.readFileSync('read.txt')
console.log(filedata.toString())
console.log("execution complted:");
fs.readFile('read.txt',function(ferr,filedata){

    if(ferr) return console.error(ferr)
console.log(filedata.toString());
})
    console.log("hi");
    console.log("hello");
    console.log("TATA")
    */
   /*console.log("hi");
   setTimeout(function()
   {
    console.log("bye");
   },5000);
   console.log("mui")*/
   /*console.log("hi");
   setTimeout(()=>
   {
    console.log("bye");
   },5000)
   console.log("mui")*/
   /*
   
   
   
   const net = require('net');

   const server = net.createServer((socket) => {
     
     socket.on('close', () => {
       console.log("Socket closed");
     });
   });
   
 
   server.listen(8000, () => {
     console.log('Server is listening on port 8000');
   });*/





  /* const add=(a,b)=>{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("number must be nono zero");
            }
            return resolve(a+b);
        },3000)
    })
}


add(1,2).then((sum)=>{
    console.log(sum);
    return add(sum,4);
}).then((sum2)=>{
    console.log(sum2);
})*/





/*const value=(str)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof str =='string')
        {
      resolve("Promise Initiated"+str)
        }
        reject("data is not String");

    },2000)
  
  })
}
value("Function 1").then((myvalue)=>{
  console.log(myvalue);
  return value("Function 2")
})
.then((myvalue)=>{
  console.log(myvalue);
})*/



/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server started and running at http://${hostname}:${port}/`);
});*/


/*
const http = require('http');


http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Server is live\n');
}).listen(3001, () => console.log("Server is live"));

   */





// Importing required module 'superagent'
/*
const superagent = require('superagent');

(async () => {
    const data = {
        username: 'raja',
        password: '123456',
        userid: 109
    };

    try {
        const { body } = await superagent.post('http://localhost:8000/user').send(data);
        console.log(body);
    } catch (err) {
        console.log(err.message);
    }
})();*/



/*
const superagent = require('superagent');

(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('http://localhost:8000/user')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message);
    }
})();*/


/*
const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})();
*/




/*
////axios

const axios=require ('axios')
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>console.log(res.data)).catch((err)=>
console.log(err.message || err))*/

/*
const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});*/






/*
const express=require('express')
const app=express()
const port=3001

app.use(express.json())
app.use("/abc",(req,res,next)=>{
    if(req.method=='GET'){
        res.send("This is Get Method Intited")
    }else if(req.method=='POST'){
        res.json({
            message:"POST intiated",
       
        })
    }
        else{
            res.send("INvalid method")
        }
    })

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});
*/
/*
const express=require('express')
const app=express()
const port=3001

app.use(express.json())
app.use("/",(req,res,next)=>{
    setTimeout(()=>{
        
  
    console.log("md");
    next();
},6000)
},
(req,res,next)=>{
    res.send(
        `<div>
            <h1>
                WOW
            </h1>
            <p>
                hiii
            </p>
        </div>`
    );
})
app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});*/


/*
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const reqFunction = (req, res, next) => {
  console.log(`Received a ${req.method} request to API`);
  next();
};

const formDataFun = (req, res, next) => {
  const { name, pass } = req.body;
  if (name && pass) {
    req.name = name;
    req.pass = pass;
  }
  next();
};

const userShow = (req, res) => {
  const name = req.name || "name";
  const pass = req.pass || "pass";
  res.send(`<h3>Name: ${name}, Pass: ${pass}</h3>`); // Use backticks for template literals
};



app.get('/', reqFunction, (req, res) => {
  res.send(`
    <form method="POST" action="/login-auth">
      <input type="text" name="name" required/>
      <input type="password" name="pass" required/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/login-auth', formDataFun, userShow);

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
*/
/*
const express = require('express');
const app = express();
const port = 3001;
const homeApi = require('./routes/home');
const loginApi = require('./routes/login');

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/", homeApi);
app.use("/", loginApi);

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
*/



/*
const express = require('express');
const session=require('express-session');
const app = express();
const port = 3001;
app.use(express.json());
// app.use(session({
//     secret:'itsecret',
//     resave:false,
//     saveUninitialized:true,
// }))//this is my parametres
// app.get('/login',(req,res)=>{
//     req.session.sessionData={name:'raju',userid:1201,email:'raju@gmail.com'};
//     res.send(`<h1>U LOGED IN </h1> <a href="/profile">PROFILE</a>`)
// })
// app.get('/logout',(req,res)=>{
//     req.session.destroy();
//     res.send(`<h1>U LOGED out IN </h1>`)
// })
// app.get('/profile',(req,res)=>{
//     const data= req.session.sessionData ||'No session Found'
//     res.send(`<h1> WELCOME ${data.name}</h1>
//         <p>E-mail is: ${data.email}</p>`);
// })

app.get('/',(req,res)=>{
    try{
    throw new Error(`THrow New Error`);
    }
    catch(err)
    {
        res.status(500).send(`</h1> Error occured</h1>
            <p> ${err.message}</p>`);
    }

})

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
  });*/

/*
  const express=require('express');
  const mongoose=require('mongoose');
  const UserApi=require('./routes/users');
  const app=express();
  const port=3002;
  app.use(express.json());
  const url= "mongodb+srv://gopivantla:MINE3464@cluster0.4jpkeim.mongodb.net/?retryWrites=true&w=majority&ap\pName=Cluster0"
  mongoose.connect(url).then(()=>{
    console.log("Mongoo conected");
  }).catch((err)=>console.log(err));
//users api endpoint,router
  app.use('/users',UserApi);
  app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
  });
      // mongosh "mongodb+srv://cluster0.4jpkeim.mongodb.net/" --apiVersion 1 --username gopivantla
  

    */


      /*
      const express = require('express');
const mongoose = require('mongoose');
const authorApi = require('./routes/author');
const bookApi = require('./routes/book');
const app = express();
const port = 6006;

app.use(express.json());

const url = "mongodb+srv://gopivantla:MINE3464@cluster0.4jpkeim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));

// Author API endpoint, router
app.use('/author', authorApi);
// Book API endpoint, router
app.use('/book', bookApi);

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});*/

/*
const express = require('express');
const mongoose = require('mongoose');
const { gql, ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./routes/resolvers');

const app = express();
const port = 3001;

app.use(express.json());

const url = "mongodb+srv://gopivantla:MINE3464@cluster0.4jpkeim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });

async function StartServer() {
    await server.start();  // Add this line
    server.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`Server is live on port ${port}`);
    });
  

}

StartServer();
*/




//PROJECT
// const express = require('express');
// const mongoose = require('mongoose');
// const { ApolloServer } = require('apollo-server-express');
// const typeDefs = require('./schema');
// const resolvers = require('./routes/resolvers');
// const userApiFromRouter = require('./routes/userRoutes');
// const app = express();
// const port = 3001;

// app.use(express.json());

// const url = "mongodb+srv://gopivantla:MINE3464@cluster0.4jpkeim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(url)
//     .then(() => {
//         console.log("MongoDB connected");
//     })
//     .catch((err) => console.log(err));

// const server = new ApolloServer({ typeDefs, resolvers });


// async function startServer() {
//     await server.start();
//     server.applyMiddleware({ app });

//     app.listen(port, () => {
//         console.log(`Server is live on port ${port}`);
//     });
// }

// startServer();
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const cors = require('cors');
const resolvers = require('./routes/resolvers');
const userApiFromRouter = require('./routes/userRoutes');
const session = require('express-session');

const app = express();
const port = 3001;
const url = "mongodb+srv://gopivantla:MINE3464@cluster0.4jpkeim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// CORS middleware
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log(err);
  });

const server = new ApolloServer({ typeDefs, resolvers });

// API routes
app.use('/users', userApiFromRouter);

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
