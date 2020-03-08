import Vue from 'vue'

const Components2 = Vue.extend({
  name: 'Components2',
  // You can do props: ['postTitle']
  props: {
    postTitle: {
      type: String,
      required: true
    }
  },
  render() {
    return (
      <div>
        <p>I am Components 2 and nest in Component 1</p>
        <p>My props is {this.postTitle}</p>
      </div>
    )
  }
})

export default Components2