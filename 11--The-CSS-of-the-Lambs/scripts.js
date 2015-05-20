(function(window){
  var BASE_URL = 'http://lorempixel.com/400/200/abstract';

  function rando(limit){
    return Math.floor(Math.random() * limit);
  }

  function randoImage(){
    return BASE_URL + '?' + rando(1000);
  }

  $('img').attr('src', randoImage);
})(window);
