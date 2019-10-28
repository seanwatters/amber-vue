<img src="https://camo.githubusercontent.com/b6fe127b8e2cd5bc9c568350674382ee2954024b/68747470733a2f2f7365616e776174746572732e696f2f696d616765732f616d6265722d7675652e706e67" alt="amber-vue" data-canonical-src="https://seanwatters.io/images/amber-vue.png" width="130" height="100">

_The Speed and Performance of Amber with the ease of development in Vue.js_

[![Amber Framework](https://img.shields.io/badge/using-amber_framework-orange.svg)](https://amberframework.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Amber with Vue.js

The goal of the **amber-vue** recipe is to quickly provide a full stack sollution that takes full advantages of the best parts of development using a frontend framework (in the way it was designed to be used), linked to a powerfull backend API with a familiar structure. 

We are intentionally breaking away from the typical Rails-y MVC model, without forcing developers to write completely separate frontend/backend applications. 


## Creating a Project

To create your project with **amber-vue** you will need to run the following command:

```
amber new <your app name> -r seanwatters/amber-vue
```


## File Structure

With this recipe, we have modularized the file structure to issolate your frontend code in Vue.js from your Amber API.

```
|- bin
|- config
|- db
|- frontend-vue   // Vue.js file tree structure.
    |- src
        |- assets
        |- components
            |- HelloWorld.vue
        |- App.vue
    |- main.js
|- lib
|- public
|- spec
|- src
    |- controllers
        |- application_controller.cr
        |- roots_controller.cr    // Controller for the primary route.
    |- locales
    |- models
    |- views
        |- layouts
        |- roots
            |- root.slang   // Location of the root #app <div> Vue will render to.
         
```
