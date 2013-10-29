				var numImages = 0;
				var currentImage = 1;
				var totalWidth = 0;
				var i = 1;

			$( document ).ready( function(){

				$('.galleryli').each( function(){
					numImages++;
					totalWidth+= 480;
				});

				$( '.galleryul' ).css('width' , totalWidth + 'px');

				$( '.rightbutton' ).click( function(){
					moveLeft();
				});

				$( '.leftbutton' ).click( function(){
					moveRight();
				});

				if ( currentImage == 1 )
					$('.leftbutton').hide();
				else
					$('.leftbutton').show();
			});

			function loop()
			{
				if ( i == 1 )
					moveLeft();
				else
					moveRight();

				if ( currentImage == numImages )
					i = 2;

				if ( currentImage == 1 )
					i = 1;	

				loopTimer = setTimeout('loop()', 7000);
			}
			loop();

			function moveLeft()
			{
				if (currentImage < numImages )
				{
					$('.galleryul').animate( { 'marginLeft' : '-=480px' } , 2000, 'swing' );
					currentImage++;
				}
				if ( currentImage == 1 )
					$('.leftbutton').hide();
				else
					$('.leftbutton').show();

				if ( currentImage == 3 )
					$('.rightbutton').hide();
				else
					$('.rightbutton').show();
			}
			function moveRight()
			{
				if (currentImage > 1)
				{
					$('.galleryul').animate( { 'marginLeft' : '+=480px' } , 2000, 'swing' );
					currentImage--;
				}
				if ( currentImage == 1 )
					$('.leftbutton').hide();
				else
					$('.leftbutton').show();

				if ( currentImage == 3 )
					$('.rightbutton').hide();
				else
					$('.rightbutton').show();
			}