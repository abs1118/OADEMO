import java.util.*;


public class Acm {
   public static void main(String[] args) {
	   Scanner input=new Scanner(System.in);
	   ArrayList<ArrayList<A>> dayList=new ArrayList<ArrayList<A>>();//存储每一天的租船信息
	   List<A> list=new ArrayList<A>();//所有的租船信息
	   ArrayList<HashMap> result=new ArrayList<HashMap>();//村结果 key为租船次数 value为平均时间
	   while(input.hasNext()){
		   int no=input.nextInt();
		   if(no==-1){
			   break;
		   }
		   String keycode=input.next();
		   String time=input.next();
		   int timet=getTime(time);
		   A a=new A();
		   if(keycode.equals("S")){
			   a.setStartTime(timet);
		   }else{
			   a.setEndTime(timet);
		   }
		   a.setNo(no);
		   a.setKeyCode(keycode);
		   list.add(a);
		   
	   }
	   
	   //每一天的租船数存起来
	   int day=0;
	   for (int i = 0; i < list.size(); i++) {
		    if(list.get(i).getNo()==0){
		    	ArrayList<A> arr=new ArrayList<A>();
		    	for (int j = day; j <=i; j++) {
					arr.add(list.get(j));
				}
		    	day=i+1;
		    	dayList.add(arr);
		    }
		    	
	    }
	   for (int i = 0; i < dayList.size(); i++) {
		        int count=0;
		        int times=0;
		        for (int j = 0; j < dayList.get(i).size(); j++) {
					for (int k = j; k < dayList.get(i).size(); k++) {
						if(dayList.get(i).get(j).getNo()==dayList.get(i).get(k).getNo())
						{
							if(dayList.get(i).get(j).getKeyCode().equals("S")&&dayList.get(i).get(j).getKeyCode()!=dayList.get(i).get(k).getKeyCode())
							{
								count++;
								times+=(dayList.get(i).get(k).getEndTime()-dayList.get(i).get(j).getStartTime());
							}
						}
					}
				}
		        HashMap hm=new HashMap();
		        hm.put("count", count);
		        hm.put("times", times);
		        result.add(hm);
	     }
	   
	   for (int i = 0; i < result.size(); i++) {
		   int a=(Integer) result.get(i).get("times");
		   int b=(Integer) result.get(i).get("count");
		   System.out.println(result.get(i).get("count")+" "+Math.round(a*1.0/b));
	   }
   }
   
   private static int getTime(String time) {
	// TODO Auto-generated method stub
	   String[] str=time.split("\\:", 2);
	   int hour=Integer.parseInt(str[0])*60;
	   int minu=Integer.parseInt(str[1]);
	return hour+minu;
}

static class A{
	   private int no;
	   
	   private String keyCode;
	   
	   private int startTime;
	   
	   private int endTime;

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getKeyCode() {
		return keyCode;
	}

	public void setKeyCode(String keyCode) {
		this.keyCode = keyCode;
	}

	public int getStartTime() {
		return startTime;
	}

	public void setStartTime(int startTime) {
		this.startTime = startTime;
	}

	public int getEndTime() {
		return endTime;
	}

	public void setEndTime(int endTime) {
		this.endTime = endTime;
	}
	   
	   
   }
}
