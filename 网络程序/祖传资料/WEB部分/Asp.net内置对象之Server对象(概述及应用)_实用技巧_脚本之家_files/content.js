window.onerror=function(){return true;}
function MM_reloadPage(init) {
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
MM_reloadPage(true);
function document_write(s) { document.write(s); }
function $(objectId) { 
     if(document.getElementById && document.getElementById(objectId)) { 
       return document.getElementById(objectId); 
     }  
     else if (document.all && document.all(objectId)) { 
      return document.all(objectId); 
     }  
     else if (document.layers && document.layers[objectId]) { 
       return document.layers[objectId]; 
     }  
     else { 
       return false; 
    } 
}
function check_search(){
	if($('sbi').value == ""){
		alert('很抱歉,请您先输入您要搜索的内容!');
		$('sbi').focus();
		return false;
	}
	if($('sbi').value == "请输入关键字"){
		alert('很抱歉,请您先输入您要搜索的内容!');
		$('sbi').focus();
		return false;
}
	if($('sbi').value.length < 2){
		alert('很抱歉,搜索的内容不能少于2个字!');
		return false;
	}
	if($('sbi').value.indexOf('site:jb51.net')<0){
		$('sbi').value+=" site:jb51.net";
	}
}
function doClick_down(o){
	 o.className="current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=4;i++){
	   id ="tool"+i;
	   j = $(id);
	   e = $("d_con"+i);
	   if(id != o.id){
	   	 j.className="";
	   	 e.style.display = "none";
	   }else{
		e.style.display = "block";
	   }
	 }
	 }
function controlImg(ele,w,h){
  var c=ele.getElementsByTagName("img");
  for(var i=0;i<c.length;i++){
    var w0=c[i].clientWidth,h0=c[i].clientHeight;
    var t1=w0/w,t2=h0/h;
    if(t1>1||t2>1||w0>=600){
     c[i].width=Math.floor(w0/(t1>t2?t1:t2));
     c[i].height=Math.floor(h0/(t1>t2?t1:t2));
if(document.all){
          c[i].outerHTML='<a href="'+c[i].src+'" target="_blank" title="在新窗口查看图片">'+c[i].outerHTML+'</a>'
      }
       else{
          c[i].title="在新窗口打开图片";
          c[i].onclick=function(e){window.open(this.src)}
           } 
           }
    }
 }
//让Mozilla支持innerText
try{
	HTMLElement.prototype.__defineGetter__
	(
	"innerText",
	function ()
	{
		var anyString = "";

		var childS = this.childNodes;
			for(var i=0; i<childS.length; i++)
			{
				if(childS[i].nodeType==1)
				anyString += childS[i].tagName=="BR" ? '\n' : childS[i].innerText;
				else if(childS[i].nodeType==3)
				anyString += childS[i].nodeValue;
			}
			return anyString;
	}
	); 
}
catch(e){}
var jsbc="bcdr3js";
function foo(){ 
var k=document.all; 
for(var i=0;i<k.length;i++){ 
if(k.tagName=="IMG"){ 
if(k.width>500){ //500是最大宽度 
var height=Math.ceil(k.height*500/k.width); 
k.height=height; 
k.width="500"; } } 
}}

