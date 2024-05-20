function myMove() {
  var elem = document.getElementById("animate");   
  var posTop = 0;
  var posLeft = 0;
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  posLeft++;
	  elem.style.top = posTop + "px"; 
	  elem.style.left = posLeft + "px"; 
	  if ((posTop == 350) && (posLeft == 350))
		  clearInterval(id);
  }
}
