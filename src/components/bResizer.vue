<template>
  <div class="position-fixed scroller p-1 m-1 shadow-sm border rounded" style="bottom: 0; left: 0">
    <a @click="sizeUp" href="javascript:;" class="btn btn-light btn-sm">
      <i class="fa fa-plus"></i>
    </a>
    <a @click="sizeDown" href="javascript:;" class="btn btn-light btn-sm ml-1">
      <i class="fa fa-minus"></i>
    </a>
  </div>
</template>

<script>
export default {
  //===============================
  methods: {
    sizeDown() {
      // console.log('[sizeDown]', this.$root.config.fontSize)
      this.$root.config.fontSize = (this.$root.config.fontSize || 1) - 0.5;
    },
    sizeUp() {
      // console.log('[sizeUp]', this.$root.config.fontSize)
      this.$root.config.fontSize = (this.$root.config.fontSize || 1) + 0.5;
    },
  }
  //===============================
}
</script>
