import Homey from 'homey';

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Garo charging and meter app has been initialized');    
  }
}

module.exports = MyApp;