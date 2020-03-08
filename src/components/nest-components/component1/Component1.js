import Vue from 'vue'
import Components2 from '../component2/Component2'

const Components1 = Vue.extend({
  name: 'Components1',
  data() {
    return {
      postTitle: 'Vue'
    }
  },
  render() {
    return (
      <div>
        <p>I am Components 1</p>

        {/* You don't have to registration your component in components object */}
        {/* You can pass props */}
        <Components2 postTitle={this.postTitle} />
      </div>
    )
  }
})

export default Components1