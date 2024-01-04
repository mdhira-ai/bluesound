
const { spawn } = require('child_process')
const { dialog } = require('electron')
const path = require('path')



function Chello(win) {

    let returndata



    // same thing
    // path.join(app.getAppPath().replace('app.asar', ''), 'myscripts', 'hello.py')
    // or
    // path.join((__dirname).replace('app.asar',''), '../myscripts', 'hello.py')



    const child = spawn('python', [
        path.join((__dirname).replace('app.asar', ''), '../myscripts', 'hello.py')

    ])

    child.stdout.on('data', (data) => {
        // send this data
        // console.log(data.toString())
        // console.log(data.toString())

        win.webContents.send('blu', data.toString())



    })

    child.stderr.on('data', (data) => {

        // show a dialog
        dialog.showErrorBox('Error', `child stderr:\n${data}`)



    })

    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
            `code ${code} and signal ${signal}`);


    });








}


module.exports = Chello



