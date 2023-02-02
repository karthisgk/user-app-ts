# USER APP TYPESCRIPT
USER CRED Application using express & typescript with azure function

### Prerequisites
* Nodejs LTS shold be installed.
* MongoDB should be installed.
* Azure CLI

# Running azure function in local
```sh
$ npm run az-start
```

# Running in local
```sh
$ npm start
```

# Running using nodemon
```sh
$ npm run serve
```

# Running on local machine
### Setting .env
Sample local.setttings.json file
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  }
}
```

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install 
$ npm start
```

### Test
We use Jest and Supertest to run the test. Run the following command to start the Test.

```sh
$ npm run test
```