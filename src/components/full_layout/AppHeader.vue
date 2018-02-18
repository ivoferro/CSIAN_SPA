<template>
  <header>
    <b-navbar toggleable="md" type="dark">
      <div class='container'>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand :to="{ path: '/' }">Computer Science In A Nutshell</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class='nav'>
            <b-nav-item :to="{ path: '/posts/software-archirecture' }">
              Software Architecture
            </b-nav-item>
            <b-nav-item :to="{ path: '/posts/programming' }">
              Programming
            </b-nav-item>
            <b-nav-item-dropdown>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>Others</em>
              </template>
              <b-dropdown-item :to="{ path: '/posts/blockchain' }">Blockchain</b-dropdown-item>
              <b-dropdown-item :to="{ path: '/posts/devops' }">DevOps</b-dropdown-item>
              <b-dropdown-item :to="{ path: '/posts/random' }">Random</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Navigation */
.navbar {
  background-color: rgb(51,122,183);
}
.navbar .dropdown-item {
  color: #636a70;
}
.navbar-brand {
  color: #d8e6f3;
}
.navbar a:hover {
  color: #fff;
}
.navbar-toggle .icon-bar {
  background-color: #d8e6f3;
}
.dropdown-menu .dropdown-item:hover{
  color: rgb(123, 180, 230)
}
.dropdown-menu .dropdown-item.active{
  background-color: rgb(165, 195, 221);
}
.dropdown-menu .dropdown-item.active:hover{
  color: #fbfbfb;
}
</style>
