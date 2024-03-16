# Employee management system

This is a MERN stack project (MongoDB, Express.js, React.js, Node.js)

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (>=18.x)
- [MongoDB](https://www.mongodb.com/) (installed locally or hosted remotely)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Raajprajapati/vibeconn.git

Or download the code from the above repository.

2. Go to client folder and run the below command to install all dependencies.

``` npm install ```

3. Go to server folder and run the below command to install all dependencies.

``` npm install ```

4. Setup the env variables in the .env files in client folder and server folder.

- Skip this step as I already included the .env files with this github repo.
- Make sure to change Mongo URI if you want to test it on online mongo database.


5. Move to the server folder and run the server using the below command

``` node index.js ```

or use  ``` nodemon index.js ``` if nodemon module is installed.

6. Move to the client folder and run the front end part of website using the below command.
``` npm run dev ```

7. Open the browser and goto http://localhost:5173/ to test the website.

## Testing

- Add the employee data from the home page on the website.

- Move to employees page to manage deletion and edit operations on the employees data.

- Edit employee data or delete data.

- Perform search by employee name or id.

- Employee Id must be a unique number.
