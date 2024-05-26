# E-Commerce Data Query

This project is an e-commerce data query API built with Nodejs, Express Mongoose, and TypeScript and for data validation, zod has been used.

## Installation

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/iamRazzakk/e-commerce-data-query
cd e-commerce-data-query
```

## Install Dependencies

### Install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## Set Up Environment Variables

Create a .env file in the root directory of the project and add the necessary environment variables. Below is an example of what your .env file should look like:

```plaintext
PORT=5001
DATABASE_URL=mongodb+srv://admin-abdurrazzak:e-commerce-project-123@cluster0.pkfik7i.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0

```

Make sure to replace DATABASE_URL=mongodb+srv://admin-abdurrazzak:e-commerce-project-123@cluster0.pkfik7i.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0 with the correct URI if your MongoDB instance is running elsewhere or has a different database name.

## Compile TypeScript to JavaScript

Since the project is written in TypeScript, you need to compile it to JavaScript. You can do this by running:

```bash
npm run build
# or
yarn build
```

## Run the Application

Once the compilation is done, you can start the application. Use the following command:

```bash
npm run server:ts
# or
yarn server:ts
```

# Common Commands

Here are some additional useful commands for development:

### Start in Development Mode

This command runs the application with ts-node-dev, which automatically restarts the server on file changes.

```bash
npm run server:ts
# or
yarn server:ts
```

### Lint the Code

To check the code for potential errors and style issues, run:

```bash
npm run lint
# or
yarn lint
```

### Prettier code format

Make code alignmentt with Prettier

```bash
npm run prettier
# or
yarn prettier
```
