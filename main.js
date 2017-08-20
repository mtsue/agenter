const url = require('url');
const path = require('path');

const electron = require('electron');
const app = electron.app;

const browserWindow = electron.BrowserWindow;

function createWindow(){
    let mainWindow = new browserWindow({
        width: 500,
        height: 500,
        resizable: false,
        transparent: true,
        frame: false
    });

    mainWindow.setAlwaysOnTop(true);

    // mainWindow.webContents.openDevTools();

    mainWindow.loadURL(url.format({
        pathname: path.resolve('views', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

app.on('ready', createWindow);