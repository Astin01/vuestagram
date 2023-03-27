<template>

 <div v-if="step==0">
  <PostView :userData="a" v-for="(a,i) in userData" :key="i"/>
</div>

<!-- 필터선택페이지 -->
<div v-if="step==1">
  <div class="upload-image"></div>
  <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>
</div>
<!-- 글작성페이지 -->
<div v-if="step==2">
  <div class="upload-image"></div>
  <div class="write">
    <textarea class="write-box">write!</textarea>
  </div>
</div>
</template>

<script>
import PostView from './PostView.vue';
export default {
    name:"ContainerView",
    components:{
      PostView
    },
    props:{
      userData:Array,
      step:Number,
    }
}
</script>

<style>

</style>