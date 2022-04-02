# Music App

A simple music web application created using Vue.js with Tailwind CSS. You can play and pause the song and go to the next and previous song or click on the song to play.

## Project Setup

### For Vue.js

```
npm install -g @vue/cli
```

- The CLI **(@vue/cli)** is a globally installed npm package and provides the vue command in your terminal.

```
vue create music-app
```

- To create a new Project

### For Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Install **Tailwind CSS** and its peer dependencies and then run the **_init_** command to generate two files **tailwind.config.js** and **postcss.config.js**.

- Now add the path to the tailwind config file as shown below:

```
module.exports = {
  content: ["./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

- Now create an **_index.css_** file in the src(source) folder and add the **@tailwind** directive to the file for each of the Tailwind's layers.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Note: In this project I have created a css folder inside of the assets folder which is inside the src folder.

- The assets is where you would put your _images/stylesheets/videos_ etc. that you will import in the vue files.

- Now after following the above steps, one last step is to import the css file in the **main.js** file.

```
import "./assets/css/tailwind.css";
```

- Finally run the server😃

```
npm run serve
```
