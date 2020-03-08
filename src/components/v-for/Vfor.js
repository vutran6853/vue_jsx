import Vue from 'vue'

const Vfor = Vue.extend({
  name: 'Vfor',
  data() {
    return {
      items: [
        {id: 0, thing: 'item1'},
        {id: 1, thing: 'item2'},
        {id: 2, thing: 'item3'},
        {id: 3, thing: 'item4'}
      ]
    }
  },
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
})

export default Vfor