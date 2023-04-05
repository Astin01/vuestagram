<template>
  <div
    :class="[`filter-item ${filter}`]"
    :style="`background-image:url(${image})`"
  >
    <slot></slot>
    <button @click="fire">변경</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire() {
      this.emitter.emit("filterOption", this.filter);
    },
  },
  props: {
    image: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
