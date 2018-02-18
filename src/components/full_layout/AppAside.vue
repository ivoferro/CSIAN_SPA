<template>
  <aside>

    <div class='keywords'>
      <h4>Keywords</h4>
      <ul class='list-inline'>
        <li class="list-inline-item"><a href='#'>Vuejs</a></li>
        <li class="list-inline-item"><a href='#'>Elixir</a></li>
        <li class="list-inline-item"><a href='#'>Etherium</a></li>
        <li class="list-inline-item"><a href='#'>Vuejs</a></li>
        <li class="list-inline-item"><a href='#'>Elixir</a></li>
        <li class="list-inline-item"><a href='#'>Etherium</a></li>
        <li class="list-inline-item"><a href='#'>Vuejs</a></li>
        <li class="list-inline-item"><a href='#'>Elixir</a></li>
        <li class="list-inline-item"><a href='#'>Etherium</a></li>
      </ul>
    </div>

    <div class='featured'>
      <h4>Featured</h4>
      <b-card title="Profitable framework for etherium"
              img-src="https://placekitten.com/500/350"
              img-fluid
              img-alt="image"
              img-top>
        <p class="card-text">
            Learn what's behind the hoods of the most successful projects.
            <a href='#'>read more...</a>
        </p>
        <small class="text-muted">Last updated 3 mins ago</small>
      </b-card>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'app-aside'
}
</script>

<style scoped>
  aside h4 {
    color: #333;
  }
  .featured .card-title {
    font-size: 22px;
  }
  .featured .card-text {
    font-size: 14px;
    text-align: justify;
  }
</style>
