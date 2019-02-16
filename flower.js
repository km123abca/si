function flower(xrec,yrec=50)
	{

		this.x=xrec;
		this.y=yrec;
		this.defvel=2;
		this.vel_x=this.defvel;

	    this.width=60;
		this.height=60;
		this.onScreen=true;
		this.releasethehounds=false;
		this.waiter=0;
		this.countwallhits=0;
		this.lastwall='none';
		this.waittime=50+floor(random(20));

		this.move=function()
				{	if(!this.onScreen) return false;
					this.adjvel();
					this.x+=this.vel_x;
					this.adjustwaiter();
					if(this.releasethehounds) this.fire();
					this.checkshipcollision();
					this.movedown();
				};
		this.movedown=function()
						{

							if(this.countwallhits>=1)
								{
									this.y+=40;
									this.countwallhits=0;
								}
						};
		this.adjvel=function()
				{
					if(this.x>=width-20) 
						{
							this.vel_x=-this.defvel;
							if(this.lastwall!='right')
							{
								this.lastwall='right';
								this.countwallhits+=1;

							}
						}
					if(this.x<=0) 
						{
							this.vel_x=this.defvel;
							if(this.lastwall!='left')
							{
								this.lastwall='left';
								this.countwallhits+=1;
							}
						}

				};
		this.adjustwaiter=function()
				{
					this.waiter+=1;
					if(this.waiter==this.waittime)
					{
						this.releasethehounds=true;
						this.waiter=0;
					}
					else
					{
						this.releasethehounds=false;
					}
				};
		this.checkshipcollision= function()
								{   if(!ship1.onScreen) return false;
									if(conta_t(this,ship1))
										ship1.onScreen=false;
									for(var i in shieldlist)
									{
										if(!shieldlist[i].onScreen) continue;
										if(conta_t(this,shieldlist[i]))
											shieldlist[i].onScreen=false;
									}
								};

		this.show= function()
			{
				if(!this.onScreen) return false;
				fill(255,0,200);
				image(img,this.x-this.width/2,this.y-this.height/2,this.width,this.height);


			};

		this.fire=function()
			{
				bulletlist.push(new bullet(this.x,this.y+this.width/2,1));
			};

		
	}