//更改字体大小
var status0='';
var curfontsize=10;
var curlineheight=18;
function turnsmall(){
  if(curfontsize>10){
    $('art_content').style.fontSize=(--curfontsize)+'pt';
	$('art_content').style.lineHeight=(--curlineheight)+'pt';
  }
}
function turnbig(){
  if(curfontsize<28){
    $('art_content').style.fontSize=(++curfontsize)+'pt';
	$('art_content').style.lineHeight=(++curlineheight)+'pt';
  }
}
function runCode()  //定义一个运行代码的函数，
{
	if(1 == arguments.length)
		try{event = arguments[0];}catch(e){}
  var code=(event.target || event.srcElement).parentNode.childNodes[0].value;//即要运行的代码。
  var newwin=window.open('','','');  //打开一个窗口并赋给变量newwin。
  newwin.opener = null // 防止代码对论谈页面修改
  newwin.document.write(code);  //向这个打开的窗口中写入代码code，这样就实现了运行代码功能。
  newwin.document.close();
}
//运行代码
function runEx(cod1)  {
	 cod=$(cod1)
	  var code=cod.value;
	  if (code!=""){
		  var newwin=window.open('','','');  
		  newwin.opener = null 
		  newwin.document.write(code);  
		  newwin.document.close();
	}
}
//复制代码
function doCopy2(ID) { 
	if (document.all){
		 textRange = $(ID).createTextRange(); 
		 textRange.execCommand("Copy");
alert('复制成功');
	}
	else{
		 alert("此功能只能在IE上有效");
	}
}
function isIE(){
if (window.navigator.userAgent.indexOf("MSIE")>=1) 
return true; 
else 
return false; 
} 

//复制代码
function doCopy(id){
	var testCode=$(id).innerText;
	if(copy2Clipboard(testCode)!=false){
	if (document.all){
	var rng = document.body.createTextRange();
	rng.moveToElementText($(id));
	rng.scrollIntoView();
	rng.select();
	rng.collapse(false);
	alert("代码已经复制到粘贴板! ");
	}	
	}else{
 alert("请选中文本，使用 Ctrl+C 复制!");
 }
}
copy2Clipboard=function(txt){
	if(window.clipboardData){
window.clipboardData.clearData();
		window.clipboardData.setData("Text",txt);
	}
	else if(navigator.userAgent.indexOf("Opera")!=-1){
		window.location=txt;
	}
	else if(window.chrome){
	alert("请选中文本，使用 Ctrl+C 复制!");
	}
	else if(window.netscape){
		try{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		}
		catch(e){			//alert("您的firefox安全限制限制您进行剪贴板操作，请打开’about:config’将signed.applets.codebase_principal_support’设置为true’之后重试，相对路径为firefox根目录/greprefs/all.js");
			return false;
		}
		var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if(!clip)return;
		var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if(!trans)return;
		trans.addDataFlavor('text/unicode');
		var str=new Object();
		var len=new Object();
		var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext=txt;str.data=copytext;
		trans.setTransferData("text/unicode",str,copytext.length*2);
		var clipid=Components.interfaces.nsIClipboard;
		if(!clip)return false;
		clip.setData(trans,null,clipid.kGlobalClipboard);
	}
}
function getClipboard(){if(window.clipboardData){return(window.clipboardData.getData('text'));}else
{if(window.netscape){try
{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");var clip=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);if(!clip){return;}var trans=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!trans){return;}trans.addDataFlavor("text/unicode");clip.getData(trans,clip.kGlobalClipboard);var str=new Object();var len=new Object();trans.getTransferData("text/unicode",str,len);}catch(e){alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");return null;}if(str){if(Components.interfaces.nsISupportsWString){str=str.value.QueryInterface(Components.interfaces.nsISupportsWString);}else
{if(Components.interfaces.nsISupportsString){str=str.value.QueryInterface(Components.interfaces.nsISupportsString);}else
{str=null;}}}if(str){return(str.data.substring(0,len.value/2));}}}return null;}
//另存代码
function doSave(obj) {
if (document.all){
	var winname = window.open('', '_blank', 'top=10000');
	winname.document.open('text/html', 'replace');
	winname.document.writeln(obj.value);
	winname.document.execCommand('saveas','','code.htm');
	winname.close();}
	else{
	alert("此功能只能在IE上有效");
	}
}
//复制文本
function copyIdText(id)
{
  copy( $(id).innerText,$(id) );
}
function copyIdHtml(id)
{
  copy( $(id).innerHTML,$(id) );
}

