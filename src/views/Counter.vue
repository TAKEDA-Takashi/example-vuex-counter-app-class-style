<template>
  <div>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vxm } from '@/store';

@Component
export default class Counter extends Vue {

  get count() {
    return vxm.counter.count;
  }

  private increment() {
    vxm.counter.increment();
  }

  private decrement() {
    vxm.counter.decrement();
  }

  private incrementIfOdd() {
    vxm.counter.incrementIfOdd();
  }

  private incrementAsync() {
    vxm.counter.incrementAsync();
  }
}
</script>