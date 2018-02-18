<template>
  <footer>
    <div class='footer'>
      <div class='container'>
        <div class='row'>

          <div class='col-sm-4 col-xs-6'>
            <!-- TODO refactor newsletter subscription to a new component -->
            <h4>Newsletter</h4>
            <b-form @submit="onSubmit">
              <b-form-group id="email-group"
                            label="Stay up to date, don't miss any trendy news!"
                            label-for="email-subscribe"
                            description="We'll never share your email with anyone else.">

                <b-form-input id="email-subscribe-text-box"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="example@server.world">
                </b-form-input>
              
                <div class='form-buttons'>
                  <b-button id='email-subscribe-button' type='submit' variant="primary">
                    Subscribe
                  </b-button>
                  <b-button id='clear-subscribe-button' type='reset' variant="danger">
                    Clear
                  </b-button>
                </div>
              </b-form-group>
            </b-form>
          </div>

          <div class='col-sm-2 col-xs-6'>
            <h4>Links</h4>
            <ul class='list-unstyled'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Profile</a></li>
              <li><a href='#'>New Post</a></li>
            </ul>
          </div>

          <div class='clearfix visible-xs'></div>

          <div class='col-sm-2 col-xs-6'>
            <h4>Stay in Touch</h4>
            <ul class='list-unstyled'>
              <li><a href='#'>Twitter</a></li>
              <li><a href='#'>Facebook</a></li>
              <li><a href='#'>Linkedin</a></li>
              <li><a href='#'>Slack</a></li>
              <li><a href='#'>Discord</a></li>
            </ul>
          </div>

          <div class='col-sm-4 col-xs-6'>
            <h4>Contact Us</h4>
            <ul class='list-unstyled'>
              <li>
                <a href="https://ivoferro.github.io/">ivoferro.github.io/</a>
              </li>
              <li class="break-word"><i class='glyphicon glyphicon-envelope'></i>
                <a href='mailto:blastingoff@codeschool.com'>ivoferro1995@gmail.com</a>
              </li>
            </ul>

            <p>Computer Science In a Nutshell &copy;2018.</p>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data: function () {
    return {
      form: {
        email: null
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.form.email)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 220px;
  background-color: #333;
  color: #efefef;
  padding: 30px 0;
}
@media only screen and (max-width: 768px) {
  body { margin-bottom: 400px; }
  .footer { height: 400px; }
}
.footer a {
  color: #639bcf;
}
.footer a:hover {
  color: #d8e6f3;
}
.form-buttons {
  margin-top: 5px;
}
</style>
