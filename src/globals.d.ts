import Vue, { VueConstructor } from 'vue'

declare global {
  interface Window {
    Vue: VueConstructor
  }
}

// declare module 'vue/types/options' {
//   interface ComponentOptions<
//     V extends Vue,
//     Data = DefaultData<V>,
//     Methods = DefaultMethods<V>,
//     Computed = DefaultComputed,
//     PropsDef = PropsDefinition<DefaultProps>,
//     Props = DefaultProps> {
//     abstract?: boolean
//   }
// }