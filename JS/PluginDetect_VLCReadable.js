/*
PluginDetect v0.8.2
www.pinlady.net/PluginDetect/license/
[ getVersion isMinVersion hasMimeType ]
[ VLC ]
*/
var PluginDetect=
{
	version:"0.8.2",
	name:"PluginDetect",
	openTag:"<",isDefined:function(b){return typeof b!="undefined"},
	isArray:function(b){return(/array/i).test(Object.prototype.toString.call(b))},
	isFunc:function(b){return typeof b=="function"},
	isString:function(b){return typeof b=="string"},
	isNum:function(b){return typeof b=="number"},
	isStrNum:function(b){return(typeof b=="string"&&(/\d/).test(b))},
	getNumRegx:/[\d][\d\.\_,\-]*/,
	splitNumRegx:/[\.\_,\-]/g,
	getNum:function(b,c){var d=this,a=d.isStrNum(b)?(d.isDefined(c)?new RegExp(c):d.getNumRegx).exec(b):null;return a?a[0]:null},
	compareNums:function(h,f,d){var e=this,c,b,a,g=parseInt;if(e.isStrNum(h)&&e.isStrNum(f)){if(e.isDefined(d)&&d.compareNums){return d.compareNums(h,f)}c=h.split(e.splitNumRegx);b=f.split(e.splitNumRegx);for(a=0;a<Math.min(c.length,b.length);a++){if(g(c[a],10)>g(b[a],10)){return 1}if(g(c[a],10)<g(b[a],10)){return -1}}}return 0},
	formatNum:function(b,c)
	{
		var d=this,a,e;
		if(!d.isStrNum(b))
		{return null}
		if(!d.isNum(c)){c=4}
		c--;
		e=b.replace(/\s/g,"").split(d.splitNumRegx).concat(["0","0","0","0"]);
		for(a=0;a<4;a++)
		{
			if(/^(0+)(.+)$/.test(e[a]))
			{
				e[a]=RegExp.$2
			}
			if(a>c||!(/\d/).test(e[a]))
			{e[a]="0"}
		}
		return e.slice(0,4).join(",")
	},
	getPROP:function(d,b,a){var c;try{if(d){a=d[b]}}catch(c){}return a},
	findNavPlugin:function(l,e,c){var j=this,h=new RegExp(l,"i"),d=(!j.isDefined(e)||e)?/\d/:0,k=c?new RegExp(c,"i"):0,a=navigator.plugins,g="",f,b,m;for(f=0;f<a.length;f++){m=a[f].description||g;b=a[f].name||g;if((h.test(m)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))||(h.test(b)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))){if(!k||!(k.test(m)||k.test(b))){return a[f]}}}return null},
	getMimeEnabledPlugin:function(k,m,c){var e=this,f,b=new RegExp(m,"i"),h="",g=c?new RegExp(c,"i"):0,a,l,d,j=e.isString(k)?[k]:k;for(d=0;d<j.length;d++){if((f=e.hasMimeType(j[d]))&&(f=f.enabledPlugin)){l=f.description||h;a=f.name||h;if(b.test(l)||b.test(a)){if(!g||!(g.test(l)||g.test(a))){return f}}}}return 0},
	getVersionDelimiter:",",
	findPlugin:function(d)
	{
		var c=this,b,d,a={status:-3,plugin:0};
		if(!c.isString(d))
		{return a}
		if(d.length==1)
		{
			c.getVersionDelimiter=d;
			return a
		}
		d=d.toLowerCase().replace(/\s/g,"");
		b=c.Plugins[d];
		if(!b||!b.getVersion)
		{return a}
		a.plugin=b;
		a.status=1;
		return a
	},
	AXO:window.ActiveXObject,
	getAXO:function(a){var d=null,c,b=this;try{d=new b.AXO(a)}catch(c){};return d},
	INIT:function(){this.init.library(this)},
	init:
	{
		$:1,
		hasRun:0,
		objProperties:function(d,e,b){var a,c={};if(e&&b){if(e[b[0]]===1&&!d.isArray(e)&&!d.isFunc(e)&&!d.isString(e)&&!d.isNum(e)){for(a=0;a<b.length;a=a+2){e[b[a]]=b[a+1];c[b[a]]=1}}for(a in e){if(!c[a]&&e[a]&&e[a][b[0]]===1){this.objProperties(d,e[a],b)}}}},
		publicMethods:function(c,f){var g=this,b=g.$,a,d;if(c&&f){for(a in c){try{if(b.isFunc(c[a])){f[a]=c[a](f)}}catch(d){}}}},
		plugin:function(a,c){var d=this,b=d.$;if(a){d.objProperties(b,a,["$",b,"$$",a]);if(!b.isDefined(a.getVersionDone)){a.installed=null;a.version=null;a.version0=null;a.getVersionDone=null;a.pluginName=c}}},
		detectIE:function(){var init=this,$=init.$,doc=document,e,x,userAgent=navigator.userAgent||"",progid,progid1,progid2;$.isIE=eval("/*@cc_on!@*/!1");$.verIE=$.isIE?((/MSIE\s*(\d+\.?\d*)/i).test(userAgent)?parseFloat(RegExp.$1,10):7):null;$.ActiveXEnabled=!1;$.ActiveXFilteringEnabled=!1;if($.isIE){try{$.ActiveXFilteringEnabled=window.external.msActiveXFilteringEnabled()}catch(e){}progid1=["Msxml2.XMLHTTP","Msxml2.DOMDocument","Microsoft.XMLDOM","TDCCtl.TDCCtl","Shell.UIHelper","HtmlDlgSafeHelper.HtmlDlgSafeHelper","Scripting.Dictionary"];progid2=["WMPlayer.OCX","ShockwaveFlash.ShockwaveFlash","AgControl.AgControl",];progid=progid1.concat(progid2);for(x=0;x<progid.length;x++){if($.getAXO(progid[x])){$.ActiveXEnabled=!0;if(!$.dbug){break}}}if($.ActiveXEnabled&&$.ActiveXFilteringEnabled){for(x=0;x<progid2.length;x++){if($.getAXO(progid2[x])){$.ActiveXFilteringEnabled=!1;break}}}}},
		detectNonIE:function(){var e=this,c=this.$,d=navigator,b=c.isIE?"":d.userAgent||"",f=d.vendor||"",a=d.product||"";c.isGecko=(/Gecko/i).test(a)&&(/Gecko\s*\/\s*\d/i).test(b);c.verGecko=c.isGecko?c.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(b)?RegExp.$1:"0.9"):null;c.isChrome=(/(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i).test(b);c.verChrome=c.isChrome?c.formatNum(RegExp.$2):null;c.isSafari=!c.isChrome&&((/Apple/i).test(f)||!f)&&(/Safari\s*\/\s*(\d[\d\.]*)/i).test(b);c.verSafari=c.isSafari&&(/Version\s*\/\s*(\d[\d\.]*)/i).test(b)?c.formatNum(RegExp.$1):null;c.isOpera=(/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(b);c.verOpera=c.isOpera&&((/Version\s*\/\s*(\d+\.?\d*)/i).test(b)||1)?parseFloat(RegExp.$1,10):null},
		detectPlatform:function(){var e=this,d=e.$,b,a=navigator.platform||"";d.OS=100;if(a){var c=["Win",1,"Mac",2,"Linux",3,"FreeBSD",4,"iPhone",21.1,"iPod",21.2,"iPad",21.3,"Win.*CE",22.1,"Win.*Mobile",22.2,"Pocket\\s*PC",22.3,"",100];for(b=c.length-2;b>=0;b=b-2){if(c[b]&&new RegExp(c[b],"i").test(a)){d.OS=c[b+1];break}}}},
		library:function(c)
		{
			var e=this,d=document,b,a;
			c.init.objProperties(c,c,["$",c]);
			for(a in c.Plugins)
			{
				c.init.plugin(c.Plugins[a],a)
			}
			e.publicMethods(c.PUBLIC,c);
			c.head=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0]||d.body||null;
			e.detectPlatform();
			e.detectIE();
			e.detectNonIE();
			c.init.hasRun=1
		}
	},
	PUBLIC:
	{
		isMinVersion:function(b)
		{
			var a=function(j,h,e,d){var f=b.findPlugin(j),g,c=-1;if(f.status<0){return f.status}g=f.plugin;h=b.formatNum(b.isNum(h)?h.toString():(b.isStrNum(h)?b.getNum(h):"0"));if(g.getVersionDone!=1){g.getVersion(h,e,d);if(g.getVersionDone===null){g.getVersionDone=1}}if(g.installed!==null){c=g.installed<=0.5?g.installed:(g.installed==0.7?1:(g.version===null?0:(b.compareNums(g.version,h,g)>=0?1:-0.1)))};return c};return a
		},
		getVersion:function(b)
		{
			var a=function(h,e,d)
			{
				var f=b.findPlugin(h),g,c;
				if(f.status<0)
				{return null};
				g=f.plugin;
				if(g.getVersionDone!=1)
				{
					g.getVersion(null,e,d);
					if(g.getVersionDone===null)
					{g.getVersionDone=1}
				}
				c=(g.version||g.version0);
				c=c?c.replace(b.splitNumRegx,b.getVersionDelimiter):c;
				return c
			};
			return a
		},
		hasMimeType:function(b)
		{
			var a=function(d){if(!b.isIE&&d&&navigator&&navigator.mimeTypes){var g,f,c,e=b.isArray(d)?d:(b.isString(d)?[d]:[]);for(c=0;c<e.length;c++){if(b.isString(e[c])&&/[^\s]/.test(e[c])){g=navigator.mimeTypes[e[c]];f=g?g.enabledPlugin:0;if(f&&(f.name||f.description)){return g}}}}return null};return a
		},
		z:0
	},
	Plugins:
	{
		vlc:
		{
			$:1,
			mimeType:"application/x-vlc-plugin",
			progID:"VideoLAN.VLCPlugin",
			classID:"clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",
			compareNums:function(e,d){var c=this.$,k=e.split(c.splitNumRegx),i=d.split(c.splitNumRegx),h,b,a,g,f,j;for(h=0;h<Math.min(k.length,i.length);h++){j=/([\d]+)([a-z]?)/.test(k[h]);b=parseInt(RegExp.$1,10);g=(h==2&&RegExp.$2.length>0)?RegExp.$2.charCodeAt(0):-1;j=/([\d]+)([a-z]?)/.test(i[h]);a=parseInt(RegExp.$1,10);f=(h==2&&RegExp.$2.length>0)?RegExp.$2.charCodeAt(0):-1;if(b!=a){return(b>a?1:-1)}if(h==2&&g!=f){return(g>f?1:-1)}}return 0},
			getVersion:function()
			{
				var c=this,b=c.$,d,a=null;
				if(!b.isIE)
				{
					if(b.hasMimeType(c.mimeType))
					{
						d=b.findNavPlugin("VLC.*Plug-?in",0,"Totem");
						if(d&&d.description)
						{
							a=b.getNum(d.description,"[\\d][\\d\\.]*[a-z]*")
						}
					}
					c.installed=a?1:-1
				}else
				{
					d=b.getAXO(c.progID);
					if(d)
					{
						a=b.getNum(b.getPROP(d,"VersionInfo"),"[\\d][\\d\\.]*[a-z]*")
					}
					c.installed=a?1:(d?0:-1)
				}
				c.version=b.formatNum(a)
			}
		},
		zz:0
	}
};
PluginDetect.INIT();