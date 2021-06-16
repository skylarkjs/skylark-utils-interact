/**
 * skylark-domx-plugins-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-plugins-base","./interact"],function(e,t,o,n,a,r,s,i){a.on,a.off,o.attr,o.removeAttr,n.pagePosition,r.addClass,n.height,Array.prototype.some,Array.prototype.map;var l=s.Plugin.inherit({klassName:"Movable",pluginName:"lark.movable",_construct:function(o,s){function i(e){var t,o;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),o=0;o<t.length;o++)e[t[o]]=e.changedTouches[0][t[o]]}function l(e){e.movable=p,e.moveEl=o,e.handleEl=v}this.overrided(o,s);var m,c,d,u,p=this,v=(s=this.options).handle||o,f=!1!==s.auto,h=s.constraints,g=s.document||document,k=s.starting,y=s.started,x=s.moving,b=s.stopped,X=function(e){if(i(e),l(e),0!==e.button)return Y(e);if(e.deltaX=e.screenX-c,e.deltaY=e.screenY-d,f){var t=u.left+e.deltaX,a=u.top+e.deltaY;h&&(t<h.minX&&(t=h.minX),t>h.maxX&&(t=h.maxX),a<h.minY&&(a=h.minY),a>h.maxY&&(a=h.maxY))}n.relativePosition(o,{left:t,top:a}),e.preventDefault(),x&&x(e)},Y=function(e){i(e),a.off(g,"mousemove touchmove",X).off(g,"mouseup touchend",Y),t.remove(m),b&&b(e)};a.on(v,"mousedown touchstart",function(s){var p,f=n.getDocumentSize(g);if(i(s),l(s),k){var E=k(s);if(!1===E)return;e.isPlainObject(E)&&(E.constraints&&(h=E.constraints),E.started&&(y=E.started),E.moving&&(x=E.moving),E.stopped&&(b=E.stopped))}s.preventDefault(),s.button,c=s.screenX,d=s.screenY,u=n.relativePosition(o),n.size(o),p=r.css(v,"cursor"),m=t.createElement("div"),r.css(m,{position:"absolute",top:0,left:0,width:f.width,height:f.height,zIndex:2147483647,opacity:1e-4,cursor:p}),t.append(g.body,m),a.on(g,"mousemove touchmove",X).on(g,"mouseup touchend",Y),y&&y(s)}),this._handleEl=v},remove:function(){a.off(this._handleEl)}});return s.register(l,"movable"),i.Movable=l});
//# sourceMappingURL=sourcemaps/movable.js.map