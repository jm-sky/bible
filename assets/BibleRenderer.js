//---------------------------------------------------------
/**
 * BibleRenderer
 */
const BibleRenderer = {
  bible: {}
};

//---------------------------------------------------------
BibleRenderer.read = function(options = {}) {
  console.log('[BibleRenderer] READ');
  $loader.toggle(true);

  return $.ajax({
    url: `${options.baseUrl}${options.url}`,
    dataType: 'json',
    method: 'get',
  })
  .then(content => {
    console.log('[BibleRenderer] READ content:', content);
    let book = options.readAll || Object.keys(content.books)[0];
    BibleRenderer.bible = content;
    $title.text(content.title);
    $publisher.text(content.publisher);
    BibleRenderer.drawMenu(options);
    BibleRenderer.drawContent(book);
    $loader.toggle(false);
  });
};
//---------------------------------------------------------
BibleRenderer.drawMenu = function(options) {
  console.log('[BibleRenderer.drawMenu]');
  $menu.html('');
  $menu.append('<div class="col-md-1 col-form-label">Wybierz księgę</div>');
  $menu.append('<div class="col-md-10 select-wrapper"></div>');
  $menu.append($showAll);
  $menu.find('.select-wrapper').append($select);
  $select.change(function() { BibleRenderer.drawContent($(this).val() ); });
  $showAll.click(function() {
    console.log('BibleRenderer showAll');
    options.readAll = true;
    BibleRenderer.read(options);
  });
  Object.keys(BibleRenderer.bible.books).forEach(book => {
    let $book = $(`<option>${book}</option>`);
    $select.append($book);
  });
};
//---------------------------------------------------------
BibleRenderer.drawContent = function(bookRange) {
  console.log('[BibleRenderer.drawContent]', bookRange);
  let range = [],
      $list = $('<div class="m-1 p-1 border rounded shadow-sm text-muted text-center"></div>');
  range = bookRange === true ? Object.keys(BibleRenderer.bible.books) : [bookRange];
  
  $chapters.html('');
  $chapters.append($list);

  range.forEach((book, index) => {
    let chapters = BibleRenderer.bible.books[book],
        $book = $(`<h2 id="book_${index}" class="title text-center mt-3">${book}</h2>`);
  
    $select.val(book);
    $chapters.append($book);
    if (bookRange === true) {
      $list.append(`${index > 0 ? ' | ' : ''}<a href="#book_${index}" class="m-1 d-inline-block">${book}</a>`);
    }

    Object.values(chapters).forEach((verses, chapter) => {
      if (bookRange !== true) {
        $list.append(`${chapter > 0 ? ' | ' : ''}<a href="#chapter_${chapter + 1}" class="m-1 d-inline-block">${chapter + 1}</a>`);
      }
      $chapters.append($(`<h3 id="chapter_${chapter + 1}" class="mt-2">Rozdział ${chapter + 1}</h3>`));
      verses.forEach(verse => {
        $chapters.append(`<span id="chapter_${chapter + 1}_verse_${verse.lp}"><small class="MsoSubtleReference text-muted">(${verse.lp})</small>&nbsp;${verse.text}</span> `);
      });
    });
  });

};
//---------------------------------------------------------
BibleRenderer.addSearchResult = function(book, chapter, verse, string) {
  let $item = $(`<div class="px-2 py-1 m-1 border rounded"></div>`),
      $link = $(`<a href="#chapter_${chapter}" class="float-right small text-muted">${book} ${chapter}:${verse.lp}</a>`),
      pattern = new RegExp(`(${string})`, 'i');

    $link.click(function() {
      BibleRenderer.drawContent(book);
      $modal.modal('hide');
      let $linkedVerse = $(`#chapter_${chapter}_verse_${verse.lp}`);
      $linkedVerse.css({'background-color': '#ffa'}).delay(2000).queue(function(next) {
        $linkedVerse.css({'background-color': 'unset'});
        next();
      });
    });

    $item.append(`${verse.text.replace(pattern, '<b>$1</b>')}`);
    $item.append(`<div class="clearfix"></div>`);
    $item.append($link);
    $item.append(`<div class="clearfix"></div>`);
    $results.append($item);
    $modal.modal('show');
};
//---------------------------------------------------------
BibleRenderer.search = function(string) {
  console.log('[BibleRenderer] search', string);
  if (string.length < 3) {
    return;
  }

  $results.html('');

  Object.keys(BibleRenderer.bible.books).forEach(book => {
    Object.keys(BibleRenderer.bible.books[book]).forEach(c => {
      let chapter = BibleRenderer.bible.books[book][c];
      chapter.forEach(v => {
        if (v.text.toLowerCase().includes(string.toLowerCase())) {
          BibleRenderer.addSearchResult(book, c, v, string);
        }
      });
    });
  });

};
//---------------------------------------------------------
BibleRenderer.render = function(options = {}) {
  console.log('[BibleRenderer] RENDER');
  let $wrapper = $('#wrapper')
      $title = $('<h1 class="text-center mt-3">Biblia</h1>'),
      $publisher = $('<h4 class="text-center text-muted font-italic"></h4>'),
      $menu = $('<div class="menu my-1 border p-2 row m-1 rounded shadow-sm"></div>'),
      $select = $(`<select class="form-control"></select>`),
      $content = $('<div class="content text-justify"></div>'),
      $chapters = $(`<div class="chapters"></div>`),
      $topLeft = $('<div class="position-fixed versions p-1 m-1 shadow-sm border rounded" style="top: 0; left: 0; max-width: 48vw;"></div>'),
      $version = $('<select placeholder="Wersja" class="form-control form-control-sm"></select>'),
      $topRight = $('<div class="position-fixed versions p-1 m-1 shadow-sm border rounded" style="top: 0; right: 0; max-width: 48vw;"></div>'),
      $search = $('<input placeholder="Szukaj" class="form-control form-control-sm" type="text" />'),
      $bottomRight = $('<div class="position-fixed resizer p-1 m-1 shadow-sm border rounded" style="bottom: 0; right: 0; z-index: 10000"></div>'),
      $scrollTop = $('<a href="javascript:window.scrollTo(0, 0)" class="btn btn-light btn-sm"><i class="fas fa-arrow-up"></i></a>'),
      $bottomLeft = $('<div class="position-fixed scroller p-1 m-1 shadow-sm border rounded" style="bottom: 0; left: 0"></div>'),
      $sizeUp = $('<a href="#" class="btn btn-light btn-sm"><i class="fas fa-plus"></i></a>'),
      $sizeDown = $('<a href="#" class="btn btn-light btn-sm"><i class="fas fa-minus"></i></a>'),
      $modal = $('<div id="modal" class="modal fade" style="background-color: rgba(0,0,0,0.2)"></div>'),
      $modalDialog = $('<div class="modal-dialog modal-lg"></div>'),
      $modalContent = $('<div class="modal-content p-1"></div>'),
      $modalClose = $('<a href="#" class="btn btn-primary text-light m-1" data-dismiss="modal"><i class="fas fa-times"></i> Zamknij</a>'),
      $results = $('<div class="results"></div>'),
      $showAll = $('<a href="#" class="col-md-1 btn btn-light btn-sm"><i class="fas fa-book"></i> Wszystkie</a>'),
      $loader = $('<div class="loader position-fixed text-center" style="display: none; top: 20px; left: calc(50% - 10px);"><i class="spinner-border"></i></div>'),
      fontSize = 1;

    $wrapper.html('');
    $wrapper.append($title);
    $wrapper.append($publisher);
    $wrapper.append($menu);
    $wrapper.append($content);
    $wrapper.append($topRight);
    $wrapper.append($modal);
    $wrapper.append($bottomRight);
    $wrapper.append($bottomLeft);
    $wrapper.append($loader);

    $modal.append($modalDialog);
    $modalDialog.append($modalContent);
    $modalContent.append($modalClose);
    $modalContent.append($results);

    $topRight.append($search);
    $bottomRight.append($scrollTop);
    $scrollTop.click(() =>  $modal.scrollTop(0));
    $bottomLeft.append($sizeUp);
    $bottomLeft.append($sizeDown);
    $content.append($chapters);
      
  $search.keyup(function(e) {
    if (e.which == 13) {
      BibleRenderer.search($search.val());
    }
  });

  $sizeDown.click(function() {
    fontSize = fontSize - 0.5;
    $chapters.css('font-size', `${fontSize}em`);
  });

  $sizeUp.click(function() {
    fontSize = fontSize + 0.5;
    $chapters.css('font-size', `${fontSize}em`);
  });


  if (options.urls) {
    $wrapper.append($topLeft);
    $topLeft.append($version);
    $version.change(function() {
      options.url = $(this).val();
      BibleRenderer.read(options);
    });
    options.urls.forEach(url => $version.append(`<option>${url}</option>`));
  }

  BibleRenderer.read(options);
};

//---------------------------------------------------------