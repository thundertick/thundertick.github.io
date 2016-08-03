require('../css/index.scss');

function resizeTop(){
	document.getElementById('top-content').style.minHeight = (window.innerHeight-130-165)+'px';
}
window.addEventListener('resize', function(){
	resizeTop();
});
resizeTop();

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile){
	document.getElementById('video').style.display = "none";
	document.getElementById('gif').style.display = "block";
}