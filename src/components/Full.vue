<template>
  <div>
    <AppHeader/>
    <div class='container'>
      <div class='row main-content'>
        <AppMain class='col-md-8'>
          <router-view></router-view>
        </AppMain>
        <AppAside class='col-md-3 offset-md-1'/>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import { AppHeader, AppMain, AppAside, AppFooter } from './full_layout/'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppMain,
    AppAside,
    AppFooter
  }
}
</script>

<style scoped>
  .main-content {
    padding: 15px 0px 15px 0px;
  }
</style>