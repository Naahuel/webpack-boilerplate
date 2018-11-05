# Webpack Boilerplate

This repo contains a very basic setup to start with a Webpack 4 project.

## Starting
Simply clone this repo or download it and start working in your `./src` folder.  Keep in mind that these files are required:
 - `src/index.js` - It's the app's entry point!
 - `src/index.html` - It's the app's HTML template!

You can add all the files you want and organize them any way you like.

## Config files
The configuration is split in three different files:

 - `webpack.common.js` - Contains the basic configuration, used in every environment.
 - `webpack.dev.js` - Contains the configuration used in development mode (like hot-reload and dev-server).
 - `webpack.prod.js` - Contains the configuration used in production mode.

## npm scripts
### Start the dev server with hot-reload

    npm start
Webpack will start the dev-server, open your web browser and all changes you make in your files will be automatically updated!

### Build for production

    npm run build
Webpack will bundle your files & assets in the `./dist` folder. Now you can use this files to deploy your app!
