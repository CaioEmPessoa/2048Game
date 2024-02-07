const {app, BrowserWindow} = require('electron');
const electronReload = require('electron-reload')
const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 550, height: 750});

  mainWindow.loadURL(`file://${__dirname}/pages/index.html`);

})