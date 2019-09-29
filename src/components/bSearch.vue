<template>
<div class="position-fixed search p-1 m-1 shadow-sm border rounded" style="top: 0; right: 0; max-width: 48vw;">
  <div class="input-group input-group-sm">
    <input @keyup.enter="$root.search" v-model="$root.searchPhrase"
      placeholder="Szukaj"
      class="form-control"
      type="text" />
    <div class="input-group-append">
      <button @click="$root.search" class="btn btn-light border" type="button"><i class="fa fa-search fa-fw"></i></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>
