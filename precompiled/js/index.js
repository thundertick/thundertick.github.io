require('../css/index.scss');

function resizeTop(){
	document.getElementById('top-content').style.minHeight = (window.innerHeight-130-165)+'px';
}
window.addEventListener('resize', function(){
	resizeTop();
});
resizeTop();