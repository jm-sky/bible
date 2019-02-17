var BibleReader = BibleReader || {};
BibleReader.bible = {};
BibleReader.timeout = null;
BibleReader.options = {
  timeout: 300
};
//--------------------------------------------------------
/**
 * readContent
 */
BibleReader.readContent = function($content) {
  console.log('[BibleReader.readContent]');
  let book = $content.find('h2').text().trim(),
      $chapter = $content.find('h3'),
      chapter = $chapter.text().replace('глава', '').trim(),
      $verses = $chapter.next('p').html();

  BibleReader.bible[book] = BibleReader.bible[book] || {};
  BibleReader.bible[book][chapter] = BibleReader.bible[book][chapter] || [];

  $verses.split('<br>').forEach($verse => {
    $verse = $(`<div>${$verse}</div>`)[0];
    BibleReader.bible[book][chapter].push({
      lp: $verse.childNodes[0].textContent.trim(),
      text: $verse.childNodes[1].textContent.trim()
    });
  });
  
  console.log('[BibleReader.readContent]', book, chapter, BibleReader.bible[book]);
};
//--------------------------------------------------------
/**
 * scanChapters
 */
BibleReader.scanChapters = function($content, bookUrl) {
  let $list = $content.find('.textHeader').find('p').find('a, span').toArray();

  $list.forEach(link => {
    console.log('[BibleReader.scanChapters] link:', link.textContent);
    if (link.href) {
      $.ajax({
        url: `${bookUrl}${link.textContent}.htm`,
        async: false
      }).then(content => {
        BibleReader.readContent( $(content) );
      });
    } else {
      BibleReader.readContent( $content );
    }
  });
};
//--------------------------------------------------------
/**
 * readTheBook
 */
BibleReader.readTheBook = function(index = 40, max = true) {
  let finished = false;

  while (finished === false && (max === true || index <= max)) {
    console.log('[BibleReader.readTheBook] page:', index);
    $.ajax({
      url: `https://www.wordproject.org/bibles/ru/${index}/1.htm`,
      async: false
    }).then(content => {
      BibleReader.scanChapters( $(content), `https://www.wordproject.org/bibles/ru/${index}/` );
    }).fail(e => {
      console.log('[BibleReader.readTheBook] NOT FOUND - FINISHED');
      finished = true;
    });
    index++;
  }
  
  console.log('[BibleReader.readTheBook] FINISHED', BibleReader.bible);
};
//--------------------------------------------------------

BibleReader.readTheBook(40, 41);