<template>
    <div class="search mx-1">
        <input @keyup.enter="$root.$app.search" v-model="$root.$app.searchPhrase" placeholder="Szukaj"
            class="form-control form-control-sm" type="text" />
    </div>
</template>

<script>
export default {
    
}
</script>
