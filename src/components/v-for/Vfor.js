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
      ],
      items2: [
        {id: 0, thing: 'item5'},
        {id: 1, thing: 'item6'},
        {id: 2, thing: 'item7'},
        {id: 3, thing: 'item8'}
      ]
    }
  },
  render() {

    // store JSX into a variable
    const renderItems2 = this.items2.map((item) => (
      <li key={item.id}>{item.thing}</li>
    ))
    return (
      <div>
        {/* example 1 */}
        {/* 
        <li v-for="(item) in items" v-bind:key="item.id">
          {{ item.message }}
        </li>
        */}
        {
          this.items.map((item) => (
            <li key={item.id}>{item.thing}</li>
          ))
        }

        {/* example 2 */}
        {renderItems2}
      </div>
    )
  }
})

export default Vfor