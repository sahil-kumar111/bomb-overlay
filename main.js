const { app, BrowserWindow, screen } = require('electron');
function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 350,
    height: 220,
    x: 0,                         // LEFT edge
    y: height - 220,              // BOTTOM edge
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      // nodeIntegration: false,
      // contextIsolation: true
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('Bomb.html');
}

app.whenReady().then(createWindow);