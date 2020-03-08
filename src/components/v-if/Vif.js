import Vue from 'vue'

const Vif = Vue.extend({
  name: 'Vif',
  data() {
    return {
      awesome: true,
      ok: true
    }
  },
  render() {
    return (
      <div>
        {/* v-if */}
        {this.awesome ? <h1>Vue is awesome!</h1> : null}

        {/* v-if with v-else */}
        {this.awesome ? <h1>Vue is awesome!</h1> : <h1>Oh no 😢</h1>}

        {/* Conditional Groups with v-if-on template */}
        {this.ok ? (
          <div>
          <h1>Title</h1>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
        ) : null}

        {/* v-else */}
        {
          Math.random() > 0.5 ? (
            <div>
              Now you see me
            </div>
          ) : (
            <div>
              Now you don't
            </div>
          )
        }
      </div>
    )
  }
})

export default Vif