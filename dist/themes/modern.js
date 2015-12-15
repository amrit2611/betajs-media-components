/*!
betajs-media-components - v0.0.5 - 2015-12-15
Copyright (c) Oliver Friedmann
MIT Software License.
*/
(function () {

var Scoped = this.subScope();

Scoped.binding("module", "global:BetaJS.MediaComponents");

Scoped.extend('module:Templates', function () {
return {"modern-controlbar":" <div class=\"{{css}}-dashboard {{activitydelta > 5000 ? (css + '-dashboard-hidden') : ''}}\">        <div class=\"{{css}}-leftbutton-container\" ba-if=\"{{rerecordable}}\">            <div class=\"{{css}}-button-inner\" ba-click=\"rerecord()\" title=\"{{string('rerecord-video')}\">                <i class=\"ba-videoplayer-icon-ccw\"></i>            </div>        </div>  <div class=\"{{css}}-leftbutton-container\">   <div class=\"{{css}}-button-inner\" ba-show=\"{{!playing}}\" ba-click=\"play()\" title=\"{{string('play-video')}}\">    <i class=\"ba-videoplayer-icon-play\"></i>   </div>   <div class=\"{{css}}-button-inner\" ba-show=\"{{playing}}\"    ba-click=\"pause()\" title=\"{{string('pause-video')}}\">    <i class=\"ba-videoplayer-icon-pause\"></i>   </div>  </div>  <div class=\"{{css}}-time-container\">   <div class=\"{{css}}-time-value\" title=\"{{string('elapsed-time')}}\">{{position_formatted}}/{{duration_formatted}}</div>  </div>   <div class=\"{{css}}-rightbutton-container\" ba-if=\"{{fullscreen}}\">    <div class=\"{{css}}-button-inner\" ba-click=\"toggle_fullscreen()\" title=\"{{string('fullscreen-video')}}\">     <i class=\"ba-videoplayer-icon-resize-full\"></i>    </div>   </div> </div> ","modern-playbutton":" <div class=\"{{css}}-playbutton-container\" ba-click=\"play()\" title=\"{{string('tooltip')}}\">  <div class=\"{{css}}-playbutton-button\"></div> </div> "};
});
Scoped.extend("module:Assets.themes", ["module:Templates"], function (Templates) {
	return {
		modern: {
			css: "ba-videoplayer-theme-modern",
			tmplplaybutton: Templates["modern-playbutton"],
			tmplcontrolbar: Templates["modern-controlbar"]
		}
	};
});
}).call(Scoped);