const { PythonShell } = require('python-shell')
const path = require('path');
const { ipcMain } = require('electron');


const options = {
    mode: 'text',
    pythonPath: path.join((__dirname).replace('app.asar', ''), '../myscripts/myenv/Scripts/python.exe'),
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: path.join((__dirname).replace('app.asar', ''), '../myscripts'),
};


let Win

function hello(win) {

    Win = win
    
    let py = new PythonShell('hello.py', options)


    py.on('message', function (message) {
        win.webContents.send('blu', message)

    }
    );

    py.end(function (err) {
        if (err) {
            throw err;
        };

        console.log('finished');
    });


}

// function stop(){

//     let py = new PythonShell('hello.py', options)


//     py.send('he;;o')

//     py.on('message', function (message) {
//         Win.webContents.send('blu', message)

//     })

//     py.end(function (err) {
//         if (err) {
//             throw err;
//         };

//         console.log('finished');
//     });

// }




// ipcMain.handle('blu2',stop)







module.exports = hello


