# 2023-mern-stack-workshop

This project uses the **MERN** Stack structure using:

 - **M**ongoDb
 - **E**xpress
 - **R**eactjs
 - **N**odejs
## Installation

Install my-project with npm

### Clientside:

```bash
cd this-project
npm install
```
and
### Serverside:

```bash
cd this-project/server
npm install
```
## Available Scripts

In the project directory, you can run

#### Clientside (WebApp Reactjs):

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```bash
npm run dev
```
#### Serverside (API Nodejs):

Runs the API server on: [http://localhost:4000](http://localhost:4000)

```bash
npm run server
```
## API Reference

#### Add new student (Create)

<details>
 <summary><code>POST</code> <code><b>/student/create-student</b></code> <code>(add new student)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | name      |  required | string   | N/A  |
> | email      |  required | string   | N/A  |
> | rollno      |  required | string  | N/A  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`        | `{"status":"OK","data":{}}`                                |
> | `400`         | `application/json`                | `{"status":"400"}`                            |

</details>

------------------------------------------------------------------------------------------

#### Get student (Read)

<details>
 <summary><code>GET</code> <code><b>/student</b></code> <code>(gets all students)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"status":"OK","data":[{}]}`                                                         |

</details>

<details>
 <summary><code>GET</code> <code><b>/student/:id</b></code> <code>(get a single student)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | The specific string id        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"status":"OK","data":{}}     `                                                    |
> | `400`         | `application/json`                | `{"status":"400"}`                            |


</details>

#### Edit student (Update)

<details>
  <summary><code>PUT</code> <code><b>/student/update/:id</b></code> <code>(updates student)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | The specific string id        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"status":"OK","data":{}}`        |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |


</details>

#### Delete student

<details>
  <summary><code>DELETE</code> <code><b>/student/delete/:id</b></code> <code>(deletes a single student)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | The specific string id        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `204`         |         |          |
> | `400`         | `application/json`                | `{"status":"400","message":"Bad Request"}`                            |


</details>

## Authors

- [@P-Raphat](https://github.com/P-Raphat)

