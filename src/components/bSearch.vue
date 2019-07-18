<template>
    <div class="position-fixed search p-1 m-1 shadow-sm border rounded" style="top: 0; right: 0; max-width: 48vw;">
        <input @keyup.enter="$root.search" v-model="$root.searchPhrase" placeholder="Szukaj"
            class="form-control form-control-sm" type="text" />
    </div>
</template>

<script>
export default {
    
}
</script>
