<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" media="all" href="./assets/css/app.min.css" />
</head>
<body>
    <h1>Videojs </h1>
	

	<section id="ejemplo1">
		<h2>Ejemplo 1</h2>
		<p>Ejemplo de setup inicial de video con configuracion por javascript</p>
		<video id="my-player1" class="video-js">
			<p class="vjs-no-js">
			To view this video please enable JavaScript, and consider upgrading to a web browser that
				<a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
			</p>
		</video>
	</section>


	<section id="ejemplo2">
		<h2>Ejemplo 2</h2>
		<p>Ejemplo Embed video con configuracion en el embbed, incluyendo librería y el html con las rutas funciona el embed</p>
		<video id="my-player2" class="video-js vjs-fluid" 
			controls
			preload="auto"
			width="640"
			height="264"
			data-setup="{}">
		    <source src="http://techslides.com/demos/sample-videos/small.mp4" type='video/mp4'>
		    <source src="http://techslides.com/demos/sample-videos/small.webm" type='video/webm'>
		    <p class="vjs-no-js">
		      To view this video please enable JavaScript, and consider upgrading to a web browser that
		      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
		    </p>
		  </video>
	</section>

	<section>
		<h2>Ejemplo 3</h2>
		<p>Ejemplo de player con lista de reproducción todo por javascript</p>
		<div class="player-container main-preview-player">
			<video
			id="my-player3"
			class="video-js vjs-fluid"			
			controls>
				<source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
				<source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
			</video>

			<div class="playlist-container  preview-player-dimensions vjs-fluid">
				<ol class="vjs-playlist"></ol>
			</div>
		</div>
	</section>

	<section>
		 <video
	    id="vid1"
	    class="video-js vjs-default-skin"
	    width="640" height="264"
	    controls
	    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=nyMkLwSyOVQ"}], "youtube": { "playlist": "2_HXUhShhmY,lLJf9qJHR3E" } }'
	  >
	  </video>
	  <button id="change">Elemento de playlist</button>
	</section>
    
    <script type="text/javascript" src="./assets/js/vendor.min.js"></script>
    <script type="text/javascript" src="./assets/js/app.min.js"></script>
</body>
</html>