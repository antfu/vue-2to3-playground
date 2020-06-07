// Change the following line to './api.v3' or './api.v2' to switch between versions
import { defineComponent, PropType } from './api.v3'

interface A {
  a: String
}

defineComponent({
  props: {
    a: Object as PropType<A>
  },
  setup(props){
    props.a
  }
})