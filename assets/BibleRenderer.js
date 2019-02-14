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
    $chapters.append($(`<h3 class="mt-2">Rozdział ${chapter + 1}</h3>`));
    verses.forEach(verse => {
      $chapters.append(`<span><small class="MsoSubtleReference text-muted">(${verse.lp})</small>&nbsp;${verse.text}</span> `);
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
      $versions = $('<div class="versions border rounded p-1 m-1" style="position: absolute; top: 0; left: 0"></div>'),
      $version = $('<select class="form-control form-control-sm"></select>');

  $wrapper.html('');
  $wrapper.append($title);
  $wrapper.append($publisher);
  $wrapper.append($menu);
  $wrapper.append($content);
  $content.append($book);
  $content.append($chapters);

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
