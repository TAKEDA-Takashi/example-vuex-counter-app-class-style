import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';

Vue.use(Vuex);

@Module({ namespacedPath: 'counter/' })
export class CounterStore extends VuexModule {

  @getter
  public count: number = 0;

  @mutation
  public increment() {
    this.count++;
  }

  @mutation
  public decrement() {
    this.count--;
  }

  @action()
  public incrementIfOdd() {
    if ((this.count + 1) % 2 === 0) {
      this.increment();
    }
  }

  @action()
  public async incrementAsync() {
    return setTimeout(() => this.increment(), 1000);
  }
}

const store = new Vuex.Store({
  modules: {
    counter: CounterStore.ExtractVuexModule(CounterStore),
  },
});

export default store;

export const vxm = {
  counter: CounterStore.CreateProxy(store, CounterStore),
};
