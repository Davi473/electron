import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const pages = `file://${__dirname}/../pages/index.html`;
  // mainWindow.openDevTools();
  mainWindow.loadURL(pages);
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
