import Vue from 'vue'

const VslotsChild = Vue.extend({
  name: 'VslotsChild',
  render() {
    return (
      <div>
        <button>
          {this.$slots.default}
        </button>
      </div>
    )
  }
})

export default VslotsChild