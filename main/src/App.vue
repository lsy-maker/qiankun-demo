<template>
  <div id="app">
    <div class="nav">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="false"
      >
        <a-menu-item key="1" @click="localTo('/vue/home')">
          <a-icon type="desktop" />
          <span>vue子应用home页面</span>
        </a-menu-item>
        <a-menu-item key="2" @click="localTo('/vue/about')">
          <a-icon type="desktop" />
          <span>vue子应用about页面</span>
        </a-menu-item>
        <a-menu-item key="3" @click="localTo('/react')">
          <a-icon type="desktop" />
          <span>react子应用页面</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="main-container">
      <router-view v-show="$route.name"/>
      <section v-show="!$route.name" id="frame"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    localTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
}
.nav {
  width: 200px;
  height: calc(100% - 52px);
}
.main-container {
  width: calc(100% - 200px);
  height: 100%;
  position: absolute;
  left: 200px;
  top: 0;
}

</style>
