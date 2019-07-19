<template>
    <div class="menu">
        <div class="select-wrapper">
            <select v-model="$root.$app.book" class="form-control">
                <option v-for="(text, book) in $root.$app.bible.books" :key="book">{{ book }}</option>
            </select>
        </div>
        <a @click="$root.$app.read(true)" href="#" class="col-md-1 btn btn-light btn-sm btn-block mt-2">
            <i class="fa fa-book"></i> Wszystkie
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>
