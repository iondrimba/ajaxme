!function(root,factory){"object"==typeof exports?module.exports=factory():"function"==typeof define&&define.amd?define([],function(){return root.AjaxMe=factory()}):root.AjaxMe=factory()}(this,function(){"use strict";function addCallBacks(request,options){request.onload=function(evt){request.status>=200&&request.status<400?options.success(request):options.error(evt)},request.onerror=function(evt){options.error(evt)},request.onabort=function(evt){options.abort&&options.abort(evt)},request.onloadend=function(evt){options.loadend&&options.loadend(evt)},request.onloadstart=function(evt){options.loadstart&&options.loadstart(evt)},request.onprogress=function(evt){options.progress&&options.progress(evt)}}function AjaxMe(){}return AjaxMe.prototype.post=function(options){var request=new XMLHttpRequest;return request.open("POST",options.url,!0),request.setRequestHeader("Content-Type","application/json; charset=UTF-8"),request.send(options.data),addCallBacks(request,options),request},AjaxMe.prototype.get=function(options){var request=new XMLHttpRequest;return request.open("GET",options.url,!0),addCallBacks(request,options),request.send(),request},new AjaxMe});