<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish()">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" @click="stepState" />
  </div>
  <ContainerView
    @text="textData = $event"
    :userData="userData"
    :step="step"
    :imageUrl="imageUrl"
    :filterData="filterData"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="uploadImg"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerView from "./components/ContainerView.vue";

export default {
  name: "App",
  data() {
    return {
      userData: this.$store.state.userData,
      step: 0,
      imageUrl: "",
      textData: "",
      filterData: "",
    };
  },
  components: {
    ContainerView,
  },
  methods: {
    publish() {
      var mine = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.textData,
        filter: this.filterData,
      };
      this.userData.unshift(mine);
      this.step = 0;
    },
    stepState() {
      if (this.step < 2) {
        this.step += 1;
      } else {
        this.step = 0;
      }
    },
    uploadImg(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.imageUrl = url;
      this.step++;
    },
  },
  mounted() {
    this.emitter.on("filterOption", (data) => {
      this.filterData = data;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
