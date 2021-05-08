/**
 * skylark-domx-plugins-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-finder","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-query","skylark-domx-plugins-base","./interact","./Movable"],function(t,e,r,i,n,h,o,c,a,l,d){h.on,h.off,r.attr,r.removeAttr,n.pagePosition,o.addClass,n.height,Array.prototype.some,Array.prototype.map;var s=a.Plugin.inherit({klassName:"Resizable",pluginName:"lark.resizable",options:{touchActionNone:!0,handle:{border:{directions:{top:!0,left:!0,right:!0,bottom:!0,topLeft:!0,topRight:!0,bottomLeft:!0,bottomRight:!0},classes:{all:"resizable-handle",top:"resizable-handle-n",left:"resizable-handle-w",right:"resizable-handle-e",bottom:"resizable-handle-s",topLeft:"resizable-handle-nw",topRight:"resizable-handle-ne",bottomLeft:"resizable-handle-sw",bottomRight:"resizable-handle-se"}},grabber:{selector:"",direction:"bottomRight"},selector:!0},constraints:{minWidth:null,minHeight:null,maxWidth:null,maxHeight:null}},_construct:function(r,h){this.overrided(r,h);var o=(h=this.options).handle||{},c=h.constraints||{},a=h.started,l=h.moving,s=h.stopped;function m(t,e){let i;d(t,{auto:!1,started:function(t){i=n.relativeRect(r),a&&a(t)},moving:function(t){currentRect={},"right"!=e&&"topRight"!=e&&"bottomRight"!=e||(currentRect.width=i.width+t.deltaX,c.minWidth&&currentRect.width<c.minWidth&&(currentRect.width=c.minWidth),c.maxWidth&&currentRect.width>c.maxWidth&&(currentRect.width=c.maxWidth)),"bottom"!=e&&"bottomLeft"!=e&&"bottomRight"!=e||(currentRect.height=i.height+t.deltaY,c.minHeight&&currentRect.height<c.minHeight&&(currentRect.height=c.minHeight),c.maxHeight&&currentRect.height>c.maxHeight&&(currentRect.height=c.maxHeight)),"left"!=e&&"topLeft"!=e&&"bottomLeft"!=e||(currentRect.left=i.left+t.deltaX,currentRect.width=i.width-t.deltaX,c.minWidth&&currentRect.width<c.minWidth&&(currentRect.left=currentRect.left+currentRect.width-c.minWidth,currentRect.width=c.minWidth),c.maxWidth&&currentRect.width>c.maxWidth&&(currentRect.left=currentRect.left+currentRect.width-c.maxWidth,currentRect.width=c.maxWidth)),"top"!=e&&"topLeft"!=e&&"topRight"!=e||(currentRect.top=i.top+t.deltaY,currentRect.height=i.height-t.deltaY,c.minHeight&&currentRect.height<c.minHeight&&(currentRect.top=currentRect.top+currentRect.height-c.minHeight,currentRect.height=c.minHeight),c.maxHeight&&currentRect.height>c.maxHeight&&(currentRect.top=currentRect.top+currentRect.height-c.maxHeight,currentRect.height=c.maxHeight)),n.relativeRect(r,currentRect),l&&l(t)},stopped:function(t){s&&s(t)}})}if(t.isString(o)?handleEl=i.find(r,o):t.isHtmlNode(o)&&(handleEl=o),o&&o.border){for(var g in o.border.directions)if(o.border.directions[g]){m(e.createElement("div",{className:o.border.classes.all+" "+o.border.classes[g],direction:g},r),g)}}if(o&&o.grabber&&o.grabber.selector){m(i.find(r,o.grabber.selector),o.grabber.direction)}},remove:function(){h.off(this._handleEl)}});return a.register(s,"resizable"),l.Resizable=s});
//# sourceMappingURL=sourcemaps/resizable.js.map
