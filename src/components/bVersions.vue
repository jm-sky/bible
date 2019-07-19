<template>
  <div class="versions">
    <select v-model="$root.$app.version" placeholder="Wersja" class="form-control">
      <option v-for="(version, index) in $root.$app.versions" :key="index">{{ version }}</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
