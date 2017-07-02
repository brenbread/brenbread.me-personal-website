document.addEventListener('DOMContentLoaded', function(){
  var options = {
    stringsElement: '#brenTextAdd',
    typeSpeed: 80,
    backSpeed: 40,
    startDelay: 100,
    backDelay: 2000,
    cursorChar: "_",
    loop: true,
    loopCount: Infinity,
}

var typed = new Typed("#myType", options);

  typed.start();

});
