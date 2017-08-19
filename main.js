const url = require('url');
const path = require('path');

const electron = require('electron');
const app = electron.app;

const browserWindow = electron.BrowserWindow;

function createWindow(){
    let mainWindow = new browserWindow({
        width: 500,
        height: 500
    });

    mainWindow.loadURL(url.format({
        pathname: path.resolve('public', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

app.on('ready', createWindow);