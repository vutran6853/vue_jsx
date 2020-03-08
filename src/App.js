import Vue from 'vue'
import './app.css'

const App = Vue.extend({
  name: 'App',
  render() {
    return (
      <div id="app">
        <p>Welcome to Vue with render function</p>
      </div>
    )
  }
})

export default App