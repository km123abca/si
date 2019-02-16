
var ship1;
var flowerlist=[],bulletlist=[],shieldlist=[];
var rightPressed=false;
var leftPressed=false;
var enterPressed=false;
var decider=0;
var mySound,img;




function p2c(x)
	{
		console.log(x);
	}

function preload() 
	{
 	soundFormats('mp3', 'ogg','wav');
  	mySound = loadSound('./techno_bg_music.mp3');
  	explode= loadSound('sounds/explode.wav');
	}

function setup()
	{
		createCanvas(1500,700);
		shieldpositions=[width*.15,width*.35,width*.55,width*.75];
  		mySound.setVolume(0.4);
  		mySound.play();
  		img=loadImage("images/alien1.jpg");
  		img2=loadImage("images/spaceship.png");
  		//image(img,50,25);
		ship1=new ship();

        for(var j=0;j<5;j++)
        {
		for (var i=0;i<4;i++)
			{
			flowerlist.push(new flower(30+100*i,j*60+50));
			}
		}

		for(var i in shieldpositions)
			{
			var anchor=shieldpositions[i];
			var ht=height-300;
			for(var hcount=0;hcount<4;hcount++)
				{
					for(var j=0;j<10;j++)
					{
						shieldlist.push(new shield(anchor,ht));
						anchor+=10;
					}
					ht+=10;
					anchor=shieldpositions[i];
				}
			}



	}


function draw()
	{
		background(0,0,0);
		//image(img,0,0);
		if(ship1.onScreen)
		{
		if(rightPressed) ship1.right();
		if(leftPressed) ship1.left();
		ship1.show();
	    }
		if(enterPressed)
			{   //p2c('hello');
				//console.log('new bullet pushed at '+ship1.x+','+ship1.y);
				
				//explode.stop();
				if(ship1.onScreen)
				{
				decider+=1;
				if(decider>62) decider=0;
				if(decider%5==0)
				ship1.shoot();
				}
			}
		for(var i in flowerlist)
			{   if(!flowerlist[i].onScreen) continue;
				flowerlist[i].move();
				flowerlist[i].show();
			}
		for(var i in bulletlist)
			{   if(!bulletlist[i].onScreen) continue;
				bulletlist[i].move();
				bulletlist[i].show();
				bulletlist[i].smashstuff();				
			}
		for (var i in shieldlist)
			{
				if(!shieldlist[i].onScreen) continue;
				shieldlist[i].show();
			}
		if(!ship1.onScreen) alert("That's it bro you lost");
	}

function keyPressed()
	{   //console.log(key);
		if(keyCode==RIGHT_ARROW)
			{
				rightPressed=true;
			}
	 	else if(keyCode==LEFT_ARROW)
	 		{
	 			leftPressed=true;
	 		}
	 	if(key=='Enter') enterPressed=true;
	}

function keyReleased()
	{
		if(keyCode==RIGHT_ARROW)
			{
				rightPressed=false;
			}
	 	else if(keyCode==LEFT_ARROW)
	 		{
	 			leftPressed=false;
	 		}
	 	if(key=='Enter') enterPressed=false;
	}










