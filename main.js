var app = require('app');  // Module to control application life.
var ipc = require("ipc"); //for renderer-to-app communications

var BrowserWindow = require('browser-window');  // Module to create native browser window.


// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window willbe closed automatically when the JavaScript object is GCed.
var mainWindow = null;

//when a close-request is sent from the renderer (i.e: the close button is clicked), attempt to close the mainWindow
ipc.on("async-close-request", function(event,arg){
    console.log(arg);
    mainWindow.close();
    //event.sender.send('async-request-reply', 'this is some filler text');
});


// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.
    //var browserWindowSettings = {width: 300, height: 400, "always-on-top": true, "frame": false};
    var browserWindowSettings = {width: 300, height: 400, "always-on-top": true};
    mainWindow = new BrowserWindow(browserWindowSettings);

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/html/index.html');

    // Open the devtools.
    //mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
        mainWindow = null;
    });
});
