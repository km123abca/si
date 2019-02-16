function shield(posx,posy)
	{

		this.x=posx;
		this.y=posy;
		
		this.onScreen=true;

		this.width=10;
		this.height=10;

		
		
		this.show= function()
			{
				if(!this.onScreen) return false;
				fill(255);
				//rectMODE(CENTER);
				rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);

			};
		

		
	}