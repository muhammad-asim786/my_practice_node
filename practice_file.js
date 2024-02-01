


// import chalk from 'chalk';

// const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));
// log(chalk.greenBright('Asim is best Guy!'))


//--| now i want to crate the simple api;  //--|====================1;
// const http = require('http');
// const data = require('./data')

// http.createServer(
//     (req, resp)=>{
//         resp.writeHead(200, {'content-Type' :'application\json'});
//         resp.write(JSON.stringify(data))
//         resp.end();
//     }
// ).listen(3000);

// now i want to ser the promises   //--|====================1;
// let a = 20;
// let b = 0;


//  const wating = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(90)
//     }, 2000);
//  })


//  wating.then((data)=>{
//     console.log(a+data);    
//  })



// now i want to lean the express with node   //--|====================1;

// const express = require('express');
// const data = require('./data');
// const app = express();

// app.get('/', (req , res)=>{
//     res.send(`
//       <h1> hello world page </h1>
//       <a href="/home">Home</a>
//     `);
// });

// app.get('/home', (req , res)=>{
//     res.send(`
//          <input type="text" placeholder="Enter your name">
//          <button>Submit</button> 
//       <a href="/">Home</a>

//         `);
        
// });

// app.get('/help', (req , res)=>{
//     res.send(data);
// });


// app.listen(2000);


// now i want to lean the express with node to make some static ui with nodejs   //--|====================1;

//  const express = require('express');
//     const path = require('path');

//     const app = express();

//     const publicPath = path.join(__dirname, 'public');
//     // this method is not we are using in the express due to show the html in headrs;
// //    app.use(express.static(publicPath));

//    app.get('/', (req , res)=>{
//        res.sendFile(`${publicPath}/index.html`);
//    } );
//    app.get('/about', (req , res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// } );
// app.get('/help', (req , res)=>{
//     res.sendFile(`${publicPath}/help.html`);
// } );
// app.get('*', (req , res)=>{
//     res.sendFile(`${publicPath}/noteFoundPage.html`);
// } );
//    app.listen(3000);



// now i am connectin my mogoData base here;

// this line of code is used to connect the mongodb;




