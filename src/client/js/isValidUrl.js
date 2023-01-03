//validate pending url; this idea was borrowed from freeCodeCamp
//https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
//regex seemed to be more consistent than the built-in URL method, which i was previously using
const isValidUrl = urlString => {
    let urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
  '((\\d{1,3}\\.){3}\\d{1,3}))'+
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
  '(\\?[;&a-z\\d%_.~+=-]*)?'+
  '(\\#[-a-z\\d_]*)?$','i');
    return !!urlPattern.test(urlString);
}

//export for testing...
// testing passed
const _isValidUrl = isValidUrl;
export { _isValidUrl as isValidUrl };
