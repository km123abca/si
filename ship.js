function ship()
	{

		this.x=width/2;
		this.y=height-10;
		this.vel_x=2;
		this.onScreen=true;

		this.width=40;
		this.height=40;

		this.move=function(x)
				{
					this.x+=x;
				};
		this.right= function()
				{
					if (this.x<width-this.width)
					{
						//console.log('x:'+this.x+' and width:'+width);
						this.move(this.vel_x);
					}
				};
		this.left= function()
				{
					if (this.x>0)
					{
						this.move(-this.vel_x);
					}
				};
		this.show= function()
			{
				fill(255);
				//rectMODE(CENTER);
				//rect(this.x-this.width/2,this.y-this.height/2,20,20);
				image(img2,this.x-this.width/2,this.y-this.height/2,this.width,this.height);

			};
		this.shoot=function()
			{
				explode.play();
				bulletlist.push(new bullet(this.x,this.y-this.height/2,-1));
			};

		
	}