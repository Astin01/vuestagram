<template>
  <div v-if="step == 0">
    <PostView :userData="a" :postnum="i" v-for="(a, i) in userData" :key="i" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div
      class="upload-image"
      :class="[`filter-item ${filterData}`]"
      :style="`background-image: url(${imageUrl}) `"
    ></div>
    <div class="filters">
      <filter-box
        :image="imageUrl"
        :filter="filter"
        v-for="filter in filterList"
        :key="filter"
      >
        {{ filter }}
      </filter-box>
    </div>
  </div>
  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div
      class="upload-image"
      :class="[`filter-item ${filterData}`]"
      :style="`background-image:url(${imageUrl})`"
    ></div>
    <div class="write">
      <textarea @input="$emit('text', $event.target.value)" class="write-box">
Write</textarea
      >
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import FilterBox from "./FilterBox.vue";
export default {
  name: "ContainerView",
  data() {
    return {
      filterList: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    PostView,
    FilterBox,
  },
  props: {
    userData: Array,
    step: Number,
    imageUrl: String,
    filterData: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
