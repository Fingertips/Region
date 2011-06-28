navigator.region = function() {
  var offset = (new Date()).getTimezoneOffset();
  if (offset >= -120 && offset <= 180) {
    return 'europe';
  } else if (offset < 480) {
    return 'asia'
  } else if (offset > -120 ) {
    return (navigator.language.substring(0,2) === 'en') ? 'oceania' :'asia';
  } else {
    return 'america';
  }
}();