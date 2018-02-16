<template>
  <div>
    <Header/>
    <div class='container'>
      <Main>
        <router-view></router-view>
      </Main>
      <Aside/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Header, Main, Aside, Footer } from './full_layout/'

export default {
  name: 'full',
  components: {
    Header,
    Main,
    Aside,
    Footer
  }
}
</script>
