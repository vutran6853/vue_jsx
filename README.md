# Vue with render function & JSX Demo

this demo demonstration how to approach Vue render function & JSX

```js
<!-- v-model -->
<template>
  <input value="message" v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>
</template>
```

```js
<!-- JSX -->
render() {
  return (
    <div>
      <input value={this.message} oninput={this.handleSetMessage} placeholder="edit me">
      <p>Message is: {this.message}</p>
    </div>
  )
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### TODO

- example of v-slot -> useing render function
- example of vue-router -> useing render function
- example of Form input Bindings -> useing render function

Contributions and issues of any kind welcome!
