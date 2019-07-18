<template>
    <div class="menu my-1 border p-2 row m-1 rounded shadow-sm">
        <div class="col-md-2 col-form-label">Wybierz księgę</div>
        <div class="col-md-9 select-wrapper">
            <select v-model="$root.book" class="form-control">
                <option v-for="(text, book) in $root.bible.books" :key="book">{{ book }}</option>
            </select>
        </div>
        <a @click="$root.read(true)" href="#" class="col-md-1 btn btn-light btn-sm">
            <i class="fa fa-book"></i> Wszystkie
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>
