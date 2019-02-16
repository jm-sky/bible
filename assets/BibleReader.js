//---------------------------------------------------------
/**
 * BibleReader
 */
const BibleReader = {
  bible: {},
  timeout: null,
  options: {
    timeout: 300
  }
};
//---------------------------------------------------------
/**
 * readContent
 */
BibleReader.readContent = function(book, chapter) {
  let $werset = document.getElementById('werset'),
      item = {};

  $werset.childNodes.forEach((node, index) => {
    if (node.id == 'nrWersetu') {
      item = {};
      item.lp = node.textContent.replace(/\(|\)/g, '').trim();
    } else {
      item.text = node.textContent.trim();
      BibleReader.bible[book][chapter].push(item);
    }
  });
  console.log('[BibleReader]', book, chapter, BibleReader.bible[book]);
};
//---------------------------------------------------------
/**
 * nextChapter
 */
BibleReader.nextChapter = function(bookName = null, readAll = false, timeout = false) {
  let $nextChapter = document.getElementById('next-chapter'),
      noNextChapter = $nextChapter.className.includes('is-disabled'),
      $nextBook = document.getElementById('next-book'),
      noNextBook = $nextBook.className.includes('is-disabled'),
      $book = document.getElementsByName('ksiega'),
      $chapter = document.getElementsByName('rozdzial'),
      book = $book ? $book[0].value : null,
      chapter = $chapter ? $chapter[0].value : null;

  timeout = timeout || BibleReader.options.timeout;
  bookName = bookName || book;
  bookName = readAll ? book : bookName;

  if (bookName == book) {
    BibleReader.bible[book] = BibleReader.bible[book] || {};
    BibleReader.bible[book][chapter] = BibleReader.bible[book][chapter] || [];
    BibleReader.readContent(book, chapter);
  }

  if (readAll === true && noNextChapter && $nextBook && !noNextBook) {
    console.log('[BibleReader] NEXT BOOK');
    $nextBook.click();
    BibleReader.timeout = setTimeout(() => BibleReader.nextChapter(bookName, readAll, timeout), timeout);
    return;
  }

  if (bookName != book || noNextChapter) {
    console.log('[BibleReader] FINISHED');
    console.log('[BibleReader] Biblie: ', BibleReader.bible);
    return;
  }

  console.log('[BibleReader] NEXT CHAPTER');
  $nextChapter.click();
  BibleReader.timeout = setTimeout(() => BibleReader.nextChapter(bookName, readAll, timeout), timeout);

};
//---------------------------------------------------------
/**
 * stop
 */
BibleReader.stop = function() {
  clearTimeout(BibleReader.timeout);
  BibleReader.timeout = null;
};
//---------------------------------------------------------
/**
 * download
 */
BibleReader.downloadBook = function(content, fileName, contentType = 'application/json') {
  console.log('[BibleReader] downloadBook', content);
  var a = document.createElement('a'),
      file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};
//---------------------------------------------------------
/**
 * readTheBook
 */
BibleReader.readTheBook = function(options = {}) {
  BibleReader.options = Object.assign(BibleReader.options, options);
  BibleReader.nextChapter(options.bookName, options.readAll);
};
//---------------------------------------------------------
BibleReader.readTheBook({
  bookName: null,
  readAll: true,
  timeout: 350
});
