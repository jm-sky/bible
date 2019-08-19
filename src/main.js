import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import _get from 'lodash/_baseGet'
import * as $ from 'jquery'
import 'bootstrap'
import './sass/app.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  //===============================
  render: h => h(App),
  //===============================
  data: {
    loading: false,
    title: 'Biblia',
    publisher: 'Biblia...',
    version: '',
    book: '',
    bible: {
      books: []
    },
    versions: [
      `UBG-NT.json`,
      `UBG-ST-NT.json`,
      `EIB-NT.json`,
      `BW-NT.json`,
      `BW-ST-NT.json`,
      `RSV-NT.json`,
    ],
    showAll: false,
    searchPhrase: null,
    searchResults: [],
    config: {
      baseUrl: `${window.location.origin}`,
      shelf: 'books',
      fontSize: 1,
      highContrast: false,
      search: {
        highlightColor: "#ffa",
        highlightTime: 2000
      }
    }
  },
  //===============================
  watch: {
    //==========
    'config.highContrast'() {
      document.body.classList.toggle('high-contrast', this.config.highContrast);
      localStorage.setItem('Bible.highContrast', JSON.stringify(this.config.highContrast));
    },
    //==========
    'config.fontSize'() {
      localStorage.setItem('Bible.fontSize', JSON.stringify(this.config.fontSize));
    },
    //==========
    version() {
      window.DEBUG ? console.log('[Bible][watch][version]:', this.version) : false;
      localStorage.setItem('Bible.version', JSON.stringify(this.version));
      this.read();
    },
    //==========
    book() {
      window.DEBUG ? console.log('[Bible][watch][book]:', this.book, ' | showAll:', this.showAll) : false;
      this.showAll = false;
    },
    //==========
  },
  //===============================
  computed: {
    chapters() {
      let book = _get(this.bible, `books.${this.book}`) || {};
      return Object.keys(book);
    },
  },
  //===============================
  methods: {
    //==========
    read(showAll = false) {
      window.DEBUG ? console.log('[Bible][read] showAll:', showAll, ' | version: ', this.version) : false;

      this.loading = true;
      this.showAll = showAll;

      return $.ajax({
        url: `${this.config.baseUrl}/${this.config.shelf}/${this.version}`,
        dataType: 'json',
        method: 'get',
      })
      .then(content => {
        this.loading = false;
        window.DEBUG ? console.log('[Bible] READ content:', content) : false;
        this.book = Object.keys(content.books)[0];
        this.bible = content;
        this.title = content.title;
        this.publisher = content.publisher;
      })
      .fail(() => this.loading = false);
    },
    //==========
    search() {
      window.DEBUG ? console.log('[Bible][search]', this.searchPhrase) : false;
      if ((this.searchPhrase || '').length < 3) {
        return;
      }
      
      this.searchResults = [];
      
      Object.keys(this.bible.books).forEach(book => {
        Object.keys(this.bible.books[book]).forEach(c => {
          let chapter = this.bible.books[book][c];
          chapter.forEach(v => {
            if (v.text.toLowerCase().includes(this.searchPhrase.toLowerCase())) {
              this.addSearchResult(book, c, v);
            }
          });
        });
      });
      
    },
    //==========
    addSearchResult(book, chapter, verse) {
      let pattern = new RegExp(`(${this.searchPhrase})`, 'i');

      verse.text = verse.text.replace(pattern, '<b>$1</b>')

      this.searchResults.push({
        book: book,
        chapter: chapter,
        verse: verse,
        needle: this.searchPhrase+''
      });
      $('#modal').modal('show');
      window.DEBUG ? console.log('[Bible][addSearchResult]', this.searchResults) : false;
    },
    //==========
    copy() {
      let sel = window.getSelection(),
          starting = $(sel.anchorNode.parentElement).data('paragraph') || {},
          ending = $(sel.focusNode.parentElement).data('paragraph') || {},
          $copyFooter = $(`<small class="text-muted"></small>`),
          $copyHolder = $('<div>', { style: { position: 'absolute', left: '-99999px' } }),
          info = `${starting.book} ${starting.chapter}:${starting.verse}`;
  
      if (starting != ending && starting.book == ending.book) {
        info = `${info} - ${ending.chapter}:${ending.verse}`;
      }
  
      if (starting != ending && starting.book != ending.book) {
        info = `${info} - ${ending.book} ${ending.chapter}:${ending.verse}`;
      }
  
      $copyFooter.html(`(${info})`);
      $copyHolder.html(`${sel}`);
      $copyHolder.append(`<br />`);
      $copyHolder.append($copyFooter);
  
      $('body').append($copyHolder);
      sel.selectAllChildren($copyHolder[0]);
      window.setTimeout(() => $copyHolder.remove(), 0);
    },
    //==========
  },
  //===============================
  beforeMount() {
    let highContrast = JSON.parse(localStorage.getItem('Bible.highContrast'));
    if ([true, false].includes(highContrast)) {
      this.config.highContrast = highContrast;
    }
    
    let fontSize = JSON.parse(localStorage.getItem('Bible.fontSize'));
    if (isNaN(fontSize) === false) {
      this.config.fontSize = fontSize;
    }

    let userVersion = JSON.parse(localStorage.getItem('Bible.version'));
    if (this.versions.includes(userVersion)) {
      this.version = userVersion;
    } else {
      this.version = this.versions[0];
    }

  },
  //===============================
  mounted() {
    window.DEBUG ? console.log('[Bible mSky mounted]', this) : false;

    $(document).on('copy', this.copy);
  }
  //===============================
}).$mount('#app')
