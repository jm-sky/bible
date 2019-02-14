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
    url: `./${options.filename}`,
    dataType: 'json',
    method: 'get',
    
  }).then(result => {
    console.log('[BibleRenderer] READ result:', result);
    return result;
  });
};
//---------------------------------------------------------
BibleRenderer.drawMenu = function() {
  console.log('[BibleRenderer.drawMenu]');
  let $select = $(`<select class="form-control"></select>`);
  $menu.append('<div class="col-md-1 col-form-label">Wybierz księgę</div><div class="col-md-11 select-wrapper"></div>');
  $menu.find('.select-wrapper').append($select);
  $select.change(function() { BibleRenderer.drawContent($(this).val() ); });

  Object.keys(BibleRenderer.bible).forEach(book => {
    let $book = $(`<option>${book}</option>`);
    $select.append($book);
  });
};
//---------------------------------------------------------
BibleRenderer.drawContent = function(book) {
  console.log('[BibleRenderer.drawContent]', book);
  let chapters = BibleRenderer.bible[book];
    
  $chapters.html('');
  $title.text(book);

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
      $menu = $('<div class="menu my-1 border p-2 row m-1 rounded shadow-sm"></div>'),
      $content = $('<div class="content"></div>'),
      $title = $(`<h2 class="title text-center mt-3"></h2>`),
      $chapters = $(`<div class="chapters"></div>`);

  $wrapper.append($menu);
  $wrapper.append($content);
  $content.append($title);
  $content.append($chapters);

  BibleRenderer.read(options)
  .then(content => {
    BibleRenderer.bible = content;
    BibleRenderer.drawMenu();
    let book = Object.keys(content)[0];
    BibleRenderer.drawContent(book);
  });
};

//---------------------------------------------------------
$(function() {
  BibleRenderer.render({
    filename: 'ST-NT.json'
  });     
});