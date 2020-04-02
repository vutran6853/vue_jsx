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

```js
<!-- v-for -->
<template>
  <li v-for="(item) in items" v-bind:key="item.id">
    {{ item.message }}
  </li>  <p>Message is: {{ message }}</p>
</template>
```

```js
<!-- JSX -->
render() {
  return (
    <div>
      {
        this.items.map((item) => (
          <li key={item.id}>{item.thing}</li>
        ))
      }
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

## TODO
- example of v-slot -> useing render function
- example of vue-router -> useing render function
- example of Form input Bindings -> useing render function

## Contributing
Contributions and issues of any kind welcome!

1. Fork it!
2. Create your feature branch: `git checkout myBranchName -b `
3. Commit your changes: `git commit -am 'myBranchName: add example'`
4. Push to the branch: `git push origin myBranchName`
5. Submit a pull request

