import Vue from 'vue'
import VslotsChild from './VslotsChild'

const Vslot = Vue.extend({
  name: 'Vslot',
  data() {
    return {
      text: 'Message from my parent'
    }
  },
  render() {
    return (
      <div>
        {/* v-slot example
            <element>
              <slot></slot>
            </element>
        */}
        <VslotsChild>
          {this.text}
        </VslotsChild>
      </div>
    )
  }
})

export default Vslot