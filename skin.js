// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: silhouette_v6.ggsk
// Generated 2024-01-17T14:45:45

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_zoom', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_autorotate', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_projection', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_loader', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_loader_mulires', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_autohide', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_userdata', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_close_buton', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_website', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_show', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_mobile', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_timer', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_360image_once', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	player.addVariable('pos_zoom_in', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_zoom_out', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_autorotate', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_information', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_thumbnail', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_projection', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_gyro', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_fullscreen', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_controller', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_360image', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._menu_button=document.createElement('div');
		els=me._menu_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI0LjcgMTI0Ljc7IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0Lj'+
			'ciIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTEyLDQyLjFjLTIuMiwwLTQsMS44LTQsNHYzMi43YzAsMi4yLDEuOCw0LDQsNGgxMDAuOGMyLjIsMCw0LTEuOCw0LTRWNDZjMC0yLjItMS44LTQtNC00SDEyeiBNMzAuNCw3My43ICAgYy02LjMsMC0xMS40LTUuMS0xMS40LTExLjRDMTksNTYuMSwyNC4xLDUxLDMwLjQsNTFjNi4zLDAsMTEuNCw1LjEsMTEuNCwxMS40QzQxLjgsNjguNiwzNi43LDczLjcsMzAuNCw3My43eiBNNjIuNCw3My43ICAgYy02LjMsMC0xMS40LTUuMS0xMS40LTExLjRDNTEsNTYuMSw1Ni4xLDUxLDYyLjQsNTFjNi4zLDAsMTEuNCw1'+
			'LjEsMTEuNCwxMS40QzczLjcsNjguNiw2OC42LDczLjcsNjIuNCw3My43eiBNOTQuMyw3My43ICAgQzg4LDczLjcsODMsNjguNiw4Myw2Mi40QzgzLDU2LjEsODgsNTEsOTQuMyw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDMTA1LjcsNjguNiwxMDAuNiw3My43LDk0LjMsNzMuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPGNpcmNsZSBjeD0iMzAuNCIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iNjIuNCIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZS'+
			'BjeD0iOTQuMyIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI0LjcgMTI0Ljc7IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0Lj'+
			'ciIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTYuNCwzOS44Yy0yLjQsMC00LjQsMi00LjQsNC40djM2LjNjMCwyLjQsMiw0LjQsNC40LDQuNGgxMTJjMi40LDAsNC40LTIsNC40LTQuNFY0NC4yYzAtMi40LTItNC40LTQuNC00LjRINi40eiBNMjYuOSw3NSAgIGMtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMzkuNSw2OS4zLDMzLjgsNzUsMjYuOSw3NXogTTYyLjQsNzUgICBjLTcsMC0xMi42LTUuNy0xMi42LTEyLjZjMC03LDUuNy0xMi42LDEyLjYtMTIuNmM3LDAsMTIuNiw1'+
			'LjcsMTIuNiwxMi42Qzc1LDY5LjMsNjkuMyw3NSw2Mi40LDc1eiBNOTcuOSw3NSAgIGMtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMTEwLjUsNjkuMywxMDQuOCw3NSw5Ny45LDc1eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGN4PSIyNi45IiBjeT0iNjIuNCIgcj0iMTIuNiIgY2xhc3M9InN0MCIgZmlsbD0iI0ZGRkZGRiIvPgogICA8Y2lyY2xlIGN4PSI2Mi40IiBjeT0iNjIuNCIgcj0iMTIuNiIgY2xhc3M9InN0MCIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8Y2lyY2xlIGN4PSI5Ny45IiBjeT0iNjIuNCIgcj0iMTIuNiIgY2xhc3M9InN0MCIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="menu_button";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_button.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_button.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_button.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_button.style.transition='left 0s, bottom 0s';
				if (me._menu_button.ggCurrentLogicStatePosition == 0) {
					me._menu_button.style.left = 'calc(50% - (32px / 2))';
					me._menu_button.style.bottom='-100px';
				}
				else {
					me._menu_button.style.left='calc(50% - ((32px + 0px) / 2) + 0px)';
					me._menu_button.style.bottom='12px';
				}
			}
		}
		me._menu_button.logicBlock_position();
		me._menu_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_button.onmouseover=function (e) {
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
			me.elementMouseOver['menu_button']=true;
		}
		me._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
			me.elementMouseOver['menu_button']=false;
		}
		me._menu_button.ggCurrentLogicStatePosition = -1;
		me._menu_button.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['menu_button']) {
				me._menu_button__img.style.visibility='hidden';
				me._menu_button__imgo.style.visibility='inherit';
				me.elementMouseOver['menu_button']=true;
			}
		}
		me._menu_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._controller.style.transition='none';
			} else {
				me._controller.style.transition='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._menu_button.style.transition='none';
			} else {
				me._menu_button.style.transition='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._menu_button.style.transition='none';
			} else {
				me._menu_button.style.transition='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._controller.style.transition='none';
			} else {
				me._controller.style.transition='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_button.appendChild(me._hide_timer);
		me.divSkin.appendChild(me._menu_button);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint.style.transition='opacity 500ms ease 0ms';
				if (me._screentint.ggCurrentLogicStateAlpha == 0) {
					me._screentint.style.visibility=me._screentint.ggVisible?'inherit':'hidden';
					me._screentint.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint.style.opacity == 0.0) { me._screentint.style.visibility="hidden"; } }, 505);
					me._screentint.style.opacity=0;
				}
			}
		}
		me._screentint.logicBlock_alpha();
		me._screentint.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
			player.setVariableValue('vis_userdata', false);
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((256px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 256px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					me._controller.style.left = 'calc(50% - (256px / 2))';
					me._controller.style.bottom='-100px';
				}
				else {
					me._controller.style.left='calc(50% - ((256px + 0px) / 2) + 0px)';
					me._controller.style.bottom='23px';
				}
			}
		}
		me._controller.logicBlock_position();
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller.style.opacity == 0.0) { me._controller.style.visibility="hidden"; } }, 505);
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.logicBlock_alpha();
		me._controller.onmouseover=function (e) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggCurrentLogicStatePosition = -1;
		me._controller.ggCurrentLogicStateAlpha = -1;
		me._controller.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['controller']) {
				if (
					(
						((player.getVariableValue('opt_autohide') == true))
					)
				) {
					me._hide_timer.ggTimeout=Number("5") * 1000.0;
					me._hide_timer.ggTimestamp=skin.ggCurrentTime;
				}
				me.elementMouseOver['controller']=true;
			}
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_bg=document.createElement('div');
		el.ggId="controller_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(63,63,63,0.498039);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStatePosition == 0) {
					me._controller_bg.style.left='87px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 1) {
					me._controller_bg.style.left='71px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 2) {
					me._controller_bg.style.left='55px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 3) {
					me._controller_bg.style.left='39px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 4) {
					me._controller_bg.style.left='23px';
					me._controller_bg.style.top='-8px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 5) {
					me._controller_bg.style.left='7px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 6) {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
				else {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
			}
		}
		me._controller_bg.logicBlock_position();
		me._controller_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStateSize = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStateSize = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStateSize = 6;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._controller_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateSize == 0) {
					me._controller_bg.style.width='82px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 1) {
					me._controller_bg.style.width='114px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 2) {
					me._controller_bg.style.width='146px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 3) {
					me._controller_bg.style.width='178px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 4) {
					me._controller_bg.style.width='210px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 5) {
					me._controller_bg.style.width='242px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 6) {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
			}
		}
		me._controller_bg.logicBlock_size();
		me._controller_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pos_controller') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateVisible == 0) {
					me._controller_bg.style.visibility="hidden";
					me._controller_bg.ggVisible=false;
				}
				else {
					me._controller_bg.style.visibility=(Number(me._controller_bg.style.opacity)>0||!me._controller_bg.style.opacity)?'inherit':'hidden';
					me._controller_bg.ggVisible=true;
				}
			}
		}
		me._controller_bg.logicBlock_visible();
		me._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_bg);
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("8")))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style.transition='left 0s, top 0s';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		me._controller_slider.logicBlock_position();
		me._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_fullscreen') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("6")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("7")))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style.transition='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='0px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='32px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='64px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='128px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 5) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 6) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 7) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_position();
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getOS() != 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style.transition='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible();
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYgICAgYy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40ICAgIGMtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0w'+
			'LjRsLTEuNC0xLjkgICAgQy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcgICAgYzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGw9IiMwMDAwMD'+
			'AiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42ICAgYy0wLjEsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQgICBjMC4yLDAuMywwLjQsMC40LDAuOSwwLjNjMC40LDAsMC43LTAuMywwLjgtMC42bDUuMi0xNS40Qy0xNDcuMiwzNzgu'+
			'NC0xNDcuMiwzNzguMS0xNDcuNCwzNzcuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTE0Mi43LDQyNC42aC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjdjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjQ2LjcgICBDLTEzOC40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiAgICBjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSAgICBjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAu'+
			'NGwtMS41LTIuMSAgICBDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgIFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44ICAgIGMyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsPSIjMDAwMD'+
			'AwIi8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjIgICBjLTAuMSwwLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYgICBjMC4yLDAuMywwLjUsMC40LDEsMC40YzAuNSwwLDAuNy0wLjMsMC44LTAuN2w1LjgtMTcuMUMtMTQ0LjEsMzc2LjMtMTQ0'+
			'LjEsMzc2LTE0NC4zLDM3NS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTM5LjEsNDI3LjZoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOGMyLjYsMCw0LjcsMi4xLDQuNyw0Ljd2NTEuOCAgIEMtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.logicBlock_alpha();
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen']=true;
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen']=false;
		}
		me._fullscreen.ggCurrentLogicStateAlpha = -1;
		me._fullscreen.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['fullscreen']) {
				me._fullscreen__img.style.visibility='hidden';
				me._fullscreen__imgo.style.visibility='inherit';
				me.elementMouseOver['fullscreen']=true;
			}
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen);
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHk9IjM5NyIgd2lkdGg9IjMyLjEiIGhlaWdodD0iMjIuMiIgeD0iLTIwNi4yIiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQuMiAgICBoMzQuNWMyLjMsMCw0LjIs'+
			'MS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43ICAgIGMwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40ICAgIGMwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLj'+
			'EsMC40bDEuNCwxLjkgICAgQy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiAgICBjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4y'+
			'LTAuMSAgICBjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYgICAgQy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41ICAgIEMtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi'+
			'4xVjM5N2gzMi4xVjQxOS4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHk9IjM5NyIgd2lkdGg9IjM1LjciIGhlaWdodD0iMjQuNiIgeD0iLTIwOS42IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCAgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtMjcuMiAgICBjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNj'+
			'Mi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSAgICBsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkgICAgbDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLj'+
			'QsMC40ICAgIGwxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEgICAgYy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSAg'+
			'ICBjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQgICAgQy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiAgICBDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42ei'+
			'IgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_off.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_off.style.visibility=me._fullscreen_off.ggVisible?'inherit':'hidden';
					me._fullscreen_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_off.style.opacity == 0.0) { me._fullscreen_off.style.visibility="hidden"; } }, 505);
					me._fullscreen_off.style.opacity=0;
				}
			}
		}
		me._fullscreen_off.logicBlock_alpha();
		me._fullscreen_off.onmouseover=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_off']=true;
		}
		me._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_off']=false;
		}
		me._fullscreen_off.ggCurrentLogicStateAlpha = -1;
		me._fullscreen_off.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['fullscreen_off']) {
				me._fullscreen_off__img.style.visibility='hidden';
				me._fullscreen_off__imgo.style.visibility='inherit';
				me.elementMouseOver['fullscreen_off']=true;
			}
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen_off);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_gyro') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("6")))
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._gyro.style.transition='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStatePosition == 0) {
					me._gyro.style.left='0px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 1) {
					me._gyro.style.left='32px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 2) {
					me._gyro.style.left='64px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 3) {
					me._gyro.style.left='96px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 4) {
					me._gyro.style.left='128px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 5) {
					me._gyro.style.left='160px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 6) {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
				else {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
			}
		}
		me._gyro.logicBlock_position();
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style.transition='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.logicBlock_visible();
		me._gyro.onclick=function (e) {
			player.stopAutorotate();
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZD0iTTEwMy41LDU5LjRjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy00LjEtMS44LTkuMi0zLjItMTQuOS00LjFjMS4yLDMuNiwyLjMsNy41LDMuMSwxMS42YzEuMSw1LjYsMS42LDExLDEuNywxNS45ICAgIGMtMC41LDAuMS0wLjksMC4yLTEuNCwwLjNjLTEsMC4yLTIsMC40LTMuMSwwLjZjMC0wLjEsMC0wLjMsMC0wLjRjMC00LjgtMC41LTEwLjEtMS42LTE1LjVjLTAuOS00LjctMi4yLTkuMS0zLjctMTMuMSAgICBjLTMuMi0wLjMtNi41LTAuNS0xMC0wLjVsLTAuOS00LjVj'+
			'MC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjYgICAgYy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw2LjksMzQuOWwyLjksMTQuN2MtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0yLjgtMTQuMmwtNi45LTM0LjljLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40ICAgIGMtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLjUsOS41LTIuNSwxNS45YzAsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMGMwLjksNC43LDIuMiw5LjEsMy43LDEzLjFjMy4yLDAuMyw2LjUsMC41LDEwLDAuNSAgICBjNy43LD'+
			'AsMTQuOS0wLjksMjEuMS0yLjRjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LDAuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44ICAgIEMxMDUuMSw2MS4zLDEwNC40LDYwLjMsMTAzLjUsNTkuNHogTTUxLjYsNDkuNmMwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMuOC0wLjQsNS44LTAuNmwwLjksNC41ICAgIEM1Ni4yLDQ5LjEsNTMuOCw0OS4zLDUxLjYsNDkuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFj'+
			'MzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xQzEyMS4xLDM0LDk2LDguOSw2NSw4Ljl6IE0xMDYuNyw3My44ICAgIGMtMi41LDIuNS01LjksNC42LTEwLDYuNGMtOC4yLDMuNS0xOS40LDUuNi0zMS42LDUuNmMtMi43LDAtNS40LTAuMS04LTAuM2MyLjEsNC40LDQuNCw4LjEsNi44LDEwLjZjMS43LDEuOCwzLjQsMyw0LjgsMy42ICAgIGMwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41ICAgIGMwLjgtMiwxLjQtNC40LDEuOS03LjJjMS0wLjEsMi0wLjMsMy0wLj'+
			'VjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5LjcgICAgYy0xLjUsMS42LTMuNCwyLjctNS41LDMuMWwwLDBjLTAuNiwwLjEtMS4yLDAuMi0xLjgsMC4yYy0xLjQsMC0yLjgtMC4zLTQuMS0wLjhjLTEuMy0wLjUtMi42LTEuMy0zLjgtMi4zICAgIGMtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0zLjItMC40LTYuMi0xLTktMS43Yy02LjYtMS42LTEyLjItMy45LTE2LjMtNi44Yy0yLjgtMS45LTQuOS00LjItNi4yLTYuNyAgICBjLTAuNy0xLjUtMS4xLTMuMS0xLjEtNC43YzAt'+
			'MS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjMgICAgYy0wLjEsMS41LTAuMiwzLjEtMC4yLDQuN2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOCAgICBjMC41LDAuOSwxLjEsMS45LDIuMSwyLjljMS45LDEuOSw0LjksMy44LDguNiw1LjRjNC4xLDEuOCw5LjIsMy4yLDE0LjksNC4xYy0xLjItMy42LTIuMy03LjUtMy4xLTExLjYgICAgYy0xLjEtNS43LTEuNy0xMS4zLT'+
			'EuNy0xNi40YzAtNS4xLDAuNS05LjgsMS42LTEzLjhjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjIgICAgYzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuM2MyLjQsMS45LDQuNyw0LjUsNi43LDcuOGMxLjcsMi42LDMuMiw1LjYsNC42LDguOWMzLjIsMC40LDYuMiwxLDksMS43ICAgIGM2LjYsMS42LDEyLjIsMy45LDE2LjMsNi44YzIuOCwxLjksNC45LDQuMiw2LjEsNi43YzAuNywxLjUsMS4xLDMuMSwxLjEsNC43YzAsMS42LTAuNCwzLjItMS4xLDQuNyAgICBDMTA4LjksNzEuMiwx'+
			'MDcuOSw3Mi42LDEwNi43LDczLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNNTIsNDVjLTAuMiwxLjQtMC4zLDMtMC40LDQuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVDNTUuOCw0NC42LDUzLjgsNDQuOCw1Miw0NXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTEwOS42LDYwLjNjLTEuMi0yLjYtMy40LTQuOC02LjEtNi43Yy00LjEtMi45LTkuNy01LjItMTYuMy02LjhjLTIuOC0wLjctNS45LTEuMi05LTEuNyAgICBjLTEuNC0zLjMtMi45LTYuMy00LjYtOC45Yy0yLjEtMy4yLTQuMy01LjktNi43LTcuOGMtMS4yLTEtMi41LTEuNy'+
			'0zLjgtMi4zYy0xLjMtMC41LTIuNy0wLjgtNC4xLTAuOGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjAgICAgYy0yLjEsMC40LTQsMS42LTUuNSwzLjFjLTIuMywyLjQtMy44LDUuNy00LjksOS43Yy0xLjEsNC0xLjYsOC43LTEuNiwxMy44YzAsNS4xLDAuNSwxMC43LDEuNywxNi40YzAuOCw0LjEsMS45LDgsMy4xLDExLjYgICAgYy01LjctMC45LTEwLjgtMi4zLTE0LjktNC4xYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjhoMGMwLTAuOSwwLjItMS44LDAuNy0yLjggICAgYzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQt'+
			'Mi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuM2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNCAgICBjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43YzQuMSwyLjksOS43LDUuMiwxNi4zLDYuOCAgICBjMi44LDAuNyw1LjksMS4zLDksMS43YzEuNCwzLjMsMi45LDYuMyw0LjYsOC45YzIuMSwzLjIsNC4zLDUuOSw2LjcsNy44YzEuMiwxLDIuNSwxLjcsMy44LDIuM2MxLjMsMC41LDIuNywwLjgsNC4xLDAuOCAgICBjMC'+
			'42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMGMyLjEtMC40LDQtMS42LDUuNS0zLjFjMi4zLTIuNCwzLjgtNS43LDQuOS05LjdjMC41LTEuOCwwLjktMy44LDEuMS01LjljLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC4zICAgIGMtMSwwLjItMiwwLjMtMywwLjVjLTAuNCwyLjctMS4xLDUuMi0xLjksNy4yYy0wLjgsMi0xLjcsMy41LTIuNyw0LjVjLTAuNiwwLjYtMS4yLDEtMS44LDEuM2wtMi40LTEyLjJjLTAuOSwwLTEuOCwwLjEtMi43LDAuMSAgICBsMi41LDEyLjZjLTAuNiwwLTEuMy0wLjItMi0wLjVjLTEuNS0wLjYtMy4yLTEuOC00LjgtMy42Yy0yLjQtMi41LTQuNy02LjEtNi44LTEwLjZjMi42LDAu'+
			'Miw1LjMsMC4zLDgsMC4zICAgIGMxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjZjNC4xLTEuOCw3LjUtMy45LDEwLTYuNGMxLjItMS4zLDIuMy0yLjYsMy00LjFjMC43LTEuNSwxLjEtMy4xLDEuMS00LjcgICAgQzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNiw2MC4zeiBNMTA1LjYsNjcuOGMtMC44LDEuNi0yLjMsMy40LTQuNyw1Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjQgICAgYy0zLjQsMC02LjgtMC4yLTEwLTAuNWMtMS41LTQtMi44LTguNC0zLjctMTMuMWwwLDBjLTEuMS01LjUtMS42LTEwLjctMS42LTE1LjVjMC02LjQsMC45LTEyLDIuNS'+
			'0xNS45YzAuOC0yLDEuNy0zLjUsMi43LTQuNSAgICBjMC42LTAuNiwxLjItMS4xLDEuOC0xLjRsNi45LDM0LjlsMi44LDE0LjJjMC45LDAsMS44LDAsMi43LTAuMWwtMi45LTE0LjdsLTYuOS0zNC45YzAuNiwwLDEuMywwLjIsMS45LDAuNSAgICBjMS41LDAuNiwzLjIsMS44LDQuOCwzLjZjMi40LDIuNSw0LjcsNi4xLDYuOCwxMC42Yy0yLjYtMC4yLTUuMy0wLjMtOC0wLjNjLTAuMywwLTAuNiwwLTAuOSwwbDAuOSw0LjVjMy40LDAsNi44LDAuMiwxMCwwLjUgICAgYzEuNSw0LDIuOCw4LjQsMy43LDEzLjFjMS4xLDUuNSwxLjYsMTAuNywxLjYsMTUuNWMwLDAuMiwwLDAuMywwLDAuNGMxLjEtMC4y'+
			'LDIuMS0wLjQsMy4xLTAuNmMwLjUtMC4xLDAuOS0wLjIsMS40LTAuMyAgICBjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjgtNC4xLTEuOS04LTMuMS0xMS42YzUuNywwLjksMTAuNywyLjMsMTQuOSw0LjFjMy43LDEuNiw2LjcsMy41LDguNiw1LjRjMSwxLDEuNywxLjksMi4xLDIuOSAgICBjMC40LDAuOSwwLjcsMS44LDAuNywyLjhDMTA2LjIsNjUuOSwxMDYsNjYuOCwxMDUuNiw2Ny44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZD0iTTEwNy44LDU4LjdjLTIuMS0yLjEtNS40LTQuMi05LjYtNmMtNC42LTItMTAuMi0zLjUtMTYuNS00LjVjMS40LDQsMi41LDguMywzLjQsMTIuOGMxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43ICAgIGMtMC41LDAuMS0xLDAuMi0xLjYsMC4zYy0xLjEsMC4yLTIuMywwLjQtMy40LDAuNmMwLTAuMiwwLTAuMywwLTAuNWMwLTUuMy0wLjYtMTEuMi0xLjgtMTcuM2MtMS01LjItMi40LTEwLjEtNC4xLTE0LjUgICAgYy0zLjYtMC40LTcuMy0wLjYtMTEuMS0wLjZsLTEtNWMwLjMs'+
			'MCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTQgICAgYy0wLjgtMC4zLTEuNS0wLjUtMi4yLTAuNWw3LjcsMzguOEw2OS43LDgxYy0xLDAtMiwwLjEtMywwLjFsLTMuMS0xNS44bC03LjctMzguN2MtMC43LDAuMy0xLjMsMC44LTIsMS41Yy0xLjEsMS4yLTIuMiwyLjktMyw1ICAgIEM0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLDAuNiwxMS4yLDEuOCwxNy4ybDAsMGMxLDUuMiwyLjQsMTAuMSw0LjEsMTQuNWMzLjYsMC40LDcuMywwLjYsMTEuMSwwLjZjOC42LDAsMTYuNi0xLDIzLjUtMi43ICAgIGM2Lj'+
			'ktMS43LDEyLjYtNC4xLDE2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjFjMC0xLTAuMi0yLTAuNy0zLjFDMTA5LjYsNjAuOSwxMDguOCw1OS44LDEwNy44LDU4Ljd6ICAgICBNNTAuMSw0Ny45YzAuMS0xLjgsMC4yLTMuNSwwLjQtNS4xYzIuMS0wLjMsNC4yLTAuNSw2LjQtMC42bDEsNC45QzU1LjIsNDcuMyw1Mi42LDQ3LjYsNTAuMSw0Ny45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNNjUsMi42QzMwLjYsMi42LDIuNiwzMC42LDIuNiw2NWMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNEMx'+
			'MjcuNCwzMC42LDk5LjQsMi42LDY1LDIuNnogICAgIE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjFDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuNyAgICBjMS45LDIsMy43LDMuMyw1LjQsNGMwLjgsMC4zLDEuNSwwLjUsMi4yLDAuNWwtMi44LTE0YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNSAgICBjMC45LTIuMiwxLjYtNC45LDIuMS04YzEuMS0wLjIsMi4zLTAuMywzLjMtMC41YzAuNi0wLjEsMS4yLTAuMiwxLjgtMC40Yy0wLj'+
			'MsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44ICAgIGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yYy0xLjUsMC0zLjEtMC4zLTQuNS0wLjljLTEuNS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjYgICAgYy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMy41LTAuNS02LjktMS4xLTEwLTEuOUMzMyw4My41LDI2LjgsODEsMjIuMiw3Ny43Yy0zLjEtMi4yLTUuNC00LjYtNi44LTcuNWMtMC44LTEuNi0xLjItMy40LTEuMi01LjIgICAgYzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEu'+
			'OS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiAgICBjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LDMuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjIgICAgYzIuMSwyLjEsNS40LDQuMiw5LjYsNmM0LjYsMiwxMC4yLDMuNSwxNi41LDQuNWMtMS40LTQtMi41LTguMy0zLjQtMTIuOEM0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44YzAtNS43LDAuNi0xMC45LDEuOC0xNS4zICAgIGMxLjItNC'+
			'40LDIuOS04LjEsNS40LTEwLjhjMS43LTEuOCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOWMxLjUsMC42LDIuOSwxLjQsNC4yLDIuNSAgICBjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzMuNSwwLjUsNi45LDEuMSwxMCwxLjljNy4zLDEuOCwxMy41LDQuNCwxOC4xLDcuNmMzLjEsMi4yLDUuNCw0LjYsNi44LDcuNSAgICBjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNzMuNCwxMTEuMyw3NC44eiIgZmlsbD0iIzAwMDAwMCIvPgog'+
			'IDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTUwLjUsNDIuOGMtMC4yLDEuNi0wLjQsMy4zLTAuNCw1LjFjMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45QzU0LjcsNDIuMyw1Mi42LDQyLjUsNTAuNSw0Mi44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMTE0LjYsNTkuOGMtMS40LTIuOS0zLjgtNS4zLTYuOC03LjVjLTQuNi0zLjItMTAuOC01LjgtMTguMS03LjZjLTMuMS0wLjgtNi41LTEuNC0xMC0xLjkgICAgYy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0zLjYtNC44LTYuNS03LjUtOC42Yy0xLjMtMS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LTAuNi0zLTAuOS00LjUtMC'+
			'45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAgICAgYy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjIgICAgYzAuOSw0LjUsMi4xLDguOCwzLjQsMTIuOGMtNi4zLTEtMTEuOS0yLjYtMTYuNS00LjVjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLTAuNy0yLTAuNy0zLjFoMCAgICBjMC0xLDAuMi0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYuN2MwLTEuOCwwLjEtMy41'+
			'LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43ICAgIGMtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSAgICBjNC42LDMuMiwxMC44LDUuOCwxOC4xLDcuNmMzLjEsMC44LDYuNSwxLjQsMTAsMS45YzEuNSwzLjcsMy4zLDcsNS4xLDkuOWMyLjMsMy42LDQuOCw2LjUsNy41LDguNmMxLjMsMS4xLDIuNywxLjksNC4yLDIuNSAgICBjMS41LDAuNiwzLDAuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLjJsMCwwYzIuNC0wLjUsNC'+
			'40LTEuNyw2LjEtMy41YzIuNS0yLjcsNC4yLTYuNCw1LjQtMTAuOGMwLjUtMiwwLjktNC4yLDEuMi02LjUgICAgYy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjVjLTAuNSwzLTEuMiw1LjctMi4xLDhjLTAuOSwyLjItMS45LDMuOS0zLDVjLTAuNiwwLjctMS4zLDEuMi0yLDEuNWwtMi43LTEzLjUgICAgYy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTRjLTAuNy0wLjEtMS40LTAuMi0yLjItMC41Yy0xLjctMC43LTMuNS0yLTUuNC00Yy0yLjYtMi44LTUuMi02LjgtNy41LTExLjdDNTksODgsNjIsODguMSw2NSw4OC4xICAgIGMxMy42LDAsMjYtMi4zLDM1LjIt'+
			'Ni4yYzQuNi0yLDguNC00LjMsMTEuMi03LjFjMS40LTEuNCwyLjUtMi45LDMuMy00LjVjMC44LTEuNiwxLjItMy40LDEuMi01LjIgICAgQzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiBNMTEwLjEsNjguMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjZjLTMuOSwyLjctOS42LDUuMS0xNi40LDYuOGMtNi45LDEuNy0xNC45LDIuNy0yMy41LDIuNyAgICBjLTMuOCwwLTcuNS0wLjItMTEuMS0wLjZjLTEuNy00LjQtMy4xLTkuMy00LjEtMTQuNWwwLDBDNDguNiw2MS45LDQ4LDU2LjEsNDgsNTAuOGMwLTcuMSwxLTEzLjMsMi44LTE3LjdjMC45LTIuMiwxLjktMy45LDMtNSAgICBjMC43LT'+
			'AuNywxLjMtMS4yLDItMS41bDcuNywzOC43bDMuMSwxNS44YzEsMCwyLDAsMy0wLjFsLTMuMi0xNi4zTDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCAgICBjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjgsMCw3LjUsMC4yLDExLjEsMC42YzEuNyw0LjQsMy4xLDkuMyw0LjEsMTQuNSAgICBjMS4yLDYuMSwxLjgsMTEuOSwxLjgsMTcuM2MwLDAuMiwwLDAuMywwLDAuNWMxLjItMC4yLDIuMy0wLjQsMy40LTAuNmMwLjUtMC4xLDEtMC4yLDEuNi0wLjNjMC01LjUtMC42LTEx'+
			'LjUtMS45LTE3LjcgICAgYy0wLjktNC41LTIuMS04LjgtMy40LTEyLjhjNi4zLDEsMTEuOSwyLjYsMTYuNSw0LjVjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjEgICAgQzExMC44LDY2LDExMC42LDY3LDExMC4xLDY4LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style.transition='opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_on.style.opacity == 0.0) { me._gyro_on.style.visibility="hidden"; } }, 505);
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.logicBlock_alpha();
		me._gyro_on.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_on.style.transition='none';
			} else {
				me._gyro_on.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_off.style.transition='none';
			} else {
				me._gyro_off.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
			me.__360image_gyro.ggTimeout=Number("4") * 1000.0;
			me.__360image_gyro.ggTimestamp=skin.ggCurrentTime;
			me.__360image_timer.ggTimeout=Number("0.4") * 1000.0;
			me.__360image_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggCurrentLogicStateAlpha = -1;
		me._gyro_on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gyro_on']) {
				me._gyro_on__img.style.visibility='hidden';
				me._gyro_on__imgo.style.visibility='inherit';
				me.elementMouseOver['gyro_on']=true;
			}
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTQ2LjgsMzguNCAgIGMxLjEtNCwyLjYtNy4zLDQuOS05LjdjMS41LTEuNiwzLjQtMi43LDUuNS0zLjF2MGMwLjYtMC4xLDEuMi0wLjIsMS44LTAuMmMxLjQsMCwyLjgsMC4zLDQuMSwwLjhjMS4zLDAuNSwyLjYsMS4zLDMuOCwyLjMgICBjMi40LDEuOSw0LjcsNC41LDYuNyw3LjhjMS43LDIuNiwzLjIs'+
			'NS42LDQuNiw4LjljMC4xLDAsMC4yLDAsMC4zLDAuMWwtNC4xLDQuMWMtMy0wLjMtNi4yLTAuNS05LjUtMC41bC0wLjktNC41ICAgYzAuMywwLDAuNiwwLDAuOSwwYzIuNywwLDUuNCwwLjEsOCwwLjNjLTIuMS00LjQtNC40LTguMS02LjgtMTAuNmMtMS43LTEuOC0zLjQtMy00LjgtMy42Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw1LjcsMjguNyAgIGwtMi4zLDIuM2wtNi0zMC40Yy0wLjYsMC4zLTEuMiwwLjctMS44LDEuNGMtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLjUsOS41LTIuNSwxNS45YzAsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMCAgIGMwLjMsMS4zLDAuNSwyLjUsMC'+
			'44LDMuOGwtMy43LDMuN2MtMC42LTIuMS0xLjEtNC4zLTEuNi02LjZjLTEuMS01LjctMS43LTExLjMtMS43LTE2LjRDNDUuMiw0Nyw0NS44LDQyLjQsNDYuOCwzOC40eiBNNTguNiw0OC45ICAgYy0yLjQsMC4yLTQuOCwwLjQtNywwLjdjMC4xLTEuNiwwLjItMy4xLDAuNC00LjZjMS45LTAuMiwzLjgtMC40LDUuOC0wLjZMNTguNiw0OC45eiBNMjAuNCw2OS43Yy0wLjctMS41LTEuMS0zLjEtMS4xLTQuNyAgIGMwLTEuNiwwLjQtMy4yLDEuMS00LjdjMC43LTEuNSwxLjctMi44LDMtNC4xYzIuNS0yLjUsNS45LTQuNiwxMC02LjRjMy4xLTEuMyw2LjUtMi40LDEwLjMtMy4zYy0wLjEsMS41LTAuMiwz'+
			'LjEtMC4yLDQuNyAgIGMtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOGMwLjUsMC45LDEuMSwxLjksMi4xLDIuOSAgIGMxLjksMS45LDQuOSwzLjgsOC42LDUuNGMyLjgsMS4yLDUuOSwyLjIsOS40LDNsLTMuNywzLjdjLTUuNy0xLjYtMTAuNi0zLjctMTQuNC02LjNDMjMuOCw3NC41LDIxLjYsNzIuMywyMC40LDY5Ljd6IE0zMi44LDEwMC4zICAgYy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLj'+
			'QsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyAgIGMwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2QzMzLjYsMTAwLjIsMzMuMiwxMDAuMywzMi44LDEwMC4zeiBNNzguNyw2Mi4zYy0wLjMtMS4zLTAuNS0yLjUtMC44LTMuOGwzLjctMy43ICAgYzAuNiwyLjEsMS4xLDQuMywxLjYsNi42YzEuMSw1LjYsMS42LDExLDEuNywxNS45Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNCAgIEM4MC4zLDczLDc5LjgsNjcuOCw3OC43LDYyLjN6IE02OS4zLDc5LjRjLTAuOSwwLTEuOCwwLjEtMi43LDAuMWwtMS42LTguMWwyLjMt'+
			'Mi4zTDY5LjMsNzkuNHogTTEwNi43LDczLjggICBjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNCw1LjYtMzEuNiw1LjZjLTIuNywwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiAgIGMwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41ICAgYzAuOC0yLDEuNC00LjQsMS45LTcuMmMxLTAuMSwyLTAuMywzLTAuNWMwLjYtMC4xLDEuMS0wLjIsMS42LTAuM2MtMC4zLDIuMS0wLj'+
			'YsNC4xLTEuMSw1LjljLTEuMSw0LTIuNiw3LjMtNC45LDkuNyAgIGMtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyAgIGMtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0wLjEsMC0wLjIsMC0wLjQtMC4xbDQuMS00LjFjMywwLjMsNi4yLDAuNSw5LjUsMC41YzcuNywwLDE0LjktMC45LDIxLjEtMi40ICAgYzYuMi0xLjUsMTEuMy0zLjcsMTQuOC02LjFjMi4zLTEuNiwzLjktMy40LDQuNy01YzAuNC0wLjksMC43LTEuOCww'+
			'LjctMi44YzAtMC45LTAuMi0xLjgtMC43LTIuOGMtMC40LTAuOS0xLjEtMS45LTIuMS0yLjkgICBjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy0yLjgtMS4yLTYtMi4yLTkuNS0zbDMuNy0zLjdjNS43LDEuNiwxMC42LDMuNywxNC40LDYuM2MyLjgsMS45LDQuOSw0LjIsNi4xLDYuNyAgIGMwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjdDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik01MS42LDQ5LjZjMi4zLTAuMyw0LjYtMC42LDctMC43bC0wLjktNC41Yy0yLDAuMS0zLjksMC4zLT'+
			'UuOCwwLjZDNTEuOCw0Ni41LDUxLjcsNDgsNTEuNiw0OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcgICAgYzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNjYuNSw3OS41YzAuOSwwLDEuOCwwLDIuNy0wLjFsLTItMTAuM2wtMi4zLDIuM0w2Ni41'+
			'LDc5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik04My40LDc3LjdjMC41LTAuMSwwLjktMC4yLDEuNC0wLjNjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjQtMi4zLTEtNC41LTEuNi02LjZsLTMuNywzLjcgICAgYzAuMywxLjIsMC42LDIuNSwwLjgsMy44YzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRDODEuMyw3OC4xLDgyLjQsNzcuOSw4My40LDc3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik00OC41LDc1LjJsMy43LTMuN2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC43LTEuNi0xNS41YzAtNi'+
			'40LDAuOS0xMiwyLjUtMTUuOSAgICBjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLjYgICAgYzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41YzMuMywwLDYuNCwwLjIsOS41LDAuNWw0LjEtNC4xICAgIGMtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43'+
			'LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44ICAgIGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQgICAgQzQ3LjQsNzAuOCw0Ny45LDczLDQ4LjUsNzUuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTQ0LjYsNzkuMWMtMy41LTAuOC02LjctMS44LTkuNC0zYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjggICAgaDBjMC0wLj'+
			'ksMC4yLTEuOCwwLjctMi44YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuMyAgICBjLTQuMSwxLjgtNy41LDMuOS0xMCw2LjRjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43ICAgIGMzLjcsMi42LDguNiw0LjcsMTQuNCw2LjNMNDQuNiw3OS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMTA5LjcsNjAuM2MtMS4yLTIuNi0zLjQtNC44LTYuMS02Ljdj'+
			'LTMuNy0yLjYtOC42LTQuNy0xNC40LTYuM2wtMy43LDMuN2MzLjUsMC44LDYuNywxLjgsOS41LDMgICAgYzMuNywxLjYsNi43LDMuNSw4LjYsNS40YzEsMSwxLjcsMS45LDIuMSwyLjljMC40LDAuOSwwLjcsMS44LDAuNywyLjhjMCwwLjktMC4yLDEuOC0wLjcsMi44Yy0wLjgsMS42LTIuMywzLjQtNC43LDUgICAgYy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjRjLTMuMywwLTYuNC0wLjItOS41LTAuNWwtNC4xLDQuMWMwLjEsMCwwLjIsMCwwLjQsMC4xICAgIGMxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMyw1LjksNi43LDcuOGMxLj'+
			'IsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLjcsMC44LDQuMSwwLjhjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMCAgICBjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuM2MtMSwwLjItMiwwLjMtMywwLjUgICAgYy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjFsMi41LDEyLjYgICAgYy0wLjYsMC0xLjMtMC4yLTItMC41Yy0xLjUtMC42'+
			'LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuM2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjYgICAgYzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNyw2MC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS41LDIuNiw2NSwyLjZ6ICAgIE00NC44LDM1LjRjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYwYzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSww'+
			'LjkgICBjMS41LDAuNiwyLjksMS40LDQuMiwyLjVjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzAuMSwwLDAuMywwLDAuNCwwLjFsLTQuNSw0LjVjLTMuNC0wLjMtNi45LTAuNS0xMC41LTAuNSAgIGwtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNGMtMC44LTAuMy0xLjUtMC41LTIuMi0wLjVsNi4zLDMxLjggICBsLTIuNiwyLjZsLTYuNy0zMy44Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDVDNDkuMSwzNy41LDQ4LDQzLjYsND'+
			'gsNTAuOGMwLDUuMywwLjYsMTEuMiwxLjgsMTcuMmwwLDAgICBjMC4zLDEuNCwwLjYsMi44LDAuOSw0LjJsLTQuMSw0LjFjLTAuNy0yLjQtMS4yLTQuOC0xLjctNy4zQzQzLjYsNjIuNiw0Myw1Ni40LDQzLDUwLjhDNDMsNDUuMSw0My42LDM5LjksNDQuOCwzNS40eiBNNTcuOSw0Ny4xICAgYy0yLjcsMC4yLTUuMywwLjQtNy44LDAuOGMwLjEtMS44LDAuMi0zLjUsMC40LTUuMWMyLjEtMC4zLDQuMi0wLjUsNi40LTAuNkw1Ny45LDQ3LjF6IE0xNS40LDcwLjJjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yICAgYzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgt'+
			'Mi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiAgIGMtNi42LDEuNy0xMi4yLDQtMTYsNi43Yy0yLjYsMS44LTQuMywzLjctNS4yLDUuNmMtMC41LDEtMC43LDItMC43LDMuMWgwYzAsMSwwLjIsMiwwLjcsMy4xYzAuNSwxLDEuMywyLjEsMi4zLDMuMiAgIGMyLjEsMi4xLDUuNCw0LjIsOS42LDZjMy4xLDEuMyw2LjYsMi40LDEwLjUsMy4zbC00LjEsNC4xYy02LjQtMS44LTExLjgtNC4xLTE2LTdDMTkuMiw3NS42LDE2LjgsNzMuMSwxNS40LDcwLjJ6IE0yOS4zLDEwNC4zICAgYy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLT'+
			'EuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjggICBjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMSwyOS43LDEwNC4zLDI5LjMsMTA0LjN6IE04MC4yLDYyYy0wLjMtMS40LTAuNi0yLjgtMC45LTQuMmw0LjEtNC4xICAgYzAuNywyLjQsMS4yLDQuOCwxLjcsNy4zYzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjdjLTAuNSwwLjEtMSwwLjItMS42LDAuM2MtMS4xLDAuMi0yLjMsMC40LTMuNCwwLjZjMC0wLjIsMC0wLjMsMC0wLjUgICBDODIsNzMuOSw4MS40LDY4'+
			'LjEsODAuMiw2MnogTTY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMS44LTguOWwyLjYtMi42TDY5LjcsODF6IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjEgICBDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuN2MxLjksMiwzLjcsMy4zLDUuNCw0YzAuOCwwLjMsMS41LDAuNSwyLjIsMC41bC0yLjgtMTQgICBjMSwwLDItMC4xLDMtMC4xbDIuNywxMy41YzAuNy0wLjMsMS4zLTAuOCwyLTEuNWMxLjEtMS4yLDIuMi0yLjksMy01YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC4yLDIuMy0wLjMsMy4zLT'+
			'AuNSAgIGMwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0wLjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yICAgYy0xLjUsMC0zLjEtMC4zLTQuNS0wLjljLTEuNS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjZjLTEuOC0yLjktMy42LTYuMi01LjEtOS45Yy0wLjEsMC0wLjMsMC0wLjQtMC4xbDQuNS00LjUgICBjMy40LDAuMyw2LjksMC41LDEwLjUsMC41YzguNiwwLDE2LjYtMSwyMy41LTIuN2M2LjktMS43LDEyLjYtNC4xLDE2LjQtNi44YzIu'+
			'Ni0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjEgICBjMC0xLTAuMi0yLTAuNy0zLjFjLTAuNS0xLTEuMy0yLjEtMi4zLTMuMmMtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy0zLjEtMS4zLTYuNi0yLjQtMTAuNS0zLjRsNC4xLTQuMWM2LjQsMS44LDExLjgsNC4xLDE2LDcgICBjMy4xLDIuMiw1LjQsNC42LDYuOCw3LjVjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNzMuNCwxMTEuMyw3NC44eiIgZmlsbD0iIzAwMDAwMCIvPgogIDxnPgogICA8cGF0aCBkPSJNNTAuMSw0Ny45YzIuNS0wLjQsNS4xLTAuNiw3Lj'+
			'gtMC44bC0xLTQuOWMtMi4yLDAuMi00LjMsMC40LTYuNCwwLjZDNTAuMyw0NC40LDUwLjIsNDYuMSw1MC4xLDQ3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0xMDMuOCwyOC4xbC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41TDI2LjIsOTkuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuMywwLjMsMC44LDAuNSwxLjIsMC41czAuOS0wLjIsMS4yLTAuNWw3My4zLTczLjNDMTA0LjQsMjkuOCwxMDQuNCwyOC43LDEwMy44LDI4LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik02Ni43LDgxLjFjMSwwLDIs'+
			'MCwzLTAuMWwtMi4zLTExLjRsLTIuNiwyLjZMNjYuNyw4MS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNODUuNCw3OS4xYzAuNS0wLjEsMS0wLjIsMS42LTAuM2MwLTUuNS0wLjYtMTEuNS0xLjktMTcuN2MtMC41LTIuNS0xLjEtNS0xLjctNy4zbC00LjEsNC4xICAgIGMwLjMsMS40LDAuNywyLjgsMC45LDQuMmMxLjIsNi4xLDEuOCwxMS45LDEuOCwxNy4zYzAsMC4yLDAsMC4zLDAsMC41QzgzLjIsNzkuNSw4NC4zLDc5LjMsODUuNCw3OS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNDYuNiw3Ni4zbDQuMS00LjFjLTAuMy0xLjQtMC42LTIuOC0wLjktNC4ybDAsME'+
			'M0OC42LDYxLjksNDgsNTYuMSw0OCw1MC44YzAtNy4xLDEtMTMuMywyLjgtMTcuNyAgICBjMC45LTIuMiwxLjktMy45LDMtNWMwLjctMC43LDEuMy0xLjIsMi0xLjVsNi43LDMzLjhsMi42LTIuNkw1OC44LDI2YzAuNywwLjEsMS40LDAuMiwyLjIsMC41YzEuNiwwLjcsMy41LDIsNS40LDQgICAgYzIuNiwyLjgsNS4yLDYuOCw3LjUsMTEuN0M3MSw0Miw2OC4xLDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjYsMCw3LjEsMC4yLDEwLjUsMC41bDQuNS00LjVjLTAuMSwwLTAuMywwLTAuNC0wLjEgICAgYy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0zLjYtNC44LTYuNS03LjUt'+
			'OC42Yy0xLjMtMS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LTAuNi0zLTAuOS00LjUtMC45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAgICAgYy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjIgICAgQzQ1LjQsNzEuNSw0Niw3My45LDQ2LjYsNzYuM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTQyLjMsODAuNmMtMy45LTAuOS03LjQtMi0xMC41LTMuM2MtNC4yLTEuOC03LjQtMy45LTkuNi02Yy0xLjEtMS4xLTEuOC0yLjEtMi4zLTMuMmMtMC41LTEtMC43LT'+
			'ItMC43LTMuMWgwICAgIGMwLTEsMC4yLTIsMC43LTMuMWMwLjktMS44LDIuNi0zLjgsNS4yLTUuNmMzLjgtMi43LDkuMy01LDE1LjktNi43YzAtMS44LDAuMS0zLjUsMC4zLTUuMmMtNC4yLDEtOCwyLjItMTEuNSwzLjcgICAgYy00LjYsMi04LjQsNC4zLTExLjIsNy4xYy0xLjQsMS40LTIuNSwyLjktMy4zLDQuNWMtMC44LDEuNi0xLjIsMy40LTEuMiw1LjJjMCwxLjgsMC40LDMuNiwxLjIsNS4yYzEuNCwyLjksMy44LDUuMyw2LjgsNy41ICAgIGM0LjEsMi45LDkuNiw1LjMsMTYsN0w0Mi4zLDgwLjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0xMTQuNiw1OS44Yy0xLjQtMi45LTMu'+
			'OC01LjMtNi44LTcuNWMtNC4xLTIuOS05LjYtNS4zLTE2LTdsLTQuMSw0LjFjMy45LDAuOSw3LjQsMiwxMC41LDMuNCAgICBjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjFjMCwxLTAuMiwyLTAuNywzLjFjLTAuOSwxLjgtMi42LDMuOC01LjIsNS42ICAgIGMtMy45LDIuNy05LjYsNS4xLTE2LjQsNi44Yy02LjksMS43LTE0LjksMi43LTIzLjUsMi43Yy0zLjYsMC03LjItMC4yLTEwLjUtMC41TDUwLDg3LjFjMC4xLDAsMC4zLDAsMC40LDAuMSAgICBjMS41LDMuNywzLjMsNyw1LjEsOS45YzIuMywzLjYsNC44LDYuNSw3LjUsOC'+
			'42YzEuMywxLjEsMi43LDEuOSw0LjIsMi41YzEuNSwwLjYsMywwLjksNC41LDAuOWMwLjcsMCwxLjMtMC4xLDItMC4ybDAsMCAgICBjMi40LTAuNSw0LjQtMS43LDYuMS0zLjVjMi41LTIuNyw0LjItNi40LDUuNC0xMC44YzAuNS0yLDAuOS00LjIsMS4yLTYuNWMtMC42LDAuMS0xLjIsMC4zLTEuOCwwLjRjLTEuMSwwLjItMi4yLDAuNC0zLjMsMC41ICAgIGMtMC41LDMtMS4yLDUuNy0yLjEsOGMtMC45LDIuMi0xLjksMy45LTMsNWMtMC42LDAuNy0xLjMsMS4yLTIsMS41bC0yLjctMTMuNWMtMSwwLjEtMiwwLjEtMywwLjFsMi44LDE0ICAgIGMtMC43LTAuMS0xLjQtMC4yLTIuMi0wLjVjLTEuNy0w'+
			'LjctMy41LTItNS40LTRjLTIuNi0yLjgtNS4yLTYuOC03LjUtMTEuN0M1OSw4OCw2Miw4OC4xLDY1LDg4LjFjMTMuNiwwLDI2LTIuMywzNS4yLTYuMiAgICBjNC42LTIsOC40LTQuMywxMS4yLTcuMWMxLjQtMS40LDIuNS0yLjksMy4zLTQuNWMwLjgtMS42LDEuMi0zLjQsMS4yLTUuMkMxMTUuOCw2My4yLDExNS40LDYxLjQsMTE0LjYsNTkuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style.transition='opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_off.style.opacity == 0.0) { me._gyro_off.style.visibility="hidden"; } }, 505);
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.logicBlock_alpha();
		me._gyro_off.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_off.style.transition='none';
			} else {
				me._gyro_off.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_on.style.transition='none';
			} else {
				me._gyro_on.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggCurrentLogicStateAlpha = -1;
		me._gyro_off.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gyro_off']) {
				me._gyro_off__img.style.visibility='hidden';
				me._gyro_off__imgo.style.visibility='inherit';
				me.elementMouseOver['gyro_off']=true;
			}
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me._controller_slider.appendChild(me._gyro);
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._projection_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_projection') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_projection') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_projection') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_projection') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_projection') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_projection') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._projection_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._projection_buttons.style.transition='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStatePosition == 0) {
					me._projection_buttons.style.left='0px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 1) {
					me._projection_buttons.style.left='32px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 2) {
					me._projection_buttons.style.left='64px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 3) {
					me._projection_buttons.style.left='96px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 4) {
					me._projection_buttons.style.left='128px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 5) {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
				else {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
			}
		}
		me._projection_buttons.logicBlock_position();
		me._projection_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_projection') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projection_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projection_buttons.style.transition='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStateVisible == 0) {
					me._projection_buttons.style.visibility=(Number(me._projection_buttons.style.opacity)>0||!me._projection_buttons.style.opacity)?'inherit':'hidden';
					me._projection_buttons.ggVisible=true;
				}
				else {
					me._projection_buttons.style.visibility="hidden";
					me._projection_buttons.ggVisible=false;
				}
			}
		}
		me._projection_buttons.logicBlock_visible();
		me._projection_buttons.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() == 9))
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					((player.getProjection() == 12))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projection_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectilinear=document.createElement('div');
		els=me._rectilinear__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNOTguOCw0MC4xYy04LjcsNC4yLTIxLDYuNi0zMy44LDYuNnMtMjUuMi0yLjQtMzMuOC02LjZjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOSAgIHY0NS44YzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yYzguNy00LjIsMjEtNi42LDMzLjgtNi42YzEyLjgsMCwyNS4yLDIuNCwzMy44LDYuNiAgIGMwLjcsMC4zLDEuNSwwLjMsMi4yLTAuMWMwLjctMC40LDEuMS0xLjEsMS4xLTEuOVY0Mi4xYzAtMC44LTAuNC0xLjUtMS4xLTEuOUMxMD'+
			'AuMywzOS44LDk5LjUsMzkuOCw5OC44LDQwLjF6IE0zMi40LDgwLjlWNzQgICBjNy41LTAuOSwxNC45LTEuNSwyMi4yLTEuOGMtMC4xLDAuNC0wLjUsMC44LTEuNiwxLjNjLTEuNiwwLjctNC4zLDEuNi03LjMsMi42QzQxLjksNzcuNSwzNy4yLDc5LjEsMzIuNCw4MC45eiBNOTcuNiw4NC40ICAgQzg4LjYsODAuOSw3Nyw3OC44LDY1LDc4LjhjLTUuOSwwLTExLjgsMC41LTE3LjMsMS40YzMtMSw1LjQtMS44LDcuMS0yLjVjMy0xLjMsNC45LTMuNCw1LjEtNS43YzEuNiwwLDMsMCw0LjUtMC4xbDAsMWwyLjYsMGwwLTEgICBjMTAuMiwwLjEsMjAuNCwwLjcsMzAuNSwyVjg0LjR6IE05Ny42LDY5LjVj'+
			'LTEuMS0wLjEtMi4yLTAuMy0zLjMtMC40Yy0wLjEtNC4yLDAuMS03LDAtMTEuOGMtMy40LTIuNy01LjEtMy45LTguNy02ICAgYy0zLjQsMy40LTUsNC42LTguNCw3LjNjMCwwLjYsMCw4LjUsMCw5LjJjLTMuMy0wLjEtNi43LTAuMy0xMC4xLTAuM2wwLTIuOWMzLjQtMC40LDUuOS0yLjQsNS44LTQuOEM3Mi44LDU3LDY5LjUsNTUsNjUuNiw1NSAgIGMtNCwwLTcuMiwyLTcuMiw0LjhjMCwyLjQsMi42LDQuNCw2LjEsNC44bDAsM2MtMTAuNSwwLTIxLjEsMC43LTMyLDJWNDUuNmM4LjksMy42LDIwLjYsNS42LDMyLjYsNS42YzEyLDAsMjMuNi0yLDMyLjYtNS42VjY5LjV6IiBmaWxsPSIjRkZGRkZGIi'+
			'8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xUzEyMS4xLDk2LDEyMS4xLDY1QzEyMS4xLDM0LDk2LDguOSw2NSw4Ljl6IE0xMDIuMSw4Ny45ICAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgICBjLTAuNCwwLTAuOC0wLjEtMS4yLTAuM2MtMC43LTAuNC0xLjEtMS4xLTEuMS0xLjlWNDIuMWMwLTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUt'+
			'MC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjYgICAgYzEyLjgsMCwyNS4yLTIuNCwzMy44LTYuNmMwLjctMC4zLDEuNS0wLjMsMi4yLDAuMWMwLjcsMC40LDEuMSwxLjEsMS4xLDEuOUMxMDIuMSw0Mi4xLDEwMi4xLDg3LjksMTAyLjEsODcuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTU0LjcsNzIuM0M0Ny40LDcyLjUsNDAsNzMuMSwzMi40LDc0djYuOWM0LjctMS44LDkuNC0zLjQsMTMuMy00LjdjMy4xLTEsNS43LTEuOSw3LjMtMi42QzU0LjIsNzMuMSw1NC42LDcyLjYsNTQuNyw3Mi4zICAgIHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTMyLjQsND'+
			'UuNnYyMy45YzEwLjktMS4zLDIxLjUtMS45LDMyLTJsMC0zYy0zLjQtMC40LTYtMi40LTYuMS00LjhjMC0yLjcsMy4yLTQuNyw3LjItNC44YzQsMCw3LjMsMiw3LjQsNC43ICAgIGMwLjEsMi40LTIuNCw0LjQtNS44LDQuOGwwLDIuOWMzLjMsMCw2LjgsMC4xLDEwLjEsMC4zYzAtMC44LDAtOC42LDAtOS4yYzMuNC0yLjcsNS0zLjksOC40LTcuM2MzLjYsMi4xLDUuMywzLjIsOC43LDYgICAgYzAuMSw0LjgtMC4xLDcuNiwwLDExLjhjMS4xLDAuMSwyLjIsMC4zLDMuMywwLjRWNDUuNkM4OC42LDQ5LjEsNzcsNTEuMiw2NSw1MS4yQzUzLDUxLjIsNDEuNCw0OS4xLDMyLjQsNDUuNnoiIGZpbGw9IiMw'+
			'MDAwMDAiLz4KICAgPHBhdGggZD0iTTY3LjEsNzNsLTIuNiwwbDAtMWMtMS41LDAtMywwLTQuNSwwLjFjLTAuMiwyLjMtMi4xLDQuNC01LjEsNS43Yy0xLjcsMC43LTQuMSwxLjUtNy4xLDIuNWM1LjUtMC45LDExLjMtMS40LDE3LjMtMS40ICAgIGMxMiwwLDIzLjYsMiwzMi42LDUuNlY3NGMtMTAtMS4zLTIwLjMtMS45LTMwLjUtMkw2Ny4xLDczeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._rectilinear__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._rectilinear__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNMTAyLjYwMiwzNy4zMTVjLTkuNjIsNC42NDUtMjMuMzI1LDcuMzA5LTM3LjYwMyw3LjMwOWMtMTQuMjc4LDAtMjcuOTgyLTIuNjY0LTM3LjYwMS03LjMwOSAgIGMtMC43NzUtMC4zNzUtMS42ODctMC4zMjQtMi40MTYsMC4xMzVjLTAuNzI5LDAuNDU3LTEuMTcxLDEuMjU2LTEuMTcxLDIuMTE3djUwLjg2NWMwLDAuODU5LDAuNDQyLDEuNjYsMS4xNzEsMi4xMTcgICBjMC40MDQsMC4yNTQsMC44NjYsMC4zODMsMS4zMjksMC4zODNjMC4zNzEsMCwwLjc0Mi0wLjA4MiwxLjA4Ny0wLjI1YzkuNjE5LTQuNjQzLDIzLjMyNC03LjMwNSwzNy42MDEtNy'+
			'4zMDUgICBjMTQuMjc1LDAsMjcuOTgxLDIuNjYyLDM3LjYwMyw3LjMwN2MwLjc3NCwwLjM3MywxLjY4OCwwLjMyMiwyLjQxNi0wLjEzNXMxLjE3MS0xLjI1OCwxLjE3MS0yLjExN1YzOS41NjcgICBjMC0wLjg2MS0wLjQ0Mi0xLjY2LTEuMTcxLTIuMTE3QzEwNC4yODksMzYuOTkxLDEwMy4zNzYsMzYuOTQsMTAyLjYwMiwzNy4zMTV6IE0yOC44MTIsODIuNjcxVjc1LjA0ICAgYzguMzY4LTAuOTg4LDE2LjU5NS0xLjY0OCwyNC43MTktMS45NzVjLTAuMTA0LDAuNDE4LTAuNTE3LDAuOTI4LTEuNzc3LDEuNDk2Yy0xLjc1OSwwLjc5My00LjczMSwxLjczLTguMTQ3LDIuODczICAgQzM5LjI3MSw3OC44'+
			'ODIsMzQuMDQ3LDgwLjYzMiwyOC44MTIsODIuNjcxeiBNMTAxLjE4OCw4Ni42MDNjLTkuOTI2LTMuOTgtMjIuODU4LTYuMjI1LTM2LjE4OS02LjIyNSAgIGMtNi42MDIsMC0xMy4xMDQsMC41NTMtMTkuMTkzLDEuNTkyYzMuMzYtMS4xMjMsNi4wMzgtMi4wMjUsNy44NzUtMi43OTVjMy4zODgtMS40MTYsNS40ODktMy43NTYsNS42OTUtNi4yOTEgICBjMS43MjctMC4wMzcsMy4yOTItMC4wNTUsNS4wMTEtMC4wNjFsMC4wMTYsMS4wNzhsMi45NDUtMC4wMTJsLTAuMDE0LTEuMDY2YzExLjMxMiwwLjA4LDIyLjY5NywwLjgxNiwzMy44NTQsMi4yMTFWODYuNjAzeiAgICBNMTAxLjE4OCw3MC4wMDljLT'+
			'EuMjI1LTAuMTQ4LTIuNDQ4LTAuMzA3LTMuNjczLTAuNDQxYy0wLjA4OC00LjcyMSwwLjEtNy43NzUsMC0xMy4xNjZjLTMuNzQyLTMuMDM1LTUuNzA3LTQuMjg1LTkuNjU3LTYuNjMzICAgYy0zLjczNywzLjc3LTUuNTA5LDUuMTM1LTkuMzQsOC4xYzAuMDI2LDAuNjg5LDAuMDI2LDkuMzk4LDAuMDI2LDEwLjIzNGMtMy42OTEtMC4xNjItNy40ODYtMC4yODMtMTEuMjAzLTAuMzA3bDAuMDE5LTMuMjYgICBjMy43NjktMC40NzcsNi41MzItMi43MDMsNi40NDEtNS4zODdjLTAuMTAzLTMuMDI3LTMuNzUtNS4yNTQtOC4xODEtNS4yMjdjLTQuNDMyLDAuMDI3LTguMDE1LDIuMjc1LTcuOTg5LDUuMjgx'+
			'ICAgYzAuMDIyLDIuNjY2LDIuOTI3LDQuODY5LDYuNzI4LDUuMzM2bDAuMDI5LDMuMjg3Yy0xMS42NywwLjA0My0yMy40NTYsMC43NjItMzUuNTc3LDIuMTc2VjQzLjM5NyAgIGM5LjkyMywzLjk4LDIyLjg1NCw2LjIyNywzNi4xODgsNi4yMjdjMTMuMzMyLDAsMjYuMjY1LTIuMjQ2LDM2LjE4OS02LjIyN1Y3MC4wMDl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik02NC45OTksMi42MzhjLTM0LjQ0MSwwLTYyLjM2MSwyNy45Mi02Mi4zNjEsNjIuMzYzYzAsMzQuNDQxLDI3LjkyLDYyLjM2MSw2Mi4zNjEsNjIuMzYxczYyLjM2My0yNy45Miw2Mi4zNjMtNjIuMzYxICAgIEMxMj'+
			'cuMzYyLDMwLjU1OCw5OS40NCwyLjYzOCw2NC45OTksMi42Mzh6IE0xMDYuMTg4LDkwLjQzM2MwLDAuODU5LTAuNDQyLDEuNjYtMS4xNzEsMi4xMTdzLTEuNjQyLDAuNTA4LTIuNDE2LDAuMTM1ICAgIGMtOS42MjEtNC42NDUtMjMuMzI3LTcuMzA3LTM3LjYwMy03LjMwN2MtMTQuMjc2LDAtMjcuOTgxLDIuNjYyLTM3LjYwMSw3LjMwNWMtMC4zNDUsMC4xNjgtMC43MTYsMC4yNS0xLjA4NywwLjI1ICAgIGMtMC40NjMsMC0wLjkyNS0wLjEyOS0xLjMyOS0wLjM4M2MtMC43MjktMC40NTctMS4xNzEtMS4yNTgtMS4xNzEtMi4xMTdWMzkuNTY3YzAtMC44NjEsMC40NDItMS42NiwxLjE3MS0yLjExNyAg'+
			'ICBjMC43MjktMC40NTksMS42NDEtMC41MSwyLjQxNi0wLjEzNWM5LjYxOCw0LjY0NSwyMy4zMjIsNy4zMDksMzcuNjAxLDcuMzA5YzE0LjI3NywwLDI3Ljk4Mi0yLjY2NCwzNy42MDMtNy4zMDkgICAgYzAuNzc0LTAuMzc1LDEuNjg4LTAuMzI0LDIuNDE2LDAuMTM1YzAuNzI5LDAuNDU3LDEuMTcxLDEuMjU2LDEuMTcxLDIuMTE3VjkwLjQzM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTUzLjUzLDczLjA2NWMtOC4xMjQsMC4zMjYtMTYuMzUxLDAuOTg2LTI0LjcxOSwxLjk3NXY3LjYzMWM1LjIzNS0yLjAzOSwxMC40NTktMy43ODksMTQuNzk0LTUuMjM2ICAgIGMzLjQxNi0xLjE0My'+
			'w2LjM4OS0yLjA4LDguMTQ3LTIuODczQzUzLjAxNCw3My45OTMsNTMuNDI2LDczLjQ4Myw1My41Myw3My4wNjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0yOC44MTIsNDMuMzk3djI2LjYwNWMxMi4xMjEtMS40MTQsMjMuOTA3LTIuMTMzLDM1LjU3Ny0yLjE3NmwtMC4wMjktMy4yODdjLTMuODAxLTAuNDY3LTYuNzA1LTIuNjctNi43MjgtNS4zMzYgICAgYy0wLjAyNS0zLjAwNiwzLjU1OC01LjI1NCw3Ljk4OS01LjI4MWM0LjQzMS0wLjAyNyw4LjA3OCwyLjE5OSw4LjE4MSw1LjIyN2MwLjA5MSwyLjY4NC0yLjY3Myw0LjkxLTYuNDQxLDUuMzg3bC0wLjAxOSwzLjI2ICAgIGMzLjcx'+
			'NywwLjAyMyw3LjUxMiwwLjE0NSwxMS4yMDMsMC4zMDdjMC0wLjgzNiwwLTkuNTQ1LTAuMDI2LTEwLjIzNGMzLjgzMS0yLjk2NSw1LjYwMy00LjMzLDkuMzQtOC4xICAgIGMzLjk1LDIuMzQ4LDUuOTE1LDMuNTk4LDkuNjU3LDYuNjMzYzAuMSw1LjM5MS0wLjA4OCw4LjQ0NSwwLDEzLjE2NmMxLjIyNSwwLjEzNSwyLjQ0OCwwLjI5MywzLjY3MywwLjQ0MVY0My4zOTcgICAgYy05LjkyNSwzLjk4LTIyLjg1Nyw2LjIyNy0zNi4xODksNi4yMjdDNTEuNjY2LDQ5LjYyNCwzOC43MzQsNDcuMzc4LDI4LjgxMiw0My4zOTd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik02Ny4zNDgsNzMuODlsLT'+
			'IuOTQ1LDAuMDEybC0wLjAxNi0xLjA3OGMtMS43MTksMC4wMDYtMy4yODQsMC4wMjMtNS4wMTEsMC4wNjFjLTAuMjA2LDIuNTM1LTIuMzA4LDQuODc1LTUuNjk1LDYuMjkxICAgIGMtMS44MzcsMC43Ny00LjUxNSwxLjY3Mi03Ljg3NSwyLjc5NWM2LjA4OS0xLjAzOSwxMi41OTItMS41OTIsMTkuMTkzLTEuNTkyYzEzLjMzMSwwLDI2LjI2NCwyLjI0NCwzNi4xODksNi4yMjVWNzUuMDM0ICAgIGMtMTEuMTU3LTEuMzk1LTIyLjU0Mi0yLjEzMS0zMy44NTQtMi4yMTFMNjcuMzQ4LDczLjg5eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._rectilinear__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="rectilinear";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectilinear.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectilinear.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjection() == 12))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectilinear.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectilinear.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectilinear.style.transition='opacity 500ms ease 0ms';
				if (me._rectilinear.ggCurrentLogicStateAlpha == 0) {
					me._rectilinear.style.visibility=me._rectilinear.ggVisible?'inherit':'hidden';
					me._rectilinear.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectilinear.style.opacity == 0.0) { me._rectilinear.style.visibility="hidden"; } }, 505);
					me._rectilinear.style.opacity=0;
				}
			}
		}
		me._rectilinear.logicBlock_alpha();
		me._rectilinear.onmouseover=function (e) {
			me._rectilinear__img.style.visibility='hidden';
			me._rectilinear__imgo.style.visibility='inherit';
			me.elementMouseOver['rectilinear']=true;
		}
		me._rectilinear.onmouseout=function (e) {
			me._rectilinear__img.style.visibility='inherit';
			me._rectilinear__imgo.style.visibility='hidden';
			me.elementMouseOver['rectilinear']=false;
		}
		me._rectilinear.ggCurrentLogicStateAlpha = -1;
		me._rectilinear.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['rectilinear']) {
				me._rectilinear__img.style.visibility='hidden';
				me._rectilinear__imgo.style.visibility='inherit';
				me.elementMouseOver['rectilinear']=true;
			}
		}
		me._rectilinear.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._rectilinear);
		el=me._fisheye=document.createElement('div');
		els=me._fisheye__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTTY1LDIzLjNDNDIsMjMuMywyMy4zLDQyLDIzLjMsNjVTNDIsMTA2LjcsNjUsMTA2LjdjMjMsMCw0MS43LTE4LjcsNDEuNy00MS43Uzg4LDIzLjMsNjUsMjMuM3ogTTM2LjQsODYuMSAgICBjLTAuMiwwLjItMS4xLDAuNC0yLjEtMC4xYy0yLjEtMy4xLTMuOC02LjUtNC45LTEwLjJjMS40LDAuOSwzLDEuNyw0LjcsMi40YzAuNywwLjgsMS4zLDEuOCwxLjcsMi44YzAuNiwxLjMsMC45LDIuNywwLjksMy43ICAgIEMzNi44LDg1LjMsMzYuNiw4NS44LDM2LjQsODYuMXogTTY1LDEwMi4yYy0xMC43LDAtMjAuNC00LjYtMjcuMi0xMS45Yz'+
			'AuNS0wLjIsMS4xLTAuNSwxLjUtMC44YzAuOC0wLjYsMS4zLTEuNCwxLjYtMi4zICAgIGMwLjMtMC44LDAuNC0xLjcsMC40LTIuNmMwLTEuNS0wLjMtMy0wLjktNC41YzIuMiwwLjUsNC42LDEsNywxLjNjMS4yLDAuMiwyLjUsMC4zLDMuOCwwLjRjMCwxLjUsMC4xLDMuMSwwLjEsNC42bDIuNy0wLjEgICAgYy0wLjEtMS40LTAuMS0yLjgtMC4xLTQuM2MzLDAuMiw2LjEsMC4zLDkuMiwwLjNjNy40LDAsMTQuOS0wLjYsMjEuNS0xLjdjMy4zLTAuNiw2LjQtMS4yLDkuMS0yYzIuMy0wLjcsNS4yLTEuOCw3LTIuOSAgICBDOTUuOSw5MS4xLDgxLjgsMTAyLjIsNjUsMTAyLjJ6IE0xMDIsNjkuNGMtMC41'+
			'LDAuNi0xLjEsMS4zLTIsMS44Yy0wLjcsMC40LTEuNSwwLjgtMi4zLDEuMmMwLjMtNy41LDAuMS0xMi43LTEuOC0xOS42ICAgIGMtMy4zLTUuOC02LjEtOC43LTExLjYtMTNjLTEuOSwyLjQtMy43LDMuNy05LjUsOC41YzIsOS43LDIuMSwxOSwxLjgsMjguOWMtNC40LDAuNS05LjEsMC43LTEzLjcsMC43Yy0zLjEsMC02LjItMC4xLTkuMy0wLjMgICAgYy0wLjEtNC4yLTAuMS04LjMtMC4xLTEyLjVjMC0wLjYsMC0xLjIsMC0xLjdjNy44LTAuOCwxNC4xLTcuNywxMy42LTEzLjRjLTAuNi02LTYuNy05LjItMTMuNS04LjljLTYuOCwwLjMtMTIuMSw0LjQtMTMuMSwxMC4zICAgIGMtMC45LDUuNiwyLj'+
			'csMTEuNSwxMC4zLDEyYzAsMC42LDAsMS4xLDAsMS43YzAsNC4xLDAsOC4yLDAuMSwxMi4zYy0yLjctMC4zLTUuMi0wLjYtNy42LTEuMWMtMi45LTAuNi01LjUtMS4zLTcuNy0yLjIgICAgYy0yLjItMC45LTQuMS0xLjgtNS44LTMuMWMtMC43LTAuNi0xLjQtMS4zLTItMS45Yy0wLjEtMS4zLTAuMi0yLjYtMC4yLTRjMC0yMC41LDE2LjctMzcuMiwzNy4yLTM3LjJjMjAuNSwwLDM3LjIsMTYuNywzNy4yLDM3LjIgICAgQzEwMi4yLDY2LjUsMTAyLjEsNjgsMTAyLDY5LjR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTY1LDI3LjhjLTIwLjUsMC0zNy4yLDE2LjctMzcuMiwz'+
			'Ny4yYzAsMS40LDAuMSwyLjcsMC4yLDRjMC42LDAuNiwxLjMsMS40LDIsMS45YzEuNywxLjMsMy42LDIuMiw1LjgsMy4xICAgICBjMi4yLDAuOSw0LjgsMS42LDcuNywyLjJjMi40LDAuNSw0LjksMC44LDcuNiwxLjFjLTAuMS00LjEtMC4xLTguMi0wLjEtMTIuM2MwLTAuNiwwLTEuMSwwLTEuN2MtNy41LTAuNS0xMS4yLTYuNC0xMC4zLTEyICAgICBjMS01LjksNi4zLTEwLjEsMTMuMS0xMC4zYzYuOC0wLjMsMTIuOSwyLjksMTMuNSw4LjljMC41LDUuNy01LjgsMTIuNi0xMy42LDEzLjRjMCwwLjYsMCwxLjIsMCwxLjdjMCw0LjIsMCw4LjQsMC4xLDEyLjUgICAgIGMzLDAuMiw2LjEsMC4zLDkuMy'+
			'wwLjNjNC42LDAsOS4zLTAuMywxMy43LTAuN2MwLjMtOS45LDAuMi0xOS4yLTEuOC0yOC45YzUuOC00LjgsNy41LTYuMSw5LjUtOC41YzUuNSw0LjMsOC4zLDcuMiwxMS42LDEzICAgICBjMS45LDYuOSwyLjIsMTIuMSwxLjgsMTkuNmMwLjgtMC40LDEuNi0wLjgsMi4zLTEuMmMwLjgtMC41LDEuNS0xLjIsMi0xLjhjMC4yLTEuNSwwLjMtMi45LDAuMy00LjQgICAgIEMxMDIuMiw0NC41LDg1LjUsMjcuOCw2NSwyNy44eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTM0LjEsNzguMmMtMS43LTAuNy0zLjMtMS41LTQuNy0yLjRjMS4xLDMuNywyLjgsNy4xLDQuOSwxMC4yYzEuMSwwLjUs'+
			'MiwwLjMsMi4xLDAuMWMwLjItMC4zLDAuMy0wLjgsMC4zLTEuNCAgICAgYzAtMS0wLjMtMi40LTAuOS0zLjdDMzUuNCw4MCwzNC44LDc5LDM0LjEsNzguMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDxwYXRoIGQ9Ik04NC41LDgwLjdjLTYuNiwxLjEtMTQuMSwxLjctMjEuNSwxLjdjLTMuMSwwLTYuMi0wLjEtOS4yLTAuM2MwLDEuNCwwLjEsMi44LDAuMSw0LjNsLTIuNywwLjFjLTAuMS0xLjUtMC4xLTMuMS0wLjEtNC42ICAgICBjLTEuMy0wLjEtMi41LTAuMy0zLjgtMC40Yy0yLjUtMC4zLTQuOC0wLjgtNy0xLjNjMC42LDEuNSwwLjksMywwLjksNC41YzAsMC45LTAuMSwxLjctMC40LDIuNmMtMC'+
			'4zLDAuOC0wLjgsMS42LTEuNiwyLjMgICAgIGMtMC40LDAuNC0xLDAuNi0xLjUsMC44YzYuOCw3LjMsMTYuNSwxMS45LDI3LjIsMTEuOWMxNi44LDAsMzAuOS0xMS4xLDM1LjYtMjYuNGMtMS44LDEtNC44LDIuMi03LDIuOSAgICAgQzkwLjgsNzkuNSw4Ny44LDgwLjIsODQuNSw4MC43eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFTMTIxLjEsOTYsMTIxLjEsNjVDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTY1LDEwNi43ICAgICBDNDIsMTA2LjcsMjMuMyw4OCwyMy4zLDY1UzQyLDIzLjMs'+
			'NjUsMjMuM2MyMywwLDQxLjcsMTguNyw0MS43LDQxLjdTODgsMTA2LjcsNjUsMTA2Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fisheye__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fisheye__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTTY0Ljk5OSwxOC42MjJjLTI1LjU3MywwLTQ2LjM3OCwyMC44MDUtNDYuMzc4LDQ2LjM3OXMyMC44MDUsNDYuMzc5LDQ2LjM3OCw0Ni4zNzkgICAgYzI1LjU3NCwwLDQ2LjM4LTIwLjgwNSw0Ni4zOC00Ni4zNzlTOTAuNTczLDE4LjYyMiw2NC45OTksMTguNjIyeiBNMzMuMjI1LDg4LjQwOWMtMC4yMDgsMC4yNTgtMS4xNzQsMC40NTMtMi4zODMtMC4wODYgICAgYy0yLjM1Ni0zLjQ0MS00LjIwNi03LjI1NC01LjQ0Mi0xMS4zMzJjMS41NjEsMS4wMjUsMy4zMTIsMS45MTQsNS4yNDQsMi42ODZjMC43NjgsMC45MDQsMS40NDEsMS45OD'+
			'QsMS45MzksMy4wOTQgICAgYzAuNjc2LDEuNDgyLDEuMDIzLDMuMDIxLDEuMDE2LDQuMTExQzMzLjYwNCw4Ny41NzMsMzMuNDYsODguMTE2LDMzLjIyNSw4OC40MDl6IE02NC45OTksMTA2LjM3OSAgICBjLTExLjkzOCwwLTIyLjcwNS01LjA4OC0zMC4yNjUtMTMuMjAzYzAuNjExLTAuMjExLDEuMTkyLTAuNTEyLDEuNjc5LTAuOTE2YzAuODQyLTAuNjk1LDEuNDAyLTEuNjA1LDEuNzMtMi41MjkgICAgYzAuMzMtMC45MywwLjQ1NC0xLjg4NywwLjQ1Ni0yLjg1Yy0wLjAwNy0xLjY2LTAuMzg0LTMuMzY5LTEuMDEzLTUuMDQ5YzIuNDY1LDAuNTkyLDUuMDg0LDEuMDcsNy44MTYsMS40NDkgICAgYzEu'+
			'MzcxLDAuMTg5LDIuNzcsMC4zNTQsNC4xOSwwLjQ5NGMwLjA0OCwxLjY5NywwLjA5OSwzLjM5NSwwLjE2Miw1LjA5MmwyLjk5OC0wLjExMWMtMC4wNi0xLjU3OC0wLjEwNi0zLjE2LTAuMTUxLTQuNzQgICAgYzMuMzMsMC4yNDQsNi43MzgsMC4zNzUsMTAuMTcyLDAuMzc1YzguMjUsMCwxNi41NzQtMC42NywyMy44OTItMS44OThjMy42NTktMC42MTMsNy4wNjctMS4zNjcsMTAuMTAxLTIuMjU2ICAgIGMyLjUzMS0wLjc0NCw1Ljc4My0yLjAzNyw3LjgxMy0zLjE3MkM5OS40MDMsOTQuMDE0LDgzLjYyLDEwNi4zNzksNjQuOTk5LDEwNi4zNzl6IE0xMDYuMDc3LDY5LjkxNSAgICBjLTAuNTQsMC42OT'+
			'MtMS4yNTgsMS40MjQtMi4xODEsMS45OTZjLTAuNzYsMC40NzEtMS42MTQsMC45MS0yLjUwOSwxLjMyYzAuMzc5LTguMzA3LDAuMTQtMTQuMDkyLTIuMDIxLTIxLjc0OCAgICBjLTMuNzAxLTYuNDQ3LTYuNzM5LTkuNjg4LTEyLjg4NC0xNC40NjFjLTIuMTU3LDIuNjY4LTQuMDg2LDQuMTM5LTEwLjUxNCw5LjQ0M2MyLjI3OCwxMC44MTgsMi4zNDEsMjEuMTY2LDIuMDIxLDMyLjEzMyAgICBjLTQuOTEsMC41MDgtMTAuMDc3LDAuNzkzLTE1LjIxNiwwLjc5M2MtMy40ODUsMC02Ljk0NS0wLjEzMS0xMC4yOTEtMC4zODljLTAuMDk0LTQuNjM5LTAuMTQtOS4yNzktMC4xNC0xMy45MjIgICAgYzAtMC42'+
			'NDgsMC4wMDctMS4yOTcsMC4wMDgtMS45NDVjOC42OTEtMC45LDE1LjctOC41NDMsMTUuMDkzLTE0Ljg3M2MtMC42NDMtNi42ODktNy40NTUtMTAuMjI3LTE0Ljk4LTkuOTQ1ICAgIGMtNy41MjcsMC4yODEtMTMuNDE0LDQuODk1LTE0LjUxNywxMS41MDJjLTEuMDQyLDYuMjQ2LDMuMDUsMTIuNzU0LDExLjQwNCwxMy4zNjFjLTAuMDAxLDAuNjMzLTAuMDA4LDEuMjY4LTAuMDA4LDEuOSAgICBjMC4wMDEsNC41NDksMC4wNDQsOS4xLDAuMTMzLDEzLjY1Yy0yLjk0Ny0wLjMwNy01Ljc3Ni0wLjcxNy04LjQwMS0xLjI0OGMtMy4yMDMtMC42NDgtNi4xMDktMS40NjktOC41NjUtMi40NDUgICAgYy0yLj'+
			'Q1OC0wLjk3NS00LjU3Ny0xLjk3NS02LjQ1MS0zLjQ3M2MtMC43NjYtMC42MTMtMS41NDItMS40LTIuMTk1LTIuMTE3Yy0wLjE1Ny0xLjQ2My0wLjI0Mi0yLjk0NS0wLjI0Mi00LjQ0NyAgICBjMC0yMi44MTYsMTguNTYyLTQxLjM3OSw0MS4zNzgtNDEuMzc5YzIyLjgxNywwLDQxLjM4LDE4LjU2Miw0MS4zOCw0MS4zNzlDMTA2LjM3OSw2Ni42NjUsMTA2LjI2OSw2OC4zMDEsMTA2LjA3Nyw2OS45MTV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTY0Ljk5OSwyMy42MjJjLTIyLjgxNSwwLTQxLjM3OCwxOC41NjItNDEuMzc4LDQxLjM3OWMwLDEuNTAyLDAuMDg1LDIuOTg0'+
			'LDAuMjQyLDQuNDQ3ICAgICBjMC42NTMsMC43MTcsMS40MywxLjUwNCwyLjE5NSwyLjExN2MxLjg3NCwxLjQ5OCwzLjk5MywyLjQ5OCw2LjQ1MSwzLjQ3M2MyLjQ1NiwwLjk3Nyw1LjM2MiwxLjc5Nyw4LjU2NSwyLjQ0NSAgICAgYzIuNjI1LDAuNTMxLDUuNDU0LDAuOTQxLDguNDAxLDEuMjQ4Yy0wLjA4OS00LjU1MS0wLjEzMi05LjEwMi0wLjEzMy0xMy42NWMwLTAuNjMzLDAuMDA3LTEuMjY4LDAuMDA4LTEuOSAgICAgYy04LjM1NC0wLjYwNy0xMi40NDYtNy4xMTUtMTEuNDA0LTEzLjM2MWMxLjEwMy02LjYwNyw2Ljk4OS0xMS4yMjEsMTQuNTE3LTExLjUwMmM3LjUyNS0wLjI4MSwxNC4zMzgsMy'+
			'4yNTYsMTQuOTgsOS45NDUgICAgIGMwLjYwNyw2LjMzLTYuNDAxLDEzLjk3My0xNS4wOTMsMTQuODczYy0wLjAwMSwwLjY0OC0wLjAwOCwxLjI5Ny0wLjAwOCwxLjk0NWMwLDQuNjQzLDAuMDQ2LDkuMjgzLDAuMTQsMTMuOTIyICAgICBjMy4zNDYsMC4yNTgsNi44MDYsMC4zODksMTAuMjkxLDAuMzg5YzUuMTM5LDAsMTAuMzA2LTAuMjg1LDE1LjIxNi0wLjc5M2MwLjMyLTEwLjk2NywwLjI1OC0yMS4zMTQtMi4wMjEtMzIuMTMzICAgICBjNi40MjgtNS4zMDUsOC4zNTYtNi43NzUsMTAuNTE0LTkuNDQzYzYuMTQ1LDQuNzczLDkuMTgzLDguMDE0LDEyLjg4NCwxNC40NjFjMi4xNiw3LjY1NiwyLjM5'+
			'OSwxMy40NDEsMi4wMjEsMjEuNzQ4ICAgICBjMC44OTUtMC40MSwxLjc0OS0wLjg1LDIuNTA5LTEuMzJjMC45MjMtMC41NzIsMS42NDEtMS4zMDMsMi4xODEtMS45OTZjMC4xOTEtMS42MTMsMC4zMDItMy4yNSwwLjMwMi00LjkxNCAgICAgQzEwNi4zNzksNDIuMTg0LDg3LjgxNiwyMy42MjIsNjQuOTk5LDIzLjYyMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDxwYXRoIGQ9Ik0zMC42NDQsNzkuNjc2Yy0xLjkzMi0wLjc3MS0zLjY4NC0xLjY2LTUuMjQ0LTIuNjg2YzEuMjM2LDQuMDc4LDMuMDg2LDcuODkxLDUuNDQyLDExLjMzMiAgICAgYzEuMjA5LDAuNTM5LDIuMTc1LDAuMzQ0LDIuMzgzLDAuMD'+
			'g2YzAuMjM1LTAuMjkzLDAuMzc5LTAuODM2LDAuMzc0LTEuNTI3YzAuMDA4LTEuMDktMC4zNC0yLjYyOS0xLjAxNi00LjExMSAgICAgQzMyLjA4NSw4MS42NjEsMzEuNDExLDgwLjU4MSwzMC42NDQsNzkuNjc2eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTg2LjY2Niw4Mi40OTNjLTcuMzE3LDEuMjI5LTE1LjY0MiwxLjg5OC0yMy44OTIsMS44OThjLTMuNDM0LDAtNi44NDItMC4xMzEtMTAuMTcyLTAuMzc1ICAgICBjMC4wNDUsMS41OCwwLjA5MiwzLjE2MiwwLjE1MSw0Ljc0bC0yLjk5OCwwLjExMWMtMC4wNjMtMS42OTctMC4xMTQtMy4zOTUtMC4xNjItNS4wOTJjLTEuNDIxLTAu'+
			'MTQxLTIuODE5LTAuMzA1LTQuMTktMC40OTQgICAgIGMtMi43MzItMC4zNzktNS4zNTItMC44NTctNy44MTYtMS40NDljMC42MjksMS42OCwxLjAwNiwzLjM4OSwxLjAxMyw1LjA0OWMtMC4wMDIsMC45NjMtMC4xMjYsMS45Mi0wLjQ1NiwyLjg1ICAgICBjLTAuMzI4LDAuOTI0LTAuODg5LDEuODM0LTEuNzMsMi41MjljLTAuNDg2LDAuNDA0LTEuMDY3LDAuNzA1LTEuNjc5LDAuOTE2YzcuNTYsOC4xMTUsMTguMzI3LDEzLjIwMywzMC4yNjUsMTMuMjAzICAgICBjMTguNjIxLDAsMzQuNDA0LTEyLjM2NSwzOS41ODEtMjkuMzE0Yy0yLjAzLDEuMTM1LTUuMjgyLDIuNDI4LTcuODEzLDMuMTcyQzkzLj'+
			'czMyw4MS4xMjUsOTAuMzI1LDgxLjg3OSw4Ni42NjYsODIuNDkzeiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTY0Ljk5OSwyLjYzN0MzMC41NTgsMi42MzcsMi42MzgsMzAuNTU3LDIuNjM4LDY1YzAsMzQuNDQxLDI3LjkyLDYyLjM2MSw2Mi4zNjEsNjIuMzYxUzEyNy4zNjIsOTkuNDQyLDEyNy4zNjIsNjUgICAgIEMxMjcuMzYyLDMwLjU1Nyw5OS40NCwyLjYzNyw2NC45OTksMi42Mzd6IE02NC45OTksMTExLjM3OWMtMjUuNTczLDAtNDYuMzc4LTIwLjgwNS00Ni4zNzgtNDYuMzc5czIwLjgwNS00Ni4zNzksNDYuMzc4LTQ2LjM3OSAgICAgYzI1LjU3NCwwLDQ2LjM4LDIwLjgwNSw0'+
			'Ni4zOCw0Ni4zNzlTOTAuNTczLDExMS4zNzksNjQuOTk5LDExMS4zNzl6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fisheye__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fisheye";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fisheye.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fisheye.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjection() == 9))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fisheye.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fisheye.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fisheye.style.transition='opacity 500ms ease 0ms';
				if (me._fisheye.ggCurrentLogicStateAlpha == 0) {
					me._fisheye.style.visibility=me._fisheye.ggVisible?'inherit':'hidden';
					me._fisheye.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fisheye.style.opacity == 0.0) { me._fisheye.style.visibility="hidden"; } }, 505);
					me._fisheye.style.opacity=0;
				}
			}
		}
		me._fisheye.logicBlock_alpha();
		me._fisheye.onmouseover=function (e) {
			me._fisheye__img.style.visibility='hidden';
			me._fisheye__imgo.style.visibility='inherit';
			me.elementMouseOver['fisheye']=true;
		}
		me._fisheye.onmouseout=function (e) {
			me._fisheye__img.style.visibility='inherit';
			me._fisheye__imgo.style.visibility='hidden';
			me.elementMouseOver['fisheye']=false;
		}
		me._fisheye.ggCurrentLogicStateAlpha = -1;
		me._fisheye.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['fisheye']) {
				me._fisheye__img.style.visibility='hidden';
				me._fisheye__imgo.style.visibility='inherit';
				me.elementMouseOver['fisheye']=true;
			}
		}
		me._fisheye.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._fisheye);
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTTkxLjEsNjVjMC0xMS44LTcuOC0yMS43LTE4LjUtMjVjMi40LTUuOCw2LjItMTEuNSw2LjItMTEuNXMtMi4yLTQuOC02LjgtOS4yYy00LjMtNC4xLTcuMi01LjMtNy42LTUuNWwwLDAgICAgYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwbDAsMGMtMC40LDAuMi0zLjMsMS40LTcuNSw1LjZjLTQuNiw0LjUtNi42LDkuNC02LjYsOS40czMuOSw1LjcsNi40LDExLjVjLTYuMSwyLjEtMTEuMSw2LjMtMTQuMywxMS44ICAgIGMtMi42LTEuMS00LjktMS45LTYuOS0yLjRjMC4yLTMuNi0yLjYtNy42LTYuNi05LjFjLTQuNS0xLjYtOS4yLDEuMi'+
			'0xMC40LDUuOWMtMS4yLDQuNiwxLjUsOS4zLDYuMiwxMC4xYzQsMC43LDguMy0xLjMsMTAtNC4zICAgIGMxLjcsMC40LDMuOSwxLjIsNi40LDIuMmMtMS40LDMuMi0yLjIsNi44LTIuMiwxMC41YzAsMTQuNCwxMS43LDI2LjEsMjYuMSwyNi4xUzkxLjEsNzkuNCw5MS4xLDY1eiBNNDMuNCw2NC43ICAgIGMwLTMsMC43LTUuOCwxLjgtOC40YzAuOCwwLjQsMS42LDAuOCwyLjQsMS4ybDEuMi0yLjRjLTAuOC0wLjQtMS42LTAuOC0yLjQtMS4yYzMuOC02LjMsMTAuNy0xMC41LDE4LjYtMTAuNSAgICBjMTEuOSwwLDIxLjYsOS43LDIxLjYsMjEuNmMwLDEwLjUtNy41LDE5LjItMTcuNCwyMS4yYzAuMS0w'+
			'LjIsMC4yLTAuNCwwLjItMC41YzIuMS01LjYtMy4xLTguMS02LjUtOS43Yy0xLjctMC44LTMuNC0xLjYtNC42LTIuNyAgICBjLTEuMS0xLjEtMi4yLTIuNi0zLjItNC4xYy0yLjEtMy00LjItNi4yLTcuNy02LjJjLTAuOSwwLTEuOCwwLjItMi43LDAuNkM0NC40LDYzLjgsNDMuOSw2NC4yLDQzLjQsNjQuN3ogTTUxLjEsODEuNiAgICBjLTMuMy0yLjYtNS40LTguOS01LTEyLjRjMC4xLTAuOSwwLjQtMS40LDAuNS0xLjVjMC4zLTAuMSwwLjYtMC4yLDAuOC0wLjJjMS4yLDAsMi43LDIuMiw0LDQuMmMxLjEsMS43LDIuMywzLjQsMy44LDQuOSAgICBjMS42LDEuNSwzLjgsMi42LDUuNywzLjVjNC4zLD'+
			'IsNC43LDIuNyw0LjIsNC4xYy0wLjQsMS0yLjUsMS4xLTMuMiwxLjFDNTguNiw4NS4yLDUzLjcsODMuNiw1MS4xLDgxLjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTY1LDQzLjRjLTcuOSwwLTE0LjgsNC4yLTE4LjYsMTAuNWMwLjgsMC40LDEuNiwwLjgsMi40LDEuMmwtMS4yLDIuNGMtMC44LTAuNC0xLjYtMC44LTIuNC0xLjIgICAgIGMtMS4xLDIuNi0xLjgsNS40LTEuOCw4LjRjMC41LTAuNSwxLTAuOCwxLjUtMS4xYzAuOS0wLjQsMS44LTAuNiwyLjctMC42YzMuNiwwLDUuNywzLjEsNy43LDYuMmMxLDEuNSwyLDMsMy4yLDQuMSAgICAgYzEuMSwxLjEsMi45LDEu'+
			'OSw0LjYsMi43YzMuNCwxLjYsOC41LDQuMSw2LjUsOS43Yy0wLjEsMC4yLTAuMSwwLjMtMC4yLDAuNWM5LjktMiwxNy40LTEwLjcsMTcuNC0yMS4yICAgICBDODYuNiw1My4xLDc2LjksNDMuNCw2NSw0My40eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NVMzNCwxMjEuMSw2NSwxMjEuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFTOTYsOC45LDY1LDguOXogTTY1LDkxLjEgICAgIGMtMTQuNCwwLTI2LjEtMTEuNy0yNi4xLTI2LjFjMC0zLjcsMC44LTcuMywyLjItMTAuNWMtMi42LTEuMS00LjctMS44LTYuNC0yLjJjLTEuNywzLTUuOS'+
			'w0LjktMTAsNC4zYy00LjctMC44LTcuNC01LjUtNi4yLTEwLjEgICAgIGMxLjItNC42LDUuOS03LjUsMTAuNC01LjljNCwxLjUsNi44LDUuNSw2LjYsOS4xYzIsMC41LDQuMywxLjMsNi45LDIuNGMzLjEtNS41LDguMi05LjcsMTQuMy0xMS44Yy0yLjYtNS44LTYuNC0xMS41LTYuNC0xMS41ICAgICBzMi4xLTQuOCw2LjYtOS40YzQuMi00LjIsNy4xLTUuNSw3LjUtNS42bDAsMGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGwwLDBjMC40LDAuMiwzLjMsMS40LDcuNiw1LjVjNC42LDQuNCw2LjgsOS4yLDYuOCw5LjIgICAgIHMtMy43LDUuNy02LjIsMTEuNWMxMC43LDMuMywxOC41LDEzLjIsMTguNSwy'+
			'NUM5MS4xLDc5LjQsNzkuNCw5MS4xLDY1LDkxLjF6IiBmaWxsPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBkPSJNNjEuMSw4MC4xYy0xLjktMC45LTQuMS0xLjktNS43LTMuNWMtMS41LTEuNC0yLjctMy4yLTMuOC00LjljLTEuMy0yLTIuOC00LjItNC00LjJjLTAuMiwwLTAuNSwwLjEtMC44LDAuMiAgICAgYy0wLjIsMC4xLTAuNCwwLjUtMC41LDEuNWMtMC40LDMuNSwxLjcsOS44LDUsMTIuNGMyLjUsMiw3LjQsMy43LDEwLjksMy43YzAuNywwLDIuOC0wLjEsMy4yLTEuMUM2NS44LDgyLjcsNjUuMyw4Mi4xLDYxLjEsODAuMSAgICAgeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC'+
			'9nPgo8L3N2Zz4K';
		me._stereographic__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB5PSIwcHgiIHdpZHRoPSIxMzBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTTk0LjA0Niw2NC45OTljMC0xMy4wNzQtOC42ODUtMjQuMTU1LTIwLjU4Ny0yNy43ODZjMi43MTktNi40NTcsNi44NTctMTIuODMyLDYuODU3LTEyLjgzMiAgICBzLTIuNDE2LTUuMzMtNy41ODUtMTAuMjQ2Yy00LjgxLTQuNTc4LTguMDUtNS45NDEtOC40NzYtNi4xMDhsMC4wMDEtMC4wMTljMCwwLTAuMDEyLDAuMDA0LTAuMDI1LDAuMDExICAgIGMtMC4wMTQtMC4wMDYtMC4wMjQtMC4wMDktMC4wMjQtMC4wMDlsMC4wMDEsMC4wMTljLTAuNDIyLDAuMTc1LTMuNjM0LDEuNjA0LTguMzUsNi4yNzljLTUuMDY1LDUuMDIxLTcuMzcyLD'+
			'EwLjM5OS03LjM3MiwxMC4zOTkgICAgczQuMzE2LDYuMzYxLDcuMTY2LDEyLjc5OGMtNi43MzksMi4yOTgtMTIuMzY5LDcuMDA1LTE1Ljg2LDEzLjA5M2MtMi44NDUtMS4xODMtNS40NjgtMi4wOTQtNy42NDUtMi42NDYgICAgYzAuMjU0LTMuOTU2LTIuODYtOC40NTctNy4zNTctMTAuMDc0Yy00Ljk4Ny0xLjc5NS0xMC4xOTUsMS4zMzgtMTEuNTIyLDYuNTAzYy0xLjMyOCw1LjE2NSwxLjcwNSwxMC4zODYsNi44OTksMTEuMjI2ICAgIGM0LjQ5NywwLjcyOSw5LjIwMi0xLjQ0NCwxMS4xMS00Ljc3MmMxLjg3MywwLjQ3LDQuMzEzLDEuMjgxLDcuMTUzLDIuNDQ5Yy0xLjU4NywzLjU4Ny0yLjQ3Nyw3'+
			'LjU0OS0yLjQ3NywxMS43MTYgICAgYzAsMTYuMDE3LDEzLjAzLDI5LjA0NywyOS4wNDYsMjkuMDQ3Uzk0LjA0Niw4MS4wMTYsOTQuMDQ2LDY0Ljk5OXogTTQwLjk2Myw2NC42NTNjMC4wNDctMy4zMTUsMC43NjgtNi40NywyLjAzMi05LjMzMyAgICBjMC44NTYsMC40MSwxLjczMSwwLjg0MiwyLjYyOSwxLjMwNWwxLjM3NS0yLjY2NmMtMC44OC0wLjQ1NC0xLjc1Ni0wLjg4OS0yLjYyNC0xLjMwNmM0LjIwNy03LjAwMywxMS44NzctMTEuNywyMC42MjUtMTEuNyAgICBjMTMuMjU5LDAsMjQuMDQ2LDEwLjc4NywyNC4wNDYsMjQuMDQ2YzAsMTEuNjM2LTguMzA4LDIxLjM2Ni0xOS4zMDMsMjMuNTc1Yz'+
			'AuMDk3LTAuMTk5LDAuMTgxLTAuMzkzLDAuMjQ1LTAuNTcgICAgYzIuMjktNi4yNy0zLjQyNy04Ljk4LTcuMjA5LTEwLjc3NGMtMS44ODYtMC44OTUtMy44MzUtMS44MTktNS4wNzItMi45ODhjLTEuMjczLTEuMjA0LTIuNDMtMi45MTQtMy41NDctNC41NjggICAgYy0yLjI4My0zLjM4LTQuNjQ0LTYuODc0LTguNjA4LTYuODc0Yy0wLjk3MiwwLTEuOTY0LDAuMjI5LTIuOTUsMC42NzlDNDIuMDc2LDYzLjcxOCw0MS40OTksNjQuMDkxLDQwLjk2Myw2NC42NTN6IE00OS41OTcsODMuNDEgICAgYy0zLjY0NS0yLjkyMS02LjAwMy05LjkxOS01LjUyNS0xMy43NjVjMC4xMy0xLjA0NCwwLjQzNS0xLjU0'+
			'LDAuNjA4LTEuNjJjMC4zMy0wLjE1LDAuNjIzLTAuMjI3LDAuODcyLTAuMjI3ICAgIGMxLjMwOSwwLDIuOTg1LDIuNDgyLDQuNDY1LDQuNjczYzEuMjcsMS44NzksMi41ODIsMy44MjEsNC4yNTYsNS40MDNjMS44MTIsMS43MTQsNC4yMywyLjg2LDYuMzY0LDMuODcyICAgIGM0Ljc0OCwyLjI1Miw1LjIzNSwyLjk1Miw0LjY1NCw0LjU0MWMtMC40MTIsMS4xMy0yLjgyMywxLjIxOC0zLjU1MywxLjIxOEM1Ny44NjEsODcuNTA2LDUyLjQxNCw4NS42NjgsNDkuNTk3LDgzLjQxeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik02NSw0MC45NTNjLTguNzQ4LDAtMTYuNDE4LDQuNj'+
			'k3LTIwLjYyNSwxMS43YzAuODY4LDAuNDE3LDEuNzQ0LDAuODUyLDIuNjI0LDEuMzA2bC0xLjM3NSwyLjY2NiAgICAgYy0wLjg5Ny0wLjQ2My0xLjc3Mi0wLjg5NS0yLjYyOS0xLjMwNWMtMS4yNjUsMi44NjMtMS45ODUsNi4wMTgtMi4wMzIsOS4zMzNjMC41MzYtMC41NjIsMS4xMTMtMC45MzYsMS42MzktMS4xNzYgICAgIGMwLjk4Ni0wLjQ1LDEuOTc5LTAuNjc5LDIuOTUtMC42NzljMy45NjUsMCw2LjMyNSwzLjQ5NCw4LjYwOCw2Ljg3NGMxLjExNywxLjY1NCwyLjI3MywzLjM2NCwzLjU0Nyw0LjU2OCAgICAgYzEuMjM3LDEuMTY5LDMuMTg3LDIuMDk0LDUuMDcyLDIuOTg4YzMuNzgyLDEuNzk0'+
			'LDkuNDk5LDQuNTA1LDcuMjA5LDEwLjc3NGMtMC4wNjQsMC4xNzgtMC4xNDgsMC4zNzEtMC4yNDUsMC41NyAgICAgYzEwLjk5NS0yLjIwOSwxOS4zMDMtMTEuOTM5LDE5LjMwMy0yMy41NzVDODkuMDQ2LDUxLjc0LDc4LjI1OSw0MC45NTMsNjUsNDAuOTUzeiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTY1LDIuNjM4Yy0zNC40NDIsMC02Mi4zNjIsMjcuOTIyLTYyLjM2Miw2Mi4zNjNTMzAuNTU4LDEyNy4zNjIsNjUsMTI3LjM2MmMzNC40NDEsMCw2Mi4zNjItMjcuOTIsNjIuMzYyLTYyLjM2MSAgICAgUzk5LjQ0MSwyLjYzOCw2NSwyLjYzOHogTTY1LDk0LjA0NmMtMTYuMDE2LDAtMj'+
			'kuMDQ2LTEzLjAzLTI5LjA0Ni0yOS4wNDdjMC00LjE2NywwLjg5LTguMTI5LDIuNDc3LTExLjcxNiAgICAgYy0yLjg0LTEuMTY4LTUuMjgtMS45NzktNy4xNTMtMi40NDljLTEuOTA4LDMuMzI4LTYuNjEzLDUuNTAxLTExLjExLDQuNzcyYy01LjE5NC0wLjg0LTguMjI4LTYuMDYxLTYuODk5LTExLjIyNiAgICAgYzEuMzI3LTUuMTY1LDYuNTM1LTguMjk4LDExLjUyMi02LjUwM2M0LjQ5NywxLjYxNyw3LjYxMSw2LjExOCw3LjM1NywxMC4wNzRjMi4xNzcsMC41NTIsNC44LDEuNDYzLDcuNjQ1LDIuNjQ2ICAgICBjMy40OTEtNi4wODgsOS4xMjEtMTAuNzk1LDE1Ljg2LTEzLjA5M2MtMi44NS02LjQz'+
			'Ny03LjE2Ni0xMi43OTgtNy4xNjYtMTIuNzk4czIuMzA3LTUuMzc4LDcuMzcyLTEwLjM5OSAgICAgYzQuNzE2LTQuNjc1LDcuOTI4LTYuMTA0LDguMzUtNi4yNzlMNjQuMjA3LDguMDFjMCwwLDAuMDExLDAuMDAzLDAuMDI0LDAuMDA5YzAuMDE0LTAuMDA3LDAuMDI1LTAuMDExLDAuMDI1LTAuMDExbC0wLjAwMSwwLjAxOSAgICAgYzAuNDI2LDAuMTY3LDMuNjY2LDEuNTMsOC40NzYsNi4xMDhjNS4xNjksNC45MTYsNy41ODUsMTAuMjQ2LDcuNTg1LDEwLjI0NnMtNC4xMzksNi4zNzUtNi44NTcsMTIuODMyICAgICBjMTEuOTAyLDMuNjMxLDIwLjU4NywxNC43MTIsMjAuNTg3LDI3Ljc4NkM5NC4wND'+
			'YsODEuMDE2LDgxLjAxNiw5NC4wNDYsNjUsOTQuMDQ2eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTTYwLjYzNyw4MS43NDdjLTIuMTM0LTEuMDEyLTQuNTUyLTIuMTU4LTYuMzY0LTMuODcyYy0xLjY3NC0xLjU4Mi0yLjk4Ni0zLjUyNC00LjI1Ni01LjQwMyAgICAgYy0xLjQ3OS0yLjE5LTMuMTU2LTQuNjczLTQuNDY1LTQuNjczYy0wLjI0OSwwLTAuNTQyLDAuMDc2LTAuODcyLDAuMjI3Yy0wLjE3NCwwLjA4LTAuNDc5LDAuNTc2LTAuNjA4LDEuNjIgICAgIGMtMC40NzgsMy44NDYsMS44ODEsMTAuODQ0LDUuNTI1LDEzLjc2NWMyLjgxNywyLjI1OCw4LjI2NSw0LjA5NiwxMi4xNDIs'+
			'NC4wOTZjMC43MjksMCwzLjE0MS0wLjA4OCwzLjU1My0xLjIxOCAgICAgQzY1Ljg3Miw4NC42OTksNjUuMzg1LDgzLjk5OSw2MC42MzcsODEuNzQ3eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stereographic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._stereographic.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._stereographic.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._stereographic.style.transition='opacity 500ms ease 0ms';
				if (me._stereographic.ggCurrentLogicStateAlpha == 0) {
					me._stereographic.style.visibility=me._stereographic.ggVisible?'inherit':'hidden';
					me._stereographic.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._stereographic.style.opacity == 0.0) { me._stereographic.style.visibility="hidden"; } }, 505);
					me._stereographic.style.opacity=0;
				}
			}
		}
		me._stereographic.logicBlock_alpha();
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
			me.elementMouseOver['stereographic']=true;
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
			me.elementMouseOver['stereographic']=false;
		}
		me._stereographic.ggCurrentLogicStateAlpha = -1;
		me._stereographic.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['stereographic']) {
				me._stereographic__img.style.visibility='hidden';
				me._stereographic__imgo.style.visibility='inherit';
				me.elementMouseOver['stereographic']=true;
			}
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._stereographic);
		me._controller_slider.appendChild(me._projection_buttons);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_thumbnail') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail.style.transition='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStatePosition == 0) {
					me._thumbnail.style.left='0px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 1) {
					me._thumbnail.style.left='32px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 2) {
					me._thumbnail.style.left='64px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 3) {
					me._thumbnail.style.left='96px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 4) {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
				else {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
			}
		}
		me._thumbnail.logicBlock_position();
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style.transition='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
				else {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
			}
		}
		me._thumbnail.logicBlock_visible();
		me._thumbnail.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width <= 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_mobile', !player.getVariableValue('vis_thumbnail_menu_mobile'));
			}
			if (
				(
					((player.getViewerSize().width > 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_show', !player.getVariableValue('vis_thumbnail_menu_show'));
			}
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button_show=document.createElement('div');
		els=me._thumbnail_hide_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVTMzQsMTIxLjEsNjUsMTIxLjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUzk2LDguOSw2NSw4Ljl6IE01NS40LDU3LjggICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuMyAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIuMnogTTMyLjgsMTAwLjRjLTAuNCwwLTAu'+
			'OC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4yICAgbDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6ICAgIE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDYxLjlsMTIuNy0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41ICAgYy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMT'+
			'QuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjRDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40ICAg'+
			'bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLj'+
			'EsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnogTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNCAgIGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40ICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAs'+
			'MC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz'+
			'4KPC9zdmc+Cg==';
		me._thumbnail_hide_button_show__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW'+
			'9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRTOTkuNCwyLjYsNjUsMi42eiBNNTQuMyw1Ny4xICAgYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICBjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40'+
			'Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNCAgIGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6ICAgIE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44ICAgYy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi'+
			'43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjdDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU0LjMsNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTEuNkw1NC4zLDY4LjdWNTcuMXogTTIzLjcsNzIuOVY1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0gyNi40QzI0LjksNzUuNywyMy43LDc0LjQsMjMuNyw3Mi45eiBNMjkuMywxMDQuNGMtMC40LDAtMC45LTAu'+
			'Mi0xLjItMC41ICAgbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zICAgQzMwLjEsMTA0LjIsMjkuNywxMDQuNCwyOS4zLDEwNC40eiBNNzUuNyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g2MS41bDE0LjEtMTQuMUw3NS43LDcyLjlMNzUuNyw3Mi45eiBNMTA2LjMsNzIuOSAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdIODcuOGMtMS41LDAtMi43LTEuMi0yLjctMi43VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1Lj'+
			'hjMS41LDAsMi43LDEuMiwyLjcsMi43ICAgQzEwNi4zLDU3LjEsMTA2LjMsNzIuOSwxMDYuMyw3Mi45eiBNNTQuMyw1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43ICAgaDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjUgICBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgt'+
			'MC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjMgICBDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45ICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjcgICBDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPS'+
			'IjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_hide_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_hide_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button_show.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_hide_button_show.style.opacity == 0.0) { me._thumbnail_hide_button_show.style.visibility="hidden"; } }, 505);
					me._thumbnail_hide_button_show.style.opacity=0;
				}
			}
		}
		me._thumbnail_hide_button_show.logicBlock_alpha();
		me._thumbnail_hide_button_show.onmouseover=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='hidden';
			me._thumbnail_hide_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_hide_button_show']=true;
		}
		me._thumbnail_hide_button_show.onmouseout=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='inherit';
			me._thumbnail_hide_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_hide_button_show']=false;
		}
		me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha = -1;
		me._thumbnail_hide_button_show.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_hide_button_show']) {
				me._thumbnail_hide_button_show__img.style.visibility='hidden';
				me._thumbnail_hide_button_show__imgo.style.visibility='inherit';
				me.elementMouseOver['thumbnail_hide_button_show']=true;
			}
		}
		me._thumbnail_hide_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button_show);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMTguOSwzOTdjMC0zMS0yNS4xLTU2LjEtNTYuMS01Ni4xYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMSAgIEMtMTQ0LDQ1My4xLTExOC45LDQyOC0xMTguOSwzOTd6IE0tMjA5LjcsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuM2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjQgICB2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnogTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4z'+
			'LDEuMS0yLjQsMi41LTIuNGgxNC4yICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiBNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjMgICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xNTQuNSw0MDYuNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS'+
			'0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTE1NC41LDQwNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zICAgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTIwOS43LDQwNi42Yy0xLjQs'+
			'MC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMTIuNiwzOTdjMC0zNC40LTI3LjktNjIuNC02Mi40LTYyLjRjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjQgICBDLTE0MC42LDQ1OS40LTExMi42LDQzMS40LTExMi42LDM5N3ogTS0yMTMuNiw0MDcuNmMtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiBNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1'+
			'LjkgICBjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6IE0tMTUyLjIsNDA3LjYgICBjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE1Mi4yLDQwNy42eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMTUyLjIsNDA3LjZjLTEuNSwwLTIuNy'+
			'0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMTUyLjIsNDA3LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMjEzLjYsNDA3'+
			'LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == false)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == false)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button_show.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_show_button_show.style.opacity == 0.0) { me._thumbnail_show_button_show.style.visibility="hidden"; } }, 505);
					me._thumbnail_show_button_show.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button_show.logicBlock_alpha();
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
		}
		me._thumbnail_show_button_show.ggCurrentLogicStateAlpha = -1;
		me._thumbnail_show_button_show.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_show_button_show']) {
				me._thumbnail_show_button_show__img.style.visibility='hidden';
				me._thumbnail_show_button_show__imgo.style.visibility='inherit';
				me.elementMouseOver['thumbnail_show_button_show']=true;
			}
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button_show);
		me._controller_slider.appendChild(me._thumbnail);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzguMSwzNjEuMWw2LjIsMGMzLjUsMCw2LjQsMi45LDYuNCw2LjR2Mi45YzAsMy41LTIuOSw2LjQtNi40LDYuNGgtNi4yYy0zLjUsMC02LjQtMi45LTYuNC02LjRsMC0yLjkgICBDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXogTS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0x'+
			'LjVsMTUuOSwwICAgYzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSAgICBjMC44LDAsMS41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LT'+
			'IuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45ICAgIEMtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzguNSwzNTcuMWw2LjksMGMzLjksMCw3LjEsMy4yLDcuMSw3LjF2My4zYzAsMy45LTMuMiw3LjEtNy4xLDcuMWgtNi45Yy0zLjksMC03LjEtMy4yLTcuMS03LjFsMC0zLjMgICBDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAu'+
			'OC0xLjcsMS43LTEuN2wxNy43LDAgICBjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcgICAgYzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc4LjUsMzc0LjZoNi'+
			'45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyAgICBDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_information') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style.transition='left 0s, top 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='32px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 2) {
					me._info.style.left='64px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 3) {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
				else {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
			}
		}
		me._info.logicBlock_position();
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='left 0s, top 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.onclick=function (e) {
			player.setVariableValue('vis_userdata', true);
		}
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
		}
		me._info.ggCurrentLogicStatePosition = -1;
		me._info.ggCurrentLogicStateVisible = -1;
		me._info.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['info']) {
				me._info__img.style.visibility='hidden';
				me._info__imgo.style.visibility='inherit';
				me.elementMouseOver['info']=true;
			}
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._info);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_autorotate') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._autorotate_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._autorotate_buttons.style.transition='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStatePosition == 0) {
					me._autorotate_buttons.style.left='0px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 1) {
					me._autorotate_buttons.style.left='32px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 2) {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
				else {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
			}
		}
		me._autorotate_buttons.logicBlock_position();
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style.transition='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		me._autorotate_buttons.logicBlock_visible();
		me._autorotate_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._autorotate_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNTMuOSw0MjMuNmMtNS44LDQuNi0xMy4xLDcuNC0yMS4xLDcuNGgwYy0xOC43LDAtMzQtMTUuMi0zNC0zNGgtMC41aC03LjdjLTAuNSwwLTAuOC0wLjItMS4xLTAuN2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zICAgbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4x'+
			'LDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43ICAgYzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnogICAgTS0xNzksMzk3YzAtMi4yLDEuOC00LDQtNGMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Qy0xNzcuMiw0MDEtMTc5LDM5OS4yLTE3OSwzOTd6IE0tMTQ0LjUsNDE2LjkgICBjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcgICBjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMgICBjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGgwYzE4LjcsMCwzNCwxNS4yLDM0LDM0aDAuNWg3LjdjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBh'+
			'dGggZD0iTS0xNTMuNyw0MjEuM2MtMC44LTAuOS0zLjUtMy45LTQtNC40Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2gwICAgYy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42ICAgYy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwICAgYzgsMCwxNS4zLTIuOC'+
			'wyMS4xLTcuNEMtMTUzLjIsNDIzLjEtMTUzLjEsNDIyLTE1My43LDQyMS4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTE4LjctMTUuMi0zNC0zNC0zNGgwYy04LDAtMTUuMywyLjgtMjEuMSw3LjQgICBjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyAgIGgtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4y'+
			'LDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICBDLTEzMS41LDM5OC43LTEzMS40LDM5OC4yLTEzMS43LDM5Ny43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxjaXJjbGUgY3g9Ii0xNzUiIGN5PSIzOTciIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_start__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNTEuNSw0MjYuNmMtNi40LDUuMS0xNC42LDguMi0yMy41LDguMmgwYy0yMC44LDAtMzcuNy0xNi45LTM3LjctMzcuN2gtMC42aC04LjYgICBjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQuMS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAuNmwxNC4yLDE5LjggICBj'+
			'MC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkgICBjMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjlDLTE1MC43LDQyNC44LTE1MC43LDQyNi0xNTEuNSw0MjYuNnogTS0xNzkuNCwzOTdjMC0yLjQsMi00LjQsNC40LTQuNCAgIGMyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC4zLDAuNC0wLjYsMC42LT'+
			'EuMiwwLjYgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwICAgYy02LjQsMC0xMi4zLDIuMi0xNyw1LjljLTAuNywwLjUtMS42LDAuNC0yLjItMC4yYy0wLjYtMC42LTMuNS0zLjgtNC40LTQuOWMtMC43LTAuOC0wLjYtMiwwLjItMi42YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJoMCAgIGMyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEu'+
			'NUwtMTQxLjEsNDE5LjF6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAgICBjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiAgIGMtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC4xLDE5LjhjLTAuMywwLjQtMC40LDEtMC4xLDEuNWMwLjMsMC41LD'+
			'AuNiwwLjcsMS4yLDAuN2g4LjZoMC42YzAsMjAuOCwxNi45LDM3LjcsMzcuNywzNy43aDAgICBjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjIgICBjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUu'+
			'OWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43ICAgaC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjZjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOCAgIEMtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgY3k9IjM5NyIgcj0iNC40IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style.transition='opacity 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		me._autorotate_start.logicBlock_alpha();
		me._autorotate_start.onmouseover=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_start']=true;
		}
		me._autorotate_start.onmouseout=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_start']=false;
		}
		me._autorotate_start.ggCurrentLogicStateAlpha = -1;
		me._autorotate_start.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['autorotate_start']) {
				me._autorotate_start__img.style.visibility='hidden';
				me._autorotate_start__imgo.style.visibility='inherit';
				me.elementMouseOver['autorotate_start']=true;
			}
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTk2LjEsMzcwLjRjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGM3LjcsMCwxNC45LDIuNiwyMC42LDdsLTYuNCw2LjRjLTQtMi44LTguOS00LjQtMTQuMi00LjRjLTUuOCwwLTExLjEsMi0xNS4zLDUuMyAgIGMtMC42LDAuNS0xLjQsMC40LTItMC4yYy0wLjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcwLjR6IE0tMjE3LjIsMzk3'+
			'Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcgICBjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMgICBjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNmMwLDUuMiwxLjcsMTAuMSw0LjUsMTQuMWwtNi40LDYuNGMtNC40LTUuNy03LTEyLjgtNy4xLTIwLjVoLTAuNUgtMjE3LjJ6IE0tMjA3LjIsNDMyLjMgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LT'+
			'AuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43ICAgYzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40ICAgYy03LjcsMC0xNC44LTIuNi0yMC41LTYuOWw2LjQtNi40YzQsMi43LDguOCw0LjMsMTQsNC4zYzUuOCwwLDExLjEtMiwxNS4zLTUuM2MwLjYtMC41LDEuNC0wLjQsMiwwLjJjMC41LDAuNSwzLjEsMy41LDQsNC40ICAgQy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYuOWMtMC4zLDAuNC0wLjYs'+
			'MC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCAgIGMtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43ICAgYzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQyLjgsMzYxLjdjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS'+
			'42LDAsMi4ybC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjQgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0xNDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCAgICBjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIxLjEsNy40Yy0wLjcsMC41LTAuOCwxLjYt'+
			'MC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiAgICBoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICAgQy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNy'+
			'wzOTcuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcgICAgYzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyAgICBjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0t'+
			'MTU3LjcsNDE2LjZjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40ICAgIGM1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_stop__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTE5OC41LDM2Ny41YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJjOC42LDAsMTYuNSwyLjksMjIuOSw3LjhsLTcuMiw3LjJjLTQuNS0zLjEtOS45LTQuOS0xNS43LTQuOWMtNi40LDAtMTIuMywyLjItMTcsNS45ICAgYy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4zLDM2OC4xLTE5OC41LDM2'+
			'Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43ICAgYy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUgICBjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjVoLTAuN2MwLjEsNS44LDEuOSwxMS4yLDUsMTUuNmwtNy4xLDcuMWMtNC45LTYuMy03LjgtMTQuMi03LjktMjIuOGgtMC42SC0yMjEuOXogTS0yMTAuNyw0MzYuMyAgIGMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLj'+
			'RsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44ICAgYzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiAgIGMtOC41LDAtMTYuNC0yLjktMjIuOC03LjdsNy4yLTcuMmM0LjQsMyw5LjgsNC44LDE1LjYsNC44YzYuNCwwLDEyLjMtMi4yLDE3LTUuOWMwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOSAgIEMtMTUwLjcsNDI0LjUtMTUwLjcsNDI1LjctMTUxLjUs'+
			'NDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCAgIGMtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYgICBjMC41LDAsMC45LDAuMiwxLjIsMC43YzAuMywwLjUsMC4yLDEuMS0wLjEsMS41TC0xNDEuMSw0MTkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTEzOS4zLDM1Ny43YzAuNC'+
			'wwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSAgIHMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjIgICAgYy02LjQtNC45LTE0LjMtNy44LTIy'+
			'LjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yICAgIGMzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNiAgICBjMC41LDAsMC'+
			'45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyAgICBjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUgICAgYzAuMywwLjUsMC42'+
			'LDAuNywxLjIsMC43aDguNkgtMjEyLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjIgICAgYzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style.transition='opacity 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._autorotate_stop.style.opacity == 0.0) { me._autorotate_stop.style.visibility="hidden"; } }, 505);
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		me._autorotate_stop.logicBlock_alpha();
		me._autorotate_stop.onmouseover=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_stop']=true;
		}
		me._autorotate_stop.onmouseout=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_stop']=false;
		}
		me._autorotate_stop.ggCurrentLogicStateAlpha = -1;
		me._autorotate_stop.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['autorotate_stop']) {
				me._autorotate_stop__img.style.visibility='hidden';
				me._autorotate_stop__imgo.style.visibility='inherit';
				me.elementMouseOver['autorotate_stop']=true;
			}
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8cGF0aCBkPS'+
			'JNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUgIGMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhILTE0My4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45'+
			'LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC02My41Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41ICBjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8cGF0aCBkPS'+
			'JNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiAgYy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0ySC0xMzkuN3oiIGZpbGw9IiNGRkZGRkYiLz4KIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogICBNLTEzNy45LDQwNS42YzAsMC42LTAuMiwxLTAuNiwx'+
			'LjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC03MC42Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMiAgYzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style.transition='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		me._zoomout.logicBlock_visible();
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		me._zoomout.ggCurrentLogicStateVisible = -1;
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(0.5,true);
			}
			if (me.elementMouseOver['zoomout']) {
				me._zoomout__img.style.visibility='hidden';
				me._zoomout__imgo.style.visibility='inherit';
				me.elementMouseOver['zoomout']=true;
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTQxLjYsNDA0LjdjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMjIuM3YyMi4xYzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjcgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjNjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMt'+
			'MC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUgICBjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjggICBDLTE0MS42LDM4OS4zLTE0MS42LDQwNC43LTE0MS42LDQwNC43eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTY1LjUsMzg3LjVoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MTUuNWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi'+
			'4zdjIyLjEgICBjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuN2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMjIuMWgtMjIuMyAgIGMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMTUuNyAgIGMxLjEsMCwxLjYsMC41LDEuNiwxLjhWMzg3LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTEzNy45LDQwNS42YzAsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC0yNC44djI0LjZjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40ICAgYy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgt'+
			'MC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMiAgIGgyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42ICAgYzAsMC42LTAuMiwxLTAuNiwxLjRzLTAuOC'+
			'wwLjYtMS4yLDAuNmgtMTcuNGMtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQuOGMtMC40LDAtMC44LTAuMi0xLjItMC42ICAgcy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTJoMjQuOHYtMjQuNmMwLTEuNCwwLjYtMiwxLjgtMmgxNy40YzEuMiwwLDEuOCwwLjYsMS44LDJWMzg2LjR6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style.transition='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		me._zoomin.logicBlock_visible();
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		me._zoomin.ggCurrentLogicStateVisible = -1;
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-0.5,true);
			}
			if (me.elementMouseOver['zoomin']) {
				me._zoomin__img.style.visibility='hidden';
				me._zoomin__imgo.style.visibility='inherit';
				me.elementMouseOver['zoomin']=true;
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomin);
		me._controller.appendChild(me._controller_slider);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 77px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='margin-top : -38.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu.ggDragInertiaX *= 0.65;
				me._thumbnail_menu.ggDragInertiaY *= 0.65;
				me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
				me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnail_menu__content.onmouseup = null;
			me._thumbnail_menu__content.onmousemove = null;
			me._thumbnail_menu__content.ontouchend = null;
			me._thumbnail_menu__content.ontouchmove = null;
			me._thumbnail_menu__content.onpointerup = null;
			me._thumbnail_menu__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu.ggDragStartY) > 10) me._thumbnail_menu.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
			me._thumbnail_menu.ggDragInertiaX = -diffX;
			me._thumbnail_menu.ggDragInertiaY = -diffY;
			me._thumbnail_menu.ggDragLastX = eventX;
			me._thumbnail_menu.ggDragLastY = eventY;
			me._thumbnail_menu.ggScrollByX(-diffX);
			me._thumbnail_menu.ggScrollByY(-diffY);
		}
		me._thumbnail_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = me._thumbnail_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = me._thumbnail_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.onmouseup = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.ontouchend = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.onmousemove = me._thumbnail_menu__content.mousetouchmove;
			me._thumbnail_menu__content.ontouchmove = me._thumbnail_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : 85px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_menu.style.left = 'calc(50% - (80% / 2))';
					me._thumbnail_menu.style.bottom='-100px';
				}
				else {
					me._thumbnail_menu.style.left='calc(50% - ((80% + 0px) / 2) + 0%)';
					me._thumbnail_menu.style.bottom='65px';
				}
			}
		}
		me._thumbnail_menu.logicBlock_position();
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getVariableValue('vis_timer') == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 2px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.onmouseover=function (e) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			me.elementMouseOver['thumbnail_cloner']=true;
		}
		me._thumbnail_cloner.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner']=false;
		}
		me._thumbnail_cloner.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_cloner']) {
				if (
					(
						((player.getVariableValue('opt_autohide') == true))
					)
				) {
					me._hide_timer.ggTimeout=Number("5") * 1000.0;
					me._hide_timer.ggTimestamp=skin.ggCurrentTime;
				}
				me.elementMouseOver['thumbnail_cloner']=true;
			}
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_mobile=document.createElement('div');
		els=me._thumbnail_menu_mobile__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 76.764px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.49px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 118.98px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_mobile.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_mobile.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu_mobile.ggScrollPosX = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu_mobile.ggScrollPosX / (me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
			me._thumbnail_menu_mobile__content.style.left = -(Math.round((me._thumbnail_menu_mobile.ggContentWidth * (1.0 - me._thumbnail_menu_mobile.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu_mobile.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_mobile.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_mobile.ggScrollPosX >= me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_mobile.ggScrollPosX <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu_mobile.ggScrollPosX / (me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
			me._thumbnail_menu_mobile__content.style.left = -(Math.round((me._thumbnail_menu_mobile.ggContentWidth * (1.0 - me._thumbnail_menu_mobile.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_mobile.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu_mobile.ggScrollPosY = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu_mobile.ggScrollPosY / (me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
			me._thumbnail_menu_mobile__content.style.top = -(Math.round((me._thumbnail_menu_mobile.ggContentHeight * (1.0 - me._thumbnail_menu_mobile.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu_mobile.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_mobile.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_mobile.ggScrollPosY >= me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_mobile.ggScrollPosY <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu_mobile.ggScrollPosY / (me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
			me._thumbnail_menu_mobile__content.style.top = -(Math.round((me._thumbnail_menu_mobile.ggContentHeight * (1.0 - me._thumbnail_menu_mobile.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu_mobile__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu_mobile.ggDragInertiaX *= 0.65;
				me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
				me._thumbnail_menu_mobile.ggScrollByX(me._thumbnail_menu_mobile.ggDragInertiaX);
				me._thumbnail_menu_mobile.ggScrollByY(me._thumbnail_menu_mobile.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnail_menu_mobile__content.onmouseup = null;
			me._thumbnail_menu_mobile__content.onmousemove = null;
			me._thumbnail_menu_mobile__content.ontouchend = null;
			me._thumbnail_menu_mobile__content.ontouchmove = null;
			me._thumbnail_menu_mobile__content.onpointerup = null;
			me._thumbnail_menu_mobile__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu_mobile.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu_mobile__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu_mobile.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu_mobile.ggDragStartY) > 10) me._thumbnail_menu_mobile.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu_mobile.ggDragLastX) * me._thumbnail_menu_mobile.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu_mobile.ggDragLastY) * me._thumbnail_menu_mobile.ggVPercentVisible;
			me._thumbnail_menu_mobile.ggDragInertiaX = -diffX;
			me._thumbnail_menu_mobile.ggDragInertiaY = -diffY;
			me._thumbnail_menu_mobile.ggDragLastX = eventX;
			me._thumbnail_menu_mobile.ggDragLastY = eventY;
			me._thumbnail_menu_mobile.ggScrollByX(-diffX);
			me._thumbnail_menu_mobile.ggScrollByY(-diffY);
		}
		me._thumbnail_menu_mobile__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = me._thumbnail_menu_mobile.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu_mobile.ggDragLastY = me._thumbnail_menu_mobile.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu_mobile__content.onmouseup = me._thumbnail_menu_mobile__content.mousetouchend;
			me._thumbnail_menu_mobile__content.ontouchend = me._thumbnail_menu_mobile__content.mousetouchend;
			me._thumbnail_menu_mobile__content.onmousemove = me._thumbnail_menu_mobile__content.mousetouchmove;
			me._thumbnail_menu_mobile__content.ontouchmove = me._thumbnail_menu_mobile__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu_mobile__content.onpointerup = me._thumbnail_menu_mobile__content.ontouchend;
				me._thumbnail_menu_mobile__content.onpointermove = me._thumbnail_menu_mobile__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu_mobile__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu_mobile__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu_mobile__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_menu_mobile__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 280px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu_mobile__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 280px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu_mobile.ggScrollPosY = 0;
		me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
					me._thumbnail_menu_mobile.ggScrollByY(me._thumbnail_menu_mobile.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragInertiaY = diffY;
				me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_mobile.ggDragInertiaY *= 0.65;
					me._thumbnail_menu_mobile.ggScrollByY(me._thumbnail_menu_mobile.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu_mobile.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragInertiaY = diffY;
				me._thumbnail_menu_mobile.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu_mobile.ggScrollByYSmooth(30 * me._thumbnail_menu_mobile.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_mobile__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu_mobile.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_menu_mobile.style.left = 'calc(50% - (90% / 2))';
					me._thumbnail_menu_mobile.style.top='1000px';
				}
				else {
					me._thumbnail_menu_mobile.style.left='calc(50% - ((90% + 0px) / 2) + 0px)';
					me._thumbnail_menu_mobile.style.top='10px';
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_position();
		me._thumbnail_menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_mobile.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_mobile.style.visibility=(Number(me._thumbnail_menu_mobile.style.opacity)>0||!me._thumbnail_menu_mobile.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_mobile.ggVisible=true;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_visible();
		me._thumbnail_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getVariableValue('vis_thumbnail_menu_auto_hide') == true)) && 
				((player.getVariableValue('vis_timer') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_mobile.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_mobile.style.opacity == 0.0) { me._thumbnail_menu_mobile.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_alpha();
		me._thumbnail_menu_mobile.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile.ggVertScrollVisible = true;
				} else {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile.ggVertScrollVisible = false;
				}
				if(me._thumbnail_menu_mobile.ggVertScrollVisible) {
					me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.clientWidth - 15;
					if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight - 15;
						me._thumbnail_menu_mobile.ggAvailableHeightWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().height - me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight;
						me._thumbnail_menu_mobile.ggAvailableHeightWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().height;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu_mobile__vertScrollBg.style.height = me._thumbnail_menu_mobile.ggAvailableHeight + 'px';
					me._thumbnail_menu_mobile.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_menu_mobile.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_menu_mobile.ggVPercentVisible > 1.0) me._thumbnail_menu_mobile.ggVPercentVisible = 1.0;
					me._thumbnail_menu_mobile.ggScrollHeight =  Math.round(me._thumbnail_menu_mobile__vertScrollBg.offsetHeight * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile__vertScrollFg.style.height = me._thumbnail_menu_mobile.ggScrollHeight + 'px';
					me._thumbnail_menu_mobile.ggScrollPosY = me._thumbnail_menu_mobile.ggScrollPosYPercent * me._thumbnail_menu_mobile.ggAvailableHeight;
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
					me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
					if (me._thumbnail_menu_mobile.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu_mobile.ggScrollPosY / (me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
						me._thumbnail_menu_mobile__content.style.top = -(Math.round((me._thumbnail_menu_mobile.ggContentHeight * (1.0 - me._thumbnail_menu_mobile.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.clientWidth;
					me._thumbnail_menu_mobile.ggScrollPosY = 0;
					me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu_mobile__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_menu_mobile.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu_mobile.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu_mobile);
					me._thumbnail_menu_mobile.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_mobile.ggUpdating == true) return;
			me._thumbnail_cloner_mobile.ggUpdating = true;
			var el=me._thumbnail_cloner_mobile;
			var curNumCols = 0;
			var parentWidth = me._thumbnail_cloner_mobile.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnail_cloner_mobile.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnail_cloner_mobile.parentNode.parentNode.ggAvailableWidth : me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth) : me._thumbnail_cloner_mobile.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnail_cloner_mobile.offsetLeft) * me._thumbnail_cloner_mobile.ggNumRepeat / 100.0) / me._thumbnail_cloner_mobile.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner_mobile.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner_mobile.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner_mobile.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner_mobile.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner_mobile.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner_mobile.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner_mobile.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner_mobile.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner_mobile.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_mobile_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnail_cloner_mobile.ggNodeCount = me._thumbnail_cloner_mobile.ggNumFilterPassed;
			me._thumbnail_cloner_mobile.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner_mobile.parentNode && me._thumbnail_cloner_mobile.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner_mobile.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner_mobile.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 1.98px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 1.764px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_mobile.onmouseover=function (e) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			me.elementMouseOver['thumbnail_cloner_mobile']=true;
		}
		me._thumbnail_cloner_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		me._thumbnail_cloner_mobile.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_cloner_mobile']) {
				if (
					(
						((player.getVariableValue('opt_autohide') == true))
					)
				) {
					me._hide_timer.ggTimeout=Number("5") * 1000.0;
					me._hide_timer.ggTimestamp=skin.ggCurrentTime;
				}
				me.elementMouseOver['thumbnail_cloner_mobile']=true;
			}
		}
		me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_mobile.childNodes.length; i++) {
				var child=me._thumbnail_cloner_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner_mobile.ggUpdate();
		}
		me._thumbnail_menu_mobile__content.appendChild(me._thumbnail_cloner_mobile);
		me.divSkin.appendChild(me._thumbnail_menu_mobile);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._web_page.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._web_page.ggUpdateText();
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style.transition='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.logicBlock_visible();
		me._web_page.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._web_page);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._userdata.style.transition='';
				if (me._userdata.ggCurrentLogicStateVisible == 0) {
					me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
					me._userdata.ggVisible=true;
				}
				else {
					me._userdata.style.visibility="hidden";
					me._userdata.ggVisible=false;
				}
			}
		}
		me._userdata.logicBlock_visible();
		me._userdata.ggUpdatePosition=function (useTransition) {
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 492px;';
		hs+='left : -231px;';
		hs+='position : absolute;';
		hs+='top : -212px;';
		hs+='visibility : inherit;';
		hs+='width : 820px;';
		hs+='pointer-events:auto;';
		hs+='background: rgb(169 169 169 \/ 78%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdata_title=document.createElement('div');
		els=me._userdata_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -199px;';
		hs+='position : absolute;';
		hs+='top : -194px;';
		hs+='visibility : inherit;';
		hs+='width : 800px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-size:14px";
		els.setAttribute('style',hs);
		me._userdata_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_title.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_title);
		el=me._userdata_description=document.createElement('div');
		els=me._userdata_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 550px;';
		hs+='left : -218px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 780px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._userdata_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_description.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_description);
		el=me._userdata_author=document.createElement('div');
		els=me._userdata_author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_author.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.author)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_author.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_author.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_author);
		el=me._userdata_datetime=document.createElement('div');
		els=me._userdata_datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_datetime.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.datetime)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_datetime.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_datetime.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_datetime);
		el=me._userdata_copyright=document.createElement('div');
		els=me._userdata_copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_copyright.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("&#169; %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._userdata_copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._userdata_copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_copyright);
		el=me._userdata_close=document.createElement('div');
		els=me._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._userdata_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._userdata_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 548px;';
		hs+='position : absolute;';
		hs+='top : -208px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_close.onclick=function (e) {
			player.setVariableValue('vis_userdata', false);
		}
		me._userdata_close.onmouseover=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
			me.elementMouseOver['userdata_close']=true;
		}
		me._userdata_close.onmouseout=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
			me.elementMouseOver['userdata_close']=false;
		}
		me._userdata_close.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['userdata_close']) {
				me._userdata_close__img.style.visibility='hidden';
				me._userdata_close__imgo.style.visibility='inherit';
				me.elementMouseOver['userdata_close']=true;
			}
		}
		me._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style.transition='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_visible();
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((245px + 0px) / 2) - 15px);';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_close']=true;
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_close']=false;
		}
		me._ht_info_close.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info_close']) {
				me._ht_info_close__img.style.visibility='hidden';
				me._ht_info_close__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_info_close']=true;
			}
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style.transition='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.logicBlock_visible();
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3'+
			'BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style.transition='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image.ggSubElement.src='';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.logicBlock_visible();
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style.transition='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.logicBlock_visible();
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3'+
			'BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_file.ggVideoNotLoaded == false && me._popup_video_file.ggDeactivate && player.isPlaying('popup_video_file')) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__vid.setAttribute('autoplay', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = true;
			player.changeVolume('popup_video_file', 0.0);
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style.transition='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.logicBlock_visible();
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((284px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style.transition='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.logicBlock_visible();
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		me._seekbar_file.ggMediaId = 'popup_video_file';
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_file.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_file.mediaEl != null) {
					if (e.target == me._seekbar_file) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_file.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_file || e.target == me._seekbar_file__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_file.onmousedown = me._seekbar_file.ontouchstart = me._seekbar_file.mouseTouchHandling;
		me._seekbar_file.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#000000';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject(me._seekbar_file.ggMediaId);
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '2px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_file.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 2) * percent);
					playheadpos += 2;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,1) ' + currPos + '%, rgba(0,0,0,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background : #000000;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6px;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTUwLjUsMzk4LjZsLTM4LjEsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42ICAgQy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5MSwzNzBjMC0xLjUsMS0y'+
			'LjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDcuOCwzOTguOGwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjYgICBDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTkyLjgsMzY3'+
			'YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_play_file']=true;
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_play_file']=false;
		}
		me._ht_video_play_file.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_play_file']) {
				me._ht_video_play_file__img.style.visibility='hidden';
				me._ht_video_play_file__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_play_file']=true;
			}
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTc3LjcsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM2gtMTQuM2MtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDE0LjMgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMs'+
			'MC0yLjMtMS0yLjMtMi4zdi0zOC42ICAgYzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiAgICBDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNT'+
			'UuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYgICAgQy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzgsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjkgICBjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0x'+
			'NS45ICAgYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNDIuOSAgICBDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cG'+
			'F0aCBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45ICAgIEMtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_pause_file']=true;
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_pause_file']=false;
		}
		me._ht_video_pause_file.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_pause_file']) {
				me._ht_video_pause_file__img.style.visibility='hidden';
				me._ht_video_pause_file__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_pause_file']=true;
			}
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_url=document.createElement('div');
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style.transition='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		me._video_popup_url.logicBlock_visible();
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_url=document.createElement('div');
		els=me._loading_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3'+
			'BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._loading_video_url);
		el=me._popup_video_url=document.createElement('div');
		me._popup_video_url.seekbars = [];
		me._popup_video_url.seekbars.push('seekbar_url');
		me._popup_video_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_url.ggVideoNotLoaded == false && me._popup_video_url.ggDeactivate && player.isPlaying('popup_video_url')) { me._popup_video_url.ggDeactivate(); }
				me._popup_video_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('crossOrigin', 'anonymous');
			me._popup_video_url__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_url__vid.setAttribute('autoplay', '');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.setAttribute('style', ';');
			me._popup_video_url__vid.style.outline = 'none';
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = true;
			player.changeVolume('popup_video_url', 0.0);
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		el.ggId="popup_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_url.style.transition='';
				if (me._popup_video_url.ggCurrentLogicStateVisible == 0) {
					me._popup_video_url.style.visibility=(Number(me._popup_video_url.style.opacity)>0||!me._popup_video_url.style.opacity)?'inherit':'hidden';
					if (me._popup_video_url.ggVideoNotLoaded) {
						me._popup_video_url.ggInitMedia(me._popup_video_url.ggVideoSource);
					}
					me._popup_video_url.ggVisible=true;
				}
				else {
					me._popup_video_url.style.visibility="hidden";
					me._popup_video_url.ggInitMedia('');
					me._popup_video_url.ggVisible=false;
				}
			}
		}
		me._popup_video_url.logicBlock_visible();
		me._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._popup_video_url);
		me.divSkin.appendChild(me._video_popup_url);
		el=me._video_popup_controls_url=document.createElement('div');
		el.ggId="video_popup_controls_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((284px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_url.style.transition='';
				if (me._video_popup_controls_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_url.style.visibility=(Number(me._video_popup_controls_url.style.opacity)>0||!me._video_popup_controls_url.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_url.ggVisible=true;
				}
				else {
					me._video_popup_controls_url.style.visibility="hidden";
					me._video_popup_controls_url.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_url.logicBlock_visible();
		me._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._seekbar_url=document.createElement('div');
		me._seekbar_url__playhead=document.createElement('div');
		me._seekbar_url.mediaEl = null;
		me._seekbar_url.fromBufferSource = false;
		me._seekbar_url.ggMediaId = 'popup_video_url';
		el.ggId="seekbar_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_url.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_url.mediaEl != null) {
					if (e.target == me._seekbar_url) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_url.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
							me._seekbar_url.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_url || e.target == me._seekbar_url__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_url.getBoundingClientRect().x;
							if (me._seekbar_url.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
								me._seekbar_url.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_url.getBoundingClientRect().x;
							if (me._seekbar_url.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
								me._seekbar_url.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_url.onmousedown = me._seekbar_url.ontouchstart = me._seekbar_url.mouseTouchHandling;
		me._seekbar_url.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#000000';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_url.bufferSoundActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_url.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_url.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_url.bufferSoundDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_url.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.mediaEl.removeEventListener('play', me._seekbar_url.ggActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggDeactivate);
						me._seekbar_url.mediaEl.removeEventListener('pause', me._seekbar_url.ggDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggMediaEnded);
					}
				}
			}
			me._seekbar_url.mediaEl = player.getMediaObject(me._seekbar_url.ggMediaId);
			if (me._seekbar_url.mediaEl) {
				me._seekbar_url.fromBufferSource = false;
			} else {
				me._seekbar_url.mediaEl = player.getMediaBufferSourceObject('popup_video_url');
				me._seekbar_url.fromBufferSource = true;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '2px';
				if (me._seekbar_url.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_url.bufferSoundActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_url.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_url.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_url.bufferSoundDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_url.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
						me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggMediaEnded);
					}
				}
				me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_url.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_url.updatePlayback = function(args) {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState || (me._seekbar_url.fromBufferSource && args && args['id'] == me._seekbar_url.mediaEl.id)) {
					if (me._seekbar_url.fromBufferSource) {
						var percent = me._seekbar_url.mediaEl.bufferSoundCurrentTime() / me._seekbar_url.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 2) * percent);
					playheadpos += 2;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._seekbar_url.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,1) ' + currPos + '%, rgba(0,0,0,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		me._seekbar_url.appendChild(me._seekbar_url__playhead);
		hs+='background : #000000;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6px;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_url.setAttribute('style', hs);
		me._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		me._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		me._seekbar_url.ggUpdatePosition=function (useTransition) {
			me._seekbar_url.updatePlayback();
		}
		me._video_popup_controls_url.appendChild(me._seekbar_url);
		el=me._ht_video_play_url=document.createElement('div');
		els=me._ht_video_play_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTUwLjUsMzk4LjZsLTM4LjEsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42ICAgQy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5MSwzNzBjMC0xLjUsMS0y'+
			'LjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDcuOCwzOTguOGwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjYgICBDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTkyLjgsMzY3'+
			'YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_play_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.playVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_url","1");
			}
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		me._ht_video_play_url.onmouseover=function (e) {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_play_url']=true;
		}
		me._ht_video_play_url.onmouseout=function (e) {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_play_url']=false;
		}
		me._ht_video_play_url.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_play_url']) {
				me._ht_video_play_url__img.style.visibility='hidden';
				me._ht_video_play_url__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_play_url']=true;
			}
		}
		me._ht_video_play_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_play_url);
		el=me._ht_video_pause_url=document.createElement('div');
		els=me._ht_video_pause_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTc3LjcsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM2gtMTQuM2MtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDE0LjMgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMs'+
			'MC0yLjMtMS0yLjMtMi4zdi0zOC42ICAgYzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiAgICBDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNT'+
			'UuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYgICAgQy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzgsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjkgICBjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0x'+
			'NS45ICAgYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNDIuOSAgICBDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cG'+
			'F0aCBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45ICAgIEMtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_pause_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_url");
			}
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		me._ht_video_pause_url.onmouseover=function (e) {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_pause_url']=true;
		}
		me._ht_video_pause_url.onmouseout=function (e) {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_pause_url']=false;
		}
		me._ht_video_pause_url.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_pause_url']) {
				me._ht_video_pause_url__img.style.visibility='hidden';
				me._ht_video_pause_url__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_pause_url']=true;
			}
		}
		me._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_pause_url);
		me.divSkin.appendChild(me._video_popup_controls_url);
		el=me._video_popup_vimeo=document.createElement('div');
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style.transition='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._video_popup_vimeo.logicBlock_visible();
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_vimeo=document.createElement('div');
		els=me._loading_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3'+
			'BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_vimeo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._loading_video_vimeo);
		el=me._popup_video_vimeo=document.createElement('div');
		me._popup_video_vimeo.seekbars = [];
		me._popup_video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_vimeo.ggVideoNotLoaded == false && me._popup_video_vimeo.ggDeactivate && player.isPlaying('popup_video_vimeo')) { me._popup_video_vimeo.ggDeactivate(); }
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('allow', 'autoplay');
			me._popup_video_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		el.ggId="popup_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_vimeo.style.transition='';
				if (me._popup_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._popup_video_vimeo.style.visibility=(Number(me._popup_video_vimeo.style.opacity)>0||!me._popup_video_vimeo.style.opacity)?'inherit':'hidden';
					if (me._popup_video_vimeo.ggVideoNotLoaded) {
						me._popup_video_vimeo.ggInitMedia(me._popup_video_vimeo.ggVideoSource);
					}
					me._popup_video_vimeo.ggVisible=true;
				}
				else {
					me._popup_video_vimeo.style.visibility="hidden";
					me._popup_video_vimeo.ggInitMedia('');
					me._popup_video_vimeo.ggVisible=false;
				}
			}
		}
		me._popup_video_vimeo.logicBlock_visible();
		me._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._popup_video_vimeo);
		me.divSkin.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style.transition='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.logicBlock_visible();
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3'+
			'BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_youtube.ggVideoNotLoaded == false && me._popup_video_youtube.ggDeactivate && player.isPlaying('popup_video_youtube')) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style.transition='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.logicBlock_visible();
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me.__360image_gyro=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=4000;
		el.ggId="360image_gyro";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 86px;';
		hs+='left : calc(50% - ((116px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((86px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__360image_gyro.ggIsActive=function() {
			return (me.__360image_gyro.ggTimestamp + me.__360image_gyro.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360image_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getVariableValue('vis_360image_once') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360image_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360image_gyro.style.transition='opacity 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateVisible == 0) {
					me.__360image_gyro.style.visibility=(Number(me.__360image_gyro.style.opacity)>0||!me.__360image_gyro.style.opacity)?'inherit':'hidden';
					me.__360image_gyro.ggVisible=true;
				}
				else {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.ggVisible=false;
				}
			}
		}
		me.__360image_gyro.logicBlock_visible();
		me.__360image_gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.__360image_gyro.ggIsActive() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__360image_gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__360image_gyro.style.transition='opacity 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__360image_gyro.style.opacity == 0.0) { me.__360image_gyro.style.visibility="hidden"; } }, 505);
					me.__360image_gyro.style.opacity=0;
				}
				else {
					me.__360image_gyro.style.visibility=me.__360image_gyro.ggVisible?'inherit':'hidden';
					me.__360image_gyro.style.opacity=1;
				}
			}
		}
		me.__360image_gyro.logicBlock_alpha();
		me.__360image_gyro.ggDeactivate=function () {
			player.setVariableValue('vis_360image_once', false);
		}
		me.__360image_gyro.ggCurrentLogicStateVisible = -1;
		me.__360image_gyro.ggCurrentLogicStateAlpha = -1;
		me.__360image_gyro.ggUpdateConditionTimer=function () {
			me.__360image_gyro.logicBlock_alpha();
		}
		me.__360image_gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me.__360image_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=400;
		el.ggId="360image_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__360image_timer.ggIsActive=function() {
			return (me.__360image_timer.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__360image_timer.ggTimestamp) / me.__360image_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_timer.ggActivate=function () {
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
		}
		me.__360image_timer.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_timer);
		el=me.__360image_background=document.createElement('div');
		el.ggId="360image_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : calc(50% - ((116px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((86px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__360image_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_background.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_background);
		el=me.__360image_text=document.createElement('div');
		els=me.__360image_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="360image_text";
		el.ggDx=0;
		el.ggDy=32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : calc(50% - ((89px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 32px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__360image_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("Gyroscope", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__360image_text.ggUpdateText();
		el.appendChild(els);
		me.__360image_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_text.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_text);
		el=me.__360image=document.createElement('div');
		el.ggId="360image";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 9px;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : calc(50% - ((33px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((58px + 4px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__360image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_360image') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__360image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__360image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__360image.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStatePosition == 0) {
					me.__360image.style.left = 'calc(50% - (33px / 2) + (4px / 2))';
					me.__360image.style.top = 'calc(50% - (58px / 2) + (4px / 2) + -8px)';
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 1) {
					me.__360image.style.left = 'calc(50% - (33px / 2) + (4px / 2))';
					me.__360image.style.top = 'calc(50% - (58px / 2) + (4px / 2) + -8px)';
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 2) {
					me.__360image.style.left = 'calc(50% - (33px / 2) + (4px / 2) + -32px)';
					me.__360image.style.top = 'calc(50% - (58px / 2) + (4px / 2) + -8px)';
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 3) {
					me.__360image.style.left = 'calc(50% - (33px / 2) + (4px / 2))';
					me.__360image.style.top = 'calc(50% - (58px / 2) + (4px / 2) + -8px)';
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 4) {
					me.__360image.style.left = 'calc(50% - (33px / 2) + (4px / 2) + 32px)';
					me.__360image.style.top = 'calc(50% - (58px / 2) + (4px / 2) + -8px)';
				}
				else {
					me.__360image.style.left='calc(50% - ((33px + 4px) / 2) + 0px)';
					me.__360image.style.top='calc(50% - ((58px + 4px) / 2) - 8px)';
				}
			}
		}
		me.__360image.logicBlock_position();
		me.__360image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("3")))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("4")))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("5")))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__360image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__360image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__360image.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStateScaling == 0) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style.transform=parameterToTransform(me.__360image.ggParameter);
					setTimeout(function() {skin.updateSize(me.__360image);}, 1050);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 1) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style.transform=parameterToTransform(me.__360image.ggParameter);
					setTimeout(function() {skin.updateSize(me.__360image);}, 1050);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 2) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style.transform=parameterToTransform(me.__360image.ggParameter);
					setTimeout(function() {skin.updateSize(me.__360image);}, 1050);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 3) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style.transform=parameterToTransform(me.__360image.ggParameter);
					setTimeout(function() {skin.updateSize(me.__360image);}, 1050);
				}
				else {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style.transform=parameterToTransform(me.__360image.ggParameter);
					setTimeout(function() {skin.updateSize(me.__360image);}, 1050);
				}
			}
		}
		me.__360image.logicBlock_scaling();
		me.__360image.ggUpdatePosition=function (useTransition) {
		}
		el=me._phone1=document.createElement('div');
		el.ggId="phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone1.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone1);
		el=me._phone2=document.createElement('div');
		el.ggId="phone2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("2")))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("3")))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone2.style.transition='transform 1000ms ease 0ms';
				if (me._phone2.ggCurrentLogicStateScaling == 0) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style.transform=parameterToTransform(me._phone2.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone2);}, 1050);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 1) {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style.transform=parameterToTransform(me._phone2.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone2);}, 1050);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 2) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style.transform=parameterToTransform(me._phone2.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone2);}, 1050);
				}
				else {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style.transform=parameterToTransform(me._phone2.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone2);}, 1050);
				}
			}
		}
		me._phone2.logicBlock_scaling();
		me._phone2.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone2);
		el=me._phone3=document.createElement('div');
		el.ggId="phone3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pos_360image') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("0")))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('pos_360image') == Number("0")))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone3.style.transition='transform 1000ms ease 0ms';
				if (me._phone3.ggCurrentLogicStateScaling == 0) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style.transform=parameterToTransform(me._phone3.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone3);}, 1050);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 1) {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style.transform=parameterToTransform(me._phone3.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone3);}, 1050);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 2) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style.transform=parameterToTransform(me._phone3.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone3);}, 1050);
				}
				else {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style.transform=parameterToTransform(me._phone3.ggParameter);
					setTimeout(function() {skin.updateSize(me._phone3);}, 1050);
				}
			}
		}
		me._phone3.logicBlock_scaling();
		me._phone3.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone3);
		me.__360image_gyro.appendChild(me.__360image);
		me.divSkin.appendChild(me.__360image_gyro);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style.transition='';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		me._close.logicBlock_visible();
		me._close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
		}
		me._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
			me.elementMouseOver['close']=true;
		}
		me._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
			me.elementMouseOver['close']=false;
		}
		me._close.ggCurrentLogicStateVisible = -1;
		me._close.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['close']) {
				me._close__img.style.visibility='hidden';
				me._close__imgo.style.visibility='inherit';
				me.elementMouseOver['close']=true;
			}
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 170px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosX / (me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__content.style.left = -(Math.round((me._dropdown_scrollarea.ggContentWidth * (1.0 - me._dropdown_scrollarea.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosX / (me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__content.style.left = -(Math.round((me._dropdown_scrollarea.ggContentWidth * (1.0 - me._dropdown_scrollarea.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._dropdown_scrollarea__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._dropdown_scrollarea.ggDragInertiaX *= 0.65;
				me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
				me._dropdown_scrollarea.ggScrollByX(me._dropdown_scrollarea.ggDragInertiaX);
				me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
				if (Math.abs(me._dropdown_scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._dropdown_scrollarea__content.onmouseup = null;
			me._dropdown_scrollarea__content.onmousemove = null;
			me._dropdown_scrollarea__content.ontouchend = null;
			me._dropdown_scrollarea__content.ontouchmove = null;
			me._dropdown_scrollarea__content.onpointerup = null;
			me._dropdown_scrollarea__content.onpointermove = null;
			setTimeout(function() { me._dropdown_scrollarea.ggIsDragging = false; }, 100);
		}
		me._dropdown_scrollarea__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._dropdown_scrollarea.ggDragStartX) > 10 || Math.abs(eventY - me._dropdown_scrollarea.ggDragStartY) > 10) me._dropdown_scrollarea.ggIsDragging = true;
			var diffX = (eventX - me._dropdown_scrollarea.ggDragLastX) * me._dropdown_scrollarea.ggHPercentVisible;
			var diffY = (eventY - me._dropdown_scrollarea.ggDragLastY) * me._dropdown_scrollarea.ggVPercentVisible;
			me._dropdown_scrollarea.ggDragInertiaX = -diffX;
			me._dropdown_scrollarea.ggDragInertiaY = -diffY;
			me._dropdown_scrollarea.ggDragLastX = eventX;
			me._dropdown_scrollarea.ggDragLastY = eventY;
			me._dropdown_scrollarea.ggScrollByX(-diffX);
			me._dropdown_scrollarea.ggScrollByY(-diffY);
		}
		me._dropdown_scrollarea__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = me._dropdown_scrollarea.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea.ggDragLastY = me._dropdown_scrollarea.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea__content.onmouseup = me._dropdown_scrollarea__content.mousetouchend;
			me._dropdown_scrollarea__content.ontouchend = me._dropdown_scrollarea__content.mousetouchend;
			me._dropdown_scrollarea__content.onmousemove = me._dropdown_scrollarea__content.mousetouchmove;
			me._dropdown_scrollarea__content.ontouchmove = me._dropdown_scrollarea__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea__content.onpointerup = me._dropdown_scrollarea__content.ontouchend;
				me._dropdown_scrollarea__content.onpointermove = me._dropdown_scrollarea__content.ontouchmove;
			}
		}
		els.onmousedown = me._dropdown_scrollarea__content.mousetouchstart;
		els.ontouchstart = me._dropdown_scrollarea__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._dropdown_scrollarea__content.mousetouchstart;
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(30 * me._dropdown_scrollarea.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.clientWidth - 15;
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.offsetHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea.ggVPercentVisible < 1.0) {
						let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
						me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.clientWidth;
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea.ggVertScrollVisible) {
					skin.updateSize(me._dropdown_scrollarea);
					me._dropdown_scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 169;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._dropdown_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._dropdown_cloner.getFilteredNodes(tourNodes, filter);
			me._dropdown_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._dropdown_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._dropdown_cloner.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner.ggWidth + 'px';
				parameter.height=me._dropdown_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._dropdown_cloner.ggNodeCount = me._dropdown_cloner.ggNumFilterPassed;
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner.parentNode && me._dropdown_cloner.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
			me._dropdown_cloner.ggUpdate();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style.transition='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style.transition='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style.transition='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style.transition='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		me._dropdown_menu_title_background.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['dropdown_menu_title_background']) {
				me.elementMouseOver['dropdown_menu_title_background']=true;
			}
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 1px 3px 1px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgd2lkdGg9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG'+
			'1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIj4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgd2lkdGg9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG'+
			'1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIj4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._thumbnails_toggle=document.createElement('div');
		els=me._thumbnails_toggle__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHk9IjM3LjMzIiB3aWR0aD0iMTAuNjciIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm'+
			'5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeD0iMTYiLz4KICA8cmVjdCB5PSIzNy4zMyIgd2lkdGg9IjEwLjY3IiBoZWlnaHQ9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIHg9IjM3LjMzIi8+CiAgPHJlY3QgeT0iMTYiIHdpZHRoPSIxMC42NyIgaGVpZ2h0PSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiB4PSIxNiIvPgogIDxyZWN0IHk9IjE2IiB3'+
			'aWR0aD0iMTAuNjciIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeD0iMzcuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_toggle__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_toggle__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgcj0iMjciIGN5PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHk9IjM3LjMzIiB3aWR0aD0iMTAuNjciIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm'+
			'5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeD0iMTYiLz4KICA8cmVjdCB5PSIzNy4zMyIgd2lkdGg9IjEwLjY3IiBoZWlnaHQ9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHg9IjM3LjMzIi8+CiAgPHJlY3QgeT0iMTYiIHdpZHRoPSIxMC42NyIgaGVpZ2h0PSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Ut'+
			'd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4PSIxNiIvPgogIDxyZWN0IHk9IjE2IiB3aWR0aD0iMTAuNjciIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeD0iMzcuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_toggle__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_toggle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_toggle.style.transition='';
				if (me._thumbnails_toggle.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_toggle.style.visibility="hidden";
					me._thumbnails_toggle.ggVisible=false;
				}
				else {
					me._thumbnails_toggle.style.visibility=(Number(me._thumbnails_toggle.style.opacity)>0||!me._thumbnails_toggle.style.opacity)?'inherit':'hidden';
					me._thumbnails_toggle.ggVisible=true;
				}
			}
		}
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._thumbnails_toggle.onmouseover=function (e) {
			me._thumbnails_toggle__img.style.visibility='hidden';
			me._thumbnails_toggle__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_toggle']=true;
		}
		me._thumbnails_toggle.onmouseout=function (e) {
			me._thumbnails_toggle__img.style.visibility='inherit';
			me._thumbnails_toggle__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_toggle']=false;
		}
		me._thumbnails_toggle.ggCurrentLogicStateVisible = -1;
		me._thumbnails_toggle.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnails_toggle']) {
				me._thumbnails_toggle__img.style.visibility='hidden';
				me._thumbnails_toggle__imgo.style.visibility='inherit';
				me.elementMouseOver['thumbnails_toggle']=true;
			}
		}
		me._thumbnails_toggle.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnails_toggle);
		el=me._thumbnails_background_blur=document.createElement('div');
		el.ggId="thumbnails_background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_background_blur.style.transition='';
				if (me._thumbnails_background_blur.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_background_blur.style.visibility=(Number(me._thumbnails_background_blur.style.opacity)>0||!me._thumbnails_background_blur.style.opacity)?'inherit':'hidden';
					me._thumbnails_background_blur.ggVisible=true;
				}
				else {
					me._thumbnails_background_blur.style.visibility="hidden";
					me._thumbnails_background_blur.ggVisible=false;
				}
			}
		}
		me._thumbnails_background_blur.logicBlock_visible();
		me._thumbnails_background_blur.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnails_background_blur);
		el=me._thumbnails_fullscreen=document.createElement('div');
		el.ggId="thumbnails_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen.style.transition='';
				if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen.style.visibility=(Number(me._thumbnails_fullscreen.style.opacity)>0||!me._thumbnails_fullscreen.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen.style.visibility="hidden";
					me._thumbnails_fullscreen.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_scroller=document.createElement('div');
		els=me._thumbnails_fs_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_fs_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosX = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_fs_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_fs_scroller.ggScrollPosX >= me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_fs_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosY = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_fs_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_fs_scroller.ggScrollPosY >= me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_fs_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_fs_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
				me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
				me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
				me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnails_fs_scroller__content.onmouseup = null;
			me._thumbnails_fs_scroller__content.onmousemove = null;
			me._thumbnails_fs_scroller__content.ontouchend = null;
			me._thumbnails_fs_scroller__content.ontouchmove = null;
			me._thumbnails_fs_scroller__content.onpointerup = null;
			me._thumbnails_fs_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_fs_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_fs_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_fs_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_fs_scroller.ggDragStartY) > 10) me._thumbnails_fs_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_fs_scroller.ggDragLastX) * me._thumbnails_fs_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_fs_scroller.ggDragLastY) * me._thumbnails_fs_scroller.ggVPercentVisible;
			me._thumbnails_fs_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_fs_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_fs_scroller.ggDragLastX = eventX;
			me._thumbnails_fs_scroller.ggDragLastY = eventY;
			me._thumbnails_fs_scroller.ggScrollByX(-diffX);
			me._thumbnails_fs_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_fs_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = me._thumbnails_fs_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_fs_scroller.ggDragLastY = me._thumbnails_fs_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_fs_scroller__content.onmouseup = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.ontouchend = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.onmousemove = me._thumbnails_fs_scroller__content.mousetouchmove;
			me._thumbnails_fs_scroller__content.ontouchmove = me._thumbnails_fs_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_fs_scroller__content.onpointerup = me._thumbnails_fs_scroller__content.ontouchend;
				me._thumbnails_fs_scroller__content.onpointermove = me._thumbnails_fs_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_fs_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_fs_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_fs_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnails_fs_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 495px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnails_fs_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 495px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnails_fs_scroller.ggScrollPosX = 0;
		me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnails_fs_scroller.ggScrollByXSmooth(30 * me._thumbnails_fs_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnails_fs_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 347px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_fs_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 347px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_fs_scroller.ggScrollPosY = 0;
		me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_fs_scroller.ggScrollByYSmooth(30 * me._thumbnails_fs_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_fs_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_fs_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_scroller.style.transition='';
				if (me._thumbnails_fs_scroller.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_scroller.style.visibility="hidden";
					me._thumbnails_fs_scroller.ggVisible=false;
				}
				else {
					me._thumbnails_fs_scroller.style.visibility=(Number(me._thumbnails_fs_scroller.style.opacity)>0||!me._thumbnails_fs_scroller.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_scroller.ggVisible=true;
				}
			}
		}
		me._thumbnails_fs_scroller.logicBlock_visible();
		me._thumbnails_fs_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosX / me._thumbnails_fs_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosY / me._thumbnails_fs_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggVertScrollVisible = true;
					if (!me._thumbnails_fs_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_fs_scroller.ggHorScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
					if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width - me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width;
					}
					me._thumbnails_fs_scroller__horScrollBg.style.width = me._thumbnails_fs_scroller.ggAvailableWidth + 'px';
					me._thumbnails_fs_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnails_fs_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnails_fs_scroller.ggHPercentVisible > 1.0) me._thumbnails_fs_scroller.ggHPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollWidth = Math.round(me._thumbnails_fs_scroller__horScrollBg.offsetWidth * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller__horScrollFg.style.width = me._thumbnails_fs_scroller.ggScrollWidth + 'px';
					me._thumbnails_fs_scroller.ggScrollPosX = me._thumbnails_fs_scroller.ggScrollPosXPercent * me._thumbnails_fs_scroller.ggAvailableWidth;
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
					if (me._thumbnails_fs_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
						me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
					me._thumbnails_fs_scroller.ggScrollPosX = 0;
					me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnails_fs_scroller.ggVertScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
					if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_fs_scroller__vertScrollBg.style.height = me._thumbnails_fs_scroller.ggAvailableHeight + 'px';
					me._thumbnails_fs_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_fs_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_fs_scroller.ggVPercentVisible > 1.0) me._thumbnails_fs_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollHeight =  Math.round(me._thumbnails_fs_scroller__vertScrollBg.offsetHeight * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller__vertScrollFg.style.height = me._thumbnails_fs_scroller.ggScrollHeight + 'px';
					me._thumbnails_fs_scroller.ggScrollPosY = me._thumbnails_fs_scroller.ggScrollPosYPercent * me._thumbnails_fs_scroller.ggAvailableHeight;
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_fs_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
					me._thumbnails_fs_scroller.ggScrollPosY = 0;
					me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_fs_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_fs_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_fs_scroller);
					me._thumbnails_fs_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_fs_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_fs_cloner.ggUpdating == true) return;
			me._thumbnails_fs_cloner.ggUpdating = true;
			var el=me._thumbnails_fs_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnails_fs_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth) : me._thumbnails_fs_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnails_fs_cloner.offsetLeft) * me._thumbnails_fs_cloner.ggNumRepeat / 100.0) / me._thumbnails_fs_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_fs_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_fs_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_fs_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_fs_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_fs_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_fs_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_fs_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_fs_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_fs_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_fs_cloner.ggNodeCount = me._thumbnails_fs_cloner.ggNumFilterPassed;
			me._thumbnails_fs_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_fs_cloner.parentNode && me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_fs_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_fs_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_fs_cloner.childNodes.length; i++) {
				var child=me._thumbnails_fs_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_fs_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_fs_cloner.ggUpdate();
		}
		me._thumbnails_fs_scroller__content.appendChild(me._thumbnails_fs_cloner);
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_scroller);
		el=me._thumbnails_fs_close=document.createElement('div');
		els=me._thumbnails_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHgyPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgcj0iMjciIGN5PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeDI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeTE9IjIwLjY5Ii8+CiAgPGxpbmUgeDE9IjQzLjMxIiB4Mj0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_close.onmouseover=function (e) {
			me._thumbnails_fs_close__img.style.visibility='hidden';
			me._thumbnails_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_close']=true;
		}
		me._thumbnails_fs_close.onmouseout=function (e) {
			me._thumbnails_fs_close__img.style.visibility='inherit';
			me._thumbnails_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_close']=false;
		}
		me._thumbnails_fs_close.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnails_fs_close']) {
				me._thumbnails_fs_close__img.style.visibility='hidden';
				me._thumbnails_fs_close__imgo.style.visibility='inherit';
				me.elementMouseOver['thumbnails_fs_close']=true;
			}
		}
		me._thumbnails_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_close);
		me.divSkin.appendChild(me._thumbnails_fullscreen);
		el=me._thumbnails_fullscreen_phone=document.createElement('div');
		el.ggId="thumbnails_fullscreen_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen_phone.style.transition='';
				if (me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen_phone.style.visibility=(Number(me._thumbnails_fullscreen_phone.style.opacity)>0||!me._thumbnails_fullscreen_phone.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen_phone.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen_phone.style.visibility="hidden";
					me._thumbnails_fullscreen_phone.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen_phone.logicBlock_visible();
		me._thumbnails_fullscreen_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_scroller_phone=document.createElement('div');
		els=me._thumbnails_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 50%;';
		hs+='margin-left : -63.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnails_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnails_scroller_phone.ggScrollPosX = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnails_scroller_phone.ggScrollPosX = Math.max(me._thumbnails_scroller_phone.ggScrollPosX, 0);
			me._thumbnails_scroller_phone.ggScrollPosX = Math.min(me._thumbnails_scroller_phone.ggScrollPosX, me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__horScrollFg.style.left = me._thumbnails_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosX / (me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__content.style.left = -(Math.round((me._thumbnails_scroller_phone.ggContentWidth * (1.0 - me._thumbnails_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosXPercent = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft / me._thumbnails_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnails_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_scroller_phone.ggScrollPosX >= me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnails_scroller_phone.ggScrollPosX = Math.min(me._thumbnails_scroller_phone.ggScrollPosX, me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnails_scroller_phone.ggScrollPosX = Math.max(me._thumbnails_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller_phone__horScrollFg.style.left = me._thumbnails_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosX / (me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__content.style.left = -(Math.round((me._thumbnails_scroller_phone.ggContentWidth * (1.0 - me._thumbnails_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosXPercent = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft / me._thumbnails_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnails_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnails_scroller_phone.ggScrollPosY = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnails_scroller_phone.ggScrollPosY = Math.max(me._thumbnails_scroller_phone.ggScrollPosY, 0);
			me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosYPercent = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop / me._thumbnails_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnails_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_scroller_phone.ggScrollPosY >= me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnails_scroller_phone.ggScrollPosY = Math.max(me._thumbnails_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosYPercent = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop / me._thumbnails_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_scroller_phone.ggHPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_scroller_phone.clientWidth - (me._thumbnails_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_scroller_phone.clientWidth - (me._thumbnails_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnails_scroller_phone.ggHPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_scroller_phone.clientHeight - (me._thumbnails_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_scroller_phone.clientHeight - (me._thumbnails_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_scroller_phone.ggDragInertiaX *= 0.65;
				me._thumbnails_scroller_phone.ggDragInertiaY *= 0.65;
				me._thumbnails_scroller_phone.ggScrollByX(me._thumbnails_scroller_phone.ggDragInertiaX);
				me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnails_scroller_phone__content.onmouseup = null;
			me._thumbnails_scroller_phone__content.onmousemove = null;
			me._thumbnails_scroller_phone__content.ontouchend = null;
			me._thumbnails_scroller_phone__content.ontouchmove = null;
			me._thumbnails_scroller_phone__content.onpointerup = null;
			me._thumbnails_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnails_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_scroller_phone.ggDragStartY) > 10) me._thumbnails_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_scroller_phone.ggDragLastX) * me._thumbnails_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_scroller_phone.ggDragLastY) * me._thumbnails_scroller_phone.ggVPercentVisible;
			me._thumbnails_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnails_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnails_scroller_phone.ggDragLastX = eventX;
			me._thumbnails_scroller_phone.ggDragLastY = eventY;
			me._thumbnails_scroller_phone.ggScrollByX(-diffX);
			me._thumbnails_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnails_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_scroller_phone.ggDragLastX = me._thumbnails_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_scroller_phone.ggDragLastY = me._thumbnails_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_scroller_phone__content.onmouseup = me._thumbnails_scroller_phone__content.mousetouchend;
			me._thumbnails_scroller_phone__content.ontouchend = me._thumbnails_scroller_phone__content.mousetouchend;
			me._thumbnails_scroller_phone__content.onmousemove = me._thumbnails_scroller_phone__content.mousetouchmove;
			me._thumbnails_scroller_phone__content.ontouchmove = me._thumbnails_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_scroller_phone__content.onpointerup = me._thumbnails_scroller_phone__content.ontouchend;
				me._thumbnails_scroller_phone__content.onpointermove = me._thumbnails_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnails_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 356px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 356px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_scroller_phone.ggScrollPosY = 0;
		me._thumbnails_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller_phone.ggDragInertiaY *= 0.65;
					me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_scroller_phone.ggDragLastY;
				me._thumbnails_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnails_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnails_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller_phone.ggDragInertiaY *= 0.65;
					me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_scroller_phone.ggDragLastY;
				me._thumbnails_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnails_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnails_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_scroller_phone.ggScrollByYSmooth(30 * me._thumbnails_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_scroller_phone";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 1px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_scroller_phone.style.transition='';
				if (me._thumbnails_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_scroller_phone.style.visibility=(Number(me._thumbnails_scroller_phone.style.opacity)>0||!me._thumbnails_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnails_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnails_scroller_phone.style.visibility="hidden";
					me._thumbnails_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnails_scroller_phone.logicBlock_visible();
		me._thumbnails_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnails_scroller_phone.ggScrollPosY / me._thumbnails_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnails_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnails_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnails_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnails_scroller_phone.ggVertScrollVisible) {
					me._thumbnails_scroller_phone.ggAvailableWidth = me._thumbnails_scroller_phone.clientWidth - 8;
					if (me._thumbnails_scroller_phone.ggHorScrollVisible) {
						me._thumbnails_scroller_phone.ggAvailableHeight = me._thumbnails_scroller_phone.clientHeight - 8;
						me._thumbnails_scroller_phone.ggAvailableHeightWithScale = me._thumbnails_scroller_phone.getBoundingClientRect().height - me._thumbnails_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_scroller_phone.ggAvailableHeight = me._thumbnails_scroller_phone.clientHeight;
						me._thumbnails_scroller_phone.ggAvailableHeightWithScale = me._thumbnails_scroller_phone.getBoundingClientRect().height;
						me._thumbnails_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_scroller_phone__vertScrollBg.style.height = me._thumbnails_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnails_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_scroller_phone.ggVPercentVisible > 1.0) me._thumbnails_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnails_scroller_phone.ggScrollHeight =  Math.round(me._thumbnails_scroller_phone__vertScrollBg.offsetHeight * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone__vertScrollFg.style.height = me._thumbnails_scroller_phone.ggScrollHeight + 'px';
					me._thumbnails_scroller_phone.ggScrollPosY = me._thumbnails_scroller_phone.ggScrollPosYPercent * me._thumbnails_scroller_phone.ggAvailableHeight;
					me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnails_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_scroller_phone.ggAvailableWidth = me._thumbnails_scroller_phone.clientWidth;
					me._thumbnails_scroller_phone.ggScrollPosY = 0;
					me._thumbnails_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnails_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_scroller_phone);
					me._thumbnails_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnails_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._thumbnails_fullscreen_phone.appendChild(me._thumbnails_scroller_phone);
		el=me._thumbnails_fs_phone_close=document.createElement('div');
		els=me._thumbnails_fs_phone_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHgyPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_phone_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_phone_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgcj0iMjciIGN5PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeDI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeTE9IjIwLjY5Ii8+CiAgPGxpbmUgeDE9IjQzLjMxIiB4Mj0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_phone_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_phone_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_phone_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_phone_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_phone_close.onmouseover=function (e) {
			me._thumbnails_fs_phone_close__img.style.visibility='hidden';
			me._thumbnails_fs_phone_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_phone_close']=true;
		}
		me._thumbnails_fs_phone_close.onmouseout=function (e) {
			me._thumbnails_fs_phone_close__img.style.visibility='inherit';
			me._thumbnails_fs_phone_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_phone_close']=false;
		}
		me._thumbnails_fs_phone_close.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnails_fs_phone_close']) {
				me._thumbnails_fs_phone_close__img.style.visibility='hidden';
				me._thumbnails_fs_phone_close__imgo.style.visibility='inherit';
				me.elementMouseOver['thumbnails_fs_phone_close']=true;
			}
		}
		me._thumbnails_fs_phone_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen_phone.appendChild(me._thumbnails_fs_phone_close);
		me.divSkin.appendChild(me._thumbnails_fullscreen_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._menu_button.logicBlock_position();
		me._screentint.logicBlock_alpha();
		me._controller.logicBlock_position();
		me._controller.logicBlock_alpha();
		me._controller_bg.logicBlock_position();
		me._controller_bg.logicBlock_size();
		me._controller_bg.logicBlock_visible();
		me._controller_slider.logicBlock_position();
		me._fullscreen_buttons.logicBlock_position();
		me._fullscreen_buttons.logicBlock_visible();
		me._fullscreen.logicBlock_alpha();
		me._fullscreen_off.logicBlock_alpha();
		me._gyro.logicBlock_position();
		me._gyro.logicBlock_visible();
		me._gyro_on.logicBlock_alpha();
		me._gyro_off.logicBlock_alpha();
		me._projection_buttons.logicBlock_position();
		me._projection_buttons.logicBlock_visible();
		me._rectilinear.logicBlock_alpha();
		me._fisheye.logicBlock_alpha();
		me._stereographic.logicBlock_alpha();
		me._thumbnail.logicBlock_position();
		me._thumbnail.logicBlock_visible();
		me._thumbnail_hide_button_show.logicBlock_alpha();
		me._thumbnail_show_button_show.logicBlock_alpha();
		me._info.logicBlock_position();
		me._info.logicBlock_visible();
		me._autorotate_buttons.logicBlock_position();
		me._autorotate_buttons.logicBlock_visible();
		me._autorotate_start.logicBlock_alpha();
		me._autorotate_stop.logicBlock_alpha();
		me._zoomout.logicBlock_visible();
		me._zoomin.logicBlock_visible();
		me._thumbnail_menu.logicBlock_position();
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu_mobile.logicBlock_position();
		me._thumbnail_menu_mobile.logicBlock_visible();
		me._thumbnail_menu_mobile.logicBlock_alpha();
		me._web_page.logicBlock_visible();
		me._userdata.logicBlock_visible();
		me._information.logicBlock_visible();
		me._image_popup.logicBlock_visible();
		me._popup_image.logicBlock_visible();
		me._video_popup_file.logicBlock_visible();
		me._popup_video_file.logicBlock_visible();
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._video_popup_controls_file.logicBlock_visible();
		me._video_popup_url.logicBlock_visible();
		me._popup_video_url.logicBlock_visible();
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me._video_popup_controls_url.logicBlock_visible();
		me._video_popup_vimeo.logicBlock_visible();
		me._popup_video_vimeo.logicBlock_visible();
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._video_popup_youtube.logicBlock_visible();
		me._popup_video_youtube.logicBlock_visible();
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		me.__360image_gyro.logicBlock_visible();
		me.__360image_gyro.logicBlock_alpha();
		me.__360image.logicBlock_position();
		me.__360image.logicBlock_scaling();
		me._phone2.logicBlock_scaling();
		me._phone3.logicBlock_scaling();
		me._close.logicBlock_visible();
		me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_background_blur.logicBlock_visible();
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fs_scroller.logicBlock_visible();
		me._thumbnails_fullscreen_phone.logicBlock_visible();
		me._thumbnails_scroller_phone.logicBlock_visible();
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
				me._thumbnail_cloner_mobile.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('autorotatechanged', function(event) {
			me._autorotate_start.logicBlock_alpha();
			me._autorotate_stop.logicBlock_alpha();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
				me._dropdown_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
				me._thumbnail_cloner_mobile.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._controller.logicBlock_alpha();
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
			me._fullscreen_buttons.logicBlock_position();
			me._fullscreen_buttons.logicBlock_visible();
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
			me._projection_buttons.logicBlock_position();
			me._projection_buttons.logicBlock_visible();
			me._thumbnail.logicBlock_position();
			me._thumbnail.logicBlock_visible();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			me._autorotate_buttons.logicBlock_position();
			me._autorotate_buttons.logicBlock_visible();
			me._autorotate_start.logicBlock_alpha();
			me._autorotate_stop.logicBlock_alpha();
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._thumbnail_menu_mobile.logicBlock_position();
			me._thumbnail_menu_mobile.logicBlock_visible();
			me._thumbnail_menu_mobile.logicBlock_alpha();
			me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange();
			me._web_page.logicBlock_visible();
			me._userdata.logicBlock_visible();
			me._information.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._seekbar_file.ggConnectToMediaEl();
			me._video_popup_url.logicBlock_visible();
			me._popup_video_url.logicBlock_visible();
			me._video_popup_controls_url.logicBlock_visible();
			me._seekbar_url.ggConnectToMediaEl();
			me._video_popup_vimeo.logicBlock_visible();
			me._popup_video_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me.__360image_gyro.logicBlock_visible();
			me.__360image_gyro.logicBlock_alpha();
			me.__360image.logicBlock_position();
			me.__360image.logicBlock_scaling();
			me._phone2.logicBlock_scaling();
			me._phone3.logicBlock_scaling();
			me._close.logicBlock_visible();
			me._dropdown_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fs_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
				me._dropdown_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
				me._thumbnail_cloner_mobile.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
				me._thumbnail_cloner_mobile.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			me._menu_button.logicBlock_position();
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._controller.logicBlock_alpha();
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			me._fullscreen_buttons.logicBlock_position();
			me._fullscreen_buttons.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getIsMobile() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			me._projection_buttons.logicBlock_position();
			me._projection_buttons.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			me._thumbnail.logicBlock_position();
			me._thumbnail.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("1"));
			}
			me._autorotate_buttons.logicBlock_position();
			me._autorotate_buttons.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_mobile.ggUpdatePosition();
			me._thumbnail_menu_mobile.logicBlock_position();
			me._thumbnail_menu_mobile.logicBlock_visible();
			me._thumbnail_menu_mobile.logicBlock_alpha();
			me._web_page.logicBlock_visible();
			me._userdata.logicBlock_visible();
			me._information.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._video_popup_url.logicBlock_visible();
			me._popup_video_url.logicBlock_visible();
			me._video_popup_controls_url.logicBlock_visible();
			me._video_popup_vimeo.logicBlock_visible();
			me._popup_video_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me.__360image_gyro.logicBlock_visible();
			me.__360image.logicBlock_position();
			me.__360image.logicBlock_scaling();
			me._phone2.logicBlock_scaling();
			me._phone3.logicBlock_scaling();
			me._close.logicBlock_visible();
			me._dropdown_scrollarea.ggUpdatePosition();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.ggUpdatePosition();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.ggUpdatePosition();
			me._thumbnails_scroller_phone.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_off.logicBlock_alpha();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_off.logicBlock_alpha();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
		});
		player.addListener('projectionchanged', function(event) {
			me._rectilinear.logicBlock_alpha();
			me._fisheye.logicBlock_alpha();
			me._stereographic.logicBlock_alpha();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._screentint.logicBlock_alpha();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_mobile.logicBlock_visible();
			me._thumbnail_menu_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_autorotate', function(event) {
			me._autorotate_buttons.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen_buttons.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._gyro.logicBlock_visible();
			me.__360image_gyro.logicBlock_visible();
		});
		player.addListener('varchanged_opt_hotspot_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._info.logicBlock_visible();
		});
		player.addListener('varchanged_opt_projection', function(event) {
			me._projection_buttons.logicBlock_visible();
		});
		player.addListener('varchanged_opt_thumbnail', function(event) {
			me._thumbnail.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu_mobile.logicBlock_visible();
		});
		player.addListener('varchanged_opt_thumbnail_tooltip', function(event) {
			for(var i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
				me._thumbnail_cloner_mobile.ggInstances[i].ggEvent_varchanged_opt_thumbnail_tooltip(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_varchanged_opt_thumbnail_tooltip(event);
			}
		});
		player.addListener('varchanged_opt_url', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_opt_url();
				}
			}
		});
		player.addListener('varchanged_opt_zoom', function(event) {
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
		});
		player.addListener('varchanged_pos_360image', function(event) {
			me.__360image.logicBlock_position();
			me.__360image.logicBlock_scaling();
			me._phone2.logicBlock_scaling();
			me._phone3.logicBlock_scaling();
		});
		player.addListener('varchanged_pos_autorotate', function(event) {
			me._autorotate_buttons.logicBlock_position();
		});
		player.addListener('varchanged_pos_controller', function(event) {
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
		});
		player.addListener('varchanged_pos_fullscreen', function(event) {
			me._fullscreen_buttons.logicBlock_position();
		});
		player.addListener('varchanged_pos_gyro', function(event) {
			me._gyro.logicBlock_position();
		});
		player.addListener('varchanged_pos_information', function(event) {
			me._info.logicBlock_position();
		});
		player.addListener('varchanged_pos_projection', function(event) {
			me._projection_buttons.logicBlock_position();
		});
		player.addListener('varchanged_pos_thumbnail', function(event) {
			me._thumbnail.logicBlock_position();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_360image_once', function(event) {
			me.__360image_gyro.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._information.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(event) {
			me._screentint.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnail_menu_mobile', function(event) {
			me._screentint.logicBlock_alpha();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._thumbnail_menu_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnail_menu_show', function(event) {
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_timer', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_timer();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_timer();
				}
			}
			me._controller.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_userdata', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu_mobile.logicBlock_position();
			me._userdata.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_file', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_url', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._video_popup_url.logicBlock_visible();
			me._popup_video_url.logicBlock_visible();
			me._video_popup_controls_url.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_vimeo', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._video_popup_vimeo.logicBlock_visible();
			me._popup_video_vimeo.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_youtube', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_website', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_website();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_website();
				}
			}
			me._menu_button.logicBlock_position();
			me._screentint.logicBlock_alpha();
			me._controller.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._web_page.logicBlock_visible();
			me._close.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._thumbnail_cloner_mobile.ggUpdate();
			me._dropdown_cloner.ggUpdate();
			me._thumbnails_fs_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._dropdown_menu_text=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_menu_text;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #848484;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_text.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text.style.transition='background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor();
		me._dropdown_menu_text.onclick=function (e) {
			if (me._dropdown_menu_text.isDragging()) return;
			if (
				(
					((me._dropdown_menu_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background.onclick.call(skin._dropdown_menu_title_background);
		}
		me._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		me._dropdown_menu_text.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['dropdown_menu_text']) {
				me.elementMouseOver['dropdown_menu_text']=true;
			}
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_checkmark;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwID'+
			'EzMCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true)) || 
				((me._dropdown_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style.transition='opacity 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.logicBlock_alpha();
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
		me._dropdown_menu_text.logicBlock_backgroundcolor();
		me._dropdown_checkmark.logicBlock_alpha();
			me.ggEvent_changenode=function(event) {
				me._dropdown_menu_text.logicBlock_backgroundcolor();
				me._dropdown_checkmark.logicBlock_alpha();
				me._dropdown_checkmark.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._dropdown_checkmark.logicBlock_alpha();
			};
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_node_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_node_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_node_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_node_image_phone.onclick=function (e) {
			if (me._thumbnail_node_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnail_node_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_node_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumbnail_node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_title_phone.style.transition='';
				if (me._thumbnail_node_title_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_title_phone.style.visibility="hidden";
					me._thumbnail_node_title_phone.ggVisible=false;
				}
				else {
					me._thumbnail_node_title_phone.style.visibility=(Number(me._thumbnail_node_title_phone.style.opacity)>0||!me._thumbnail_node_title_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_title_phone.ggVisible=true;
				}
			}
		}
		me._thumbnail_node_title_phone.logicBlock_visible();
		me._thumbnail_node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_title_phone);
		el=me._thumbnail_node_active_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_active_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_active_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_active_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_active_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnail_node_active_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_active_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_active_phone.style.transition='';
				if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_active_phone.style.visibility=(Number(me._thumbnail_node_active_phone.style.opacity)>0||!me._thumbnail_node_active_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_active_phone.ggVisible=true;
				}
				else {
					me._thumbnail_node_active_phone.style.visibility="hidden";
					me._thumbnail_node_active_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_active_phone);
		me.__div.appendChild(me._thumbnail_node_image_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMxIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBjbGFzcz0ic3QyIiBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited_phone);
		me._thumbnail_node_title_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
				me._thumbnail_node_active_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_fs_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_fs_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_node_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_fs_node_image.onclick=function (e) {
			if (me._thumbnails_fs_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_node_image.onmouseover=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=true;
			me._thumbnails_fs_node_title.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.onmouseout=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=false;
			me._thumbnails_fs_node_title.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnails_fs_node_image']) {
				me.elementMouseOver['thumbnails_fs_node_image']=true;
				me._thumbnails_fs_node_title.logicBlock_visible();
			}
		}
		me._thumbnails_fs_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_fs_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_fs_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_fs_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_fs_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title != "")) && 
				((me.elementMouseOver['thumbnails_fs_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_title.style.transition='';
				if (me._thumbnails_fs_node_title.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_title.style.visibility=(Number(me._thumbnails_fs_node_title.style.opacity)>0||!me._thumbnails_fs_node_title.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_title.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_title.style.visibility="hidden";
					me._thumbnails_fs_node_title.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_title.logicBlock_visible();
		me._thumbnails_fs_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_title);
		el=me._thumbnails_fs_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_fs_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_active.style.transition='';
				if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_active.style.visibility=(Number(me._thumbnails_fs_node_active.style.opacity)>0||!me._thumbnails_fs_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_active.style.visibility="hidden";
					me._thumbnails_fs_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_active);
		me.__div.appendChild(me._thumbnails_fs_node_image);
		el=me._thumbnails_fs_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMxIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBjbGFzcz0ic3QyIiBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_fs_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_fs_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_visited.style.transition='';
				if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_visited.style.visibility=(Number(me._thumbnails_fs_visited.style.opacity)>0||!me._thumbnails_fs_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_visited.ggVisible=true;
				}
				else {
					me._thumbnails_fs_visited.style.visibility="hidden";
					me._thumbnails_fs_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_visited.logicBlock_visible();
		me._thumbnails_fs_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_fs_visited);
		me._thumbnails_fs_node_title.logicBlock_visible();
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_visited.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
				me._thumbnails_fs_node_active.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnail_cloner_mobile_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage_mobile.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage_mobile);
		el=me._checkmark_tick_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwID'+
			'EzMCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick_mobile__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick_mobile.ggElementNodeId()) == true)) || 
				((me._checkmark_tick_mobile.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mobile.style.transition='';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mobile.style.visibility=(Number(me._checkmark_tick_mobile.style.opacity)>0||!me._checkmark_tick_mobile.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mobile.ggVisible=true;
				}
				else {
					me._checkmark_tick_mobile.style.visibility="hidden";
					me._checkmark_tick_mobile.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_mobile.logicBlock_visible();
		me._checkmark_tick_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick_mobile);
		el=me._thumbnail_active_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_active_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active_mobile.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active_mobile'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_mobile.style.transition='border-color 0s';
				if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_mobile.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active_mobile.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active_mobile.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor();
		me._thumbnail_active_mobile.onclick=function (e) {
			if (me._thumbnail_active_mobile.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_mobile', false);
		}
		me._thumbnail_active_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=true;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = -1;
		me._thumbnail_active_mobile.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_active_mobile']) {
				me.elementMouseOver['thumbnail_active_mobile']=true;
				me._thumbnail_title_mobile.logicBlock_alpha();
			}
		}
		me._thumbnail_active_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title_mobile.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_mobile.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active_mobile'] == true)) && 
				((player._(me.ggUserdata.title) != "")) && 
				((player.getVariableValue('opt_thumbnail_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title_mobile.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title_mobile.style.visibility=me._thumbnail_title_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_title_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title_mobile.style.opacity == 0.0) { me._thumbnail_title_mobile.style.visibility="hidden"; } }, 505);
					me._thumbnail_title_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_title_mobile.logicBlock_alpha();
		me._thumbnail_title_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active_mobile.appendChild(me._thumbnail_title_mobile);
		me.__div.appendChild(me._thumbnail_active_mobile);
		me._checkmark_tick_mobile.logicBlock_visible();
		me._thumbnail_active_mobile.logicBlock_bordercolor();
		me._thumbnail_title_mobile.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title_mobile.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._checkmark_tick_mobile.logicBlock_visible();
				me._checkmark_tick_mobile.logicBlock_visible();
				me._thumbnail_active_mobile.logicBlock_bordercolor();
				me._thumbnail_title_mobile.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._checkmark_tick_mobile.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title_mobile.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_thumbnail_tooltip=function(event) {
				me._thumbnail_title_mobile.logicBlock_alpha();
			};
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwID'+
			'EzMCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style.transition='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.onclick=function (e) {
			if (me._thumbnail_active.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		me._thumbnail_active.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['thumbnail_active']) {
				me.elementMouseOver['thumbnail_active']=true;
				me._thumbnail_title.logicBlock_alpha();
			}
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((player._(me.ggUserdata.title) != "")) && 
				((player.getVariableValue('opt_thumbnail_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
		me._checkmark_tick.logicBlock_visible();
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_title.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_visible();
				me._thumbnail_active.logicBlock_bordercolor();
				me._thumbnail_title.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_thumbnail_tooltip=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube.style.visibility=me._ht_video_youtube.ggVisible?'inherit':'hidden';
					me._ht_video_youtube.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube.style.opacity == 0.0) { me._ht_video_youtube.style.visibility="hidden"; } }, 505);
					me._ht_video_youtube.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube.logicBlock_alpha();
		me._ht_video_youtube.onclick=function (e) {
			skin._popup_video_youtube.ggInitMedia(player._(me.hotspot.url));
			player.setVariableValue('vis_video_popup_youtube', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggCurrentLogicStateVisible = -1;
		me._ht_video_youtube.ggCurrentLogicStateAlpha = -1;
		me._ht_video_youtube.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_youtube']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_video_youtube']=true;
				me._tt_ht_video_youtube.logicBlock_visible();
			}
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_image=document.createElement('div');
		els=me._ht_video_youtube_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyAgICBjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4z'+
			'LDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSAgICBDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQgICAgYy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCAgICBDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40ICAgIEMtMTg5LjQsNDA0LjUtMTgzLDQx'+
			'MS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41ICAgIGMtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkgICAgYzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MjQuNHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguOCw0MDUuOWwxMi04LjRj'+
			'MC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMgICAgQy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2ICAgIGMtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSAgICBDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIu'+
			'NiAgICB6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_image.onmouseover=function (e) {
			me._ht_video_youtube_image__img.style.visibility='hidden';
			me._ht_video_youtube_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_image']=true;
		}
		me._ht_video_youtube_image.onmouseout=function (e) {
			me._ht_video_youtube_image__img.style.visibility='inherit';
			me._ht_video_youtube_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_image']=false;
		}
		me._ht_video_youtube_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_youtube_image']) {
				me._ht_video_youtube_image__img.style.visibility='hidden';
				me._ht_video_youtube_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_youtube_image']=true;
			}
		}
		me._ht_video_youtube_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_image);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_youtube.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_youtube.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_youtube.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_youtube.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_youtube.style.top='-47px';
				}
				else {
					me._tt_ht_video_youtube.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_youtube.style.top='21px';
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_position();
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible();
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha();
		me._tt_ht_video_youtube.logicBlock_position();
		me._tt_ht_video_youtube.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._tt_ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._tt_ht_video_youtube.logicBlock_position();
				me._tt_ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_video_youtube.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_video_youtube.ggUpdateConditionTimer();
				me._ht_video_youtube_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
				else {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo.style.visibility=me._ht_video_vimeo.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo.style.opacity == 0.0) { me._ht_video_vimeo.style.visibility="hidden"; } }, 505);
					me._ht_video_vimeo.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_alpha();
		me._ht_video_vimeo.onclick=function (e) {
			skin._popup_video_vimeo.ggInitMedia(player._(me.hotspot.url));
			player.setVariableValue('vis_video_popup_vimeo', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._tt_ht_video_vimeo.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggCurrentLogicStateVisible = -1;
		me._ht_video_vimeo.ggCurrentLogicStateAlpha = -1;
		me._ht_video_vimeo.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_vimeo']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_video_vimeo']=true;
				me._tt_ht_video_vimeo.logicBlock_visible();
			}
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_image=document.createElement('div');
		els=me._ht_video_vimeo_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyAgICBjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4z'+
			'LDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSAgICBDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQgICAgYy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCAgICBDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40ICAgIEMtMTg5LjQsNDA0LjUtMTgzLDQx'+
			'MS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41ICAgIGMtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkgICAgYzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MjQuNHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguOCw0MDUuOWwxMi04LjRj'+
			'MC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMgICAgQy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2ICAgIGMtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSAgICBDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIu'+
			'NiAgICB6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_image.onmouseover=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='hidden';
			me._ht_video_vimeo_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_image']=true;
		}
		me._ht_video_vimeo_image.onmouseout=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='inherit';
			me._ht_video_vimeo_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_image']=false;
		}
		me._ht_video_vimeo_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_vimeo_image']) {
				me._ht_video_vimeo_image__img.style.visibility='hidden';
				me._ht_video_vimeo_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_vimeo_image']=true;
			}
		}
		me._ht_video_vimeo_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_image);
		el=me._tt_ht_video_vimeo=document.createElement('div');
		els=me._tt_ht_video_vimeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_vimeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_vimeo.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_vimeo.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_vimeo.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_vimeo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_vimeo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_vimeo.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_vimeo.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_vimeo.style.top='-47px';
				}
				else {
					me._tt_ht_video_vimeo.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_vimeo.style.top='21px';
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_position();
		me._tt_ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_vimeo.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_vimeo.ggVisible=true;
				}
				else {
					me._tt_ht_video_vimeo.style.visibility="hidden";
					me._tt_ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_visible();
		me._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._tt_ht_video_vimeo);
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha();
		me._tt_ht_video_vimeo.logicBlock_position();
		me._tt_ht_video_vimeo.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._tt_ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._tt_ht_video_vimeo.logicBlock_position();
				me._tt_ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_video_vimeo.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_video_vimeo.ggUpdateConditionTimer();
				me._ht_video_vimeo_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
				else {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url.style.visibility=me._ht_video_url.ggVisible?'inherit':'hidden';
					me._ht_video_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url.style.opacity == 0.0) { me._ht_video_url.style.visibility="hidden"; } }, 505);
					me._ht_video_url.style.opacity=0;
				}
			}
		}
		me._ht_video_url.logicBlock_alpha();
		me._ht_video_url.onclick=function (e) {
			skin._popup_video_url.ggInitMedia(player._(me.hotspot.url));
			player.setVariableValue('vis_video_popup_url', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._tt_ht_video_url.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggCurrentLogicStateVisible = -1;
		me._ht_video_url.ggCurrentLogicStateAlpha = -1;
		me._ht_video_url.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_url']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_video_url']=true;
				me._tt_ht_video_url.logicBlock_visible();
			}
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_image=document.createElement('div');
		els=me._ht_video_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyAgICBjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4z'+
			'LDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSAgICBDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQgICAgYy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCAgICBDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40ICAgIEMtMTg5LjQsNDA0LjUtMTgzLDQx'+
			'MS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41ICAgIGMtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkgICAgYzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MjQuNHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguOCw0MDUuOWwxMi04LjRj'+
			'MC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMgICAgQy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2ICAgIGMtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSAgICBDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIu'+
			'NiAgICB6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_image.onmouseover=function (e) {
			me._ht_video_url_image__img.style.visibility='hidden';
			me._ht_video_url_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_image']=true;
		}
		me._ht_video_url_image.onmouseout=function (e) {
			me._ht_video_url_image__img.style.visibility='inherit';
			me._ht_video_url_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_image']=false;
		}
		me._ht_video_url_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_url_image']) {
				me._ht_video_url_image__img.style.visibility='hidden';
				me._ht_video_url_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_url_image']=true;
			}
		}
		me._ht_video_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_image);
		el=me._tt_ht_video_url=document.createElement('div');
		els=me._tt_ht_video_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_url.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_url.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_url.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_url.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_url.style.top='-47px';
				}
				else {
					me._tt_ht_video_url.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_url.style.top='21px';
				}
			}
		}
		me._tt_ht_video_url.logicBlock_position();
		me._tt_ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url.ggVisible=true;
				}
				else {
					me._tt_ht_video_url.style.visibility="hidden";
					me._tt_ht_video_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url.logicBlock_visible();
		me._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._tt_ht_video_url);
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha();
		me._tt_ht_video_url.logicBlock_position();
		me._tt_ht_video_url.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_video_url.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._tt_ht_video_url.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._tt_ht_video_url.logicBlock_position();
				me._tt_ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_video_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_video_url.ggUpdateConditionTimer();
				me._ht_video_url_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
				else {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file.style.opacity == 0.0) { me._ht_video_file.style.visibility="hidden"; } }, 505);
					me._ht_video_file.style.opacity=0;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha();
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('vis_video_popup_file', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggCurrentLogicStateVisible = -1;
		me._ht_video_file.ggCurrentLogicStateAlpha = -1;
		me._ht_video_file.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_file']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_video_file']=true;
				me._tt_ht_video_file.logicBlock_visible();
			}
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_image=document.createElement('div');
		els=me._ht_video_file_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyAgICBjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4z'+
			'LDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSAgICBDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQgICAgYy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCAgICBDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40ICAgIEMtMTg5LjQsNDA0LjUtMTgzLDQx'+
			'MS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41ICAgIGMtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkgICAgYzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MjQuNHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguOCw0MDUuOWwxMi04LjRj'+
			'MC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMgICAgQy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2ICAgIGMtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdG'+
			'ggZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSAgICBDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIu'+
			'NiAgICB6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_image.onmouseover=function (e) {
			me._ht_video_file_image__img.style.visibility='hidden';
			me._ht_video_file_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_image']=true;
		}
		me._ht_video_file_image.onmouseout=function (e) {
			me._ht_video_file_image__img.style.visibility='inherit';
			me._ht_video_file_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_image']=false;
		}
		me._ht_video_file_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_video_file_image']) {
				me._ht_video_file_image__img.style.visibility='hidden';
				me._ht_video_file_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_video_file_image']=true;
			}
		}
		me._ht_video_file_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_image);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_file.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_file.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_file.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_file.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_file.style.top='-47px';
				}
				else {
					me._tt_ht_video_file.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_file.style.top='21px';
				}
			}
		}
		me._tt_ht_video_file.logicBlock_position();
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible();
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha();
		me._tt_ht_video_file.logicBlock_position();
		me._tt_ht_video_file.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_video_file.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._tt_ht_video_file.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._tt_ht_video_file.logicBlock_position();
				me._tt_ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_video_file.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_video_file.ggUpdateConditionTimer();
				me._ht_video_file_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.logicBlock_alpha();
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('vis_image_popup', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggCurrentLogicStateVisible = -1;
		me._ht_image.ggCurrentLogicStateAlpha = -1;
		me._ht_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_image']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_image']=true;
				me._tt_ht_image.logicBlock_visible();
			}
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTk2LjMsNDE0LjdoNDIuN3YtNDRoLTQyLjdWNDE0Ljd6IE0tMTU1LjUsNDEyLjlILTE4M2wxOS0xOC42YzAuMy0wLjMsMC42LTAuNCwxLTAuNCAgICBjMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQgICAgQy0xNjYuOCwzNzcuOC0xNjUuMSwzNzYtMTYyLjksMzc2eiBNLTE5NC41LDM5Ny44bDkuNy05LjRjMC4zLTAuMywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsMTEuMiwxMC45bC0xMy45LDEzLjZo'+
			'LTkgICAgTC0xOTQuNSwzOTcuOEwtMTk0LjUsMzk3Ljh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICAgUy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3YzAtMS4zLDEtMi4zLDIuMy0yLjNoNDYuNCAgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0wtMTQ5LjUsNDI1LjVMLTE0OS41LDQyNS41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz'+
			'4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNTEuOCwzNjYuMmgtNDYuNGMtMS4zLDAtMi4zLDEtMi4zLDIuM3Y1N2MwLDEuMywxLDIuMywyLjMsMi4zaDQ2LjRjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNTcgICAgQy0xNDkuNSwzNjcuMi0xNTAuNSwzNjYuMi0xNTEuOCwzNjYuMnogTS0xNTMuNyw0MTQuN2gtNDIuN3YtNDRoNDIuN1Y0MTQuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iLTE2Mi45IiBjeT0iMzc5LjkiIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzEuNywzOTkuM2wtMTEuMi0xMC45Yy0wLjMtMC4zLTAu'+
			'Ni0wLjQtMS0wLjRzLTAuNywwLjEtMSwwLjRsLTkuNyw5LjR2MTUuMWg5TC0xNzEuNywzOTkuM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjMsMzkzLjljLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE5LDE4LjZoMjcuNXYtMTIuMmwtNi41LTYuNEMtMTYyLjIsMzk0LTE2Mi42LDM5My45LTE2MywzOTMuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTk4LjcsNDE2LjZoNDcuNHYtNDguOWgtNDcuNFY0MTYuNnogTS0xNTMuMyw0MTQuNmgtMzAuNmwyMS4xLTIwLjZjMC4zLTAuMywwLjctMC41LDEuMS0wLjUgICAgYzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNCAgICBDLTE2NS45LDM3NS42LTE2NCwzNzMuNi0xNjEuNSwzNzMuNnogTS0xOTYuNywzOTcuOWwxMC43LTEwLjVjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDEy'+
			'LjQsMTIuMmwtMTUuNCwxNS4xaC0xMCAgICBMLTE5Ni43LDM5Ny45TC0xOTYuNywzOTcuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICAgUy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS42Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYgICAgYzEuNCwwLDIuNiwxLjEsMi42LDIuNkwtMTQ2LjcsNDI4LjdMLT'+
			'E0Ni43LDQyOC43eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDkuMiwzNjIuOGgtNTEuNmMtMS40LDAtMi42LDEuMS0yLjYsMi42djYzLjRjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDUxLjZjMS40LDAsMi42LTEuMSwyLjYtMi42di02My40ICAgIEMtMTQ2LjcsMzYzLjktMTQ3LjgsMzYyLjgtMTQ5LjIsMzYyLjh6IE0tMTUxLjMsNDE2LjZoLTQ3LjR2LTQ4LjloNDcuNFY0MTYuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iLTE2MS41IiBjeT0iMzc4IiByPSI0LjQiIGZpbGw9IiNGRkZGRkYiLz4K'+
			'ICAgPHBhdGggZD0iTS0xNzEuMywzOTkuNWwtMTIuNC0xMi4yYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xMC43LDEwLjV2MTYuOGgxMCAgICBMLTE3MS4zLDM5OS41eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLjgsMC4yLTEuMSwwLjVsLTIxLjEsMjAuNmgzMC42VjQwMWwtNy4yLTcuMUMtMTYwLjgsMzkzLjctMTYxLjIsMzkzLjUtMTYxLjYsMzkzLjUgICAgeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_image']=true;
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_image']=false;
		}
		me._ht_image_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_image_image']) {
				me._ht_image_image__img.style.visibility='hidden';
				me._ht_image_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_image_image']=true;
			}
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_image.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_image.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_image.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style.transition='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_image.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_image.style.top='-47px';
				}
				else {
					me._tt_ht_image.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_image.style.top='21px';
				}
			}
		}
		me._tt_ht_image.logicBlock_position();
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style.transition='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.logicBlock_visible();
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._tt_ht_image);
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha();
		me._tt_ht_image.logicBlock_position();
		me._tt_ht_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._tt_ht_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._tt_ht_image.logicBlock_position();
				me._tt_ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_image.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_image.ggUpdateConditionTimer();
				me._ht_image_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info.style.opacity == 0.0) { me._ht_info.style.visibility="hidden"; } }, 505);
					me._ht_info.style.opacity=0;
				}
			}
		}
		me._ht_info.logicBlock_alpha();
		me._ht_info.onclick=function (e) {
				skin._info_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_title.ggUpdateText();
			skin._info_title.ggTextDiv.scrollTop = 0;
				skin._info_text_body.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_text_body.ggUpdateText();
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggCurrentLogicStateVisible = -1;
		me._ht_info.ggCurrentLogicStateAlpha = -1;
		me._ht_info.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_info']=true;
				me._tt_information.logicBlock_visible();
			}
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzguMSwzNjEuMWw2LjIsMGMzLjUsMCw2LjQsMi45LDYuNCw2LjR2Mi45YzAsMy41LTIuOSw2LjQtNi40LDYuNGgtNi4yYy0zLjUsMC02LjQtMi45LTYuNC02LjRsMC0yLjkgICBDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXogTS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0x'+
			'LjVsMTUuOSwwICAgYzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSAgICBjMC44LDAsMS41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LT'+
			'IuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45ICAgIEMtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzguNSwzNTcuMWw2LjksMGMzLjksMCw3LjEsMy4yLDcuMSw3LjF2My4zYzAsMy45LTMuMiw3LjEtNy4xLDcuMWgtNi45Yy0zLjksMC03LjEtMy4yLTcuMS03LjFsMC0zLjMgICBDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAu'+
			'OC0xLjcsMS43LTEuN2wxNy43LDAgICBjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcgICAgYzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc4LjUsMzc0LjZoNi'+
			'45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyAgICBDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_image']=true;
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_image']=false;
		}
		me._ht_info_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info_image']) {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_info_image']=true;
			}
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_information.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_information.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_information.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style.transition='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left = 'calc(50% - (0px / 2))';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style.transition='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.logicBlock_visible();
		me._tt_information.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._tt_information);
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha();
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_information.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._tt_information.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._tt_information.logicBlock_position();
				me._tt_information.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_info.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_info.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_info.ggUpdateConditionTimer();
				me._ht_info_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
			}
		}
		me._ht_url.logicBlock_alpha();
		me._ht_url.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggCurrentLogicStateVisible = -1;
		me._ht_url.ggCurrentLogicStateAlpha = -1;
		me._ht_url.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_url']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_url']=true;
				me._tt_ht_url.logicBlock_visible();
			}
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjgsNDE0LjNoMTMuN3YtMTVoLTE2LjNDLTE5My4zLDQwNC43LTE5Mi4zLDQwOS44LTE5MC44LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5My41LDM5NC43aDE2LjN2LTE1aC0xMy43Qy0xOTIuMywzODQuMi0xOTMuMywzODkuMy0xOTMuNSwzOTQuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjguOC0xODkuMSwzNzUuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzcuMiw0MzAuN3YtMTEuOWgt'+
			'MTEuOUMtMTg2LjEsNDI1LjItMTgxLjksNDI5LjYtMTc3LjIsNDMwLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjYsMzc5LjdoLTguNWMtMi42LDQuNS00LjMsOS42LTQuNiwxNWgxMC44Qy0xOTcuOCwzODkuMy0xOTcsMzg0LjMtMTk1LjYsMzc5Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMC45LDQxOC44YzMuMywzLjksNy40LDcuMSwxMi4xLDkuMmMtMi4xLTIuNS0zLj'+
			'gtNS42LTUuMy05LjJILTIwMC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE4OC44LDM2NmMtNC43LDIuMS04LjksNS4zLTEyLjIsOS4yaDYuOUMtMTkyLjYsMzcxLjctMTkwLjksMzY4LjYtMTg4LjgsMzY2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5OCwzOTkuMmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2'+
			'LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXogICAgIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNCAgICBjMjEuMiwwLDM4LjQsMTcuMiwzOC40LDM4LjRDLTEzNi41LDQxOC4yLTE1My43LDQzNS40LTE3NC45LDQzNS40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE2MS4zLDQyOC4xYzQuOC0yLjEsOS01LjMsMTIuNC05LjNoLTdDLTE1Ny40LDQyMi40LTE1OS4yLDQyNS41LTE2MS4zLDQyOC4xeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aC'+
			'BkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3Mi43LDM2My4zdjExLjloMTEuN0MtMTYzLjksMzY4LjktMTY4LDM2NC41LTE3Mi43LDM2My4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE1MiwzOTQuN2gxMWMtMC40LTUuNS0yLTEwLjYtNC43LTE1aC04LjZDLTE1MywzODQuMy0xNTIuMiwzODkuMy0xNTIsMzk0Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4x'+
			'LDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOSw0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuMiwzNzkuN2gtMTMuNXYxNWgxNi4xQy0xNTYuNywzODkuMy0xNTcuNywzODQuMi0xNTkuMiwzNzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTYuNSwzOTkuMmgtMTYuMXYxNWgxMy41Qy0xNTcuNyw0MDkuOC0xNTYuNyw0MDQuNy0xNTYuNSwzOTkuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xMzYuNSwzOTdjMC0yMS4yLTE3LjItMzguNC'+
			'0zOC40LTM4LjRjLTIxLjIsMC0zOC40LDE3LjItMzguNCwzOC40YzAsMjEuMSwxNywzOC4yLDM4LDM4LjQgICBjMC4xLDAsMC4yLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTMuNyw0MzUuNC0xMzYuNSw0MTguMi0xMzYuNSwzOTd6IE0tMjA4LjgsMzk5LjJoMTAuOGMwLjIsNS40LDEsMTAuNSwyLjMsMTVoLTguNSAgIEMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3ogICAgTS0xNTYuNSwzOTQuN2gtMTYuMXYtMTVoMTMuNUMt'+
			'MTU3LjcsMzg0LjItMTU2LjcsMzg5LjMtMTU2LjUsMzk0Ljd6IE0tMTcyLjcsMzc1LjJ2LTExLjljNC42LDEuMSw4LjgsNS41LDExLjcsMTEuOUwtMTcyLjcsMzc1LjIgICBMLTE3Mi43LDM3NS4yeiBNLTE3Ny4yLDM2My4zdjExLjloLTExLjlDLTE4Ni4xLDM2OC44LTE4MS45LDM2NC40LTE3Ny4yLDM2My4zeiBNLTE3Ny4yLDM3OS43djE1aC0xNi4zYzAuMi01LjQsMS4xLTEwLjUsMi42LTE1ICAgTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOTcuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLj'+
			'UsMzk5LjJoMTYuMyAgIHYxNWgtMTMuN0MtMTkyLjMsNDA5LjgtMTkzLjMsNDA0LjctMTkzLjUsMzk5LjJ6IE0tMTc3LjIsNDE4Ljh2MTEuOWMtNC43LTEuMS04LjktNS41LTExLjktMTEuOUgtMTc3LjJ6IE0tMTcyLjcsNDMwLjZ2LTExLjloMTEuNyAgIEMtMTYzLjksNDI1LjEtMTY4LDQyOS41LTE3Mi43LDQzMC42eiBNLTE3Mi43LDQxNC4zdi0xNWgxNi4xYy0wLjIsNS40LTEuMSwxMC42LTIuNiwxNUgtMTcyLjd6IE0tMTUyLDM5OS4yaDExICAgYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41'+
			'LTMuNi0zLjMtNi44LTUuNC05LjMgICBDLTE1Ni41LDM2OC0xNTIuMiwzNzEuMi0xNDguOSwzNzUuMnogTS0xODguOCwzNjZjLTIuMSwyLjUtMy44LDUuNy01LjMsOS4yaC02LjlDLTE5Ny43LDM3MS4zLTE5My41LDM2OC4xLTE4OC44LDM2NnogICAgTS0yMDAuOSw0MTguOGg2LjljMS40LDMuNSwzLjIsNi42LDUuMyw5LjJDLTE5My41LDQyNS44LTE5Ny42LDQyMi43LTIwMC45LDQxOC44eiBNLTE2MS4zLDQyOC4xYzIuMS0yLjYsMy45LTUuNyw1LjQtOS4zaDcgICBDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjYsNDE2LjJoMTUuMnYtMTYuN2gtMTguMUMtMTk1LjMsNDA1LjUtMTk0LjIsNDExLjItMTkyLjYsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjUsMzk0LjVoMTguMXYtMTYuN2gtMTUuMkMtMTk0LjMsMzgyLjgtMTk1LjMsMzg4LjUtMTk1LjUsMzk0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMsMzY1LjctMTkwLjYsMzcyLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc3LjQsNDM0LjR2LTEz'+
			'LjJoLTEzLjJDLTE4Ny4zLDQyOC4zLTE4Mi42LDQzMy4yLTE3Ny40LDQzNC40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5Ny45LDM3Ny44aC05LjRjLTIuOSw0LjktNC44LDEwLjYtNS4yLDE2LjdoMTJDLTIwMC4zLDM4OC41LTE5OS40LDM4Mi44LTE5Ny45LDM3Ny44eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMy44LDQyMS4yYzMuNiw0LjMsOC4yLDcuOCwxMy41LDEwLjJjLTIuMy0yLj'+
			'gtNC4zLTYuMy01LjgtMTAuMkgtMjAzLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjMsMzYyLjZjLTUuMiwyLjQtOS45LDUuOS0xMy41LDEwLjJoNy42Qy0xOTQuNiwzNjguOS0xOTIuNiwzNjUuNC0xOTAuMywzNjIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYy'+
			'LjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjYgICAgeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcgICAgYzIzLjYsMCw0Mi43LDE5LjIsNDIuNyw0Mi43Qy0xMzIuMiw0MjAuNS0xNTEuMyw0MzkuNy0xNzQuOSw0MzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuOCw0MzEuNWM1LjMtMi40LDEwLTUuOSwxMy43LTEwLjNoLTcuOEMtMTU1LjQsNDI1LjItMTU3LjUsNDI4LjctMTU5LjgsND'+
			'MxLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gtMTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjQsMzU5LjZ2MTMuMmgxM0MtMTYyLjYsMzY1LjctMTY3LjMsMzYwLjgtMTcyLjQsMzU5LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ5LjUsMzk0LjVoMTIuMmMtMC40LTYuMS0yLjItMTEuNy01LjItMTYuN2gtOS42Qy0xNTAuNiwzODIuOC0xNDkuNywzODguNS0xNDkuNSwzOTQuNXoiIGZpbGw9IiMw'+
			'MDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzIuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTcuNCwzNzcuOGgtMTV2MTYuN2gxNy45Qy0xNTQuNywzODguNS0xNTUuOCwzODIuOC0xNTcuNCwzNzcuOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTQuNSwzOTkuNWgtMTcuOXYxNi43aDE1Qy0xNTUuOCw0MTEuMi0xNTQuNyw0MDUuNS0xNTQuNSwzOTkuNXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZX'+
			'JfMiI+CiAgPHBhdGggZD0iTS0xMzIuMiwzOTdjMC0yMy42LTE5LjItNDIuNy00Mi43LTQyLjdjLTIzLjYsMC00Mi43LDE5LjItNDIuNyw0Mi43YzAsMjMuNCwxOC45LDQyLjQsNDIuMiw0Mi43ICAgYzAuMSwwLDAuMywwLDAuNCwwYzAsMCwwLjEsMCwwLjEsMEMtMTUxLjMsNDM5LjctMTMyLjIsNDIwLjUtMTMyLjIsMzk3eiBNLTIxMi41LDM5OS41aDEyYzAuMiw2LDEuMSwxMS43LDIuNiwxNi43aC05LjQgICBDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYuN2g5LjZDLTEzOS41LDM4Mi44LTEzNy43'+
			'LDM4OC40LTEzNy4zLDM5NC41eiAgICBNLTE1NC41LDM5NC41aC0xNy45di0xNi43aDE1Qy0xNTUuOCwzODIuOC0xNTQuNywzODguNS0xNTQuNSwzOTQuNXogTS0xNzIuNCwzNzIuOHYtMTMuMmM1LjIsMS4yLDkuOCw2LjIsMTMsMTMuMkwtMTcyLjQsMzcyLjggICBMLTE3Mi40LDM3Mi44eiBNLTE3Ny40LDM1OS42djEzLjJoLTEzLjJDLTE4Ny4zLDM2NS43LTE4Mi42LDM2MC43LTE3Ny40LDM1OS42eiBNLTE3Ny40LDM3Ny44djE2LjdoLTE4LjFjMC4yLTYsMS4zLTExLjcsMi45LTE2LjcgICBMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMDAuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMT'+
			'EuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eiAgICBNLTE5NS41LDM5OS41aDE4LjF2MTYuN2gtMTUuMkMtMTk0LjIsNDExLjItMTk1LjMsNDA1LjUtMTk1LjUsMzk5LjV6IE0tMTc3LjQsNDIxLjJ2MTMuMmMtNS4yLTEuMi05LjktNi4xLTEzLjItMTMuMkgtMTc3LjR6ICAgIE0tMTcyLjQsNDM0LjR2LTEzLjJoMTNDLTE2Mi43LDQyOC4yLTE2Ny4zLDQzMy4xLTE3Mi40LDQzNC40eiBNLTE3Mi40LDQxNi4ydi0xNi43aDE3LjljLTAuMiw2LTEuMywxMS43LTIuOSwxNi43SC0xNzIuNHogICAgTS0xNDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwx'+
			'MS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44ICAgYy0xLjYtNC0zLjYtNy41LTYtMTAuNEMtMTU0LjQsMzY0LjgtMTQ5LjcsMzY4LjQtMTQ2LDM3Mi44eiBNLTE5MC4zLDM2Mi42Yy0yLjMsMi44LTQuMyw2LjMtNS45LDEwLjJoLTcuNiAgIEMtMjAwLjIsMzY4LjQtMTk1LjYsMzY0LjktMTkwLjMsMzYyLjZ6IE0tMjAzLjgsNDIxLjJoNy42YzEuNiwzLjksMy42LDcuNCw1LjksMTAuMkMtMTk1LjYsNDI5LTIwMC4yLDQyNS41LTIwMy44LDQyMS4yeiAgICBNLTE1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLj'+
			'NoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false)) && 
				((player.getVariableValue('opt_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style.transition='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
				else {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
			}
		}
		me._ht_url_image.logicBlock_visible();
		me._ht_url_image.onclick=function (e) {
				skin._web_page.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.url)));
					var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._web_page.ggUpdateText();
			skin._web_page.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_website', true);
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_image']=true;
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_image']=false;
		}
		me._ht_url_image.ggCurrentLogicStateVisible = -1;
		me._ht_url_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_url_image']) {
				me._ht_url_image__img.style.visibility='hidden';
				me._ht_url_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_url_image']=true;
			}
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._ht_url_image_newpage=document.createElement('div');
		els=me._ht_url_image_newpage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjgsNDE0LjNoMTMuN3YtMTVoLTE2LjNDLTE5My4zLDQwNC43LTE5Mi4zLDQwOS44LTE5MC44LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5My41LDM5NC43aDE2LjN2LTE1aC0xMy43Qy0xOTIuMywzODQuMi0xOTMuMywzODkuMy0xOTMuNSwzOTQuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjguOC0xODkuMSwzNzUuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzcuMiw0MzAuN3YtMTEuOWgt'+
			'MTEuOUMtMTg2LjEsNDI1LjItMTgxLjksNDI5LjYtMTc3LjIsNDMwLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjYsMzc5LjdoLTguNWMtMi42LDQuNS00LjMsOS42LTQuNiwxNWgxMC44Qy0xOTcuOCwzODkuMy0xOTcsMzg0LjMtMTk1LjYsMzc5Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMC45LDQxOC44YzMuMywzLjksNy40LDcuMSwxMi4xLDkuMmMtMi4xLTIuNS0zLj'+
			'gtNS42LTUuMy05LjJILTIwMC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE4OC44LDM2NmMtNC43LDIuMS04LjksNS4zLTEyLjIsOS4yaDYuOUMtMTkyLjYsMzcxLjctMTkwLjksMzY4LjYtMTg4LjgsMzY2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5OCwzOTkuMmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2'+
			'LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXogICAgIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNCAgICBjMjEuMiwwLDM4LjQsMTcuMiwzOC40LDM4LjRDLTEzNi41LDQxOC4yLTE1My43LDQzNS40LTE3NC45LDQzNS40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE2MS4zLDQyOC4xYzQuOC0yLjEsOS01LjMsMTIuNC05LjNoLTdDLTE1Ny40LDQyMi40LTE1OS4yLDQyNS41LTE2MS4zLDQyOC4xeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aC'+
			'BkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3Mi43LDM2My4zdjExLjloMTEuN0MtMTYzLjksMzY4LjktMTY4LDM2NC41LTE3Mi43LDM2My4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE1MiwzOTQuN2gxMWMtMC40LTUuNS0yLTEwLjYtNC43LTE1aC04LjZDLTE1MywzODQuMy0xNTIuMiwzODkuMy0xNTIsMzk0Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4x'+
			'LDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOSw0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuMiwzNzkuN2gtMTMuNXYxNWgxNi4xQy0xNTYuNywzODkuMy0xNTcuNywzODQuMi0xNTkuMiwzNzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTYuNSwzOTkuMmgtMTYuMXYxNWgxMy41Qy0xNTcuNyw0MDkuOC0xNTYuNyw0MDQuNy0xNTYuNSwzOTkuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xMzYuNSwzOTdjMC0yMS4yLTE3LjItMzguNC'+
			'0zOC40LTM4LjRjLTIxLjIsMC0zOC40LDE3LjItMzguNCwzOC40YzAsMjEuMSwxNywzOC4yLDM4LDM4LjQgICBjMC4xLDAsMC4yLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTMuNyw0MzUuNC0xMzYuNSw0MTguMi0xMzYuNSwzOTd6IE0tMjA4LjgsMzk5LjJoMTAuOGMwLjIsNS40LDEsMTAuNSwyLjMsMTVoLTguNSAgIEMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3ogICAgTS0xNTYuNSwzOTQuN2gtMTYuMXYtMTVoMTMuNUMt'+
			'MTU3LjcsMzg0LjItMTU2LjcsMzg5LjMtMTU2LjUsMzk0Ljd6IE0tMTcyLjcsMzc1LjJ2LTExLjljNC42LDEuMSw4LjgsNS41LDExLjcsMTEuOUwtMTcyLjcsMzc1LjIgICBMLTE3Mi43LDM3NS4yeiBNLTE3Ny4yLDM2My4zdjExLjloLTExLjlDLTE4Ni4xLDM2OC44LTE4MS45LDM2NC40LTE3Ny4yLDM2My4zeiBNLTE3Ny4yLDM3OS43djE1aC0xNi4zYzAuMi01LjQsMS4xLTEwLjUsMi42LTE1ICAgTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOTcuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLj'+
			'UsMzk5LjJoMTYuMyAgIHYxNWgtMTMuN0MtMTkyLjMsNDA5LjgtMTkzLjMsNDA0LjctMTkzLjUsMzk5LjJ6IE0tMTc3LjIsNDE4Ljh2MTEuOWMtNC43LTEuMS04LjktNS41LTExLjktMTEuOUgtMTc3LjJ6IE0tMTcyLjcsNDMwLjZ2LTExLjloMTEuNyAgIEMtMTYzLjksNDI1LjEtMTY4LDQyOS41LTE3Mi43LDQzMC42eiBNLTE3Mi43LDQxNC4zdi0xNWgxNi4xYy0wLjIsNS40LTEuMSwxMC42LTIuNiwxNUgtMTcyLjd6IE0tMTUyLDM5OS4yaDExICAgYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41'+
			'LTMuNi0zLjMtNi44LTUuNC05LjMgICBDLTE1Ni41LDM2OC0xNTIuMiwzNzEuMi0xNDguOSwzNzUuMnogTS0xODguOCwzNjZjLTIuMSwyLjUtMy44LDUuNy01LjMsOS4yaC02LjlDLTE5Ny43LDM3MS4zLTE5My41LDM2OC4xLTE4OC44LDM2NnogICAgTS0yMDAuOSw0MTguOGg2LjljMS40LDMuNSwzLjIsNi42LDUuMyw5LjJDLTE5My41LDQyNS44LTE5Ny42LDQyMi43LTIwMC45LDQxOC44eiBNLTE2MS4zLDQyOC4xYzIuMS0yLjYsMy45LTUuNyw1LjQtOS4zaDcgICBDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image_newpage__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_newpage__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjYsNDE2LjJoMTUuMnYtMTYuN2gtMTguMUMtMTk1LjMsNDA1LjUtMTk0LjIsNDExLjItMTkyLjYsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjUsMzk0LjVoMTguMXYtMTYuN2gtMTUuMkMtMTk0LjMsMzgyLjgtMTk1LjMsMzg4LjUtMTk1LjUsMzk0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMsMzY1LjctMTkwLjYsMzcyLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc3LjQsNDM0LjR2LTEz'+
			'LjJoLTEzLjJDLTE4Ny4zLDQyOC4zLTE4Mi42LDQzMy4yLTE3Ny40LDQzNC40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5Ny45LDM3Ny44aC05LjRjLTIuOSw0LjktNC44LDEwLjYtNS4yLDE2LjdoMTJDLTIwMC4zLDM4OC41LTE5OS40LDM4Mi44LTE5Ny45LDM3Ny44eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMy44LDQyMS4yYzMuNiw0LjMsOC4yLDcuOCwxMy41LDEwLjJjLTIuMy0yLj'+
			'gtNC4zLTYuMy01LjgtMTAuMkgtMjAzLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjMsMzYyLjZjLTUuMiwyLjQtOS45LDUuOS0xMy41LDEwLjJoNy42Qy0xOTQuNiwzNjguOS0xOTIuNiwzNjUuNC0xOTAuMywzNjIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYy'+
			'LjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjYgICAgeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcgICAgYzIzLjYsMCw0Mi43LDE5LjIsNDIuNyw0Mi43Qy0xMzIuMiw0MjAuNS0xNTEuMyw0MzkuNy0xNzQuOSw0MzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuOCw0MzEuNWM1LjMtMi40LDEwLTUuOSwxMy43LTEwLjNoLTcuOEMtMTU1LjQsNDI1LjItMTU3LjUsNDI4LjctMTU5LjgsND'+
			'MxLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gtMTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjQsMzU5LjZ2MTMuMmgxM0MtMTYyLjYsMzY1LjctMTY3LjMsMzYwLjgtMTcyLjQsMzU5LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ5LjUsMzk0LjVoMTIuMmMtMC40LTYuMS0yLjItMTEuNy01LjItMTYuN2gtOS42Qy0xNTAuNiwzODIuOC0xNDkuNywzODguNS0xNDkuNSwzOTQuNXoiIGZpbGw9IiMw'+
			'MDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzIuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTcuNCwzNzcuOGgtMTV2MTYuN2gxNy45Qy0xNTQuNywzODguNS0xNTUuOCwzODIuOC0xNTcuNCwzNzcuOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTQuNSwzOTkuNWgtMTcuOXYxNi43aDE1Qy0xNTUuOCw0MTEuMi0xNTQuNyw0MDUuNS0xNTQuNSwzOTkuNXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZX'+
			'JfMiI+CiAgPHBhdGggZD0iTS0xMzIuMiwzOTdjMC0yMy42LTE5LjItNDIuNy00Mi43LTQyLjdjLTIzLjYsMC00Mi43LDE5LjItNDIuNyw0Mi43YzAsMjMuNCwxOC45LDQyLjQsNDIuMiw0Mi43ICAgYzAuMSwwLDAuMywwLDAuNCwwYzAsMCwwLjEsMCwwLjEsMEMtMTUxLjMsNDM5LjctMTMyLjIsNDIwLjUtMTMyLjIsMzk3eiBNLTIxMi41LDM5OS41aDEyYzAuMiw2LDEuMSwxMS43LDIuNiwxNi43aC05LjQgICBDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYuN2g5LjZDLTEzOS41LDM4Mi44LTEzNy43'+
			'LDM4OC40LTEzNy4zLDM5NC41eiAgICBNLTE1NC41LDM5NC41aC0xNy45di0xNi43aDE1Qy0xNTUuOCwzODIuOC0xNTQuNywzODguNS0xNTQuNSwzOTQuNXogTS0xNzIuNCwzNzIuOHYtMTMuMmM1LjIsMS4yLDkuOCw2LjIsMTMsMTMuMkwtMTcyLjQsMzcyLjggICBMLTE3Mi40LDM3Mi44eiBNLTE3Ny40LDM1OS42djEzLjJoLTEzLjJDLTE4Ny4zLDM2NS43LTE4Mi42LDM2MC43LTE3Ny40LDM1OS42eiBNLTE3Ny40LDM3Ny44djE2LjdoLTE4LjFjMC4yLTYsMS4zLTExLjcsMi45LTE2LjcgICBMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMDAuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMT'+
			'EuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eiAgICBNLTE5NS41LDM5OS41aDE4LjF2MTYuN2gtMTUuMkMtMTk0LjIsNDExLjItMTk1LjMsNDA1LjUtMTk1LjUsMzk5LjV6IE0tMTc3LjQsNDIxLjJ2MTMuMmMtNS4yLTEuMi05LjktNi4xLTEzLjItMTMuMkgtMTc3LjR6ICAgIE0tMTcyLjQsNDM0LjR2LTEzLjJoMTNDLTE2Mi43LDQyOC4yLTE2Ny4zLDQzMy4xLTE3Mi40LDQzNC40eiBNLTE3Mi40LDQxNi4ydi0xNi43aDE3LjljLTAuMiw2LTEuMywxMS43LTIuOSwxNi43SC0xNzIuNHogICAgTS0xNDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwx'+
			'MS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44ICAgYy0xLjYtNC0zLjYtNy41LTYtMTAuNEMtMTU0LjQsMzY0LjgtMTQ5LjcsMzY4LjQtMTQ2LDM3Mi44eiBNLTE5MC4zLDM2Mi42Yy0yLjMsMi44LTQuMyw2LjMtNS45LDEwLjJoLTcuNiAgIEMtMjAwLjIsMzY4LjQtMTk1LjYsMzY0LjktMTkwLjMsMzYyLjZ6IE0tMjAzLjgsNDIxLjJoNy42YzEuNiwzLjksMy42LDcuNCw1LjksMTAuMkMtMTk1LjYsNDI5LTIwMC4yLDQyNS41LTIwMy44LDQyMS4yeiAgICBNLTE1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLj'+
			'NoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_newpage__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_image_newpage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_image_newpage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_newpage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) || 
				((player.getVariableValue('opt_url') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_newpage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_newpage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_newpage.style.transition='';
				if (me._ht_url_image_newpage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_newpage.style.visibility=(Number(me._ht_url_image_newpage.style.opacity)>0||!me._ht_url_image_newpage.style.opacity)?'inherit':'hidden';
					me._ht_url_image_newpage.ggVisible=true;
				}
				else {
					me._ht_url_image_newpage.style.visibility="hidden";
					me._ht_url_image_newpage.ggVisible=false;
				}
			}
		}
		me._ht_url_image_newpage.logicBlock_visible();
		me._ht_url_image_newpage.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._ht_url_image_newpage.onmouseover=function (e) {
			me._ht_url_image_newpage__img.style.visibility='hidden';
			me._ht_url_image_newpage__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_image_newpage']=true;
		}
		me._ht_url_image_newpage.onmouseout=function (e) {
			me._ht_url_image_newpage__img.style.visibility='inherit';
			me._ht_url_image_newpage__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_image_newpage']=false;
		}
		me._ht_url_image_newpage.ggCurrentLogicStateVisible = -1;
		me._ht_url_image_newpage.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_url_image_newpage']) {
				me._ht_url_image_newpage__img.style.visibility='hidden';
				me._ht_url_image_newpage__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_url_image_newpage']=true;
			}
		}
		me._ht_url_image_newpage.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image_newpage);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_url.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_url.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_url.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_url.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_url.style.top='-47px';
				}
				else {
					me._tt_ht_url.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_url.style.top='21px';
				}
			}
		}
		me._tt_ht_url.logicBlock_position();
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.logicBlock_visible();
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._tt_ht_url);
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha();
		me._ht_url_image.logicBlock_visible();
		me._ht_url_image_newpage.logicBlock_visible();
		me._tt_ht_url.logicBlock_position();
		me._tt_ht_url.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_url.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_image.logicBlock_visible();
				me._ht_url_image_newpage.logicBlock_visible();
				me._tt_ht_url.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_image.logicBlock_visible();
				me._ht_url_image_newpage.logicBlock_visible();
				me._tt_ht_url.logicBlock_position();
				me._tt_ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_url=function() {
				me._ht_url_image.logicBlock_visible();
				me._ht_url_image_newpage.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_url.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_url.ggUpdateConditionTimer();
				me._ht_url_image.ggUpdateConditionTimer();
				me._ht_url_image_newpage.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
			}
		}
		me._ht_node.logicBlock_alpha();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggCurrentLogicStateVisible = -1;
		me._ht_node.ggCurrentLogicStateAlpha = -1;
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node']=true;
				me._hotspot_preview.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICBDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUgICBjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQtMS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBs'+
			'Ny4yLDcuMkwtMTY3LjksMzY2LjZ6ICAgIE0tMTU0LjksMzk0YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjV2MTEuNGMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN0wtMTU0LjksMzk0eiBNLTE1NC42LDM4MyAgIGMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjIgICBjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC'+
			'0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCAgIGMtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjljMC45LTAuOSwyLjQtMC45LDMuMywwbDEwLDkuN0wtMTY3LDQwMy40eiBNLTEzNy45LDQyMCAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgIGMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMw'+
			'LTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMgICBsLTQuMSw0LjFjLTcuOC0wLjktMTUuMS0yLjYtMjEuMS01djM4LjljOC45LTMuNiwyMC42LTUuNiwzMi42LTUuNmMxMiwwLDIzLjYsMiwzMi42LDUuNnYtMzguOWMtOC45LDMuNi0yMC42LDUuNi0zMi42LDUuNiAgIGMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMTM3LjksNDIweiIgZmlsbD0iIzAwMDAwMCIvPgogPC'+
			'9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43ICAgIEMtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDUuOCw0MDcuM3Y2LjdjOC44LTMuMSwxOS42LTQuOCwzMC44LTQuOGMwLjcsMCwxLjMsMCwyLDBsNC4yLTQuMWMtMi0wLjEtNC4xLTAuMS02LjItMC4xICAgIEMtMTg2LjMsNDA1LTE5Ny4zLDQwNS44LTIwNS44LDQwNy4zeiIgZmlsbD0iI0ZGRkZGRiIv'+
			'PgogICA8cGF0aCBkPSJNLTE0NC4yLDQxMy45di0xMS40bC04LjctOC41Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMiAgICBDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkgICAgQy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTkuOC'+
			'wzODQuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMS4yLDEuMmMtMC41LDAuNS0wLjUsMS40LDAsMmw3LjgsNy44YzAuNSwwLjUsMS43LDEuNSwyLDEuNSAgICBjMC4zLDAuMSwwLjgsMC4xLDEuMSwwYzAuMy0wLjEsMS40LTEsMi0xLjVsMjUuMy0yNS4zYzAuNS0wLjUsMC41LTEuNCwwLTJsLTEuMi0xLjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTI0LjcsMjQuNyAgICBMLTE5OS44LDM4NC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTguNiw2LjEtMzAsNi41bC00LjYsNC42YzAuMiwwLDAuNSwwLDAu'+
			'NywwICAgIGMxMiwwLDIzLjYtMiwzMi42LTUuNnYzOC45Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjljNiwyLjQsMTMuMyw0LjEsMjEuMSw1bDQuMS00LjEgICAgYy0xMC4xLTAuNy0xOS41LTIuOS0yNi41LTYuM2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjkgICAgYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLj'+
			'ItMC4xICAgIGMwLjctMC40LDEuMS0xLjEsMS4xLTEuOXYtNDUuOEMtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMiAgIGMtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0xLjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMt'+
			'MS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGw4LDhMLTE2Ny4xLDM2My4yeiBNLTE1Mi43LDM5My43YzAuMy0wLjMsMC43LTAuNSwxLjEtMC41czAuOCwwLjIsMS4xLDAuNGw5LjYsOS40djEyLjcgICBjLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUgICBDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLD'+
			'UuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICBjMi4zLDAsNC42LDAsNi45LDAuMUwtMTcyLjgsNDEwLjV6IE0tMTY2LjIsNDA0LjFjLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40YzEtMSwyLjYtMSwzLjcsMCAgIGwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICBzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4z'+
			'LTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xICAgYzAuNy0wLjUsMS42LTAuNSwyLjQtMC4xYzcuOCwzLjgsMTguMiw2LjIsMjkuNCw3bC00LjYsNC42Yy04LjYtMC45LTE2LjctMi44LTIzLjQtNS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjIgICBzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMSAgIGMwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsND'+
			'IyLjVMLTEzMy44LDQyMi41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCAgICBDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0wLjEtNi45LTAuMSAgICBD'+
			'LTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkgICAgQy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3LjctMTUzLjUsMzg4Lj'+
			'gtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43ICAgIGMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUgICAgTC0yMDIuNiwzODIuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUt'+
			'MS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiAgICBjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xICAgIGMwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLD'+
			'EuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xICAgIHMxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style.transition='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_visited.onmouseover=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited']=true;
		}
		me._ht_node_visited.onmouseout=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited']=false;
		}
		me._ht_node_visited.ggCurrentLogicStateVisible = -1;
		me._ht_node_visited.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node_visited']) {
				me._ht_node_visited__img.style.visibility='hidden';
				me._ht_node_visited__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_node_visited']=true;
			}
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xICAgIEMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNiAgICBjLTEyLjgsMC0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yYy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMS45di00NS44YzAt'+
			'MC44LDAuNC0xLjUsMS4xLTEuOSAgICBjMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjZjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45ICAgIEMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYgICAgQy0xODcsMzgzLjMtMTk4LjYsMzgxLj'+
			'ItMjA3LjYsMzc3Ljd6IE0tMTc1LDQwOS4xYy0xMS4xLDAtMjIsMS43LTMwLjgsNC44di02LjdjOC41LTEuNCwxOS40LTIuMywzMC44LTIuM2MyLjEsMCw0LjEsMCw2LjIsMC4xICAgIGwtNC4yLDQuMUMtMTczLjcsNDA5LjItMTc0LjMsNDA5LjEtMTc1LDQwOS4xeiBNLTE0NC4yLDQxMy45Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43bDE1LjYtMTUuMmMwLjMtMC4zLDAuNi0wLjQsMS0wLjQgICAgYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0wLjQsNC40LDAuNiw0LjcsMi4zICAgIGMwLjMs'+
			'MS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMuMiwzODkuOWwxMCw5LjdsLTMuOCwzLjcgICAgYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOUMtMTc1LjYsMzg5LTE3NC4xLDM4OS0xNzMuMiwzODkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjcsNDAzLjhjNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2'+
			'wtMTAtOS43Yy0wLjktMC45LTIuNC0wLjktMy4zLDAgICAgTC0xOTAuNyw0MDMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjEgICAgQy0xNzAuOSw0MDUtMTcyLjksNDA1LTE3NSw0MDV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUzLjksMzkzLjZjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMmM5LjUsMC40LDE4LjcsMiwyNi4zLDQuN3YtMTEuNGwtOC43LTguNSAgICBDLTE1My4yLDM5My44LTE1'+
			'My41LDM5My42LTE1My45LDM5My42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTguNyw0LjItMjEsNi42LTMzLjgsNi42Yy0xMi45LDAtMjUuMi0yLjQtMzMuOC02LjYgICAgYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yICAgIGM4LjctNC4yLDIxLTYuNiwzMy44LTYuNmMxMi44LDAsMjUuMiwyLjQsMzMuOCw2LjZjMC43LDAuMywxLjUsMC4zLDIuMi'+
			'0wLjFjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjggICAgQy0xMzcuOSwzNzMuNC0xMzguMywzNzIuNy0xMzksMzcyLjN6IE0tMTQyLjQsNDE2LjVjLTguOS0zLjYtMjAuNi01LjYtMzIuNi01LjZzLTIzLjYsMi0zMi42LDUuNnYtMzguOSAgICBjOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45ICAgIEMtMTU3LjgsMzg4LjYtMTU1Ljcs'+
			'Mzg5LjYtMTUzLjQsMzg5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC43Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICAgcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAuMi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUtMS4yLTEuMy0xLjItMi4x'+
			'di01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMSAgICBjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjOS42LDQuNiwyMy4zLDcuMywzNy42LDcuM2MxNC4zLDAsMjgtMi43LDM3LjYtNy4zYzAuOC0wLjQsMS43LTAuMywyLjQsMC4xYzAuNywwLjUsMS4yLDEuMywxLjIsMi4xICAgIEMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMiw2LjIgICAgQy0xODguMywzODEuNy0yMD'+
			'EuMywzNzkuNS0yMTEuMiwzNzUuNXogTS0xNzUsNDEwLjVjLTEyLjQsMC0yNC40LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICAgYzIuMywwLDQuNiwwLDYuOSwwLjFsLTQuNiw0LjVDLTE3My41LDQxMC41LTE3NC4zLDQxMC41LTE3NSw0MTAuNXogTS0xNDAuOCw0MTUuOGMtOC40LTMtMTguNi00LjgtMjkuMi01LjJsMTcuMy0xNi45ICAgIGMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjUg'+
			'ICAgYzAuNCwxLjktMS40LDMuOC0zLjksNC4zYy0yLjUsMC41LTQuOS0wLjYtNS4zLTIuNUMtMTU2LjYsMzgzLjktMTU0LjgsMzgyLTE1Mi4zLDM4MS41eiBNLTE3MywzODkuMWwxMS4xLDEwLjhsLTQuMiw0LjEgICAgYy0yLjktMC4xLTUuOS0wLjItOC44LTAuMmMtNiwwLTExLjgsMC4yLTE3LjQsMC42bDE1LjgtMTUuNEMtMTc1LjYsMzg4LjEtMTc0LDM4OC4xLTE3MywzODkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjQsNDA0LjVjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4Lj'+
			'gsMC4ybDQuMi00LjFsLTExLjEtMTAuOGMtMS0xLTIuNi0xLTMuNiwwICAgIEwtMTkyLjQsNDA0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNSAgICBDLTE3MC40LDQwNS45LTE3Mi43LDQwNS45LTE3NSw0MDUuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNiwzOTMuMmMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjljMTAuNiwwLjQsMjAuOCwyLjMsMjkuMiw1LjJ2LTEyLjdsLTku'+
			'Ni05LjQgICAgQy0xNTAuNywzOTMuNC0xNTEuMSwzOTMuMi0xNTEuNiwzOTMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy05LjYsNC42LTIzLjMsNy4zLTM3LjYsNy4zcy0yOC0yLjctMzcuNi03LjMgICAgYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yICAgIGM5LjYtNC42LDIzLjMtNy4zLDM3LjYtNy4zYzE0LjMsMCwyOCwyLjcsMzcuNiw3Lj'+
			'NjMC44LDAuNCwxLjcsMC4zLDIuNC0wLjFzMS4yLTEuMywxLjItMi4xdi01MC45ICAgIEMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXogTS0xMzguOCw0MTguN2MtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzkuOSw0LDIyLjksNi4yLDM2LjIsNi4yICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3'+
			'LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style.transition='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.logicBlock_visible();
		me._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image']=true;
		}
		me._ht_node_image.onmouseout=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ggCurrentLogicStateVisible = -1;
		me._ht_node_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node_image']) {
				me._ht_node_image__img.style.visibility='hidden';
				me._ht_node_image__imgo.style.visibility='inherit';
				me.elementMouseOver['ht_node_image']=true;
			}
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._hotspot_preview=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style.transition='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.logicBlock_visible();
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style.transition='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.logicBlock_visible();
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwID'+
			'EzMCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style.transition='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.logicBlock_visible();
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_node.style.top='-50px';
				}
				else {
					me._tt_ht_node.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_node.style.top='25px';
				}
			}
		}
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.logicBlock_visible();
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_node);
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha();
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_image.logicBlock_visible();
		me._hotspot_preview.logicBlock_visible();
		me._ht_tooltip.logicBlock_visible();
		me._ht_checkmark_tick.logicBlock_visible();
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_tooltip.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._tt_ht_node.logicBlock_position();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_hotspot_preview=function() {
				me._hotspot_preview.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_node.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_node.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
				me._ht_node_visited.ggUpdateConditionTimer();
				me._ht_node_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._menu_button.ggUpdateConditionTimer();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._controller.style.transition='none';
				} else {
					me._controller.style.transition='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._menu_button.style.transition='none';
				} else {
					me._menu_button.style.transition='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
			} else {
				if (player.transitionsDisabled) {
					me._menu_button.style.transition='none';
				} else {
					me._menu_button.style.transition='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._controller.style.transition='none';
				} else {
					me._controller.style.transition='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
			}
		}
		me._controller.ggUpdateConditionTimer();
		me._fullscreen.ggUpdateConditionTimer();
		me._fullscreen_off.ggUpdateConditionTimer();
		me._gyro_on.ggUpdateConditionTimer();
		me._gyro_off.ggUpdateConditionTimer();
		me._rectilinear.ggUpdateConditionTimer();
		me._fisheye.ggUpdateConditionTimer();
		me._stereographic.ggUpdateConditionTimer();
		me._thumbnail_hide_button_show.ggUpdateConditionTimer();
		me._thumbnail_show_button_show.ggUpdateConditionTimer();
		me._info.ggUpdateConditionTimer();
		me._autorotate_start.ggUpdateConditionTimer();
		me._autorotate_stop.ggUpdateConditionTimer();
		me._zoomout.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		me._thumbnail_cloner.ggUpdateConditionTimer();
		me._thumbnail_cloner_mobile.ggUpdateConditionTimer();
		me._userdata_close.ggUpdateConditionTimer();
		me._ht_info_close.ggUpdateConditionTimer();
		me._ht_video_play_file.ggUpdateConditionTimer();
		me._ht_video_pause_file.ggUpdateConditionTimer();
		me._ht_video_play_url.ggUpdateConditionTimer();
		me._ht_video_pause_url.ggUpdateConditionTimer();
		me.__360image_gyro.ggUpdateConditionTimer();
		if (me.__360image_gyro.ggLastIsActive!=me.__360image_gyro.ggIsActive()) {
			me.__360image_gyro.ggLastIsActive=me.__360image_gyro.ggIsActive();
			if (me.__360image_gyro.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_360image_once', false);
			}
		}
		if (me.__360image_timer.ggLastIsActive!=me.__360image_timer.ggIsActive()) {
			me.__360image_timer.ggLastIsActive=me.__360image_timer.ggIsActive();
			if (me.__360image_timer.ggLastIsActive) {
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
			} else {
			}
		}
		me._close.ggUpdateConditionTimer();
		me._dropdown_menu_title_background.ggUpdateConditionTimer();
		me._thumbnails_toggle.ggUpdateConditionTimer();
		me._thumbnails_fs_close.ggUpdateConditionTimer();
		me._thumbnails_fs_phone_close.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/open-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/open-sans-latin-600.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/open-sans-latin-700.woff2") format("woff2"); } .open_sans { font-family: "Open Sans"; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};