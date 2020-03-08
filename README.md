# vue_jsx_demo

this demo demonstration how to approach Vue render function & JSX

```js
  <!-- v-model -->
  <template>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </template>
```

```js
  <!-- JSX -->
  <div>
    <input value={this.message} oninput={this.handleSetMessage} placeholder="edit me">
    <p>Message is: {this.message}</p>
  </div>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Contributions of any kind welcome!
