<template>
  <div class="position-fixed resizer p-1 m-1 shadow-sm border rounded">
    <a @click="$root.config.showLaw = !$root.config.showLaw" 
        v-tooltip="'Nota prawna'"
        class="btn btn-sm mr-1"
        :class="$root.config.showLaw ? 'btn-primary text-light' : 'btn-light'"
    >
      <i class="fa fa-gavel"></i>
    </a>
    <a @click="$root.config.showOptions = !$root.config.showOptions" 
        v-tooltip="'Opcje'"
        class="btn btn-sm mr-1"
        :class="$root.config.showOptions ? 'btn-primary text-light' : 'btn-light'"
    >
      <i class="fa fa-cog"></i>
    </a>
    <a @click="$root.config.highContrast = !$root.config.highContrast" 
        v-tooltip="'Kontrast'"
        class="btn btn-sm mr-1"
        :class="$root.config.highContrast ? 'btn-primary text-light' : 'btn-light'"
    >
      <i class="fa fa-adjust"></i>
    </a>
    <a href="javascript:window.scrollTo(0, 0)" class="btn btn-light btn-sm" v-tooltip="'Do góry'">
      <i class="fa fa-arrow-up"></i>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style>
.resizer {
    bottom: 0;
    right: 0;
    z-index: 10000
}
</style>
