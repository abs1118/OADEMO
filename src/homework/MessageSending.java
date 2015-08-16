package homework;

import java.io.UnsupportedEncodingException;


public class MessageSending {
	private final static String baseName = "http://ganbuguanli.cqu.edu.cn";
	//发送带链接的信息
	public static void sendMes(String movTel,String actionUrl, Leader leader, String leaderMessage) throws UnsupportedEncodingException{
		String longUrl = baseName + actionUrl;
		SmsServiceCQU ssc = new SmsServiceCQU();
		ssc.getSmsServiceCQUSoap().smsSubmit("100007", "zzb2395", leader.getAddress().getMovTel(), leaderMessage);
		SendByTimingService.sendByTiming(movTel, leaderMessage,longUrl);
	}
	//发送不带链接的信息
	public static void sendNoLinkMes(String movTel,Leader leader, String leaderMessage) throws UnsupportedEncodingException{
		SmsServiceCQU ssc = new SmsServiceCQU();
		ssc.getSmsServiceCQUSoap().smsSubmit("100007", "zzb2395", leader.getAddress().getMovTel(), leaderMessage);
		SendByTimingService.sendByTiming(movTel, leaderMessage,"");
	}
	//发送其它信息	
	public static void autosendMes(String movTel, String txtContent)  throws UnsupportedEncodingException{
		SmsServiceCQU ssc = new SmsServiceCQU();
		ssc.getSmsServiceCQUSoap().smsSubmit("100007", "zzb2395", movTel, txtContent);
		SendByTimingService.sendByTiming(movTel, txtContent,"");
	}
}