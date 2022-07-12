import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  email: string,
  password: string,
  select: string,
  age: number,
  count: number,
  name: string,
  surname: string

}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    email: '',
    password: '',
    select: '',
    age: 0,
    count: 0,
    name: '',
    surname: ''
  },

  
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}