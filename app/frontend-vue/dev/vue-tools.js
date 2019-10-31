const write = require('write');
const readline = require("readline");
const exec = require('child_process').exec;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generator = () => {
  rl.question("\n\nAvailable generators -- api, component, scaffold, \n\nGenerator: ", (generator) => {
    switch(generator) {
      case 'api':
        api()
        break;
      case 'componenet':
        component()
        break;
      case 'scaffold':
        scaffold()
        break;
      default:
        generator()
    }
  });
};

const api = () => {
  rl.question("provide the model for the api\n i.e BlogPost\n\nmodel: ", (model) => {
    rl.question("provide the attributes for the api model\n i.e title body:text \nattributes: ", (attributes) => {
      exec(`npm run vue-api ${model} ${attributes}`);
      process.exit(0)
    });
  });
};

const component = (scaffold = false) => {
  rl.question("Component Name: ", (name) => {
    rl.question("Component State: ", (state) => {
      rl.question("Component Props: ", (props) => {
        write.sync(`frontend-vue/src/components/${name}.vue`, `<template>
  <div class=${name}>
    <h3>I am ${name}!</h3>
  </div>
</template>

<script>
export default {
  name: '${name}',
  ${state ? `data() {
    someState: null
  }` : ``}
  ${props ? `props: {
    someProp: String
  }` : ``}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .${name} {

  }
  h3 {
    margin: 40px 0 0;
    font-weight: lighter;
  }
</style>`, { overwrite: false });
        console.log('\nComponent Created')
        scaffold ? api() : process.exit(0);
      });
    });
  });
};

const scaffold = () => {
  component(true)
};
generator()
