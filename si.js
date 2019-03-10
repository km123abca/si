
var ship1;
var flowerlist=[],bulletlist=[],shieldlist=[];
var rightPressed=false;
var leftPressed=false;
var enterPressed=false;
var mouseclk=false;
var decider=0;
var mySound,img;
var movel=false,mover=false;



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
		textSize(80);
		createCanvas(1500,700);
		shieldpositions=[width*.15,width*.35,width*.55,width*.75];
  		mySound.setVolume(0.4);
  		mySound.play();
  		img=loadImage("images/alien1.jpg");
  		img2=loadImage("images/spaceship.png");
  		img3=loadImage("images/uparrow.png");
  		imgl=loadImage("images/leftarrow.png");
  		imgr=loadImage("images/rightarrow.png");
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

function mousePressed()
	{
		if ((mouseX>=width-100) && (mouseY>=height/2)&&(mouseX<=width-60)&&(mouseY<=height/2+40))
		mouseclk=true;

		if ((mouseX>=width-140) && (mouseY>=height/2+40)&&(mouseX<=width-100)&&(mouseY<=height/2+80))
			movel=true;
		if ((mouseX>=width-60) && (mouseY>=height/2+40)&&(mouseX<=width-20)&&(mouseY<=height/2+80))
			mover=true;
	}
function mouseReleased()
	{
		mouseclk=false;
		movel=false;
		mover=false;

	}

function draw()
	{
		
		//fill(255);
		//text("hello",100,100);
		
		
		background(0,0,0);
		//image(img,0,0);
		image(img3,width-100,height/2,40,40);
		image(imgl,width-140,height/2+40,40,40);
		image(imgr,width-60,height/2+40,40,40);
		if(ship1.onScreen)
		{
		if(mover) ship1.right();
		if(movel) ship1.left();
		ship1.show();
	    }
		if(mouseclk)
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










