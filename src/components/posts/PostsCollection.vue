<template>
  <div class='posts-collection'>
    <div class='row'>
      <div class='col-md-7'>
        <PostCard/>
      </div>
      <div class='col-md-5'>
        <PostCard/>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-5'>
        <PostCard/>
      </div>
      <div class='col-md-7'>
        <PostCard/>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  name: 'postscollection',
  components: {
    PostCard
  }
}
</script>

<style scoped>
  .posts-collection .row:not(:first-child) {
    margin-top: 15px;
  }
</style>
