const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 1000, 
    height: 900,
    /*
    width: 550, 
    height: 750,
    */
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(`file://${__dirname}/pages/index.html`);
  mainWindow.webContents.openDevTools()

})