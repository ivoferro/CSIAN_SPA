<template>
  <div class='posts-collection'>
    <div class='row'>
      <div v-for='(post, index) in posts' class='post-wrapper' :class="{'col-md-5': index % 2 === 0, 'col-md-7': index % 2 !== 0 }">
        <PostCard :id='post.id' :title='post.title' :body='post.body'/>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'postscollection',
  components: {
    PostCard
  },
  computed: mapGetters({
    posts: 'allPosts'
  }),
  created () {
    this.$store.dispatch('getAllPosts')
  }
}
</script>

<style scoped>
  .post-wrapper:not(:first-child):not(:nth-child(2)) {
    margin-top: 15px;
  }
</style>
