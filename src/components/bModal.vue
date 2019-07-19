<template>
  <div id="modal" class="modal fade" style="background-color: rgba(0,0,0,0.2)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-1">
        <a href="javascript:;" class="btn btn-primary text-light m-1" data-dismiss="modal">
          <i class="fa fa-times"></i> Zamknij
        </a>
        <div class="results">
          <div
            v-for="(item, index) in $root.searchResults"
            :key="index"
            class="px-2 py-1 m-1 border rounded"
          >
            <span v-html="item.verse.text"></span>
            <div class="clearfix"></div>
            <a
              @click="seek(item)"
              :href="`#chapter_${item.chapter}`"
              class="float-right small text-muted"
            >{{ item.book }} {{ item.chapter }}:{{ item.verse.lp }}</a>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from "jquery";

export default {
  //===============================
  methods: {
    seek(item) {
      window.DEBUG ? console.log("[seek] item:", item) : false;
      this.$root.book = item.book;
      $("#modal").modal("hide");

      this.$nextTick(() => {
        let $linkedVerse = $(`#chapter_${item.chapter}_verse_${item.verse.lp}`);

        $linkedVerse
          .css({ "background-color": this.$root.config.search.highlightColor })
          .delay(this.$root.config.search.highlightTime)
          .queue(function(next) {
            $linkedVerse.css({ "background-color": "unset" });
            next();
          });
      });
    }
  }
  //===============================
};
</script>
