
const { spawn } = require('child_process')
const { app } = require('electron')
const { dialog } = require('electron')
const path = require('path')



function hello() {

    let returndata

    const child = spawn('python', [
        path.join(app.getAppPath().replace('app.asar', ''), 'myscripts', 'hello.py')

    ])

    child.stdout.on('data', (data) => {
        returndata = data

        // show a dialog
    })

    child.stderr.on('data', (data) => {

        // show a dialog
        dialog.showErrorBox('Error', `child stderr:\n${data}`)
        

        
    })

    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
            `code ${code} and signal ${signal}`);


    });

    
    return new Promise((resolve, reject) => {
        console.log('timer start')
        setTimeout(() => {
            resolve(returndata.toString())
            console.log('timer end')
        }, 5000)
    }
    )
}


module.exports = hello



