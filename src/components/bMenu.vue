<template>
    <div class="menu form-row align-items-center p-2 border m-1 rounded shadow-sm">
        <label class="my-1 pl-2 col-md-2 col-form-label" for="menu--book">
            Wybierz księgę
        </label>
        <div class="my-1 col-md-8 select-wrapper">
            <select v-model="$root.book" class="form-control" id="menu--book">
                <option v-for="(text, book) in $root.bible.books" :key="book">{{ book }}</option>
            </select>
        </div>
        <div class="my-1 col-md-2 text-nowrap">
            <a @click="$root.read(true)" href="#" class="btn btn-light border btn-block">
                <i class="fa fa-book"></i> Wszystkie
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
