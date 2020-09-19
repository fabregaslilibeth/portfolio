<template>
  <section class="col-12" id="skills">

    <div class="container-fluid p-0">
      <div class="row">

        <div class="about col-12 col-md-8 mx-auto p-4">
          <h3 class="p-4">Hi, please call me Beth..</h3>
          <p  class="p-2">Yes, I am a licensed accountant, or a CPA for a more familiar term. And yes, I am now working as a programmer.
            I don't hate accounting. If I could turn back time, I'd still choose accountancy as my course in college, and
            still work as an accountant for the first six years of my 'professional' life. Accounting has taught me to
            work hard, to be serious in what I do, and to persevere, among other things.</p>
          <p  class="p-2">I chose to shift to programming because I want to challenge myself. Accounting offers challenges in the
            first few years, but as I progress, it has become contentious, accounting policies don't change that often,
            unlike in the IT field where everything changes so often.
          </p>
          <p  class="p-2">I am always longing to learn something more, and I love being in this field because it helps me with
            continuous learning. Its what I always look forward to. Ive been in the IT field for more than a year now,
            and I think I know very little still. I'm sure even after ten years I will still have a lot to learn. And
            that is what I want, to continue learning and never be satisfied of what I know. That's exactly what
            programming is for me, and that is why I chose this.</p>
          <p  class="p-2">As Steve Jobs said, “Your work is going to fill a large part of your life, and the only way to be truly
            satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.
            If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when
            you find it.”</p>
          <p>And now I can say, I am settled.</p>
        </div>

        <Skills />
  
      </div>
    </div>


  </section>
</template>

<script>
import Skills from "./Skills";
export default {
  name: 'About',
  components: { Skills }
}
</script>

<style scoped lang="scss">

.about {
  position: relative;
}

</style>
