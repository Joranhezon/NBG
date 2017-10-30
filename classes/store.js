const electron = require('electron');
const path = require('path');
const fileSystem = require('fs');

//Class used to set visual components for the application
class Store {
  constructor(options) {
    //Renderer process needs to get the data from "app", while Main can get it directly
    //Gets the user's data directory path as a string
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');


    //Joins userDataPath and the configName attribute from options to create a json file
    this.path = path.join(userDataPath, options.configName + '.json');
    this.data = parseDataFile(this.path, opts.default);
  };

  //Gets the value of the saved colors
  getColor(colorID) {
    return this.color[colorID];
  };
}