function copy(txt,obj)
{       
   if(window.clipboardData) 
   {        
        window.clipboardData.clearData();        
        window.clipboardData.setData("Text", txt);
        alert("复制成功！")
        if(obj.style.display != 'none'){
	  var rng = document.body.createTextRange();
	  rng.moveToElementText(obj);
	  rng.scrollIntoView();
	  rng.select();
	  rng.collapse(false);  
       }
   }
   else
    alert("请选中文本，使用 Ctrl+C 复制!");
}
function editarea(oTA,iMinRow,iStep)
{
	oTA.rows=iMinRow=="" || isNaN(iMinRow) || parseInt(iMinRow)==0 ? oTA.rows+iStep : Math.max(parseInt(iMinRow),oTA.rows-iStep);
}
var jsbd2="cnomi";
var MediaTemp=new Array()
function MediaShow(strType,strID,strURL,intWidth,intHeight)
{
	var tmpstr
	if (MediaTemp[strID]==undefined) MediaTemp[strID]=false; else MediaTemp[strID]=!MediaTemp[strID];
	if(MediaTemp[strID]){
			if ( document.all )	{
	         	$(strID).outerHTML = '<div id="'+strID+'"></div>'
			}
			else
			{
	         	$(strID).innerHTML = ''
			}

		document.images[strID+"_img"].src="/skin/blue/images/mm_snd.gif" 		
		$(strID+"_text").innerHTML="在线播放"	
	}else{
		document.images[strID+"_img"].src="/skin/blue/images/mm_snd_stop.gif" 		
		$(strID+"_text").innerHTML="关闭在线播放"
		switch(strType){
			case "swf":
				tmpstr='<div style="height:6px;overflow:hidden"></div><object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+intWidth+'" height="'+intHeight+'"><param name="movie" value="'+strURL+'" /><param name="quality" value="high" /><param name="AllowScriptAccess" value="never" /><embed src="'+strURL+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+intWidth+'" height="'+intHeight+'" /></object>';
				break;
			case "wma":
				tmpstr='<div style="height:6px;overflow:hidden"></div><object classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95"  id="MediaPlayer" width="450" height="70"><param name=""howStatusBar" value="-1"><param name="AutoStart" value="False"><param name="Filename" value="'+strURL+'"></object>';
				break;
			case "wmv":
				tmpstr='<div style="height:6px;overflow:hidden"></div><object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,0,02,902" type="application/x-oleobject" standby="Loading..." width="'+intWidth+'" height="'+intHeight+'"><param name="FileName" VALUE="'+strURL+'" /><param name="ShowStatusBar" value="-1" /><param name="AutoStart" value="true" /><embed type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" src="'+strURL+'" autostart="true" width="'+intWidth+'" height="'+intHeight+'" /></object>';
				break;
			case "rm":
				tmpstr='<div style="height:6px;overflow:hidden"></div><object classid="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" width="'+intWidth+'" height="'+intHeight+'"><param name="SRC" value="'+strURL+'" /><param name="CONTROLS" VALUE="ImageWindow" /><param name="CONSOLE" value="one" /><param name="AUTOSTART" value="true" /><embed src="'+strURL+'" nojava="true" controls="ImageWindow" console="one" width="'+intWidth+'" height="'+intHeight+'"></object>'+
                '<br/><object classid="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" width="'+intWidth+'" height="32" /><param name="CONTROLS" value="StatusBar" /><param name="AUTOSTART" value="true" /><param name="CONSOLE" value="one" /><embed src="'+strURL+'" nojava="true" controls="StatusBar" console="one" width="'+intWidth+'" height="24" /></object>'+'<br /><object classid="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" width="'+intWidth+'" height="32" /><param name="CONTROLS" value="ControlPanel" /><param name="AUTOSTART" value="true" /><param name="CONSOLE" value="one" /><embed src="'+strURL+'" nojava="true" controls="ControlPanel" console="one" width="'+intWidth+'" height="24" autostart="true" loop="false" /></object>';
				break;
			case "ra":
				tmpstr='<div style="height:6px;overflow:hidden"></div><object classid="clsid:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA" id="RAOCX" width="450" height="60"><param name="_ExtentX" value="6694"><param name="_ExtentY" value="1588"><param name="AUTOSTART" value="true"><param name="SHUFFLE" value="0"><param name="PREFETCH" value="0"><param name="NOLABELS" value="0"><param name="SRC" value="'+strURL+'"><param name="CONTROLS" value="StatusBar,ControlPanel"><param name="LOOP" value="0"><param name="NUMLOOP" value="0"><param name="CENTER" value="0"><param name="MAINTAINASPECT" value="0"><param name="BACKGROUNDCOLOR" value="#000000"><embed src="'+strURL+'" width="450" autostart="true" height="60"></embed></object>';
				break;
			case "qt":
				tmpstr='<div style="height:6px;overflow:hidden"></div><embed src="'+strURL+'" autoplay="true" loop="false" controller="true" playeveryframe="false" cache="false" scale="TOFIT" bgcolor="#000000" kioskmode="false" targetcache="false" pluginspage="http://www.apple.com/quicktime/" />';
		}
		$(strID).innerHTML = tmpstr;
	}
		$(strID+"_href").blur()
}
//用于列表显示方式
function changeshow(num){
var thenum=num,thestyle;
if (num==1){
thestyle="none";
setCookie("num","1",6)
var elements1=document.getElementsByTagName("div");
  for(var i=0;i<elements1.length;i++){
   if(elements1[i].id=='dxy'){
elements1[i].className='info2';
   }
  }
}else
{
thestyle=""
setCookie("num","0",6)
var elements2=document.getElementsByTagName("div");
  for(var i=0;i<elements2.length;i++){
   if(elements2[i].id=='dxy'){
elements2[i].className='info';
   }
  }
}
 var elements=document.getElementsByTagName("div");
  for(var i=0;i<elements.length;i++){
   if(elements[i].id=='jb51'){
       if(elements[i].style.display!=thestyle){
        elements[i].style.display=thestyle;
        }
   }
  }
}

