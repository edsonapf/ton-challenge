# Ton challenge api

This project was developed based on challenge requirements.

The project is an api developed in NodeJs that can create and find an user, and beside this, get and increment the total of visits in a specific url using countapi.

## Requirements

To run the project, you need to install docker in your workspace. The following link is docker documentation that shows how to install docker based on your OS.

* [Docker install tutorial](https://docs.docker.com/engine/install/)

## Run project

After install docker, you can run the following command in your terminal.

```shell
docker-compose up
```

If you want to detach your terminal, run the following command instead of the above.

```shell
docker-compose up -d
```

## Endpoints

* GET /visits - Return the total of visits;
 
  * Response
```json
{
  "totalVisits": 10
}
```

* POST /visits - Increment the total of visits;
 
  * Response
```json
{
  "totalVisits": 10
}
```

* GET /users/:id - Find an user by id;

  * Url params

      * id - uuid
      > Example: /users/8581a138-1bbe-40ec-855a-39b1bbeea842
 
  * Response
```json
{
    "id": "8581a138-1bbe-40ec-855a-39b1bbeea842",
    "name": "John Doe",
    "email": "johndoe@email.com"
}
```

* POST /users - Create an user;
 
 * Body

      * name - string;
      * email - string;
```json
{
    "name": "John Doe",
    "email": "johndoe@email.com"
}
```

  * Response
```json
{
  "totalVisits": 10
}
```

