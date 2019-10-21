<h1 align="center">
  <img src="assets/UTN.png" alt="logo_utn">
</h1>
<h5 align="center">Universidad Tecnologica Nacional</h5>

##### Materia: Técnicas y Tecnologías Avanzadas de Desarrollo de Software 2019 

# Trabajo practico de Backend

## Entorno de desarrollo 🛠️

* **Node.js v10.16.3**
    * Express 
    * Hotnode
    * Mongoose
    * Body Parser
* **Node Package Manager NPM v6.9.0**
* **MongoDB v4**
    * Compass
    * MongoDB Shell
* **Angular v8.2.2**
* **Bootstrap v4**


## Node 🚀

* [Pagina Oficial ️️️️️⚡️](https://nodejs.org/es/) - Framework Node

## [Instalar con CURL ⚡️](https://github.com/nodesource/distributions#debinstall) 🔧

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
## Node Package Manager 🚀

[Comandos basicos NPM ⚡️](https://vortexbird.com/comandos-basicos-de-npm/)

** npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.**
### Check that you have node and npm installed
```
node -v
npm -v
```

####A note on versions
npm is a **separate project from Node.js**, and tends to update more frequently. As a result, even if you’ve just downloaded Node.js (and therefore npm), **you’ll probably need to update your npm**. Luckily, npm knows how to update itself! Run:

```
npm install npm@latest -g
```

### Instalar desde terminal:
```
sudo apt-get install npm
```

### Errores resueltos

1. Setear repositorio y desactivar SSL
```
npm config set registry http://registry.npmjs.org/
npm config set strict-ssl  false
```

2. Limpiar cache
```
npm cache clean (Si tira error agregar --force)
```
## Angular 🚀

[Pagina Oficial ⚡️](https://angular.io/start) - Framework front-end
### Agregar Angular como dependencia al proyecto 🔧

```
npm install -g @angular/cli
```

### Crear proyecto y desplegarlo
```
ng new my-app
cd my-app
ng serve –open 
```

_The - -open (or just -o) option automatically opens your browser to http:/localhost:4200._


#### Agregar un nuevo componente de "heroes" en angular 🔧
```
ng generate component heroes
```

## MongoDB 🚀

* [Pagina Oficial ⚡️](https://www.mongodb.com/es) - Base de Datos mongodb

### Mongo Daemon 🔧
```
mongod --dbpath /data/db --logpath /data/log/mongod.log --fork --replSet "M103" --keyFile /data/keyfile --bind_ip "127.0.0.1,192.168.0.100" --sslMode requireSSL --sslCAFile "/etc/ssl/SSLCA.pem" --sslPEMKeyFile "/etc/ssl/ssl.pem"
```

### Mongo Database 🔧

```
mongo --username m001-student --password m001-mongodb-basics
```

_At cluster mongodb://cluster0-shard-00-..._
```
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
```

_Object JSON example in MongoDB_

```
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}
```
## Autor

* **Nicolas Mateucci** - *Trabajo Inicial* - [Github oficial ⚡️](https://github.com/nicomateucci)

--------------------------------------------------------

### Plantillas README

[Ejemplos **muy buenos** de uso de Markdown Langauge](https://github.com/ricval/Documentacion/blob/master/Guias/GitHub/mastering-markdown.md#ejemplos)

[Modelo de plantilla para hacer un buen README ⚡️](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)



🚀 📋 📦 🛠️ 📄 🎁 📢 🍺 🤓 🔧
