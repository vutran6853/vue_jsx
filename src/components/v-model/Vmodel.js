import Vue from 'vue'

const Vmodel = Vue.extend({
  name: 'Vmodel',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleSetName(event) {
      this.message = event.target.value
    }
  },
  render() {
    return (
      <div>
        {/* v-model */}
        <input type="text" oninput={this.handleSetName} placeholder="Enter a message" />

        {/* example 2 inline function call */}
        <input type="text" oninput={(event) => this.message = event.target.value } placeholder="Enter a message" />
      </div>
    )
  }
})

export default Vmodel