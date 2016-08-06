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

function setInstalled(){
	$('.install-btn').html('Thundertick Installed');
}
if(chrome && chrome.app){
	if(chrome.app.isInstalled){
		setInstalled();
	}
}
$('.install-btn').on('click', function(e){
	if(chrome && chrome.webstore){
		try{
			chrome.webstore.install("https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj",function(){
				setInstalled();
			}, function(){})
		} catch(e){
			console.error(e);
			window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
		}
	} else {
		window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
	}
});