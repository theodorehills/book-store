<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-list :height="50" :listData="count" @scroll="handleScroll">
        <template v-slot="{ item }">
          <div class="list-item">
            {{ item }}
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </div>
</template>

<script lang="ts">
export default {
  props: {},
  data() {
    return {
      count: new Array(100).fill(0)
    }
  },
  methods: {
    handleScroll() {
      let arr = new Array(100).fill(0)
      const len = this.count.length
      this.count = this.count.concat(arr.map((_item: number, index: number) => len + index + 1))
    }
  }
}
</script>