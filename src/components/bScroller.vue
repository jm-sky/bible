<template>
    <div class="position-fixed resizer p-1 m-1 shadow-sm border rounded">
        <a @click="$root.$app.config.highContrast = !$root.$app.config.highContrast"
                href="javascript:;"
                class="btn btn-sm mr-1"
                :class="$root.$app.config.highContrast ? 'btn-primary' : 'btn-light'">
            <i class="fa fa-adjust"></i>
        </a>
        <a href="javascript:window.scrollTo(0, 0)" class="btn btn-light btn-sm">
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
