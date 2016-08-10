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
if(navigator.userAgent.toLowerCase().indexOf('chrome')) {
	if(chrome != undefined){
		if(chrome.app.isInstalled){
			setInstalled();
		}
	}
}
$('.install-btn').on('click', function(e){
	if(navigator.userAgent.toLowerCase().indexOf('chrome')) {
		if(chrome != undefined && chrome.webstore){
			try{
				chrome.webstore.install("https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj",function(){
					setInstalled();
				}, function(){})
			} catch(e){
				console.error(e);
				window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
			}
		}
	} else if(navigator.userAgent.toLowerCase().indexOf('firefox')) {
		window.top.location = "https://addons.mozilla.org/en-GB/firefox/addon/thundertick/";
	} else {
		window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
	}
});