//importamos el css en formato sass para que se compile.
import sass_entry from '../sass/main.scss';

import videojs from 'video.js';

import playlist from 'videojs-playlist';
import playlistUi from 'videojs-playlist-ui';



document.addEventListener("DOMContentLoaded", function(e) { 

  // PLAYER 1
	const options = {
		sources: [{
			src: 'http://techslides.com/demos/sample-videos/small.mp4',
			type: 'video/mp4'
		}, {
			src: 'http://techslides.com/demos/sample-videos/small.webm',
			type: 'video/webm'
		}],
		controls: true, 
		preload: 'auto', 
		fluid: true
	};
	
	let player1 = videojs('my-player1', options, function onPlayerReady() {
		videojs.log('Your player is ready!');

		// In this context, `this` is the player that was created by Video.js.
		//this.play();

		// How about an event listener?
		this.on('ended', function() {
			videojs.log('Awww...over so soon?!');
		});
	});

  //PLAYER 2

  //PLAYER 3
  const options3 = {
   sources: [{
     src: 'http://techslides.com/demos/sample-videos/small.mp4',
     type: 'video/mp4'
   }, {
     src: 'http://techslides.com/demos/sample-videos/small.webm',
     type: 'video/webm'
   }],
   // height: 300,
   // width: 600,
   controls: true, 
   preload: 'auto',
   fluid: true,
   autoplay: true
  };


  let player3 = videojs('my-player3', options3);

    player3.playlist([{
      name: 'Disney\'s Oceans 1',
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm', type: 'video/webm' },
      ],
      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'assets/img/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'assets/img/oceans-low.jpg'
        }
      ]
    },
    {
      name: 'Disney\'s Oceans 2',
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://vjs.zencdn.net/v/oceans.mp4?2', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm?2', type: 'video/webm' },
      ],
      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'assets/img/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'assets/img/oceans-low.jpg'
        }
      ]
    },
    {
      name: 'Disney\'s Oceans 3',
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://vjs.zencdn.net/v/oceans.mp4?3', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm?3', type: 'video/webm' },
      ],
      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'assets/img/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'assets/img/oceans-low.jpg'
        }
      ]
    }, {
      name: 'Sintel (No Thumbnail)',
      description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
      sources: [
        { src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', type: 'video/mp4' },
        { src: 'http://media.w3.org/2010/05/sintel/trailer.webm', type: 'video/webm' },
        { src: 'http://media.w3.org/2010/05/sintel/trailer.ogv', type: 'video/ogg' }
      ],
      thumbnail: false
    },
    // This is a really underspecified video to demonstrate the
    // behavior when optional parameters are missing. You'll get better
    // results with more video metadata!
    {
      name: 'Invalid Source',
      sources: [{
        src: 'Invalid'
      }]
    }]);

    // Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player3.playlistUi();
    
    // Play through the playlist automatically.
    player3.playlist.autoadvance(0);



    //PLAYER 4

    videojs('vid1').ready(function () {
        let myPlayer = this;

        myPlayer.src({type: 'video/youtube', src: 'https://www.youtube.com/watch?v=y6Sxv-sUYtM'});

        document.querySelector('#change').addEventListener('click', function () {
            myPlayer.src({type: 'video/youtube', src: 'https://www.youtube.com/watch?v=09R8_2nJtjg'});
            myPlayer.play();
        });
    });



});



