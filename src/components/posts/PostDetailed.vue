<template>
  <div class='post'>
    <div class='card'>
      <div class="card-body">
        <h1 class="card-title">Post Title</h1>
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

export default {
  name: 'postdetailed',
  data: function () {
    return {
      input: '## hello\r\n\r\nThis **is** some mark~~down~~\r\n\r\n![image](https://placekitten.com/400/250)\r\n\r\n### Another topic\r\n\r\nYADA YADA YADA esldfadnlads nsadn fsansadn slas dj vlnaldnd fasd nd asfsdfanfalfdasnffsadadfsn'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  }
}
</script>
