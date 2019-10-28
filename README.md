<p align="center">
    <img src="https://camo.githubusercontent.com/b6fe127b8e2cd5bc9c568350674382ee2954024b/68747470733a2f2f7365616e776174746572732e696f2f696d616765732f616d6265722d7675652e706e67" alt="amber-vue" data-canonical-src="https://seanwatters.io/images/amber-vue.png" width="225" height="180" style="">
</p>

<p align="center">
    <a href="https://amberframework.org/"><img src="https://img.shields.io/badge/using-amber_framework-orange.svg" ></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" ></a>
</p>

<p align="center">
    <i>The Speed and Performance of Amber with the ease of development in Vue.js</i>
</p>

<br>

# Amber with Vue.js

The goal of the **amber-vue** recipe is to quickly provide a full stack sollution that takes full advantages of the best parts of development using a frontend framework (in the way it was designed to be used), with a powerfull backend API.

The intention is to break away from the traditional Rails-y MVC model, without requiring developers to write completely separate frontend/backend codebases. 

<br>

## Creating a Project

To create your project with the **amber-vue** recipe, you will need to run the following command:

```
amber new <your app name> -r seanwatters/amber-vue
```

You may also want to specify your database (default is Postgres) by adding the `-d` tag:

```
amber new <your app name> -r seanwatters/amber-vue -d <pg | mysql | sqlite>
```

Once your app has been created, you will want to run

```
cd <your app name>
amber w
```

Your application will be running on `localhost:9090`.

<br>

## File Structure

With this recipe, we have modularized the file structure to isolate your frontend code in Vue.js from your Amber API.

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

<br>

## CLI

The scaffold, controller and model generators are currently a work in progress. The scaffold generator can be used currently but the routes need to be set manually in the `config/routes.cr` file to drop `edit` and `new` views. i.e:

```
resources "<pluralized route name>", <route name>Controller, except: [:edit, :new]
```

The README will be updated as soon as the generators have full functionality.

<br>

## Documentation

For any questions specific to the [Vue.js](https://vuejs.org/) or [Amber](https://amberframework.org/) frameworks, please feel free to refer to their excellent documentation below:

* [Vue.js](https://vuejs.org/v2/guide/)
* [Amber](https://docs.amberframework.org/amber/)

## DevTools

When developing Vue.js applications, it is highly recommended to use the [Vue.js devtools](https://github.com/vuejs/vue-devtools). Currently only FireFox and Chrome have support for the devtools extension. Their links are provided below:

* FireFox: [devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
* Chrome: [devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

<br>
<br>

You can also use the standalone Electron app **vue-remote-devtools** for any enviornment:

* Remote: [devtools](https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md)

<br>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
