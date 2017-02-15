function formatDate(text) {
  return text.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
    .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
}
console.log(formatDate('2016-06-17'));
console.log(formatDate('2017/05/03'));
console.log(formatDate('2015/01-31')); 
