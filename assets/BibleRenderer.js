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
  return $.ajax({
    url: `${options.baseUrl}${options.url}`,
    dataType: 'json',
    method: 'get',
  })
  .then(content => {
    console.log('[BibleRenderer] READ content:', content);
    let book = Object.keys(content.books)[0];
    BibleRenderer.bible = content;
    $title.text(content.title);
    $publisher.text(content.publisher);
    BibleRenderer.drawMenu();
    BibleRenderer.drawContent(book);
  });
};
//---------------------------------------------------------
BibleRenderer.drawMenu = function() {
  console.log('[BibleRenderer.drawMenu]');
  let $select = $(`<select class="form-control"></select>`);
  $menu.html('');
  $menu.append('<div class="col-md-1 col-form-label">Wybierz księgę</div><div class="col-md-11 select-wrapper"></div>');
  $menu.find('.select-wrapper').append($select);
  $select.change(function() { BibleRenderer.drawContent($(this).val() ); });

  Object.keys(BibleRenderer.bible.books).forEach(book => {
    let $book = $(`<option>${book}</option>`);
    $select.append($book);
  });
};
//---------------------------------------------------------
BibleRenderer.drawContent = function(book) {
  console.log('[BibleRenderer.drawContent]', book);
  let chapters = BibleRenderer.bible.books[book];
    
  $chapters.html('');
  $book.text(book);

  Object.values(chapters).forEach((verses, chapter) => {
    $chapters.append($(`<h3 id="chapter_${chapter + 1}" class="mt-2">Rozdział ${chapter + 1}</h3>`));
    verses.forEach(verse => {
      $chapters.append(`<span><small class="MsoSubtleReference text-muted">(${verse.lp})</small>&nbsp;${verse.text}</span> `);
    });
  });
};
//---------------------------------------------------------
BibleRenderer.search = function(string) {
  console.log('[BibleRenderer] search', string);
  if (string.length < 3) {
    return;
  }

  $results.html('');

  Object.keys(BibleRenderer.bible.books).forEach(book => {
    console.log('book:', book);
    Object.keys(BibleRenderer.bible.books[book]).forEach(c => {
      let chapter = BibleRenderer.bible.books[book][c];
      console.log('book:', c, chapter);
      chapter.forEach(v => {
        if (v.text.toLowerCase().includes(string.toLowerCase())) {
          let $item = $(`<div class="px-2 py-1 m-1 border rounded"></div>`),
              $link = $(`<a href="#chapter_${c}" class="float-right small text-muted">${book} ${c}:${v.lp}</a>`);

          $link.click(function() {
            BibleRenderer.drawContent(book);
            $modal.modal('hide');
          });

          $item.append(`${v.text}`);
          $item.append(`<div class="clearfix"></div>`);
          $item.append($link);
          $item.append(`<div class="clearfix"></div>`);
          $results.append($item);
          $modal.modal('show');
        }
      });
    });
  });


};
//---------------------------------------------------------
BibleRenderer.render = function(options = {}) {
  console.log('[BibleRenderer] RENDER');
  let $wrapper = $('#wrapper')
      $title = $('<h1 class="text-center">Biblia</h1>'),
      $publisher = $('<h4 class="text-center text-muted font-italic"></h4>'),
      $menu = $('<div class="menu my-1 border p-2 row m-1 rounded shadow-sm"></div>'),
      $content = $('<div class="content text-justify"></div>'),
      $book = $(`<h2 class="title text-center mt-3"></h2>`),
      $chapters = $(`<div class="chapters"></div>`),
      $versions = $('<div class="versions p-1 m-1 shadow-sm border rounded" style="position: fixed; top: 0; left: 0"></div>'),
      $version = $('<select placeholder="Wersja" class="form-control form-control-sm"></select>'),
      $topRight = $('<div class="versions p-1 m-1 shadow-sm border rounded" style="position: fixed; top: 0; right: 0"></div>'),
      $bottomRight = $('<div class="scroller p-1 m-1 shadow-sm border rounded" style="position: fixed; bottom: 0; right: 0"></div>'),
      $scrollTop = $('<a href="#" class="btn btn-light btn-sm"><i class="fas fa-arrow-up"></i></a>'),
      $search = $('<input placeholder="Szukaj" class="form-control form-control-sm" type="text" />'),
      $modal = $('<div id="modal" class="modal fade" style="background-color: rgba(0,0,0,0.2)"></div>'),
      $modalDialog = $('<div class="modal-dialog modal-lg"></div>'),
      $modalContent = $('<div class="modal-content p-1"></div>'),
      $modalClose = $('<a href="#" class="btn btn-primary text-light m-1" data-dismiss="modal">Zamknij</a>'),
      $results = $('<div class="results"></div>');

    $wrapper.html('');
    $wrapper.append($title);
    $wrapper.append($publisher);
    $wrapper.append($menu);
    $wrapper.append($content);
    $wrapper.append($topRight);
    $wrapper.append($bottomRight);
    $wrapper.append($modal);

    $modal.append($modalDialog);
    $modalDialog.append($modalContent);
    $modalContent.append($modalClose);
    $modalContent.append($results);

    $topRight.append($search);
    $bottomRight.append($scrollTop);
    $content.append($book);
    $content.append($chapters);
      
  $search.keyup(function(e) {
    if (e.which == 13) {
      BibleRenderer.search($search.val());
    }
  });

  if (options.urls) {
    $wrapper.prepend($versions);
    $versions.append($version);
    $version.change(function() {
      options.url = $(this).val();
      BibleRenderer.read(options);
    });
    options.urls.forEach(url => $version.append(`<option>${url}</option>`));
  }

  BibleRenderer.read(options);
};

//---------------------------------------------------------
