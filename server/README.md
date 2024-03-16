## Getting Started

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `App.jsx` - This is what renders all of our browser routes and different views
    - #### `main.jsx` - This is what renders the react app by rendering App.jsx, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `db` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `index.js` - the entry point and the server starting
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Environment variables setup
create .env file in root directory
septup MONGO_URI and PORT variables

## Available Scripts

In the project directory, you can run:

To run the backend server.
### `node index.js`
Runs the server on the localhost.<br>

To run the client side.
### cd client
### `npm run dev`

Runs just the client app in development mode.<br>

Open [http://localhost:5173](localhost:5173) to view the client in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
