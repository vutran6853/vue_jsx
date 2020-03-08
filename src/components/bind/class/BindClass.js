import Vue from 'vue'

const BindClass = Vue.extend({
  name: 'BindClass',
  data() {
    return {
      isActive: true,
      hasError: false
    }
  },
  render() {
    return (
      <div>
        <div class={[this.isActive ? 'static active' : 'static', this.hasError ? 'text-danger' : '']}>
          Inpect your HTML element 
        </div>
      </div>
    )
  }
})

export default BindClass