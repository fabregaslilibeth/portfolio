<template>
  <div class="hello">
    <h1>Project</h1>
  </div>
</template>

<script>
export default {
  name: 'Project',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.disclaimer {
  right: 10px;
  bottom: 0;
}

.demo iframe {
  width: 560px;
  height: 315px;
}

ol {
  list-style: none;
  counter-reset: procedure-counter;

}

ol hr {
  counter-increment: procedure-counter;
  position: relative;
}

ol hr::after {
  content: counter(procedure-counter);
  width: 40px;
  height: 40px;
  background: rgba(128, 128, 128, .2);
  border-radius: 100%;
  font-size: 1.5rem;
  position: absolute;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  top: -20px;
  left: -40px;
}

ol span:nth-child(2n) hr::after {
  left: unset !important;
  right: -40px !important;
}
@media (max-width: 768px) {
  .demo iframe {
    width: 350px;
    height: 230px;
  }
}

@media (max-width: 425px) {
  .demo iframe {
    width: 280px;
    height: 164px;
  }
}
</style>
