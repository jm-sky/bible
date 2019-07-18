<template>
  <div class="position-fixed versions p-1 m-1 shadow-sm border rounded">
    <select v-model="$root.version" placeholder="Wersja" class="form-control form-control-sm">
      <option v-for="(version, index) in $root.versions" :key="index">{{ version }}</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style>
.versions {
  top: 0;
  left: 0;
  max-width: 48vw;
}
</style>
