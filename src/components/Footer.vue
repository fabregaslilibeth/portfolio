<template>
  <div class="w-full footer-section mb-20 lg:mb-0">
    <section class="text-white p-4 flex items-end">
      <div class="w-full md:w-1/2 text-xs">
        <p>Lilibeth Fabregas || CPA. Web Developer.</p>
        <p>
          fabregaslilibeth@gmail.com || +63 930 130 6506 || Pasig, Metro Manila
        </p>
        <p>Tools used for this portfolio: vuejs, tailwindcss</p>
        <p>Disclaimer: All photos used on the projects are not mine.</p>
      </div>

      <div class="text-xs"></div>
    </section>
  </div>
</template>

<style scoped>
@media screen and (max-width: 640px) {
  .footer-section {
    background: #49084f;
  }
}

@media screen and (min-width: 641px) {
  .footer-section {
    background: url("@/assets/backgrounds/footer.png") bottom center no-repeat;
    background-size: cover;
  }
}
</style>
