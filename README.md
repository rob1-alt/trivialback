## H3 fullstack Trivial (backend) [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This project aims to be a social project. In the future we hope to raise awareness of ecological issues as much as possible. So we created a fullstack web app called Trivial that helps you take charge of your environment

### Environement docker
-``trivialb-node`` node container on which we are working </br>
-``trivialb-mariadb`` mariadb containter for the main db

###Installation
- clone the repository
- to start the environment go to your terminal and write the following commands :</br>
`docker compose up -d`</br>
this command builds my image.</br>
`docker exec -it trivialb-node sh`</br>
executing the shell container of trivialb.</br>
`nodemon index.js`</br>
start the node server who listen to the :8080 port.</br>

### Stack

- Sequelize ORM 🥞
- Node.js 🟩
- Express ⏩
- Axios 🧑‍💻
- Docker 🐳


### Git flow


   - `main` : the main branch of the project
   - `develop` : the development branch of the project

I used these two branches to ensure stable operation before each commit in the main branch



### @Rob1-alt




