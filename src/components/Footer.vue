<template>
  <section class="footer text-white p-4">

    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#projects">Projects</a>
        </li>
      </ul>
    </nav>

    <p>Lilibeth Fabregas || CPA. Web Developer. &copy; 2019 </p>
    <p>fabregaslilibeth@gmail.com || +63943-071-3628</p>

    <div>
      <p>Disclaimer: All photos in the projects are not mine. </p>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer {
    font-size: 12px;
    background: #15211c;
  }
</style>