function bullet(xrec,yrec,bulletdir=-1)
	{

		this.x=xrec;
		this.y=yrec;
		this.dirr=bulletdir;
		this.vel_y=bulletdir*3;

	    this.width=3;
		this.height=3;
		this.onScreen=true;

		this.move=function()
				{	if(!this.onScreen) return false;
					this.adjvel();
					this.y+=this.vel_y;
					//console.log(this.y);
				};
		this.adjvel=function()
				{
					if(this.y<=0) this.onScreen=false;
					if(this.y>width) this.onScreen=false;
				};

		this.smashstuff=function()
				{
				if(!this.onScreen) return false;
				for (var i in shieldlist)
							{   
								if(!shieldlist[i].onScreen) continue;
								if(conta_t(shieldlist[i],this))
								   {																	
									this.onScreen=false;
									shieldlist[i].onScreen=false;
									}
								
							}
				if(this.dirr==-1)
				 	{
						for (var j in flowerlist)
						{
						if(!flowerlist[j].onScreen) continue;
						if(conta_t(flowerlist[j],this)) 
							{
								this.onScreen=false;
								flowerlist[j].onScreen=false;
							}
						}
					}
				else
					{
						if(ship1.onScreen)
						{
						if(conta_t(ship1,this)) 
							{  						
								this.onScreen=false;
								ship1.onScreen=false;
							}
						}					
						

						
				    }
				};

		this.show= function()
			{
				if(!this.onScreen) return false;
				fill(0,0,255);
				ellipse(this.x,this.y,10,10);

			};

		
	}