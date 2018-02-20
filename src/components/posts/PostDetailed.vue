<template>
  <div class='post' v-if="post">
    <div class='card'>
      <div class="card-body">
        <h1 class="card-title">{{post.title}}</h1>
        <p class="card-text"><small class="text-muted"><a href="#">IVO FERRO</a> - 17 February, 2018</small></p>
        <hr/>
        <div v-html="compiledMarkdown"></div>
      </div>
    </div>
    <!-- TODO comments -->
  </div>
</template>

<script>
var marked = require('marked')
import { mapGetters } from 'vuex'

export default {
  name: 'postdetailed',
  props: {
    id: [String, Number]
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.post.body, { sanitize: true })
    },
    ...mapGetters({
      post: 'selectedPost'
    })
  },
  created () {
    this.$store.dispatch({
      type: 'getPost',
      postID: this.$route.params.id
    })
  }
}
</script>
