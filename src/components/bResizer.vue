<template>
  <div class="position-fixed scroller p-1 m-1 shadow-sm border rounded" style="bottom: 0; left: 0">
    <a @click="$root.fontSizeUp" href="javascript:;" class="btn btn-light btn-sm" v-tooltip="'Większa czcionka'">
      <i class="fa fa-plus"></i>
    </a>
    <a @click="$root.fontSizeDown" href="javascript:;" class="btn btn-light btn-sm ml-1" v-tooltip="'Mniejsza czcionka'">
      <i class="fa fa-minus"></i>
    </a>
  </div>
</template>

<script>
export default {}
</script>
