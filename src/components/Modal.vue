<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered" :class="addClass" role="document">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body p-0 position-relative" v-if="imageModal">
          <slot name="image-modal">
            <img src="https://lh3.googleusercontent.com/CvbT6emr4JaU5BmzqAKCh1XXKU…no2rRTNPkkPNlH1knhAbnDrC0DXb5VP4f6i=w1880-h931-no?authuser=0" alt="">
          </slot>
        </div>
        <div class="modal-body px-3 pb-3 pt-0" v-else>
          <slot v-if="generic" name="generic"/>
          <template v-else>
            <div class="row px-3">
              <div class="col-12 text-center mb-4">
                <slot name="icon"/>
              </div>
              <div class="col-12 text-center">
                <h2 class="font-weight-bolder">
                  <slot name="header"/>
                </h2>
              </div>
              <div class="col-12 text-center modal-text">
                <slot name="body">
                </slot>
              </div>
              <slot name="buttons"/>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'

export default {
  name: 'Modal',

  props: {
    generic: {
      type: Boolean,
      default: false,
    },
    shouldShow: {
      type: Boolean,
      default: false,
    },
    imageModal: {
      type: Boolean,
      default: false,
    },
    addClass: String
  },

  data () {
    return {
      // This would allow us to show the modal just
      // by changing the value via Vue Dev Tools.
      // This is private. Do not modify this value
      // externally.
      isShown: false,
    }
  },

  mounted () {
    if (this.shouldShow) {
      this.show()
    }
    $(this.$el).on('hide.bs.modal', () => {
      this.$emit('hide')
    })
  },

  beforeDestroy () {
    $(this.$el).modal('dispose')
  },

  methods: {
    show () {
      $(this.$el).modal('show')
    },
    hide () {
      $(this.$el).modal('hide')
      this.$emit('hide')
    },
  },

  watch: {
    isShown (isShown) {
      if (isShown) {
        this.show()
      } else {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss">
.close-image-modal {
  position: absolute;
  right: .5rem;
  top: .5rem;
  z-index: 1;
}
</style>
