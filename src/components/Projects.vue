<template>
  <section class="three" id="projects">
    <h1>PROJECTS</h1>
    <div class="container">
      <div class="row my-4">

        <ul class="nav nav-pills mb-3 text-center mx-auto col-12" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#laravel" role="tab" aria-controls="laravel" aria-selected="true">Laravel</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#vue" role="tab" aria-controls="vue" aria-selected="false">Vue</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#react" role="tab" aria-controls="react" aria-selected="false">React</a>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">


        </div>
      </div>

    </div> <!-- end of container -->
  </section>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style scoped lang="scss">

</style>
