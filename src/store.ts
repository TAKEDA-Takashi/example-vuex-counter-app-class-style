import { action, createModule, createProxy, extractVuexModule, mutation } from 'vuex-class-component';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const VuexModule = createModule();

export class CounterStore extends VuexModule {

  public count: number = 0;

  @mutation
  public increment() {
    this.count++;
  }

  @mutation
  public decrement() {
    this.count--;
  }

  @action
  public async incrementIfOdd() {
    if ((this.count + 1) % 2 === 0) {
      this.increment();
    }
  }

  @action
  public async incrementAsync() {
    return setTimeout(() => this.increment(), 1000);
  }
}

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(CounterStore),
  },
});

export default store;

export const vxm = {
  counter: createProxy(store, CounterStore),
};
