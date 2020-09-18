<template>
  <section class="banner col-12" id="home">
    <Navbar />

     <div class="row">
       <div class="col-12 col-md-6">
         <p><img src="../assets/home/beth-face.png" class="my-4 w-50" alt=""></p>
       </div>

       <div class="col-12 col-md-6 d-flex flex-column">
        <div class="my-auto">
          <h1 id="name" class="display-4">Lilibeth Fabregas</h1>

          <h5 class="">CPA . Web Developer.</h5>
          <p class="w-50 mx-auto my-4"><a href="#" target="_blank" class="btn btn-outline-secondary px-4 btn-block">View CV</a></p>
          <div class="d-flex justify-content-center col-6 mx-auto py-4">
            <!--					<a title="gitlab" href="https://gitlab.com/lilibethfabregas" class="px-4"><i class="fab fa-gitlab text-secondary"></i></a>-->
            <!--					<a title="codepen" href="" class="px-4"><i class="fab fa-codepen text-secondary"></i></a>-->
            <a title="linkedin" href="https://ph.linkedin.com/in/lilibeth-fabregas-bb0a0a120" target="_blank" class="px-4"><i class="fab fa-linkedin-in text-secondary"></i></a>
            <a title="youtube" href="https://www.youtube.com/channel/UCAsYo-w1L1zd0L8M6Zdk0Zg?view_as=subscriber" target="_blank" class="px-4"><i class="fab fa-youtube text-secondary"></i></a>
            <!--					<a title="hackerrank" href="" class="px-4"><i class="fab fa-hackerrank text-secondary"></i></a>-->
          </div>
        </div>
       </div>
     </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: 'SectionOne',
  components: { Navbar }
}
</script>

<style scoped>
.banner {
  min-height: 80vh;
}

</style>
