# USER APP TYPESCRIPT
USER CRED Application using express & typescript with azure function

### Prerequisites
* Nodejs LTS shold be installed.
* MongoDB should be installed.
* Azure CLI

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install 
$ npm start
```

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

### API Documentation 
In this project postman collection is userd that you can import in your desktop application
Collection URL [here](https://api.postman.com/collections/23426708-eca08b55-f5dd-4589-b91a-bb8129ae03de?access_key=PMAT-01GR97QGJXW0KW2SE5AD0DV0PW)

Note the environment value here:-
base=[https://userappsgk.azurewebsites.net/api/v1
](https://userappsgk.azurewebsites.net/api/v1
)


### Test
We use Jest and Supertest to run the test. Run the following command to start the Test.

```sh
$ npm run test
```