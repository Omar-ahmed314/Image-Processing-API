# Image Processing API

This api provides multiple simple image processing operations including resizing, scaling, rotating and more, in addition it will cache the processed images in order to use them again without reprocessing

# Tools

- Nodejs
- TypeScript
- Jasmine for unit testing
- prettier
- eslint
- sharp lib for fast image processing

# How to install

- Install Nodejs [Download Nodejs LTS](https://nodejs.org/en/)
- Download the project
- Run command

```
npm install
```

- Run command to build the project

```
npm run prod
```

- Run command to start the server

```
npm run start:server
```

- Choose the image name and the needed resize width and height
  ex. fileName: fjord.jpg, width: 200px, height: 200px
- Go to the url and send those information as query params

```
http://localhost:3000/api/image?fileName=fjord&width=200&height=200
```

- Then tell me what you see ?

# Important Scripts

- Run tests

```
npm run test
```

- Style the code using prettier and eslint

```
npm run style
```
