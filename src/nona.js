var nonaSlider = () => {
  var slides = document.querySelectorAll('.nona-slide');
  var len = slides.length;
  var i = 0;

  slides[i].classList.add('nona-show');
  i++;	

  var timer = setInterval(page, 4000);

  /* this is run in a loop,
	alternately hiding and showing slides
	using a 'show' css class.
  */
  function page() {
    if (i == len) {
 
      slides[i-1].classList.remove('nona-show');
      i = 0;	
      slides[i].classList.add('nona-show');
      i++;	
 
    } else {
 
      if (i>0) {slides[i-1].classList.remove('nona-show');}
      slides[i].classList.add('nona-show');	
      i++;
 
    }
  };
}; 

nonaSlider();

