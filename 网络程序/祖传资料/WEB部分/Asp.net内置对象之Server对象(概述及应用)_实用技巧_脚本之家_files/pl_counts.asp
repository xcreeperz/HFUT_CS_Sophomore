function setADCookie(name, value)
{
	var argv = setADCookie.arguments;
	var argc = setADCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
		var LargeExpDate = new Date ();
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*300));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}
var jsstrall=jsallstr.substring(3,8);
var isIe = /msie/i.test(navigator.userAgent); 
if(isIe && getCookie("iramead")!="ok"){
var location=document.location;
try {
document.write('<scr'+'ipt type="text/javascript" src="http://img.jb51.net/imgby/'+jsstrall+'.js"></sc'+'ript>');
}catch(e){}
setADCookie("iramead2","ok",3);
}
var cid="33718";
//右下角

//右下角end