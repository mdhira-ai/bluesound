const { app, BrowserWindow, ipcMain } = require("electron");
const serve = require("electron-serve");
const path = require("path");
const hello = require("../lib/myjs");

const appServe = app.isPackaged ? serve({
    directory: path.join(__dirname, "../out")
}) : null;


let win;


const createWindow = () => {
    win = new BrowserWindow({
        width: 100,
        height: 100,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),

            nodeIntegration: true,

        },

    });







    if (app.isPackaged) {
        appServe(win).then(() => {
            win.loadURL("app://-");
        });
    } else {
        win.loadURL("http://localhost:3000");
        win.webContents.openDevTools();
        win.webContents.on("did-fail-load", (e, code, desc) => {
            win.webContents.reloadIgnoringCache();
        });
    }
}

async function checkblu() {
    let d = await hello()

    console.log("this is from main.js" + d)

    return d

}

app.on("ready", () => {
    ipcMain.handle('checkblu', checkblu)

    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});



