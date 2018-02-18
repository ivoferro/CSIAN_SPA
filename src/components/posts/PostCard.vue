<template>
  <div class="card">
    <div class='card-img-wrapper'>
      <img src="https://placekitten.com/400/250" alt="Card image cap">
    </div>
    <div class="card-body">
      <h5 class="card-title">Post Title</h5>
      <p class="card-text">
        This is quite a long post for a post review, but yeah, lets see what is the behavior and how it is looking.
        <a href="#">read more...</a>
      </p>
    </div>
    <div class="card-footer">
      <p class="card-text"><small class="text-muted"><a href="#">IVO FERRO</a> - 17 February, 2018</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-card'
}
</script>

<style scoped>
  .card {
    height:310px;
  }

  .card-img-wrapper {
    background-color:rgb(248, 248, 248);
    height: 50%;
    text-align: center;
  }
  .card-img-wrapper img{
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  .card-body {
    padding: 5px 10px 0px 10px;
  }
  .card-title {
    font-size: 20px;
    margin: 0 0 5px 0;
  }
  .card-text {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 5px;
    height: 20px;
  }
</style>
