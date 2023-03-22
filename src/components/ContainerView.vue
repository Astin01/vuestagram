<template>
 <div>
  <PostView :userData="a" v-for="(a,i) in userData" :key="i"/>
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
    }
}
</script>

<style>

</style>