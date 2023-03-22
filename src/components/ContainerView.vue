<template>
 <div>
  <PostView/>
  <PostView/>
  <PostView/>
</div>
</template>

<script>
import PostView from './PostView.vue';
export default {
    name:"ContainerView",
    components:{
      PostView
    }
}
</script>

<style>

</style>