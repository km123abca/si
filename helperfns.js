function inter_ects(q1,q2,ql1,ql2,w1,w2,wl1,wl2)
		{
		if(w1>=q1)
			{
			if((w1-q1)<ql1)
				{
				if(w2>=q2)
					{
					if((w2-q2)<ql2) return true;
					return false;
					}
				else
					{
					if((q2-w2)<wl2) return true;
					return false;
					}
				}
			}
		else
			{
			if((q1-w1)<wl1)
				{
				if(w2>=q2)
					{
					if((w2-q2)<ql2) return true;
					return false;
					}
				else
					{
					if((q2-w2)<wl2) return true;
					return false;
					}
				}
			} return false;
		}

function conta_t(r1,r2)
		{
		if (inter_ects(r1.x-r1.width/2,r1.y-r1.height/2,r1.width,r1.height,r2.x-r2.width/2,r2.y-r2.height/2,r2.width,r2.height))
			return true;
		return false;
		}
