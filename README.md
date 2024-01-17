# DOG SHELTER PAGE using Vue

You have the ability to browse through existing dog cards, add new ones, delete existing ones, and also make edits to the cards.

## Project setup

```
npm install
```

When you have installed all the dependencies, run the project

```
npm run serve
```

### Project is using a JSON server as a database option

To launch the JSON server use this command in a new terminal

```
json-server --watch db.json
```

### DB is a using this scheme

```
"name": string,
"age": number,
"breed": string,
"about": string,
"photo": string,
"id": number
```
