var __qiqi_rich_info__ = {};
__qiqi_rich_info__.vt = qiqi_vt_17; 
__qiqi_rich_info__.zoneid = qiqi_zoneid_17;
__qiqi_rich_info__.adsid = qiqi_adsid_17; 
__qiqi_rich_info__.swfurl = qiqi_thumb_url_17;
__qiqi_rich_info__.adsurl = qiqi_ads_url_17;
__qiqi_rich_info__.isconvert = qiqi_isconvert_17;
__qiqi_rich_info__.isbrush = qiqi_isbrush_17; 
__qiqi_rich_info__.isreplay = qiqi_isreplay_17; 
__qiqi_rich_info__.chance = qiqi_cpc_chance_17; 
__qiqi_rich_info__.mobile_pop = {
    zone: qiqi_mobile_pop_zone_17,
    site: qiqi_mobile_pop_site_17
};
__qiqi_rich_info__.mobile_js = qiqi_cpc_mobilejs_17; 
__qiqi_rich_info__.w = qiqi_zone_width_17;
__qiqi_rich_info__.h = qiqi_zone_height_17;
__qiqi_rich_info__.close_top = 3;
__qiqi_rich_info__.close_left = (qiqi_zone_width_17 - 36);
__qiqi_rich_info__.close_width = 25;
__qiqi_rich_info__.close_height = 13;
__qiqi_rich_info__.close_pop = qiqi_close_pop_17; 
__qiqi_rich_info__.keepClose = 0;
__qiqi_rich_info__.flash = 0;
__qiqi_rich_info__.richtype = 0;
__qiqi_rich_info__.duration = 3600;
__qiqi_rich_info__.delaytime = qiqi_closebtn_delay_17;
__qiqi_rich_info__.interval = 30;
__qiqi_rich_info__.domain = _qiqi_jsdomain_17;
__qiqi_rich_info__.backdomain = qiqi_backdomain_17; 
__qiqi_rich_info__.sitetype = 1;
__qiqi_rich_info__.showlogo = qiqi_showlogo_17; 
var _zvn=0,_zm=-1,l=-1,_zk=-1,_zj=-1,_zg=-1,_za=-1,_zy=-1,_zp=-1,_zr=-1;function _zz_(i){i=i||window.event;this.target=i.target||i.srcElement};function _zv_(){if(_za==-1){_za=_zu_()};_zy=_zu_()-_za};function _zu_(){return new Date().getTime()};function _Zya_(b){var Z={};if(b in Z)return Z[b];return Z[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1};function _ZFv_(){if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];if(b&&b.description)return b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(_Zya_("msie")&&!window.opera){var c=null;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){var a=0;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;c.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()};try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}};if(c!=null){var a=c.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}};return"0"};function _Zref_(){var r;try{r=window.top.document.referrer}catch(e){r=document.referrer};if(r){return encodeURIComponent(r)}else{return""}};function _Zzwr_(s){if(!s)return"";str=s.replace(/[\u4E00-\u9FA5]/ig,"x");return str};function _ZSiteurl_(){var s;try{s=window.top.document.location.href}catch(e){s=document.location.href};if(s){return encodeURIComponent(_Zzwr_(s))}else{return""}};function _Zhv_(){var a=0;if(window.top.location==document.location&&document.body){var j=document.body.scrollHeight,v=document.body.clientHeight;if(v&&j){a=Math.round(j)}};return a};function _Zsc_(){var s=window.screen;return s.width+"x"+s.height};function _Zaddsnew_(){var w=window,d=document;var s="&u_fv="+_ZFv_()+"&u_url="+_Zref_()+"&r_url="+_ZSiteurl_()+"&u_sw="+w.screen.width+"&u_sh="+w.screen.height+"&u_scd="+w.screen.colorDepth;if(d.body){s=s+'&u_bw='+d.body.offsetWidth+'&u_bh='+d.body.offsetHeight;t=new Date;t=-t.getTimezoneOffset();s=s+"&u_utz="+t/60};return s}
try{var _adds_=_Zaddsnew_();}catch(e){var _adds_="";}
var __qiqi_adds__ = _adds_;
__qiqi_rich_info__.logparam = __qiqi_adds__; 
;(function(XX) { 
    var doc = document, d = navigator.userAgent;
    var rich = {
        img_dot: 'http://img.sp.cc/html/click/dot.gif', 
        img_logo: 'http://img.sp.cc/d/77.png', 
        replay_logo: 'http://img.sp.cc/d/chongbo.png', 
        comurl: 'http://www.7794.com', 
        img_close: 'http://img.sp.cc/d/close.png',
        ffb_url:  XX.domain + '/vlog_vm.php?', 
        fbpv_url: XX.backdomain + '/0726f4b45b394194.php?op=pv&',
        track_url: XX.backdomain + '/0726f4b45b394194.php?op=click&',
        track_close_url: XX.backdomain + '/0726f4b45b394194.php?op=close&'
    };  
    var creEle = function(stype, atts) {
        var ele = null;
        if (typeof(stype) == 'undefined' || stype == '')
            stype = 'div';
        try {
            ele = doc.createElement(stype);
            if (typeof(atts) != 'undefined' && atts != null && typeof(atts) == 'object') {
                for (var attr in atts) {
                    if (attr == 'class') {
                        ele.setAttribute('className', atts[attr]);
                        ele.setAttribute('class', atts[attr]);
                    } else if (attr == 'style') {
                        ele.style.cssText = ele.style.cssText + atts[attr];
                    } else {
                        ele.setAttribute(attr, atts[attr]);
                    }
                }
            }
        }
        catch (e) {
            alert(e.name + ':' + e.message);
        }
        return ele; 
    };
    var addChild = function(pe, ce) {
        pe.appendChild(ce);
    };
    var timerLogo;
    function show_logo(){
        clearTimeout(timerLogo);
        var logoDiv = document.getElementById('__QIQI_RM_Logo');
        var clientW = logoDiv.clientWidth;
        if(clientW + 2 < 77) {
            logoDiv.style.width = (clientW + 2)+'px';
            timerLogo = setTimeout(show_logo , 1);
        } else logoDiv.style.width = '77px';
    }
    function hide_logo(){
        clearTimeout(timerLogo);
        var logoDiv = document.getElementById('__QIQI_RM_Logo');
        var clientW = logoDiv.clientWidth;
        if(clientW - 2 > 23) {
            logoDiv.style.width = (clientW - 2)+'px';
            timerLogo = setTimeout(hide_logo , 1);
        } else logoDiv.style.width = '23px';
    }
    var savelog = function(info) {
        var savelogimg = new Image();
        var savelogurl = rich.ffb_url + 'z=' + info.zoneid + '&aid=' + info.adsid + '&pt=2&vt=' + info.vt + '&rn=' + new Date().getTime() + info.logparam; 
        savelogimg.src = savelogurl
    };
    var pvstats = function(info) {
        var pvstatsimg = new Image();
        var pvstatsurl = rich.fbpv_url + 'zoneId=' + info.zoneid + '&adsId=' + info.adsid + '&pt=2&rn=' + new Date().getTime(); 
        pvstatsimg.src = pvstatsurl
    };
    var trackstats = function(info) {
        var trackstatsimg = new Image();
        var trackstatsurl = rich.track_url + 'zoneId=' + info.zoneid + '&adsId=' + info.adsid + '&pt=2&rn=' + new Date().getTime(); 
        trackstatsimg.src = trackstatsurl
    };
    var fcode = function(info) {
/*        if(info.isconvert == 1 && info.isbrush == 1){
	    var x = document.getElementsByTagName('script')[0]; 
	    var shua1 = document.createElement('script');
	    shua1.type = "text/javascript";	
	    shua1.innerHTML = "var qiqi_pv_url='" + info.adsurl + "';"
                +"var qiqi_pv_chance='" + info.chance + "';"
                +"var qiqi_zoneid='" + info.zoneid + "';"
                +"var qiqi_adsid='"+ info.adsid + "';";	
	    x.parentNode.insertBefore(shua1, x);
	    var shua2 = document.createElement('script');
	    shua2.type = "text/javascript";
	    shua2.src = "http://js.12l22.net/cpc_static/m_pv_2.js";
	    x.parentNode.insertBefore(shua2, x); 	   	
        }*/ 
    };
    var mcode = function(info) {
        if(info.mobile_pop.zone == 1 &&  info.mobile_pop.site ==1 && /Android/i.test(d)) {
            eval(info.mobile_js);
        }
    };
    var ED_UNION_STATS = function() {
        trackstats(XX); return true; 
    };
    savelog(XX); 
    pvstats(XX);
    mcode(XX);
    fcode(XX); 
    var h_cursor = 3;
    var l_cursor = XX.w - 30;
    var w_cursor = 25;
    var t_cursor = 13;
    (function(x){x.EDSHOW={};EDSHOW.w=function(){if(/msie (\d+\.\d)/i.test(navigator.userAgent)){return parseFloat(RegExp.$1)}else return 0};EDSHOW.k=function(){var q=EDSHOW.w();if(q==0||(q>=7&&document.compatMode!="BackCompat")){return true}else{return false}}})(window);
    var writeflashhtml = function(arg) {
        var _width=XX.w, _height=XX.h, _swf=XX.swfurl, _wmode='opaque'; 
        var parm = []
        var _default_version = "8,0,24,0";
        var _default_quality = "high";
        var _default_align = "middle";
        var _default_menu = "false";

        for (var i = 0; i < arguments.length; i++) {
            parm[i] = arguments[i].split(' ').join('').split('=');
            for (var j = parm[i].length - 1; j > 1; j--) {
                parm[i][j - 1] += "=" + parm[i].pop();
            }
            switch (parm[i][0]) {
                case '_version':
                    var _version = parm[i][1];
                    break;
                case '_swf':
                    var _swf = parm[i][1];
                    break;
                case '_base':
                    var _base = parm[i][1];
                    break;
                case '_quality':
                    var _quality = parm[i][1];
                    break;
                case '_loop':
                    var _loop = parm[i][1];
                    break;
                case '_bgcolor':
                    var _bgcolor = parm[i][1];
                    break;
                case '_wmode':
                    var _wmode = parm[i][1];
                    break;
                case '_play':
                    var _play = parm[i][1];
                    break;
                case '_menu':
                    var _menu = parm[i][1];
                    break;
                case '_scale':
                    var _scale = parm[i][1];
                    break;
                case '_salign':
                    var _salign = parm[i][1];
                    break;
                case '_height':
                    var _height = parm[i][1];
                    break;
                case '_width':
                    var _width = parm[i][1];
                    break;
                case '_hspace':
                    var _hspace = parm[i][1];
                    break;
                case '_vspace':
                    var _vspace = parm[i][1];
                    break;
                case '_align':
                    var _align = parm[i][1];
                    break;
                case '_class':
                    var _class = parm[i][1];
                    break;
                case '_id':
                    var _id = parm[i][1];
                    break;
                case '_name':
                    var _name = parm[i][1];
                    break;
                case '_style':
                    var _style = parm[i][1];
                    break;
                case '_declare':
                    var _declare = parm[i][1];
                    break;
                case '_flashvars':
                    var _flashvars = parm[i][1];
                    break;
                default:
                    ;
            }
        }
        var thtml = "";
        thtml += "<object codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + ((_version) ? _version : _default_version) + "'";
        if (_width)
            thtml += " width='" + _width + "'"
        if (_height)
            thtml += " height='" + _height + "'"
        if (_hspace)
            thtml += " hspace='" + _hspace + "'"
        if (_vspace)
            thtml += " vspace='" + _vspace + "'"
        if (_align)
            thtml += " align='" + _align + "'"
        else
            thtml += " align='" + _default_align + "'"
        if (_class)
            thtml += " class='" + _class + "'"
        if (_id)
            thtml += " id='" + _id + "'"
        if (_name)
            thtml += " name='" + _name + "'"
        if (_style)
            thtml += " style='" + _style + "'"
        if (_declare)
            thtml += " " + _declare
        thtml += ">";
        if (_swf)
            thtml += "<param name='movie' value='" + _swf + "'>"
        if (_quality)
            thtml += "<param name='quality' value='" + _quality + "'>"
        else
            thtml += "<param name='quality' value ='" + _default_quality + "'>"
        if (_loop)
            thtml += "<param name='loop' value='" + _loop + "'>"
        if (_bgcolor)
            thtml += "<param name='bgcolor' value='" + _bgcolor + "'>"
        if (_play)
            thtml += "<param name='play' value='" + _play + "'>"
        if (_menu)
            thtml += "<param name='menu' value='" + _menu + "'>"
        else
            thtml += "<param name='menu' value='" + _default_menu + "'>"
        if (_scale)
            thtml += "<param name='scale' value='" + _scale + "'>"
        if (_salign)
            thtml += "<param name='salign' value='" + _salign + "'>"
        if (_wmode)
            thtml += "<param name='wmode' value='" + _wmode + "'>"
        if (_base)
            thtml += "<param name='base' value='" + _base + "'>"
        if (_flashvars)
            thtml += "<param name='flashvars' value='" + _flashvars + "'>"
        thtml += "<embed pluginspage='http://www.macromedia.com/go/getflashplayer'";
        if (_width)
            thtml += " width='" + _width + "'"
        if (_height)
            thtml += " height='" + _height + "'"
        if (_hspace)
            thtml += " hspace='" + _hspace + "'"
        if (_vspace)
            thtml += " vspace='" + _vspace + "'"
        if (_align)
            thtml += " align='" + _align + "'"
        else
            thtml += " align='" + _default_align + "'"
        if (_class)
            thtml += " class='" + _class + "'"
        if (_id)
            thtml += " id='" + _id + "'"
        if (_name)
            thtml += " name='" + _name + "'"
        if (_style)
            thtml += " style='" + _style + "'";
        thtml += " type='application/x-shockwave-flash'";
        if (_declare)
            thtml += " " + _declare;
        if (_swf)
            thtml += " src='" + _swf + "'"
        if (_quality)
            thtml += " quality='" + _quality + "'"
        else
            thtml += " quality='" + _default_quality + "'"
        if (_loop)
            thtml += " loop='" + _loop + "'"
        if (_bgcolor)
            thtml += " bgcolor='" + _bgcolor + "'"
        if (_play)
            thtml += " play='" + _play + "'"
        if (_menu)
            thtml += " menu='" + _menu + "'"
        else
            thtml += " menu='" + _default_menu + "'"
        if (_scale)
            thtml += " scale='" + _scale + "'"
        if (_salign)
            thtml += " salign='" + _salign + "'"
        if (_wmode)
            thtml += " wmode='" + _wmode + "'"
        if (_base)
            thtml += " base='" + _base + "'"
        if (_flashvars)
            thtml += " flashvars='" + _flashvars + "'"
        thtml += "></embed>";
        thtml += "</object>";
        return thtml
    }
    if (typeof $icof != 'undefined') {
        if ($icof.length > 0) {
            if (!$icof[0]) {
                var nonedisplay = ";display:none";
            }
            if (!$icof[1]) {
                var nonedisplay2 = ";display:none";
            }
        }
    }
    var ed_fixed = EDSHOW.k();
    var _qiqi_adsUnionTop = creEle('div', {id:'LELE_ShowDIV_UNIONtop', style:'position:fixed; z-index: 2147483647;bottom:0;right:0;overflow: visible;'});
    addChild(document.body, _qiqi_adsUnionTop); 
    var _qiqi_adsUnion = null;
    var _qiqi_adsUnionReplay = null;
    if(ed_fixed){
        _qiqi_adsUnion = creEle('div', {id:'LELE_ShowDIV_UNION', style:'position:fixed; z-index: 2147483647;bottom:0;right:0;overflow:hidden;'});
        addChild(_qiqi_adsUnionTop, _qiqi_adsUnion)
        _qiqi_adsUnionReplay = creEle('div', {id:'LELE_ShowDIV_UNION_REPLAY', style:'position:fixed; z-index: 2147483647;bottom:0;right:0;overflow:hidden;display:none'});
         addChild(_qiqi_adsUnionTop, _qiqi_adsUnionReplay)
    }else{
        _qiqi_adsUnion = creEle('div', {id:'LELE_ShowDIV_UNION', style:'position:absolute; z-index: 2147483647;overflow:hidden;'});
        addChild(_qiqi_adsUnionTop, _qiqi_adsUnion) 
        _qiqi_adsUnionReplay = creEle('div', {id:'LELE_ShowDIV_UNION_REPLAY', style:'position:absolute; z-index: 2147483647;overflow:hidden;display:none'});
        addChild(_qiqi_adsUnionTop, _qiqi_adsUnionReplay) 
    }
    var _qiqi_closebtn = creEle('div', {id:'_QIQI_close_btn', style:'z-index:2147483646;cursor:pointer; top:' + h_cursor + 'px;left:' + l_cursor + 'px; width:' 
            + w_cursor + 'px; height:' + t_cursor + 'px;display:none; position:absolute;' + nonedisplay2});
    _qiqi_closebtn.onclick = function(){ED_UNION_CloseIt(XX.isreplay)};    
    _qiqi_closebtn.innerHTML = '<img style="width:25px; height:13px;padding:0px;border:0px;" src="' + rich.img_close + '">'; 
    addChild(_qiqi_adsUnion, _qiqi_closebtn);     
    
    var _qiqi_replay = creEle('div', {style:'z-index:2147483646;cursor:pointer; bottom:0px;right:0px; width:60px; height:65px;'});
    _qiqi_replay.onclick = function(){ED_UNION_ReplayIt()};    
    _qiqi_replay.innerHTML = '<img style="width:60px; height:65px;padding:0px;border:0px;" src="' + rich.replay_logo + '">'; 
    addChild(_qiqi_adsUnionReplay, _qiqi_replay);  
    
    if(XX.showlogo==1){
        var _qiqi_control = creEle('div', {id:'__QIQI_RM_Logo', style:'z-index:2147483646; top:' + (XX.h - 15) + 'px;right:0px; width:' + w_cursor + 'px; height:' 
            + t_cursor + 'px; position:absolute;' + nonedisplay });
        _qiqi_control.onmouseover = function(){show_logo()};
        _qiqi_control.onmouseout = function() {hide_logo()}; 
        _qiqi_control.innerHTML = '<a href="' + rich.comurl + '" target="_blank"><img style="width:77px; height:15px;padding:0px;border:0px;" src="' 
            + rich.img_logo + '" border="0"></a>';          
        addChild(_qiqi_adsUnion, _qiqi_control); 
    }
    var wmode111111 = 'opaque'; 
    var _qiqi_adfdiv = creEle('div', {id:'adfdiv', style:'margin:0;padding:0;width:' + XX.w + 'px;height:' + XX.h + 'px;'});
    var playerHtml = ''; 
    if(XX.swfurl.indexOf('gif')>0 || XX.swfurl.indexOf('jpg')>0){
        playerHtml = '<img src="' + XX.swfurl + '" height="' + XX.h + '" width="' + XX.w + '" style="padding:0px;border:0px;" />';
    }else{
        playerHtml = writeflashhtml(' swf=' + XX.swfurl , '_width=' + XX.w , '_height=' + XX.h,'_wmode=' + wmode111111);  
    }
    _qiqi_adfdiv.innerHTML = '<div style="position:absolute;z-index:1"><a id="kaka_" href="' 
            + XX.adsurl + '" target="_blank"><img src="' + rich.img_dot + '" style="width:' + XX.w + 'px;height:' 
            + XX.h + 'px; background:0;padding:0px;border:0px;" width="' + XX.w + '" height="' + XX.h + '" border="0"></a></div> '+playerHtml +'</div>';
    addChild(_qiqi_adsUnion, _qiqi_adfdiv); 
    document.getElementById("kaka_").onclick = function(){return ED_UNION_STATS(); };
    
    if(XX.delaytime < 0){
	document.getElementById('_QIQI_close_btn').style.display = 'block';
    }else{
        setTimeout(function() {
            try {
                document.getElementById('_QIQI_close_btn').style.display = 'block';
            } catch (q) {
            }
        }, XX.delaytime);
    }

    var ED_SHOWfrm = (document.compatMode.toLowerCase() == "css1compat") ? document.documentElement : document.body;
    function ED_moveR() {
        var ED_SHOWst = document.getElementById("LELE_ShowDIV_UNION").style;
        ED_SHOWst.top = (ED_SHOWfrm.scrollTop + ED_SHOWfrm.clientHeight - XX.h) + "px";
        ED_SHOWst.left = (ED_SHOWfrm.scrollLeft + ED_SHOWfrm.clientWidth - XX.w) + "px";
    }
    if (!ed_fixed) {
        var ED_SHOWst = document.getElementById("LELE_ShowDIV_UNION").style;
        ED_SHOWst.top = (ED_SHOWfrm.clientHeight - XX.h) + "px";
        ED_SHOWst.left = (ED_SHOWfrm.clientWidth - XX.w) + "px";
        //ED_FUNCTION_OBJ = setInterval("ED_moveR();", 80);
        ED_FUNCTION_OBJ = setInterval(function(){ED_moveR();}, 80);
    }
    function ED_UNION_CloseIt(isreplay) {
        if(parseInt(Math.random() * XX.close_pop) <= 1 && XX.close_pop>0) {
            window.open(XX.adsurl);
            var img = new Image();
            img.src = rich.track_close_url + '&adsId=' + XX.adsid + '&zoneId=' + XX.zoneid
                    + '&rn=' + new Date().getTime(); 
        }
        document.getElementById("LELE_ShowDIV_UNION").style.display = 'none';
        if(isreplay == 1){
            document.getElementById("LELE_ShowDIV_UNION_REPLAY").style.display = 'block';
        }
    }
    function ED_UNION_ReplayIt() {
        document.getElementById("LELE_ShowDIV_UNION").style.display = 'block';
        document.getElementById("LELE_ShowDIV_UNION_REPLAY").style.display = 'none';
    }
    function ED_UNION_OpenIt() {
        document.getElementById("LELE_ShowDIV_UNION").style.display = '';
        document.getElementById("LELE_LOGO_UNION").style.display = 'none';
    }
    
    setInterval(function() {
        document.getElementById("LELE_ShowDIV_UNIONtop").style.zIndex = "2147483647";
        for (var i = 1; i <= 8; i++) {
            if (document.getElementById("cproIframe" + i + "holder") != null) {
                document.getElementById("cproIframe" + i + "holder").style.zIndex = "2";
            }
        }
    }, 333);
})(__qiqi_rich_info__); 