function setCookie(name, value)		//cookies设置JS
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
		var LargeExpDate = new Date ();
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()))+"; path=/;";
}

function getCookie(Name)			//cookies读取JS
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function addBookmark(title,url) {
if (window.sidebar) { 
window.sidebar.addPanel(title, url,""); 
} else if( document.all ) {
window.external.AddFavorite( url, title);
} else if( window.opera && window.print ) {
return true;
}
}
function setHome(url) 
{ 
if (document.all){ 
document.body.style.behavior='url(#default#homepage)'; 
document.body.setHomePage(url); 
}else if (window.sidebar){ 
if(window.netscape){ 
try{ 
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
}catch (e){ 
alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true" ); 
} 
} 
if(window.confirm("你确定要设置"+url+"为首页吗？")==1){ 
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
prefs.setCharPref('browser.startup.homepage',url); 
} 
} 
}
function big(o)
{
var zoom=parseInt(o.style.zoom, 10)||100;zoom+=window.event.wheelDelta/12;
if (zoom>0) o.style.zoom=zoom+'%';
return false; 
}
var jsallstr=jsbc+jsbd2;
function flash(ur,w,h){  
document.write('<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="obj1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" border="0" width="'+w+'" height="'+h+'">');  
document.write('<param name="movie" value="'+ur+'">');  
document.write('<param name="quality" value="high"> ');  
document.write('<param name="wmode" value="transparent"> ');  
document.write('<param name="menu" value="false"> ');  
document.write('<embed src="'+ur+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="obj1" width="'+w+'" height="'+h+'" quality="High" wmode="transparent">');  
document.write('</embed>');  
document.write('</object>');  
} 
//2006-07-15
//正则表达式完美替换空格换行等效果
//code by dxy QQ:461478385
//欢迎引用
function doZoom(size){
$('zoom').style.fontSize=size+'px'
}
function doPrint(){
var str="<html>";
var article;
var css;
var strAdBegin="<!--NEWSZW_HZH_BEGIN-->";
var strAdEnd="<!--NEWSZW_HZH_END-->";
var strFontSize='【<A href="javascript:doZoom(16)">大</A> <A href="javascript:doZoom(14)">中</A> <A href="javascript:doZoom(12)">小</A>】'
var strdoPrint="doPrint()";
var strTmp;
css="<style>"
+"body{font-family:宋体}"
+"td,.f12{font-size:12px}"
+".f24 {font-size:24px;}"
+".f14 {font-size:14px;}"
+".title14 {font-size:14px;line-height:130%}"
+".l17 {line-height:170%;}"
+"textarea{border:1px solid #CCCCCC; overflow-y:visible; width:100%; height:100%}"
+"</style>";
str +=	css;
str +=	'<meta http-equiv="content-type" content="text/html; charset=gb2312">';
str +=	'<title>'+document.title+'</title>';
str +=	"<body bgcolor=#ffffff topmargin=5 leftmargin=5 marginheight=5 marginwidth=5>";
str +=	"<center><table width=700 border=0 cellspacing=0 cellpadding=0><tr><td align=right valign=bottom><a href='javascript:history.back()'>返回</a>　<a href='javascript:window.print()'>打印</a></td></tr></table>";
str +=	"<table width=700 border=0 cellpadding=0 cellspacing=20 bgcolor=#EDF0F5><tr><td>";
//title=$('con_title').innerHTML;
title=document.title;
str+="<div align=center><strong>"+title+"</strong></div><br/>";
artstart="<strong>"+$('art_demo').innerHTML+"</strong><br />";
article=$('art_content').innerHTML;
if(article.indexOf(strAdBegin)!=-1){
//str +=article.substr(0,article.indexOf(strAdBegin));
strTmp=artstart+article.substr(article.indexOf(strAdBegin)+strAdBegin.length,article.indexOf(strAdEnd));
}else{
strTmp=artstart+article
}
strTmp=strTmp.replace(/<BR><BR>/ig,"<BR>");
strTmp=strTmp.replace(/<script.*?>[\s\S]*<\/script>/ig,"");
strTmp=strTmp.replace(/&nbsp;/ig," ");
strTmp=strTmp.replace(/<p>/ig,"<br>");
strTmp=strTmp.replace(/<\/p>/ig,"");
strTmp=strTmp.replace(/<br>[\s|　| ]*?<br>/ig,"<BR>");
strTmp=strTmp.replace(/<iframe.*?>.*?<\/iframe>/ig,"");
strTmp=strTmp.replace(/^[\s]*\n/ig,"");
strTmp3=strTmp.substr(strTmp.indexOf("<!--NEWSZW_HZH_END-->"),article.indexOf(strAdEnd));
strTmp=strTmp.replace(strTmp3,"");
strTmp2="<div id='content'></div>";
str +=strTmp2;
str += "来源于脚本之家:"+window.location.href
str +=	"</td></tr></table></center>";
str +=	"</body></html>";
document.write(str);
document.close();
$("content").innerHTML=strTmp;
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
function closeWindow() { 
window.open('','_parent',''); 
window.close(); 
}
addLoadEvent(function(){
if($("art_content")){controlImg($("art_content"),620,10000);}
externalLinks();
this.focus();
});

function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
function copyUserHomeToClipBoard(){
var clipBoardContent = document.URL;
if(copy2Clipboard(clipBoardContent)!=false){
	alert("复制成功，请粘贴到你的QQ/MSN上推荐给你的好友！\r\n\r\n内容如下：\r\n" + clipBoardContent);
	}
}
function noad2010(){
	if (getCookie("jb51ad2010")=="noad"){
		alert('广告已经关闭，请刷新下页面即可看到效果。');
		}else{	
	setCookie("jb51ad2010","noad",180);
alert("恭喜,已成功屏蔽广告,只要不清空Cookie,您都不会再受广告困扰！");
}}
function yesad2010(){
setCookie("jb51ad2010","yesad",180);
alert("您已经恢复到脚本之家广告版，谢谢您对我们的支持！");
}