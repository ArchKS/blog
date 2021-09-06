/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(50)['default'];


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(v1,v2,options){
  if(v1 == v2){
    //满足添加继续执行
    return options.fn(this);
  }else{
      //不满足条件执行{{else}}部分
      return options.inverse(this);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jumpToDG = exports.emH5Jump = exports.douGuPost = exports.emH5ToStockBar = exports.emH5ToStock_byList = exports.emH5ToStock2 = exports.emH5ToStock = exports.getBasicColor = exports.getSkin = exports.getAppInfo = exports.emH5PageScroll = exports.emH5Title = exports.getIosVerison = exports.setTop = exports.emSendPageInfoToAPP = exports.isIphoneX = exports.emH5Share = exports.jumpToUser = exports.emAlert = exports.emComfirm = exports.emOpenOptRealNameDialog = exports.gubaShare = exports.emH5PublishTopic = exports.emH5ReplyInput = exports.eventLogin = exports.disableTitleRightBtn = exports.emSetTitleRightBtn = exports.setWebViewType = exports.callNative = exports.eventGetLoginStatus = exports.jumpToCFH = exports.jumpToPost2 = exports.jumpToPost = exports.isWeibo = exports.isWeixin = exports.isQQBrowser = exports.isQQApp = exports.isQQ = exports.isUC = exports.isAndroid = exports.isIPad = exports.isIOS = exports.isHybrid = void 0;
var env_1 = __webpack_require__(22);
var text_1 = __webpack_require__(15);
var appPlat = 1;
function isHybrid() {
    if (/eastmoney/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isHybrid = isHybrid;
function isIOS() {
    if (/(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isIOS = isIOS;
function isIPad() {
    if (/(iPad)/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isIPad = isIPad;
function isAndroid() {
    // if(/Android/i.test(navigator.userAgent) && (appPlat != 0)) {
    if (/Android/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isAndroid = isAndroid;
/**
 * 是不是UC
 */
function isUC() {
    return navigator.userAgent.indexOf('UCBrowser') > -1 ? true : false;
}
exports.isUC = isUC;
/**
 * 是不是在QQ里，但不能区分是QQapp内置浏览器还是QQ浏览器
 */
function isQQ() {
    if (/QQ/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isQQ = isQQ;
/**
 * 在QQapp内置浏览器里
 */
function isQQApp() {
    if (/ qq/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isQQApp = isQQApp;
/**
 * 在QQ浏览器里
 */
function isQQBrowser() {
    if (/mqqbrowser/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isQQBrowser = isQQBrowser;
function isWeixin() {
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isWeixin = isWeixin;
function isWeibo() {
    if (/weibo/i.test(navigator.userAgent.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
}
exports.isWeibo = isWeibo;
/**
 * 添加看不见的iframe
 * @param  {[type]} url [description]
 */
function appendIframe(url) {
    var url = url;
    var iframe = document.createElement('iframe');
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.class = "app_jsbridge";
    document.body.appendChild(iframe);
    setTimeout(function () {
        iframe.remove();
    }, 1000);
}
/**
 * 跳转至原生正文页
 * @param postid 帖子id
 * @param third_id 三方id
 * @param type 帖子类型，传入三方id时用 0默认
 * @param tocomment 是否滑动到评论 0不滑动 1滑
 */
function jumpToPost(postid, third_id, type, tocomment) {
    if (third_id === void 0) { third_id = ""; }
    if (type === void 0) { type = 0; }
    if (tocomment === void 0) { tocomment = 0; }
    switch (type) {
        case 1: // 资讯
            if (third_id) {
                if (isIOS()) { // ios
                    appendIframe("eastmoney://wireless/gubacontent?postid=" + third_id + "&posttype=1&tocomment=" + tocomment);
                }
                else { // 安卓
                    appendIframe("dfcft://router/news/detail?id=" + third_id + "&type=" + type + "&isComment=" + (tocomment == 1 ? true : false));
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 2: // 研报
            if (third_id) {
                if (isIOS()) { // ios
                    appendIframe("eastmoney://page/gubacontent?postid=" + third_id + "&posttype=2&tocomment=" + tocomment);
                }
                else { // 安卓
                    appendIframe("dfcft://router/news/reportDetail?infocode=" + third_id + "&isComment=" + (tocomment == 1 ? true : false));
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 3: // 公告
            if (third_id) {
                if (isIOS()) { // ios
                    appendIframe("eastmoney://page/gubacontent?postid=" + third_id + "&posttype=3&tocomment=" + tocomment);
                }
                else { // 安卓
                    appendIframe("dfcft://router/news/noticeDetail?postId=&postType=3&articleCode=" + third_id + "&isComment=" + (tocomment == 1 ? true : false));
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 20: // 财富号
            if (isIOS()) { // ios
                appendIframe("eastmoney://page/cfhh5?artcode=" + third_id + "&postid=" + postid + "&requesttype=1&tocomment=" + tocomment);
            }
            else { // 安卓
                appendIframe("dfcft://router/news/cfhDetail?postId=" + postid + "&postType=0&toReply=" + (tocomment == 1 ? true : false) + "&artCode=" + third_id);
            }
            break;
        case 30: // 斗股
            if (isIOS()) { // ios
                window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=" + type + "&tocomment=" + tocomment;
            }
            else { // 安卓
                appendIframe("dfcft://router/news/douGuDetail?postId=" + postid + "&posttype=" + type + "&tocomment=" + tocomment);
            }
            break;
        case 0: // 股吧
            if (isIOS()) {
                window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
            }
            else {
                appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
            }
            break;
        case 11: // 资讯
            if (third_id) {
                if (isIOS()) { // ios
                    appendIframe("eastmoney://wireless/gubacontent?postid=" + third_id + "&posttype=1&tocomment=" + tocomment);
                }
                else if (isAndroid()) { // 安卓
                    appendIframe("dfcft://router/news/detail?id=" + third_id + "&type=" + type + "&isComment=" + (tocomment == 1 ? true : false));
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        default: // 股吧
            if (isIOS()) {
                window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
            }
            else {
                // window.location.href = ` http://mguba.eastmoney.com/mguba/article/0/${postid}`
                appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
            }
    }
}
exports.jumpToPost = jumpToPost;
// 1. 资讯 https://wap.eastmoney.com/a/${third_id}.html
// 2. 研报 http://stock.eastmoney.com/a/202108202056337256.html
// 3. 公告 https://data.eastmoney.com/notices/detail/00728/AN202108201511226824.html
// 4. 斗股 https://mguba.eastmoney.com/mguba/article/0/1073660991
// 5. 财富号 https://emcreative.eastmoney.com/Fortune/h5/article/index_share.html?artcode=20210820155824925229690&postId=1074103883
function jumpToPost2(postid, third_id, type, tocomment) {
    if (third_id === void 0) { third_id = ""; }
    if (type === void 0) { type = 0; }
    if (tocomment === void 0) { tocomment = 0; }
    switch (type) {
        case 1 || 11: // 资讯
            if (third_id) {
                if (isHybrid()) {
                    if (isIOS()) {
                        appendIframe("eastmoney://wireless/gubacontent?postid=" + third_id + "&posttype=1&tocomment=" + tocomment);
                    }
                    else {
                        appendIframe("dfcft://router/news/detail?id=" + third_id + "&type=" + type + "&isComment=" + (tocomment == 1 ? true : false));
                    }
                }
                else {
                    window.open("https://wap.eastmoney.com/a/" + third_id + ".html");
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 2: // 研报
            if (third_id) {
                if (isHybrid()) {
                    if (isIOS()) { // ios
                        appendIframe("eastmoney://page/gubacontent?postid=" + third_id + "&posttype=2&tocomment=" + tocomment);
                    }
                    else { // 安卓
                        appendIframe("dfcft://router/news/reportDetail?infocode=" + third_id + "&isComment=" + (tocomment == 1 ? true : false));
                    }
                }
                else {
                    window.open("http://stock.eastmoney.com/a/" + third_id + ".html");
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 3: // 公告
            if (third_id) {
                if (isHybrid()) {
                    if (isIOS()) { // ios
                        appendIframe("eastmoney://page/gubacontent?postid=" + third_id + "&posttype=3&tocomment=" + tocomment);
                    }
                    else { // 安卓
                        appendIframe("dfcft://router/news/noticeDetail?postId=&postType=3&articleCode=" + third_id + "&isComment=" + (tocomment == 1 ? true : false));
                    }
                }
                else {
                    window.open("https://data.eastmoney.com/notices/detail/00718/" + third_id + ".html");
                }
            }
            else {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            break;
        case 20: // 财富号
            if (isHybrid()) {
                if (isIOS()) { // ios
                    appendIframe("eastmoney://page/cfhh5?artcode=" + third_id + "&postid=" + postid + "&requesttype=1&tocomment=" + tocomment);
                }
                else { // 安卓
                    appendIframe("dfcft://router/news/cfhDetail?postId=" + postid + "&postType=0&toReply=" + (tocomment == 1 ? true : false) + "&artCode=" + third_id);
                }
            }
            else {
                window.open("https://emcreative.eastmoney.com/Fortune/h5/article/index_share.html?artcode=" + third_id + "&postId=" + postid);
            }
            break;
        case 30:
        case 61: // 斗股
            if (isHybrid()) {
                if (isIOS()) { // ios
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=" + type + "&tocomment=" + tocomment;
                }
                else { // 安卓
                    appendIframe("dfcft://router/news/douGuDetail?postId=" + postid + "&posttype=" + type + "&tocomment=" + tocomment);
                }
            }
            else {
                window.open("https://mguba.eastmoney.com/mguba/article/0/" + postid);
            }
            break;
        case 0: // 股吧
            var _url = "//mguba2020-test.eastmoney.com/mguba/article/0/" + postid;
            if (env_1.env.isRelease) {
                _url = "//mguba.eastmoney.com/mguba/article/0/" + postid;
            }
            if (isHybrid()) {
                if (isIOS()) {
                    window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
                }
                else {
                    appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
                }
            }
            else {
                window.open(_url);
            }
            break;
        default: // 股吧
            if (isIOS()) {
                window.location.href = "eastmoney://wireless/gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment;
            }
            else {
                // window.location.href = ` http://mguba.eastmoney.com/mguba/article/0/${postid}`
                appendIframe("dfcft://gubacontent?postid=" + postid + "&posttype=0&tocomment=" + tocomment);
            }
    }
}
exports.jumpToPost2 = jumpToPost2;
/**
 * 跳转至财富号正文页
 * @param third_id 三方id
 * @param postid 帖子id
 */
function jumpToCFH(third_id, postid) {
    if (isIOS()) { // ios
        appendIframe("eastmoney://page/cfhh5?artcode=" + third_id + "&postid=" + postid + "&requesttype=1");
    }
    else { // 安卓
        appendIframe("dfcft://router/news/cfhDetail?postId=" + postid + "&postType=0&toReply=true&artCode=" + third_id);
    }
}
exports.jumpToCFH = jumpToCFH;
/*
* 登录回调
*/
function eventGetLoginStatus(callback) {
    var jsonStr = "{\"callbackname\":\"" + callback + "\"}";
    if (isIOS()) {
        window.location.href = "emH5GetLoginStatus:" + jsonStr;
    }
    else {
        prompt('emH5GetLoginStatus', jsonStr);
    }
}
exports.eventGetLoginStatus = eventGetLoginStatus;
function callNative(name, jsonStr) {
    if (!isHybrid()) {
        return;
    }
    if (isIOS()) {
        if (name == "triggerPageAction") { // triggerPageAction 用 window.location.href 没效果
            if (window.webkit && window.webkit.messageHandlers) {
                window.webkit.messageHandlers.triggerPageAction.postMessage(jsonStr);
            }
            else {
                window.eastmoney.triggerPageAction(jsonStr);
            }
        }
        else {
            window.location.href = name + ":" + jsonStr;
        }
    }
    else {
        prompt(name, jsonStr);
    }
}
exports.callNative = callNative;
function setWebViewType(action) {
    var webViewType = {
        "type": "setWebViewType",
        "param": {
            "action": action
        }
    };
    callNative("triggerPageAction", JSON.stringify(webViewType));
}
exports.setWebViewType = setWebViewType;
function emSetTitleRightBtn(type, enable, btnText, callbackName, textcolor) {
    if (enable === void 0) { enable = "1"; }
    if (btnText === void 0) { btnText = ""; }
    if (callbackName === void 0) { callbackName = ""; }
    if (textcolor === void 0) { textcolor = ""; }
    if (type == null) {
    }
    else {
        if (!type) {
            type = "common";
        }
    }
    var emSetTitleRightBtnJsonEnable = {
        "type": type,
        "enable": type == null ? "0" : enable,
        "btntext": btnText,
        "callbackname": callbackName,
        "textcolor": textcolor
    };
    callNative("emSetTitleRightBtn", JSON.stringify(emSetTitleRightBtnJsonEnable));
}
exports.emSetTitleRightBtn = emSetTitleRightBtn;
function disableTitleRightBtn() {
    var emSetTitleRightBtnJsonEnable = {
        "type": "none",
        "enable": "0",
        "callbackname": ""
    };
    callNative("emSetTitleRightBtn", JSON.stringify(emSetTitleRightBtnJsonEnable));
}
exports.disableTitleRightBtn = disableTitleRightBtn;
/**
 * 原生登录
 */
function eventLogin(callbackname) {
    var jsonStr = "{\"callbackname\":\"" + callbackname + "\",\"textmsg\":\"\",\"wechat\":\"1\",\"qq\":\"1\",\"sina\":\"1\"}";
    if (isIOS()) {
        window.location.href = "emH5NativeLogin:" + jsonStr;
    }
    else {
        // if(typeof(window.eastmoney)!="undefined"){
        // 	eastmoney.emH5NativeLogin(jsonStr);
        // }
        prompt('emH5NativeLogin', jsonStr);
    }
}
exports.eventLogin = eventLogin;
/**
 * 调用native回复输入框
 * @param  {[type]} tid      [帖子id]
 * @param  {[type]} callback [回调函数]
 * @param  {[type]} hid      [回复id]
 * @param  {[type]} h_name   [作者名称]
 * @return {[type]}
 */
function emH5ReplyInput(tid, callback, hid, h_name) {
    window.callbackGubaReplyInput = function (param) {
        //{"data":{"tid":"xxxxxxxxx"},"msg":"","code":0}		//code 0=>成功 1=>失败
        if (callback) {
            callback(param);
        }
    };
    var param = {
        "tid": tid,
        "hid": hid ? hid : "",
        "h_name": h_name ? h_name : "",
        "callbackname": "callbackGubaReplyInput"
    };
    var jsonStr = JSON.stringify(param);
    if (isIOS()) {
        callIOSNative("emH5ReplyTieZi:" + jsonStr);
    }
    else {
        prompt('emH5ReplyTieZi', jsonStr);
    }
}
exports.emH5ReplyInput = emH5ReplyInput;
/**
 * @desc 调用native发帖
 * @param  {[type]} code         [股票code]
 * @param  {[type]} topicId      [话题id]
 * @param  {[type]} topicName    [话题名称]
 * @param  {[type]} callback     [回调]
 * @return {[type]} [description]
 */
function emH5PublishTopic(code, topicId, topicName, stockname, callback) {
    var param = {
        "code": code ? code : "",
        "topic_id": topicId,
        "topic_name": topicName,
        "guba_name": stockname,
        "callbackname": "callbackGubaPublish"
    };
    // console.log(param)
    var jsonStr = JSON.stringify(param);
    if (isIOS()) {
        callIOSNative("emH5PostTieZi:" + jsonStr);
    }
    else { //Android
        window.eastmoney.emH5PostTieZi(jsonStr);
    }
    window.callbackGubaPublish = function (param) {
        //{"data":{"tid":"xxxxxxxxx"},"msg":"","code":0}		//code 0=>成功 1=>失败
        if (callback) {
            callback(param);
        }
    };
}
exports.emH5PublishTopic = emH5PublishTopic;
/**
 * 统一调用ios交互方式
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function callIOSNative(url) {
    appendIframe(url);
}
/**
 * 分享框
 */
function gubaShare(obj) {
    var json = {
        "type": "gubaShare",
        "param": {
            "callbackname": "",
            "data": obj
        }
    };
    var jsonStr = JSON.stringify(json);
    callNative("triggerPageAction", jsonStr);
}
exports.gubaShare = gubaShare;
function emOpenOptRealNameDialog(callbackname) {
    var json2 = {
        "callbackname": callbackname
    };
    var jsonStr = JSON.stringify(json2);
    if (isIOS()) {
        if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.emOpenOptRealNameDialog.postMessage(jsonStr);
        }
        else {
            prompt('emOpenOptRealNameDialog', jsonStr);
        }
    }
    else {
        prompt('emOpenOptRealNameDialog', jsonStr);
    }
}
exports.emOpenOptRealNameDialog = emOpenOptRealNameDialog;
function emComfirm(param) {
    var jsonStr = JSON.stringify(param);
    if (isIOS()) {
        window.location = "emH5toNativeAlterView:" + jsonStr;
    }
    else {
        prompt('emH5toNativeAlterView', jsonStr);
    }
}
exports.emComfirm = emComfirm;
/**
 * @desc 原生弹窗
 * @param  param 参数
 * @return
 */
function emAlert(param) {
    var jsonStr = JSON.stringify(param);
    //var jsonStr = param;
    if (isIOS()) { // ios
        if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.emToast.postMessage(jsonStr);
        }
        else {
            window.eastmoney.emToast(jsonStr);
        }
    }
    else { // 安卓
        prompt('emToast', jsonStr);
    }
}
exports.emAlert = emAlert;
// helper.Bridge.emComfirm({
//     title: '',
//     content:
//         '该用户为您的屏蔽用户，确定解除屏蔽并关注此人？',
//     okbt: {
//         name: '确定',
//         event: 'removeMyBlackUser',
//     },
//     cnacelbt: {
//         name: '取消',
//         event: '',
//     },
// })
// helper.Bridge.emAlert({msg:"帖子审核中"});
/**
 * 跳转用户个人中心
 */
function jumpToUser(uid) {
    if (isIOS()) {
        window.location.href = 'eastmoney://wireless/stockbarselfpage?userid=' + uid + '&anchor=1';
    }
    else {
        window.location.href = 'dfcft://gubauserhome?uid=' + uid + '&anchor=1';
    }
}
exports.jumpToUser = jumpToUser;
function emH5Share(params) {
    params.callbackname = "";
    var jsonStr = JSON.stringify(params);
    // console.log("jsonStr", jsonStr)
    if (isIOS()) { //IOS
        window.location = "onwebshareclicked:" + jsonStr;
    }
    else { //Android
        window.eastmoney.onShareClicked(jsonStr);
    }
}
exports.emH5Share = emH5Share;
/**
 * 是否是IPhoneX
 */
function isIphoneX() {
    if (isIOS()) {
        if (screen.height >= 812 && screen.width == 375) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
exports.isIphoneX = isIphoneX;
function emSendPageInfoToAPP(param) {
    var jsonStr = JSON.stringify(param);
    if (isIOS()) { //IOS
        if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.emSendPageInfoToAPP.postMessage(jsonStr);
        }
        else {
            window.eastmoney.emSendPageInfoToAPP(jsonStr);
        }
    }
    else { //android
        prompt('emSendPageInfoToAPP', jsonStr);
    }
}
exports.emSendPageInfoToAPP = emSendPageInfoToAPP;
function setTop() {
    if (!isHybrid()) {
        return;
    }
    // emSendPageInfoToAPP({
    //     "pageMethods":{
    //         'getWebviewInfo':'getWebviewInfoforCB'
    //     }
    // })
    var arr = isIOS() ? window.navigator.userAgent.split(' ') : window.navigator.userAgent.split(';');
    var statusBarHeight = 0;
    var titleBarHeight = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        // console.log(arr);
        if (element.indexOf("statusBarHeight") >= 0) {
            statusBarHeight = element.substr(16, 999) ? Number(element.substr(16, 999)) : 0;
        }
        if (element.indexOf("titleBarHeight") >= 0) {
            titleBarHeight = element.substr(15, 999) ? Number(element.substr(15, 999)) : 0;
        }
    }
    // alert(statusBarHeight+":"+statusBarHeight);
    window.getWebviewInfoforCB({
        statusBarHeight: statusBarHeight,
        titleBarHeight: titleBarHeight
    });
}
exports.setTop = setTop;
window.getWebviewInfoforCB = function (res) {
    var statusBarHeight = res.statusBarHeight;
    var titleBarHeight = res.titleBarHeight;
    // msg(`${statusBarHeight} ${titleBarHeight} ${document.documentElement.clientWidth}`);
    window.statusBarHeight = statusBarHeight;
    window.titleBarHeight = titleBarHeight;
    if (isHybrid()) {
        if (window.navigator.userAgent.indexOf('Android 4.4') > -1) {
            window.statusBarHeight = statusBarHeight = 0;
        }
        var e = document.querySelector("header .header_wrap");
        if (e) {
            e.style.paddingTop = (statusBarHeight + 7) + "px";
            e.style.height = (statusBarHeight + titleBarHeight) + "px";
        }
        var d = document.querySelector("#detail_head");
        if (d) {
            d.style.paddingTop = (statusBarHeight + titleBarHeight) + "px";
        }
        var s = document.querySelector("#stock_filter");
        if (s) {
            s.style.paddingTop = (statusBarHeight + titleBarHeight + 15) + "px";
        }
    }
};
/**
 *
 * @param 获取ios版本
 * @returns
 */
function getIosVerison() {
    var str = navigator.userAgent.toLowerCase();
    var ver = str.match(/cpu iphone os (.*?) like mac os/);
    if (!ver) {
        //alert("请在Ios系统中打开");
        return null;
    }
    else {
        //alert("你当前的Ios系统版本为："+ver[1].replace(/_/g,"."));
        return ver[1].replace(/_/g, ".");
    }
}
exports.getIosVerison = getIosVerison;
/**
* 改native头
* @param title 标题
*/
function emH5Title(title) {
    var jsonStr = '{"title1":"' + title + '"}';
    try {
        if (isIOS()) {
            callIOSNative("emH5Title:" + jsonStr);
        }
        else {
            window.eastmoney.emH5Title(jsonStr); //android
        }
    }
    catch (e) {
        return false;
    }
}
exports.emH5Title = emH5Title;
/**
 * @desc 滚动头动画颜色，需要滚动高度告诉app
 * @param left
 * @param top
 * @return
 */
function emH5PageScroll(left, top) {
    var jsonStr = '{"l":' + left + ',"t":' + top + '}';
    try {
        if (isIOS()) { // ios
            if (window.webkit && window.webkit.messageHandlers) {
                window.webkit.messageHandlers.emH5OnScrollChanged.postMessage(jsonStr);
            }
            else {
                window.eastmoney.emH5OnScrollChanged(jsonStr);
            }
        }
        else {
            // prompt('h5onScrollChanged',jsonStr);//android
            // console.log("eastmoney://h5onScrollChanged?value=" + encodeURIComponent(jsonStr))
        }
    }
    catch (e) {
        return false;
    }
}
exports.emH5PageScroll = emH5PageScroll;
window.emH5GetAppInfoCB = function (res) {
    setTimeout(function () {
        var obj = text_1.emparse(res);
        if (obj['data']) {
            window.appversion = obj['data']['deviceInfo'].versionCode;
        }
    }, 10);
};
/**
 * 获取app基础信息(7.9用)
 * @return {[type]} [description] //options,passport,trade,history,deviceInfo
 */
function getAppInfo() {
    var json = {
        "callbackname": "emH5GetAppInfoCB",
        "type": "passport,deviceInfo"
    };
    if (isIOS()) { //IOS
        callIOSNative("h5getmoduleinfo:" + JSON.stringify(json));
    }
    else { //Android
        prompt('h5GetModuleInfo', JSON.stringify(json));
    }
}
exports.getAppInfo = getAppInfo;
/**
 * 获取皮肤
 */
function getSkin() {
    if (isHybrid()) {
        var ua = window.navigator.userAgent;
        if (ua.indexOf("color=w") > 0) { // 白
            return 'w';
        }
        if (ua.indexOf("color=b") > 0) { // 黑
            return 'b';
        }
        if (ua.indexOf("color=c") > 0) { // 经典
            return 'c';
        }
    }
}
exports.getSkin = getSkin;
/**
 * 获取皮肤基础颜色
 */
function getBasicColor() {
    if (getSkin() != "b") {
        return "#ea5504";
    }
    else {
        return "#4272bc";
    }
}
exports.getBasicColor = getBasicColor;
/**
 * 跳转股票
 * @param  {[type]} code [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
//跳转行情页面（旧方法）
function emH5ToStock(code, name) {
    var param = {
        "stockName": name,
        "stockCode": code
    };
    var jsonStr = JSON.stringify(param);
    if (isIOS()) {
        callIOSNative("emH5ToNativePage:" + jsonStr);
    }
    else {
        appendIframe("dfcft://stock?stockcode=" + code.toUpperCase() + "&stockname=" + name);
    }
}
exports.emH5ToStock = emH5ToStock;
//跳转行情页面（新方法）
function emH5ToStock2(code, market) {
    //alert(`dfcft://stockExchange?market=${market}&code=${code}`);
    if (isIOS()) {
        appendIframe("eastmoney://page/stockpage?market=" + market + "&code=" + code);
    }
    else {
        appendIframe("dfcft://stockExchange?market=" + market + "&code=" + code);
    }
    //dfcft://stockExchange?market=&code=
    //ios = `eastmoney://page/stockpage?market=${market}&code=${code}`
    //    android = `dfcft://stock?market=${market}&code=${code}`
}
exports.emH5ToStock2 = emH5ToStock2;
function emH5ToStock_byList(code, name) {
    if (isIOS()) {
        // eastmoney://page/emrn?id=Dougu&page=ArgueStock&stockCode=300059.SZ&stockName=%E4%B8%9C%E6%96%B9%E8%B4%A2%E5%AF%8C
        var url = "eastmoney://page/emrn?id=Dougu&page=ArgueStock&stockCode=" + code + "&stockName=" + encodeURIComponent(name);
        appendIframe(url);
    }
    else {
        // Android dfcft://emrn?id=Dougu&page=ArgueStock&stockCode=300059.SZ&stockName=%E4%B8%9C%E6%96%B9%E8%B4%A2%E5%AF%8C
        var url = "dfcft://emrn?id=Dougu&page=ArgueStock&stockCode=" + code + "&stockName=" + encodeURIComponent(name);
        appendIframe(url);
    }
}
exports.emH5ToStock_byList = emH5ToStock_byList;
/**
 * 跳转主题吧
 * @param  {[type]} code [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function emH5ToStockBar(code, name) {
    if (isIOS()) {
        appendIframe("eastmoney://wireless/themebarhome?code=" + code + "&name=" + name);
    }
    else {
        appendIframe("dfcft://themebarhome?code=" + code + "&name=" + name);
    }
}
exports.emH5ToStockBar = emH5ToStockBar;
/**
 * 跳转斗股发文页
 */
function douGuPost() {
    if (isIOS()) {
        appendIframe("eastmoney://page/publish/fightstock");
    }
    else {
        appendIframe("dfcft://router/guba/douGuPost");
    }
}
exports.douGuPost = douGuPost;
// export function emH5Jump(url: string): void {
//     if (isIOS()) {
//         appendIframe("eastmoney://wireless/h5/trade?url=" + encodeURIComponent(url));
//     } else {
//         appendIframe("dfcft://webh5?url=" + encodeURIComponent(url));
//     }
// }
/**
 * 跳转h5
 * @param  {[type]} url [description]
 * @param  {[type]} trans [是否打开透明顶通]
 * @return {[type]}      [description]
 */
function emH5Jump(url, trans) {
    if (trans) { // 透明顶通
        if (isIOS()) {
            appendIframe("eastmoney://wireless/h5/nonavweb?url=" + url + "&emthemenavmode=1");
        }
        else {
            appendIframe("dfcft://webh5?titlebartype=trans&url=" + url);
        }
    }
    else {
        if (isIOS()) {
            appendIframe("eastmoney://wireless/h5/trade?url=" + url);
        }
        else {
            appendIframe("dfcft://webh5?url=" + url);
        }
    }
}
exports.emH5Jump = emH5Jump;
function jumpToDG(id, type, showComment) {
    if (type === void 0) { type = 0; }
    if (showComment === void 0) { showComment = 1; }
    if (isIOS()) {
        // window.location.href = `eastmoney://wireless/gubacontent?postid=${id}&posttype=${type}&tocomment=${showComment}`;
        location.href = "eastmoney://page/gubacontent?postid=" + id + "&posttype=" + type + "&tocomment=" + showComment;
    }
    else {
        // appendIframe("dfcft://router/news/douGuDetail?postId=" + id);
        // appendIframe(`dfcft://webh5?url=http://emtest4.eastmoney.com:8003/collect/dougu/pages/article/detail.html?id=${id}`);
        location.href = "dfcft://router/news/douGuDetail?postId=" + id + "&posttype=" + type + "&tocomment=" + showComment;
    }
}
exports.jumpToDG = jumpToDG;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @Author          DZQ
 * @Created         2021/07/05
 * @Last-Modified   20201/07/06
 * @DESC            整合斗股页面公用方法
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.querySelector = exports.switchToSocketList = exports.stickyTab = exports.showWarning = exports.linkJump = exports.getTopHeaderHeight = exports.fmtRequestData = exports.flatten = exports.getShareDetail = exports.handleLike = exports.getDouguTopicRelatedStockListRead = exports.getDouguTopicDetailsRead = exports.getQueryVariable = exports.queryId = void 0;
var bridge_1 = __webpack_require__(2);
var net_1 = __webpack_require__(5);
var bridge_2 = __webpack_require__(2);
var htid = queryId(); // 帖子ID
function queryId() {
    return getQueryVariable("id");
}
exports.queryId = queryId;
// 获取URL Parmas字段
function getQueryVariable(key) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == key) {
            return pair[1];
        }
    }
    return '';
}
exports.getQueryVariable = getQueryVariable;
// 斗股详情页
function getDouguTopicDetailsRead() {
    var url = "newtopic/api/DouguTopic/DouguTopicDetailsRead";
    return new Promise(function (resolve, reject) {
        net_1.send(url, "htid=" + htid)
            .then(function (res) {
            if (res && res.rc == 1) {
                resolve(res);
            }
            else {
                reject(res);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getDouguTopicDetailsRead = getDouguTopicDetailsRead;
// 斗股获取股票列表
function getDouguTopicRelatedStockListRead() {
    var url = "newtopic/api/DouguTopic/DouguTopicDetailsRead";
    return new Promise(function (resolve, reject) {
        net_1.send(url, "htid=" + htid + "&p=1&ps=20")
            .then(function (res) {
            if (res && res.rc == 1) {
                resolve(res);
            }
            else {
                reject(res);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getDouguTopicRelatedStockListRead = getDouguTopicRelatedStockListRead;
// 点赞
function handleLike(post_is_like, post_id) {
    var url = "/likeopt/api/Like/" + (post_is_like ? 'LikeArticle' : 'CancelLikeArticle');
    return new Promise(function (resolve, reject) {
        net_1.send(url, "type=0&id=" + post_id)
            .then(function (res) {
            if (res && res.rc == 1) {
                resolve(res);
            }
            else {
                reject(res);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.handleLike = handleLike;
// 根据股票代码如 ['200111','209090'] => 得到股票具体信息
function getShareDetail(shareList) {
    return new Promise(function (resolve, reject) {
        net_1.getHq(shareList.join(",")).then(function (result) {
            resolve(result);
        }).catch(function (error) {
            reject(error);
        });
    });
}
exports.getShareDetail = getShareDetail;
// 对象扁平化
function flatten(obj) {
    function _flatten(o) {
        var tostr = Object.prototype.toString;
        var r = Object.keys(o).map(function (k) {
            var _a;
            if (tostr.call(o[k]) === '[object Object]') {
                return _flatten(o[k]);
            }
            else {
                return (_a = {}, _a[k] = o[k], _a);
            }
        });
        return [].concat.apply([], r);
    }
    return Object.assign.apply(Object, __spreadArrays([{}], _flatten(obj)));
}
exports.flatten = flatten;
// 用于在列表页面格式化请求类型
// 0 最热 1 最新
function fmtRequestData(hotOrNew, tag, page) {
    if (tag === void 0) { tag = '0'; }
    if (page === void 0) { page = 1; }
    var url;
    var shareList = ['600625'];
    var listResult;
    var obj = {
        count: -1,
        re: []
    };
    if (hotOrNew === 0) {
        url = "newtopic/api/DouguTopic/DouguTopicHotPostListRead";
    }
    else if (hotOrNew === 1) {
        url = "newtopic/api/DouguTopic/DouguTopicNewPostListRead";
    }
    else {
        return Promise.reject("传参异常");
    }
    return new Promise(function (resolve, reject) {
        net_1.send(url, "htid=" + htid + "&tag=" + tag + "&p=" + page + "&ps=20")
            .then(function (listRes) {
            if (listRes) {
                if (listRes.re.length === 0) {
                    resolve(obj);
                    return;
                }
                htid = queryId();
                obj["count"] = listRes.count;
                listRes.re = listRes.re.map(function (item) {
                    item.extend = JSON.parse(item.extend);
                    item.close_position_price = item.extend.dougu_Info.close_position.price;
                    item.close_position_efftime = item.extend.dougu_Info.close_position.efftime;
                    item.close_position_time = item.extend.dougu_Info.close_position.time;
                    item.post_start_price = item.extend.dougu_Info.post_start.price;
                    item.post_start_time = item.extend.dougu_Info.post_start.time;
                    item.htid = htid;
                    shareList.push(item.stock_list.qcode);
                    return item;
                });
                listResult = listRes.re;
                // 扁平化对象
                for (var index in listResult) {
                    var value = JSON.parse(JSON.stringify(listResult[index]));
                    listResult[index] = flatten(value);
                }
                return getShareDetail(shareList);
            }
            else {
                return Promise.reject("列表请求失败");
            }
        })
            .then(function (HqRes) {
            // console.log("2 success", HqRes);
            var itemList = HqRes.data.diff;
            for (var s = 0; s < itemList.length; s++) {
                var sitem = itemList[s];
                for (var r = 0; r < listResult.length; r++) {
                    var ritem = listResult[r];
                    if (sitem.f12 === ritem.qcode) {
                        listResult[r].ushare = sitem;
                    }
                }
            }
            // console.log("3. success");
            // 扁平化对象
            for (var index in listResult) {
                var value = JSON.parse(JSON.stringify(listResult[index]));
                listResult[index] = flatten(value);
                // 把 close_position_status 平仓字段转移给 bullish_bearish_tag
                // 如果平仓了，就让bullish_bearish_tag=0
                //  0 无 1 已平仓 2 未平仓 默认 0   
                if (listResult[index].close_position_status == 1) {
                    listResult[index].bullish_bearish_tag_bak = listResult[index].bullish_bearish_tag;
                    listResult[index].bullish_bearish_tag = 0;
                }
                if (listResult[index].is_top_cfh == true && hotOrNew == 0) { // 置顶 最热有置顶，最新没有置顶
                    listResult[index].is_top = 1;
                }
                else if (listResult[index].bullish_bearish_tag == 1 || listResult[index].bullish_bearish_tag_bak == 1) { // 看涨
                    listResult[index].is_top = 2;
                }
                else if (listResult[index].bullish_bearish_tag == 2 || listResult[index].bullish_bearish_tag_bak == 2) { // 看跌
                    listResult[index].is_top = 3;
                }
                else {
                    // console.log('undefined', listResult[index].bullish_bearish_tag, listResult[index].bullish_bearish_tag);
                }
            }
            obj.re = listResult;
            // obj.re = [];
            // console.log(url, obj);
            // listResult.forEach((item:any,index:any)=>{
            //     console.log(item.is_top)
            // })
            // listResult=[];
            resolve(obj);
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.fmtRequestData = fmtRequestData;
// 获取页面顶部的高度
function getTopHeaderHeight() {
    var arr = bridge_1.isIOS() ? window.navigator.userAgent.split(' ') : window.navigator.userAgent.split(';');
    var statusBarHeight = 0;
    var titleBarHeight = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        // console.log(arr);
        if (element.indexOf("statusBarHeight") >= 0) {
            statusBarHeight = element.substr(16, 999) ? Number(element.substr(16, 999)) : 0;
        }
        if (element.indexOf("titleBarHeight") >= 0) {
            titleBarHeight = element.substr(15, 999) ? Number(element.substr(15, 999)) : 0;
        }
    }
    return titleBarHeight + statusBarHeight;
}
exports.getTopHeaderHeight = getTopHeaderHeight;
// 页面跳转，默认跳转到APP对应的斗股POST_ID
function linkJump(callback) {
    if (bridge_2.isHybrid()) {
        callback();
    }
    else {
        // http://appcert.eastmoney.com/h52n/CommScheme?linktype=838&h5url=http%3A%2F%2Fmgubatopic.eastmoney.com%2Flist%3Fid%3D3508&tran1=trans&tran2=1&type=localurl&isreload=1&id=eastmoney%3A%2F%2Fwireless%2Fh5%2Fnonavweb%3Furl%3Dhttp%253A%252F%252Fmgubatopic.eastmoney.com%252Flist%253Fid%253D3508%26emthemenavmode%3D1
        window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href) + "&tran1=trans&tran2=1";
    }
}
exports.linkJump = linkJump;
function showWarning(bool) {
    var warnEle = document.getElementById("warning");
    if (bool) {
        warnEle.setAttribute("style", "display:block;");
    }
    else {
        warnEle.setAttribute("style", "display:none;");
    }
}
exports.showWarning = showWarning;
// tab吸顶
function stickyTab() {
    // console.log("吸顶");
    document.querySelector("#body").addEventListener('scroll', function (event) {
        var _a;
        // 滑动至吸顶的高度
        var fixHeight = Number((_a = getDocPos(document.body.querySelector("#occupy"))) === null || _a === void 0 ? void 0 : _a.top);
        var flexableHeight = getTopHeaderHeight() || document.querySelector('.header_wrap ').getBoundingClientRect().height;
        fixHeight -= flexableHeight;
        // position为fix状态下吸顶的高度
        var top = getTopHeaderHeight() || document.body.querySelector(".header_wrap").getBoundingClientRect().height;
        var XDE = document.body.querySelector("#suction"); // 吸顶div
        var ZWE = document.body.querySelector("#occupy"); // 占位div
        // console.log(fixHeight, event.target.scrollTop);
        if (fixHeight <= event.target.scrollTop) {
            // console.log("==========吸顶=========");
            XDE.className = "fixedTop";
            if (bridge_1.isWeixin()) {
                XDE.style.top = "0";
            }
            else {
                XDE.style.top = top + "px";
            }
            // 如果切换到相关股票，则高度要减去看多看空
            switchToSocketList();
        }
        else {
            // console.log("==========取消吸顶=========");
            XDE.className = "";
        }
    });
}
exports.stickyTab = stickyTab;
function switchToSocketList() {
    var XDE = document.body.querySelector("#suction"); // 吸顶div
    var TIL = document.body.querySelector("#suction .tab"); // 主项，最新最热
    var ZWE = document.body.querySelector("#occupy"); // 占位div
    // 如果切换到相关股票，则高度要减去看多看空
    var active = document.querySelector("#suction .tab .active");
    var num = active.dataset.num;
    if (num == 3) {
        ZWE.style.height = XDE.getBoundingClientRect().height - TIL.getBoundingClientRect().height + "px";
    }
    else {
        ZWE.style.height = XDE.getBoundingClientRect().height + "px";
    }
}
exports.switchToSocketList = switchToSocketList;
function getDocPos(obj) {
    var l = obj.offsetLeft;
    var t = obj.offsetTop;
    if (!obj)
        return;
    var current = obj.offsetParent;
    while (current) {
        if (!current)
            return;
        l += current.offsetLeft;
        t += current.offsetTop;
        current = current.offsetParent;
    }
    return { left: l, top: t };
}
function querySelector(selector) {
    return document.querySelector(selector);
}
exports.querySelector = querySelector;
/* 页面滚动到top位置，出发callbackExec方法，滚动回去，出发callbackRest方法 */
function Observer(top, callbackExec, callbackRest) {
    // @ts-ignore
    document.querySelector("#body").addEventListener("scroll", function (event) {
        if (event.target.scrollTop > top) {
            callbackExec();
        }
        else {
            callbackRest();
        }
    });
}
exports.Observer = Observer;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function adZero(num) {
    num = "" + num;
    // 是 '-'
    if (isNaN(num)) {
        num = '--';
    } else {
        if (/\./.test(num)) { // 如果是小数
            // 判断小数是否满两位
            if (num.split('.').pop().length < 2) {
                num += "0"
            }
        } else {
            num = num + '.00';
        }
    }
    return num;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadResource = exports.getHq_core = exports.getHq = exports.sendGbapiJsonp = exports.sendJsonp = exports.ajax = exports.send = void 0;
var util_1 = __webpack_require__(13);
var jsonp_1 = __webpack_require__(45);
var env_1 = __webpack_require__(22);
var stock_1 = __webpack_require__(26);
var cookie_1 = __webpack_require__(27);
var user_1 = __webpack_require__(8);
var md5 = __webpack_require__(46);
var mask_1 = __webpack_require__(47);
var bubble_1 = __webpack_require__(18);
var bridge_1 = __webpack_require__(2);
var defaultNetParam = {
    origin: window.location.origin,
    env: 2,
    timeout: 5000,
};
function send(route, param, realUrl, _env) {
    if (realUrl === void 0) { realUrl = "//mguba2020.eastmoney.com/mguba2020/interface/GetData.aspx"; }
    // let realUrl: string = "/interface/GetData.aspx"
    (new mask_1.Mask()).show();
    var paramStr = "";
    var timeout = 5000;
    var appversion = "200";
    var platStr = "Wap";
    if (bridge_1.isHybrid()) {
        appversion = window.appversion ? window.appversion : "200";
        platStr = bridge_1.isIOS() ? "iphone" : "android";
    }
    // alert(param)
    if (typeof param == "string") {
        // paramStr = param+"&plat=app&version=300&product=Guba"
        paramStr = param;
    }
    else {
        // param = Object.assign(param, defaultNetParam)
        param = Object.assign({}, param);
        // param = Object.assign({ plat: 'app', version: '300', product: 'Guba' }, param)
        // paramStr = $.param(param);
        paramStr = util_1.params(param);
    }
    var paramObj = {
        param: paramStr,
        plat: platStr,
        path: route,
        env: _env ? _env : 1,
        origin: '',
        ctoken: user_1.user.ct,
        utoken: user_1.user.ut,
        version: appversion
    };
    if (env_1.env.isDevelop) { //本机情况下发送可以支持跨域的后台
        // realUrl = "//localhost:1307/GetData.aspx"
        realUrl = "//guba-test.eastmoney.com/interface/GetData.aspx";
        paramObj.origin = window.location.origin;
    }
    else if (env_1.env.isTest) {
        realUrl = "/mtopic2020/interface/GetData.aspx";
    }
    else {
        realUrl = "/mtopic2020/interface/GetData.aspx";
    }
    return ajax(realUrl, paramObj, 'json', timeout);
}
exports.send = send;
function ajax(url, paramObj, dataType, timeout) {
    if (dataType === void 0) { dataType = "json"; }
    if (timeout === void 0) { timeout = 30; }
    return new Promise(function (resolve, reject) {
        var method = "POST";
        var xhr = new XMLHttpRequest();
        // let form:FormData = new FormData()
        // form.append("param",paramObj.param)
        // form.append("path",paramObj.path)
        // form.append("env",paramObj.env+"")
        // if(paramObj.origin){
        //     form.append("origin",paramObj.origin)
        // }
        var arr = [];
        for (var key in paramObj) {
            arr.push(key + '=' + encodeURIComponent(paramObj[key]));
        }
        // console.log(arr)
        var formStr = arr.join('&');
        // console.log(formStr)
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                // resolve()
                // var response = xhr.responseText;
                // console.log(xhr)
                (new mask_1.Mask()).hide();
                if (window.navigator.userAgent.indexOf("Android 4.4.2") > -1) {
                    if (typeof xhr.response == "string") {
                        try {
                            resolve(JSON.parse(xhr.response));
                        }
                        catch (error) {
                        }
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    resolve(xhr.response);
                }
            }
        };
        xhr.onerror = function (e) {
            (new mask_1.Mask()).hide();
            if (!navigator.onLine) {
                (new bubble_1.Bubble("网络不给力，请重新加载")).enter();
            }
            console.error(e);
            reject(e);
        };
        xhr.ontimeout = function (e) {
            (new mask_1.Mask()).hide();
            console.error('timeout', e);
            reject(e);
        };
        xhr.withCredentials = true;
        // xhr.setRequestHeader()
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(formStr);
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET", url);
        // xhr.onload = () => resolve(xhr.responseText);
        // xhr.onerror = () => reject(xhr.statusText);
        // xhr.send();
        // $.ajax({
        //     type: method,
        //     url: url,
        //     dataType: dataType,
        //     data: param,
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     timeout:timeout*1000,
        //     success: function (data) {
        //         resolve(data)
        //     },
        //     error: function (res) {
        //         reject(res)
        //     }
        // });
    });
}
exports.ajax = ajax;
function sendJsonp(url, callback, isEncode) {
    if (callback === void 0) { callback = "callback"; }
    if (isEncode === void 0) { isEncode = true; }
    return jsonp_1.default(url, "", callback, isEncode);
}
exports.sendJsonp = sendJsonp;
function sendGbapiJsonp(url, callback, isHash) {
    if (callback === void 0) { callback = "callback"; }
    if (isHash === void 0) { isHash = true; }
    var ct = cookie_1.getCookie("ct");
    var ut = cookie_1.getCookie("ut");
    url = url + "&plat=wap&version=300&product=guba&deviceid=1&ctoken=" + ct + "&utoken=" + ut;
    if (isHash) {
        var str = "ctoken=" + ct + "utoken=" + ut + "_519d77b29be442f8";
        var md5_result = md5.hex_md5(str);
        url = url + "&h=" + md5_result;
    }
    if (env_1.env.isRelease) {
        url = "https://gbapi.eastmoney.com/" + url;
    }
    else {
        url = "//gbapi-test.eastmoney.com/" + url;
    }
    return jsonp_1.default(url, "", callback);
}
exports.sendGbapiJsonp = sendGbapiJsonp;
//http://61.152.230.207/help/ftables/FT4-个股行情字段表.html
//http://61.152.230.207/help/ftables/FT3-股票列表行情字段表.html
//整理行情接口所需code字符串，在push数组时需要将普通code转换类型，调用方法如：var secid = helper.stock.getHQSecIdByCode(json.re[i].GubaCode)
function getHq(codeStr, _a) {
    var fields = (_a === void 0 ? { fields: '' } : _a).fields;
    var secidStr = stock_1.getHQSecIdByMutiCode(codeStr);
    var isMuti = secidStr.indexOf(",") >= 0;
    var url = '';
    if (!fields) {
        fields = isMuti ? "f1,f2,f3,f4,f12,f13,f14,f152" : "f43,f48,f170,f57,f107,f58,f169,f107,f78";
    }
    if (isMuti) {
        url = 'https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&np=3&ut=a79f54e3d4c8d44e494efb8f748db291&invt=2&secids=' + secidStr + '&fields=' + fields;
    }
    else {
        url = 'https://push2.eastmoney.com/api/qt/stock/get?fltt=2&ut=a79f54e3d4c8d44e494efb8f748db291&invt=2&secid=' + secidStr + '&fields=' + fields;
    }
    return new Promise(function (resolve, reject) {
        sendJsonp(url, "cb")
            .then(function (res) {
            resolve(res);
        });
    });
}
exports.getHq = getHq;
// 不用替换code格式的函数
function getHq_core(codeStr, _a) {
    var fields = (_a === void 0 ? { fields: '' } : _a).fields;
    var isMuti = codeStr.indexOf(",") >= 0;
    var url = '';
    if (!fields) {
        fields = isMuti ? "f1,f2,f3,f4,f12,f13,f14,f152" : "f43,f48,f170,f57,f107,f58,f169,f107,f78";
    }
    if (isMuti) {
        url = 'https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&np=3&ut=a79f54e3d4c8d44e494efb8f748db291&invt=2&secids=' + codeStr + '&fields=' + fields;
    }
    else {
        url = 'https://push2.eastmoney.com/api/qt/stock/get?fltt=2&ut=a79f54e3d4c8d44e494efb8f748db291&invt=2&secid=' + codeStr + '&fields=' + fields;
    }
    return new Promise(function (resolve, reject) {
        sendJsonp(url, "cb")
            .then(function (res) {
            resolve(res);
        });
    });
}
exports.getHq_core = getHq_core;
var resources = {};
var resourcesStatus = {};
function cleanResourceQueue(url) {
    var cacheQueue = resources[url];
    if (cacheQueue) {
        for (var k in cacheQueue) {
            var cb = cacheQueue[k];
            cb();
        }
    }
}
function loadResource(url, cb, cache) {
    if (cache === void 0) { cache = false; }
    // console.log(url,cb)
    if (!resources[url]) {
        resources[url] = [];
        resourcesStatus[url] = 0;
    }
    resources[url].push(cb);
    if (cache === true) {
        if (resourcesStatus[url] == 1) {
            return;
        }
        else if (resourcesStatus[url] == 2) {
            cleanResourceQueue(url);
            return;
        }
    }
    resourcesStatus[url] = 1;
    var index1 = url.lastIndexOf(".") + 1;
    var index2 = url.length;
    var type = url.substring(index1, index2);
    var newDom = null;
    function loaded(_cb) {
        resourcesStatus[url] = 2;
        setTimeout(function () {
            // console.log("execute:"+url)
            if (cache === true) {
                cleanResourceQueue(url);
                return;
            }
            else {
                _cb && _cb();
            }
        }, 0);
    }
    if (type == "js") {
        newDom = document.createElement("script");
        newDom.setAttribute("type", "text/javascript");
        newDom.setAttribute("src", url);
        document.getElementsByTagName("body")[0].appendChild(newDom);
        if (document.all) { //IE
            newDom.onreadystatechange = function () {
                if (newDom.readyState == 'loaded' || newDom.readyState == 'complete') {
                    loaded(cb);
                }
            };
        }
        else {
            newDom.onload = function () {
                setTimeout(function () {
                    loaded(cb);
                }, 300);
            };
        }
    }
    else if (type == "css") {
        newDom = document.createElement("link");
        newDom.setAttribute("rel", "stylesheet");
        newDom.setAttribute("type", "text/css");
        newDom.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newDom);
        cb && cb();
    }
}
exports.loadResource = loadResource;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (num) {
    if (!isNaN(num)) {
        if (num > 100000000) {
            if (num >= 100000000000) {
                return (num / 100000000).toFixed(0) + '亿'
            } else {
                return (num / 100000000).toFixed(1) + '亿'
            }
        }
        if (num > 10000) {
            if (num >= 10000000) {
                return (num / 10000).toFixed(0) + '万'
            } else {
                return (num / 10000).toFixed(1) + '万'
            }
        }
        return num
    }
    return 0
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.PageTransitionState = void 0;
var bridge_1 = __webpack_require__(2);
var PageTransitionState;
(function (PageTransitionState) {
    PageTransitionState[PageTransitionState["In"] = 0] = "In";
    PageTransitionState[PageTransitionState["Out"] = 1] = "Out";
})(PageTransitionState = exports.PageTransitionState || (exports.PageTransitionState = {}));
var Page = /** @class */ (function () {
    function Page() {
        this.root = document.getElementById("body");
    }
    Page.prototype.getRoot = function () {
        return this.root;
    };
    Page.prototype.enter = function (parent) {
        if (this.root !== undefined) {
            parent.innerHTML = "";
            parent.appendChild(this.root);
        }
    };
    /**
     * 页面过渡
     * @param state
     */
    Page.prototype.transition = function (state) {
        if (state == 0) { // In
            bridge_1.setTop();
            setTimeout(function () {
                if (document.getElementById("transtionMask"))
                    document.getElementById("transtionMask").className = "show";
            }, 0);
            setTimeout(function () {
            }, 1000);
        }
        else { // Out
            if (document.getElementById("transtionMask"))
                document.getElementById("transtionMask").className = "";
        }
    };
    /**
     * 放到页面之后
     */
    Page.prototype.leave = function (parent) {
        // this.root.remove()
        // this.header.setRight([])
        // console.log("leave");
    };
    return Page;
}());
exports.Page = Page;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var cookie_1 = __webpack_require__(27);
var bridge_1 = __webpack_require__(2);
var User = /** @class */ (function () {
    function User() {
        this.statusLogin = false;
    }
    User.prototype.isLogin = function () {
        return this.statusLogin;
    };
    User.prototype.checkLogin = function (cb) {
        cookie_1.deleteCookie("pi");
        cookie_1.deleteCookie("ct");
        cookie_1.deleteCookie("ut");
        if (bridge_1.isHybrid()) {
            this.cbCheckLogin = cb;
            bridge_1.eventGetLoginStatus("user.callbackLogin");
        }
        else {
            var pi = cookie_1.getCookie("pi");
            if (pi && pi != "null") {
                this.statusLogin = true;
                this.uid = pi.split(';')[0];
                this.ct = cookie_1.getCookie("ct");
                this.ut = cookie_1.getCookie("ut");
            }
            if (cb) {
                cb();
            }
        }
    };
    /**
     * 请求登录
     */
    User.prototype.login = function (cb) {
        if (cb === void 0) { cb = function () { }; }
        if (bridge_1.isHybrid()) {
            this.cbCheckLogin = cb;
            bridge_1.eventLogin("window.user.callbackLogin");
        }
        else {
            window.location.href = "//mpassport.eastmoney.com/login?backurl=" + encodeURIComponent(window.location.href);
        }
    };
    User.prototype.callbackLogin = function (returnValue) {
        try {
            var json = JSON.parse(returnValue);
            //alert(returnValue);
            this.handleUserNativeLoginData(json);
        }
        catch (e) {
        }
    };
    User.prototype.handleUserNativeLoginData = function (json) {
        if (json) {
            if (json.code != 0) {
                exports.user.statusLogin = false;
                cookie_1.setCookie("pi", "", "1s");
                cookie_1.setCookie("ct", "", "1s");
                cookie_1.setCookie("ut", "", "1s");
                exports.user.uid = '0';
            }
            else {
                exports.user.statusLogin = true;
                var data = json.data;
                // setCookie("pi",data.pi,"d999999")
                // setCookie("ct",data.ct,"d999999")
                // setCookie("ut",data.ut,"d999999")
                // alert(data.pi);
                // alert(data.ct);
                // alert(data.ut);
                exports.user.nickname = data.nickname;
                exports.user.uid = data.uid;
                exports.user.ct = data.ct;
                exports.user.ut = data.ut;
                if (bridge_1.isAndroid()) {
                    sessionStorage.setItem("pi", data.pi);
                    sessionStorage.setItem("ct", data.ct);
                    sessionStorage.setItem("ut", data.ut);
                    sessionStorage.setItem("nickname", data.nickname);
                    cookie_1.setCookie("nickname", data.nickname);
                    sessionStorage.setItem("uid", data.uid);
                }
            }
        }
        else {
            exports.user.statusLogin = false;
            alert("callbackGetLoginStatus登录异常");
        }
        var oldCall = this.cbCheckLogin;
        this.cbCheckLogin = function () { };
        oldCall && oldCall();
    };
    return User;
}());
exports.user = window.user = new User();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRXpCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQjtBQUM1QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQU9PLFVBQVUsR0FQakIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQ0UsT0FBTyxLQUFLLEtBQUssVUFBVSxJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUM1QztHQUNILENBQUM7Q0FDSDtRQUNRLFVBQVUsR0FBVixVQUFVOzs7OztBQUlaLElBQU0sT0FBTyxHQUNsQixLQUFLLENBQUMsT0FBTyxJQUNiLFVBQVMsS0FBSyxFQUFFO0FBQ2QsU0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxHQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUN6QyxLQUFLLENBQUM7Q0FDWCxDQUFDOzs7OztBQUdHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUVNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQixXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xuICB9O1xufVxuZXhwb3J0IHsgaXNGdW5jdGlvbiB9O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9XG4gIEFycmF5LmlzQXJyYXkgfHxcbiAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iXX0=


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
* @fileOverview 路由
* @description 名字定义:
*              route是第三方Parser类,用来解析出参数等
*              path为浏览器url的pathname 字符串
*              page为具体的页面类实例
* @author xiling
* @version 0.1
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var page_1 = __webpack_require__(7);
var path_parser_1 = __webpack_require__(66);
/**
* @author xiling
* @constructor Router
* @description 路由
* @example new Router()
* @since version 0.1
*/
var Router = /** @class */ (function () {
    /*
    * @method 构造函数
    */
    function Router() {
        var _this = this;
        // @ts-ignore
        this.pageDic = new Map();
        window.onpopstate = function (e) {
            // console.log(e)
            var path = "";
            if (window.navigator.userAgent.indexOf("Android 4.4.2") >= -1) { // 安卓4.4.2垃圾
                path = e.state ? e.state.path : "";
            }
            else {
                path = e.state.path;
            }
            var nextPage = _this.getPageByPath(path); //this.pageDic.get(e.state.route as string)!
            // console.log(nextPage)
            _this.replacePage(nextPage);
        };
        window.onhashchange = function (e) {
            // console.log(e)
        };
    }
    /**
    * @description 获取页面内容
    * @param {string} pathStr 父节点
    * @return Path | undefined
    */
    Router.prototype.getPageByPath = function (pathStr) {
        var route = this.getRouteByPath(pathStr);
        if (route) {
            var page = this.pageDic.get(route);
            if (!page) {
                console.warn("没有找到路由页面,使用default路由");
                page = this.defaultPage;
            }
            return page;
        }
        return undefined;
    };
    /**
    * @description 获取路由地址
    * @param {string} pathStr 父节点
    * @return Path | undefined
    */
    Router.prototype.getRouteByPath = function (path) {
        var retRoute = undefined;
        this.pageDic.forEach(function (page, route) {
            if (route.partialTest(path)) {
                retRoute = route;
            }
        });
        return retRoute;
    };
    /**
    * @description 获取页面内容
    * @param {Path} route 父节点
    * @return Page | undefined
    */
    Router.prototype.getPageByRoute = function (route) {
        return this.pageDic.get(route);
    };
    /**
    * @description 添加路由
    * @param {string} path
    * @param {Page} page
    * @param {Boolean} isDefault
    * @return Page | undefined
    */
    Router.prototype.add = function (path, page, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        path = this.checkPath(path);
        var route = new path_parser_1.Path(path);
        this.pageDic.set(route, page);
        if (isDefault === true) {
            // this.pageDic.set("default",page)
            this.defaultPage = page;
        }
        // let page = new CPage()
    };
    /**
     * start
     * 启动页面
     */
    Router.prototype.start = function (wrapId) {
        this.root = document.querySelector(wrapId);
        // this.navigate(window.location.pathname)
        // this.navigate("/list")
        var pathStr = window.location.pathname + window.location.search;
        var route = this.getRouteByPath(pathStr);
        var page = this.getPageByRoute(route);
        page.params = route.partialTest(pathStr);
        window.history.replaceState({ path: pathStr }, page.title, pathStr); //第一次需要replace一下,不然之后页面后退后,会找不到这个页面的state
        this.replacePage(page);
    };
    /**
     * 指定浏览到注册过的路由页面
     * @param route
     */
    Router.prototype.navigate = function (pathStr) {
        pathStr = this.checkPath(pathStr);
        var route = this.getRouteByPath(pathStr);
        var nextPage = this.getPageByRoute(route);
        nextPage.params = route.partialTest(pathStr);
        window.history.pushState({ path: pathStr }, nextPage.title, pathStr);
        this.replacePage(nextPage);
        return false;
    };
    /**
     * 替换当前路由
     * @param pathStr
     */
    Router.prototype.replace = function (pathStr) {
        var route = this.getRouteByPath(pathStr);
        var nextPage = this.getPageByRoute(route);
        nextPage.params = route.partialTest(pathStr);
        this.replacePage(nextPage);
        return false;
    };
    /**
     * 跳转到外部地址
     * @param path
     */
    Router.prototype.jump = function (path) {
        window.location.href = path;
    };
    /**
    * @description 检查路径
    * @param {string} path
    * @return string
    */
    Router.prototype.checkPath = function (path) {
        // @ts-ignore
        if (!path.startsWith("/")) {
            path = "/" + path;
        }
        return path;
    };
    /**
    * @description 替换页面
    * @param {Page} nextPage
    * @return null
    */
    Router.prototype.replacePage = function (nextPage) {
        var curPage = this.page;
        this.transition(curPage, nextPage);
        this.page = nextPage;
    };
    /**
    * @description 页面过渡
    * @param {Page} curPage
    * @param {Page} nextPage
    * @return null
    */
    Router.prototype.transition = function (curPage, nextPage) {
        if (curPage !== undefined) {
            curPage.transition(page_1.PageTransitionState.Out);
            curPage.leave(this.root);
        }
        nextPage && nextPage.enter(this.root);
        nextPage && nextPage.transition(page_1.PageTransitionState.In);
    };
    return Router;
}());
exports.router = new Router();


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (num1, num2, options) {
    var value
    if (num1 > num2) {
        value = options.fn(this)
    } else if (num1 < num2) {
        value = options.inverse(this)
    }
    return value
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var searchPanel_1 = __webpack_require__(92);
var bridge_1 = __webpack_require__(2);
var util_1 = __webpack_require__(13);
var utils_1 = __webpack_require__(3);
var util_2 = __webpack_require__(17);
__webpack_require__(97);
var headerHBS = __webpack_require__(98);
var Header = /** @class */ (function () {
    function Header(root, type) {
        this.root = root;
        this.type = 0;
        this.flag = false; // 拼音输入
        this.type = type ? type : 0;
        this.htid = utils_1.queryId();
        this.root.innerHTML = headerHBS({ type: type, 'htid': this.htid });
    }
    Header.prototype.enter = function (re) {
        var _this = this;
        util_2.msg(re, re.title);
        this.show();
        if (bridge_1.isWeixin()) {
            this.hide();
        }
        switch (this.type) {
            case 0:
                if (re && re.title) {
                    this.root.querySelector(".title").innerHTML = re.title;
                }
                break;
            case 1: // 有标题 + 搜索
                if (re && re.title) {
                    this.root.querySelector(".title").innerHTML = re.title;
                }
                break;
            case 2: // 有搜索框的 + 刷新
                this.root.querySelector("#search_input").onfocus = function (event) {
                    if (!_this.search_panel) {
                        _this.search_panel = new searchPanel_1.SearchPanel(_this.root);
                    }
                };
                this.root.querySelector("#search_input").oninput = function (event) {
                    // setTimeout(()=>{
                    if (!_this.flag) {
                        if (!_this.search_panel) {
                            _this.search_panel = new searchPanel_1.SearchPanel(_this.root);
                        }
                        else {
                            // console.log("event.target.value", event.target.value);
                            // this.search_panel.search(event.target.value);
                            // 节流
                            if (_this.timer) {
                                clearTimeout(_this.timer);
                            }
                            if (event.target.value) {
                                _this.timer = setTimeout(function () {
                                    _this.search_panel.search(event.target.value);
                                }, 300);
                            }
                            else { // 输入框中的内容被删为空时触发，此时会清除之前展示的搜索结果
                                _this.search_panel.search(event.target.value);
                            }
                        }
                    }
                    // },0)
                };
                // 搜索拼音，没选中时不进行搜索
                // (this.root.querySelector("#search_input") as HTMLInputElement).addEventListener('compositionstart', (event:any) => {
                //     this.flag = true;
                // });
                // (this.root.querySelector("#search_input") as HTMLInputElement).addEventListener('compositionend', (event:any) => {
                //     this.flag = false;
                // });
                this.root.querySelector(".icon_refresh").style.opacity = "1";
                this.root.querySelector(".icon_refresh").onclick = function () {
                    if (bridge_1.isHybrid() && bridge_1.isAndroid()) { // 安卓右上角有原生刷新按钮，导致重复遮盖，但去不掉[叶申维]
                        _this.root.querySelector(".icon_refresh").style.opacity = "0";
                        setTimeout(function () {
                            window.location.reload();
                        }, 300);
                    }
                    else {
                        window.location.reload();
                    }
                };
                break;
            case 3: // 非内嵌中用的透明header
                // if(!isHybrid()){
                var type3Header_1 = this.root.querySelector(".type3");
                var type3Title_1 = this.root.querySelector(".type3 .title");
                type3Header_1.style.background = "transparent";
                type3Title_1.style.opacity = "0";
                setTimeout(function () {
                    var height = document.getElementById("tab").offsetTop - 80;
                    document.querySelector("#body").addEventListener('scroll', function (event) {
                        if (event.target.scrollTop > height) {
                            type3Header_1.style.background = bridge_1.getSkin() == "b" ? "#1c1c1c" : "#ee5504";
                            type3Title_1.style.opacity = "1";
                        }
                        else if (event.target.scrollTop > 0 && event.target.scrollTop < height) {
                            type3Header_1.style.background = bridge_1.getSkin() == "b" ? "rgba(28, 28, 28, " + event.target.scrollTop / height + ")" : "rgba(234, 85, 4, " + event.target.scrollTop / height + ")";
                            type3Title_1.style.opacity = "" + event.target.scrollTop / height;
                        }
                        else {
                            type3Header_1.style.background = "transparent";
                            type3Title_1.style.opacity = "0";
                        }
                    });
                }, 500);
                // }
                break;
            case 4: // 标题 + 分享
                // if(re && re.title){
                //     (this.root.querySelector(".title") as HTMLDivElement).innerHTML = re.title;
                // }
                break;
            case 5: // 非内嵌中用的透明header 斗股
                var type5Header_1 = this.root.querySelector(".type5");
                type5Header_1.style.background = "transparent";
                setTimeout(function () {
                    var height = 200;
                    document.querySelector("#body").addEventListener('scroll', function (event) {
                        if (event.target.scrollTop > height) {
                            type5Header_1.style.background = bridge_1.getSkin() == "b" ? "#1c1c1c" : "#ee5504";
                        }
                        else if (event.target.scrollTop > 0 && event.target.scrollTop < height) {
                            type5Header_1.style.background = bridge_1.getSkin() == "b" ? "rgba(28, 28, 28, " + event.target.scrollTop / height + ")" : "rgba(234, 85, 4, " + event.target.scrollTop / height + ")";
                        }
                        else {
                            type5Header_1.style.background = "transparent";
                        }
                    });
                }, 500);
                break;
            default: // 0 最普通的头部 支持传标题
        }
        this.root.querySelector(".icon_left_arrow").onclick = function () {
            window.history.go(-1);
        };
        var shareElement = document.querySelector(".header_share_text");
        if (shareElement) {
            shareElement.addEventListener('click', function (e) {
                setTimeout(function () {
                    var _a, _b, _c, _d, _e;
                    // 数据埋点 100% 分享列表
                    var wechat = (_a = document.querySelector(".icons-share-wechat")) === null || _a === void 0 ? void 0 : _a.parentNode;
                    var moment = (_b = document.querySelector(".icons-share-moment")) === null || _b === void 0 ? void 0 : _b.parentNode;
                    var zone = (_c = document.querySelector(".icons-share-qzone")) === null || _c === void 0 ? void 0 : _c.parentNode;
                    var weibo = (_d = document.querySelector(".icons-share-weibo")) === null || _d === void 0 ? void 0 : _d.parentNode;
                    var qq = (_e = document.querySelector(".icons-share-qq")) === null || _e === void 0 ? void 0 : _e.parentNode;
                    wechat.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    moment.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    zone.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    weibo.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    qq.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    wechat.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.wxhy");
                    moment.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.pyq");
                    zone.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.QQkj");
                    weibo.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.xlwb");
                    qq.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.QQhy");
                });
            });
        }
    };
    Header.prototype.show = function () {
        this.root.querySelector(".header_wrap").style.display = "-webkit-flex";
    };
    Header.prototype.hide = function () {
        this.root.querySelector(".header_wrap").style.display = "none";
    };
    Header.prototype.setShare = function (title, desc) {
        if (this.type == 3 || this.type == 4 || this.type == 5) { // 3 4 5类型的header才有分享按钮
            var shareElement_1 = this.root.querySelector(".header_share_text");
            util_2.msg(shareElement_1);
            // let height = ( getTopHeaderHeight() || (<HTMLDivElement>this.root.querySelector(".header_wrap")).getBoundingClientRect().height ) / 2 ;
            // shareElement.setAttribute("style", `z-index: 100; position:absolute;top: ${height}px; right: 10px;translate(0,-50%);`)
            shareElement_1.addEventListener('click', function (e) {
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Share({
                        "type": "weixin,pengyouquan,qq,qzone,weibo",
                        "img": "https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png",
                        "title": title,
                        "url": bridge_1.isIOS() ? encodeURIComponent(window.location.href) : window.location.href,
                        "desc": desc
                    });
                }
                else {
                    util_1.share(title, desc, window.location.href, shareElement_1);
                }
            });
        }
    };
    Header.prototype.setTitle = function (title) {
        if (this.type == 3) {
            this.root.querySelector(".title").innerHTML = title;
        }
    };
    return Header;
}());
exports.Header = Header;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgent = exports.clearSpecChar = exports.padLeft = exports.msg = exports.formatDateDiff = exports.formatDate = exports.isFromBaidualaddin = exports.loadImg = exports.captcha = exports.photoZoom = exports.share = exports.addShareJS = exports.setRemUnit = exports.formatTime = exports.throttle = exports.params = void 0;
var env_1 = __webpack_require__(22);
var net_1 = __webpack_require__(5);
function params(obj) {
    return Object.keys(obj).map(function (key) { return key + "=" + encodeURIComponent(obj[key]); }).join('&');
}
exports.params = params;
function throttle(method, delay, duration) {
    // var timer:any=null;
    // var begin:any=new Date();    
    // return function(){                
    //     var context=(<any>this), args=arguments;
    //     var current:any=new Date();        
    //     clearTimeout(timer);
    //     if(current-begin>=duration){
    //         method.apply(context,args);
    //         begin=current;
    //     }else{
    //         timer=setTimeout(function(){
    //             method.apply(context,args);
    //         },delay);
    //     }
    // }
}
exports.throttle = throttle;
/**
 * 格式化时间字符串
 * @param time 时间 eg. 2020-04-26 15:23:33
 * @return  今天的，显示 “今天 00:30”
 *          今年的，显示“07-07 23:49”
 *          去年的，显示“2019-01-09 23:00”
 */
function formatTime(time) {
    var now = new Date();
    var year = now.getFullYear();
    var momth = now.getMonth() + 1;
    var date = now.getDate();
    var reg = new RegExp(/(.+?)-(.+?)-(.+?) (.+?):(.+?):(.+?)/, 'img');
    var timeArr = time.replace(reg, "$1,$2,$3,$4,$5,$6").split(',');
    if (year == Number(timeArr[0])) { // 今年
        if (momth == Number(timeArr[1]) && date == Number(timeArr[2])) { // 今天
            return "\u4ECA\u5929 " + timeArr[3] + ":" + timeArr[5];
        }
        else {
            return timeArr[1] + "-" + timeArr[2] + " " + timeArr[3] + ":" + timeArr[5];
        }
    }
    else {
        return timeArr[0] + "-" + timeArr[1] + "-" + timeArr[2] + " " + timeArr[3] + ":" + timeArr[5];
    }
}
exports.formatTime = formatTime;
function setRemUnit() {
    var docEl = document.documentElement;
    var rem = docEl.clientWidth * 100 / 375;
    docEl.style.fontSize = rem + 'px';
    // console.log(docEl)
}
exports.setRemUnit = setRemUnit;
function addShareJS() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            net_1.loadResource("//gbfek.dfcfw.com/libs/jquery/1.8.3/jquery.min.js", function () {
                net_1.loadResource("//gbfek.dfcfw.com/libs/share/share.js", function () {
                    if (window.$.fn.share) {
                        resolve(1);
                    }
                    else {
                        reject("share.js has failed to load.");
                    }
                }, true);
                net_1.loadResource("//gbfek.dfcfw.com/libs/share/share2.css", function () { }, true);
            }, true);
        }, 100);
    });
}
exports.addShareJS = addShareJS;
function share(title, desc, link, selector, channels) {
    if (channels === void 0) { channels = ['wechat', 'moment', 'qzone', 'weibo']; }
    addShareJS().then(function () {
        var $ = window.$;
        $(selector).each(function (index, item) {
            $(item).share({
                channels: channels,
                pageShare: true,
                shareData: {
                    title: item.dataset.title ? item.dataset.title : title,
                    desc: item.dataset.desc ? item.dataset.desc : desc,
                    link: link,
                    from: '东方财富网移动版',
                    imgUrl: 'https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png',
                    fail: function (res) {
                        // alert(JSON.stringify(res));
                    }
                },
                custom: {
                    qzone: {
                        desc: ''
                    }
                }
            });
        });
    });
}
exports.share = share;
function photoZoom(node, bool, node2) {
    if (bool === void 0) { bool = true; }
    if (node2 === void 0) { node2 = ""; }
    net_1.loadResource("//gbfek.dfcfw.com/project/gubawap/photoZoom/photoZoom.js", function () {
        if (window.photoZoom) {
            var photoZoom_1 = window.photoZoom;
            (new photoZoom_1(node, bool, node2)).init();
        }
    }, true);
}
exports.photoZoom = photoZoom;
function captcha(method, target) {
    var url = "//gbfek.dfcfw.com/project/gubawap/captcha/captcha.js";
    function createCaptcha() {
        if (window.tvcode) {
            var tvcode = window.tvcode;
            window.captcha = new tvcode({
                onselected: function () {
                    method.call(target);
                }
            });
            window.captcha.show();
        }
    }
    if (window.captcha) {
        createCaptcha();
    }
    else {
        net_1.loadResource(url, function () {
            createCaptcha();
        }, true);
    }
}
exports.captcha = captcha;
function loadImg(src) {
    var img = new Image();
    // img.onload=function(){alert("img is loaded")};  
    // img.onerror=function(){alert("error!")};  
    img.src = src;
    return img;
}
exports.loadImg = loadImg;
function isFromBaidualaddin() {
    return window.location.href.toLowerCase().indexOf('from=baidualaddin') > 0;
}
exports.isFromBaidualaddin = isFromBaidualaddin;
/**
 * 格式化日期时间
 * @param time 时间
 * @param fmt 格式
 */
function formatDate(time, fmt) {
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var o = {
        "y+": time.getFullYear(),
        "M+": time.getMonth() + 1,
        "d+": time.getDate(),
        "H+": time.getHours(),
        "m+": time.getMinutes(),
        "s+": time.getSeconds(),
        "q+": Math.floor((time.getMonth() + 3) / 3),
        "S": time.getMilliseconds(),
        "w": weekday[time.getDay()] // 星期
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("0000" + o[k]).substr((-RegExp.$1.length))));
        }
    }
    return fmt;
}
exports.formatDate = formatDate;
/**
 * 计算两日期相差多少
 * @param time1 时间
 * @param time2 时间
 * @return 几天几小时几分
 */
function formatDateDiff(time1, time2) {
    var time1ms = time1.getTime();
    var time2ms = time2.getTime();
    if (time1ms > time2ms) {
        return "";
    }
    var ms = time2ms - time1ms;
    var d = Math.floor(ms / 1000 / 60 / 60 / 24);
    var h = Math.floor((ms - d * 1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    var m = Math.floor((ms - d * 1000 * 60 * 60 * 24 - h * 1000 * 60 * 60) / 1000 / 60);
    return "" + (d > 0 ? (d + "天") : "") + (h > 0 ? (h + "小时") : "") + (m > 0 ? (m + "分") : "");
}
exports.formatDateDiff = formatDateDiff;
/**
 * 本地调试弹框
 * @param str 弹出内容
 */
function msg(str) {
    if (env_1.env.isDevelop) {
        alert("[本地调试] " + str);
    }
}
exports.msg = msg;
/**
 * 补位函数
 * @param oriStr
 * @param len
 * @param alexin
 */
function padLeft(oriStr, len, alexin) {
    var strlen = oriStr.toString().length;
    var str = "";
    if (strlen < len) {
        for (var i = 0; i < len - strlen; i++) {
            str = str + alexin;
        }
    }
    str = str + oriStr;
    return str;
}
exports.padLeft = padLeft;
/**
 * 去除输入框中的特殊字符
 * @param obj 输入框
 */
function clearSpecChar(value) {
    var regEx = /[\\`~!@#$%^&*()+=|{}:;_,.<>/?~\-！@#￥%……&*（）——+|{}【】‘；：”“’。，、？\ '"]+/g;
    return value.replace(regEx, '');
}
exports.clearSpecChar = clearSpecChar;
function getUserAgent(key) {
    var reg = new RegExp(key + "=(.+?);");
    var ret = navigator.userAgent.match(reg);
    if (ret && ret.length >= 2) {
        return ret[1];
    }
    else {
        return '';
    }
}
exports.getUserAgent = getUserAgent;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFVBQVUsR0FBRyxDQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxDQUNSLENBQUM7O0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDeEIsSUFBSSxZQUFBO01BQ0osYUFBYSxZQUFBO01BQ2IsTUFBTSxZQUFBO01BQ04sU0FBUyxZQUFBLENBQUM7O0FBRVosTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEIsaUJBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM3QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsYUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztBQUUzQixXQUFPLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0dBQ3hDOztBQUVELE1BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcxRCxPQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRCxRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzlDOzs7QUFHRCxNQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtBQUMzQixTQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQzFDOztBQUVELE1BQUk7QUFDRixRQUFJLEdBQUcsRUFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFVBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN6QixjQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsZUFBSyxFQUFFLE1BQU07QUFDYixvQkFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLGVBQUssRUFBRSxTQUFTO0FBQ2hCLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7T0FDNUI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVycm9yUHJvcHMgPSBbXG4gICdkZXNjcmlwdGlvbicsXG4gICdmaWxlTmFtZScsXG4gICdsaW5lTnVtYmVyJyxcbiAgJ2VuZExpbmVOdW1iZXInLFxuICAnbWVzc2FnZScsXG4gICduYW1lJyxcbiAgJ251bWJlcicsXG4gICdzdGFjaydcbl07XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgIGxpbmUsXG4gICAgZW5kTGluZU51bWJlcixcbiAgICBjb2x1bW4sXG4gICAgZW5kQ29sdW1uO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.emparse = exports.cutCommentTexts = exports.cutTexts = exports.cutText = exports.CtoH = exports.getQueryString = void 0;
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
exports.getQueryString = getQueryString;
/**
 * 全角字符串转半角
 * @param str 全角字符串
 */
function CtoH(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 12288) {
            result += String.fromCharCode(str.charCodeAt(i) - 12256);
            continue;
        }
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375)
            result += String.fromCharCode(str.charCodeAt(i) - 65248);
        else
            result += String.fromCharCode(str.charCodeAt(i));
    }
    return result;
}
exports.CtoH = CtoH;
function showface(html) {
    if (!html) {
        return "";
    }
    else {
        html = html.replace(/href= target='_blank'/ig, 'href="javascript:;"');
        var facearr = ["微笑", "大笑", "鼓掌", "为什么", "哭", "怒", "滴汗", "俏皮", "傲", "好困惑",
            "兴奋", "加油", "困顿", "想一下", "撇嘴", "色", "发呆", "得意", "害羞羞", "大哭",
            "呲牙", "惊讶", "囧", "抓狂", "偷笑", "愉快", "憨笑", "晕", "再见", "坏笑",
            "左哼哼", "右哼哼", "哈欠", "委屈", "快哭了", "亲", "可怜", "口罩", "笑哭", "惊吓",
            "哼", "捂脸", "奸笑", "吃瓜", "旺柴", "围观", "摊手", "爱心", "献花", "福",
            "拜神", "胜利", "赞", "握手", "抱拳", "勾引", "拳头", "OKOK", "强壮", "毛估估",
            "亏大了", "赚大了", "牛", " ", "成交", "财力", "护城河", "复盘", "买入", "卖出",
            "满仓", "空仓", "抄底", "看多", "看空", "加仓", "减仓", "上涨", "下跌", "财神",
            "火箭", "龙头", "韭菜", "面", "泡沫", "惨!关灯吃面",
            "666", "叹气", "让我看看", "发财", "主力", "梭哈", "国家队", "中签", "干杯"];
        var re = new RegExp('\\[.+?\\]', "ig");
        html = html.replace(re, function (item) {
            for (var i = 0; i < facearr.length; i++) {
                if ("[" + facearr[i] + "]" == item) {
                    return '<img class="emot" title="' + facearr[i] + '" src="http://gbfek.dfcfw.com/face/emot_default/emot' + (i + 1) + '.png" alt="' + item + '">';
                    break;
                }
            }
            return item;
        });
        return html;
    }
}
function at(str) {
    var at_reg = /\[at=(.*?)\](.*?)\[\/at\]/igm;
    if (at_reg.test(str)) { // 评论的评论
        return str.replace(at_reg, '<a class="at_user" href="http://mguba.eastmoney.com/mguba/user/$1">$2</a>');
    }
    else {
        return str;
    }
}
// 行尾不能以HTML标签结尾
function cutText(element) {
    setTimeout(function () {
        var text = element.innerHTML;
        function cut() {
            text = text.substring(0, text.length - 4);
            element.innerHTML = text + '...';
            // console.log(element.scrollHeight , element.clientHeight)
            if (element.scrollHeight - 10 > element.clientHeight) {
                cut();
            }
            else {
                element.innerHTML = text + '...';
            }
        }
        var height1 = element.clientHeight;
        var height2 = element.scrollHeight - 10;
        if (height2 > height1) {
            cut();
        }
        else {
            element.innerHTML = text;
        }
    }, 0);
    return false;
}
exports.cutText = cutText;
function cutTexts(selector) {
    setTimeout(function () {
        document.querySelectorAll(selector).forEach(function (value) {
            cutText(value);
        });
    }, 0);
    return false;
}
exports.cutTexts = cutTexts;
function cutCommentTexts(selector) {
    setTimeout(function () {
        document.querySelectorAll(selector).forEach(function (value) {
            cutText(value);
        });
    }, 0);
    //换表情
    setTimeout(function () {
        document.querySelectorAll(selector).forEach(function (value) {
            value.innerHTML = showface(at(value.innerHTML));
        });
    }, 100);
    return false;
}
exports.cutCommentTexts = cutCommentTexts;
// module.exports = function (element) {
//     if(navigator.appName == "Microsoft Internet Explorer")
//     {
//         var ieNo = navigator.appVersion.split(";")[1].replace(/[ ]/g,"");
//         if(ieNo =="MSIE6.0" || ieNo =="MSIE7.0"){
//             return false;
//         }
//     }
//     if(element instanceof Array){
//         for (var i = 0; i < element.length; i++) {
//             cutText(element[i]);
//         }
//     }
//     // else if(element instanceof HTMLCollection){
//     //     for (var i = 0; i < element.length; i++) {
//     //         cutText(element[i]);
//     //     }
//     // }
//     else if(element instanceof jQuery){
//         element.each(function(i, v){
//             cutText(this);
//         });
//     }
//     else if(element instanceof Element){
//             cutText(element);
//     }
// };
/**
 * @desc 过滤 换行符
 * @param  str
 * @return
 */
function emparse(str) {
    if (typeof str === "object") {
        return str;
    }
    str = str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r");
    try {
        return JSON.parse(str);
    }
    catch (e) {
        try {
            return eval('(' + str + ')');
        }
        catch (e) {
            return {};
        }
    }
}
exports.emparse = emparse;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

//制保留2位小数，如：2，会在2后面补上00.即2.00  
function toDecimal(x, num) {  
    var f = parseFloat(x);  
    if (isNaN(f)) {  
        return false;  
    }  
    var f = Math.round(x*Math.pow(10, num))/Math.pow(10, num);  
    var s = f.toString();  
    var rs = s.indexOf('.');  
    if (rs < 0) {  
        rs = s.length;  
        s += '.';  
    }  
    while (s.length <= rs + 2) {  
        s += '0';  
    }  
    return s;  
}  

module.exports = function (str,num) {
    if(!str){
        return "0.00";
    }else if(str == "-"){
        return str;
    }else{
        return toDecimal(str, num);
    }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHQlist = exports.stickyTabToPageDetail = exports.ellipsisMsg = exports.msg = exports.execBtnFunc = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
function execBtnFunc(Element, callback) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var flag = true;
    var waitTime = 2000;
    Element.addEventListener('scroll', function (e) {
        var element = e.target;
        var scrollHeight = element.scrollHeight; // 内容总高度
        var clientHeight = element.clientHeight; // 内容可是区域的高度
        var scrollTop = element.scrollTop; // 滚动条在Y轴滚动的距离
        if (scrollHeight - 5 <= clientHeight + scrollTop && flag) { // 到达底部
            callback(args);
            flag = false;
            setTimeout(function () {
                flag = true;
            }, waitTime);
        }
    });
}
exports.execBtnFunc = execBtnFunc;
function msg() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    var uniq = 'zen-msg';
    var flag = true;
    try {
        if (flag) {
            console.log.apply(console, __spreadArrays([uniq], s));
        }
    }
    catch (e) {
        console.log(uniq, e);
    }
}
exports.msg = msg;
function ellipsisMsg(element, line, dot, extraString) {
    if (line === void 0) { line = 4; }
    if (dot === void 0) { dot = 3; }
    if (extraString === void 0) { extraString = ''; }
    var font = getComputedStyle(element).font;
    // @ts-ignore 
    var px = /.*?(\d+)(\.\d+)?px/.exec(font)[1]; // 单个字符宽度
    if (isNaN(px)) {
        px = 14;
    }
    // 实际总字符的宽度
    var content = element.innerHTML;
    var dotString = new Array(dot).fill(".").join('');
    var dotlength = calcStringWidth(dotString, font);
    var totalWidth = (parseFloat(getComputedStyle(element).width) - px) * line - dotlength;
    // alert([parseFloat(getComputedStyle(element).width), px,font].join("=="))
    // 获取每一个字符的宽度
    for (var index in content) {
        var substring = content.substr(0, index);
        var w = calcStringWidth(substring, font);
        if (w >= totalWidth) {
            var length_1 = substring.length;
            content = substring.substring(0, length_1 - dot) + ("<span class=\"bg-clip\">" + substring.substring(length_1 - dot, length_1) + dotString + "</span>") + extraString;
            break;
        }
    }
    element.innerHTML = content;
}
exports.ellipsisMsg = ellipsisMsg;
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    // @ts-ignore
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    var width = Math.round(metrics.width);
    return width;
}
function calcStringWidth(s, font) {
    var w = 0;
    // @ts-ignore
    var arr = s.split();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        w += getTextWidth(value, font);
    }
    return w;
}
/*
@desc: tab吸顶效果
@usage：
    html
    <div id="occupy">
        <div id="suction"></div>
    </div>
    js
    stickyTabToPageDetail();

*/
var ifSendMD = false;
function stickyTabToPageDetail(fixcallback, unfixcallback) {
    // console.log("吸顶");
    bridge_1.setTop();
    document.querySelector("#body").addEventListener('scroll', function (event) {
        var _a;
        // 滑动至吸顶的高度
        var fixHeight = Number((_a = getDocPos(document.body.querySelector("#occupy"))) === null || _a === void 0 ? void 0 : _a.top);
        var flexableHeight = utils_1.getTopHeaderHeight() || document.querySelector('.header_wrap ').getBoundingClientRect().height;
        fixHeight -= flexableHeight;
        // position为fix状态下吸顶的高度
        var top = utils_1.getTopHeaderHeight() || document.body.querySelector(".header_wrap").getBoundingClientRect().height;
        var XDE = document.body.querySelector("#suction"); // 吸顶div
        if (fixHeight <= event.target.scrollTop) {
            // console.log("==========吸顶=========");
            if (!ifSendMD) {
                if (window.sendTrackLog) {
                    window.sendTrackLog('page', 'scroll', 'gbhty_hty_lb_lmzd', "htId:" + utils_1.queryId(), '');
                }
                ifSendMD = true;
            }
            XDE.classList.add("fixedTop");
            if (bridge_1.isWeixin()) {
                XDE.style.top = "0";
            }
            else {
                XDE.style.top = top - 2 + "px";
            }
            if (fixcallback) {
                fixcallback();
            }
        }
        else {
            // console.log("==========取消吸顶=========");
            XDE.classList.remove("fixedTop");
            if (unfixcallback) {
                unfixcallback();
            }
        }
    });
}
exports.stickyTabToPageDetail = stickyTabToPageDetail;
function getDocPos(obj) {
    var l = obj.offsetLeft;
    var t = obj.offsetTop;
    if (!obj)
        return;
    var current = obj.offsetParent;
    while (current) {
        if (!current)
            return;
        l += current.offsetLeft;
        t += current.offsetTop;
        current = current.offsetParent;
    }
    return { left: l, top: t };
}
function compareHQlist(property, sort) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (sort) {
            return value1 - value2;
        }
        else {
            return value2 - value1;
        }
    };
}
exports.compareHQlist = compareHQlist;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 气泡提示框
 * (new Bubble("tip text")).enter();
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
__webpack_require__(65);
// let hbs: hbs = require('./bubble.hbs');
var Bubble = /** @class */ (function () {
    function Bubble(text) {
        this.text = text;
    }
    Bubble.prototype.enter = function () {
        var bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.innerHTML = this.text;
        document.body.appendChild(bubble);
        setTimeout(function () {
            document.body.removeChild(bubble);
        }, 2300);
    };
    return Bubble;
}());
exports.Bubble = Bubble;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (html) {
	if(!html){
    return "";
  }else{
    html = html.replace(/href= target='_blank'/ig, 'href="javascript:;"');
			var facearr = ["微笑", "大笑", "鼓掌", "为什么", "哭", "怒", "滴汗", "俏皮", "傲", "好困惑", 
							 "兴奋", "加油", "困顿", "想一下", "撇嘴", "色", "发呆", "得意", "害羞羞", "大哭", 
							 "呲牙", "惊讶", "囧", "抓狂", "偷笑", "愉快", "憨笑", "晕", "再见", "坏笑", 
							 "左哼哼", "右哼哼", "哈欠", "委屈", "快哭了", "亲", "可怜", "口罩", "笑哭", "惊吓",
							 "哼", "捂脸", "奸笑", "吃瓜", "旺柴", "围观", "摊手", "爱心", "献花", "福",
							 "拜神", "胜利", "赞", "握手", "抱拳", "勾引", "拳头", "OKOK", "强壮", "毛估估",
							 "亏大了", "赚大了", "牛", " ", "成交", "财力", "护城河", "复盘", "买入", "卖出",
							 "满仓", "空仓", "抄底", "看多", "看空", "加仓", "减仓", "上涨", "下跌", "财神",
							 "火箭", "龙头", "韭菜", "面", "泡沫", "惨!关灯吃面",
							 "666","叹气","让我看看","发财","主力","梭哈","国家队","中签","干杯"];
			var re = new RegExp('\\[.+?\\]', "ig");
			html = html.replace(re, function(item) {
				for (var i = 0; i < facearr.length; i++) {
					if ("[" + facearr[i] + "]" == item) {
						return '<img class="emot" title="' + facearr[i] + '" src="http://gbfek.dfcfw.com/face/emot_default/emot' + (i + 1) + '.png" alt="' + item + '">';
						break;
					}
				}
				return item;
			});
			return html;
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (num) {
    if (parseInt(num) <= 0) {
        return ''
    }
    return num;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 网络请求
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserCollectRead = exports.JumpToRN = exports.getTopicCollect = exports.getHqlistWithneedCode = exports.getHqlist = exports.fmtRequest = exports.getTopicDetailsRead = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var net_1 = __webpack_require__(5);
var util_1 = __webpack_require__(17);
var htid = utils_1.queryId();
// 基本信息
function getTopicDetailsRead(htid) {
    return new Promise(function (resolve, reject) {
        net_1.send("newtopic/api/Topic/TopicDetailsRead", "htid=" + htid)
            .then(function (res) {
            if (res && res.rc == 1) {
                var result = res.re;
                result["isVote"] = false; // 是否展示投票
                result["htid"] = htid; // 是否展示投票
                if (result["voteEntity"]) {
                    if (result["voteEntity"].length > 0) {
                        result["isVote"] = true;
                    }
                }
                resolve(result);
            }
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.getTopicDetailsRead = getTopicDetailsRead;
// 0 最热
// 1 最新
var uniqUrl = '';
function fmtRequest(newOrHot, htid, start, offset, isFocus) {
    if (offset === void 0) { offset = 20; }
    if (isFocus === void 0) { isFocus = false; }
    var url = '';
    // start = Math.round(start / offset);
    start = start == 20 ? 1 : start;
    var params;
    return new Promise(function (resolve, reject) {
        if (newOrHot === 1) { // 1 最新
            url = "newtopic/api/Topic/NewTopicPostListRead";
            params = "htid=" + htid + "&sort=1&start=" + start + "&offset=" + offset + "&type=1";
        }
        else if (newOrHot === 0) { // 0 最热
            url = "newtopic/api/Topic/TopicMostHotRead";
            params = "htid=" + htid + "&code=&sort=-1&start=" + start + "&offset=" + offset + "&type=1";
        }
        else {
            return;
        }
        // 如果开启强制刷新，则不对比URL
        if (uniqUrl === url + params && isFocus === false) {
            reject("repeat url");
            return;
        }
        net_1.send(url, params).then(function (res) {
            if (!res || res.rc !== 1) {
                reject(res);
                return;
            }
            uniqUrl = url + params;
            res.re.forEach(function (PostItem, index) {
                var item = res.re[index];
                // 评论列表不存在，则不显示评论
                if (item.reply_list && item.reply_list.length != 0) {
                    res.re[index]["isComments"] = true;
                    if (item.reply_list.length >= 2) {
                        item.reply_list = item.reply_list.slice(0, 2); // 只显示两条评论
                    }
                }
                else {
                    res.re[index]["isComments"] = false;
                }
                res.re[index]["htid"] = htid;
                // 获取评论条数，并判断每一条“评论”是否包含图片
                if (PostItem.reply_list) {
                    res.re[index]["reply_length"] = PostItem.reply_list.length;
                    for (var i in PostItem.reply_list) {
                        var flag = true;
                        if (PostItem.reply_list[i].reply_picture === "") {
                            flag = false;
                        }
                        res.re[index]["reply_list"][i].reply_has_picture = flag;
                    }
                }
                // “文章”中如果有图片，则显示第一张
                if (PostItem.post_pic_url && PostItem.post_pic_url.length >= 0) {
                    res.re[index]["post_pic_url"] = PostItem.post_pic_url[0];
                }
                // 判读图片是否展示
                var imgUrl = res.re[index]["post_pic_url"];
                if (/http/i.test(imgUrl)) {
                    res.re[index]["post_has_pic"] = true;
                }
                else {
                    res.re[index]["post_has_pic"] = false;
                }
            });
            util_1.msg(uniqUrl, res);
            resolve(res);
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.fmtRequest = fmtRequest;
function getHqlist(stockList) {
    return new Promise(function (resolve, reject) {
        net_1.getHq(stockList.join(",")).then(function (result) {
            resolve(result);
        }).catch(function (error) {
            reject(error);
        });
    });
}
exports.getHqlist = getHqlist;
//传进来的code不需要转换行情接口code，"0.300059"
function getHqlistWithneedCode(stockList) {
    return new Promise(function (resolve, reject) {
        net_1.getHq_core(stockList.join(",")).then(function (result) {
            resolve(result);
        }).catch(function (error) {
            reject(error);
        });
    });
}
exports.getHqlistWithneedCode = getHqlistWithneedCode;
/*
@desc: 获取收藏按钮相关信息
@err: 只会返回操作成功获失败，不会返回操作当前的状态
 */
function getTopicCollect(collectflag) {
    return new Promise(function (resolve, reject) {
        net_1.send("newtopicopt/api/Topic/TopicCollect", "htid=" + htid + "&opt=" + (collectflag ? 0 : 1))
            .then(function (res) {
            util_1.msg(res);
            if (res && res.rc == 1) {
                resolve(res);
            }
            else {
                reject(res);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getTopicCollect = getTopicCollect;
/*
@desc： 跳转到行情页面
@parmas：
    code：股票代码 如 600012
    exchange： 市场编号 代表沪深港美等
    name： 股票名称 如 ST众泰
@return： void
 */
function JumpToRN(code, exchange, name) {
    switch (exchange) {
        case 0:
            code = code + ".SZ";
            break;
        case 1:
            code = code + ".SH";
            break;
        case 105:
            code = code + ".NASDAQ";
            break;
        case 106:
            code = code + ".NYSE";
            break;
        case 107:
            code = code + ".AMEX";
            break;
        case 116:
            code = code + ".HK";
            break;
        default:
            break;
    }
    bridge_1.emH5ToStock_byList(code, name);
}
exports.JumpToRN = JumpToRN;
/*
@desc: 请求接口收藏数据
 */
function getUserCollectRead() {
    return new Promise(function (resolve, reject) {
        net_1.send("newtopic/api/Topic/UserCollectRead", "htid=" + utils_1.queryId())
            .then(function (res) {
            if (res && res.rc == 1) {
                resolve(res);
            }
            else {
                reject(res);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getUserCollectRead = getUserCollectRead;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var isRelease = false;
var isDevelop = false;
var isTest = false;
if (window.location.host.indexOf(":9") >= 0 || window.location.host.indexOf(":8") >= 0 || window.location.host.indexOf('127') >= 0 || window.location.host.indexOf('172') >= 0) {
    // console.log("开发环境");
    isDevelop = true;
}
else if (window.location.host.indexOf("-test") >= 0 || window.location.host.indexOf("test") >= 0) {
    // console.log("测试环境");
    isTest = true;
}
else {
    isRelease = true;
}
exports.env = {
    isRelease: isRelease,
    isDevelop: isDevelop,
    isTest: isTest
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (num) {
	if(!num){
        return "0%";
    }
    return (num*100).toFixed(1)+'%'
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var utils_1 = __webpack_require__(3);
var Component = /** @class */ (function () {
    function Component() {
        this.htid = utils_1.queryId();
    }
    return Component;
}());
exports.Component = Component;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHSAB = exports.getHQSecIdByMutiCode = exports.getHQSecIdByCode = exports.geJJCNByCode = exports.getMarketTypeByCode = void 0;
function getMarketTypeByCode(code) {
    //console.log(code)
    if (code.toLowerCase().indexOf("hk") == 0) { //港股 //hk.00700
        return "5";
    }
    else if (code.indexOf("116") == 0) { //港股 //支持传格式：116.00700
        return "5";
    }
    else if (code.toLowerCase().indexOf("us") == 0) { //美股 //支持传格式：us.aapl
        return "7";
    }
    else if (code.indexOf("105") == 0 || code.indexOf("106") == 0 || code.indexOf("107") == 0) { //美股 //支持传格式：105.aapl
        return "7";
    }
    else if (code.toLowerCase().indexOf("sh") == 0) { //上证
        return "1";
    }
    else if (code.toLowerCase().indexOf("sz") == 0) { //深证
        return "2";
    }
    var sh_or_sz = "1";
    var i = code.substring(0, 1);
    var j = code.substring(0, 3);
    if (i == "5" || i == "6" || i == "9") {
        //上证股票
    }
    else {
        if (code == "000003" || code == "000300") {
            //上证股票
        }
        if (j == "009" || j == "126" || j == "110") {
            //上证股票
        }
        else {
            sh_or_sz = "2"; //深圳股票
        }
    }
    return sh_or_sz;
}
exports.getMarketTypeByCode = getMarketTypeByCode;
//基金分为场外和场内基金，接口里给的qmarket是场外的，下面方法是根据code规则转场内market
function geJJCNByCode(code) {
    if (code.indexOf('of') == 0) { //"of159928"
        var firstNum = code.substring(2, 4);
        switch (firstNum) {
            case '50':
            case '51':
            case '52':
            case '56':
            case '58':
                return '1'; //上海
                break;
            case '15':
            case '16':
            case '18':
                return '0'; //深圳
                break;
            default:
                break;
        }
    }
    return undefined;
}
exports.geJJCNByCode = geJJCNByCode;
//现在统一了码表，接口给的qmarket和qcode可以直接用，通过code转market的方法应该用不到了
function getHQSecIdByCode(code) {
    //港美股接受的code类型 "NASDAQ|AAPL" "HK|02013"
    // 美股
    if (code.substring(0, 3) == "105" || code.substring(0, 3) == "106" || code.substring(0, 3) == "107") {
        return code;
    }
    if (code.substring(0, 6) == "NASDAQ" || code.substring(0, 6) == "nasdaq") {
        return "105." + code.substring(7, 999);
    }
    if (code.substring(0, 4) == "NYSE" || code.substring(0, 4) == "nyse") {
        return "106." + code.substring(5, 999);
    }
    if (code.substring(0, 4) == "AMEX" || code.substring(0, 4) == "amex") {
        return "107." + code.substring(5, 999);
    }
    // 港股
    if (code.substring(0, 2) == "HK" || code.substring(0, 2) == "hk") {
        //return "116."+code.substring(3,999);
        return "116." + code.substring(2, 999);
    }
    var i = code.substring(0, 1);
    var k = code.substring(0, 2);
    var j = code.substring(0, 3);
    if (i == "5" || i == "6" || i == "9") {
        //上证股票
        return "1." + code;
    }
    if (code.toLowerCase().indexOf("sh") == 0) { //上证带有字母前缀的类型sz300059
        return "1." + code.substring(2, code.length);
    }
    else if (code.toLowerCase().indexOf("sz") == 0) { //深证带有字母前缀的类型sh600100
        return "0." + code.substring(2, code.length);
    }
    else if (k.toLowerCase() == "bk") {
        return "90." + code;
    }
    else {
        if (code == "000003" || code == "000300") {
            //上证股票
            return "1." + code;
        }
        if (j == "009" || j == "126" || j == "110") {
            //上证股票
            return "1." + code;
        }
        else {
            return "0." + code;
        }
    }
    return undefined;
}
exports.getHQSecIdByCode = getHQSecIdByCode;
function getHQSecIdByMutiCode(codeStr) {
    var codeArr = codeStr.split(',');
    var secidArr = [];
    for (var _i = 0, codeArr_1 = codeArr; _i < codeArr_1.length; _i++) {
        var v = codeArr_1[_i];
        var secid = getHQSecIdByCode(v);
        secidArr.push(secid);
    }
    var secids = secidArr.join(',');
    return secids;
}
exports.getHQSecIdByMutiCode = getHQSecIdByMutiCode;
function getHSAB(market, type) {
    if (market == 1) {
        if (type == 2 || type == 23) {
            return '沪A';
        }
        else if (type == 3) {
            return '沪B';
        }
    }
    else if (market == 0) {
        if (type == 6 || type == 13 || type == 80) {
            return '深A';
        }
        else if (type == 7) {
            return '深B';
        }
    }
}
exports.getHSAB = getHSAB;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCookie = exports.getCookie = exports.getsec = exports.setCookie = void 0;
var text_1 = __webpack_require__(15);
/*
 * General utils for managing cookies in Typescript.
 */
function setCookie(name, val, time) {
    if (time === void 0) { time = ""; }
    var date = new Date();
    var value = encodeURIComponent(text_1.CtoH(val));
    if (time) {
        var strsec = getsec(time);
        date.setTime(date.getTime() + strsec);
    }
    else {
        // Set it expire in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    }
    // Set it
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
exports.setCookie = setCookie;
function getsec(str) {
    var num = Number(str.substring(1, str.length));
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return num * 1000;
    }
    else if (str2 == "h") {
        return num * 60 * 60 * 1000;
    }
    else if (str2 == "d") {
        return num * 24 * 60 * 60 * 1000;
    }
    return 7 * 24 * 60 * 60 * 1000;
}
exports.getsec = getsec;
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    var retValue = "";
    // alert(parts[0]);
    // alert(parts[1]);
    // alert(parts[2]);
    //alert(parts.length);
    if (parts.length == 2 || parts.length == 3) {
        retValue = parts.pop().split(";").shift();
        return decodeURIComponent(retValue);
    }
}
exports.getCookie = getCookie;
function deleteCookie(name) {
    var date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    // Set it
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}
exports.deleteCookie = deleteCookie;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(9);

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(29);

var _decorators = __webpack_require__(58);

var _logger = __webpack_require__(30);

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = __webpack_require__(31);

var VERSION = '4.7.7';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQThDLFNBQVM7O3lCQUNqQyxhQUFhOzs7O3VCQUNJLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNyQyxVQUFVOzs7O21DQUNTLHlCQUF5Qjs7QUFFeEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUN4QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFDNUIsSUFBTSxpQ0FBaUMsR0FBRyxDQUFDLENBQUM7OztBQUU1QyxJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFDTixjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FDaEU7QUFDRCxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQ3dDLElBQUksb0JBQ2pELENBQUM7T0FDSDtBQUNELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQy9CO0dBQ0Y7QUFDRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDcEMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQ04sY0FBTSwyQkFBYyw0Q0FBNEMsQ0FBQyxDQUFDO09BQ25FO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQixNQUFNO0FBQ0wsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7R0FDRjtBQUNELHFCQUFtQixFQUFFLDZCQUFTLElBQUksRUFBRTtBQUNsQyxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUI7Ozs7O0FBS0QsNkJBQTJCLEVBQUEsdUNBQUc7QUFDNUIsZ0RBQXVCLENBQUM7R0FDekI7Q0FDRixDQUFDOztBQUVLLElBQUksR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7O1FBRW5CLFdBQVc7UUFBRSxNQUFNIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRIZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyByZXNldExvZ2dlZFByb3BlcnRpZXMgfSBmcm9tICcuL2ludGVybmFsL3Byb3RvLWFjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuNy43JztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnQgY29uc3QgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBleHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJHtuYW1lfVwiIGFzIHVuZGVmaW5lZGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHsgY3JlYXRlRnJhbWUsIGxvZ2dlciB9O1xuIl19


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(51);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(52);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(53);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(54);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(55);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(56);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(57);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lDQUF1QyxnQ0FBZ0M7Ozs7MkJBQzlDLGdCQUFnQjs7OztvQ0FDUCwwQkFBMEI7Ozs7eUJBQ3JDLGNBQWM7Ozs7MEJBQ2IsZUFBZTs7Ozs2QkFDWixrQkFBa0I7Ozs7MkJBQ3BCLGdCQUFnQjs7OztBQUVsQyxTQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUMvQyx5Q0FBMkIsUUFBUSxDQUFDLENBQUM7QUFDckMsMkJBQWEsUUFBUSxDQUFDLENBQUM7QUFDdkIsb0NBQXNCLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLHlCQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLDBCQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDZCQUFlLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLDJCQUFhLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDbEUsTUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxRQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(9);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUF3QixTQUFTOztBQUVqQyxJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUNFLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6QztBQUNBLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXJDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBWG1CLE9BQU87QUFBUCxlQUFPOzs7QUFZM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWxcbiAgICApIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5tZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = __webpack_require__(60);

var _logger = __webpack_require__(30);

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FDQUFzQyw0QkFBNEI7O3NCQUMxQyxXQUFXOztJQUF2QixNQUFNOztBQUVsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO0FBQ3ZELE1BQUksc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBc0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRW5ELE1BQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkQsMEJBQXdCLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxTQUFPO0FBQ0wsY0FBVSxFQUFFO0FBQ1YsZUFBUyxFQUFFLDZDQUNULHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO0tBQzNEO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsZUFBUyxFQUFFLDZDQUNULHNCQUFzQixFQUN0QixjQUFjLENBQUMsbUJBQW1CLENBQ25DO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsMEJBQTBCO0tBQ3hEO0dBQ0YsQ0FBQztDQUNIOztBQUVNLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7QUFDeEUsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDaEMsV0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ2pFLE1BQU07QUFDTCxXQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDcEU7Q0FDRjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLEVBQUU7QUFDL0QsTUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLFdBQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQztHQUNuRTtBQUNELE1BQUkseUJBQXlCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUN4RCxXQUFPLHlCQUF5QixDQUFDLFlBQVksQ0FBQztHQUMvQztBQUNELGdDQUE4QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdDLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsTUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDM0Msb0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFVBQU0sQ0FBQyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0dBQ0g7Q0FDRjs7QUFFTSxTQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsV0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN2QyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgbGV0IGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsXG4gICAgICAgIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHNcbiAgICAgICksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIGBIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbmAgK1xuICAgICAgICBgWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuYCArXG4gICAgICAgIGBTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHNgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (a,b) {
	return a+b
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTitle = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var router_1 = __webpack_require__(10);
var subHbs = __webpack_require__(157);
var css = __webpack_require__(158);
var SubTitle = /** @class */ (function () {
    function SubTitle(root) {
        this.root = root;
        this.root.innerHTML = subHbs({});
    }
    SubTitle.prototype.init = function (title, link, isNav) {
        var _a, _b;
        this.root.innerHTML = subHbs({ title: title, link: link });
        if (link) {
            (_a = this.root.querySelector(".right")) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden'); //有链接显示更多
            (_b = this.root.querySelector(".right")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (e) {
                if (isNav) { //跳转到本地路由页面（本项目的页面）
                    //router.navigate(`/list?id=${id}`);
                    router_1.router.navigate(link);
                }
                else {
                    //alert(link);
                    utils_1.linkJump(function () { bridge_1.emH5Jump(link, false); });
                }
            });
        }
    };
    return SubTitle;
}());
exports.SubTitle = SubTitle;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileOverview 入口文件
 * @author ycao
 * @version 0.1
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 引入css
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
// 引入组件/公共方法
// import "./common/helper/rem"
__webpack_require__(41);
var hwlist_1 = __webpack_require__(42);
var detail_1 = __webpack_require__(102);
// import { PageDetailV2 } from './page/detailV2'
var home_1 = __webpack_require__(105);
var voteInfo_1 = __webpack_require__(112);
var voteResult_1 = __webpack_require__(115);
var error_1 = __webpack_require__(119);
var dougu_1 = __webpack_require__(122);
var douguRule_1 = __webpack_require__(141);
var router_1 = __webpack_require__(10);
var user_1 = __webpack_require__(8);
var bridge_1 = __webpack_require__(2);
var hot_1 = __webpack_require__(144);
var detailV2_1 = __webpack_require__(148);
var stocks_1 = __webpack_require__(189);
// disableTitleRightBtn();
if (bridge_1.isAndroid()) {
    // ios会加一个透明顶 = =
    bridge_1.setWebViewType('2'); //1普通,2是全屏
}
if (!bridge_1.isHybrid()) {
    document.body.className = 'inbrowser';
}
else {
    if (bridge_1.getSkin() == 'b') {
        // black
        document.getElementsByTagName('html')[0].className = 'theme_black';
    }
    bridge_1.getAppInfo();
}
// 安卓4.4.2
if (window.navigator.userAgent.indexOf('Android 4.4.2') >= -1) {
    document.getElementsByTagName('html')[0].className += ' android442';
}
document.body.className += bridge_1.isIOS() ? ' ios' : ' android';
// document.body.className += isIOS() ? " ios" : " android";
document.body.className += bridge_1.getIosVerison() ? " ios" + parseInt(bridge_1.getIosVerison()) : '';
document.body.setAttribute('iosv', bridge_1.getIosVerison());
function handleFontSize() {
    /*设置网页字体为默认大小*/
    ;
    window.WeixinJSBridge.invoke('setFontSizeCallback', {
        fontSize: 0,
    });
    window.WeixinJSBridge.on('menu:setfont', function () {
        ;
        window.WeixinJSBridge.invoke('setFontSizeCallback', {
            fontSize: 0,
        });
    });
}
try {
    user_1.user.checkLogin(function () { });
    // 添加路由
    router_1.router.add('/', new home_1.PageHome(), true); // 首页
    router_1.router.add('/home', new home_1.PageHome()); // 首页
    // router.add('/list?id&stockcode&stockname&code', new PageList()) // 话题列表页 code是被选中的相关个股
    // router.add("/list_v2?id", new PageDetailV2); // 话题详情页
    router_1.router.add("/list?id", new detailV2_1.PageDetailV2); // 话题详情页
    router_1.router.add("/stocks?code", new stocks_1.PageStocks); // 股票列表
    // 
    router_1.router.add('/list_hw?id&stockcode&stockname&code', new hwlist_1.PageHWList()); // 话题列表页 code是被选中的相关个股
    router_1.router.add('/detail?id', new detail_1.PageDetail()); // 话题详情页
    // router.add('/detail?id', new PageDetailV2()) // 话题详情页
    router_1.router.add('/voteinfo?id&vid', new voteInfo_1.PageVoteInfo()); // 话题(id)下投票(vid)详情页面
    router_1.router.add('/voteresult?id&vid', new voteResult_1.PageVoteResult()); // 话题(id)下投票(vid)结果页面
    router_1.router.add('/error', new error_1.PageError()); // 话题(id)下投票(vid)结果页面
    router_1.router.add('/mtopic2020/dougu?id', new dougu_1.PageDougu()); // 斗股页面
    router_1.router.add('/mtopic2020/dougurule?id', new douguRule_1.PageDouguRule()); // 斗股规则
    router_1.router.add('/mtopic2020/hot', new hot_1.PageHot()); // 热门话题
    // router.add("/filter?id&code", new PageFilter); // 话题(id)下相关个股中被选中的个股(code)
    if (typeof window.WeixinJSBridge == 'object' &&
        typeof window.WeixinJSBridge.invoke == 'function') {
        handleFontSize();
    }
    else {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
        }
        else if (document.attachEvent) {
            ;
            document.attachEvent('WeixinJSBridgeReady', handleFontSize);
            document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
        }
    }
    // 移动端白屏
    if (!document.getElementById('transtionMask')) {
        document.body.insertAdjacentHTML('beforeend', '<div id="transtionMask" class="show"></div>');
    }
    setTimeout(function () {
        //为了获取到登录状态
        router_1.router.start('#body');
    }, 100);
}
catch (e) {
    // alert(e)
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return require(o,!0);if(i)return i(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(n){var r=t[o][1][n];return s(r||n)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,n,r){(function(n){"use strict";function define(t,n,e){t[n]||Object[r](t,n,{writable:!0,configurable:!0,value:e})}if(t(327),t(328),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0;var r="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&define(Array,t,Function.call.bind([][t]))})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,327:327,328:328}],2:[function(t,n,r){t(130),n.exports=t(23).RegExp.escape},{130:130,23:23}],3:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,r){var e=t(18);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{18:18}],5:[function(t,n,r){var e=t(128)("unscopables"),i=Array.prototype;void 0==i[e]&&t(42)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{128:128,42:42}],6:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],7:[function(t,n,r){var e=t(51);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{51:51}],8:[function(t,n,r){"use strict";var e=t(119),i=t(114),o=t(118);n.exports=[].copyWithin||function copyWithin(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-a,u-c),l=1;for(a<c&&c<a+s&&(l=-1,a+=s-1,c+=s-1);s-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},{114:114,118:118,119:119}],9:[function(t,n,r){"use strict";var e=t(119),i=t(114),o=t(118);n.exports=function fill(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:i(a,r);f>c;)n[c++]=t;return n}},{114:114,118:118,119:119}],10:[function(t,n,r){var e=t(39);n.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},{39:39}],11:[function(t,n,r){var e=t(117),i=t(118),o=t(114);n.exports=function(t){return function(n,r,u){var c,a=e(n),f=i(a.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},{114:114,117:117,118:118}],12:[function(t,n,r){var e=t(25),i=t(47),o=t(119),u=t(118),c=t(15);n.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,y,g=o(n),m=i(g),b=e(c,p,3),x=u(m.length),S=0,w=r?v(n,x):a?v(n,0):void 0;x>S;S++)if((h||S in m)&&(d=m[S],y=b(d,S,g),t))if(r)w[S]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:w.push(d)}else if(s)return!1;return l?-1:f||s?s:w}}},{118:118,119:119,15:15,25:25,47:47}],13:[function(t,n,r){var e=t(3),i=t(119),o=t(47),u=t(118);n.exports=function(t,n,r,c,a){e(n);var f=i(t),s=o(f),l=u(f.length),h=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,f));return c}},{118:118,119:119,3:3,47:47}],14:[function(t,n,r){var e=t(51),i=t(49),o=t(128)("species");n.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},{128:128,49:49,51:51}],15:[function(t,n,r){var e=t(14);n.exports=function(t,n){return new(e(t))(n)}},{14:14}],16:[function(t,n,r){"use strict";var e=t(3),i=t(51),o=t(46),u=[].slice,c={},a=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?a(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{3:3,46:46,51:51}],17:[function(t,n,r){var e=t(18),i=t(128)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{128:128,18:18}],18:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],19:[function(t,n,r){"use strict";var e=t(72).f,i=t(71),o=t(93),u=t(25),c=t(6),a=t(39),f=t(55),s=t(57),l=t(100),h=t(29),v=t(66).fastKey,p=t(125),d=h?"_s":"size",y=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,f){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[f],t)});return o(s.prototype,{clear:function clear(){for(var t=p(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=p(this,n),e=y(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function forEach(t){p(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function has(t){return!!y(p(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return p(this,n)[d]}}),s},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){f(t,n,function(t,r){this._t=p(t,n),this._k=r,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?s(0,r.k):"values"==n?s(0,r.v):s(0,[r.k,r.v]):(t._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},{100:100,125:125,25:25,29:29,39:39,55:55,57:57,6:6,66:66,71:71,72:72,93:93}],20:[function(t,n,r){var e=t(17),i=t(10);n.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},{10:10,17:17}],21:[function(t,n,r){"use strict";var e=t(93),i=t(66).getWeak,o=t(7),u=t(51),c=t(6),a=t(39),f=t(12),s=t(41),l=t(125),h=f(5),v=f(6),p=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,n){return h(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var r=g(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function has(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},{12:12,125:125,39:39,41:41,51:51,6:6,66:66,7:7,93:93}],22:[function(t,n,r){"use strict";var e=t(40),i=t(33),o=t(94),u=t(93),c=t(66),a=t(39),f=t(6),s=t(51),l=t(35),h=t(56),v=t(101),p=t(45);n.exports=function(t,n,r,d,y,g){var m=e[t],b=m,x=y?"set":"add",S=b&&b.prototype,w={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(g||S.forEach&&!l(function(){(new b).entries().next()}))){var E=new b,O=E[x](g?{}:-0,1)!=E,P=l(function(){E.has(1)}),M=h(function(t){new b(t)}),F=!g&&l(function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)});M||(b=n(function(n,r){f(n,b,t);var e=p(new m,n,b);return void 0!=r&&a(r,y,e[x],e),e}),b.prototype=S,S.constructor=b),(P||F)&&(_("delete"),_("has"),y&&_("get")),(F||O)&&_(x),g&&S.clear&&delete S.clear}else b=d.getConstructor(n,t,y,x),u(b.prototype,r),c.NEED=!0;return v(b,t),w[t]=b,i(i.G+i.W+i.F*(b!=m),w),g||d.setStrong(b,t,y),b}},{101:101,33:33,35:35,39:39,40:40,45:45,51:51,56:56,6:6,66:66,93:93,94:94}],23:[function(t,n,r){var e=n.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},{}],24:[function(t,n,r){"use strict";var e=t(72),i=t(92);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{72:72,92:92}],25:[function(t,n,r){var e=t(3);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{3:3}],26:[function(t,n,r){"use strict";var e=t(35),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};n.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},{35:35}],27:[function(t,n,r){"use strict";var e=t(7),i=t(120);n.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},{120:120,7:7}],28:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],29:[function(t,n,r){n.exports=!t(35)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{35:35}],30:[function(t,n,r){var e=t(51),i=t(40).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{40:40,51:51}],31:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],32:[function(t,n,r){var e=t(81),i=t(78),o=t(82);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},{78:78,81:81,82:82}],33:[function(t,n,r){var e=t(40),i=t(23),o=t(42),u=t(94),c=t(25),a=function(t,n,r){var f,s,l,h,v=t&a.F,p=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,m=p?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,b=p?i:i[n]||(i[n]={}),x=b.prototype||(b.prototype={});p&&(r=n);for(f in r)s=!v&&m&&void 0!==m[f],l=(s?m:r)[f],h=g&&s?c(l,e):y&&"function"==typeof l?c(Function.call,l):l,m&&u(m,f,l,t&a.U),b[f]!=l&&o(b,f,h),y&&x[f]!=l&&(x[f]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{23:23,25:25,40:40,42:42,94:94}],34:[function(t,n,r){var e=t(128)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{128:128}],35:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],36:[function(t,n,r){"use strict";var e=t(42),i=t(94),o=t(35),u=t(28),c=t(128);n.exports=function(t,n,r){var a=c(t),f=r(u,a,""[t]),s=f[0],l=f[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,a,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},{128:128,28:28,35:35,42:42,94:94}],37:[function(t,n,r){"use strict";var e=t(7);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{7:7}],38:[function(t,n,r){"use strict";function flattenIntoArray(t,n,r,a,f,s,l,h){for(var v,p,d=f,y=0,g=!!l&&u(l,h,3);y<a;){if(y in r){if(v=g?g(r[y],y,n):r[y],p=!1,i(v)&&(p=v[c],p=void 0!==p?!!p:e(v)),p&&s>0)d=flattenIntoArray(t,n,v,o(v.length),d,s-1)-1;else{if(d>=9007199254740991)throw TypeError();t[d]=v}d++}y++}return d}var e=t(49),i=t(51),o=t(118),u=t(25),c=t(128)("isConcatSpreadable");n.exports=flattenIntoArray},{118:118,128:128,25:25,49:49,51:51}],39:[function(t,n,r){var e=t(25),i=t(53),o=t(48),u=t(7),c=t(118),a=t(129),f={},s={},r=n.exports=function(t,n,r,l,h){var v,p,d,y,g=h?function(){return t}:a(t),m=e(r,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=c(t.length);v>b;b++)if((y=n?m(u(p=t[b])[0],p[1]):m(t[b]))===f||y===s)return y}else for(d=g.call(t);!(p=d.next()).done;)if((y=i(d,m,p.value,n))===f||y===s)return y};r.BREAK=f,r.RETURN=s},{118:118,129:129,25:25,48:48,53:53,7:7}],40:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],41:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],42:[function(t,n,r){var e=t(72),i=t(92);n.exports=t(29)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{29:29,72:72,92:92}],43:[function(t,n,r){var e=t(40).document;n.exports=e&&e.documentElement},{40:40}],44:[function(t,n,r){n.exports=!t(29)&&!t(35)(function(){return 7!=Object.defineProperty(t(30)("div"),"a",{get:function(){return 7}}).a})},{29:29,30:30,35:35}],45:[function(t,n,r){var e=t(51),i=t(99).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{51:51,99:99}],46:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],47:[function(t,n,r){var e=t(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{18:18}],48:[function(t,n,r){var e=t(58),i=t(128)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{128:128,58:58}],49:[function(t,n,r){var e=t(18);n.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},{18:18}],50:[function(t,n,r){var e=t(51),i=Math.floor;n.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},{51:51}],51:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],52:[function(t,n,r){var e=t(51),i=t(18),o=t(128)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{128:128,18:18,51:51}],53:[function(t,n,r){var e=t(7);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{7:7}],54:[function(t,n,r){"use strict";var e=t(71),i=t(92),o=t(101),u={};t(42)(u,t(128)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{101:101,128:128,42:42,71:71,92:92}],55:[function(t,n,r){"use strict";var e=t(60),i=t(33),o=t(94),u=t(42),c=t(41),a=t(58),f=t(54),s=t(101),l=t(79),h=t(128)("iterator"),v=!([].keys&&"next"in[].keys()),p=function(){return this};n.exports=function(t,n,r,d,y,g,m){f(r,n,d);var b,x,S,w=function(t){if(!v&&t in P)return P[t];switch(t){case"keys":return function keys(){return new r(this,t)};case"values":return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},_=n+" Iterator",E="values"==y,O=!1,P=t.prototype,M=P[h]||P["@@iterator"]||y&&P[y],F=M||w(y),I=y?E?w("entries"):F:void 0,A="Array"==n?P.entries||M:M;if(A&&(S=l(A.call(new t)))!==Object.prototype&&S.next&&(s(S,_,!0),e||c(S,h)||u(S,h,p)),E&&M&&"values"!==M.name&&(O=!0,F=function values(){return M.call(this)}),e&&!m||!v&&!O&&P[h]||u(P,h,F),a[n]=F,a[_]=p,y)if(b={values:E?F:w("values"),keys:g?F:w("keys"),entries:I},m)for(x in b)x in P||o(P,x,b[x]);else i(i.P+i.F*(v||O),n,b);return b}},{101:101,128:128,33:33,41:41,42:42,54:54,58:58,60:60,79:79,94:94}],56:[function(t,n,r){var e=t(128)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{128:128}],57:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],58:[function(t,n,r){n.exports={}},{}],59:[function(t,n,r){var e=t(81),i=t(117);n.exports=function(t,n){for(var r,o=i(t),u=e(o),c=u.length,a=0;c>a;)if(o[r=u[a++]]===n)return r}},{117:117,81:81}],60:[function(t,n,r){n.exports=!1},{}],61:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],62:[function(t,n,r){var e=t(65),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126),f=function(t){return t+1/o-1/o};n.exports=Math.fround||function fround(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*f(i/a/u)*a*u:(n=(1+u/o)*i,r=n-(n-i),r>c||r!=r?s*(1/0):s*r)}},{65:65}],63:[function(t,n,r){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],64:[function(t,n,r){n.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},{}],65:[function(t,n,r){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],66:[function(t,n,r){var e=t(124)("meta"),i=t(51),o=t(41),u=t(72).f,c=0,a=Object.isExtensible||function(){return!0},f=!t(35)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},v=function(t){return f&&p.NEED&&a(t)&&!o(t,e)&&s(t),t},p=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},{124:124,35:35,41:41,51:51,72:72}],67:[function(t,n,r){var e=t(160),i=t(33),o=t(103)("metadata"),u=o.store||(o.store=new(t(266))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},a=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},f=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},l=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},v=function(t){i(i.S,"Reflect",t)};n.exports={store:u,map:c,has:a,get:f,set:s,keys:l,key:h,exp:v}},{103:103,160:160,266:266,33:33}],68:[function(t,n,r){var e=t(40),i=t(113).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==t(18)(u);n.exports=function(){var t,n,r,f=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(o){var s=!0,l=document.createTextNode("");new o(f).observe(l,{characterData:!0}),r=function(){l.data=s=!s}}else if(c&&c.resolve){var h=c.resolve();r=function(){h.then(f)}}else r=function(){i.call(e,f)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{113:113,18:18,40:40}],69:[function(t,n,r){"use strict";function PromiseCapability(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}var e=t(3);n.exports.f=function(t){return new PromiseCapability(t)}},{3:3}],70:[function(t,n,r){"use strict";var e=t(81),i=t(78),o=t(82),u=t(119),c=t(47),a=Object.assign;n.exports=!a||t(35)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),a=arguments.length,f=1,s=i.f,l=o.f;a>f;)for(var h,v=c(arguments[f++]),p=s?e(v).concat(s(v)):e(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(r[h]=v[h]);return r}:a},{119:119,35:35,47:47,78:78,81:81,82:82}],71:[function(t,n,r){var e=t(7),i=t(73),o=t(31),u=t(102)("IE_PROTO"),c=function(){},a=function(){var n,r=t(30)("iframe"),e=o.length;for(r.style.display="none",t(43).appendChild(r),r.src="javascript:",n=r.contentWindow.document,n.open(),n.write("<script>document.F=Object<\/script>"),n.close(),a=n.F;e--;)delete a.prototype[o[e]];return a()};n.exports=Object.create||function create(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{102:102,30:30,31:31,43:43,7:7,73:73}],72:[function(t,n,r){var e=t(7),i=t(44),o=t(120),u=Object.defineProperty;r.f=t(29)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{120:120,29:29,44:44,7:7}],73:[function(t,n,r){var e=t(72),i=t(7),o=t(81);n.exports=t(29)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},{29:29,7:7,72:72,81:81}],74:[function(t,n,r){"use strict";n.exports=t(60)||!t(35)(function(){var n=Math.random();__defineSetter__.call(null,n,function(){}),delete t(40)[n]})},{35:35,40:40,60:60}],75:[function(t,n,r){var e=t(82),i=t(92),o=t(117),u=t(120),c=t(41),a=t(44),f=Object.getOwnPropertyDescriptor;r.f=t(29)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{117:117,120:120,29:29,41:41,44:44,82:82,92:92}],76:[function(t,n,r){var e=t(117),i=t(77).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{117:117,77:77}],77:[function(t,n,r){var e=t(80),i=t(31).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},{31:31,80:80}],78:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],79:[function(t,n,r){var e=t(41),i=t(119),o=t(102)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{102:102,119:119,41:41}],80:[function(t,n,r){var e=t(41),i=t(117),o=t(11)(!1),u=t(102)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(f,r)||f.push(r));return f}},{102:102,11:11,117:117,41:41}],81:[function(t,n,r){var e=t(80),i=t(31);n.exports=Object.keys||function keys(t){return e(t,i)}},{31:31,80:80}],82:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],83:[function(t,n,r){var e=t(33),i=t(23),o=t(35);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{23:23,33:33,35:35}],84:[function(t,n,r){var e=t(81),i=t(117),o=t(82).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,f=0,s=[];a>f;)o.call(u,r=c[f++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{117:117,81:81,82:82}],85:[function(t,n,r){var e=t(77),i=t(78),o=t(7),u=t(40).Reflect;n.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{40:40,7:7,77:77,78:78}],86:[function(t,n,r){var e=t(40).parseFloat,i=t(111).trim;n.exports=1/e(t(112)+"-0")!=-1/0?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{111:111,112:112,40:40}],87:[function(t,n,r){var e=t(40).parseInt,i=t(111).trim,o=t(112),u=/^[-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{111:111,112:112,40:40}],88:[function(t,n,r){"use strict";var e=t(89),i=t(46),o=t(3);n.exports=function(){for(var t=o(this),n=arguments.length,r=Array(n),u=0,c=e._,a=!1;n>u;)(r[u]=arguments[u++])===c&&(a=!0);return function(){var e,o=this,u=arguments.length,f=0,s=0;if(!a&&!u)return i(t,r,o);if(e=r.slice(),a)for(;n>f;f++)e[f]===c&&(e[f]=arguments[s++]);for(;u>s;)e.push(arguments[s++]);return i(t,e,o)}}},{3:3,46:46,89:89}],89:[function(t,n,r){n.exports=t(40)},{40:40}],90:[function(t,n,r){n.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},{}],91:[function(t,n,r){var e=t(69);n.exports=function(t,n){var r=e.f(t);return(0,r.resolve)(n),r.promise}},{69:69}],92:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],93:[function(t,n,r){var e=t(94);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{94:94}],94:[function(t,n,r){var e=t(40),i=t(42),o=t(41),u=t(124)("src"),c=Function.toString,a=(""+c).split("toString");t(23).inspectSource=function(t){return c.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function toString(){return"function"==typeof this&&this[u]||c.call(this)})},{124:124,23:23,40:40,41:41,42:42}],95:[function(t,n,r){n.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},{}],96:[function(t,n,r){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},{}],97:[function(t,n,r){"use strict";var e=t(33),i=t(3),o=t(25),u=t(39);n.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,c,a=arguments[1];return i(this),n=void 0!==a,n&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},{25:25,3:3,33:33,39:39}],98:[function(t,n,r){"use strict";var e=t(33);n.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},{33:33}],99:[function(t,n,r){var e=t(51),i=t(7),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{e=t(25)(Function.call,t(75).f(Object.prototype,"__proto__").set,2),e(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{25:25,51:51,7:7,75:75}],100:[function(t,n,r){"use strict";var e=t(40),i=t(72),o=t(29),u=t(128)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{128:128,29:29,40:40,72:72}],101:[function(t,n,r){var e=t(72).f,i=t(41),o=t(128)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{128:128,41:41,72:72}],102:[function(t,n,r){var e=t(103)("keys"),i=t(124);n.exports=function(t){return e[t]||(e[t]=i(t))}},{103:103,124:124}],103:[function(t,n,r){var e=t(40),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});n.exports=function(t){return i[t]||(i[t]={})}},{40:40}],104:[function(t,n,r){var e=t(7),i=t(3),o=t(128)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{128:128,3:3,7:7}],105:[function(t,n,r){"use strict";var e=t(35);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{35:35}],106:[function(t,n,r){var e=t(116),i=t(28);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536)}}},{116:116,28:28}],107:[function(t,n,r){var e=t(52),i=t(28);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{28:28,52:52}],108:[function(t,n,r){var e=t(33),i=t(35),o=t(28),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{28:28,33:33,35:35}],109:[function(t,n,r){var e=t(118),i=t(110),o=t(28);n.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,f=void 0===r?" ":String(r),s=e(n);if(s<=a||""==f)return c;var l=s-a,h=i.call(f,Math.ceil(l/f.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{110:110,118:118,28:28}],110:[function(t,n,r){"use strict";var e=t(116),i=t(28);n.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{116:116,28:28}],111:[function(t,n,r){var e=t(33),i=t(28),o=t(35),u=t(112),c="["+u+"]",a="​",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||a[t]()!=a}),f=i[t]=c?n(h):u[t];r&&(i[r]=f),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{112:112,28:28,33:33,35:35}],112:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],113:[function(t,n,r){var e,i,o,u=t(25),c=t(46),a=t(43),f=t(30),s=t(40),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,d=s.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};h&&v||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},v=function clearImmediate(t){delete g[t]},"process"==t(18)(l)?e=function(t){l.nextTick(u(m,t,1))}:d&&d.now?e=function(t){d.now(u(m,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=b,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",b,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),n.exports={set:h,clear:v}},{18:18,25:25,30:30,40:40,43:43,46:46}],114:[function(t,n,r){var e=t(116),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{116:116}],115:[function(t,n,r){var e=t(116),i=t(118);n.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},{116:116,118:118}],116:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],117:[function(t,n,r){var e=t(47),i=t(28);n.exports=function(t){return e(i(t))}},{28:28,47:47}],118:[function(t,n,r){var e=t(116),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{116:116}],
119:[function(t,n,r){var e=t(28);n.exports=function(t){return Object(e(t))}},{28:28}],120:[function(t,n,r){var e=t(51);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{51:51}],121:[function(t,n,r){"use strict";if(t(29)){var e=t(60),i=t(40),o=t(35),u=t(33),c=t(123),a=t(122),f=t(25),s=t(6),l=t(92),h=t(42),v=t(93),p=t(116),d=t(118),y=t(115),g=t(114),m=t(120),b=t(41),x=t(17),S=t(51),w=t(119),_=t(48),E=t(71),O=t(79),P=t(77).f,M=t(129),F=t(124),I=t(128),A=t(12),k=t(11),N=t(104),j=t(141),T=t(58),R=t(56),L=t(100),G=t(9),D=t(8),C=t(72),W=t(75),U=C.f,B=W.f,V=i.RangeError,z=i.TypeError,q=i.Uint8Array,K=Array.prototype,Y=a.ArrayBuffer,J=a.DataView,H=A(0),X=A(2),$=A(3),Z=A(4),Q=A(5),tt=A(6),nt=k(!0),rt=k(!1),et=j.values,it=j.keys,ot=j.entries,ut=K.lastIndexOf,ct=K.reduce,at=K.reduceRight,ft=K.join,st=K.sort,lt=K.slice,ht=K.toString,vt=K.toLocaleString,pt=I("iterator"),dt=I("toStringTag"),yt=F("typed_constructor"),gt=F("def_constructor"),mt=c.CONSTR,bt=c.TYPED,xt=c.VIEW,St=A(1,function(t,n){return Pt(N(t,t[gt]),n)}),wt=o(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),_t=!!q&&!!q.prototype.set&&o(function(){new q(1).set({})}),Et=function(t,n){var r=p(t);if(r<0||r%n)throw V("Wrong offset!");return r},Ot=function(t){if(S(t)&&bt in t)return t;throw z(t+" is not a typed array!")},Pt=function(t,n){if(!(S(t)&&yt in t))throw z("It is not a typed array constructor!");return new t(n)},Mt=function(t,n){return Ft(N(t,t[gt]),n)},Ft=function(t,n){for(var r=0,e=n.length,i=Pt(t,e);e>r;)i[r]=n[r++];return i},It=function(t,n,r){U(t,n,{get:function(){return this._d[r]}})},At=function from(t){var n,r,e,i,o,u,c=w(t),a=arguments.length,s=a>1?arguments[1]:void 0,l=void 0!==s,h=M(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(s=f(s,arguments[2],2)),n=0,r=d(c.length),i=Pt(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},kt=function of(){for(var t=0,n=arguments.length,r=Pt(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!q&&o(function(){vt.call(new q(1))}),jt=function toLocaleString(){return vt.apply(Nt?lt.call(Ot(this)):Ot(this),arguments)},Tt={copyWithin:function copyWithin(t,n){return D.call(Ot(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function every(t){return Z(Ot(this),t,arguments.length>1?arguments[1]:void 0)},fill:function fill(t){return G.apply(Ot(this),arguments)},filter:function filter(t){return Mt(this,X(Ot(this),t,arguments.length>1?arguments[1]:void 0))},find:function find(t){return Q(Ot(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function findIndex(t){return tt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function forEach(t){H(Ot(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function indexOf(t){return rt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},includes:function includes(t){return nt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},join:function join(t){return ft.apply(Ot(this),arguments)},lastIndexOf:function lastIndexOf(t){return ut.apply(Ot(this),arguments)},map:function map(t){return St(Ot(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function reduce(t){return ct.apply(Ot(this),arguments)},reduceRight:function reduceRight(t){return at.apply(Ot(this),arguments)},reverse:function reverse(){for(var t,n=this,r=Ot(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return $(Ot(this),t,arguments.length>1?arguments[1]:void 0)},sort:function sort(t){return st.call(Ot(this),t)},subarray:function subarray(t,n){var r=Ot(this),e=r.length,i=g(t,e);return new(N(r,r[gt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:g(n,e))-i))}},Rt=function slice(t,n){return Mt(this,lt.call(Ot(this),t,n))},Lt=function set(t){Ot(this);var n=Et(arguments[1],1),r=this.length,e=w(t),i=d(e.length),o=0;if(i+n>r)throw V("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Gt={entries:function entries(){return ot.call(Ot(this))},keys:function keys(){return it.call(Ot(this))},values:function values(){return et.call(Ot(this))}},Dt=function(t,n){return S(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Ct=function getOwnPropertyDescriptor(t,n){return Dt(t,n=m(n,!0))?l(2,t[n]):B(t,n)},Wt=function defineProperty(t,n,r){return!(Dt(t,n=m(n,!0))&&S(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?U(t,n,r):(t[n]=r.value,t)};mt||(W.f=Ct,C.f=Wt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Ct,defineProperty:Wt}),o(function(){ht.call({})})&&(ht=vt=function toString(){return ft.call(this)});var Ut=v({},Tt);v(Ut,Gt),h(Ut,pt,Gt.values),v(Ut,{slice:Rt,set:Lt,constructor:function(){},toString:ht,toLocaleString:jt}),It(Ut,"buffer","b"),It(Ut,"byteOffset","o"),It(Ut,"byteLength","l"),It(Ut,"length","e"),U(Ut,dt,{get:function(){return this[bt]}}),n.exports=function(t,n,r,a){a=!!a;var f=t+(a?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[f],g=p||{},m=p&&O(p),b=!p||!c.ABV,w={},_=p&&p.prototype,M=function(t,r){var e=t._d;return e.v[l](r*n+e.o,wt)},F=function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,wt)},I=function(t,n){U(t,n,{get:function(){return M(this,n)},set:function(t){return F(this,n,t)},enumerable:!0})};b?(p=r(function(t,r,e,i){s(t,p,f,"_d");var o,u,c,a,l=0,v=0;if(S(r)){if(!(r instanceof Y||"ArrayBuffer"==(a=x(r))||"SharedArrayBuffer"==a))return bt in r?Ft(p,r):At.call(p,r);o=r,v=Et(e,n);var g=r.byteLength;if(void 0===i){if(g%n)throw V("Wrong length!");if((u=g-v)<0)throw V("Wrong length!")}else if((u=d(i)*n)+v>g)throw V("Wrong length!");c=u/n}else c=y(r),u=c*n,o=new Y(u);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new J(o)});l<c;)I(t,l++)}),_=p.prototype=E(Ut),h(_,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&R(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=r(function(t,r,e,i){s(t,p,f);var o;return S(r)?r instanceof Y||"ArrayBuffer"==(o=x(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Et(e,n),i):void 0!==e?new g(r,Et(e,n)):new g(r):bt in r?Ft(p,r):At.call(p,r):new g(y(r))}),H(m!==Function.prototype?P(g).concat(P(m)):P(g),function(t){t in p||h(p,t,g[t])}),p.prototype=_,e||(_.constructor=p));var A=_[pt],k=!!A&&("values"==A.name||void 0==A.name),N=Gt.values;h(p,yt,!0),h(_,bt,f),h(_,xt,!0),h(_,gt,p),(a?new p(1)[dt]==f:dt in _)||U(_,dt,{get:function(){return f}}),w[f]=p,u(u.G+u.W+u.F*(p!=g),w),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){g.of.call(p,1)}),f,{from:At,of:kt}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,f,Tt),L(f),u(u.P+u.F*_t,f,{set:Lt}),u(u.P+u.F*!k,f,Gt),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new p(1).slice()}),f,{slice:Rt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),f,{toLocaleString:jt}),T[f]=k?A:N,e||k||h(_,pt,N)}}else n.exports=function(){}},{100:100,104:104,11:11,114:114,115:115,116:116,118:118,119:119,12:12,120:120,122:122,123:123,124:124,128:128,129:129,141:141,17:17,25:25,29:29,33:33,35:35,40:40,41:41,42:42,48:48,51:51,56:56,58:58,6:6,60:60,71:71,72:72,75:75,77:77,79:79,8:8,9:9,92:92,93:93}],122:[function(t,n,r){"use strict";function packIEEE754(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?M(2,-24)-M(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=P(t),t!=t||t===E?(i=t!=t?1:0,e=a):(e=F(I(t)/A),t*(o=M(2,-e))<1&&(e--,o*=2),t+=e+f>=1?s/o:s*M(2,1-f),t*o>=2&&(e++,o/=2),e+f>=a?(i=0,e=a):e+f>=1?(i=(t*o-1)*M(2,n),e+=f):(i=t*M(2,f-1)*M(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;c>0;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-E:E;e+=M(2,n),s-=u}return(f?-1:1)*e*M(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){d(t[m],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=+r,o=v(i);if(o+n>t[N])throw _(b);var u=t[k]._b,c=o+t[j],a=u.slice(c,c+n);return e?a:a.reverse()}function set(t,n,r,e,i,o){var u=+r,c=v(u);if(c+n>t[N])throw _(b);for(var a=t[k]._b,f=c+t[j],s=e(+i),l=0;l<n;l++)a[f+l]=s[o?l:n-l-1]}var e=t(40),i=t(29),o=t(60),u=t(123),c=t(42),a=t(93),f=t(35),s=t(6),l=t(116),h=t(118),v=t(115),p=t(77).f,d=t(72).f,y=t(9),g=t(101),m="prototype",b="Wrong index!",x=e.ArrayBuffer,S=e.DataView,w=e.Math,_=e.RangeError,E=e.Infinity,O=x,P=w.abs,M=w.pow,F=w.floor,I=w.log,A=w.LN2,k=i?"_b":"buffer",N=i?"_l":"byteLength",j=i?"_o":"byteOffset";if(u.ABV){if(!f(function(){x(1)})||!f(function(){new x(-1)})||f(function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name})){x=function ArrayBuffer(t){return s(this,x),new O(v(t))};for(var T,R=x[m]=O[m],L=p(O),G=0;L.length>G;)(T=L[G++])in x||c(x,T,O[T]);o||(R.constructor=x)}var D=new S(new x(2)),C=S[m].setInt8;D.setInt8(0,2147483648),D.setInt8(1,2147483649),!D.getInt8(0)&&D.getInt8(1)||a(S[m],{setInt8:function setInt8(t,n){C.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){C.call(this,t,n<<24>>24)}},!0)}else x=function ArrayBuffer(t){s(this,x,"ArrayBuffer");var n=v(t);this._b=y.call(Array(n),0),this[N]=n},S=function DataView(t,n,r){s(this,S,"DataView"),s(t,x,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw _("Wrong length!");this[k]=t,this[j]=i,this[N]=r},i&&(addGetter(x,"byteLength","_l"),addGetter(S,"buffer","_b"),addGetter(S,"byteLength","_l"),addGetter(S,"byteOffset","_o")),a(S[m],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});g(x,"ArrayBuffer"),g(S,"DataView"),c(S[m],u.VIEW,!0),r.ArrayBuffer=x,r.DataView=S},{101:101,115:115,116:116,118:118,123:123,29:29,35:35,40:40,42:42,6:6,60:60,72:72,77:77,9:9,93:93}],123:[function(t,n,r){for(var e,i=t(40),o=t(42),u=t(124),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;n.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},{124:124,40:40,42:42}],124:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],125:[function(t,n,r){var e=t(51);n.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},{51:51}],126:[function(t,n,r){var e=t(40),i=t(23),o=t(60),u=t(127),c=t(72).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{127:127,23:23,40:40,60:60,72:72}],127:[function(t,n,r){r.f=t(128)},{128:128}],128:[function(t,n,r){var e=t(103)("wks"),i=t(124),o=t(40).Symbol,u="function"==typeof o;(n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},{103:103,124:124,40:40}],129:[function(t,n,r){var e=t(17),i=t(128)("iterator"),o=t(58);n.exports=t(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{128:128,17:17,23:23,58:58}],130:[function(t,n,r){var e=t(33),i=t(95)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},{33:33,95:95}],131:[function(t,n,r){var e=t(33);e(e.P,"Array",{copyWithin:t(8)}),t(5)("copyWithin")},{33:33,5:5,8:8}],132:[function(t,n,r){"use strict";var e=t(33),i=t(12)(4);e(e.P+e.F*!t(105)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],133:[function(t,n,r){var e=t(33);e(e.P,"Array",{fill:t(9)}),t(5)("fill")},{33:33,5:5,9:9}],134:[function(t,n,r){"use strict";var e=t(33),i=t(12)(2);e(e.P+e.F*!t(105)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],135:[function(t,n,r){"use strict";var e=t(33),i=t(12)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,33:33,5:5}],136:[function(t,n,r){"use strict";var e=t(33),i=t(12)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function find(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("find")},{12:12,33:33,5:5}],137:[function(t,n,r){"use strict";var e=t(33),i=t(12)(0),o=t(105)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],138:[function(t,n,r){"use strict";var e=t(25),i=t(33),o=t(119),u=t(53),c=t(48),a=t(118),f=t(24),s=t(129);i(i.S+i.F*!t(56)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,m=s(h);if(y&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==m||v==Array&&c(m))for(n=a(h.length),r=new v(n);n>g;g++)f(r,g,y?d(h[g],g):h[g]);else for(l=m.call(h),r=new v;!(i=l.next()).done;g++)f(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{118:118,119:119,129:129,24:24,25:25,33:33,48:48,53:53,56:56}],139:[function(t,n,r){"use strict";var e=t(33),i=t(11)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(105)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{105:105,11:11,33:33}],140:[function(t,n,r){var e=t(33);e(e.S,"Array",{isArray:t(49)})},{33:33,49:49}],141:[function(t,n,r){"use strict";var e=t(5),i=t(57),o=t(58),u=t(117);n.exports=t(55)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{117:117,5:5,55:55,57:57,58:58}],142:[function(t,n,r){"use strict";var e=t(33),i=t(117),o=[].join;e(e.P+e.F*(t(47)!=Object||!t(105)(o)),"Array",{join:function join(t){return o.call(i(this),void 0===t?",":t)}})},{105:105,117:117,33:33,47:47}],143:[function(t,n,r){"use strict";var e=t(33),i=t(117),o=t(116),u=t(118),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!t(105)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{105:105,116:116,117:117,118:118,33:33}],144:[function(t,n,r){"use strict";var e=t(33),i=t(12)(1);e(e.P+e.F*!t(105)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],145:[function(t,n,r){"use strict";var e=t(33),i=t(24);e(e.S+e.F*t(35)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{24:24,33:33,35:35}],146:[function(t,n,r){"use strict";var e=t(33),i=t(13);e(e.P+e.F*!t(105)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},{105:105,13:13,33:33}],147:[function(t,n,r){"use strict";var e=t(33),i=t(13);e(e.P+e.F*!t(105)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},{105:105,13:13,33:33}],148:[function(t,n,r){"use strict";var e=t(33),i=t(43),o=t(18),u=t(114),c=t(118),a=[].slice;e(e.P+e.F*t(35)(function(){i&&a.call(i)}),"Array",{slice:function slice(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=c(f-i),l=Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{114:114,118:118,18:18,33:33,35:35,43:43}],149:[function(t,n,r){"use strict";var e=t(33),i=t(12)(3);e(e.P+e.F*!t(105)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],150:[function(t,n,r){"use strict";var e=t(33),i=t(3),o=t(119),u=t(35),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!t(105)(c)),"Array",{sort:function sort(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{105:105,119:119,3:3,33:33,35:35}],151:[function(t,n,r){t(100)("Array")},{100:100}],152:[function(t,n,r){var e=t(33);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{33:33}],153:[function(t,n,r){var e=t(33),i=t(26);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},{26:26,33:33}],154:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120);e(e.P+e.F*t(35)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{119:119,120:120,33:33,35:35}],155:[function(t,n,r){var e=t(128)("toPrimitive"),i=Date.prototype;e in i||t(42)(i,e,t(27))},{128:128,27:27,42:42}],156:[function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&t(94)(e,"toString",function toString(){var t=o.call(this);return t===t?i.call(this):"Invalid Date"})},{94:94}],157:[function(t,n,r){var e=t(33);e(e.P,"Function",{bind:t(16)})},{16:16,33:33}],158:[function(t,n,r){"use strict";var e=t(51),i=t(79),o=t(128)("hasInstance"),u=Function.prototype;o in u||t(72).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{128:128,51:51,72:72,79:79}],159:[function(t,n,r){var e=t(72).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||t(29)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},{29:29,72:72}],160:[function(t,n,r){"use strict";var e=t(19),i=t(125);n.exports=t(22)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},{125:125,19:19,22:22}],161:[function(t,n,r){var e=t(33),i=t(63),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{33:33,63:63}],162:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(33),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{33:33}],163:[function(t,n,r){var e=t(33),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{33:33}],164:[function(t,n,r){var e=t(33),i=t(65);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{33:33,65:65}],165:[function(t,n,r){var e=t(33);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{33:33}],166:[function(t,n,r){var e=t(33),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},{33:33}],167:[function(t,n,r){var e=t(33),i=t(61);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{33:33,61:61}],168:[function(t,n,r){var e=t(33);e(e.S,"Math",{fround:t(62)})},{33:33,62:62}],169:[function(t,n,r){var e=t(33),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)r=i(arguments[u++]),a<r?(e=a/r,o=o*e*e+1,a=r):r>0?(e=r/a,o+=e*e):o+=r;return a===1/0?1/0:a*Math.sqrt(o)}})},{33:33}],170:[function(t,n,r){var e=t(33),i=Math.imul;e(e.S+e.F*t(35)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},{33:33,35:35}],171:[function(t,n,r){var e=t(33);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},{33:33}],172:[function(t,n,r){var e=t(33);e(e.S,"Math",{log1p:t(63)})},{33:33,63:63}],173:[function(t,n,r){var e=t(33);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{33:33}],174:[function(t,n,r){var e=t(33);e(e.S,"Math",{sign:t(65)})},{33:33,65:65}],175:[function(t,n,r){var e=t(33),i=t(61),o=Math.exp;e(e.S+e.F*t(35)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{33:33,35:35,61:61}],176:[function(t,n,r){var e=t(33),i=t(61),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{33:33,61:61}],177:[function(t,n,r){var e=t(33);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{33:33}],178:[function(t,n,r){"use strict";var e=t(40),i=t(41),o=t(18),u=t(45),c=t(120),a=t(35),f=t(77).f,s=t(75).f,l=t(72).f,h=t(111).trim,v=e.Number,p=v,d=v.prototype,y="Number"==o(t(71)(d)),g="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():h(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(y?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new p(m(n)),r,v):m(n)};for(var b,x=t(29)?f(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(p,b=x[S])&&!i(v,b)&&l(v,b,s(p,b));v.prototype=d,d.constructor=v,t(94)(e,"Number",v)}},{111:111,120:120,18:18,29:29,35:35,40:40,41:41,45:45,71:71,72:72,75:75,77:77,94:94}],179:[function(t,n,r){var e=t(33);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{33:33}],180:[function(t,n,r){var e=t(33),i=t(40).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},{33:33,40:40}],181:[function(t,n,r){var e=t(33);e(e.S,"Number",{isInteger:t(50)})},{33:33,50:50}],182:[function(t,n,r){var e=t(33);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{33:33}],183:[function(t,n,r){var e=t(33),i=t(50),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},{33:33,50:50}],184:[function(t,n,r){var e=t(33);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{33:33}],185:[function(t,n,r){var e=t(33);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{33:33}],186:[function(t,n,r){var e=t(33),i=t(86);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{33:33,86:86}],187:[function(t,n,r){var e=t(33),i=t(87);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{33:33,87:87}],188:[function(t,n,r){"use strict";var e=t(33),i=t(116),o=t(4),u=t(110),c=1..toFixed,a=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=a(r/t),r=r%t*1e7},v=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},p=function(t,n,r){return 0===n?r:n%2==1?p(t,n-1,r*t):p(t*t,n/2,r)},d=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(35)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,a=o(this,s),f=i(t),y="",g="0";if(f<0||f>20)throw RangeError(s);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(y="-",a=-a),a>1e-21)if(n=d(a*p(2,69,1))-69,r=n<0?a*p(2,-n,1):a/p(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=f;e>=7;)l(1e7,0),e-=7;for(l(p(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=v()}else l(0,r),l(1<<-n,0),g=v()+u.call("0",f);return f>0?(c=g.length,g=y+(c<=f?"0."+u.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=y+g,g}})},{110:110,116:116,33:33,35:35,4:4}],189:[function(t,n,r){"use strict";var e=t(33),i=t(35),o=t(4),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{33:33,35:35,4:4}],190:[function(t,n,r){var e=t(33);e(e.S+e.F,"Object",{assign:t(70)})},{33:33,70:70}],191:[function(t,n,r){var e=t(33);e(e.S,"Object",{create:t(71)})},{33:33,71:71}],192:[function(t,n,r){var e=t(33);e(e.S+e.F*!t(29),"Object",{defineProperties:t(73)})},{29:29,33:33,73:73}],193:[function(t,n,r){var e=t(33);e(e.S+e.F*!t(29),"Object",{defineProperty:t(72).f})},{29:29,33:33,72:72}],194:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],195:[function(t,n,r){var e=t(117),i=t(75).f;t(83)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},{117:117,75:75,83:83}],196:[function(t,n,r){t(83)("getOwnPropertyNames",function(){return t(76).f})},{76:76,83:83}],197:[function(t,n,r){var e=t(119),i=t(79);t(83)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},{119:119,79:79,83:83}],198:[function(t,n,r){var e=t(51);t(83)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},{51:51,83:83}],199:[function(t,n,r){var e=t(51);t(83)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},{51:51,83:83}],200:[function(t,n,r){var e=t(51);t(83)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},{51:51,83:83}],201:[function(t,n,r){var e=t(33);e(e.S,"Object",{is:t(96)})},{33:33,96:96}],202:[function(t,n,r){var e=t(119),i=t(81);t(83)("keys",function(){return function keys(t){return i(e(t))}})},{119:119,81:81,83:83}],203:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],204:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],205:[function(t,n,r){var e=t(33);e(e.S,"Object",{setPrototypeOf:t(99).set})},{33:33,99:99}],206:[function(t,n,r){"use strict";var e=t(17),i={};i[t(128)("toStringTag")]="z",i+""!="[object z]"&&t(94)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},{128:128,17:17,94:94}],207:[function(t,n,r){var e=t(33),i=t(86);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{33:33,86:86}],208:[function(t,n,r){var e=t(33),i=t(87);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{33:33,87:87}],209:[function(t,n,r){"use strict";var e,i,o,u,c=t(60),a=t(40),f=t(25),s=t(17),l=t(33),h=t(51),v=t(3),p=t(6),d=t(39),y=t(104),g=t(113).set,m=t(68)(),b=t(69),x=t(90),S=t(91),w=a.TypeError,_=a.process,E=a.Promise,O="process"==s(_),P=function(){},M=i=b.f,F=!!function(){try{var n=E.resolve(1),r=(n.constructor={})[t(128)("species")]=function(t){t(P,P)};return(O||"function"==typeof PromiseRejectionEvent)&&n.then(P)instanceof r}catch(t){}}(),I=c?function(t,n){return t===n||t===E&&n===u}:function(t,n){return t===n},A=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,a=n.reject,f=n.domain;try{u?(i||(2==t._h&&T(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&f.exit()),r===n.promise?a(w("Promise-chain cycle")):(o=A(r))?o.call(r,c,a):c(r)):a(e)}catch(t){a(t)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&N(t)})}},N=function(t){g.call(a,function(){var n,r,e,i=t._v,o=j(t);if(o&&(n=x(function(){O?_.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=O||j(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},j=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if(n=r[e++],n.fail||!j(n.promise))return!1;return!0},T=function(t){g.call(a,function(){var n;O?_.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},L=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw w("Promise can't be resolved itself");(n=A(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,f(L,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,k(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};F||(E=function Promise(t){p(this,E,"Promise","_h"),v(t),e.call(this);try{t(f(L,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(93)(E.prototype,{then:function then(t,n){var r=M(y(this,E));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=O?_.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&k(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(L,t,1),this.reject=f(R,t,1)},b.f=M=function(t){return I(E,t)?new o(t):i(t)}),l(l.G+l.W+l.F*!F,{Promise:E}),t(101)(E,"Promise"),t(100)("Promise"),u=t(23).Promise,l(l.S+l.F*!F,"Promise",{reject:function reject(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!F),"Promise",{resolve:function resolve(t){return t instanceof E&&I(t.constructor,this)?t:S(this,t)}}),l(l.S+l.F*!(F&&t(56)(function(t){E.all(t).catch(P)})),"Promise",{all:function all(t){var n=this,r=M(n),e=r.resolve,i=r.reject,o=x(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function race(t){var n=this,r=M(n),e=r.reject,i=x(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},{100:100,101:101,104:104,113:113,128:128,17:17,23:23,25:25,
3:3,33:33,39:39,40:40,51:51,56:56,6:6,60:60,68:68,69:69,90:90,91:91,93:93}],210:[function(t,n,r){var e=t(33),i=t(3),o=t(7),u=(t(40).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(35)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},{3:3,33:33,35:35,40:40,7:7}],211:[function(t,n,r){var e=t(33),i=t(71),o=t(3),u=t(7),c=t(51),a=t(35),f=t(16),s=(t(40).Reflect||{}).construct,l=a(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!a(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var a=r.prototype,v=i(c(a)?a:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},{16:16,3:3,33:33,35:35,40:40,51:51,7:7,71:71}],212:[function(t,n,r){var e=t(72),i=t(33),o=t(7),u=t(120);i(i.S+i.F*t(35)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{120:120,33:33,35:35,7:7,72:72}],213:[function(t,n,r){var e=t(33),i=t(75).f,o=t(7);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{33:33,7:7,75:75}],214:[function(t,n,r){"use strict";var e=t(33),i=t(7),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(54)(o,"Object",function(){var t,n=this,r=n._k;do{if(n._i>=r.length)return{value:void 0,done:!0}}while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},{33:33,54:54,7:7}],215:[function(t,n,r){var e=t(75),i=t(33),o=t(7);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},{33:33,7:7,75:75}],216:[function(t,n,r){var e=t(33),i=t(79),o=t(7);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},{33:33,7:7,79:79}],217:[function(t,n,r){function get(t,n){var r,u,f=arguments.length<3?t:arguments[2];return a(t)===f?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(f):void 0:c(u=i(t))?get(u,n,f):void 0}var e=t(75),i=t(79),o=t(41),u=t(33),c=t(51),a=t(7);u(u.S,"Reflect",{get:get})},{33:33,41:41,51:51,7:7,75:75,79:79}],218:[function(t,n,r){var e=t(33);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},{33:33}],219:[function(t,n,r){var e=t(33),i=t(7),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},{33:33,7:7}],220:[function(t,n,r){var e=t(33);e(e.S,"Reflect",{ownKeys:t(85)})},{33:33,85:85}],221:[function(t,n,r){var e=t(33),i=t(7),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{33:33,7:7}],222:[function(t,n,r){var e=t(33),i=t(99);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{33:33,99:99}],223:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],v=i.f(f(t),n);if(!v){if(s(l=o(t)))return set(l,n,r,h);v=a(0)}return u(v,"value")?!(!1===v.writable||!s(h))&&(c=i.f(h,n)||a(0),c.value=r,e.f(h,n,c),!0):void 0!==v.set&&(v.set.call(h,r),!0)}var e=t(72),i=t(75),o=t(79),u=t(41),c=t(33),a=t(92),f=t(7),s=t(51);c(c.S,"Reflect",{set:set})},{33:33,41:41,51:51,7:7,72:72,75:75,79:79,92:92}],224:[function(t,n,r){var e=t(40),i=t(45),o=t(72).f,u=t(77).f,c=t(52),a=t(37),f=e.RegExp,s=f,l=f.prototype,h=/a/g,v=/a/g,p=new f(h)!==h;if(t(29)&&(!p||t(35)(function(){return v[t(128)("match")]=!1,f(h)!=h||f(v)==v||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?a.call(t):n),r?this:l,f)};for(var d=u(s),y=0;d.length>y;)!function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}(d[y++]);l.constructor=f,f.prototype=l,t(94)(e,"RegExp",f)}t(100)("RegExp")},{100:100,128:128,29:29,35:35,37:37,40:40,45:45,52:52,72:72,77:77,94:94}],225:[function(t,n,r){t(29)&&"g"!=/./g.flags&&t(72).f(RegExp.prototype,"flags",{configurable:!0,get:t(37)})},{29:29,37:37,72:72}],226:[function(t,n,r){t(36)("match",1,function(t,n,r){return[function match(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{36:36}],227:[function(t,n,r){t(36)("replace",2,function(t,n,r){return[function replace(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},{36:36}],228:[function(t,n,r){t(36)("search",1,function(t,n,r){return[function search(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{36:36}],229:[function(t,n,r){t(36)("split",2,function(n,r,e){"use strict";var i=t(52),o=e,u=[].push,c="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[c]||2!="ab".split(/(?:ab)*/)[c]||4!=".".split(/(.?)(.?)/)[c]||".".split(/()()/)[c]>1||"".split(/.?/)[c]){var a=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,f,s,l,h,v=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,y=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,p+"g");for(a||(e=new RegExp("^"+g.source+"$(?!\\s)",p));(f=g.exec(r))&&!((s=f.index+f[0][c])>d&&(v.push(r.slice(d,f.index)),!a&&f[c]>1&&f[0].replace(e,function(){for(h=1;h<arguments[c]-2;h++)void 0===arguments[h]&&(f[h]=void 0)}),f[c]>1&&f.index<r[c]&&u.apply(v,f.slice(1)),l=f[0][c],d=s,v[c]>=y));)g.lastIndex===f.index&&g.lastIndex++;return d===r[c]?!l&&g.test("")||v.push(""):v.push(r.slice(d)),v[c]>y?v.slice(0,y):v}}else"0".split(void 0,0)[c]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function split(t,i){var o=n(this),u=void 0==t?void 0:t[r];return void 0!==u?u.call(t,o,i):e.call(String(o),t,i)},e]})},{36:36,52:52}],230:[function(t,n,r){"use strict";t(225);var e=t(7),i=t(37),o=t(29),u=/./.toString,c=function(n){t(94)(RegExp.prototype,"toString",n,!0)};t(35)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function toString(){return u.call(this)})},{225:225,29:29,35:35,37:37,7:7,94:94}],231:[function(t,n,r){"use strict";var e=t(19),i=t(125);n.exports=t(22)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},{125:125,19:19,22:22}],232:[function(t,n,r){"use strict";t(108)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},{108:108}],233:[function(t,n,r){"use strict";t(108)("big",function(t){return function big(){return t(this,"big","","")}})},{108:108}],234:[function(t,n,r){"use strict";t(108)("blink",function(t){return function blink(){return t(this,"blink","","")}})},{108:108}],235:[function(t,n,r){"use strict";t(108)("bold",function(t){return function bold(){return t(this,"b","","")}})},{108:108}],236:[function(t,n,r){"use strict";var e=t(33),i=t(106)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},{106:106,33:33}],237:[function(t,n,r){"use strict";var e=t(33),i=t(118),o=t(107),u="".endsWith;e(e.P+e.F*t(34)("endsWith"),"String",{endsWith:function endsWith(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},{107:107,118:118,33:33,34:34}],238:[function(t,n,r){"use strict";t(108)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},{108:108}],239:[function(t,n,r){"use strict";t(108)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},{108:108}],240:[function(t,n,r){"use strict";t(108)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},{108:108}],241:[function(t,n,r){var e=t(33),i=t(114),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},{114:114,33:33}],242:[function(t,n,r){"use strict";var e=t(33),i=t(107);e(e.P+e.F*t(34)("includes"),"String",{includes:function includes(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{107:107,33:33,34:34}],243:[function(t,n,r){"use strict";t(108)("italics",function(t){return function italics(){return t(this,"i","","")}})},{108:108}],244:[function(t,n,r){"use strict";var e=t(106)(!0);t(55)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{106:106,55:55}],245:[function(t,n,r){"use strict";t(108)("link",function(t){return function link(n){return t(this,"a","href",n)}})},{108:108}],246:[function(t,n,r){var e=t(33),i=t(117),o=t(118);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{117:117,118:118,33:33}],247:[function(t,n,r){var e=t(33);e(e.P,"String",{repeat:t(110)})},{110:110,33:33}],248:[function(t,n,r){"use strict";t(108)("small",function(t){return function small(){return t(this,"small","","")}})},{108:108}],249:[function(t,n,r){"use strict";var e=t(33),i=t(118),o=t(107),u="".startsWith;e(e.P+e.F*t(34)("startsWith"),"String",{startsWith:function startsWith(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},{107:107,118:118,33:33,34:34}],250:[function(t,n,r){"use strict";t(108)("strike",function(t){return function strike(){return t(this,"strike","","")}})},{108:108}],251:[function(t,n,r){"use strict";t(108)("sub",function(t){return function sub(){return t(this,"sub","","")}})},{108:108}],252:[function(t,n,r){"use strict";t(108)("sup",function(t){return function sup(){return t(this,"sup","","")}})},{108:108}],253:[function(t,n,r){"use strict";t(111)("trim",function(t){return function trim(){return t(this,3)}})},{111:111}],254:[function(t,n,r){"use strict";var e=t(40),i=t(41),o=t(29),u=t(33),c=t(94),a=t(66).KEY,f=t(35),s=t(103),l=t(101),h=t(124),v=t(128),p=t(127),d=t(126),y=t(59),g=t(32),m=t(49),b=t(7),x=t(117),S=t(120),w=t(92),_=t(71),E=t(76),O=t(75),P=t(72),M=t(81),F=O.f,I=P.f,A=E.f,k=e.Symbol,N=e.JSON,j=N&&N.stringify,T=v("_hidden"),R=v("toPrimitive"),L={}.propertyIsEnumerable,G=s("symbol-registry"),D=s("symbols"),C=s("op-symbols"),W=Object.prototype,U="function"==typeof k,B=e.QObject,V=!B||!B.prototype||!B.prototype.findChild,z=o&&f(function(){return 7!=_(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=F(W,n);e&&delete W[n],I(t,n,r),e&&t!==W&&I(W,n,e)}:I,q=function(t){var n=D[t]=_(k.prototype);return n._k=t,n},K=U&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},Y=function defineProperty(t,n,r){return t===W&&Y(C,n,r),b(t),n=S(n,!0),b(r),i(D,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:w(0,!1)})):(i(t,T)||I(t,T,w(1,{})),t[T][n]=!0),z(t,n,r)):I(t,n,r)},J=function defineProperties(t,n){b(t);for(var r,e=g(n=x(n)),i=0,o=e.length;o>i;)Y(t,r=e[i++],n[r]);return t},H=function create(t,n){return void 0===n?_(t):J(_(t),n)},X=function propertyIsEnumerable(t){var n=L.call(this,t=S(t,!0));return!(this===W&&i(D,t)&&!i(C,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,T)&&this[T][t])||n)},$=function getOwnPropertyDescriptor(t,n){if(t=x(t),n=S(n,!0),t!==W||!i(D,n)||i(C,n)){var r=F(t,n);return!r||!i(D,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var n,r=A(x(t)),e=[],o=0;r.length>o;)i(D,n=r[o++])||n==T||n==a||e.push(n);return e},Q=function getOwnPropertySymbols(t){for(var n,r=t===W,e=A(r?C:x(t)),o=[],u=0;e.length>u;)!i(D,n=e[u++])||r&&!i(W,n)||o.push(D[n]);return o};U||(k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(C,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),z(this,t,w(1,r))};return o&&V&&z(W,t,{configurable:!0,set:n}),q(t)},c(k.prototype,"toString",function toString(){return this._k}),O.f=$,P.f=Y,t(77).f=E.f=Z,t(82).f=X,t(78).f=Q,o&&!t(60)&&c(W,"propertyIsEnumerable",X,!0),p.f=function(t){return q(v(t))}),u(u.G+u.W+u.F*!U,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)v(tt[nt++]);for(var rt=M(v.store),et=0;rt.length>et;)d(rt[et++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(G,t+="")?G[t]:G[t]=k(t)},keyFor:function keyFor(t){if(K(t))return y(G,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!U,"Object",{create:H,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),N&&u(u.S+u.F*(!U||f(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){if(void 0!==t&&!K(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return n=e[1],"function"==typeof n&&(r=n),!r&&m(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!K(n))return n}),e[1]=n,j.apply(N,e)}}}),k.prototype[R]||t(42)(k.prototype,R,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{101:101,103:103,117:117,120:120,124:124,126:126,127:127,128:128,29:29,32:32,33:33,35:35,40:40,41:41,42:42,49:49,59:59,60:60,66:66,7:7,71:71,72:72,75:75,76:76,77:77,78:78,81:81,82:82,92:92,94:94}],255:[function(t,n,r){"use strict";var e=t(33),i=t(123),o=t(122),u=t(7),c=t(114),a=t(118),f=t(51),s=t(40).ArrayBuffer,l=t(104),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW;e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function isView(t){return p&&p(t)||f(t)&&y in t}}),e(e.P+e.U+e.F*t(35)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function slice(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),f=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,f.getUint8(e++));return o}}),t(100)("ArrayBuffer")},{100:100,104:104,114:114,118:118,122:122,123:123,33:33,35:35,40:40,51:51,7:7}],256:[function(t,n,r){var e=t(33);e(e.G+e.W+e.F*!t(123).ABV,{DataView:t(122).DataView})},{122:122,123:123,33:33}],257:[function(t,n,r){t(121)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],258:[function(t,n,r){t(121)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},{121:121}],259:[function(t,n,r){t(121)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},{121:121}],260:[function(t,n,r){t(121)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],261:[function(t,n,r){t(121)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},{121:121}],262:[function(t,n,r){t(121)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},{121:121}],263:[function(t,n,r){t(121)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],264:[function(t,n,r){t(121)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},{121:121}],265:[function(t,n,r){t(121)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},{121:121}],266:[function(t,n,r){"use strict";var e,i=t(12)(0),o=t(94),u=t(66),c=t(70),a=t(21),f=t(51),s=t(35),l=t(125),h=u.getWeak,v=Object.isExtensible,p=a.ufstore,d={},y=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function get(t){if(f(t)){var n=h(t);return!0===n?p(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function set(t,n){return a.def(l(this,"WeakMap"),t,n)}},m=n.exports=t(22)("WeakMap",y,g,a,!0,!0);s(function(){return 7!=(new m).set((Object.freeze||Object)(d),7).get(d)})&&(e=a.getConstructor(y,"WeakMap"),c(e.prototype,g),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=m.prototype,r=n[t];o(n,t,function(n,i){if(f(n)&&!v(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{12:12,125:125,21:21,22:22,35:35,51:51,66:66,70:70,94:94}],267:[function(t,n,r){"use strict";var e=t(21),i=t(125);t(22)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},{125:125,21:21,22:22}],268:[function(t,n,r){"use strict";var e=t(33),i=t(38),o=t(119),u=t(118),c=t(3),a=t(15);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),t(5)("flatMap")},{118:118,119:119,15:15,3:3,33:33,38:38,5:5}],269:[function(t,n,r){"use strict";var e=t(33),i=t(38),o=t(119),u=t(118),c=t(116),a=t(15);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),t(5)("flatten")},{116:116,118:118,119:119,15:15,33:33,38:38,5:5}],270:[function(t,n,r){"use strict";var e=t(33),i=t(11)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("includes")},{11:11,33:33,5:5}],271:[function(t,n,r){var e=t(33),i=t(68)(),o=t(40).process,u="process"==t(18)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},{18:18,33:33,40:40,68:68}],272:[function(t,n,r){var e=t(33),i=t(18);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},{18:18,33:33}],273:[function(t,n,r){var e=t(33);e(e.G,{global:t(40)})},{33:33,40:40}],274:[function(t,n,r){t(97)("Map")},{97:97}],275:[function(t,n,r){t(98)("Map")},{98:98}],276:[function(t,n,r){var e=t(33);e(e.P+e.R,"Map",{toJSON:t(20)("Map")})},{20:20,33:33}],277:[function(t,n,r){var e=t(33);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},{33:33}],278:[function(t,n,r){var e=t(33);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},{33:33}],279:[function(t,n,r){var e=t(33),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},{33:33}],280:[function(t,n,r){var e=t(33),i=t(64),o=t(62);e(e.S,"Math",{fscale:function fscale(t,n,r,e,u){return o(i(t,n,r,e,u))}})},{33:33,62:62,64:64}],281:[function(t,n,r){var e=t(33);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},{33:33}],282:[function(t,n,r){var e=t(33);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},{33:33}],283:[function(t,n,r){var e=t(33);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},{33:33}],284:[function(t,n,r){var e=t(33);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},{33:33}],285:[function(t,n,r){var e=t(33),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},{33:33}],286:[function(t,n,r){var e=t(33);e(e.S,"Math",{scale:t(64)})},{33:33,64:64}],287:[function(t,n,r){var e=t(33);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},{33:33}],288:[function(t,n,r){var e=t(33);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},{33:33}],289:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(3),u=t(72);t(29)&&e(e.P+t(74),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},{119:119,29:29,3:3,33:33,72:72,74:74}],290:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(3),u=t(72);t(29)&&e(e.P+t(74),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},{119:119,29:29,3:3,33:33,72:72,74:74}],291:[function(t,n,r){var e=t(33),i=t(84)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},{33:33,84:84}],292:[function(t,n,r){var e=t(33),i=t(85),o=t(117),u=t(75),c=t(24);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=o(t),a=u.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=a(e,n=f[l++]))&&c(s,n,r);return s}})},{117:117,24:24,33:33,75:75,85:85}],293:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120),u=t(79),c=t(75).f;t(29)&&e(e.P+t(74),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},{119:119,120:120,29:29,33:33,74:74,75:75,79:79}],294:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120),u=t(79),c=t(75).f;t(29)&&e(e.P+t(74),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},{119:119,120:120,29:29,33:33,74:74,75:75,79:79}],295:[function(t,n,r){var e=t(33),i=t(84)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},{33:33,84:84}],296:[function(t,n,r){"use strict";var e=t(33),i=t(40),o=t(23),u=t(68)(),c=t(128)("observable"),a=t(3),f=t(7),s=t(6),l=t(93),h=t(42),v=t(39),p=v.RETURN,d=function(t){return null==t?void 0:a(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},m=function(t){g(t)||(t._o=void 0,y(t))},b=function(t,n){f(t),this._c=void 0,this._o=t,t=new x(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};b.prototype=l({},{unsubscribe:function unsubscribe(){m(this)}});var x=function(t){this._s=t};x.prototype=l({},{next:function next(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{m(n)}finally{throw t}}}},error:function error(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function complete(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var S=function Observable(t){s(this,S,"Observable","_f")._f=a(t)};l(S.prototype,{subscribe:function subscribe(t){return new b(t,this._f)},forEach:function forEach(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(S,{from:function from(t){var n="function"==typeof this?this:S,r=d(f(t)[c]);if(r){var e=f(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(S.prototype,c,function(){return this}),e(e.G,{Observable:S}),t(100)("Observable")},{100:100,128:128,23:23,3:3,33:33,39:39,40:40,42:42,6:6,68:68,7:7,93:93}],297:[function(t,n,r){"use strict";var e=t(33),i=t(23),o=t(40),u=t(104),c=t(91);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},{104:104,23:23,33:33,40:40,91:91}],298:[function(t,n,r){"use strict";var e=t(33),i=t(69),o=t(90);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},{33:33,69:69,90:90}],299:[function(t,n,r){var e=t(67),i=t(7),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},{67:67,7:7}],300:[function(t,n,r){var e=t(67),i=t(7),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},{67:67,7:7}],301:[function(t,n,r){var e=t(231),i=t(10),o=t(67),u=t(7),c=t(79),a=o.keys,f=o.key,s=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function getMetadataKeys(t){return s(u(t),arguments.length<2?void 0:f(arguments[1]))}})},{10:10,231:231,67:67,7:7,79:79}],302:[function(t,n,r){var e=t(67),i=t(7),o=t(79),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):void 0};e.exp({getMetadata:function getMetadata(t,n){return f(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},{67:67,7:7,79:79}],303:[function(t,n,r){var e=t(67),i=t(7),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},{67:67,7:7}],304:[function(t,n,r){var e=t(67),i=t(7),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{67:67,7:7}],305:[function(t,n,r){var e=t(67),i=t(7),o=t(79),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},{67:67,7:7,79:79}],306:[function(t,n,r){var e=t(67),i=t(7),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{67:67,7:7}],307:[function(t,n,r){var e=t(67),i=t(7),o=t(3),u=e.key,c=e.set;e.exp({metadata:function metadata(t,n){return function decorator(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},{3:3,67:67,7:7}],308:[function(t,n,r){t(97)("Set")},{97:97}],309:[function(t,n,r){t(98)("Set")},{98:98}],310:[function(t,n,r){var e=t(33);e(e.P+e.R,"Set",{toJSON:t(20)("Set")})},{20:20,33:33}],311:[function(t,n,r){"use strict";var e=t(33),i=t(106)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},{106:106,33:33}],312:[function(t,n,r){"use strict";var e=t(33),i=t(28),o=t(118),u=t(52),c=t(37),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};t(54)(f,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},{118:118,28:28,33:33,37:37,52:52,54:54}],313:[function(t,n,r){"use strict";var e=t(33),i=t(109);e(e.P,"String",{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{109:109,33:33}],314:[function(t,n,r){"use strict";var e=t(33),i=t(109);e(e.P,"String",{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{109:109,33:33}],315:[function(t,n,r){"use strict";t(111)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},{111:111}],316:[function(t,n,r){"use strict";t(111)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},{111:111}],317:[function(t,n,r){t(126)("asyncIterator")},{126:126}],318:[function(t,n,r){t(126)("observable")},{126:126}],319:[function(t,n,r){var e=t(33);e(e.S,"System",{global:t(40)})},{33:33,40:40}],320:[function(t,n,r){t(97)("WeakMap")},{97:97}],321:[function(t,n,r){t(98)("WeakMap")},{98:98}],322:[function(t,n,r){t(97)("WeakSet")},{97:97}],323:[function(t,n,r){t(98)("WeakSet")},{98:98}],324:[function(t,n,r){for(var e=t(141),i=t(81),o=t(94),u=t(40),c=t(42),a=t(58),f=t(128),s=f("iterator"),l=f("toStringTag"),h=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),d=0;d<p.length;d++){var y,g=p[d],m=v[g],b=u[g],x=b&&b.prototype;if(x&&(x[s]||c(x,s,h),x[l]||c(x,l,g),a[g]=h,m))for(y in e)x[y]||o(x,y,e[y],!0)}},{128:128,141:141,40:40,42:42,58:58,81:81,94:94}],325:[function(t,n,r){var e=t(33),i=t(113);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{113:113,33:33}],326:[function(t,n,r){var e=t(40),i=t(33),o=t(46),u=t(88),c=e.navigator,a=!!c&&/MSIE .\./.test(c.userAgent),f=function(t){return a?function(n,r){return t(o(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),r)}:t};i(i.G+i.B+i.F*a,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})},{33:33,40:40,46:46,88:88}],327:[function(t,n,r){t(254),t(191),t(193),t(192),t(195),t(197),t(202),t(196),t(194),t(204),t(203),t(199),t(200),t(198),t(190),t(201),t(205),t(206),t(157),t(159),t(158),t(208),t(207),t(178),t(188),t(189),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(161),t(162),t(163),t(164),t(165),t(166),t(167),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(177),t(241),t(246),t(253),t(244),t(236),t(237),t(242),t(247),t(249),t(232),t(233),t(234),t(235),t(238),t(239),t(240),t(243),t(245),t(248),t(250),t(251),t(252),t(152),t(154),t(153),t(156),t(155),t(140),t(138),t(145),t(142),t(148),t(150),t(137),t(144),t(134),t(149),t(132),t(147),t(146),t(139),t(143),t(131),t(133),t(136),t(135),t(151),t(141),t(224),t(230),t(225),t(226),t(227),t(228),t(229),t(209),t(160),t(231),t(266),t(267),t(255),t(256),t(261),t(264),t(265),t(259),t(262),t(260),t(263),t(257),t(258),t(210),t(211),t(212),t(213),t(214),t(217),t(215),t(216),t(218),t(219),t(220),t(221),t(223),t(222),t(270),t(268),t(269),t(311),t(314),t(313),t(315),t(316),t(312),t(317),t(318),t(292),t(295),t(291),t(289),t(290),t(293),t(294),t(276),t(310),t(275),t(309),t(321),t(323),t(274),t(308),t(320),t(322),t(273),t(319),t(272),t(277),t(278),t(279),t(280),t(281),t(283),t(282),t(284),t(285),t(286),t(288),t(287),t(297),t(298),t(299),t(300),t(302),t(301),t(304),t(303),t(305),t(306),t(307),t(271),t(296),t(326),t(325),t(324),n.exports=t(23)},{131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,
186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,23:23,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,268:268,269:269,270:270,271:271,272:272,273:273,274:274,275:275,276:276,277:277,278:278,279:279,280:280,281:281,282:282,283:283,284:284,285:285,286:286,287:287,288:288,289:289,290:290,291:291,292:292,293:293,294:294,295:295,296:296,297:297,298:298,299:299,300:300,301:301,302:302,303:303,304:304,305:305,306:306,307:307,308:308,309:309,310:310,311:311,312:312,313:313,314:314,315:315,316:316,317:317,318:318,319:319,320:320,321:321,322:322,323:323,324:324,325:325,326:326}],328:[function(t,n,r){(function(t){!function(t){"use strict";function wrap(t,n,r,e){var i=n&&n.prototype instanceof Generator?n:Generator,o=Object.create(i.prototype),u=new Context(e||[]);return o._invoke=makeInvokeMethod(t,r,u),o}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AsyncIterator(n){function invoke(t,r,e,o){var u=tryCatch(n[t],n,r);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&i.call(a,"__await")?Promise.resolve(a.__await).then(function(t){invoke("next",t,e,o)},function(t){invoke("throw",t,e,o)}):Promise.resolve(a).then(function(t){c.value=t,e(c)},o)}o(u.arg)}function enqueue(t,n){function callInvokeWithMethodAndArg(){return new Promise(function(r,e){invoke(t,n,r,e)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof t.process&&t.process.domain&&(invoke=t.process.domain.bind(invoke));var r;this._invoke=enqueue}function makeInvokeMethod(t,n,r){var e=l;return function invoke(i,o){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw o;return doneResult()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=maybeInvokeDelegate(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=v;var a=tryCatch(t,n,r);if("normal"===a.type){if(e=r.done?p:h,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=p,r.method="throw",r.arg=a.arg)}}}function maybeInvokeDelegate(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,maybeInvokeDelegate(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=tryCatch(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function next(){for(;++e<t.length;)if(i.call(t,e))return next.value=t[e],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",f="object"==typeof n,s=t.regeneratorRuntime;if(s)return void(f&&(n.exports=s));s=t.regeneratorRuntime=f?n.exports:{},s.wrap=wrap;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},y={};y[u]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(values([])));m&&m!==e&&i.call(m,u)&&(y=m);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(y);GeneratorFunction.prototype=b.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[a]=GeneratorFunction.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[c]=function(){return this},s.AsyncIterator=AsyncIterator,s.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return s.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(b),b[a]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},s.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(e,i){return u.type="throw",u.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}if(this.done)throw t;for(var n=this,e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],u=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),a=i.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:values(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);


if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHWList = void 0;
var page_1 = __webpack_require__(7);
var detailHead_1 = __webpack_require__(43);
var detailList_1 = __webpack_require__(72);
var net_1 = __webpack_require__(5);
var header_1 = __webpack_require__(12);
var bridge_1 = __webpack_require__(2);
var router_1 = __webpack_require__(10);
__webpack_require__(99);
var hbs = __webpack_require__(100);
var itemHbs = __webpack_require__(101);
var PageHWList = /** @class */ (function (_super) {
    __extends(PageHWList, _super);
    function PageHWList() {
        var _this = _super.call(this) || this;
        _this.tab = 0;
        return _this;
    }
    PageHWList.prototype.enter = function (parent) {
        // msg(window.location.href);
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_list";
        this.root.className = "page_list";
        // 生成html模板
        var htmlStr = hbs({});
        this.root.innerHTML = htmlStr;
        _super.prototype.enter.call(this, parent);
        this.header = new header_1.Header(document.querySelector("header"), 3);
        this.header.enter({});
        this.getTopicDetailsRead().then(function (res) {
            _this.detailInfo = res.re;
            (new detailHead_1.detailHead(document.body.querySelector("#detail_head"), res)).enter();
            _this.switchTab(1);
            _this.header.setTitle("#" + _this.detailInfo.name + "#");
            _this.header.setShare("\u8BDD\u9898\uFF1A#" + _this.detailInfo.name + "#", _this.detailInfo.lead);
        })
            .catch(function (err) {
            router_1.router.replace("/error");
        });
        // if(!isHybrid()){
        // }else{
        // (new Header(document.querySelector("header") as HTMLDivElement, 3)).hide();
        // (document.querySelector("#body") as HTMLDivElement).addEventListener("scroll", function(event:any){
        //     emH5PageScroll(0,event.target.scrollTop);
        // });
        // }
        this.bind();
    };
    PageHWList.prototype.bind = function () {
        // this.slide();
        var _this = this;
        // tab吸顶
        document.querySelector("#body").addEventListener('scroll', function (event) {
            var detail_head_height = document.body.querySelector("#detail_head").clientHeight;
            var header_height = document.body.querySelector(".header_wrap").clientHeight;
            if (detail_head_height - header_height <= event.target.scrollTop) {
                // console.log("==========吸顶=========");
                document.body.querySelector("#tab").className = "fixedTop";
                if (bridge_1.isWeixin()) {
                    document.body.querySelector("#tab.fixedTop").style.top = "0rem";
                }
                else {
                    document.body.querySelector("#tab.fixedTop").style.top = (window.statusBarHeight + window.titleBarHeight) + "px";
                }
            }
            else {
                // console.log("==========取消吸顶=========");
                document.body.querySelector("#tab").className = "";
            }
        });
        this.root.querySelectorAll("#tab li").forEach(function (item, index) {
            item.onclick = function () {
                _this.tab = index;
                _this.switchTab(index);
            };
        });
        document.querySelector("#reply_btn").onclick = function () {
            var stockcode = "", stockname = "";
            if (_this.params.stockcode) { // url传参
                stockcode = _this.params.stockcode;
                stockname = _this.params.stockname;
            }
            else { // 老话题热点聚焦从接口拿
                if (_this.detailInfo.stock_fix_list) {
                    for (var i = 0; i < _this.detailInfo.stock_fix_list.length; i++) {
                        var item = _this.detailInfo.stock_fix_list[i];
                        if (item.code == _this.detailInfo.barCode[0]) {
                            stockcode = item.third_app_code;
                            stockname = item.name;
                            break;
                        }
                    }
                }
            }
            if (bridge_1.isHybrid()) { // 内嵌环境
                bridge_1.emH5PublishTopic(stockcode, _this.params.id, _this.detailInfo.name, stockname, function (res) {
                    // window.location.reload();
                    try {
                        if (typeof res == "string") { // ios返回string，安卓返回json object = =||| 统一为object
                            res = JSON.parse(res);
                        }
                        if (res.code == 0) {
                            _this.switchTab(0);
                            setTimeout(function () {
                                // alert(JSON.stringify(JSON.parse(res).data.data.main_post));
                                var main_post = res.data.data.main_post;
                                document.querySelector("#new_list").insertAdjacentHTML("afterbegin", itemHbs({ re: main_post }));
                            }, 300);
                        }
                    }
                    catch (error) {
                    }
                });
            }
            else {
                // window.location.href = `https://appcert.eastmoney.com/h52n?url=${encodeURIComponent(window.location.href)}`;
                window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href) + "&tran1=trans&tran2=1";
            }
        };
    };
    PageHWList.prototype.slide = function () {
        var _this = this;
        var list = document.querySelector("#list");
        var startX = 0, startY = 0;
        var endX = 0, endY = 0;
        list.ontouchstart = function (event) {
            event.preventDefault();
            startX = event.touches[0].pageX,
                startY = event.touches[0].pageY;
        };
        list.ontouchmove = function (event) {
            event.preventDefault();
            endX = event.touches[0].pageX,
                endY = event.touches[0].pageY;
            if (startX - endX > 50) {
                _this.tab += 1;
                if (_this.tab == 3) {
                    _this.tab = 2;
                }
                else {
                    _this.switchTab(_this.tab);
                }
            }
            if (startX - endX < -50) {
                _this.tab -= 1;
                if (_this.tab == -1) {
                    _this.tab = 0;
                }
                else {
                    _this.switchTab(_this.tab);
                }
            }
        };
    };
    PageHWList.prototype.switchTab = function (tab) {
        // tab
        var tabList = this.root.querySelectorAll("#tab li");
        tabList.forEach(function (item, index) {
            if (index == tab) {
                item.className = "active";
            }
            else {
                item.className = "";
            }
        });
        document.querySelector("#body").onscroll = null;
        this.detailList = new detailList_1.DetailList(document.body.querySelector("#detail_list"), tab, this.detailInfo, this.params);
        this.detailList.enter();
    };
    // 基本信息
    PageHWList.prototype.getTopicDetailsRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/TopicDetailsRead", "htid=" + _this.params.id)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PageHWList;
}(page_1.Page));
exports.PageHWList = PageHWList;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.detailHead = void 0;
__webpack_require__(44);
var net_1 = __webpack_require__(5);
var bridge_1 = __webpack_require__(2);
var text_1 = __webpack_require__(15);
var user_1 = __webpack_require__(8);
var router_1 = __webpack_require__(10);
var hbs = __webpack_require__(68);
var stockListHbs = __webpack_require__(70);
var zhishuList = __webpack_require__(71);
var interval = null;
var detailHead = /** @class */ (function () {
    function detailHead(root, res) {
        this.root = root;
        this.collectflag = false;
        this.isHW = false;
        this.re = res.re;
        this.root.innerHTML = hbs({ re: res.re });
        this.isHW = text_1.getQueryString("from") == "huaweins" ? true : false;
    }
    detailHead.prototype.enter = function () {
        var _this = this;
        this.isCollect();
        this.getStockListHq();
        this.getZhushuHq();
        var btn = this.root.querySelector(".collect_btn");
        btn.onclick = function () {
            // 华为负一屏
            if (!bridge_1.isHybrid() && _this.isHW) {
                if (window.intelligent) {
                    window.intelligent.downloadApp();
                }
                return;
            }
            user_1.user.checkLogin(function () {
                if (!user_1.user.isLogin()) {
                    user_1.user.login();
                    return;
                }
                else {
                    _this.getTopicCollect().then(function (res) {
                        _this.collectflag = !_this.collectflag;
                        btn.className = "collect_btn " + (_this.collectflag ? "collect" : "uncollect");
                        btn.innerHTML = _this.collectflag ? "已收藏" : "收藏";
                    })
                        .catch(function (err) {
                        if (err.me == "已收藏") {
                            _this.collectflag = true;
                            btn.className = "collect_btn collect";
                            btn.innerHTML = "已收藏";
                        }
                    });
                }
            });
        };
        var desc = this.root.querySelector(".desc");
        desc.onclick = function () {
            router_1.router.navigate("/detail?id=" + _this.re.htid);
        };
    };
    detailHead.prototype.getZhushuHq = function () {
        var _this = this;
        if (!this.re.RelateIndex || this.re.RelateIndex.length == 0) {
            return;
        }
        this.root.querySelector(".related_zhishu").innerHTML = zhishuList({ re: this.re });
        var arr = [];
        this.re.RelateIndex.forEach(function (item, index) {
            arr.push(item.qmarket + "." + item.qcode);
        });
        net_1.getHq_core(arr.join(',')).then(function (res) {
            _this.root.querySelectorAll(".related_zhishu li").forEach(function (item) {
                if (res.data && !res.data.diff) { // 单个行情，字段与多个不同
                    if (res.data.f170 > 0) {
                        item.innerHTML += "<span class=\"zshq up\">" + res.data.f43 + "  " + res.data.f169 + "  " + res.data.f170 + "</span>";
                    }
                    else if (res.data.f170 == 0) {
                        item.innerHTML += "<span class=\"zshq\">" + res.data.f43 + "  " + res.data.f169 + "  " + res.data.f170 + "</span>";
                    }
                    else {
                        item.innerHTML += "<span class=\"zshq down\">" + res.data.f43 + "  " + res.data.f169 + "  " + res.data.f170 + "</span>";
                    }
                    _this.setClick(item);
                    return;
                }
                res.data.diff.forEach(function (ele) {
                    if (ele.f12 == item.dataset.qcode) {
                        if (ele.f3 > 0) {
                            item.innerHTML += "<span class=\"zshq up\">" + ele.f2 + "  " + ele.f4 + "  " + ele.f3 + "</span>";
                        }
                        else if (ele.f3 == 0) {
                            item.innerHTML += "<span class=\"zshq\">" + ele.f2 + "  " + ele.f4 + "  " + ele.f3 + "</span>";
                        }
                        else {
                            item.innerHTML += "<span class=\"zshq down\">" + ele.f2 + "  " + ele.f4 + "  " + ele.f3 + "</span>";
                        }
                    }
                });
                _this.setClick(item);
            });
            if (res.data.diff) {
                var related_zhishu = _this.root.querySelector(".related_zhishu"); // related_zhishu
                var related_zhishu_ul_1 = _this.root.querySelector(".related_zhishu ul"); // ul
                var firstNode = _this.root.querySelectorAll(".related_zhishu li")[0];
                var li_clone1 = document.createElement("li");
                li_clone1.innerHTML = firstNode.innerHTML;
                li_clone1.dataset.name = firstNode.dataset.name;
                li_clone1.dataset.code = firstNode.dataset.code;
                li_clone1.dataset.qcode = firstNode.dataset.qcode;
                li_clone1.dataset.qmarket = firstNode.dataset.qmarket;
                _this.root.querySelector(".related_zhishu ul").appendChild(li_clone1);
                _this.setClick(li_clone1);
                var li_clone2_1 = document.createElement("li");
                li_clone2_1.innerHTML = firstNode.innerHTML;
                li_clone2_1.dataset.name = firstNode.dataset.name;
                li_clone2_1.dataset.code = firstNode.dataset.code;
                li_clone2_1.dataset.qcode = firstNode.dataset.qcode;
                li_clone2_1.dataset.qmarket = firstNode.dataset.qmarket;
                _this.root.querySelector(".related_zhishu > div").appendChild(li_clone2_1);
                li_clone2_1.style.display = "none";
                _this.setClick(li_clone2_1);
                var last_li_1 = _this.root.querySelector(".related_zhishu li:last-child"); // 最后一个元素
                var top_1 = parseInt(_this.root.querySelectorAll(".related_zhishu ul")[0].style.top);
                var related_zhishu_bottom_1 = related_zhishu.getBoundingClientRect().bottom;
                interval = setInterval(function () {
                    if (Math.abs(last_li_1.getBoundingClientRect().bottom - related_zhishu_bottom_1) < 3) { // 滚动到底部时
                        li_clone2_1.style.display = "block"; // 打开遮罩
                        related_zhishu_ul_1.style.display = "none"; // 隐藏列表
                        top_1 = 0;
                        _this.root.querySelector(".related_zhishu ul").style.top = "0rem"; // 设置回滚
                        setTimeout(function () {
                            related_zhishu_ul_1.style.display = "block"; // 滚动完显示列表
                            li_clone2_1.style.display = "none"; // 关闭遮罩
                        }, 400);
                        return;
                    }
                    top_1 -= 0.35;
                    _this.root.querySelector(".related_zhishu ul").style.top = top_1 + "rem";
                }, 2000);
            }
        });
    };
    detailHead.prototype.setClick = function (item) {
        item.onclick = function () {
            var code = item.dataset.code;
            var name = item.dataset.name;
            var qcode = item.dataset.qcode;
            var qmarket = item.dataset.qmarket;
            switch (qmarket) {
                case "1":
                    code = "SH" + qcode;
                    break;
                case "0":
                    code = "SZ" + qcode;
                    break;
                case "105":
                    code = "NASDAQ|" + qcode;
                    break;
                case "106":
                    code = "NYSE|" + qcode;
                    break;
                case "107":
                    code = "AMEX|" + qcode;
                    break;
                case "100":
                    code = "QQZS|" + qcode;
                    break;
                case "116":
                    code = "HK|" + qcode;
                    break;
                case "124":
                    code = "HS|" + qcode;
                    break;
                default:
                    break;
            }
            if (bridge_1.isHybrid()) {
                bridge_1.emH5ToStock(code, name);
            }
            else {
                window.location.href = "//mguba.eastmoney.com/mguba/list/" + code;
            }
        };
    };
    detailHead.prototype.getStockListHq = function () {
        var _this = this;
        var stockstr = this.formatStockList();
        var re = {};
        if (stockstr && stockstr.length > 0) {
            net_1.getHq(stockstr.join(',')).then(function (res) {
                if (res.data) {
                    re = stockstr.length == 1 ? res.data : res.data.diff;
                    _this.root.querySelector(".related_stock_list").innerHTML = stockListHbs({ type: stockstr.length, re: re, stock_fix_list: _this.re.stock_fix_list });
                    if (_this.re.stock_fix_list && _this.re.stock_fix_list.length <= 4) {
                        _this.root.querySelector(".more").style.display = "none";
                        // (<HTMLDivElement>this.root.querySelector(".related_stock_list div")).style.width = "3.14rem";
                    }
                    else {
                        _this.root.querySelector(".more").onclick = function () {
                            var clickEvent = new Event('click');
                            document.body.querySelector("#tab li:last-child").dispatchEvent(clickEvent);
                        };
                    }
                    // 点击关联股
                    document.querySelectorAll("#detail_head .related_stock_list .item").forEach(function (item, index) {
                        item.onclick = function (event) {
                            var stockcode = event.currentTarget.dataset.stockcode;
                            var qmarket = event.currentTarget.dataset.qmarket;
                            var code = _this.getThirdAppCode(stockcode);
                            if (bridge_1.isHybrid()) { // app里
                                bridge_1.emH5ToStock(code, event.currentTarget.dataset.stockname);
                            }
                            else {
                                if (_this.isHW) {
                                    window.location.href = "https://wap.eastmoney.com/quote/stock/" + qmarket + "." + stockcode + ".html";
                                    return;
                                }
                                window.location.href = "//mguba.eastmoney.com/mguba/list/" + code;
                            }
                            event.preventDefault();
                            event.stopPropagation();
                        };
                    });
                }
                else {
                    _this.root.querySelector(".related_stock_list").style.display = "none";
                }
            });
        }
        else { // 没有行情
            var tab = document.body.querySelector("#tab");
            tab.children[2].style.display = "none";
            this.root.querySelector(".related_stock_list").style.display = "none";
        }
    };
    detailHead.prototype.getThirdAppCode = function (code) {
        var third_app_code = "";
        this.re.stock_fix_list && this.re.stock_fix_list.forEach(function (item) {
            if (code == item.qcode) {
                third_app_code = item.third_app_code;
            }
        });
        return third_app_code;
    };
    detailHead.prototype.formatStockList = function () {
        var arr = [];
        this.re.stock_fix_list && this.re.stock_fix_list.forEach(function (item) {
            if (item.code.substr(0, 2) == "us") { // 美股存third_app_code
                arr.push(item.third_app_code);
            }
            else { // 沪深港股存code
                arr.push(item.code);
            }
        });
        return arr;
    };
    detailHead.prototype.isCollect = function () {
        var _this = this;
        user_1.user.checkLogin(function () {
            if (!user_1.user.isLogin()) {
                return;
            }
            else {
                _this.getUserCollectRead().then(function (res) {
                    _this.collectflag = res.has_collect;
                    var btn = _this.root.querySelector(".collect_btn");
                    btn.className = "collect_btn " + (res.has_collect ? "collect" : "uncollect");
                    btn.innerHTML = res.has_collect ? "已收藏" : "收藏";
                });
            }
        });
    };
    detailHead.prototype.getUserCollectRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/UserCollectRead", "htid=" + _this.re.htid)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    detailHead.prototype.getTopicCollect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopicopt/api/Topic/TopicCollect", "htid=" + _this.re.htid + "&opt=" + (_this.collectflag ? 0 : 1))
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return detailHead;
}());
exports.detailHead = detailHead;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonpGet = void 0;
var CALLBACK_PRE = "qa_wap_jsonpCB";
function jsonpGet(url, params, callback, isEncode) {
    if (callback === void 0) { callback = 'callback'; }
    if (isEncode === void 0) { isEncode = true; }
    return new Promise(function (resolve, reject) {
        // get our complete url
        var completeUrl;
        var tag = (Date.parse((new Date()).toString()) + (Math.random() * 1000 >> 0)) + "";
        var callbackFuncName = CALLBACK_PRE + tag;
        if (params) {
            completeUrl = url + '?' + params;
            completeUrl += callback + "=" + callbackFuncName;
        }
        else {
            completeUrl = url + "&" + callback + "=" + callbackFuncName;
        }
        /**
         * jsonp接口返回放入页面自动回调函数
         * @param data
         */
        function passiveCallback(data) {
            window['jsonpData'] = data;
            delete window[callbackFuncName];
            // delete (window as any)[callbackFuncName]
        }
        window[callbackFuncName] = passiveCallback;
        // (window as unknown as IKV) [callbackFuncName] = passiveCallback
        function cleanScript(script) {
            // let script: HTMLElement = document.getElementById('for-jsonp')
            var parentNode = script.parentNode; // as Node
            // parentNode.removeChild(script)
        }
        // creste a script element
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = isEncode ? encodeURI(completeUrl) : completeUrl;
        script.id = callbackFuncName;
        script.onload = function (ev) {
            cleanScript(ev.target);
            resolve(window['jsonpData']);
            delete window['jsonpData'];
        };
        script.onerror = function (ev) {
            cleanScript(ev.target);
            var errorText = "Your jsonp request to " + ev.target.src + " is fail, please check your url or params again.";
            reject(errorText);
        };
        var body = document.body;
        body.appendChild(script);
    });
}
exports.jsonpGet = jsonpGet;
exports.default = jsonpGet;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

module.exports = {
  hex_md5:hex_md5
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Mask
 * (new Mask(...)).enter();
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mask = void 0;
__webpack_require__(48);
var hbs = __webpack_require__(49);
var Mask = /** @class */ (function () {
    function Mask() {
        if (!document.getElementById("mask"))
            document.body.insertAdjacentHTML("beforeend", hbs({}));
    }
    Mask.prototype.enter = function () {
    };
    Mask.prototype.show = function () {
        document.getElementById("mask").className = "show";
    };
    Mask.prototype.hide = function () {
        document.getElementById("mask").className = "hide";
    };
    return Mask;
}());
exports.Mask = Mask;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"mask\"></div>";
},"useData":true});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(28);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(61);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(14);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(9);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(62);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(64);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(9);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBd0QsVUFBVTs7cUJBRW5ELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVsQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNGLGVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUMxQjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(9);

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (global.Symbol && context[global.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[global.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osWUFBTSwyQkFBYyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3BEOztBQUVELFFBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWQsUUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDL0IsaUJBQVcsR0FDVCx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyRTs7QUFFRCxRQUFJLGtCQUFXLE9BQU8sQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQ0QsR0FBRyxHQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUNYLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN2QixDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQzVCO09BQ0YsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRCxhQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUM3RCxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7QUFDRCxlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLHVCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQztPQUNGLE1BQU07O0FBQ0wsY0FBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7Ozs7QUFJbEMsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0wsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHlCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDdEM7O09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFwcGVuZENvbnRleHRQYXRoLFxuICBibG9ja1BhcmFtcyxcbiAgY3JlYXRlRnJhbWUsXG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaSA9IDAsXG4gICAgICByZXQgPSAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID1cbiAgICAgICAgYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID1cbiAgICAgICAgcmV0ICtcbiAgICAgICAgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhcbiAgICAgICAgICAgIFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLFxuICAgICAgICAgICAgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFDSixtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUNqRSxDQUFDO0tBQ0g7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJ1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(9);

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBb0MsVUFBVTs7eUJBQ3hCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtBQUNELFFBQUksa0JBQVcsV0FBVyxDQUFDLEVBQUU7QUFDM0IsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7OztBQUtELFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFFBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBTSwyQkFBYyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3BELFFBQUUsRUFBRSxPQUFPLENBQUMsT0FBTztBQUNuQixhQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDbkIsVUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBpc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVEsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5RCxRQUFJLENBQUMsR0FBRyxFQUFFOztBQUVSLGFBQU8sR0FBRyxDQUFDO0tBQ1o7QUFDRCxXQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(9);

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMscUNBQXFDLENBQUMsQ0FBQztLQUM1RDtBQUNELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFDdkIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLGVBQVEsT0FBTyxDQUFDLEVBQUU7QUFDckIsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxXQUFXLEdBQUcseUJBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7T0FDSDs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ2hFLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kQ29udGV4dFBhdGgsXG4gIGJsb2NrUGFyYW1zLFxuICBjcmVhdGVGcmFtZSxcbiAgaXNFbXB0eSxcbiAgaXNGdW5jdGlvblxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLmlkc1swXVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(59);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG4iXX0=


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(9);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXVCLFVBQVU7O3FCQUVsQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICBsZXQgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgbGV0IHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = __webpack_require__(9);

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFBdUIsVUFBVTs7Ozs7Ozs7O0FBUTFCLFNBQVMscUJBQXFCLEdBQWE7b0NBQVQsT0FBTztBQUFQLFdBQU87OztBQUM5QyxTQUFPLGdDQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUssT0FBTyxFQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoLi4uc291cmNlcykge1xuICByZXR1cm4gZXh0ZW5kKE9iamVjdC5jcmVhdGUobnVsbCksIC4uLnNvdXJjZXMpO1xufVxuIl19


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(9);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(14);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(28);

var _helpers = __webpack_require__(29);

var _internalWrapHelper = __webpack_require__(63);

var _internalProtoAccess = __webpack_require__(31);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return container.lookupProperty(obj, name);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBTTVCLFFBQVE7O3VCQUNtQixXQUFXOztrQ0FDbEIsdUJBQXVCOzttQ0FJM0MseUJBQXlCOztBQUV6QixTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxBQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQztNQUM3RCxlQUFlLDBCQUFvQixDQUFDOztBQUV0QyxNQUNFLGdCQUFnQiwyQ0FBcUMsSUFDckQsZ0JBQWdCLDJCQUFxQixFQUNyQztBQUNBLFdBQU87R0FDUjs7QUFFRCxNQUFJLGdCQUFnQiwwQ0FBb0MsRUFBRTtBQUN4RCxRQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1FBQ3ZELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hELFVBQU0sMkJBQ0oseUZBQXlGLEdBQ3ZGLHFEQUFxRCxHQUNyRCxlQUFlLEdBQ2YsbURBQW1ELEdBQ25ELGdCQUFnQixHQUNoQixJQUFJLENBQ1AsQ0FBQztHQUNILE1BQU07O0FBRUwsVUFBTSwyQkFDSix3RkFBd0YsR0FDdEYsaURBQWlELEdBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FDZixJQUFJLENBQ1AsQ0FBQztHQUNIO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O0FBRzVDLE1BQU0sb0NBQW9DLEdBQ3hDLFlBQVksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTFELFdBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkQsUUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELFVBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO09BQ3ZCO0tBQ0Y7QUFDRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUV0RSxRQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDOUMsV0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLHdCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7S0FDNUMsQ0FBQyxDQUFDOztBQUVILFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDcEMsSUFBSSxFQUNKLE9BQU8sRUFDUCxPQUFPLEVBQ1AsZUFBZSxDQUNoQixDQUFDOztBQUVGLFFBQUksTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQzFDLE9BQU8sRUFDUCxZQUFZLENBQUMsZUFBZSxFQUM1QixHQUFHLENBQ0osQ0FBQztBQUNGLFlBQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDbkU7QUFDRCxRQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDbEIsVUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2xCLFlBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QyxjQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzVCLGtCQUFNO1dBQ1A7O0FBRUQsZUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0FBQ0QsY0FBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDM0I7QUFDRCxhQUFPLE1BQU0sQ0FBQztLQUNmLE1BQU07QUFDTCxZQUFNLDJCQUNKLGNBQWMsR0FDWixPQUFPLENBQUMsSUFBSSxHQUNaLDBEQUEwRCxDQUM3RCxDQUFDO0tBQ0g7R0FDRjs7O0FBR0QsTUFBSSxTQUFTLEdBQUc7QUFDZCxVQUFNLEVBQUUsZ0JBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDL0IsVUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQzFCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7QUFDMUQsYUFBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUM7T0FDSjtBQUNELGFBQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUM7QUFDRCxrQkFBYyxFQUFFLHdCQUFTLE1BQU0sRUFBRSxZQUFZLEVBQUU7QUFDN0MsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLFVBQUksTUFBTSxJQUFJLElBQUksRUFBRTtBQUNsQixlQUFPLE1BQU0sQ0FBQztPQUNmO0FBQ0QsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQzlELGVBQU8sTUFBTSxDQUFDO09BQ2Y7O0FBRUQsVUFBSSxxQ0FBZ0IsTUFBTSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsRUFBRTtBQUN2RSxlQUFPLE1BQU0sQ0FBQztPQUNmO0FBQ0QsYUFBTyxTQUFTLENBQUM7S0FDbEI7QUFDRCxVQUFNLEVBQUUsZ0JBQVMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUM3QixVQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUIsWUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BFLFlBQUksTUFBTSxJQUFJLElBQUksRUFBRTtBQUNsQixpQkFBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7T0FDRjtLQUNGO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDakMsYUFBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDeEU7O0FBRUQsb0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtBQUN4QyxpQkFBYSxFQUFFLG9CQUFvQjs7QUFFbkMsTUFBRSxFQUFFLFlBQVMsQ0FBQyxFQUFFO0FBQ2QsVUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFNBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN2QyxhQUFPLEdBQUcsQ0FBQztLQUNaOztBQUVELFlBQVEsRUFBRSxFQUFFO0FBQ1osV0FBTyxFQUFFLGlCQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNuRSxVQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUNuQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixVQUFJLElBQUksSUFBSSxNQUFNLElBQUksV0FBVyxJQUFJLG1CQUFtQixFQUFFO0FBQ3hELHNCQUFjLEdBQUcsV0FBVyxDQUMxQixJQUFJLEVBQ0osQ0FBQyxFQUNELEVBQUUsRUFDRixJQUFJLEVBQ0osbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxNQUFNLENBQ1AsQ0FBQztPQUNILE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELGlCQUFhLEVBQUUsdUJBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNyQyxVQUFJLEdBQUcsR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDOztBQUUxQixVQUFJLEtBQUssSUFBSSxNQUFNLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUN2QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsZUFBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QixRQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBQ2pCLGdCQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNoQyxRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixPQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sWUFBQTtRQUNSLFdBQVcsR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDN0QsUUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzFCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFNLEdBQ0osT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQ3hCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUN0QixNQUFNO0FBQ0wsY0FBTSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDcEI7S0FDRjs7QUFFRCxhQUFTLElBQUksQ0FBQyxPQUFPLGdCQUFnQjtBQUNuQyxhQUNFLEVBQUUsR0FDRixZQUFZLENBQUMsSUFBSSxDQUNmLFNBQVMsRUFDVCxPQUFPLEVBQ1AsU0FBUyxDQUFDLE9BQU8sRUFDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsSUFBSSxFQUNKLFdBQVcsRUFDWCxNQUFNLENBQ1AsQ0FDRDtLQUNIOztBQUVELFFBQUksR0FBRyxpQkFBaUIsQ0FDdEIsWUFBWSxDQUFDLElBQUksRUFDakIsSUFBSSxFQUNKLFNBQVMsRUFDVCxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFDcEIsSUFBSSxFQUNKLFdBQVcsQ0FDWixDQUFDO0FBQ0YsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQy9COztBQUVELEtBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVqQixLQUFHLENBQUMsTUFBTSxHQUFHLFVBQVMsT0FBTyxFQUFFO0FBQzdCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3BCLFVBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLHFDQUErQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRCxlQUFTLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQzs7QUFFbEMsVUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFOztBQUUzQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUMxQyxPQUFPLENBQUMsUUFBUSxFQUNoQixHQUFHLENBQUMsUUFBUSxDQUNiLENBQUM7T0FDSDtBQUNELFVBQUksWUFBWSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQ3pELGlCQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ2pDLEVBQUUsRUFDRixHQUFHLENBQUMsVUFBVSxFQUNkLE9BQU8sQ0FBQyxVQUFVLENBQ25CLENBQUM7T0FDSDs7QUFFRCxlQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixlQUFTLENBQUMsa0JBQWtCLEdBQUcsOENBQXlCLE9BQU8sQ0FBQyxDQUFDOztBQUVqRSxVQUFJLG1CQUFtQixHQUNyQixPQUFPLENBQUMseUJBQXlCLElBQ2pDLG9DQUFvQyxDQUFDO0FBQ3ZDLGlDQUFrQixTQUFTLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDbkUsaUNBQWtCLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3pFLE1BQU07QUFDTCxlQUFTLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0FBQzFELGVBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNwQyxlQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDdEMsZUFBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzFDLGVBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUNqQztHQUNGLENBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSwyQkFBYyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0QsUUFBSSxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLFlBQU0sMkJBQWMseUJBQXlCLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxXQUFPLFdBQVcsQ0FDaEIsU0FBUyxFQUNULENBQUMsRUFDRCxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxFQUNKLENBQUMsRUFDRCxXQUFXLEVBQ1gsTUFBTSxDQUNQLENBQUM7R0FDSCxDQUFDO0FBQ0YsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxTQUFTLFdBQVcsQ0FDekIsU0FBUyxFQUNULENBQUMsRUFDRCxFQUFFLEVBQ0YsSUFBSSxFQUNKLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsTUFBTSxFQUNOO0FBQ0EsV0FBUyxJQUFJLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDakMsUUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQ0UsTUFBTSxJQUNOLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQ3BCLEVBQUUsT0FBTyxLQUFLLFNBQVMsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQSxBQUFDLEVBQzFEO0FBQ0EsbUJBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxXQUFPLEVBQUUsQ0FDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxhQUFhLENBQ2QsQ0FBQztHQUNIOztBQUVELE1BQUksR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztBQUV6RSxNQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFPLElBQUksQ0FBQztDQUNiOzs7Ozs7QUFLTSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN4RCxNQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osUUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO0FBQ3JDLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07QUFDTCxhQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7R0FDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7QUFFekMsV0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDdkIsV0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7QUFDRCxTQUFPLE9BQU8sQ0FBQztDQUNoQjs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7QUFFdkQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsU0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztHQUN2RTs7QUFFRCxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTs7QUFDckMsYUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpDLFVBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsa0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQ3pFLE9BQU8sRUFFUDtZQURBLE9BQU8seURBQUcsRUFBRTs7OztBQUlaLGVBQU8sQ0FBQyxJQUFJLEdBQUcsa0JBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLGVBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsbUJBQW1CLENBQUM7QUFDcEQsZUFBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzdCLENBQUM7QUFDRixVQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7QUFDZixlQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3BFOztHQUNGOztBQUVELE1BQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxZQUFZLEVBQUU7QUFDekMsV0FBTyxHQUFHLFlBQVksQ0FBQztHQUN4Qjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDekIsVUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO0dBQzVFLE1BQU0sSUFBSSxPQUFPLFlBQVksUUFBUSxFQUFFO0FBQ3RDLFdBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztHQUNsQztDQUNGOztBQUVNLFNBQVMsSUFBSSxHQUFHO0FBQ3JCLFNBQU8sRUFBRSxDQUFDO0NBQ1g7O0FBRUQsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMvQixNQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQSxBQUFDLEVBQUU7QUFDOUIsUUFBSSxHQUFHLElBQUksR0FBRyxrQkFBWSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDckMsUUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7R0FDckI7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDekUsTUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFO0FBQ2hCLFFBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLFFBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUNqQixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUNuQixJQUFJLEVBQ0osV0FBVyxFQUNYLE1BQU0sQ0FDUCxDQUFDO0FBQ0YsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVELFNBQVMsK0JBQStCLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRTtBQUNqRSxRQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsRUFBSTtBQUMvQyxRQUFJLE1BQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsaUJBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDekUsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ25ELE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFDaEQsU0FBTywrQkFBVyxNQUFNLEVBQUUsVUFBQSxPQUFPLEVBQUk7QUFDbkMsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFkLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHtcbiAgQ09NUElMRVJfUkVWSVNJT04sXG4gIGNyZWF0ZUZyYW1lLFxuICBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04sXG4gIFJFVklTSU9OX0NIQU5HRVNcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IG1vdmVIZWxwZXJUb0hvb2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHdyYXBIZWxwZXIgfSBmcm9tICcuL2ludGVybmFsL3dyYXBIZWxwZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sLFxuICByZXN1bHRJc0FsbG93ZWRcbn0gZnJvbSAnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IChjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdKSB8fCAxLFxuICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChcbiAgICBjb21waWxlclJldmlzaW9uID49IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJlxuICAgIGNvbXBpbGVyUmV2aXNpb24gPD0gQ09NUElMRVJfUkVWSVNJT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIHJ1bnRpbWVWZXJzaW9ucyArXG4gICAgICAgICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlckluZm9bMV0gK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgY29uc3QgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID1cbiAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBwcm90b0FjY2Vzc0NvbnRyb2w6IHRoaXMucHJvdG9BY2Nlc3NDb250cm9sXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBwYXJ0aWFsLFxuICAgICAgY29udGV4dCxcbiAgICAgIGV4dGVuZGVkT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKFxuICAgICAgICBwYXJ0aWFsLFxuICAgICAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLFxuICAgICAgICBlbnZcbiAgICAgICk7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgICAnVGhlIHBhcnRpYWwgJyArXG4gICAgICAgICAgb3B0aW9ucy5uYW1lICtcbiAgICAgICAgICAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqLCB7XG4gICAgICAgICAgbG9jOiBsb2NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBmbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGRlY2xhcmVkQmxvY2tQYXJhbXMsXG4gICAgICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICAgICAgZGVwdGhzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9XG4gICAgICAgICAgY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXVxuICAgICAgICAgICAgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKVxuICAgICAgICAgICAgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0ZW1wbGF0ZVNwZWMubWFpbihcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnMoXG4gICAgICB0ZW1wbGF0ZVNwZWMubWFpbixcbiAgICAgIG1haW4sXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcHRpb25zLmRlcHRocyB8fCBbXSxcbiAgICAgIGRhdGEsXG4gICAgICBibG9ja1BhcmFtc1xuICAgICk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGxldCBtZXJnZWRIZWxwZXJzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuaGVscGVycywgb3B0aW9ucy5oZWxwZXJzKTtcbiAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gbWVyZ2VkSGVscGVycztcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZUlmTmVlZGVkKFxuICAgICAgICAgIG9wdGlvbnMucGFydGlhbHMsXG4gICAgICAgICAgZW52LnBhcnRpYWxzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBVdGlscy5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgZW52LmRlY29yYXRvcnMsXG4gICAgICAgICAgb3B0aW9ucy5kZWNvcmF0b3JzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgbGV0IGtlZXBIZWxwZXJJbkhlbHBlcnMgPVxuICAgICAgICBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHxcbiAgICAgICAgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oXG4gICAgICBjb250YWluZXIsXG4gICAgICBpLFxuICAgICAgdGVtcGxhdGVTcGVjW2ldLFxuICAgICAgZGF0YSxcbiAgICAgIDAsXG4gICAgICBibG9ja1BhcmFtcyxcbiAgICAgIGRlcHRoc1xuICAgICk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShcbiAgY29udGFpbmVyLFxuICBpLFxuICBmbixcbiAgZGF0YSxcbiAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgYmxvY2tQYXJhbXMsXG4gIGRlcHRoc1xuKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKFxuICAgICAgZGVwdGhzICYmXG4gICAgICBjb250ZXh0ICE9IGRlcHRoc1swXSAmJlxuICAgICAgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKVxuICAgICkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oXG4gICAgICBjb250YWluZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgY29udGFpbmVyLmhlbHBlcnMsXG4gICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgY3VycmVudERlcHRoc1xuICAgICk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBwYXJ0IG9mIHRoZSBvZmZpY2lhbCBBUEksIHRoZXJlZm9yZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKFxuICAgICAgY29udGV4dCxcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICkge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IoXG4gICAgICBwcm9nLFxuICAgICAgcHJvcHMsXG4gICAgICBjb250YWluZXIsXG4gICAgICBkZXB0aHMgJiYgZGVwdGhzWzBdLFxuICAgICAgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhtZXJnZWRIZWxwZXJzKS5mb3JFYWNoKGhlbHBlck5hbWUgPT4ge1xuICAgIGxldCBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5O1xuICByZXR1cm4gd3JhcEhlbHBlcihoZWxwZXIsIG9wdGlvbnMgPT4ge1xuICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckQsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7OztBQUdoQyxXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLDBCQUFxQztBQUM5QyxRQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxXQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7QUFDRixTQUFPLE9BQU8sQ0FBQztDQUNoQiIsImZpbGUiOiJ3cmFwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIGxldCB3cmFwcGVyID0gZnVuY3Rpb24oLyogZHluYW1pYyBhcmd1bWVudHMgKi8pIHtcbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iXX0=


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxVQUFVLEVBQUU7O0FBRWxDLE1BQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUN4RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFaEMsWUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDbEMsVUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7S0FDL0I7QUFDRCxXQUFPLFVBQVUsQ0FBQztHQUNuQixDQUFDO0NBQ0giLCJmaWxlIjoibm8tY29uZmxpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_search_params__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_search_params___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_search_params__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var defaultOrConstrained = function (match) {
    return '(' +
        (match ? match.replace(/(^<|>$)/g, '') : "[a-zA-Z0-9-_.~%':|=+\\*@]+") +
        ')';
};
var rules = [
    {
        name: 'url-parameter',
        pattern: /^:([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
        regex: function (match) {
            return new RegExp(defaultOrConstrained(match[2]));
        }
    },
    {
        name: 'url-parameter-splat',
        pattern: /^\*([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/,
        regex: /([^?]*)/
    },
    {
        name: 'url-parameter-matrix',
        pattern: /^;([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
        regex: function (match) {
            return new RegExp(';' + match[1] + '=' + defaultOrConstrained(match[2]));
        }
    },
    {
        name: 'query-parameter',
        pattern: /^(?:\?|&)(?::)?([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/
    },
    {
        name: 'delimiter',
        pattern: /^(\/|\?)/,
        regex: function (match) { return new RegExp('\\' + match[0]); }
    },
    {
        name: 'sub-delimiter',
        pattern: /^(!|&|-|_|\.|;)/,
        regex: function (match) { return new RegExp(match[0]); }
    },
    {
        name: 'fragment',
        pattern: /^([0-9a-zA-Z]+)/,
        regex: function (match) { return new RegExp(match[0]); }
    }
];

var tokenise = function (str, tokens) {
    if (tokens === void 0) { tokens = []; }
    // Look for a matching rule
    var matched = rules.some(function (rule) {
        var match = str.match(rule.pattern);
        if (!match) {
            return false;
        }
        tokens.push({
            type: rule.name,
            match: match[0],
            val: match.slice(1, 2),
            otherVal: match.slice(2),
            regex: rule.regex instanceof Function ? rule.regex(match) : rule.regex
        });
        if (match[0].length < str.length) {
            tokens = tokenise(str.substr(match[0].length), tokens);
        }
        return true;
    });
    // If no rules matched, throw an error (possible malformed path)
    if (!matched) {
        throw new Error("Could not parse path '" + str + "'");
    }
    return tokens;
};

var identity = function (_) { return _; };
var exists = function (val) { return val !== undefined && val !== null; };
var optTrailingSlash = function (source, strictTrailingSlash) {
    if (strictTrailingSlash) {
        return source;
    }
    if (source === '\\/') {
        return source;
    }
    return source.replace(/\\\/$/, '') + '(?:\\/)?';
};
var upToDelimiter = function (source, delimiter) {
    if (!delimiter) {
        return source;
    }
    return /(\/)$/.test(source) ? source : source + '(\\/|\\?|\\.|;|$)';
};
var appendQueryParam = function (params, param, val) {
    if (val === void 0) { val = ''; }
    var existingVal = params[param];
    if (existingVal === undefined) {
        params[param] = val;
    }
    else {
        params[param] = Array.isArray(existingVal)
            ? existingVal.concat(val)
            : [existingVal, val];
    }
    return params;
};
var Path = /** @class */ (function () {
    function Path(path) {
        if (!path) {
            throw new Error('Missing path in Path constructor');
        }
        this.path = path;
        this.tokens = tokenise(path);
        this.hasUrlParams =
            this.tokens.filter(function (t) { return /^url-parameter/.test(t.type); }).length > 0;
        this.hasSpatParam =
            this.tokens.filter(function (t) { return /splat$/.test(t.type); }).length > 0;
        this.hasMatrixParams =
            this.tokens.filter(function (t) { return /matrix$/.test(t.type); }).length > 0;
        this.hasQueryParams =
            this.tokens.filter(function (t) { return /^query-parameter/.test(t.type); }).length > 0;
        // Extract named parameters from tokens
        this.spatParams = this.getParams('url-parameter-splat');
        this.urlParams = this.getParams(/^url-parameter/);
        // Query params
        this.queryParams = this.getParams('query-parameter');
        // All params
        this.params = this.urlParams.concat(this.queryParams);
        // Check if hasQueryParams
        // Regular expressions for url part only (full and partial match)
        this.source = this.tokens
            .filter(function (t) { return t.regex !== undefined; })
            .map(function (r) { return r.regex.source; })
            .join('');
    }
    Path.createPath = function (path) {
        return new Path(path);
    };
    Path.prototype.isQueryParam = function (name) {
        return this.queryParams.indexOf(name) !== -1;
    };
    Path.prototype.test = function (path, opts) {
        var _this = this;
        var options = __assign({ strictTrailingSlash: false, queryParams: {} }, opts);
        // trailingSlash: falsy => non optional, truthy => optional
        var source = optTrailingSlash(this.source, options.strictTrailingSlash);
        // Check if exact match
        var match = this.urlTest(path, source + (this.hasQueryParams ? '(\\?.*$|$)' : '$'), opts);
        // If no match, or no query params, no need to go further
        if (!match || !this.hasQueryParams) {
            return match;
        }
        // Extract query params
        var queryParams = Object(__WEBPACK_IMPORTED_MODULE_0_search_params__["parse"])(path, options.queryParams);
        var unexpectedQueryParams = Object.keys(queryParams).filter(function (p) { return !_this.isQueryParam(p); });
        if (unexpectedQueryParams.length === 0) {
            // Extend url match
            Object.keys(queryParams).forEach(function (p) { return (match[p] = queryParams[p]); });
            return match;
        }
        return null;
    };
    Path.prototype.partialTest = function (path, opts) {
        var _this = this;
        var options = __assign({ delimited: true, queryParams: {} }, opts);
        // Check if partial match (start of given path matches regex)
        // trailingSlash: falsy => non optional, truthy => optional
        var source = upToDelimiter(this.source, options.delimited);
        var match = this.urlTest(path, source, options);
        if (!match) {
            return match;
        }
        if (!this.hasQueryParams) {
            return match;
        }
        var queryParams = Object(__WEBPACK_IMPORTED_MODULE_0_search_params__["parse"])(path, options.queryParams);
        Object.keys(queryParams)
            .filter(function (p) { return _this.isQueryParam(p); })
            .forEach(function (p) { return appendQueryParam(match, p, queryParams[p]); });
        return match;
    };
    Path.prototype.build = function (params, opts) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var options = __assign({ ignoreConstraints: false, ignoreSearch: false, queryParams: {} }, opts);
        var encodedUrlParams = Object.keys(params)
            .filter(function (p) { return !_this.isQueryParam(p); })
            .reduce(function (acc, key) {
            if (!exists(params[key])) {
                return acc;
            }
            var val = params[key];
            var encode = _this.isQueryParam(key) ? identity : encodeURI;
            if (typeof val === 'boolean') {
                acc[key] = val;
            }
            else if (Array.isArray(val)) {
                acc[key] = val.map(encode);
            }
            else {
                acc[key] = encode(val);
            }
            return acc;
        }, {});
        // Check all params are provided (not search parameters which are optional)
        if (this.urlParams.some(function (p) { return !exists(params[p]); })) {
            var missingParameters = this.urlParams.filter(function (p) { return !exists(params[p]); });
            throw new Error("Cannot build path: '" +
                this.path +
                "' requires missing parameters { " +
                missingParameters.join(', ') +
                ' }');
        }
        // Check constraints
        if (!options.ignoreConstraints) {
            var constraintsPassed = this.tokens
                .filter(function (t) {
                return /^url-parameter/.test(t.type) && !/-splat$/.test(t.type);
            })
                .every(function (t) {
                return new RegExp('^' + defaultOrConstrained(t.otherVal[0]) + '$').test(encodedUrlParams[t.val]);
            });
            if (!constraintsPassed) {
                throw new Error("Some parameters of '" + this.path + "' are of invalid format");
            }
        }
        var base = this.tokens
            .filter(function (t) { return /^query-parameter/.test(t.type) === false; })
            .map(function (t) {
            if (t.type === 'url-parameter-matrix') {
                return ";" + t.val + "=" + encodedUrlParams[t.val[0]];
            }
            return /^url-parameter/.test(t.type)
                ? encodedUrlParams[t.val[0]]
                : t.match;
        })
            .join('');
        if (options.ignoreSearch) {
            return base;
        }
        var searchParams = this.queryParams
            .filter(function (p) { return Object.keys(params).indexOf(p) !== -1; })
            .reduce(function (sparams, paramName) {
            sparams[paramName] = params[paramName];
            return sparams;
        }, {});
        var searchPart = Object(__WEBPACK_IMPORTED_MODULE_0_search_params__["build"])(searchParams, options.queryParams);
        return searchPart ? base + '?' + searchPart : base;
    };
    Path.prototype.getParams = function (type) {
        var predicate = type instanceof RegExp
            ? function (t) { return type.test(t.type); }
            : function (t) { return t.type === type; };
        return this.tokens.filter(predicate).map(function (t) { return t.val[0]; });
    };
    Path.prototype.urlTest = function (path, source, _a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).caseSensitive, caseSensitive = _b === void 0 ? false : _b;
        var regex = new RegExp('^' + source, caseSensitive ? '' : 'i');
        var match = path.match(regex);
        if (!match) {
            return null;
        }
        else if (!this.urlParams.length) {
            return {};
        }
        // Reduce named params to key-value pairs
        return match
            .slice(1, this.urlParams.length + 1)
            .reduce(function (params, m, i) {
            params[_this.urlParams[i]] = decodeURIComponent(m);
            return params;
        }, {});
    };
    return Path;
}());

/* harmony default export */ __webpack_exports__["default"] = (Path);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var makeOptions = function (opts) {
    if (opts === void 0) { opts = {}; }
    return ({
        arrayFormat: opts.arrayFormat || 'none',
        booleanFormat: opts.booleanFormat || 'none',
        nullFormat: opts.nullFormat || 'default'
    });
};
var encodeValue = function (value) { return encodeURIComponent(value); };
var decodeValue = function (value) { return decodeURIComponent(value); };
var encodeBoolean = function (name, value, opts) {
    if (opts.booleanFormat === 'empty-true' && value) {
        return name;
    }
    var encodedValue;
    if (opts.booleanFormat === 'unicode') {
        encodedValue = value ? '✓' : '✗';
    }
    else {
        encodedValue = value.toString();
    }
    return name + "=" + encodedValue;
};
var encodeNull = function (name, opts) {
    if (opts.nullFormat === 'hidden') {
        return '';
    }
    if (opts.nullFormat === 'string') {
        return name + "=null";
    }
    return name;
};
var getNameEncoder = function (opts) {
    if (opts.arrayFormat === 'index') {
        return function (name, index) { return name + "[" + index + "]"; };
    }
    if (opts.arrayFormat === 'brackets') {
        return function (name) { return name + "[]"; };
    }
    return function (name) { return name; };
};
var encodeArray = function (name, arr, opts) {
    var encodeName = getNameEncoder(opts);
    return arr
        .map(function (val, index) { return encodeName(name, index) + "=" + encodeValue(val); })
        .join('&');
};
var encode = function (name, value, opts) {
    if (value === null) {
        return encodeNull(name, opts);
    }
    if (typeof value === 'boolean') {
        return encodeBoolean(name, value, opts);
    }
    if (Array.isArray(value)) {
        return encodeArray(name, value, opts);
    }
    return name + "=" + encodeValue(value);
};
var decode = function (value, opts) {
    if (value === undefined) {
        return opts.booleanFormat === 'empty-true' ? true : null;
    }
    if (opts.booleanFormat === 'string') {
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
    }
    else if (opts.booleanFormat === 'unicode') {
        if (decodeValue(value) === '✓') {
            return true;
        }
        if (decodeValue(value) === '✗') {
            return false;
        }
    }
    else if (opts.nullFormat === 'string') {
        if (value === 'null') {
            return null;
        }
    }
    return decodeValue(value);
};

var getSearch = function (path) {
    var pos = path.indexOf('?');
    if (pos === -1) {
        return path;
    }
    return path.slice(pos + 1);
};
var isSerialisable = function (val) { return val !== undefined; };
var parseName = function (name) {
    var bracketPosition = name.indexOf('[');
    var hasBrackets = bracketPosition !== -1;
    return {
        hasBrackets: hasBrackets,
        name: hasBrackets ? name.slice(0, bracketPosition) : name
    };
};

/**
 * Parse a querystring and return an object of parameters
 */
var parse = function (path, opts) {
    var options = makeOptions(opts);
    return getSearch(path)
        .split('&')
        .reduce(function (params, param) {
        var _a = param.split('='), rawName = _a[0], value = _a[1];
        var _b = parseName(rawName), hasBrackets = _b.hasBrackets, name = _b.name;
        var currentValue = params[name];
        var decodedValue = decode(value, options);
        if (currentValue === undefined) {
            params[name] = hasBrackets ? [decodedValue] : decodedValue;
        }
        else {
            params[name] = [].concat(currentValue, decodedValue);
        }
        return params;
    }, {});
};
/**
 * Build a querystring from an object of parameters
 */
var build = function (params, opts) {
    var options = makeOptions(opts);
    return Object.keys(params)
        .filter(function (paramName) { return isSerialisable(params[paramName]); })
        .map(function (paramName) { return encode(paramName, params[paramName], options); })
        .filter(Boolean)
        .join('&');
};
/**
 * Remove a list of parameters from a querystring
 */
var omit = function (path, paramsToOmit, opts) {
    var options = makeOptions(opts);
    var searchPart = getSearch(path);
    if (searchPart === '') {
        return {
            querystring: '',
            removedParams: {}
        };
    }
    var _a = path.split('&').reduce(function (_a, chunk) {
        var left = _a[0], right = _a[1];
        var rawName = chunk.split('=')[0];
        var name = parseName(rawName).name;
        return paramsToOmit.indexOf(name) === -1
            ? [left.concat(chunk), right]
            : [left, right.concat(chunk)];
    }, [[], []]), kept = _a[0], removed = _a[1];
    return {
        querystring: kept.join('&'),
        removedParams: parse(removed.join('&'), options)
    };
};
/**
 * Remove a list of parameters from a querystring
 */
var keep = function (path, paramsToKeep, opts) {
    var options = makeOptions(opts);
    var searchPart = getSearch(path);
    if (searchPart === '') {
        return {
            keptParams: {},
            querystring: ''
        };
    }
    var _a = path.split('&').reduce(function (_a, chunk) {
        var left = _a[0], right = _a[1];
        var rawName = chunk.split('=')[0];
        var name = parseName(rawName).name;
        return paramsToKeep.indexOf(name) >= 0
            ? [left.concat(chunk), right]
            : [left, right.concat(chunk)];
    }, [[], []]), kept = _a[0], removed = _a[1];
    return {
        keptParams: parse(kept.join('&'), options),
        querystring: kept.join('&')
    };
};

exports.parse = parse;
exports.build = build;
exports.omit = omit;
exports.keep = keep;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h4>#"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "#</h4>\n<p class=\"desc\">"
    + ((stack1 = __default(__webpack_require__(69)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"lead") : stack1),98,{"name":"handleTxt","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":42}}})) != null ? stack1 : "")
    + "</p>\n<div class=\"info\">\n  <span>"
    + alias2(__default(__webpack_require__(6)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"clickCount") : stack1),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":35}}}))
    + "阅读</span>\n  <span>"
    + alias2(__default(__webpack_require__(6)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"participantCount") : stack1),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":41}}}))
    + "讨论</span>\n  <a href=\"javascript:void(0);\" class=\"collect_btn\">收藏</a>\n</div>\n<ul class=\"related_stock_list\">\n</ul>\n<div class=\"related_zhishu\"></div>\n<div class=\"mask\"></div>\n<div class=\"background\" style=\"background: url("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"rectangleImg") : stack1), depth0))
    + ");background-size:cover;\"></div>";
},"useData":true});

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (object,num) {
	if (object.length >= num) {
		return object.substr(0,num) + '...<span>[更多]</span>';
	}
    return object;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"item\" data-stockcode=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f57") : stack1), depth0))
    + "\" data-stockname=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f58") : stack1), depth0))
    + "\" data-qmarket=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f107") : stack1), depth0))
    + "\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f58") : stack1), depth0))
    + "\n            <br />\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),"-",{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),0,{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":20,"column":22}}})) != null ? stack1 : "")
    + "        </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                <span>0.00%</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(11)).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),0,{"name":"compare","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":15,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias1,0,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),{"name":"compare","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":28}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"red\">"
    + container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":14,"column":38},"end":{"line":14,"column":59}}}))
    + "%</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"green\">"
    + container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"f170") : stack1),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":18,"column":40},"end":{"line":18,"column":61}}}))
    + "%</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"re") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":43,"column":17}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"item\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "\" data-stockname=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\">\n            "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\n            <br />\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),"-",{"name":"equal","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":29,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),0,{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":41,"column":22}}})) != null ? stack1 : "")
    + "            </li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"f3") : depth0), depth0))
    + "</span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(11)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),0,{"name":"compare","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":16},"end":{"line":36,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias1,0,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"compare","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":16},"end":{"line":40,"column":28}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"red\">"
    + container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"f3") : depth0),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":35,"column":38},"end":{"line":35,"column":54}}}))
    + "%</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"green\">"
    + container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"f3") : depth0),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":39,"column":40},"end":{"line":39,"column":56}}}))
    + "%</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"type") : depth0),1,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":44,"column":14}}})) != null ? stack1 : "")
    + "    \n</div>\n<li class=\"more\">\n    <em class=\"icon icon_right_arrow_sm\"></em>\n</li>";
},"useData":true});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":23},"end":{"line":4,"column":31}}}) : helper)))
    + "\" data-code=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":52}}}) : helper)))
    + "\" data-qcode=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":4,"column":66},"end":{"line":4,"column":75}}}) : helper)))
    + "\" data-qmarket=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"qmarket") || (depth0 != null ? lookupProperty(depth0,"qmarket") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qmarket","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":102}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":104},"end":{"line":4,"column":112}}}) : helper)))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n    <ul style=\"top:0;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"RelateIndex") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n    <em class=\"icon icon_right_arrow_sm\"></em>\n</div>";
},"useData":true});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailList = void 0;
var vote_1 = __webpack_require__(73);
var stockList_1 = __webpack_require__(76);
var filter_1 = __webpack_require__(79);
var net_1 = __webpack_require__(5);
var bridge_1 = __webpack_require__(2);
var user_1 = __webpack_require__(8);
var bubble_1 = __webpack_require__(18);
var util_1 = __webpack_require__(13);
var loading_1 = __webpack_require__(83);
var text_1 = __webpack_require__(15);
__webpack_require__(86);
var hbs = __webpack_require__(87);
var itemHbs = __webpack_require__(88);
var stockTabHbs = __webpack_require__(90);
var emptyHbs = __webpack_require__(91);
var flag = 0;
// let voteHbs:hbs = require("./vote/vote.hbs")
var DetailList = /** @class */ (function () {
    function DetailList(root, tab, detailInfo, params) {
        this.root = root;
        this.re = [];
        this.isHW = false;
        this.count = -1;
        this.start = 1;
        this.offset = 20;
        this.lock = false;
        this.htid = params.id;
        this.code = params.code ? params.code : "";
        this.tab = tab;
        this.isHW = text_1.getQueryString("from") == "huaweins" ? true : false;
        if (detailInfo.stock_list) {
            this.stock_list = detailInfo.stock_list;
        }
        if (detailInfo.stock_fix_list) {
            this.stock_fix_list = detailInfo.stock_fix_list;
        }
        this.root.innerHTML = hbs({});
    }
    DetailList.prototype.enter = function () {
        var _this = this;
        var list = this.root.querySelector("#list");
        list.children[0].style.display = "none";
        list.children[1].style.display = "none";
        list.children[2].style.display = "none";
        list.children[this.tab].style.display = "block";
        this.start = 1;
        this.count = -1;
        this.re = [];
        this.loading = new loading_1.Loading(this.root);
        this.loading.show();
        switch (this.tab) {
            case 0: // 最新
                this.getNewTopicPostListRead().then(function (res) {
                    _this.lock = false;
                    _this.count = res.count;
                    _this.re = res.re;
                    _this.start = _this.re.length + 1;
                    _this.root.querySelector("#new_list").innerHTML = itemHbs({ re: res.re });
                    if (_this.re.length <= _this.offset) {
                        _this.loading.hide();
                    }
                    if (_this.re.length == 0 && _this.start == 1) {
                        _this.root.querySelector("#new_list").innerHTML = emptyHbs({});
                    }
                    _this.bind();
                })
                    .catch(function (err) {
                    _this.lock = false;
                });
                break;
            case 1: // 热帖
                this.getTopicPostListRead().then(function (res) {
                    _this.lock = false;
                    _this.count = res.count;
                    _this.re = res.re;
                    _this.start = _this.re.length + 1;
                    _this.root.querySelector("#hot_list").innerHTML = itemHbs({ re: res.re });
                    _this.root.querySelector("#stock_tab").innerHTML = stockTabHbs({
                        stock_list: _this.stock_list,
                        selectedCodeName: _this.getNameBycode(_this.code),
                        count: res.count
                    });
                    (new vote_1.Vote(_this.root, _this.htid)).enter();
                    if (_this.re.length < _this.offset) {
                        _this.loading.hide();
                    }
                    if (_this.re.length == 0 && _this.start == 1) {
                        _this.root.querySelector("#hot_list").innerHTML = emptyHbs({});
                    }
                    _this.bind();
                })
                    .catch(function (err) {
                    _this.lock = false;
                });
                break;
            case 2: // 相关股票
                (new stockList_1.StockList(this.root.querySelector("#stock_list"))).enter(this.stock_fix_list);
                this.loading.hide();
                break;
            default:
        }
    };
    DetailList.prototype.handleScroll = function (event) {
        var _this = this;
        var scrollHeight = event.target.scrollHeight;
        var scrollTop = event.target.scrollTop;
        var clientHeight = event.target.clientHeight;
        // console.log(scrollHeight, scrollTop, clientHeight, scrollTop + clientHeight)
        if (scrollHeight <= scrollTop + clientHeight + 5) {
            if (this.start <= this.count) {
                // console.log(this.lock, this.lock)
                if (this.lock) {
                    return;
                }
                this.lock = true;
                switch (this.tab) {
                    case 0: // 最新
                        this.getNewTopicPostListRead().then(function (res) {
                            _this.lock = false;
                            _this.count = res.count;
                            _this.root.querySelector("#new_list").insertAdjacentHTML("beforeend", itemHbs({ re: res.re }));
                            _this.re = _this.re.concat(res.re);
                            _this.start = _this.re.length + 1;
                            _this.bind();
                        })
                            .catch(function (err) {
                            _this.lock = false;
                        });
                        break;
                    case 1: // 热帖
                        this.getTopicPostListRead().then(function (res) {
                            _this.lock = false;
                            _this.count = res.count;
                            _this.root.querySelector("#hot_list").insertAdjacentHTML("beforeend", itemHbs({ re: res.re }));
                            _this.re = _this.re.concat(res.re);
                            _this.start = _this.re.length + 1;
                            _this.bind();
                        })
                            .catch(function (err) {
                            _this.lock = false;
                        });
                        break;
                    case 2: // 相关股票
                        break;
                    default:
                }
            }
            else {
                this.loading.hide();
            }
        }
    };
    DetailList.prototype.bind = function () {
        var _this = this;
        if (!bridge_1.isHybrid() && this.isHW) {
            this.setHuaweiCustomize();
        }
        // 滚动下拉
        document.querySelector("#body").onscroll = function (event) {
            if (_this.tab == 2) {
                return;
            }
            _this.handleScroll(event);
        };
        var stock_list = this.root.querySelector(".stock_list");
        if (stock_list) {
            stock_list.onclick = function () {
                _this.filter = new filter_1.Filter(_this.root.querySelector("#list"), _this.stock_list, _this.code);
                _this.filter.enter();
                _this.root.querySelectorAll("#stock_filter li").forEach(function (item) {
                    item.onclick = function (event) {
                        _this.code = event.target.dataset.code ? event.target.dataset.code : "";
                        _this.start = 1;
                        _this.getTopicPostListRead().then(function (res) {
                            _this.count = res.count;
                            _this.re = res.re;
                            _this.start = _this.re.length + 1;
                            _this.root.querySelector("#hot_list").innerHTML = itemHbs({ re: res.re });
                            _this.root.querySelector("#stock_tab").innerHTML = stockTabHbs({
                                stock_list: _this.stock_list,
                                selectedCodeName: _this.getNameBycode(_this.code),
                                count: res.count
                            });
                            if (_this.re.length < _this.offset) {
                                _this.loading.hide();
                            }
                            _this.bind();
                            _this.filter.hide();
                        })
                            .catch(function (err) {
                            _this.filter.hide();
                        });
                    };
                });
            };
        }
        // 点击头像 
        document.querySelectorAll("#list .user_avator").forEach(function (item, index) {
            item.onclick = function (event) {
                if (bridge_1.isHybrid()) { // app里
                    if (event.currentTarget.dataset.user_is_majia == "false") {
                        bridge_1.jumpToUser(event.currentTarget.dataset.userid);
                    }
                    else {
                        if (event.currentTarget.dataset.qmarket != "-404") { // 有行情
                            bridge_1.emH5ToStock(event.currentTarget.dataset.third_app_code, event.currentTarget.dataset.frombar);
                        }
                        else { // 没行情跳主题吧
                            bridge_1.emH5ToStockBar(event.currentTarget.dataset.third_app_code, event.currentTarget.dataset.frombar);
                        }
                    }
                }
                else {
                    // huawei
                    if (_this.isHW) {
                        return;
                    }
                    if (event.currentTarget.dataset.user_is_majia == "false") {
                        window.location.href = "//mguba.eastmoney.com/mguba/user/" + event.currentTarget.dataset.userid;
                    }
                    else {
                        window.location.href = "//mguba.eastmoney.com/mguba/list/" + event.currentTarget.dataset.stockcode;
                    }
                }
                event.preventDefault();
                event.stopPropagation();
            };
        });
        // 点击昵称
        document.querySelectorAll("#list .nickname").forEach(function (item, index) {
            item.onclick = function (event) {
                if (bridge_1.isHybrid()) { // app里
                    if (event.currentTarget.dataset.user_is_majia == "false") {
                        bridge_1.jumpToUser(event.currentTarget.dataset.userid);
                    }
                    else {
                        if (event.currentTarget.dataset.qmarket != "-404") { // 有行情
                            bridge_1.emH5ToStock(event.currentTarget.dataset.third_app_code, event.currentTarget.dataset.frombar);
                        }
                        else { // 没行情跳主题吧
                            bridge_1.emH5ToStockBar(event.currentTarget.dataset.third_app_code, event.currentTarget.dataset.frombar);
                        }
                    }
                }
                else {
                    // huawei
                    if (_this.isHW) {
                        return;
                    }
                    if (event.currentTarget.dataset.user_is_majia == "false") {
                        window.location.href = "//mguba.eastmoney.com/mguba/user/" + event.currentTarget.dataset.userid;
                    }
                    else {
                        window.location.href = "//mguba.eastmoney.com/mguba/list/" + event.currentTarget.dataset.stockcode;
                    }
                }
                event.preventDefault();
                event.stopPropagation();
            };
        });
        // 点击关联股
        // (<NodeListOf<HTMLDivElement>>document.querySelectorAll("#list .related_stock li")).forEach((item, index) => {
        //     item.onclick = (event:any) => {
        //         if(isHybrid()){ // app里
        //             emH5ToStock(event.currentTarget.dataset.stockcode, event.currentTarget.dataset.stockname);
        //         }else{
        //             window.location.href = `//mguba.eastmoney.com/mguba/list/${event.currentTarget.dataset.stockcode}`;
        //         }
        //         event.preventDefault();
        //         event.stopPropagation();
        //     }
        // });
        // 点击空白区域
        document.querySelectorAll("#hot_list .item").forEach(function (item, index) {
            item.onclick = function (event) {
                if (_this.tab == 2) {
                    return;
                }
                var third_id = event.currentTarget.dataset.third_id;
                var post_type = event.currentTarget.dataset.post_type;
                var postid = event.currentTarget.dataset.postid;
                if (bridge_1.isHybrid()) { // app里
                    bridge_1.jumpToPost(postid, third_id, post_type * 1);
                }
                else {
                    if (_this.isHW) {
                        window.location.href = "//mguba.eastmoney.com/mguba/article_hw/0/" + postid + "?from=huaweins";
                    }
                    else {
                        window.location.href = "//mguba.eastmoney.com/mguba/article/0/" + postid;
                    }
                }
            };
        });
        // 点击空白区域
        document.querySelectorAll("#new_list .item").forEach(function (item, index) {
            item.onclick = function (event) {
                if (_this.tab == 2) {
                    return;
                }
                var third_id = event.currentTarget.dataset.third_id;
                var post_type = event.currentTarget.dataset.post_type;
                var postid = event.currentTarget.dataset.postid;
                if (bridge_1.isHybrid()) { // app里
                    bridge_1.jumpToPost(postid, third_id, post_type * 1);
                }
                else {
                    if (_this.isHW) {
                        window.location.href = "//mguba.eastmoney.com/mguba/article_hw/0/" + postid + "?from=huaweins";
                    }
                    else {
                        window.location.href = "//mguba.eastmoney.com/mguba/article/0/" + postid;
                    }
                }
            };
        });
        // operate_btns reply
        document.querySelectorAll(".operate_btns .reply").forEach(function (item, index) {
            item.onclick = function (event) {
                // huawei
                if (!bridge_1.isHybrid() && _this.isHW) {
                    if (window.intelligent) {
                        window.intelligent.downloadApp();
                    }
                    return;
                }
                var commentnum = item.dataset.commentnumber ? item.dataset.commentnumber : 0;
                var postid = item.dataset.postid ? item.dataset.postid : "0";
                var third_id = event.currentTarget.dataset.third_id;
                var post_type = event.currentTarget.dataset.post_type;
                var h_name = event.currentTarget.dataset.h_name;
                if (bridge_1.isHybrid()) { // 内嵌环境
                    if (commentnum > 0) { // 评论数大于0，跳转正文页
                        bridge_1.jumpToPost(postid, third_id, post_type * 1, 1);
                    }
                    else {
                        bridge_1.emH5ReplyInput(postid, function (res) {
                            // console.log(2,res)
                        }, "", h_name);
                    }
                }
                else {
                    if (commentnum > 0) { // 评论数大于0，跳转正文页
                        window.location.href = "//mguba.eastmoney.com/mguba/article/0/" + postid;
                    }
                    else { // 评论数小于0，跳转评论页
                        window.location.href = "//mguba.eastmoney.com/mguba/newreply/0/" + postid + "/0/" + encodeURIComponent(window.location.href);
                    }
                }
            };
        });
        // operate_btns like
        document.querySelectorAll(".operate_btns .like").forEach(function (item, index) {
            item.onclick = function (event) {
                // huawei
                if (!bridge_1.isHybrid() && _this.isHW) {
                    if (window.intelligent) {
                        window.intelligent.downloadApp();
                    }
                    return;
                }
                user_1.user.checkLogin(function () {
                    if (!user_1.user.isLogin()) {
                        user_1.user.login();
                        return;
                    }
                    else {
                        var post_is_like_1 = item.dataset.post_is_like == "true" ? true : false;
                        var postid = item.dataset.postid ? item.dataset.postid : "0";
                        var likenumber_1 = item.dataset.likenumber ? parseInt(item.dataset.likenumber) : 0;
                        _this.handleLike(!!post_is_like_1, postid).then(function (res) {
                            post_is_like_1 = !post_is_like_1;
                            item.className = "like " + post_is_like_1;
                            item.dataset.post_is_like = post_is_like_1 ? "true" : "false";
                            likenumber_1 = post_is_like_1 ? likenumber_1 + 1 : likenumber_1 - 1;
                            item.dataset.likenumber = likenumber_1 + "";
                            item.querySelector(".likenumberforshow").innerHTML = likenumber_1 > 0 ? likenumber_1 + "" : "赞";
                            (new bubble_1.Bubble(post_is_like_1 ? '点赞成功' : '取消点赞成功')).enter();
                        })
                            .catch(function (err) {
                            if (err && err.me) {
                                (new bubble_1.Bubble(err.me)).enter();
                            }
                        });
                    }
                });
            };
        });
        // operate_btns share
        var shareList = document.querySelectorAll(".operate_btns .share[data-flag='0']");
        shareList.forEach(function (item, index) {
            item.dataset.flag = '1';
            var desc = item.dataset.desc ? item.dataset.desc : "";
            var title = item.dataset.title ? item.dataset.title : "";
            var postid = item.dataset.postid ? item.dataset.postid : "0";
            var frombar = item.dataset.frombar ? item.dataset.frombar : "";
            var stockcode = item.dataset.stockcode ? item.dataset.stockcode : "";
            if (!title) {
                title = desc;
            }
            if (bridge_1.isHybrid()) {
                item.onclick = function (event) {
                    bridge_1.emH5Share({
                        "type": "weixin,pengyouquan,qq,qzone,weibo",
                        "img": "https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png",
                        "title": (title.length > 40 ? (title.substring(0, 40) + '...') : title) + "_" + frombar + "(" + stockcode + ")\u80A1\u5427_\u4E1C\u65B9\u8D22\u5BCC\u7F51\u80A1\u5427",
                        "url": "http://mguba.eastmoney.com/mguba/article/0/" + postid,
                        "desc": desc
                    });
                };
            }
            else {
                util_1.share((title.length > 40 ? (title.substring(0, 40) + '...') : title) + "_" + frombar + "(" + stockcode + ")\u80A1\u5427_\u4E1C\u65B9\u8D22\u5BCC\u7F51\u80A1\u5427", desc, "//mguba.eastmoney.com/mguba/article/0/" + postid, shareList);
            }
        });
    };
    // 点赞
    DetailList.prototype.handleLike = function (post_is_like, post_id) {
        return new Promise(function (resolve, reject) {
            net_1.send("/likeopt/api/Like/" + (!post_is_like ? 'LikeArticle' : 'CancelLikeArticle'), "type=0&id=" + post_id)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 最新
    DetailList.prototype.getNewTopicPostListRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/NewTopicPostListRead", "htid=" + _this.htid + "&sort=-1&start=" + _this.start + "&offset=" + _this.offset + "&type=1")
                .then(function (res) {
                if (res && res.rc == 1) {
                    // console.log(`start=${this.start} count=${this.count} this.re=${res.re.length}`);
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 最热
    DetailList.prototype.getTopicPostListRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/TopicPostListRead", "htid=" + _this.htid + "&code=" + (_this.code != '' ? _this.code : "") + "&sort=-1&start=" + _this.start + "&offset=" + _this.offset + "&type=1")
                .then(function (res) {
                if (res && res.rc == 1) {
                    // console.log(`start=${this.start} count=${this.count} this.re=${res.re.length}`);
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 根据code获取name
    DetailList.prototype.getNameBycode = function (code) {
        if (!code || !this.stock_list || this.stock_list.length == 0) {
            return "";
        }
        var name = "";
        this.stock_list.forEach(function (item) {
            if (code == item.code) {
                name = item.name;
            }
        });
        return name;
    };
    DetailList.prototype.setHuaweiCustomize = function () {
        // 隐藏share
        document.querySelectorAll(".share").forEach(function (item) {
            item.style.display = "none";
        });
    };
    return DetailList;
}());
exports.DetailList = DetailList;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
var net_1 = __webpack_require__(5);
var router_1 = __webpack_require__(10);
var user_1 = __webpack_require__(8);
__webpack_require__(74);
var hbs = __webpack_require__(75);
var Vote = /** @class */ (function () {
    function Vote(root, htid) {
        this.root = root;
        this.voteFlag = 0;
        this.htid = htid;
    }
    Vote.prototype.enter = function () {
        var _this = this;
        this.getVoteShortInfoRead().then(function (res) {
            if (res.re && res.re.length > 0) {
                _this.voteFlag = res.re[0].voteFlag;
                _this.voteId = res.re[0].voteId;
                _this.root.querySelector("#vote").innerHTML = hbs({ re: res.re[0] });
                _this.root.querySelector("#vote").style.display = "-webkit-flex";
                _this.bind();
            }
        });
    };
    Vote.prototype.bind = function () {
        var _this = this;
        this.root.querySelector("#vote").onclick = function () {
            user_1.user.checkLogin(function () {
                if (user_1.user.isLogin()) {
                    if (!_this.voteFlag) {
                        router_1.router.navigate("/voteInfo?id=" + _this.htid + "&vid=" + _this.voteId);
                    }
                    else {
                        router_1.router.navigate("/voteResult?id=" + _this.htid + "&vid=" + _this.voteId);
                    }
                }
                else {
                    user_1.user.login();
                    return;
                }
            });
        };
    };
    // 投票
    Vote.prototype.getVoteShortInfoRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/VoteShortInfoRead", "htid=" + _this.htid + "&type=1")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return Vote;
}());
exports.Vote = Vote;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"image") : stack1), depth0))
    + "\" alt=\"\" class=\"vote_banner\" />\n<div class=\"vote_info\">\n    <p class=\"vote_title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</p>\n    <p class=\"vote_desc\">参与人&nbsp;<span>"
    + alias2(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"PersonNumber") : stack1),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":4,"column":40},"end":{"line":4,"column":69}}}))
    + "</span></p>\n</div>\n<div class=\"btn_wrap\">\n    <em class=\"icon icon_vote_btn\"></em>\n    <p class=\"text\">投票</p>\n</div>";
},"useData":true});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StockList = void 0;
__webpack_require__(77);
var net_1 = __webpack_require__(5);
var bridge_1 = __webpack_require__(2);
var text_1 = __webpack_require__(15);
var hbs = __webpack_require__(78);
var StockList = /** @class */ (function () {
    function StockList(root) {
        this.root = root;
        this.isHW = false;
        this.isHW = text_1.getQueryString("from") == "huaweins" ? true : false;
    }
    StockList.prototype.enter = function (stock_fix_list) {
        this.stock_fix_list = stock_fix_list;
        if (stock_fix_list && stock_fix_list.length > 0) {
            this.getStockListHq();
        }
    };
    StockList.prototype.getStockListHq = function () {
        var _this = this;
        var stockstr = this.formatStockList();
        if (stockstr && stockstr.length > 0) {
            net_1.getHq(stockstr.join(',')).then(function (res) {
                _this.stock_fix_list.forEach(function (item) {
                    if (stockstr.length == 1) {
                        if (res.data) {
                            var _a = res.data, f57 = _a.f57, f43 = _a.f43, f170 = _a.f170;
                            var code = item.code, qcode = item.qcode;
                            if (code == f57 || qcode == f57) {
                                item.xianjia = f43;
                                item.zhangdiefu = f170;
                                if (f170 > 0) {
                                    item.updown = "red";
                                }
                                else if (f170 < 0) {
                                    item.updown = "green";
                                }
                            }
                        }
                    }
                    else {
                        if (res.data && res.data.diff && res.data.diff.length > 0) {
                            res.data.diff.forEach(function (hq) {
                                var f12 = hq.f12, f2 = hq.f2, f3 = hq.f3;
                                var code = item.code, qcode = item.qcode;
                                if (code == f12 || qcode == f12) {
                                    item.xianjia = f2;
                                    item.zhangdiefu = f3;
                                    if (f3 > 0) {
                                        item.updown = "red";
                                    }
                                    else if (f3 < 0) {
                                        item.updown = "green";
                                    }
                                }
                            });
                        }
                    }
                });
                _this.root.innerHTML = hbs({ stock_fix_list: _this.stock_fix_list });
                document.querySelectorAll("#stock_list .item").forEach(function (item, index) {
                    item.onclick = function (event) {
                        var code = event.currentTarget.dataset.stockcode;
                        var qcode = event.currentTarget.dataset.qcode;
                        var qmarket = event.currentTarget.dataset.qmarket;
                        if (qmarket == "106" || qmarket == "105" || qmarket == "107") {
                            switch (qmarket) {
                                case "105":
                                    code = "NASDAQ|" + qcode;
                                    break;
                                case "106":
                                    code = "NYSE|" + qcode;
                                    break;
                                case "107":
                                    code = "AMEX|" + qcode;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (bridge_1.isHybrid()) { // app里
                            // alert(event.currentTarget.dataset.stockcode)
                            bridge_1.emH5ToStock(code, event.currentTarget.dataset.stockname);
                        }
                        else {
                            if (_this.isHW) {
                                window.location.href = "https://wap.eastmoney.com/quote/stock/" + qmarket + "." + qcode + ".html";
                            }
                            else {
                                window.location.href = "//mguba.eastmoney.com/mguba/list/" + code;
                            }
                        }
                        event.preventDefault();
                        event.stopPropagation();
                    };
                });
            });
        }
    };
    StockList.prototype.formatStockList = function () {
        var arr = [];
        this.stock_fix_list && this.stock_fix_list.forEach(function (item) {
            if (item.code.substr(0, 2) == "us") { // 美股存third_app_code
                // arr.push(item.third_app_code);
                arr.push(item.qmarket + "." + item.qcode);
            }
            else { // 沪深港股存code
                arr.push(item.code);
            }
        });
        // console.log(arr,arr)
        return arr;
    };
    return StockList;
}());
exports.StockList = StockList;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"item\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"third_app_code") : depth0), depth0))
    + "\" data-stockname=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qmarket") : depth0), depth0))
    + "\">\n        <div>\n            <p class=\"name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\n            <p class=\"code\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\n                <em class=\"icon icon_kc\"></em>\n                <em class=\"icon icon_rong\"></em>\n            </p>\n        </div>\n        <div><span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updown") : depth0), depth0))
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"xianjia") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":18,"column":38},"end":{"line":18,"column":90}}})) != null ? stack1 : "")
    + "</span></div>\n        <div><span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updown") : depth0), depth0))
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"zhangdiefu") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":19,"column":38},"end":{"line":19,"column":101}}})) != null ? stack1 : "")
    + "</span></div>\n        <div>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + "</div>\n    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"xianjia") : depth0),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":18,"column":53},"end":{"line":18,"column":74}}}));
},"4":function(container,depth0,helpers,partials,data) {
    return "-";
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(__default(__webpack_require__(16)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"zhangdiefu") : depth0),2,{"name":"toFixed","hash":{},"data":data,"loc":{"start":{"line":19,"column":56},"end":{"line":19,"column":80}}}))
    + "%";
},"8":function(container,depth0,helpers,partials,data) {
    return "0.00%";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul>\n    <li class=\"head\">\n        <div>股票名称</div>\n        <div>现价</div>\n        <div>涨跌幅</div>\n        <div>相关热帖</div>\n    </li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock_fix_list") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
__webpack_require__(80);
var hbs = __webpack_require__(81);
var maskHbs = __webpack_require__(82);
var Filter = /** @class */ (function () {
    function Filter(root, stock_list, code) {
        this.root = root;
        this.selectedCode = "";
        this.touchInStockFilter = false;
        if (stock_list) {
            this.selectedCode = code ? code : "";
            document.querySelector("#stock_filter").innerHTML = hbs({ stock_list: stock_list, selectedCode: code });
        }
    }
    Filter.prototype.enter = function () {
        this.show();
    };
    Filter.prototype.show = function () {
        var _this = this;
        document.querySelector("#stock_filter").style.display = "block";
        document.querySelector("#body").insertAdjacentHTML("beforeend", maskHbs({}));
        document.querySelector("#body .filter_mask").ontouchstart = function (event) {
            event.stopPropagation();
            event.preventDefault();
            _this.hide();
        };
        document.querySelector("#body .filter_mask").onclick = function () {
            _this.hide();
        };
        document.querySelector("#stock_filter").ontouchstart = function (event) {
            // this.touchInStockFilter=true;
        };
        document.querySelector('#body').style.overflow = 'hidden'; //防止滚动到底部联动问题
        // (<HTMLDivElement>document.querySelector("#page_list")).ontouchmove = e => {
        //     e.preventDefault();
        // }
    };
    ;
    Filter.prototype.hide = function () {
        // this.touchInStockFilter=false;
        document.querySelector("#stock_filter").style.display = "none";
        document.querySelector("#body .filter_mask").remove();
        document.querySelector('#body').style.overflow = 'auto'; //防止滚动到底部联动问题
    };
    return Filter;
}());
exports.Filter = Filter;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <li data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"code") : depth0), depth0))
    + "\" class=\""
    + ((stack1 = __default(__webpack_require__(1)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"selectedCode") : depths[1]),(depth0 != null ? lookupProperty(depth0,"code") : depth0),{"name":"equal","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":81}}})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n  <li data-code=\"\" class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selectedCode") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":2,"column":26},"end":{"line":2,"column":67}}})) != null ? stack1 : "")
    + "\">全部</li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"filter_mask\"></div>";
},"useData":true});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * loading
 * (new Loading(...)).enter();
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
__webpack_require__(84);
var hbs = __webpack_require__(85);
var Loading = /** @class */ (function () {
    function Loading(root) {
        this.root = root;
        this.root.insertAdjacentHTML("beforeend", hbs({}));
    }
    Loading.prototype.enter = function () {
    };
    Loading.prototype.show = function () {
        this.root.querySelector(".loading").style.opacity = "1";
    };
    Loading.prototype.hide = function () {
        this.root.querySelector(".loading").style.opacity = "0";
    };
    return Loading;
}());
exports.Loading = Loading;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <span>数据加载中...</span>\n</div>";
},"useData":true});

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"list\">\n    <ul id=\"new_list\"></ul>\n    <div id=\"hot_list_box\">\n        <div id=\"vote\"></div>\n        <div class=\"tab_wrap\">\n            <div id=\"stock_tab\"></div>\n            <div id=\"stock_filter\"></div>\n        </div>\n        <ul id=\"hot_list\"></ul>\n    </div>\n    <ul id=\"stock_list\"></ul>\n</div>";
},"useData":true});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>\n    <div class=\"item\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\" data-post_type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\" data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":93},"end":{"line":3,"column":128}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"user\" data-userid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"userid") : depth0), depth0))
    + "\">\n            <img src=\"//avator.eastmoney.com/qface/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"userid") : depth0), depth0))
    + "/166\" alt=\"\" class=\"user_avator\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qmarket") : depth0), depth0))
    + "\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"stockcode") : depth0), depth0))
    + "\" data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"frombar") : depth0), depth0))
    + "\" data-third_app_code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"third_app_code") : depth0), depth0))
    + "\" data-user_is_majia=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_is_majia") : depth0), depth0))
    + "\" data-userid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"userid") : depth0), depth0))
    + "\"/>\n            <div class=\"user_info\">\n                <p class=\"nickname\" class=\"user_avator\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qmarket") : depth0), depth0))
    + "\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"stockcode") : depth0), depth0))
    + "\" data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"frombar") : depth0), depth0))
    + "\" data-third_app_code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"third_app_code") : depth0), depth0))
    + "\" data-user_is_majia=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_is_majia") : depth0), depth0))
    + "\" data-userid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"userid") : depth0), depth0))
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":7,"column":246},"end":{"line":7,"column":295}}})) != null ? stack1 : "")
    + "</p>\n                <p class=\"update_time\">更新于 "
    + alias2(__default(__webpack_require__(89)).call(alias3,(depth0 != null ? lookupProperty(depth0,"last_update") : depth0),{"name":"formatTime","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":69}}}))
    + "</p>\n            </div>\n        </div>\n        <div class=\"content\">\n            <h4 class=\"title\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":33,"column":23}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = __default(__webpack_require__(19)).call(alias3,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"showface","hash":{},"data":data,"loc":{"start":{"line":34,"column":16},"end":{"line":34,"column":36}}})) != null ? stack1 : "")
    + "\n            </h4>\n            <p class=\"text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":37,"column":16},"end":{"line":58,"column":23}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = __default(__webpack_require__(19)).call(alias3,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"showface","hash":{},"data":data,"loc":{"start":{"line":59,"column":16},"end":{"line":59,"column":38}}})) != null ? stack1 : "")
    + "    \n            </p>\n        </div>\n    </div>\n    <div class=\"operate_btns\">\n        <div class=\"share\" data-flag=\"0\" data-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\" data-desc=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\" data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"frombar") : depth0), depth0))
    + "\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"stockcode") : depth0), depth0))
    + "\">\n            <em class=\"icon icon_share2\"></em>分享\n        </div>\n        <div class=\"reply\" data-h_name=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":72,"column":40},"end":{"line":72,"column":89}}})) != null ? stack1 : "")
    + "\" data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":106},"end":{"line":72,"column":141}}})) != null ? stack1 : "")
    + "\" data-post_type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\" data-CommentNumber=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0), depth0))
    + "\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n            <em class=\"icon icon_reply2\"></em>\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias3,(depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0),1,{"name":"compare","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":74,"column":12},"end":{"line":78,"column":24}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"like "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0), depth0))
    + "\" data-post_is_like=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0), depth0))
    + "\" data-LikeNumber=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"LikeNumber") : depth0), depth0))
    + "\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n            <em class=\"icon icon_like2\"></em>\n            <em class=\"icon icon_like_black2\"></em>\n            <em class=\"icon icon_unlike2\"></em>\n            <span class=\"likenumberforshow\">\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias3,(depth0 != null ? lookupProperty(depth0,"LikeNumber") : depth0),1,{"name":"compare","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":85,"column":16},"end":{"line":88,"column":28}}})) != null ? stack1 : "")
    + "            </span>\n        </div>\n    </div>\n</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"third_id") : depth0), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"ip") : depth0), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(1)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"topflag") : depth0),1,{"name":"equal","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":14,"column":20},"end":{"line":32,"column":30}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"tag\">置顶</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"post_type") : depth0),1,{"name":"equal","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":19,"column":34}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"post_type") : depth0),2,{"name":"equal","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":24},"end":{"line":22,"column":34}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"post_type") : depth0),3,{"name":"equal","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":25,"column":34}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"post_type") : depth0),11,{"name":"equal","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":28,"column":34}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"post_type") : depth0),20,{"name":"equal","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":31,"column":34}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"tag\">资讯</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"tag\">研报</span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"tag\">公告</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"tag\">问董秘</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "                            <span class=\"tag\">财富号</span>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "";
},"24":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + container.escapeExpression(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":75,"column":16},"end":{"line":75,"column":43}}}))
    + "\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "                评论\n";
},"28":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"LikeNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":86,"column":20},"end":{"line":86,"column":44}}}))
    + "\n                ";
},"30":function(container,depth0,helpers,partials,data) {
    return "赞\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"re") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":93,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function(time){
  console.log('xxx',time);
    var now = new Date();
    var year = now.getFullYear();
    var momth = now.getMonth()+1;
    var date = now.getDate();
  
    var reg = new RegExp(/(.+?)-(.+?)-(.+?) (.+?):(.+?):(.+?)/,'img');
    var timeArr = time.replace(reg, "$1,$2,$3,$4,$5,$6").split(',');
  
    if(year == Number(timeArr[0])){ // 今年
        if(momth == Number(timeArr[1]) && date == Number(timeArr[2])){ // 今天
          //   return `今天 ${timeArr[3]}:${timeArr[4]}`;
            return "今天 "+timeArr[3]+":"+timeArr[4];
        }else{
          //   return `${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
            return timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
        }
    }else{
      //   return `${timeArr[0]}-${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
        return timeArr[0]+"-"+timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
    }
  }

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n    <div class=\"selected_stock\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selectedCodeName") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <span class=\"stockname\">"
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"selectedCodeName") : depth0), depth0))
    + "</span>\n        <span><i>"
    + alias1(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":36}}}))
    + "</i>条热帖</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"stockname\">全部</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"stock_list\">\n        内容筛选:\n        <span class=\"stockname\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selectedCodeName") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </span>\n        <em class=\"icon icon_down_arrow\"></em>\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"selectedCodeName") : depth0), depth0))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            全部关联股\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"empty\">\n    <em class=\"icon icon_blank\"></em>\n    <p>空空如也，快来参与讨论吧</p>\n</div>";
},"useData":true});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPanel = void 0;
var net_1 = __webpack_require__(5);
var env_1 = __webpack_require__(22);
var bridge_1 = __webpack_require__(2);
var router_1 = __webpack_require__(10);
var util_1 = __webpack_require__(13);
__webpack_require__(93);
var hbs = __webpack_require__(94);
var itemHbs = __webpack_require__(95);
var noResultHbs = __webpack_require__(96);
var SearchPanel = /** @class */ (function () {
    function SearchPanel(root) {
        this.root = root;
        this.p = 1;
    }
    SearchPanel.prototype.search = function (keyword) {
        var _this = this;
        var realkw = util_1.clearSpecChar(keyword);
        if (!document.body.querySelector("#searchPanel")) {
            this.root.insertAdjacentHTML('beforeend', hbs({}));
        }
        if (keyword != realkw && realkw == "") { // 输入的全是特殊字符
            this.root.querySelector("#search_result_list").innerHTML = noResultHbs({});
            return;
        }
        if (!realkw) {
            this.remove();
            return;
        }
        this.getSearchJsonp(realkw).then(function (res) {
            // if(!document.body.querySelector("#searchPanel")){
            // this.root.insertAdjacentHTML('beforeend', hbs({}));
            document.body.querySelector("#searchPanel").style.paddingTop = (window.statusBarHeight + window.titleBarHeight) + "px";
            // }
            // console.log(res.result.gubaTopic);
            var gubaTopic = res.result.gubaTopic;
            if (gubaTopic && gubaTopic.length > 0) {
                _this.root.querySelector("#search_result_list").innerHTML = itemHbs({ gubaTopic: gubaTopic });
            }
            else {
                _this.root.querySelector("#search_result_list").innerHTML = noResultHbs({});
            }
            _this.root.querySelectorAll("#search_result_list a").forEach(function (item) {
                item.onclick = function (event) {
                    var htid = event.currentTarget.dataset.id;
                    router_1.router.navigate("/list?id=" + htid);
                };
            });
        });
    };
    SearchPanel.prototype.getSearchJsonp = function (keyword) {
        // 颜鑫 工号: 171353
        var url = env_1.env.isRelease ? "//search-api-security.eastmoney.com/search/jsonp" : "//search-api-security-zptest.eastmoney.com/search/jsonp";
        var params = { "uid": "", "path": "/search", "clientType": "gb", "param": { "gubaTopic": { "pageIndex": this.p, "isHighlight": false, "pageSize": 20, "postTag": "</i>", "preTag": "<i class=\"mark\">" } }, "appName": "search.platform.appgateway.hot", "client": (bridge_1.isIOS() ? "ios" : "android"), "keyword": keyword, "type": ["gubaTopic"], "clientVersion": "9.2", "timestamp": ((new Date()).getTime()) };
        return new Promise(function (resolve, reject) {
            net_1.sendJsonp(url + "?param=" + JSON.stringify(params), "cb")
                .then(function (res) {
                if (res && res.code == 0) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    SearchPanel.prototype.remove = function () {
        if (document.body.querySelector("#searchPanel"))
            document.body.querySelector("#searchPanel").remove();
    };
    return SearchPanel;
}());
exports.SearchPanel = SearchPanel;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"searchPanel\">\n	<h4>搜索结果</h4>\n	<ul id=\"search_result_list\">\n	</ul>\n	<p class=\"end\">到底啦</p>\n</div>";
},"useData":true});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <li class=\"result_item\">\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":21}}}) : helper)))
    + "\" alt=\"\" class=\"topic_banner\" />\n    <p><a href=\"javascript:void(0);\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":46},"end":{"line":4,"column":52}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</a></p>\n    <a href=\"javascript:void(0);\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":49}}}) : helper)))
    + "\" class=\"topic_detail_btn\">详情</a>\n  </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"gubaTopic") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"no_result\">\n  <em class=\"icon icon_search_no_result\"></em>\n</div>";
},"useData":true});

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h4>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\">话题资料</h4>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <em class=\"icon icon_left_arrow\"></em>\n    <div class=\"search_wrap\">\n        <input type=\"text\" id=\"search_input\" placeholder=\"查找更多话题\" />\n        <em class=\"icon icon_search2\"></em>\n    </div>\n    <em class=\"icon icon_refresh\"></em>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h4>\n    <em class=\"header_share\"  tracker-eventcode=\"gbhty.dghtxqy.db.fx\" tracker-extinfo=\"htId:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n        <span class=\"header_share_text\">分享</span>\n    </em>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\">投票</h4>\n    <em class=\"header_share\" tracker-eventcode=\"gbhty.dghtxqy.db.fx\" tracker-extinfo=\"htId:"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\"><span\n            class=\"header_share_text\">分享</span></em>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\"></h4>\n    <em class=\"header_share\" tracker-eventcode=\"gbhty.dghtxqy.db.fx\" tracker-extinfo=\"htId:"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\"><span class=\"header_share_text\">分享</span></em>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header_wrap type"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\">\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),0,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":5,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),1,{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),2,{"name":"equal","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":20,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),3,{"name":"equal","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":28,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),4,{"name":"equal","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":35,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),5,{"name":"equal","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":4},"end":{"line":41,"column":14}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"detail_head\"></div>\n<div class=\"tab_box\">\n    <ul id=\"tab\">\n      <li class=\"active\">最新</li>\n      <li>热帖</li>\n      <li>相关股票</li>\n  </ul>\n</div>\n<div id=\"detail_list\"></div>\n<div id=\"reply_btn\" tracker-eventcode=\"gbhty_hty_db_cytl\" tracker-extinfo=\"htId:"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"htid") : depths[1]), depth0))
    + "\">\n  <a href=\"javascript:void(0);\">参与讨论</a>\n</div>\n";
},"useData":true,"useDepths":true});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_user") : stack1)) != null ? lookupProperty(stack1,"user_nickname") : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_ip") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"fake_item\">\n    <div class=\"item\">\n        <div class=\"user\">\n            <img src=\"//avator.eastmoney.com/qface/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_user") : stack1)) != null ? lookupProperty(stack1,"user_id") : stack1), depth0))
    + "/166\" alt=\"\" class=\"user_avator\"/>\n            <div class=\"user_info\">\n                <p class=\"nickname\" class=\"user_avator\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_user") : stack1)) != null ? lookupProperty(stack1,"user_nickname") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":149}}})) != null ? stack1 : "")
    + "</p>\n                <p class=\"update_time\">帖子审核中，仅自己可见</p>\n            </div>\n        </div>\n        <div class=\"content\">\n            <h4 class=\"title\">"
    + ((stack1 = __default(__webpack_require__(19)).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_title") : stack1),{"name":"showface","hash":{},"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":11,"column":58}}})) != null ? stack1 : "")
    + "</h4>\n            <p class=\"text\">"
    + ((stack1 = __default(__webpack_require__(19)).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"post_content") : stack1),{"name":"showface","hash":{},"data":data,"loc":{"start":{"line":12,"column":28},"end":{"line":12,"column":58}}})) != null ? stack1 : "")
    + "</p>\n        </div>\n    </div>\n    <div class=\"operate_btns\">\n        <div class=\"share\" data-flag=\"1\">\n            <em class=\"icon icon_share2\"></em>分享\n        </div>\n        <div class=\"reply\">\n            <em class=\"icon icon_reply2\"></em>评论\n        </div>\n        <div class=\"like false\">\n            <em class=\"icon icon_like2\"></em>\n            <em class=\"icon icon_like_black2\"></em>\n            <em class=\"icon icon_unlike2\"></em>\n            <span class=\"likenumberforshow\">赞</span>\n        </div>\n    </div>\n</li>\n";
},"useData":true});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDetail = void 0;
var page_1 = __webpack_require__(7);
var header_1 = __webpack_require__(12);
var net_1 = __webpack_require__(5);
__webpack_require__(103);
var hbs = __webpack_require__(104);
var PageDetail = /** @class */ (function (_super) {
    __extends(PageDetail, _super);
    function PageDetail() {
        return _super.call(this) || this;
    }
    PageDetail.prototype.enter = function (parent) {
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_detail";
        this.root.className = "page_detail";
        this.header = new header_1.Header(document.querySelector("header"), 1);
        this.getTopicDetailsRead().then(function (res) {
            // console.log(res,res);
            // 生成html模板
            var htmlStr = hbs({ re: res.re });
            _this.root.innerHTML = htmlStr;
            _this.header.enter(res.re);
        });
        _super.prototype.enter.call(this, parent);
    };
    // 基本信息
    PageDetail.prototype.getTopicDetailsRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/TopicDetailsRead", "htid=" + _this.params.id)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PageDetail;
}(page_1.Page));
exports.PageDetail = PageDetail;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stock\">\n    <h4>关联个股</h4>\n    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"stock_fix_list") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":20}}}) : helper)))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"detail\">\n    <h4>基本信息</h4>\n    <div class=\"detail_info\">\n        <div class=\"title\">标题:</div>\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p>\n    </div>\n    <div class=\"detail_info\">\n        <div class=\"title\">导语:</div>\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"lead") : stack1), depth0))
    + "</p>\n    </div>\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"stock_fix_list") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHome = void 0;
var page_1 = __webpack_require__(7);
var header_1 = __webpack_require__(12);
var category_1 = __webpack_require__(106);
__webpack_require__(111);
var PageHome = /** @class */ (function (_super) {
    __extends(PageHome, _super);
    function PageHome() {
        return _super.call(this) || this;
    }
    PageHome.prototype.enter = function () {
        (new header_1.Header(document.querySelector("header"), 2)).enter({});
        (new category_1.Category(document.getElementsByTagName("article")[0])).enter();
    };
    return PageHome;
}(page_1.Page));
exports.PageHome = PageHome;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Author: ycao
 * @Desc: 双向联动锚点列表
 * @Date: 2020-04-23 10:36:44
 * @Last Modified by: ycao
 * @Last Modified time: 2021-01-05 19:10:53
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var bridge_1 = __webpack_require__(2);
var net_1 = __webpack_require__(5);
var user_1 = __webpack_require__(8);
var router_1 = __webpack_require__(10);
__webpack_require__(107);
var hbs = __webpack_require__(108);
var topicBoxHbs = __webpack_require__(109);
var emptyHbs = __webpack_require__(110);
var Category = /** @class */ (function () {
    function Category(root) {
        this.root = root;
        this.flag = false;
        this.recommendList = [];
        this.categoryLlist = [];
        this.topicList = [];
        this.categoryName = "";
        this.categoryId = "";
        this.categoryIndex = "";
        this.p = 1;
        this.start = 1;
        this.count = 0;
        this.lock = false;
    }
    Category.prototype.enter = function () {
        var _this = this;
        Promise.all([this.getHomePageListRead(), this.getCategorySortListRead()]).then(function (res) {
            if (res) {
                if (res[0].re.length > 0) {
                    _this.start += res[0].re.length;
                    res[1].re.unshift({
                        id: -1,
                        name: "推荐"
                    });
                }
                // 插入我的关注类目
                res[1].re.push({
                    id: res[1].re.length,
                    name: "我的关注"
                });
                _this.count = res[0].count;
                _this.recommendList = res[0].re;
                _this.categoryLlist = res[1].re;
                // this.categoryName = (res[1].re[0] as any).name;
                _this.categoryName = "热门话题";
                _this.categoryId = res[1].re[0].id;
                _this.categoryIndex = '0';
                _this.root.innerHTML = hbs({ categoryLlist: res[1].re, categoryName: _this.categoryName });
                // this.enter();
                _this.root.querySelector("#topic_list").insertAdjacentHTML('beforeend', topicBoxHbs({ topicList: _this.recommendList }));
                _this.bind();
            }
        }, function (err) {
            // console.log(err)
        });
    };
    Category.prototype.bind = function () {
        var _this = this;
        this.navbar = this.root.querySelectorAll('.category_navbar li');
        for (var j = 0; j < this.navbar.length; j++) {
            this.navbar[j].onclick = function (item) {
                _this.handleClick(item);
            };
        }
        this.root.querySelector(".category_wrap").onscroll = function (event) {
            var scrollHeight = event.target.scrollHeight;
            var scrollTop = event.target.scrollTop;
            var clientHeight = event.target.clientHeight;
            if (scrollHeight <= scrollTop + clientHeight) {
                _this.handleScroll(_this.categoryId, _this.categoryIndex);
            }
        };
        this.root.querySelectorAll("#topic_list a").forEach(function (item) {
            item.onclick = function (event) {
                var id = event.currentTarget.dataset.id;
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Jump(window.location.origin + "/list?id=" + id, true);
                }
                else {
                    router_1.router.navigate("/list?id=" + id);
                }
            };
        });
    };
    Category.prototype.handleScroll = function (categoryId, categoryIndex) {
        var _this = this;
        // console.log(`当前栏目 ${categoryId}`)
        if (this.start > this.count) {
            // console.log(`第${categoryId}个栏目，this.start ${this.start}, this.count ${this.count}`)
            return;
        }
        if (this.lock) {
            return;
        }
        this.lock = true;
        if (categoryId == "-1") {
            this.getHomePageListRead(this.start).then(function (res) {
                _this.count = res.count;
                if (res.re.length > 0) {
                    _this.start += res.re.length;
                    _this.topicList = _this.topicList.concat(res.re);
                    _this.root.querySelector("#topic_list").insertAdjacentHTML('beforeend', topicBoxHbs({ topicList: res.re }));
                    _this.bind();
                    _this.lock = false;
                }
            });
        }
        else if (parseInt(categoryIndex) + 1 == this.categoryLlist.length) {
            this.getCRead().then(function (res) {
                if (res.re.length > 0) {
                    _this.start += res.re.length;
                    _this.topicList = _this.topicList.concat(res.re);
                    _this.root.querySelector("#topic_list").insertAdjacentHTML('beforeend', topicBoxHbs({ topicList: res.re }));
                    _this.bind();
                    _this.lock = false;
                }
            });
        }
        else {
            this.p += 1;
            this.getCategoryTopicListRead(categoryId).then(function (res) {
                _this.count = res.count;
                if (res.re.length > 0) {
                    _this.start += res.re.length;
                    _this.topicList = _this.topicList.concat(res.re);
                    _this.root.querySelector("#topic_list").insertAdjacentHTML('beforeend', topicBoxHbs({ topicList: res.re }));
                    _this.bind();
                    _this.lock = false;
                }
            });
        }
    };
    Category.prototype.handleClick = function (event) {
        var _this = this;
        var cid = event.target.dataset.id;
        var cindex = event.target.dataset.index;
        var categoryName = event.target.innerText;
        // console.log(cid,cindex,categoryName,this.categoryLlist.length);
        if (cid == "-1") {
            this.start = 1;
            this.count = 0;
            this.getHomePageListRead().then(function (res) {
                _this.categoryId = cid;
                _this.categoryIndex = cindex;
                _this.categoryName = categoryName;
                _this.root.querySelector("#topic_list").innerHTML = "";
                _this.topicList = res.re;
                _this.count = res.count;
                _this.start = res.re.length + 1;
                _this.root.querySelector("#topic_list").innerHTML = topicBoxHbs({ topicList: _this.topicList });
                _this.setTitle(_this.categoryName);
                _this.toggleClass(parseInt(event.target.dataset.index));
                _this.bind();
            });
        }
        else if (parseInt(cindex) + 1 == this.categoryLlist.length) {
            user_1.user.checkLogin(function () {
                if (!user_1.user.isLogin()) {
                    user_1.user.login();
                    return;
                }
                else {
                    _this.start = 1;
                    _this.count = 0;
                    _this.getCRead().then(function (res) {
                        _this.categoryId = cid;
                        _this.categoryIndex = cindex;
                        _this.categoryName = categoryName;
                        _this.root.querySelector("#topic_list").innerHTML = "";
                        _this.topicList = res.re;
                        _this.count = res.count;
                        _this.start = res.re.length + 1;
                        _this.root.querySelector("#topic_list").innerHTML = topicBoxHbs({ topicList: _this.topicList });
                        if (_this.start == 1 && res.count == 0) {
                            _this.root.querySelector("#topic_list").innerHTML = emptyHbs({});
                        }
                        _this.setTitle(_this.categoryName);
                        _this.toggleClass(parseInt(event.target.dataset.index));
                        _this.bind();
                    }).catch(function (err) {
                        // alert(JSON.stringify(err));
                    });
                }
            });
        }
        else {
            this.start = 1;
            this.count = 0;
            this.p = 1;
            this.getCategoryTopicListRead(cid).then(function (res) {
                _this.categoryId = cid;
                _this.categoryIndex = cindex;
                _this.categoryName = categoryName;
                _this.root.querySelector("#topic_list").innerHTML = "";
                _this.topicList = res.re;
                _this.count = res.count;
                _this.start = res.re.length + 1;
                _this.root.querySelector("#topic_list").innerHTML = topicBoxHbs({ topicList: _this.topicList });
                _this.setTitle(_this.categoryName);
                _this.toggleClass(parseInt(event.target.dataset.index));
                _this.bind();
            });
        }
    };
    Category.prototype.setTitle = function (title) {
        this.root.querySelector("#topic_title").innerHTML = title == "推荐" ? "热门话题" : title;
    };
    Category.prototype.toggleClass = function (index) {
        for (var i = 0; i < this.navbar.length; i++) {
            this.navbar[i].classList.remove("on");
        }
        this.navbar[index].classList.add("on");
    };
    // 获取我关注的话题
    Category.prototype.getCRead = function (start) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/CRead", "start=" + (start ? start : _this.start) + "&offset=20&type=1")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取栏目
    Category.prototype.getCategorySortListRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/CategorySortListRead", "p=" + _this.p + "&ps=40")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取推荐栏目
    Category.prototype.getHomePageListRead = function (start) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/HomePageListRead", "start=" + (start ? start : _this.start) + "&offset=20")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取栏目下话题
    Category.prototype.getCategoryTopicListRead = function (cid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/topic/CategoryTopicListRead", "cid=" + cid + "&p=" + _this.p + "&ps=20")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return Category;
}());
exports.Category = Category;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\""
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(data && lookupProperty(data,"index")),0,{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":54}}})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" data-index=\""
    + alias3(alias2((data && lookupProperty(data,"index")), depth0))
    + "\">\n                "
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),"港美专题",{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":25},"end":{"line":7,"column":88}}})) != null ? stack1 : "")
    + "\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "on";
},"4":function(container,depth0,helpers,partials,data) {
    return "<em class=\"icon icon_new\"></em>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"category_container\" id=\"category_container\">\n\n    <div class=\"category_navbar\">\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"categoryLlist") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":9,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n\n    <div class=\"category_wrap\">\n        <ul>\n            <li>\n                <div class=\"title\" id=\"topic_title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"categoryName") : depth0), depth0))
    + "</div>\n                <div class=\"topic\" id=\"topic_list\"></div>\n            </li>\n        </ul>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"javascript:void(0);\" data-id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n    <div class=\"topic_box\">\n        <img src=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"img") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":18},"end":{"line":4,"column":64}}})) != null ? stack1 : "")
    + "\" alt=\"\" class=\"topic_banner\">\n        <span>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":61}}})) != null ? stack1 : "")
    + "<br />\n            <span class=\"tl_num\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"postNumber") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":11,"column":23}}})) != null ? stack1 : "")
    + "            </span></span>\n    </div>\n</a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"img") : depth0), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"squareImg") : depth0), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + container.escapeExpression(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":44}}}))
    + " 讨论\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"participantCount") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":84}}})) != null ? stack1 : "")
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(__default(__webpack_require__(6)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"participantCount") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":74}}}))
    + " 讨论";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"topicList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":16,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"empty\">\n    <em class=\"icon icon_blank\"></em>\n    <p>暂无关注</p>\n</div>";
},"useData":true});

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageVoteInfo = void 0;
var page_1 = __webpack_require__(7);
var header_1 = __webpack_require__(12);
var net_1 = __webpack_require__(5);
var user_1 = __webpack_require__(8);
var bubble_1 = __webpack_require__(18);
var router_1 = __webpack_require__(10);
var util_1 = __webpack_require__(13);
var bridge_1 = __webpack_require__(2);
__webpack_require__(113);
var hbs = __webpack_require__(114);
var PageVoteInfo = /** @class */ (function (_super) {
    __extends(PageVoteInfo, _super);
    function PageVoteInfo() {
        return _super.call(this) || this;
    }
    PageVoteInfo.prototype.enter = function (parent) {
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_vote_info";
        this.root.className = "page_vote_info";
        this.header = new header_1.Header(document.querySelector("header"), 4);
        this.getVoteInfoRead().then(function (res) {
            // console.log(res,res);
            _this.res = res;
            if (_this.res.re[0].voteFlag) { // 投了跳结果页面
                router_1.router.replace("/voteResult?id=" + _this.params.id + "&vid=" + _this.params.vid);
            }
            // 生成html模板
            var htmlStr = hbs({ re: res.re[0] });
            _this.root.innerHTML = htmlStr;
            _this.header.enter(res.re[0]);
            _this.header.setShare(res.re[0].title, "\u6211\u53C2\u4E0E\u4E86\u8BDD\u9898#" + res.re[0].voteTopicEntity.T_Name + "# \u53D1\u8D77\u7684\u6295\u7968\u3010" + res.re[0].title + "\u3011\uFF0C\u4F60\u4E5F\u5FEB\u6765\u53C2\u4E0E\u5427~");
            _this.bind();
        });
        _super.prototype.enter.call(this, parent);
        // setTimeout(()=>{
        //     document.querySelectorAll(".icon").forEach(item => {
        //         (item as HTMLDivElement).style.zoom = (window.screen.width/750)+"";
        //     });
        // },500)
    };
    PageVoteInfo.prototype.bind = function () {
        var _this = this;
        this.setEndTime();
        this.root.querySelector(".vote_btn").onclick = function () {
            user_1.user.checkLogin(function () {
                if (!user_1.user.isLogin()) {
                    user_1.user.login();
                    return;
                }
                var inputs = _this.root.querySelectorAll("input[name=vote]:checked");
                var arr = [];
                inputs.forEach(function (item) {
                    arr.push(item.value);
                });
                // console.log("tou piao xuan xiang",arr)
                _this.setUserVote(arr.join(',')).then(function (res) {
                    (new bubble_1.Bubble(res.me)).enter();
                    router_1.router.replace("/voteResult?id=" + _this.params.id + "&vid=" + _this.params.vid);
                }).catch(function (err) {
                    (new bubble_1.Bubble(err.me)).enter();
                    if (err.me != "投票选项不能为空") {
                        router_1.router.replace("/voteResult?id=" + _this.params.id + "&vid=" + _this.params.vid);
                    }
                });
            });
        };
    };
    PageVoteInfo.prototype.setEndTime = function () {
        var _this = this;
        var now = new Date();
        var endtime = new Date(this.res.re[0].endTime);
        if (bridge_1.isIOS()) {
            var pos = navigator.userAgent.indexOf("CPU iPhone OS ");
            if (parseInt(navigator.userAgent.substr(pos + 14, 2)) < 14) {
                endtime.setHours(endtime.getHours() - 8);
            }
        }
        if (now.getTime() > (new Date(endtime)).getTime()) { // 已经结束
            (new bubble_1.Bubble("投票已结束")).enter();
            router_1.router.replace("/voteResult?id=" + this.params.id + "&vid=" + this.params.vid);
        }
        else {
            this.root.querySelector("#time").innerHTML = util_1.formatDateDiff(now, new Date(endtime));
        }
        setInterval(function () {
            now = new Date();
            if (now.getTime() > (new Date(endtime)).getTime()) { // 已经结束
                (new bubble_1.Bubble("投票已结束")).enter();
                router_1.router.replace("/voteResult?id=" + _this.params.id + "&vid=" + _this.params.vid);
            }
            else {
                _this.root.querySelector("#time").innerHTML = util_1.formatDateDiff(now, new Date(endtime));
            }
        }, 60000);
    };
    PageVoteInfo.prototype.setUserVote = function (optionList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopicopt/api/Topic/UserVote", "htid=" + _this.params.id + "&voteId=" + _this.params.vid + "&opt=1&optionList=" + optionList)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    PageVoteInfo.prototype.getVoteInfoRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/VoteInfoRead", "htid=" + _this.params.id + "&voteId=" + _this.params.vid)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PageVoteInfo;
}(page_1.Page));
exports.PageVoteInfo = PageVoteInfo;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "多选";
},"3":function(container,depth0,helpers,partials,data) {
    return "单选";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionList") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":27,"column":21}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\n                <div class=\"content\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "</div>\n                <input type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"re") : depths[1])) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":21,"column":29},"end":{"line":21,"column":75}}})) != null ? stack1 : "")
    + "\" name=\"vote\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"voId") : depth0), depth0))
    + "\" class=\"vote_option\">\n                <div class=\"radios "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"hasVoteFlag") : depth0), depth0))
    + "\">\n                    <em class=\"icon icon_checked_radio\"></em>\n                    <em class=\"icon icon_uncheck_radio\"></em>\n                </div>\n            </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"9":function(container,depth0,helpers,partials,data) {
    return "radio";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionList") : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":39,"column":21}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\n                <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"opImage") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\" class=\"option_img\">\n                <div class=\"content\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "</div>\n                <input type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"re") : depths[1])) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":29},"end":{"line":33,"column":75}}})) != null ? stack1 : "")
    + "\" name=\"vote\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"voId") : depth0), depth0))
    + "\" class=\"vote_option\">\n                <div class=\"radios "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"hasVoteFlag") : depth0), depth0))
    + "\">\n                    <em class=\"icon icon_checked_radio\"></em>\n                    <em class=\"icon icon_uncheck_radio\"></em>\n                </div>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vote_head\">\n    <div class=\"info\">\n        <div class=\"desc\">\n            <p class=\"title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</p>\n            <p class=\"from\"><span>东方财富网</span>&nbsp;发起&nbsp;剩余&nbsp;<span id=\"time\"></span></p>\n        </div>\n        <div class=\"num\">\n            <p>"
    + alias2(__default(__webpack_require__(6)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"startPersonNumber") : stack1),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":49}}}))
    + "</p>\n            <p>参与人数</p>\n        </div>\n    </div>\n    <p class=\"summary\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1), depth0))
    + "</p>\n</div>\n<div class=\"vote_body\">\n    <h4>投票选项<span class=\"type\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":31},"end":{"line":15,"column":65}}})) != null ? stack1 : "")
    + "</span></h4>\n    <ul class=\"options optionType"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionType") : stack1), depth0))
    + " voteFlag"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"voteFlag") : stack1), depth0))
    + "\">\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionType") : stack1),0,{"name":"equal","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":40,"column":18}}})) != null ? stack1 : "")
    + "    </ul>\n    <p class=\"tips\">此投票包含隐藏内容，投票后可见</p>\n</div>\n<div class=\"vote_footer\">\n    <a href=\"javascript:void(0);\" class=\"vote_btn\">投票</a>\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageVoteResult = void 0;
var page_1 = __webpack_require__(7);
var header_1 = __webpack_require__(12);
var net_1 = __webpack_require__(5);
__webpack_require__(116);
var hbs = __webpack_require__(117);
var PageVoteResult = /** @class */ (function (_super) {
    __extends(PageVoteResult, _super);
    function PageVoteResult() {
        return _super.call(this) || this;
    }
    PageVoteResult.prototype.enter = function (parent) {
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_vote_result";
        this.root.className = "page_vote_result";
        this.header = new header_1.Header(document.querySelector("header"), 4);
        this.getVoteInfoRead().then(function (res) {
            // console.log(res,res);
            // 生成html模板
            var htmlStr = hbs({ re: res.re[0] });
            _this.root.innerHTML = htmlStr;
            _this.header.enter(res.re[0]);
            _this.header.setShare(res.re[0].title, "\u6211\u53C2\u4E0E\u4E86\u8BDD\u9898#" + res.re[0].voteTopicEntity.T_Name + "# \u53D1\u8D77\u7684\u6295\u7968\u3010" + res.re[0].title + "\u3011\uFF0C\u4F60\u4E5F\u5FEB\u6765\u53C2\u4E0E\u5427~");
        });
        _super.prototype.enter.call(this, parent);
        // setTimeout(()=>{
        //     document.querySelectorAll(".icon").forEach(item => {
        //         (item as HTMLDivElement).style.zoom = (window.screen.width/750)+"";
        //     });
        // },500)
    };
    PageVoteResult.prototype.getVoteInfoRead = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/VoteInfoRead", "htid=" + _this.params.id + "&voteId=" + _this.params.vid)
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PageVoteResult;
}(page_1.Page));
exports.PageVoteResult = PageVoteResult;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "多选";
},"3":function(container,depth0,helpers,partials,data) {
    return "单选";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionList") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"hasVoteFlag_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"hasVoteFlag") : depth0), depth0))
    + "\">\n                <div class=\"content\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "</div>\n                <div class=\"data\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + " ("
    + alias2(__default(__webpack_require__(23)).call(alias3,(depth0 != null ? lookupProperty(depth0,"percent") : depth0),{"name":"convertPercent","hash":{},"data":data,"loc":{"start":{"line":21,"column":45},"end":{"line":21,"column":71}}}))
    + ")</div>\n                <em class=\"line\" style=\"width: "
    + alias2(__default(__webpack_require__(23)).call(alias3,(depth0 != null ? lookupProperty(depth0,"percent") : depth0),{"name":"convertPercent","hash":{},"data":data,"loc":{"start":{"line":22,"column":47},"end":{"line":22,"column":73}}}))
    + ";\"></em>\n            </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionList") : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":35,"column":21}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"hasVoteFlag_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"hasVoteFlag") : depth0), depth0))
    + "\">\n                <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"opImage") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\" class=\"option_img\">\n                <div class=\"result\">\n                    <div class=\"content\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "</div>\n                    <div class=\"data\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + " ("
    + alias2(__default(__webpack_require__(23)).call(alias3,(depth0 != null ? lookupProperty(depth0,"percent") : depth0),{"name":"convertPercent","hash":{},"data":data,"loc":{"start":{"line":31,"column":49},"end":{"line":31,"column":75}}}))
    + ")</div>\n                    <em class=\"line\" style=\"width: "
    + alias2(__default(__webpack_require__(23)).call(alias3,(depth0 != null ? lookupProperty(depth0,"percent") : depth0),{"name":"convertPercent","hash":{},"data":data,"loc":{"start":{"line":32,"column":51},"end":{"line":32,"column":77}}}))
    + ";\"></em>\n                </div>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vote_head\">\n    <div class=\"info\">\n        <div class=\"desc\">\n            <p class=\"title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</p>\n            <p class=\"from\"><span>东方财富网</span>&nbsp;发起&nbsp;结束时间&nbsp;<span id=\"time\">"
    + alias2(__default(__webpack_require__(118)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"endTime") : stack1),{"name":"formatVoteTime","hash":{},"data":data,"loc":{"start":{"line":5,"column":86},"end":{"line":5,"column":115}}}))
    + "</span></p>\n        </div>\n        <div class=\"num\">\n            <p>"
    + alias2(__default(__webpack_require__(6)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"startPersonNumber") : stack1),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":49}}}))
    + "</p>\n            <p>参与人数</p>\n        </div>\n    </div>\n    <p class=\"summary\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1), depth0))
    + "</p>\n</div>\n<div class=\"vote_body\">\n    <h4>投票选项<span class=\"type\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":31},"end":{"line":15,"column":65}}})) != null ? stack1 : "")
    + "</span></h4>\n    <ul class=\"options optionType"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionType") : stack1), depth0))
    + " voteFlag"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"voteFlag") : stack1), depth0))
    + "\">\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"optionType") : stack1),0,{"name":"equal","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":36,"column":18}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});

/***/ }),
/* 118 */
/***/ (function(module, exports) {

function padLeft(oriStr, len, alexin){
    var strlen = oriStr.toString().length;
    var str = "";
    
    if(strlen < len){
        for(var i=0;i<len-strlen;i++){
            str = str+alexin;
        }
    }
    str = str + oriStr;
    return str;
}

// module.exports = function(time){
//     let now = new Date();
//     let year = now.getFullYear();
//     let momth = now.getMonth()+1;
//     let date = now.getDate();

//     if(new Date(time).getTime() < now.getTime()){ //结束时间小于当前时间
//         return "已结束";
//     }

//     let yyyy = new Date(time).getFullYear();
//     let mm = padLeft((new Date(time).getMonth()+1), 2, '0');
//     let dd = padLeft((new Date(time).getDate()), 2, '0');
//     let hh = padLeft((new Date(time).getHours()), 2, '0');
//     let min = padLeft((new Date(time).getMinutes()), 2, '0');
//     let ss = padLeft((new Date(time).getSeconds()), 2, '0');
//     time = yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;

//     let reg = new RegExp(/(.+?)-(.+?)-(.+?) (.+?):(.+?):(.+?)/,'img');
//     let timeArr = time.replace(reg, "$1,$2,$3,$4,$5,$6").split(',');

//     if(year == Number(timeArr[0])){ // 今年
//         if(momth == Number(timeArr[1]) && date == Number(timeArr[2])){ // 今天
//         //   return `今天 ${timeArr[3]}:${timeArr[4]}`;
//             return "今天 "+timeArr[3]+":"+timeArr[4];
//         }else{
//         //   return `${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
//             return timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
//         }
//     }else{
//     //   return `${timeArr[0]}-${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
//         return timeArr[0]+"-"+timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
//     }
// }

function isIOS() {
    if (/(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

module.exports = function(time){

    var time2 = new Date(time);
    if(isIOS()){
        time2.setHours(time2.getHours() - 8);
    }

    var now = new Date();
    var year = now.getFullYear();
    var momth = now.getMonth()+1;
    var date = now.getDate();

    if(time2.getTime() < now.getTime()){
        return "已结束";
    }

    if(time.indexOf("T")>=0){
        time = time.replace(/T/g,' ');
    }
    
    var reg = new RegExp(/(.+?)-(.+?)-(.+?) (.+?):(.+?):(.+?)/,'img');
    var timeArr = time.replace(reg, "$1,$2,$3,$4,$5,$6").split(',');
  
    if(year == Number(timeArr[0])){ // 今年
        if(momth == Number(timeArr[1]) && date == Number(timeArr[2])){ // 今天
          //   return `今天 ${timeArr[3]}:${timeArr[4]}`;
            return "今天 "+timeArr[3]+":"+timeArr[4];
        }else{
          //   return `${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
            return timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
        }
    }else{
      //   return `${timeArr[0]}-${timeArr[1]}-${timeArr[2]} ${timeArr[3]}:${timeArr[4]}`;
        return timeArr[0]+"-"+timeArr[1]+"-"+timeArr[2]+" "+timeArr[3]+":"+timeArr[4];
    }
  }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageError = void 0;
var page_1 = __webpack_require__(7);
__webpack_require__(120);
var hbs = __webpack_require__(121);
var PageError = /** @class */ (function (_super) {
    __extends(PageError, _super);
    function PageError() {
        return _super.call(this) || this;
    }
    PageError.prototype.enter = function (parent) {
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_error";
        this.root.className = "page_error";
        this.root.innerHTML = hbs({});
        _super.prototype.enter.call(this, parent);
    };
    return PageError;
}(page_1.Page));
exports.PageError = PageError;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<em class=\"icon icon_error\"></em>\n<em class=\"icon icon_error_black\"></em>\n<p>很抱歉，您访问的内容不存在</p>";
},"useData":true});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDougu = void 0;
var countdown_1 = __webpack_require__(123);
var list_1 = __webpack_require__(126);
var stock_1 = __webpack_require__(132);
var header_1 = __webpack_require__(12);
var page_1 = __webpack_require__(7);
var award_1 = __webpack_require__(136);
var utils_1 = __webpack_require__(3);
var css = __webpack_require__(139);
var douguHBS = __webpack_require__(140);
var PageDougu = /** @class */ (function (_super) {
    __extends(PageDougu, _super);
    function PageDougu() {
        var _this = _super.call(this) || this;
        _this.tab = "1";
        return _this;
    }
    PageDougu.prototype.enter = function (parent) {
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_dougu";
        this.root.className = "page_dougu";
        /* 头部信息 */
        var headerEle = document.querySelector("header");
        this.header = new header_1.Header(headerEle, 5);
        this.header.enter({});
        this.header.setShare('【现金红包】参与话题赢千元现金红包', '斗股又出新玩法！主题斗股大赛燃情上线！ 参与主题讨论赢现金红包');
        setTimeout(function () {
            document.body.setAttribute("style", "background: #fff !important");
        }, 1000);
        utils_1.getDouguTopicDetailsRead().then(function (result) {
            _this.res = result;
            _this.root.innerHTML = douguHBS(_this.res);
            _super.prototype.enter.call(_this, parent);
            /* 奖励信息 */
            if (/\d{4,8}/.test(_this.res.re.ResultId)) { // 活动结束显示奖励页面
                var awardEle = document.body.querySelector("#dougu_award");
                var post_id = _this.res.re.ResultId;
                _this.award = new award_1.Award(awardEle, post_id);
                _this.award.enter();
            }
            _this.switchTab("1");
            _this.bind();
        }).catch(function (error) {
            // console.log(error);
        });
        setTimeout(function () {
            if (window.emtjLaunch) {
                window.emtjLaunch(119124316411);
            }
        }, 10);
    };
    PageDougu.prototype.switchTab = function (str) {
        switch (str) {
            case "1": // 最热
                this.root.querySelector(".list_tab").style.display = "flex";
                utils_1.switchToSocketList();
                var hot_list = this.root.querySelector("#hot_list");
                this.hot_list = new list_1.List(hot_list, this.params.id);
                this.hot_list.enter(1);
                break;
            case "2": // 最新
                this.root.querySelector(".list_tab").style.display = "flex";
                utils_1.switchToSocketList();
                var new_list = this.root.querySelector("#new_list");
                this.new_list = new list_1.List(new_list, this.params.id);
                this.new_list.enter(2);
                break;
            case "3": // 相关股票
                this.root.querySelector(".list_tab").style.display = "none";
                utils_1.switchToSocketList();
                var stock_list = this.root.querySelector("#stock_list");
                this.stock_list = new stock_1.Stock(stock_list, this.params.id);
                this.stock_list.enter();
                break;
            default:
                break;
        }
    };
    // 数据埋点
    PageDougu.prototype.bindDataPoint = function (tabNum) {
        var _this = this;
        // 切换的是最热、最新、相关股票的Tab
        var listEle; // 外层列表
        var lookUp; // 看涨
        var lookDown; // 看跌
        // num = 1 最热
        if (tabNum == 1) {
            setTimeout(function () {
                listEle = document.body.querySelectorAll('#hot_list ul li');
                if (listEle.length < 2)
                    return;
                lookUp = listEle[1];
                lookDown = listEle[2];
                lookUp.setAttribute('tracker-eventcode', "gbhty.dghtxqy.zrq.kd");
                lookUp.setAttribute('tracker-extinfo', "htId:" + _this.res.re.htid);
                lookDown.setAttribute('tracker-eventcode', "gbhty.dghtxqy.zrq.kk");
                lookDown.setAttribute('tracker-extinfo', "htId:" + _this.res.re.htid);
            });
        }
        // Num = 2 最新
        if (tabNum == 2) { // news
            setTimeout(function () {
                listEle = document.body.querySelectorAll('#new_list ul li');
                if (listEle.length < 3)
                    return;
                lookUp = listEle[1];
                lookDown = listEle[2];
                lookUp.setAttribute('tracker-eventcode', "gbhty.dghtxqy.zxl.kd");
                lookUp.setAttribute('tracker-extinfo', "htId:" + _this.res.re.htid);
                lookDown.setAttribute('tracker-eventcode', "gbhty.dghtxqy.zxl.kk");
                lookDown.setAttribute('tracker-extinfo', "htId:" + _this.res.re.htid);
            });
        }
    };
    PageDougu.prototype.bind = function () {
        var _this = this;
        // 倒计时
        var countDownEle = this.root.querySelector(".dougu_post");
        var countDown = new countdown_1.CountDown(countDownEle, this.res);
        countDown.enter();
        // 简介
        if (this.root.querySelector(".desc_text p").clientHeight < 20) {
            this.root.querySelector(".desc_text").className = "desc_text ";
            this.root.querySelector(".fold").className = "fold ";
        }
        ;
        this.root.querySelector(".fold").onclick = function () {
            if (_this.root.querySelector(".fold").className == "fold") {
                _this.root.querySelector(".desc_text").className = "desc_text up";
                _this.root.querySelector(".fold").className = "fold up";
            }
            else {
                _this.root.querySelector(".desc_text").className = "desc_text";
                _this.root.querySelector(".fold").className = "fold";
            }
        };
        this.bindDataPoint(1); // 初始加载 加载最热
        // 点击切换tab 最新 最热 相关股票
        this.root.querySelectorAll(".tab > li").forEach(function (element) {
            element.onclick = function (ele) {
                var tab_num = ele.currentTarget.dataset.tab_num;
                _this.tab = tab_num;
                var digtalNum = Number(tab_num);
                if (digtalNum === 1 || digtalNum === 2) {
                    _this.bindDataPoint(digtalNum);
                }
                _this.root.querySelectorAll(".tab > li")[0].className = "";
                _this.root.querySelectorAll(".tab > li")[1].className = "";
                _this.root.querySelectorAll(".tab > li")[2].className = "";
                ele.currentTarget.className = "active";
                _this.hot_list && _this.hot_list.hide();
                _this.new_list && _this.new_list.hide();
                _this.stock_list && _this.stock_list.hide();
                _this.switchTab(tab_num);
            };
        });
        var douguRuleIcon = this.root.querySelector('#enter_rule');
        douguRuleIcon.onclick = function () {
            var href = window.location.origin + ("/mtopic2020/dougurule?id=" + utils_1.queryId());
            window.location.href = href;
        };
        this.bindToogle();
    };
    PageDougu.prototype.bindToogle = function () {
        var _this = this;
        var togEle = this.root.querySelector("#toggle_btn");
        this.initToggleWrapper();
        togEle.addEventListener("click", function (e) {
            _this.initToggleWrapper();
        });
    };
    PageDougu.prototype.initToggleWrapper = function () {
        var togEle = this.root.querySelector("#toggle_btn");
        var iftoggle = togEle.dataset.iftoggle;
        if (iftoggle === "true") { // 如果已经展开，则收起
            togEle.querySelector(".fold_btn").style.display = "flex";
            togEle.querySelector(".unfold_btn").style.display = "none";
            togEle.dataset.iftoggle = "false";
        }
        else { // 如果还没有展开，则展开
            togEle.querySelector(".fold_btn").style.display = "none";
            togEle.querySelector(".unfold_btn").style.display = "flex";
            togEle.dataset.iftoggle = "true";
        }
    };
    return PageDougu;
}(page_1.Page));
exports.PageDougu = PageDougu;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDown = void 0;
var bridge_1 = __webpack_require__(2);
var util_1 = __webpack_require__(13);
var ComponseBaseClass_1 = __webpack_require__(24);
var css = __webpack_require__(124);
var hbs = __webpack_require__(125);
var timer = null;
var CountDown = /** @class */ (function (_super) {
    __extends(CountDown, _super);
    function CountDown(root, res) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.res = res;
        return _this;
    }
    CountDown.prototype.enter = function () {
        var _this = this;
        this.renderTime();
        timer = setInterval(function () {
            _this.renderTime();
        }, 1000);
    };
    CountDown.prototype.bind = function () {
        if (this.root.querySelector(".djcs_btn")) {
            this.root.querySelector(".djcs_btn").onclick = function () {
                if (bridge_1.isHybrid()) {
                    bridge_1.douGuPost();
                }
                else {
                    window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href);
                }
            };
        }
        if (this.root.querySelector(".cytl_btn")) {
            this.root.querySelector(".cytl_btn").onclick = function () {
                if (bridge_1.isHybrid()) {
                    bridge_1.douGuPost();
                }
                else {
                    window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href);
                }
            };
        }
    };
    CountDown.prototype.renderTime = function () {
        var endTime = this.res.re.EndTime.replace(/-/g, '/');
        endTime = new Date(endTime);
        var startTime = this.res.re.StartTime.replace(/-/g, '/');
        startTime = new Date(startTime);
        var nowTime = new Date();
        // console.log(`开始日期：${startTime.toLocaleDateString()}结束日期：${endTime.toLocaleDateString()}`);
        if (nowTime < startTime) { // 活动未开始
            timer && clearInterval(timer);
            this.root.innerHTML = hbs({ type: 0 });
        }
        else if (nowTime < endTime && nowTime > startTime) { // 活动进行中
            var diffTime = endTime.getTime() - nowTime.getTime();
            var d = Math.floor(diffTime / 1000 / 60 / 60 / 24), dd = util_1.padLeft(d, 2, '0'), h = Math.floor((diffTime - d * 1000 * 60 * 60 * 24) / 1000 / 60 / 60), hh = util_1.padLeft(h, 2, '0'), m = Math.floor((diffTime - d * 1000 * 60 * 60 * 24 - h * 1000 * 60 * 60) / 1000 / 60), mm = util_1.padLeft(m, 2, '0'), s = Math.floor((diffTime - d * 1000 * 60 * 60 * 24 - h * 1000 * 60 * 60 - m * 1000 * 60) / 1000), ss = util_1.padLeft(s, 2, '0');
            this.root.innerHTML = hbs({
                type: 1,
                time: {
                    d1: dd[0],
                    d2: dd[1],
                    h1: hh[0],
                    h2: hh[1],
                    m1: mm[0],
                    m2: mm[1],
                    s1: ss[0],
                    s2: ss[1],
                }
            });
        }
        else if (nowTime > endTime) {
            timer && clearInterval(timer);
            this.root.innerHTML = hbs({ type: 2 });
        }
        this.bind();
    };
    CountDown.prototype.hide = function () { };
    return CountDown;
}(ComponseBaseClass_1.Component));
exports.CountDown = CountDown;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cytl\">\n    <p class=\"end_tip\" style=\"font-weight: bold;\">活动即将开始，敬请期待</p>\n    <a class=\"cytl_btn\">参与讨论</a>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"djcs\">\n    <div class=\"countdown\">\n        <em class=\"icon icon_alarm_clock\"></em>\n        活动倒计时 \n        <span id=\"countdown_time\">\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"d1") : stack1), depth0))
    + "</span>\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"d2") : stack1), depth0))
    + "</span>天\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"h1") : stack1), depth0))
    + "</span>\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"h2") : stack1), depth0))
    + "</span>时\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"m1") : stack1), depth0))
    + "</span>\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"m2") : stack1), depth0))
    + "</span>分\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"s1") : stack1), depth0))
    + "</span>\n            <span class=\"time\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? lookupProperty(stack1,"s2") : stack1), depth0))
    + "</span>秒\n        </span>\n    </div>\n    <a class=\"djcs_btn\" tracker-eventcode=\"gbhty.dghtxqy.db.ljcs\" tracker-extinfo=\"htId:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\">点击参赛</a>\n</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cytl\">\n    <p class=\"end_tip\" style=\"font-weight: bold;\">活动已结束</p>\n    <a class=\"cytl_btn\" style=\"font-weight: bold;\" >参与讨论</a>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),0,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),1,{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":25,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),2,{"name":"equal","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":31,"column":10}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var bubble_1 = __webpack_require__(18);
var bridge_1 = __webpack_require__(2);
var user_1 = __webpack_require__(8);
var ComponseBaseClass_1 = __webpack_require__(24);
var utils_1 = __webpack_require__(3);
var css = __webpack_require__(127);
var listHbs = __webpack_require__(128);
var itemHbs = __webpack_require__(129);
var blankHBS = __webpack_require__(131);
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(root, id) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.type = 1; // 1 最热 2 最新
        _this.ures = [];
        _this.page = 1;
        _this.tabNum = 0;
        _this.currentCount = 0;
        _this.reminder = 0;
        return _this;
    }
    // 进入页面加载请求，绑定事件
    List.prototype.enter = function (type) {
        var _this = this;
        if (type === void 0) { type = 1; }
        this.type = type == 1 ? 1 : 2;
        this.root.innerHTML = listHbs({});
        var body = document.body.querySelector("#body");
        this.execBtnFunc(body);
        switch (this.type) {
            case 1: // 获取最热榜单列表
                utils_1.fmtRequestData(0).then(function (res) {
                    _this.proceessRes(res);
                }).catch(function (error) {
                    // console.log("无数据 or  失败") 
                });
                break;
            case 2: // 最新榜单列表
                utils_1.fmtRequestData(1).then(function (res) {
                    _this.proceessRes(res);
                }).catch(function (error) {
                    // console.log("无数据 or  失败") 
                });
                break;
            default:
                break;
        }
        ;
    };
    // 到达列表底部，加载下一页
    List.prototype.execBtnFunc = function (Element) {
        var _this = this;
        this.page += 1;
        var flag = true;
        var waitTime = 2000;
        Element.addEventListener('scroll', function (e) {
            var scrollHeight = e.target.scrollHeight; // 内容总高度
            var clientHeight = e.target.clientHeight; // 内容可是区域的高度
            var scrollTop = e.target.scrollTop; // 滚动条在Y轴滚动的距离
            if (scrollHeight - 5 <= clientHeight + scrollTop && flag) { // 到达底部
                utils_1.fmtRequestData((_this.type - 1), String(_this.tabNum), _this.page).then(function (res) {
                    _this.addNextPageData(res);
                    _this.bind();
                    utils_1.stickyTab();
                });
                flag = false;
                setTimeout(function () {
                    flag = true;
                }, waitTime);
            }
        });
    };
    // 处理请求到的列表结果
    List.prototype.proceessRes = function (obj) {
        var _this = this;
        utils_1.showWarning(false);
        var res = obj.re;
        this.count = obj.count;
        this.reminder = this.count - res.length;
        // 每一次切换标签或者Tab的时候清空
        this.postObj = {};
        var e = this.root.querySelector(".list");
        if (res.length == 0) {
            e.innerHTML = blankHBS();
        }
        else {
            e.innerHTML = itemHbs({ res: res });
            utils_1.showWarning(true);
        }
        res.forEach(function (item) {
            _this.postObj[item.post_id] = "exist";
        });
        this.ures = res;
        this.bind();
        utils_1.stickyTab();
        setInterval(function () {
            _this.bindIconShare();
        }, 1000);
    };
    // 下拉请求和结果过滤
    List.prototype.addNextPageData = function (obj) {
        var _this = this;
        var res = obj.re;
        this.currentCount = res.length + this.currentCount;
        this.reminder = this.count - this.ures.length;
        if (res.length === 0) {
            return;
        }
        // res 查重
        res.forEach(function (item, index) {
            var itemPostId = item.post_id;
            if (_this.postObj[itemPostId]) {
                res.splice(index, 1);
            }
            else {
                _this.postObj[itemPostId] = "exist";
            }
        });
        if (res.length === 0)
            return;
        var e = this.root.querySelector(".list");
        e.insertAdjacentHTML("beforeend", itemHbs({ res: res }));
    };
    // 判断价格是否合法
    List.prototype.isLegalNum = function (n) {
        if (!isNaN(n) && n != 0) {
            return true;
        }
        else {
            return false;
        }
    };
    // 样式绑定 看涨 看跌 平仓 置顶 添加全文  
    List.prototype.iconModify = function () {
        var _this = this;
        var elist = this.root.querySelectorAll(".list .item .rate");
        elist.forEach(function (el) {
            var post_id = el.dataset.post_id;
            for (var _i = 0, _a = _this.ures; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.post_id == post_id) {
                    var UpIcon = "icon icon_rate_up";
                    var DownIcon = "icon icon_rate_down";
                    // 判断是否拿到合法的价格 x.x or x 排除 0
                    var isRealPrice = void 0;
                    if (item.close_position_status == 1) { // 平仓
                        isRealPrice = _this.isLegalNum(item.post_start_price) && _this.isLegalNum(item.close_position_price) && _this.isLegalNum(item.qcode);
                    }
                    else {
                        isRealPrice = _this.isLegalNum(item.post_start_price) && _this.isLegalNum(item.f2) && _this.isLegalNum(item.qcode);
                    }
                    /* 起始价  post_start_price
                     * 平仓价  close_position_price
                     * 最新价  item.f2
                     */
                    var rate = void 0;
                    if (isRealPrice) {
                        // 未平仓：rate = (最新价-起始价)/起始价 * 100%
                        if (item.close_position_status != 1) {
                            rate = ((item.f2 - item.post_start_price) * 100 / item.post_start_price).toFixed(2);
                        }
                        else {
                            // 已平仓： rate = (平仓价-起始价)/起始价 * 100%
                            rate = ((item.close_position_price - item.post_start_price) * 100 / item.post_start_price).toFixed(2);
                        }
                        if (Number(rate) > 0) {
                            el.querySelector(".rate_num").innerHTML = "+" + rate + "%";
                            el.querySelector(".rate_num").className = "rate_num up";
                        }
                        else {
                            el.querySelector(".rate_num").innerHTML = rate + "%";
                            el.querySelector(".rate_num").className = "rate_num down";
                        }
                        // 平仓看多
                        if (item.bullish_bearish_tag == 0 && item.bullish_bearish_tag_bak == 1) {
                            el.querySelector("em").className = UpIcon;
                            continue;
                        }
                        // 平仓看空
                        if (item.bullish_bearish_tag == 0 && item.bullish_bearish_tag_bak == 2) {
                            el.querySelector("em").className = DownIcon;
                            continue;
                        }
                        // 看多 
                        if (item.bullish_bearish_tag == 1) {
                            el.querySelector("em").className = UpIcon;
                            continue;
                        }
                        // 看空
                        if (item.bullish_bearish_tag == 2) {
                            el.querySelector("em").className = DownIcon;
                            continue;
                        }
                    }
                    else {
                        el.querySelector(".rate_num").innerHTML = "--";
                    }
                }
            }
        });
        // 添加...全文
        this.root.querySelectorAll(".list .content").forEach(function (element) {
            if (element.innerHTML.length > 40 && element.offsetHeight < element.children[0].offsetHeight) {
                element.innerHTML += "<span class=\"ellipsis\"><span>...\u5168\u6587</span></span>";
            }
        });
    };
    // 点击事件，Tab标签切换
    List.prototype.bindClickTabEvt = function () {
        var _this = this;
        document.querySelectorAll(".list_tab > li").forEach(function (element) {
            element.onclick = function (ele) {
                utils_1.showWarning(false);
                var list_tab_num = ele.currentTarget.dataset.list_tab_num;
                _this.tabNum = parseInt(list_tab_num);
                document.querySelectorAll(".list_tab > li")[0].className = "";
                document.querySelectorAll(".list_tab > li")[1].className = "";
                document.querySelectorAll(".list_tab > li")[2].className = "";
                ele.currentTarget.className = "active";
                _this.root.querySelector(".list").innerHTML = "";
                switch (_this.type) {
                    case 1: // 最热
                        utils_1.fmtRequestData(0, list_tab_num).then(function (res) {
                            _this.proceessRes(res);
                            _this.bind();
                        }).catch(function (error) {
                            //  console.log("无数据 or  失败") 
                        });
                        break;
                    case 2: // 最新
                        utils_1.fmtRequestData(1, list_tab_num).then(function (res) {
                            _this.proceessRes(res);
                            _this.bind();
                        }).catch(function (error) {
                            // console.log("无数据 or  失败") 
                        });
                        break;
                    default:
                }
            };
        });
    };
    // 点击跳转，进入用户中心
    List.prototype.bindClickUserEvt = function () {
        this.root.querySelectorAll(".list .item .userinfo").forEach(function (element) {
            element.onclick = function () {
                var u_id = element.dataset.u_id;
                utils_1.linkJump(function () {
                    bridge_1.jumpToUser(u_id);
                });
            };
        });
    };
    // 点击跳转RN页面
    List.prototype.bindRNPageEvt = function () {
        this.root.querySelectorAll(".list .item .rate .sotckname").forEach(function (element) {
            element.onclick = function () {
                var stockbar_inner_code = element.dataset.code;
                var stockbar_exchange = Number(element.dataset.stockbar_exchange);
                var stockbar_name = element.dataset.stockbar_name;
                var code = "";
                // console.log('跳转到RN页面', element);
                switch (stockbar_exchange) {
                    case 0:
                        code = stockbar_inner_code + ".SZ";
                        break;
                    case 1:
                        code = stockbar_inner_code + ".SH";
                        break;
                    case 105:
                        code = stockbar_inner_code + ".NASDAQ";
                        break;
                    case 106:
                        code = stockbar_inner_code + ".NYSE";
                        break;
                    case 107:
                        code = stockbar_inner_code + ".AMEX";
                        break;
                    case 116:
                        code = stockbar_inner_code + ".HK";
                        break;
                    default:
                        break;
                }
                utils_1.linkJump(function () {
                    bridge_1.emH5ToStock_byList(code, stockbar_name);
                });
            };
        });
    };
    List.prototype.bindJumpToArticleEvt = function () {
        this.jumpToArticle(".list .item .main");
        this.jumpToArticle(".list .item .rate .text-wrapper");
    };
    // 点击跳转正文 
    List.prototype.jumpToArticle = function (el) {
        this.root.querySelectorAll(el).forEach(function (element) {
            element.onclick = function () {
                var post_id = element.dataset.post_id;
                utils_1.linkJump(function () {
                    bridge_1.jumpToDG(post_id, 61, 0);
                });
            };
        });
    };
    // 分享
    List.prototype.bindIconShare = function () {
        this.root.querySelectorAll(".list .item .icon_dougu_share").forEach(function (item) {
            item.onclick = function () {
                var parentNode = item.parentNode;
                parentNode.dataset.flag = '1';
                var desc = parentNode.dataset.desc ? parentNode.dataset.desc : "";
                var title = parentNode.dataset.title ? parentNode.dataset.title : "";
                var postid = parentNode.dataset.postid ? parentNode.dataset.postid : "0";
                var frombar = parentNode.dataset.frombar ? parentNode.dataset.frombar : "";
                var stockcode = parentNode.dataset.stockcode ? parentNode.dataset.stockcode : "";
                if (!title) {
                    title = desc;
                }
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Share({
                        "type": "weixin,pengyouquan,qq,qzone,weibo",
                        "img": "https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png",
                        "title": (title.length > 40 ? (title.substring(0, 40) + '...') : title) + "_" + frombar + "(" + stockcode + ")\u80A1\u5427_\u4E1C\u65B9\u8D22\u5BCC\u7F51\u80A1\u5427",
                        "url": "https://vipmoney.eastmoney.com/collect/dougu/pages/article/detail_share.html?id=" + postid,
                        "desc": desc
                    });
                }
                else {
                    // console.log("分享按钮");
                    window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href);
                }
            };
        });
    };
    // 评论
    List.prototype.bindIconComment = function () {
        this.root.querySelectorAll(".list .item .comment").forEach(function (element) {
            element.onclick = function (e) {
                var post_id = element.dataset.post_id;
                var reply_count = element.dataset.reply_count;
                utils_1.linkJump(function () {
                    user_1.user.checkLogin(function () {
                        if (!user_1.user.isLogin()) {
                            user_1.user.login();
                            return;
                        }
                        // jumpToDG(post_id, 61);
                        bridge_1.jumpToPost(post_id, '', 61, 1);
                        // postid: string, third_id: string = "", type: number = 0, tocomment: number = 0
                    });
                });
            };
        });
    };
    // 点赞
    List.prototype.bindIconLike = function () {
        // 点赞
        /* 1. 获取dataset中的post_is_like，改数值用于判断当前用户是否点赞；如果为false，则说明用户没有点赞，true说明用户已经点赞
         * 2. 将post_is_like反转，意思是 用户未点赞，此时点击like变为已经点赞，则为true，将true值传入到服务器，如果后端正常响应，则继续接下来的操作
         * 3. 若用户点赞，post_is_like 取反为true，并写入到like的dataset；将弹出框的消息设置为点赞成功；将点赞数+1并写入到dataset和展示到html；将点赞效果设置为true
         */
        this.root.querySelectorAll(".list .item .operate .like").forEach(function (element) {
            element.onclick = function () {
                var post_id = element.dataset.post_id;
                var like_count = element.dataset.like_count;
                var post_is_like = element.dataset.post_is_like == "false" ? true : false;
                utils_1.linkJump(function () {
                    user_1.user.checkLogin(function () {
                        if (!user_1.user.isLogin()) {
                            user_1.user.login();
                            // console.log("未登录");
                            return;
                        }
                        utils_1.handleLike(post_is_like, post_id).then(function (res) {
                            // alert(post_is_like)
                            element.dataset.post_is_like = String(post_is_like);
                            (new bubble_1.Bubble(post_is_like ? '点赞成功' : '取消点赞成功')).enter();
                            if (post_is_like) {
                                like_count = Number(like_count) + 1;
                                like_count <= 0 ? like_count = '' : null;
                                element.className = "like true";
                                element.dataset.like_count = like_count;
                                element.querySelector(".like_count").innerHTML = like_count;
                            }
                            else {
                                like_count = Number(like_count) - 1;
                                like_count <= 0 ? like_count = '' : null;
                                element.className = "like false";
                                element.dataset.like_count = like_count;
                                element.querySelector(".like_count").innerHTML = like_count;
                            }
                        }).catch(function (err) {
                            // console.log(err);
                        });
                    });
                });
            };
        });
    };
    // 页面事件绑定
    List.prototype.bind = function () {
        this.iconModify();
        this.bindClickTabEvt();
        this.bindClickUserEvt();
        this.bindRNPageEvt();
        this.bindJumpToArticleEvt();
        this.bindIconShare();
        this.bindIconComment();
        this.bindIconLike();
    };
    List.prototype.hide = function () {
        this.root.innerHTML = "";
    };
    return List;
}(ComponseBaseClass_1.Component));
exports.List = List;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<div class=\"list\">\n\n</div>\n\n<div class=\"warning\" id=\"warning\" style=\"display: none;\">\n    <div class=\"text\">\n        声明：用户发表的所有文章仅代表其个人观点，与东方财富的立场无关，据此操作，风险自担。\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\">\n    <div class=\"userinfo\" data-u_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"u_id") : depth0), depth0))
    + "\" tracker-eventcode=\"gbhty.dghtxqy.wzl.tx\" tracker-extinfo=\"htid:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"u_avatar") : depth0), depth0))
    + "\" alt=\"\" class=\"avator\">\n        <div class=\"info\">\n            <p class=\"username\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"u_nickname") : depth0), depth0))
    + "</p>\n            <p class=\"display_time\">发布于 "
    + alias2(__default(__webpack_require__(130)).call(alias3,(depth0 != null ? lookupProperty(depth0,"post_time") : depth0),{"name":"ftime","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":59}}}))
    + "</p>\n        </div>\n    </div>\n    <div class=\"main\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\">\n        <p class=\"title\">\n            "
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"is_top") : depth0),1,{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":56}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"is_top") : depth0),2,{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":56}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"is_top") : depth0),3,{"name":"equal","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":16,"column":109}}})) != null ? stack1 : "")
    + "\n\n\n\n            "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_title") : depth0), depth0))
    + "\n        </p>\n        <p class=\"content\" tracker-eventcode=\"gbhty.dghtxqy.wzl.wz\" tracker-extinfo=\"htid:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n            <span>"
    + ((stack1 = __default(__webpack_require__(19)).call(alias3,(depth0 != null ? lookupProperty(depth0,"post_content") : depth0),{"name":"showface","hash":{},"data":data,"loc":{"start":{"line":23,"column":18},"end":{"line":23,"column":45}}})) != null ? stack1 : "")
    + "</span>\n        </p>\n    </div>\n    <div class=\"rate\" data-stockbar_exchange=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-stockbar_name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\"\n        data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\">\n\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"bullish_bearish_tag") : depth0),0,{"name":"equal","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":40,"column":18}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"bullish_bearish_tag") : depth0),1,{"name":"equal","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":53,"column":18}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"bullish_bearish_tag") : depth0),2,{"name":"equal","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":8},"end":{"line":66,"column":18}}})) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"operate\">\n        <div class=\"share\" data-flag=\"0\" data-desc=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_content") : depth0), depth0))
    + "\" data-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_title") : depth0), depth0))
    + "\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\" data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "\" style=\"display: flex; justify-content:center;align-items:center;\">\n            <em class=\"icon icon_dougu_share\"></em>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"share_count") : depth0),0,{"name":"equal","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":76,"column":22}}})) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"comment\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\" data-reply_count=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reply_count") : depth0), depth0))
    + "\"\n            style=\"display: flex; justify-content:center;align-items:center;\">\n            <em class=\"icon icon_dougu_comment\"></em>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"reply_count") : depth0),0,{"name":"equal","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":82,"column":12},"end":{"line":86,"column":22}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"like "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":88,"column":25},"end":{"line":88,"column":69}}})) != null ? stack1 : "")
    + "\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\"\n            data-like_count=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"like_count") : depth0), depth0))
    + "\" data-post_is_like=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0), depth0))
    + "\" post_is_like=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0), depth0))
    + "\"\n            style=\"display: flex; justify-content:center;align-items:center;\">\n            <em class=\"icon icon_dougu_unlike\"></em><em class=\"icon icon_dougu_like\"></em>\n            <span class=\"like_count\">\n\n\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"like_count") : depth0),0,{"name":"equal","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":95,"column":16},"end":{"line":99,"column":26}}})) != null ? stack1 : "")
    + "            </span>\n        </div>\n    </div>\n    <div class=\"thread\"></div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span>置顶</span>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span>看多</span>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<span\n                style=\"color:rgb(0, 160, 0); background:rgba(0, 160, 0, 0.1) !important;\">看空</span>";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <em class=\"icon icon_rate_up\"></em>\n        <span class=\"sotckname\" data-stockbar_exchange=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-stockbar_name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "</span>\n\n        <div class=\"text-wrapper\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\">\n            <span class=\"text\">平仓后涨跌幅:&nbsp;</span>\n            <span class=\"rate_num\" data-price=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"close_position_price") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\"></span>&nbsp;\n        </div>\n\n        <em class=\"icon icon_rate_right\"></em>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <em class=\"icon icon_rate_up\"></em>\n        <span class=\"sotckname\" data-stockbar_exchange=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-stockbar_name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "</span>\n\n        <div class=\"text-wrapper\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\">\n            <span class=\"text\">看多后涨跌幅:&nbsp;</span>\n            <span class=\"rate_num\" data-price=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"close_position_price") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\"></span>&nbsp;\n        </div>\n\n        <em class=\"icon icon_rate_right\"></em>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <em class=\"icon icon_rate_up\"></em>\n        <span class=\"sotckname\" data-stockbar_exchange=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-stockbar_name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "</span>\n\n        <div class=\"text-wrapper\" data-post_id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_id") : depth0), depth0))
    + "\">\n            <span class=\"text\">看空后涨跌幅:&nbsp;</span>\n            <span class=\"rate_num\" data-price=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"close_position_price") : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\"></span>&nbsp;\n        </div>\n\n        <em class=\"icon icon_rate_right\"></em>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "            <span>分享</span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(__default(__webpack_require__(20)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"share_count") : depth0),{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":75,"column":12},"end":{"line":75,"column":37}}}))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "            <span>评论</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(__default(__webpack_require__(20)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"reply_count") : depth0),{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":85,"column":12},"end":{"line":85,"column":37}}}))
    + "\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "true";
},"24":function(container,depth0,helpers,partials,data) {
    return "false";
},"26":function(container,depth0,helpers,partials,data) {
    return "                <span>点赞</span>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + container.escapeExpression(__default(__webpack_require__(20)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"like_count") : depth0),{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":98,"column":16},"end":{"line":98,"column":40}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"res") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":105,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = function (time) {
    //  {{!-- post_time: "2021-07-06T17:17:47" --}}
    // time = "2020-08-13T17:17:47";
    var arr = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(?:\d{2})/.exec(time);
    var year = arr[1],
        mon = arr[2],
        day = arr[3],
        hour = arr[4],
        min = arr[5];

    arr = (new Date().toLocaleDateString()).split('/');
    var nYear = arr[0],
        nMonth = arr[1],
        nDay = arr[2];

    if (nMonth < 10) {
        nMonth = '0' + nMonth;
    }
    if (nDay < 10) {
        nDay = '0' + nDay;
    }

    // 不同年 返回 2020-12-31 15:00
    if (nYear == year && nMonth == mon && nDay == day) {
        // 同天 今天 14:30
        return "今天" + hour + ":" + min
    }
    if (nYear != year) {
        return year + "-" + mon + "-" + day + " " + hour + ":" + min;
    } else {
        return mon + "-" + day + " " + hour + ":" + min;
    }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"dougu_blank\">\n    <div class=\"img\"></div>\n    <div class=\"text-wrapper\">\n        <div class=\"text\">\n            虚位以待，奖金等你来\n        </div>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var bridge_1 = __webpack_require__(2);
var net_1 = __webpack_require__(5);
var ComponseBaseClass_1 = __webpack_require__(24);
var utils_1 = __webpack_require__(3);
__webpack_require__(133);
var stockHBS = __webpack_require__(134);
var itemHBS = __webpack_require__(135);
function compare(property, sort) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (sort) {
            return value1 - value2;
        }
        else {
            return value2 - value1;
        }
    };
}
var Stock = /** @class */ (function (_super) {
    __extends(Stock, _super);
    function Stock(root, id) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.stock = [];
        _this.sort = 1; // 1: 正序 0: 倒序
        _this.hqlist = []; // 行情list
        return _this;
    }
    Stock.prototype.enter = function () {
        var _this = this;
        utils_1.getDouguTopicRelatedStockListRead().then(function (result) {
            _this.getStock(result);
            _this.bind();
        });
    };
    Stock.prototype.bind = function () {
        var _this = this;
        net_1.getHq(this.stock.join(",")).then(function (res) {
            _this.hqlist = res.data.diff ? res.data.diff : [{
                    f2: res.data.f43,
                    f3: res.data.f170,
                    f4: res.data.f169,
                    f12: res.data.f57,
                    f13: res.data.f107,
                    f14: res.data.f58
                }];
            _this.hqlist = _this.hqlist.map(function (item) {
                item.htid = utils_1.queryId();
                return item;
            });
            // 行情接口 8：50~9：15的状态
            // this.hqlist = [{f1: 2,f2: '-',f3: '-',f4: '-',f12: "000651",f13: 0,f14: "格力电器",f152: 2,htid: "5148"}]
            // console.log(this.hqlist);
            _this.root.innerHTML = stockHBS(_this.hqlist);
            var sortEle = _this.root.querySelector("#sort span");
            sortEle.onclick = function () {
                var parentNode = sortEle.parentElement;
                var _a = sortEle.parentElement.parentElement.parentElement.lastElementChild.dataset, f4 = _a.f4, f3 = _a.f3;
                if (f3 === "-")
                    return;
                if (!parentNode.className) {
                    _this.sort = 1;
                    parentNode.className = "sort down";
                }
                else {
                    if (_this.sort == 1) {
                        _this.sort = 0;
                        parentNode.className = "sort up";
                    }
                    else {
                        _this.sort = 1;
                        parentNode.className = "sort down";
                    }
                }
                _this.root.querySelectorAll(".tbody").forEach(function (item) {
                    item.remove();
                });
                _this.sortlist();
            };
            // 点击跳转
            _this.root.querySelectorAll(".tbody").forEach(function (item) {
                item.onclick = function () {
                    var _a = item.dataset, qmarket = _a.qmarket, qcode = _a.qcode, name = _a.name;
                    switch (qmarket) {
                        case "0":
                            qcode = "SZ" + qcode;
                            break;
                        case "1":
                            qcode = "SH" + qcode;
                            break;
                        case "105":
                            qcode = "NASDAQ|" + qcode;
                            break;
                        case "106":
                            qcode = "NYSE|" + qcode;
                            break;
                        case "107":
                            qcode = "AMEX|" + qcode;
                            break;
                        case "116":
                            qcode = "HK|" + qcode;
                            break;
                        default:
                            break;
                    }
                    if (bridge_1.isHybrid()) {
                        bridge_1.emH5ToStock(qcode, name);
                    }
                    else {
                        window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href);
                    }
                };
            });
        });
    };
    Stock.prototype.sortlist = function () {
        this.hqlist.sort(compare('f3', this.sort == 0 ? true : false));
        this.root.querySelector("ul").insertAdjacentHTML("beforeend", itemHBS(this.hqlist));
        // 点击跳转
        this.root.querySelectorAll(".tbody").forEach(function (item) {
            item.onclick = function () {
                var _a = item.dataset, qmarket = _a.qmarket, qcode = _a.qcode, name = _a.name;
                switch (qmarket) {
                    case "0":
                        qcode = "SZ" + qcode;
                        break;
                    case "1":
                        qcode = "SH" + qcode;
                        break;
                    case "105":
                        qcode = "NASDAQ|" + qcode;
                        break;
                    case "106":
                        qcode = "NYSE|" + qcode;
                        break;
                    case "107":
                        qcode = "AMEX|" + qcode;
                        break;
                    case "116":
                        qcode = "HK|" + qcode;
                        break;
                    default:
                        break;
                }
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5ToStock(qcode, name);
                }
                else {
                    window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href);
                }
            };
        });
    };
    Stock.prototype.getStock = function (res) {
        var _this = this;
        res.re.stock_fix_list.forEach(function (item) {
            if (_this.stock.indexOf(item.qcode) < 0) {
                _this.stock.push(item.qcode);
            }
        });
    };
    Stock.prototype.hide = function () {
        this.root.innerHTML = "";
    };
    return Stock;
}(ComponseBaseClass_1.Component));
exports.Stock = Stock;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"tbody\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "\" data-name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\" data-f3=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f3") : depth0), depth0))
    + "\" \n        tracker-eventcode=\"gbhty.dghtxqy.xggp.gp\" tracker-extinfo=\"htId:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n        <div>\n            <p class=\"name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "</p>\n            <p class=\"stock\" style=\"background: #FFFFFF !important;\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "</p>\n        </div>\n\n        <div class=\"price\">"
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f2") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":22,"column":27},"end":{"line":22,"column":40}}}))
    + "</div>\n\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),0,{"name":"compare","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":20}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),0,{"name":"equal","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":36,"column":18}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),"-",{"name":"equal","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":8},"end":{"line":41,"column":18}}})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"up\" data-num=\"1\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":25,"column":41},"end":{"line":25,"column":54}}}))
    + "</div>\n            <div class=\"up\" data-num=\"2\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":26,"column":41},"end":{"line":26,"column":54}}}))
    + "%</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"down\" data-num=\"3\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":28,"column":43},"end":{"line":28,"column":56}}}))
    + "</div>\n            <div class=\"down\" data-num=\"4\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":29,"column":43},"end":{"line":29,"column":56}}}))
    + "%</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"\" data-num=\"5\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":34,"column":39},"end":{"line":34,"column":52}}}))
    + "</div>\n            <div class=\"\" data-num=\"6\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":35,"column":39},"end":{"line":35,"column":52}}}))
    + "%</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"\" data-num=\"7\">--</div>\n            <div class=\"\" data-num=\"8\">--%</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul>\n    <li class=\"thead\">\n        <div>股票名称</div>\n        <div>现价</div>\n        <div>涨跌</div>\n        <div id=\"sort\">\n            <span>涨幅</span>\n            <em class=\"icon icon_sort\"></em>\n        </div>\n    </li>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":43,"column":13}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"tbody\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f13") : depth0), depth0))
    + "\" data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "\" data-name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "\" data-f3=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f3") : depth0), depth0))
    + "\"\n    tracker-eventcode=\"gbhty.dghtxqy.xggp.gp\" tracker-extinfo=\"htId:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n    <div>\n        <p class=\"name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f14") : depth0), depth0))
    + "</p>\n        <p class=\"stock\" style=\"background: #FFFFFF !important;\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"f12") : depth0), depth0))
    + "</p>\n    </div>\n\n    <div class=\"price\">"
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f2") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":44,"column":23},"end":{"line":44,"column":36}}}))
    + "</div>\n\n"
    + ((stack1 = __default(__webpack_require__(11)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),0,{"name":"compare","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":52,"column":16}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),0,{"name":"equal","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":58,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),"-",{"name":"equal","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":4},"end":{"line":63,"column":14}}})) != null ? stack1 : "")
    + "</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"up\" data-num=\"1\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":47,"column":33},"end":{"line":47,"column":46}}}))
    + "</div>\n    <div class=\"up\" data-num=\"2\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":48,"column":33},"end":{"line":48,"column":46}}}))
    + "%</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"down\" data-num=\"3\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":50,"column":35},"end":{"line":50,"column":48}}}))
    + "</div>\n    <div class=\"down\" data-num=\"4\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":51,"column":35},"end":{"line":51,"column":48}}}))
    + "%</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"\" data-num=\"5\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f4") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":56,"column":31},"end":{"line":56,"column":44}}}))
    + "</div>\n    <div class=\"\" data-num=\"6\">"
    + alias2(__default(__webpack_require__(4)).call(alias1,(depth0 != null ? lookupProperty(depth0,"f3") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":57,"column":31},"end":{"line":57,"column":44}}}))
    + "%</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"\" data-num=\"7\">--</div>\n    <div class=\"\" data-num=\"8\">--%</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":0},"end":{"line":65,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Award = void 0;
var ComponseBaseClass_1 = __webpack_require__(24);
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var css = __webpack_require__(137);
var awardHbs = __webpack_require__(138);
var Award = /** @class */ (function (_super) {
    __extends(Award, _super);
    function Award(root, post_id) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.post_id = post_id;
        return _this;
    }
    Award.prototype.bind = function () {
    };
    Award.prototype.enter = function () {
        this.root.innerHTML = awardHbs({ htid: this.htid });
        this.bindEvent();
    };
    Award.prototype.hide = function () {
        this.root.innerHTML = '';
    };
    Award.prototype.bindEvent = function () {
        var _this = this;
        var _a;
        (_a = this.root.querySelector('.link-wrapper')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
            utils_1.linkJump(function () {
                // jumpToDG(this.post_id, 61, 0);
                bridge_1.jumpToDG(_this.post_id, 0, 0);
            });
        });
    };
    return Award;
}(ComponseBaseClass_1.Component));
exports.Award = Award;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"award-box-wrapper\">\n    <div class=\"content-wrapper\">\n        <div class=\"icon icon_ld2x img-wrapper\"></div>\n        <div class=\"text-wrapper\">【颁奖】本期活动获奖名单公布啦！</div>\n        <div class=\"link-wrapper\" tracker-eventcode=\"gbhty.dghtxqy.ggl.lj\" tracker-extinfo=\"htId:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":5,"column":97},"end":{"line":5,"column":105}}}) : helper)))
    + "\">点击查看</div>\n    </div>\n    <div class=\"mask-wrapper\">\n\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header_pic\" style=\"background-image: url("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"appImg") : stack1), depth0))
    + ");\"></div>\n<div href=\"/mtopic2020/dougurule?id="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\" class=\"rule_pic\" id=\"enter_rule\"\n    tracker-eventcode=\"gbhty.dghtxqy.db.gz\" tracker-extinfo=\"htId:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\"></div>\n<div class=\"dougu_desc\">\n    <em class=\"icon icon_dougu_detail\"></em>\n    <div class=\"desc_text up\">\n        <p>\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"lead") : stack1), depth0))
    + "\n        </p>\n    </div>\n    <div class=\"fold up\" id=\"toggle_btn\" data-iftoggle=\"true\">\n        <a class=\"fold_btn\" tracker-eventcode=\"gbhty.dghtxqy.yyssq.lcgdyxjhb\" tracker-extinfo=\"htId:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\">\n            <span class=\"text\">亮出观点 赢现金红包</span>\n            <span class=\"icon trangle\"></span>\n        </a>\n        <a class=\"unfold_btn\">\n            <span class=\"text\">点击收起</span>\n            <span class=\"icon trangle_up\"></span>\n        </a>\n    </div>\n</div>\n\n<div class=\"dougu_award_area\" id=\"dougu_award\"></div>\n\n<div class=\"dougu_list\" >\n    <div class=\"\" id=\"occupy\">\n        <div class=\"\" id=\"suction\">\n            <ul class=\"tab\">\n                <li class=\"active\" data-tab_num=\"1\">最热</li>\n                <li class=\"\" data-tab_num=\"2\" tracker-eventcode=\"gbhty.dghtxqy.bql.zx\"\n                    tracker-extinfo=\"htId:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\">最新\n                </li>\n                <li class=\"\" data-tab_num=\"3\" tracker-eventcode=\"gbhty.dghtxqy.bql.xggp\"\n                    tracker-extinfo=\"htId:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"re") : depth0)) != null ? lookupProperty(stack1,"htid") : stack1), depth0))
    + "\">相关股票\n                </li>\n            </ul>\n\n            <ul class=\"list_tab\">\n                <li class=\"active\" data-list_tab_num=\"0\">全部</li>\n                <li data-list_tab_num=\"1\">看多</li>\n                <li data-list_tab_num=\"2\">看空</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"hot_list\" id=\"hot_list\" data-tab=\"1\" style=\"background: #FFFFFF !important;\">\n\n    </div>\n    <div class=\"new_list\" id=\"new_list\" data-tab=\"2\" style=\"background: #FFFFFF !important;\">\n\n    </div>\n    <div class=\"stock_list\" id=\"stock_list\" data-tab=\"3\" style=\"background: #FFFFFF !important;\">\n\n    </div>\n</div>\n<div class=\"dougu_post\"></div>";
},"useData":true});

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDouguRule = void 0;
var page_1 = __webpack_require__(7);
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var header_1 = __webpack_require__(12);
var css = __webpack_require__(142);
var hbs = __webpack_require__(143);
var PageDouguRule = /** @class */ (function (_super) {
    __extends(PageDouguRule, _super);
    function PageDouguRule() {
        return _super.call(this) || this;
    }
    PageDouguRule.prototype.enter = function (parent) {
        var _this = this;
        utils_1.getDouguTopicDetailsRead().then(function (res) {
            // 规则
            _this.configRule = res.re.ConfigRule;
            // 规则配置引言
            _this.configIntroduction = res.re.ConfigIntroduction;
            // 第一段的首行缩进
            _this.configRule = "　　" + _this.configRule;
            // 取消连续的空格
            _this.configRule = _this.configRule.replace(/\n\n/g, "\n");
            // 替换所有的换行符
            _this.configRule = _this.configRule.replace(/\n/g, "<br>");
            // 设置根节点的id 类名
            _this.root = document.createElement("div");
            _this.root.id = "page_dougu_rule";
            _this.root.className = "page_dougu_rule";
            _this.root.innerHTML = hbs({
                "configIntroduction": _this.configIntroduction,
                "configRule": _this.configRule
            });
            _super.prototype.enter.call(_this, parent);
        }).catch(function (err) { });
        setTimeout(function () {
            bridge_1.setTop();
        }, 200);
        var headerEle = document.querySelector("header");
        var header = new header_1.Header(headerEle, 0);
        header.enter({});
    };
    return PageDouguRule;
}(page_1.Page));
exports.PageDouguRule = PageDouguRule;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header_pic\"></div>\n<div class=\"rule_text\">\n    <div class=\"text-wrapper\">\n       <div class=\"text\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"configRule") || (depth0 != null ? lookupProperty(depth0,"configRule") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"configRule","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n       </div>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHot = void 0;
var page_1 = __webpack_require__(7);
var header_1 = __webpack_require__(12);
var net_1 = __webpack_require__(5);
var router_1 = __webpack_require__(10);
var bridge_1 = __webpack_require__(2);
__webpack_require__(145);
var hbs = __webpack_require__(146);
var PageHot = /** @class */ (function (_super) {
    __extends(PageHot, _super);
    function PageHot() {
        return _super.call(this) || this;
    }
    PageHot.prototype.enter = function (parent) {
        var _this = this;
        // 设置根节点的id 类名
        this.root = document.createElement("div");
        this.root.id = "page_hot";
        this.root.className = "page_hot";
        this.header = new header_1.Header(document.querySelector("header"), 5);
        this.getHomePageListRead().then(function (res) {
            // console.log("res",res);
            _this.res = res;
            // 生成html模板
            var htmlStr = hbs({ re: res.re });
            _this.root.innerHTML = htmlStr;
            _this.header.enter({});
            _this.header.setShare('东方财富热议话题TOP20', '快上东方财富APP，看股友都在讨论哪些话题');
            _this.bind();
        });
        _super.prototype.enter.call(this, parent);
    };
    PageHot.prototype.bind = function () {
        // 设置图片顶部
        // if(isHybrid()){
        // let height = (<any>window).statusBarHeight + (<any>window).titleBarHeight;
        // (this.root.querySelector(".header_pic") as HTMLDivElement).style.paddingTop = `${94/2}px`;
        // }
        // alert((this.root.querySelector(".header_pic") as HTMLDivElement).clientHeight)
        var _this = this;
        // 获取行情
        var arr = [];
        this.res.re.forEach(function (element) {
            // if(arr.indexOf(element.))
            element.stock_list.slice(0, 2) && element.stock_list.slice(0, 2).forEach(function (stock) {
                if (arr.indexOf(stock.qmarket + "." + stock.qcode) < 0) {
                    arr.push(stock.qmarket + "." + stock.qcode);
                }
            });
        });
        // console.log(arr,arr.join(","));
        net_1.getHq_core(arr.join(",")).then(function (res) {
            // console.log(res.data.diff)
            res.data.diff.forEach(function (item) {
                _this.root.querySelectorAll(".stock_" + item.f12).forEach(function (node) {
                    var span = node.querySelector("span");
                    span.innerHTML = "" + (item.f3 > 0 ? '+' : '') + item.f3 + "%";
                    if (isNaN(item.f4) || item.f4 == "-") {
                    }
                    else {
                        if (item.f4 > 0) {
                            node.className = "stock_" + item.f12 + " up";
                        }
                        if (item.f4 < 0) {
                            node.className = "stock_" + item.f12 + " down";
                        }
                    }
                });
            });
        });
        // 点击跳转话题页面
        this.root.querySelectorAll(".hot_list .item").forEach(function (ele) {
            ele.onclick = function (event) {
                var htid = ele.dataset.htid;
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Jump(window.location.origin + "/list?id=" + htid, true);
                }
                else {
                    router_1.router.navigate("/list?id=" + htid);
                }
            };
        });
        // 点击跳转行情
        this.root.querySelectorAll(".hot_list .related_stock li").forEach(function (ele) {
            ele.onclick = function (event) {
                event.stopPropagation();
                event.preventDefault();
                var qcode = event.currentTarget.dataset.qcode;
                var qmarket = event.currentTarget.dataset.qmarket;
                var name = event.currentTarget.dataset.name;
                var third_app_code = event.currentTarget.dataset.third_app_code;
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5ToStock(third_app_code, name);
                }
                else {
                    window.location.href = "https://wap.eastmoney.com/quote/stock/" + qmarket + "." + qcode + ".html";
                }
            };
        });
    };
    // 获取热门话题
    PageHot.prototype.getHomePageListRead = function () {
        return new Promise(function (resolve, reject) {
            net_1.send("newtopic/api/Topic/HomePageListRead", "")
                .then(function (res) {
                if (res && res.rc == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PageHot;
}(page_1.Page));
exports.PageHot = PageHot;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(147)).call(depth0 != null ? depth0 : (container.nullContext || {}),2,(data && lookupProperty(data,"index")),{"name":"more","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":61,"column":17}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"item top3 scale_1px\" data-htid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n                <div class=\"index index"
    + alias2(alias1((data && lookupProperty(data,"index")), depth0))
    + "\">"
    + alias2(__default(__webpack_require__(32)).call(alias3,(data && lookupProperty(data,"index")),1,{"name":"add","hash":{},"data":data,"loc":{"start":{"line":6,"column":51},"end":{"line":6,"column":67}}}))
    + "</div>\n                <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"squareImg") : depth0), depth0))
    + "\" class=\"squareImg\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "\" />\n                <div class=\"info\">\n                    <div class=\"title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"data\">"
    + alias2(__default(__webpack_require__(6)).call(alias3,(depth0 != null ? lookupProperty(depth0,"postNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":26,"column":38},"end":{"line":26,"column":62}}}))
    + "讨论 "
    + alias2(__default(__webpack_require__(6)).call(alias3,(depth0 != null ? lookupProperty(depth0,"clickNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":26,"column":65},"end":{"line":26,"column":90}}}))
    + "浏览</div>\n                </div>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"voteInfo") : depth0)) != null ? lookupProperty(stack1,"state") : stack1),1,{"name":"equal","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":30,"column":26}}})) != null ? stack1 : "")
    + "            </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <ul class=\"related_stock\">\n                            <div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":32},"end":{"line":20,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\n                        </ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = __default(__webpack_require__(11)).call(depth0 != null ? depth0 : (container.nullContext || {}),1,(data && lookupProperty(data,"index")),{"name":"compare","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":36},"end":{"line":19,"column":48}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li class=\"stock_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" data-third_app_code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"third_app_code") : depth0), depth0))
    + "\" data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qcode") : depth0), depth0))
    + "\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qmarket") : depth0), depth0))
    + "\">\n                                            "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n                                            <span></span>\n                                        </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"abstract\"><span>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"desc") : depth0), depth0))
    + "</span></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"vote_state\"><em class=\"icon icon_hot_vote\"></em></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"item scale_1px\" data-htid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n                <div class=\"index\">"
    + alias2(__default(__webpack_require__(32)).call(alias3,(data && lookupProperty(data,"index")),1,{"name":"add","hash":{},"data":data,"loc":{"start":{"line":34,"column":35},"end":{"line":34,"column":51}}}))
    + "</div>\n                <div class=\"info\">\n                    <div class=\"title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":52,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"data\">\n                        "
    + alias2(__default(__webpack_require__(6)).call(alias3,(depth0 != null ? lookupProperty(depth0,"postNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":54,"column":24},"end":{"line":54,"column":48}}}))
    + "讨论 "
    + alias2(__default(__webpack_require__(6)).call(alias3,(depth0 != null ? lookupProperty(depth0,"clickNumber") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":54,"column":51},"end":{"line":54,"column":76}}}))
    + "浏览\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"voteInfo") : depth0)) != null ? lookupProperty(stack1,"state") : stack1),1,{"name":"equal","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":24},"end":{"line":57,"column":34}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </li>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <ul class=\"related_stock\">\n                             <div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock_list") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":32},"end":{"line":47,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\n                        </ul>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"vote_state\"><em class=\"icon icon_hot_vote\"></em></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header_pic\"></div>\n<ul class=\"hot_list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"re") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":62,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n<a href=\"/mtopic2020\" class=\"btn\">暂无更多内容，去话题广场看看 > </a>";
},"useData":true});

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function (num1, num2, options) {
    if (num1 >= num2) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDetailV2 = void 0;
var api_1 = __webpack_require__(21);
var utils_1 = __webpack_require__(3);
var page_1 = __webpack_require__(7);
var detailV2HBS = __webpack_require__(149);
var vote_module_1 = __webpack_require__(150);
var related_stock_1 = __webpack_require__(156);
var related_info_1 = __webpack_require__(162);
var list_1 = __webpack_require__(165);
var banner_1 = __webpack_require__(174);
var lead_1 = __webpack_require__(177);
var header_1 = __webpack_require__(180);
var bridge_1 = __webpack_require__(2);
var footer_1 = __webpack_require__(183);
var page_2 = __webpack_require__(186);
var css = __webpack_require__(188);
var PageDetailV2 = /** @class */ (function (_super) {
    __extends(PageDetailV2, _super);
    function PageDetailV2() {
        var _this = _super.call(this) || this;
        _this.ifSendMD = false;
        // alert(window.innerWidth + 'hello');
        // document.body.classList.add("theme_black");
        _this.root.innerHTML = detailV2HBS({});
        return _this;
    }
    PageDetailV2.prototype.enter = function (parent) {
        var _this = this;
        this.htid = Number(utils_1.queryId());
        try {
            api_1.getTopicDetailsRead(this.htid).then(function (res) {
                /* 首页信息 */
                // 渲染模版
                // console.log(1);
                try {
                    _this.root.innerHTML = detailV2HBS(res);
                    //投票模块
                    new vote_module_1.VoteModule(utils_1.querySelector('#voteModule')).init();
                    //相关股票
                    new related_stock_1.RelatedStock(utils_1.querySelector('#relatedStock')).init(res);
                    //相关资讯
                    new related_info_1.RelatedInfo(utils_1.querySelector('#relatedInfo')).init(res);
                    // 背景图
                    new banner_1.BannerModule(utils_1.querySelector('#detail_banner')).init(res);
                    // 详情指引
                    new lead_1.LeadModule(utils_1.querySelector('#detail_lead')).init(res);
                    /* 列表 */
                    (new list_1.ListModule(utils_1.querySelector("#detail_list")).init(res));
                    /* 头部 */
                    var header = new header_1.Header(utils_1.querySelector('header'), 5);
                    header.enter({});
                    header.setShare(res.name, res.lead);
                    // 根据请求结果，对页面整体做一些配置
                    page_2.init(res);
                    setTimeout(function () {
                        bridge_1.setTop();
                    }, 200);
                    /* 底部 */
                    new footer_1.FooterModule(utils_1.querySelector('#footer_bar')).init(res);
                    utils_1.Observer(145, function () {
                        var headerDOM = document.querySelector("header .header_wrap.type5");
                        var titleDOM = headerDOM.querySelector(".title");
                        if (titleDOM.classList.contains('__z_ellipsis')) {
                            titleDOM.classList.add('__z_ellipsis');
                        }
                        titleDOM.innerHTML = res.name || '';
                    }, function () {
                        var headerDOM = document.querySelector("header .header_wrap.type5");
                        headerDOM.querySelector(".title").innerHTML = "";
                    });
                    setTimeout(function () {
                        if (window.emtjLaunch) {
                            window.emtjLaunch(119124317102, "{'htId':" + _this.params.id + "}");
                        }
                        ;
                    }, 10);
                }
                catch (e) {
                    console.log("逻辑处理错误", e);
                }
            }).catch(function (e) { console.log("数据请求错误", e); });
        }
        catch (error) {
            console.log(error);
        }
    };
    return PageDetailV2;
}(page_1.Page));
exports.PageDetailV2 = PageDetailV2;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"detail\">\n    <div id=\"detail_banner\" ></div>\n    <div id=\"detail_lead\" class=\"show_pseu\"></div>\n       \n    <div class=\"modules_box\">\n        <div id=\"detail_vote\" class=\"modules\">\n            <div id=\"voteModule\"></div>\n        </div>\n        <div id=\"detail_stock\" class=\"modules\">\n            <div class=\"detail_stock_title\"></div>\n            <div id=\"relatedStock\"></div>\n        </div>\n        <div id=\"detail_timeline\" class=\"modules\">\n            <div class=\"detail_timeline_title\"></div>\n            <div id=\"relatedInfo\"></div>\n        </div>\n    </div>\n    <div id=\"detail_list\"></div>\n    <div id=\"footer_bar\"></div>\n</div>\n";
},"useData":true});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteModule = void 0;
/*
 * @Author: liangguangguang
 * @Date: 2021-07-30 17:33:16
 * @Last Modified by: liangguangguang
 * @Last Modified time: 2021-08-19 11:18:56
 */
/**
 * 投票
 */
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var net_1 = __webpack_require__(5);
var text_1 = __webpack_require__(15);
var user_1 = __webpack_require__(8);
__webpack_require__(152);
__webpack_require__(151);
var multiOptHbs = __webpack_require__(153);
var dkSelectedHbs = __webpack_require__(154);
var dkNoselectHbs = __webpack_require__(155);
/**
 * 三种类型hbs
 * 1、voteTypes = 1;单选且只有两个选项（多空选择）未投票dk_noselect.hbs
 * 2、voteTypes = 2;单选且只有两个选项（多空选择）已投票dk_selected.hbs
 * 3、voteTypes = 3;单选/多选且有大于2个选项、已投票/未投票，全部使用同一个multi_opt.hbs
 */
var VoteModule = /** @class */ (function () {
    function VoteModule(root) {
        this.root = root;
        this.voteTypes = 3;
        this.voteHbs = multiOptHbs;
        this.voteid = '';
        this.htid = text_1.getQueryString('id');
        this.voteData = {};
        this.preVoteData = {};
        this.preVotPrecent = {};
    }
    ;
    VoteModule.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleVoteData(null)];
                    case 1:
                        _a.sent();
                        this.bind();
                        return [2 /*return*/];
                }
            });
        });
    };
    VoteModule.prototype.handleVoteData = function (votedData) {
        return __awaiter(this, void 0, void 0, function () {
            var res, voteData, optList, preOptList;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!votedData) return [3 /*break*/, 1];
                        res = votedData;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, net_1.send("newtopic/api/Topic/VoteInfoRead", "htid=" + this.htid + "&isfresh=true&type=1")];
                    case 2:
                        //获取投票信息 newtopic/api/Topic/VoteInfoRead
                        //http://gubadoc.eastmoney.com/gubaapi/index.php?s=/4&page_id=875
                        // htid	是	string	话题ID
                        // voteId	是	string	投票id
                        // type	否	int	类型：0-web端，1-app端，默认为1
                        // isVote	否	int	1-已投票，2-未投票，默认为1
                        // isfresh	否	bool	是否立刻更新-强刷
                        //可以只用htid获取投票信息（张庭）
                        res = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.voteData = res; //记录当前data//给动画使用上次初始状态
                        voteData = {};
                        if (res.rc == 1 && res.re && res.re.length > 0) {
                            voteData = res.re[0];
                        }
                        else {
                            return [2 /*return*/];
                        }
                        optList = voteData.optionList;
                        this.voteid = voteData.voteId.toString();
                        // 设置单选/多选 的title
                        if (voteData.type == 1) { //1多选,0单选
                            voteData.voteTypeText = '（多选）';
                        }
                        else {
                            if (optList && optList.length > 2) { //单选且选项>2
                            }
                            else {
                                if (voteData.voteFlag == 1) { //1已投票,0未投票
                                    this.voteTypes = 2;
                                    this.voteHbs = dkSelectedHbs;
                                }
                                else {
                                    this.voteTypes = 1;
                                    this.voteHbs = dkNoselectHbs;
                                }
                            }
                            voteData.voteTypeText = '（单选）';
                        }
                        optList.forEach(function (item, index) {
                            item.transPercent = Math.round(item.percent * 100) + "%"; //不需要保留小数点
                            if (item.hasVoteFlag) {
                                item.selectedClass = "selected";
                            }
                            item.index = index;
                            switch (index) {
                                case 0:
                                    item.dkBg = 'blue';
                                    break;
                                case 1:
                                    item.dkBg = 'red';
                                    break;
                                default:
                                    break;
                            }
                            if (_this_1.voteTypes == 2) {
                                item.optTitle = item.content;
                                if (item.hasVoteFlag) {
                                    item.optTitle = "\u5DF2\u9009 \u300C" + item.content + "\u300D <span class=\"icon icon_selected_" + item.dkBg + "\"></span>";
                                }
                            }
                        });
                        this.root.innerHTML = this.voteHbs(voteData);
                        this.maidian(); // 添加投票的埋点
                        setTimeout(function () {
                            _this_1.clearFirstPlaint(voteData);
                        });
                        //处理上次投票信息
                        if (this.preVoteData.rc == 1 && this.preVoteData.re && this.preVoteData.re.length > 0) {
                            preOptList = this.preVoteData.re[0].optionList;
                            preOptList.forEach(function (item) {
                                _this_1.preVotPrecent[item.voId] = {};
                                _this_1.preVotPrecent[item.voId].transPrecent = Math.round(item.percent * 100) + "%";
                            });
                        }
                        return [2 /*return*/, voteData];
                }
            });
        });
    };
    VoteModule.prototype.bind = function (num) {
        var _this_1 = this;
        var voteItem = '.select_ul .option';
        switch (this.voteTypes) {
            case 1:
                voteItem = '.dk_noselect .vote_box';
                break;
            case 2:
                voteItem = '.dk_voted .bar_item';
                break;
            default:
                break;
        }
        var selectedList = this.root.querySelectorAll(".option.selected");
        this.root.querySelectorAll(voteItem).forEach(function (item) {
            var _a;
            var _this = _this_1;
            //动态设置宽度（实现transition动效）
            var percentBg = item.querySelector('.bg_color');
            switch (_this_1.voteTypes) {
                case 1:
                    percentBg = item.querySelector('.percent_bar');
                    break;
                case 2:
                    percentBg = item;
                    break;
                default:
                    break;
            }
            var dataPercent = percentBg.getAttribute('data-percent');
            var optid = item.getAttribute('data-optid');
            if (_this_1.voteTypes != 3) {
                setTimeout(function () {
                    if (num !== 0)
                        percentBg.setAttribute('style', "width:" + dataPercent + ";");
                }, 300);
            }
            switch (_this_1.voteTypes) {
                case 1:
                    break;
                case 2:
                    if (dataPercent == '100%') { //多空投票结果，100%时隐藏分隔条
                        (_a = _this_1.root.querySelector('.bar_0.bar_item .voted_split')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                    }
                    break;
                case 3:
                    //多选单独设置动效
                    if (_this_1.preVotPrecent[optid]) {
                        // 多选
                        // 如果取消投票
                        console.log(percentBg);
                        if (num === 0) {
                            // alert("多选，取消投票")
                            // 如果option都没有被选中，则清除所有效果
                            if (selectedList.length === 0) {
                                console.log("1x 用户都不选了！");
                                _this_1.clearFirstPlaint();
                            }
                        }
                        else {
                            percentBg.setAttribute('style', "width:" + _this_1.preVotPrecent[optid].transPrecent + ";");
                        }
                        percentBg.classList.add('trans');
                        // setTimeout(function () {
                        if (selectedList.length !== 0) {
                            console.log("1x 重新绘制多选");
                            percentBg.setAttribute('style', "width:" + dataPercent + ";");
                        }
                        // }, 300)
                    }
                    else {
                        // if (num !== 0) percentBg.setAttribute('style', `width:${dataPercent};`);
                        percentBg.setAttribute('style', "width:" + dataPercent + ";");
                    }
                    if (dataPercent == '100%') {
                        percentBg.classList.add('full');
                    }
                    if (dataPercent == '0%') {
                        // percentBg.classList.add('hidden');
                    }
                    break;
                default:
                    break;
            }
            //投票/取消投票
            item.onclick = function () {
                user_1.user.checkLogin(function () {
                    if (!user_1.user.isLogin()) {
                        user_1.user.login();
                        return;
                    }
                    else {
                        if (item.classList.contains('selected')) { //已选中的选项
                            if (_this.voteTypes == 2) { //多空投票已选，取消投票弹出提示
                                window.voteSendFn = function () {
                                    _this.voteSend(item, 0);
                                };
                                if (bridge_1.isHybrid()) { //app原生弹窗
                                    bridge_1.emComfirm({
                                        title: '',
                                        content: '是否取消投票？',
                                        okbt: {
                                            name: '确定',
                                            event: 'voteSendFn',
                                        },
                                        cnacelbt: {
                                            name: '取消',
                                            event: '',
                                        },
                                    });
                                }
                                else { //浏览器系统弹窗
                                    var winConfirm = confirm('是否取消投票？');
                                    if (winConfirm) {
                                        _this.voteSend(item, 0);
                                    }
                                    else {
                                    }
                                }
                            }
                            else {
                                _this.voteSend(item, 0);
                            }
                        }
                        else {
                            _this.voteSend(item, 1);
                        }
                    }
                });
            };
        });
    };
    VoteModule.prototype.voteSend = function (item, opt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, optid, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        //投票接口 newtopicopt/api/Topic/UserVote
                        // htid	是	string	话题ID
                        // voteid	是	string	投票ID
                        // opt	否	int	0-删除,1-添加投票
                        // optionList	否	string	N/A (投票选项id)
                        this.preVoteData = this.voteData; //投票接口发送前，将本次投票数据赋值给pre，记录上次投票数据
                        optid = item.getAttribute('data-optid');
                        return [4 /*yield*/, net_1.send("newtopicopt/api/Topic/UserVote", "opt=" + opt + "&htid=" + _this.htid + "&voteid=" + _this.voteid + "&optionList=" + optid)];
                    case 1:
                        res = _a.sent();
                        if (!res) return [3 /*break*/, 3];
                        //投票后用投票接口返回的信息重新init页面
                        return [4 /*yield*/, this.handleVoteData(res)];
                    case 2:
                        //投票后用投票接口返回的信息重新init页面
                        _a.sent();
                        this.bind(opt);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VoteModule.prototype.clearFirstPlaint = function (firstVoteRes) {
        try {
            // 如果用户已经投票，则返回
            if (firstVoteRes && firstVoteRes.voteFlag === 1) {
                return;
            }
            // 其他 表示还未投票 ，不能显示投票结果
            this.root.querySelectorAll(".up_show, .opt_info, .option .opt_info").forEach(function (v) {
                console.log("1x clear first plaint ... ", v);
                if (v)
                    v.style.display = "none";
            });
            this.clearwidth();
        }
        catch (e) {
            console.log(e);
        }
    };
    VoteModule.prototype.clearwidth = function () {
        this.root.querySelectorAll(".option .bg_color").forEach(function (c) {
            console.log("1x clear width: ", c);
            if (c)
                c.style.width = "0";
        });
    };
    VoteModule.prototype.maidian = function () {
        setTimeout(function () {
            var stock = document.querySelector(".vote_module");
            if (stock) {
                stock.setAttribute("tracker-extinfo", "htid:" + utils_1.queryId());
            }
        }, 100);
    };
    return VoteModule;
}());
exports.VoteModule = VoteModule;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"option "
    + alias4(((helper = (helper = lookupProperty(helpers,"selectedClass") || (depth0 != null ? lookupProperty(depth0,"selectedClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedClass","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":47}}}) : helper)))
    + "\" data-optid="
    + alias4(((helper = (helper = lookupProperty(helpers,"voId") || (depth0 != null ? lookupProperty(depth0,"voId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voId","hash":{},"data":data,"loc":{"start":{"line":9,"column":60},"end":{"line":9,"column":68}}}) : helper)))
    + " count="
    + alias4(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":9,"column":75},"end":{"line":9,"column":84}}}) : helper)))
    + " percent="
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":9,"column":93},"end":{"line":9,"column":109}}}) : helper)))
    + ">\n                <div class=\"option_text_box\">\n                    <span class=\"opt_text\">\n                        <span class=\"muti_opt_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":12,"column":53},"end":{"line":12,"column":64}}}) : helper)))
    + " </span>\n                        \n                        <span class=\"icon icon_selected_red\"></span>\n                        <span class=\"icon icon_selected_white\"></span>\n                    </span>\n                    <span class=\"opt_info\">\n                        <span class=\"opt_percent\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":20,"column":50},"end":{"line":20,"column":66}}}) : helper)))
    + "</span>\n                    </span>\n                </div>\n                <div class=\"bg_color\" data-percent=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":23,"column":52},"end":{"line":23,"column":68}}}) : helper)))
    + "\"></div>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vote_module\" tracker-eventcode=\"gbhty_hty_lb_tp\" tracker-extinfo=\"htId:"
    + alias4(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":1,"column":83},"end":{"line":1,"column":91}}}) : helper)))
    + "\">\n   <div class=\"vote_person_number\">\n        <div class=\"_z_icon icon-z_vote_white\"></div>\n        <div class=\"count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startPersonNumber") || (depth0 != null ? lookupProperty(depth0,"startPersonNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startPersonNumber","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":48}}}) : helper)))
    + "人参与</div>\n    </div>\n    <div class=\"vote_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":37}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"voteTypeText") || (depth0 != null ? lookupProperty(depth0,"voteTypeText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voteTypeText","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":54}}}) : helper)))
    + "</div>\n        <ul class=\"select_ul\" data-voteid="
    + alias4(((helper = (helper = lookupProperty(helpers,"voteId") || (depth0 != null ? lookupProperty(depth0,"voteId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voteId","hash":{},"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":52}}}) : helper)))
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"optionList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":25,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n</div>\n";
},"useData":true});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"res_"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":45}}}) : helper)))
    + "\">\n                        <span class=\"opt_title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"optTitle") || (depth0 != null ? lookupProperty(depth0,"optTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":48},"end":{"line":12,"column":62}}}) : helper))) != null ? stack1 : "")
    + "</span>\n                    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <span class=\"opt_percent opt_percent_"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":18,"column":61},"end":{"line":18,"column":70}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":18,"column":72},"end":{"line":18,"column":88}}}) : helper)))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        \n                        <div class=\"bar_item bar_"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":49},"end":{"line":24,"column":58}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"selectedClass") || (depth0 != null ? lookupProperty(depth0,"selectedClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedClass","hash":{},"data":data,"loc":{"start":{"line":24,"column":59},"end":{"line":24,"column":76}}}) : helper)))
    + "\" data-percent=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":24,"column":92},"end":{"line":24,"column":108}}}) : helper)))
    + "\" data-optid="
    + alias4(((helper = (helper = lookupProperty(helpers,"voId") || (depth0 != null ? lookupProperty(depth0,"voId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voId","hash":{},"data":data,"loc":{"start":{"line":24,"column":121},"end":{"line":24,"column":129}}}) : helper)))
    + "\n                        \n                        >\n                            \n                            <div class=\"voted_bar\" > <div class=\"voted_split\"> </div></div>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vote_module\" tracker-eventcode=\"gbhty_hty_lb_tp\" tracker-extinfo=\"htId:"
    + alias4(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":1,"column":83},"end":{"line":1,"column":91}}}) : helper)))
    + "\">\n    <div class=\"vote_person_number\">\n        <div class=\"_z_icon icon-z_vote_white\"></div>\n        <div class=\"count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startPersonNumber") || (depth0 != null ? lookupProperty(depth0,"startPersonNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startPersonNumber","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":48}}}) : helper)))
    + "人参与</div>\n    </div>\n    <div class=\"dk_selected\">\n       <div class=\"vote_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":40}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"voteTypeText") || (depth0 != null ? lookupProperty(depth0,"voteTypeText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voteTypeText","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":57}}}) : helper)))
    + "</div>\n        <div class=\"dk_voted\">\n            <div class=\"select_res\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"optionList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"voted_bars\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"optionList") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":29}}})) != null ? stack1 : "")
    + "                <div class=\"barsbox\">\n                    \n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"optionList") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":30,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"vote_box vote_item_"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":46},"end":{"line":11,"column":55}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"selectedClass") || (depth0 != null ? lookupProperty(depth0,"selectedClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedClass","hash":{},"data":data,"loc":{"start":{"line":11,"column":56},"end":{"line":11,"column":73}}}) : helper)))
    + "\" data-optid="
    + alias4(((helper = (helper = lookupProperty(helpers,"voId") || (depth0 != null ? lookupProperty(depth0,"voId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voId","hash":{},"data":data,"loc":{"start":{"line":11,"column":86},"end":{"line":11,"column":94}}}) : helper)))
    + "\n                >\n                    <div class=\"vote_bar icon icon_votebar_"
    + alias4(((helper = (helper = lookupProperty(helpers,"dkBg") || (depth0 != null ? lookupProperty(depth0,"dkBg") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dkBg","hash":{},"data":data,"loc":{"start":{"line":13,"column":59},"end":{"line":13,"column":67}}}) : helper)))
    + "\"></div>\n                    <div class=\"vote_content down_content\">\n                        <div class=\"alignbox\">\n                            <span class=\"dk_opt_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":16,"column":55},"end":{"line":16,"column":66}}}) : helper)))
    + "</span>\n                            <div class=\"up_show\">\n                                <div class=\"percent_fixed\">\n                                    <div class=\"percent_bar_bg\"></div>\n                                    <div class=\"percent_bar\" data-percent=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":20,"column":75},"end":{"line":20,"column":91}}}) : helper)))
    + "\"></div>\n                                </div>\n                                <div class=\"percent_num\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"transPercent") || (depth0 != null ? lookupProperty(depth0,"transPercent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transPercent","hash":{},"data":data,"loc":{"start":{"line":22,"column":57},"end":{"line":22,"column":73}}}) : helper)))
    + "</div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"vote_module\" tracker-eventcode=\"gbhty_hty_lb_tp\" tracker-extinfo=\"htId:"
    + alias4(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":2,"column":83},"end":{"line":2,"column":91}}}) : helper)))
    + "\">\n    <div class=\"vote_person_number\">\n        <div class=\"_z_icon icon-z_vote_white\"></div>\n        <div class=\"count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startPersonNumber") || (depth0 != null ? lookupProperty(depth0,"startPersonNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startPersonNumber","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":48}}}) : helper)))
    + "人参与</div>\n    </div>\n    <div class=\"dk_noselect\">\n        <div class=\"vote_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":41}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"voteTypeText") || (depth0 != null ? lookupProperty(depth0,"voteTypeText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voteTypeText","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":58}}}) : helper)))
    + "</div>\n        <ul class=\"dk_vote\" data-voteid="
    + alias4(((helper = (helper = lookupProperty(helpers,"voteId") || (depth0 != null ? lookupProperty(depth0,"voteId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"voteId","hash":{},"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":50}}}) : helper)))
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"optionList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":27,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Author: liangguangguang
 * @Date: 2021-08-04 13:15:39
 * @Last Modified by: liangguangguang
 * @Last Modified time: 2021-08-26 16:59:33
 */
/**
 * 相关股票
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedStock = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var stock_1 = __webpack_require__(26);
var api_1 = __webpack_require__(21);
var subTitle_1 = __webpack_require__(33);
__webpack_require__(159);
var relatedStockHbs = __webpack_require__(160);
var singleStockHbs = __webpack_require__(161);
var RelatedStock = /** @class */ (function () {
    function RelatedStock(root) {
        this.root = root;
        this.multiCode = false;
        this.relatedStockList = [];
        this.hqStocks = [];
        this.allStockList = []; //所有的关联股
        this.allHqStocks = []; //所有的关联股行情code，给更多链接页面获取行情用
    }
    ;
    RelatedStock.prototype.init = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var hasData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleQuoteData(res)];
                    case 1:
                        hasData = _a.sent();
                        if (!hasData) {
                            return [2 /*return*/];
                        }
                        this.rendDom();
                        return [4 /*yield*/, this.getHqData()];
                    case 2:
                        _a.sent();
                        this.bind(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatedStock.prototype.handleQuoteData = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            var _this_1 = this;
            return __generator(this, function (_e) {
                //let relatedStockList:any = [];//数据list
                //let hqStocks:string[] = [];//行情codeArr//["NASDAQ|AAPL", "SZ300059", "SH600100"]
                if (res.RelateIndex && res.RelateIndex.length > 0) { //有相关指数优先展示相关指数
                    (_a = this.relatedStockList).push.apply(_a, res.RelateIndex);
                    (_b = this.allStockList).push.apply(_b, res.RelateIndex);
                }
                if (res.stock_fix_list && res.stock_fix_list.length > 0) { //相关股票
                    (_c = this.relatedStockList).push.apply(_c, res.stock_fix_list);
                    (_d = this.allStockList).push.apply(_d, res.stock_fix_list);
                }
                //console.log('this.relatedStockList',this.relatedStockList)
                if (this.relatedStockList.length > 0) {
                    ;
                    (new subTitle_1.SubTitle(utils_1.querySelector('.detail_stock_title')).init("相关股票", null, null)); //初始化模块title
                    if (this.relatedStockList.length > 3) {
                        this.relatedStockList = this.relatedStockList.splice(0, 3);
                    }
                    this.relatedStockList.forEach(function (element) {
                        element.transQmarket = element.qmarket.toString();
                        if (element.code.indexOf('of') == 0) {
                            //获取etf基金的场内market（接口的qmarket为场外的market）
                            element.transQmarket = stock_1.geJJCNByCode(element.code);
                            //console.log('jjcn',element.transQmarket)
                        }
                        var hqCode = element.transQmarket + '.' + element.qcode;
                        _this_1.hqStocks.push(hqCode); //"SZ300059" "HK|02013" "NASDAQ|AAPL"
                    });
                    this.allStockList.forEach(function (element) {
                        element.transQmarket = element.qmarket.toString();
                        if (element.code.indexOf('of') == 0) {
                            //获取etf基金的场内market（接口的qmarket为场外的market）
                            element.transQmarket = stock_1.geJJCNByCode(element.code);
                        }
                        var hqCode = element.transQmarket + '.' + element.qcode;
                        _this_1.allHqStocks.push(hqCode); //"SZ300059" "HK|02013" "NASDAQ|AAPL"
                    });
                    //this.
                }
                else {
                    return [2 /*return*/, null]; //无数据return
                }
                console.log('hqStocks', this.hqStocks);
                return [2 /*return*/, this.relatedStockList];
            });
        });
    };
    RelatedStock.prototype.rendDom = function () {
        var _a, _b;
        if (this.hqStocks.length > 1) { //多个关联股
            this.root.innerHTML = relatedStockHbs(this.relatedStockList);
            if (this.relatedStockList.length == 3) { //三个item分配对齐
                (_a = document.querySelector('.related_stock')) === null || _a === void 0 ? void 0 : _a.classList.add('just3');
            }
            else if (this.relatedStockList.length == 2) {
                (_b = document.querySelector('.related_stock')) === null || _b === void 0 ? void 0 : _b.classList.add('just2');
            }
            this.maidian();
        }
        else {
            var thisCode = this.hqStocks[0];
            if ((thisCode === null || thisCode === void 0 ? void 0 : thisCode.indexOf('105')) == 0 || (thisCode === null || thisCode === void 0 ? void 0 : thisCode.indexOf('106')) == 0 || (thisCode === null || thisCode === void 0 ? void 0 : thisCode.indexOf('107')) == 0) {
                this.relatedStockList[0].marketTag = 'US';
            }
            else if ((thisCode === null || thisCode === void 0 ? void 0 : thisCode.indexOf('116')) == 0) {
                this.relatedStockList[0].marketTag = 'HK';
            }
            this.root.innerHTML = singleStockHbs(this.relatedStockList[0]);
            this.maidian();
        }
        this.maidian();
    };
    RelatedStock.prototype.getHqData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hqData, hqDataJson;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.getHqlistWithneedCode(this.hqStocks)];
                    case 1:
                        hqData = _a.sent();
                        console.log('hqData', hqData);
                        console.log('hqStocks', this.hqStocks);
                        hqDataJson = {};
                        if (hqData.rc == 0) {
                            if (this.hqStocks.length > 1) { //多个关联股
                                if (hqData.data && hqData.data.diff && hqData.data.diff.length > 0) {
                                    this.multiCode = true;
                                    hqData.data.diff.forEach(function (element) {
                                        hqDataJson[element.f12] = {
                                            'baName': element.f14,
                                            'baCode': element.f12,
                                            'zdf': element.f3,
                                        };
                                    });
                                    this.multiHq(hqDataJson);
                                }
                            }
                            else {
                                if (hqData.data) { //只有一个关联股
                                    this.multiCode = false;
                                    //singleHq = hqData.data;
                                    this.singleHq(hqData.data);
                                    // hqDataJson[hqData.data.f57] = {
                                    //     'baName': hqData.data.f58,
                                    //     'baCode': hqData.data.f57,
                                    //     'zdf': hqData.data.f170,
                                    // }
                                }
                            }
                        }
                        //定时刷新行情
                        setTimeout(function () { return __awaiter(_this_1, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getHqData()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 1000 * 60);
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatedStock.prototype.bind = function (res) {
        var _this = this;
        //alert(6)
        if (this.relatedStockList.length < 1) {
            return;
        }
        if (this.allHqStocks.length > 3) {
            var url = "/stocks?code=" + encodeURIComponent(this.allHqStocks.join(','));
            (new subTitle_1.SubTitle(utils_1.querySelector('.detail_stock_title')).init("相关股票", url, true)); //添加更多链接,跳转到本项目的路由页面
        }
        //后台配置链接格式不正确，接口正在做需求。先全部跳转到本项目路由页面。
        // if(this.allHqStocks.length>0 && res.CodeUrl){
        //     ;(new SubTitle(querySelector('.detail_stock_title')).init("相关股票", res.CodeUrl,false));//添加更多链接,后台配置的链接（跳转到app内功能页面）
        // }else if (this.allHqStocks.length>3){
        //     let url = `/stocks?code=${encodeURIComponent(this.allHqStocks.join(','))}`
        //     ;(new SubTitle(querySelector('.detail_stock_title')).init("相关股票", url,true));//添加更多链接,跳转到本项目的路由页面
        // }
        //console.log('related_stock',this.root)
        //跳转到行情页
        if (this.multiCode) {
            this.root.querySelectorAll('.related_stock .stock_box').forEach(function (item) {
                item.onclick = function () {
                    _this.jumpToHqPage(this);
                };
            });
        }
        else {
            this.root.querySelector('.single_stock').onclick = function () {
                _this.jumpToHqPage(this);
            };
        }
    };
    RelatedStock.prototype.jumpToHqPage = function (item) {
        var qmarket = item.getAttribute('qmarket');
        var qcode = item.getAttribute('qcode');
        var hqcode = qmarket + "." + qcode; //qmarket
        if (bridge_1.isHybrid()) {
            bridge_1.emH5ToStock2(qcode, qmarket);
        }
        else {
            //浏览器环境跳转wap行情；非沪深个股和沪深指数应该有问题，超出范围的指数、基金等现在不会添加，后期需求会提
            window.location.href = "https://wap.eastmoney.com/quote/stock/" + hqcode + ".html";
        }
    };
    RelatedStock.prototype.multiHq = function (hqDataJson) {
        console.log('hqDataJson', hqDataJson);
        var _loop_1 = function (key) {
            //console.log('keyyy',key);
            document.querySelectorAll(".zdf_" + key).forEach(function (item) {
                //console.log(`.zdf_${key}`)
                var zdfColor = 'grey';
                var sign = '';
                var zdf = hqDataJson[key].zdf;
                if (zdf > 0) {
                    zdfColor = 'red';
                    sign = '+';
                }
                else if (zdf < 0) {
                    zdfColor = 'green';
                    //sign = '-';//负行情已经有负号了
                }
                var domZdf = isNaN(zdf) ? zdf : (zdf.toFixed(2) + '%');
                item.innerHTML = "<span class=\"" + zdfColor + "\">" + sign + domZdf + "</span>";
            });
            document.querySelectorAll(".name_" + key).forEach(function (item) {
                item.innerHTML = hqDataJson[key].baName; //etf基金使用行情接口返回的名字（列表接口的name是场外的基金）
            });
        };
        //这种填充行情方式可以用来做定时刷新行情
        for (var key in hqDataJson) {
            _loop_1(key);
        }
        //
    };
    RelatedStock.prototype.singleHq = function (singleHq) {
        //console.log('singleHq',singleHq);
        //console.log('hqStocks',this.hqStocks)
        var rnd = (new Date()).getTime().toString();
        //let TIME_URL_PRE_cur = '//webquotepic.eastmoney.com/GetPic.aspx?token=5c46f660fab8722944521b8807de07c0&id='; //实时行情图片
        var imgsrc = "//webquotepic.eastmoney.com/GetPic.aspx?&nid=" + this.hqStocks[0] + "&rnd=" + rnd + "&imageType=RJY&token=44c9d251add88e27b65ed86506f6e5da92"; //实时行情图片
        //singleHq.imgsrc = imgsrc
        document.querySelector('.hq_img').innerHTML = "<img src=" + imgsrc + " alt=\"\">";
        //f170
        var zdfColor = 'grey';
        var sign = '';
        var zdf_arr = '';
        var zdf = singleHq.f170;
        if (zdf > 0) {
            zdfColor = 'red';
            sign = '+';
            // zdf_arr = '<span class="icon icon_hqarrow_up"></span>';
            zdf_arr = '<span class="hqarrow hqup icon-L_hqarrow_up"></span>';
        }
        else if (zdf < 0) {
            zdfColor = 'green';
            // zdf_arr = '<span class="icon icon_hqarrow_down"></span>';
            zdf_arr = '<span class="hqarrow hqdown icon-L_hqarrow_up" ></span>';
            //sign = '-';//负行情已经有负号了
        }
        var domZdf = isNaN(zdf) ? zdf : (zdf.toFixed(2) + '%');
        var price = isNaN(singleHq.f43) ? singleHq.f43 : singleHq.f43.toFixed(3); //价格
        var hqDom = "\n        <div class=\"" + zdfColor + "\">\n            <span class=\"hq_price\">" + price + "</span>\n            <span class=\"zdf_arr\">" + zdf_arr + "</span>\n            <span class=\"hq_zdf\">" + sign + domZdf + "</span>\n        </div>";
        //singleHq.hqDom = hqDom;
        document.querySelector('.single_stock .stock_hq').innerHTML = hqDom;
        document.querySelector('.single_stock .relate_stock_name').innerHTML = singleHq.f58; //etf基金使用行情接口返回的名字（列表接口的name是场外的基金）
    };
    RelatedStock.prototype.maidian = function () {
        var stock = document.querySelector(".related_stock");
        stock.setAttribute("tracker-extinfo", "htid:" + utils_1.queryId());
    };
    return RelatedStock;
}());
exports.RelatedStock = RelatedStock;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sub_title_wrapper\">\n    <div class=\"left\">\n        <div class=\"title_mark\"></div>\n        <div class=\"sub_title_text\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":45}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"right hidden\">\n        <div class=\"more\">更多</div>\n        <em class=\"icon icon_detail_more\"></em>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"stock_box\"  qmarket="
    + alias4(((helper = (helper = lookupProperty(helpers,"transQmarket") || (depth0 != null ? lookupProperty(depth0,"transQmarket") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transQmarket","hash":{},"data":data,"loc":{"start":{"line":5,"column":40},"end":{"line":5,"column":56}}}) : helper)))
    + " qcode="
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":5,"column":63},"end":{"line":5,"column":72}}}) : helper)))
    + "\n        >\n            <div class=\"re_stock_code\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":7,"column":39},"end":{"line":7,"column":48}}}) : helper)))
    + "</div>\n            <div class=\"re_stock_name name_"
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":52}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":54},"end":{"line":8,"column":62}}}) : helper)))
    + "</div>\n            <div class=\"zdf_"
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":37}}}) : helper)))
    + "\">--</div>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "        \n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"item_line\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"related_stock\" \n    tracker-eventcode=\"gbhty_hty_lb_xggp\" tracker-extinfo=\"htId:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":2,"column":64},"end":{"line":2,"column":72}}}) : helper)))
    + "\"\n>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"markt_tag\" markettag="
    + alias4(((helper = (helper = lookupProperty(helpers,"marketTag") || (depth0 != null ? lookupProperty(depth0,"marketTag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketTag","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":63}}}) : helper)))
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"marketTag") || (depth0 != null ? lookupProperty(depth0,"marketTag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketTag","hash":{},"data":data,"loc":{"start":{"line":6,"column":64},"end":{"line":6,"column":77}}}) : helper)))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"single_stock\" qmarket="
    + alias4(((helper = (helper = lookupProperty(helpers,"transQmarket") || (depth0 != null ? lookupProperty(depth0,"transQmarket") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transQmarket","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":50}}}) : helper)))
    + " qcode="
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":66}}}) : helper)))
    + ">\n    <div class=\"hqbox\">\n        <div class=\"hq_left\">\n            <div class=\"stockinfo\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"marketTag") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":7,"column":23}}})) != null ? stack1 : "")
    + "                <span class=\"relate_stock_code\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"qcode") || (depth0 != null ? lookupProperty(depth0,"qcode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qcode","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":57}}}) : helper)))
    + "</span>\n                <span class=\"relate_stock_name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":56}}}) : helper)))
    + "</span>\n            </div>\n            <div class=\"stock_hq\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"hqDom") || (depth0 != null ? lookupProperty(depth0,"hqDom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hqDom","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n        <div class=\"hq_img\">\n            \n        </div>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Author: liangguangguang
 * @Date: 2021-08-04 13:15:39
 * @Last Modified by: liangguangguang
 * @Last Modified time: 2021-08-17 15:20:24
 */
/**
 * 相关股票
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedInfo = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var subTitle_1 = __webpack_require__(33);
__webpack_require__(163);
var relatedInfoHbs = __webpack_require__(164);
var RelatedInfo = /** @class */ (function () {
    function RelatedInfo(root) {
        this.root = root;
    }
    ;
    RelatedInfo.prototype.init = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleQuoteData(res)];
                    case 1:
                        _a.sent();
                        this.bind(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatedInfo.prototype.handleQuoteData = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var thisYearStr;
            return __generator(this, function (_a) {
                thisYearStr = (new Date().getFullYear()).toString();
                if (res.ZxInfo && res.ZxInfo.length > 0) {
                    ;
                    (new subTitle_1.SubTitle(utils_1.querySelector('.detail_timeline_title')).init("相关资讯", res.ZxUrl, false)); //初始化模块title
                    res.ZxInfo.forEach(function (item) {
                        if (thisYearStr == item.time.substring(0, 4)) { //当年时间不显示“年”
                            item.transTime = item.time.substring(5, item.time.length); //"08-12 14:55"
                        }
                        else {
                            item.transTime = item.time; //"2021-08-12 14:55"
                        }
                    });
                }
                this.root.innerHTML = relatedInfoHbs(res.ZxInfo);
                this.maidian();
                return [2 /*return*/];
            });
        });
    };
    RelatedInfo.prototype.bind = function (res) {
        // console.log('related_info',this.root)
        //后台配置链接，显示更多
        if (res.ZxUrl) { //链接接口没做好，先不显示
            //;(new SubTitle(querySelector('.detail_timeline_title')).init("相关资讯", res.ZxUrl,false));
        }
        document.querySelectorAll(".related_info .info_item").forEach(function (item) {
            item.onclick = function () {
                var postId = this.getAttribute('data-zxid');
                if (bridge_1.isHybrid()) { // app里
                    // 跳转正文，且定位到评论区
                    // (postid: string, third_id: string = "", type: number = 0, tocomment: number = 0)
                    bridge_1.jumpToPost('', postId, 1, 0);
                }
                else {
                    // if(this.isHW){
                    //     window.location.href = `//mguba.eastmoney.com/mguba/article_hw/0/${postid}?from=huaweins`;
                    // }else{
                    //window.location.href = `//mguba.eastmoney.com/mguba/article/0/${postId}`;
                    window.location.href = "https://wap.eastmoney.com/a/" + postId + ".html";
                    // }
                }
            };
        });
    };
    RelatedInfo.prototype.maidian = function () {
        var stock = document.querySelector(".related_info");
        stock.setAttribute("tracker-extinfo", "htid:" + utils_1.queryId());
    };
    return RelatedInfo;
}());
exports.RelatedInfo = RelatedInfo;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"info_item\" data-zxid="
    + alias4(((helper = (helper = lookupProperty(helpers,"zxid") || (depth0 != null ? lookupProperty(depth0,"zxid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zxid","hash":{},"data":data,"loc":{"start":{"line":3,"column":40},"end":{"line":3,"column":48}}}) : helper)))
    + ">\n            <div class=\"side_dot\"></div>\n            <div class=\"side_dashed\"></div>\n            <div class=\"info_time\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"transTime") || (depth0 != null ? lookupProperty(depth0,"transTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transTime","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":48}}}) : helper)))
    + "</div>\n            <div class=\"info_cont\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isRedio") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":11,"column":23}}})) != null ? stack1 : "")
    + "                <div class=\"info_title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":49}}}) : helper)))
    + "</div>\n            </div>\n        </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"icon icon_video\"></div>\n                    <div class=\"icon icon_video_red\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"related_info\" tracker-eventcode=\"gbhty_hty_lb_xgzx\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModule = void 0;
var utils_1 = __webpack_require__(3);
var bubble_1 = __webpack_require__(18);
var bridge_1 = __webpack_require__(2);
var user_1 = __webpack_require__(8);
var util_1 = __webpack_require__(13);
var api_1 = __webpack_require__(21);
var mask_1 = __webpack_require__(166);
var util_2 = __webpack_require__(17);
var itemHBS = __webpack_require__(169);
var listHBS = __webpack_require__(171);
var icss = __webpack_require__(172);
var lcss = __webpack_require__(173);
var ListModule = /** @class */ (function () {
    function ListModule(root) {
        var _a, _b, _c;
        this.newOrHotTab = 0;
        this.offset = 20;
        this.currentCount = this.offset;
        this.htid = Number(utils_1.queryId());
        this.ResList = [];
        this.firstRequest = true;
        this.themeFlag = ((_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.classList.contains("theme_black")) || ((_b = document.querySelector("body")) === null || _b === void 0 ? void 0 : _b.classList.contains("theme_black")) || ((_c = document.querySelector("#body")) === null || _c === void 0 ? void 0 : _c.classList.contains("theme_black"));
        root.innerHTML = listHBS({});
        this.itemElement = root.querySelector("#list_wrapper");
    }
    ListModule.prototype.init = function (res) {
        var _this = this;
        // 详情页信息，决定第一次是加载最新列表还是最热列表
        if (this.firstRequest) {
            var ListTag = res.ListTag;
            var hotDOM = document.querySelector(".hot_wrapper.title_wrapper");
            var newDOM = document.querySelector(".new_wrapper.title_wrapper");
            hotDOM.classList.remove('active');
            newDOM.classList.remove('active');
            // 第一次请求
            // 通过ListTag判断是哪个列表
            // 0最新 1热门
            if (ListTag == 1) {
                this.newOrHotTab = 0;
                hotDOM.classList.add('active');
            }
            else if (ListTag == 0) {
                this.newOrHotTab = 1;
                newDOM.classList.add('active');
            }
            this.firstRequest = false;
        }
        // 初始化请求
        this.initRequest();
        // EventBind 
        setTimeout(function () {
            _this.bindSwtichTab(); // 最新最热标签切换
            _this.bindEvent();
        }, 1000);
    };
    ListModule.prototype.bindEvent = function () {
        this.bindScrollToBtn(); // 滚动到底部加载下一页
        this.bindUser(); // 点击用户信息
        this.bindArticleItem(); // 点击文章         
        this.bindReply(); // 评论                   
        this.bindLikeEvt(); // 赞                      
        this.bindShare(); // 分享                   
        this.bindImg(); // 绑定显示图片
        this.bindCommentsImage();
        this.bindTitle(); // 点击标题
        util_2.stickyTabToPageDetail();
        this.bindLikeSty(); // 绑定点赞样式
        this.bindUniq(); // 绑定 标题 === 内容时，删除标题
        this.bindReplyEllipsis();
    };
    // 在切换标签的时候会用到这种请求方式
    ListModule.prototype.initRequest = function () {
        var _this = this;
        this.currentCount = this.offset;
        this.totalCount = -1;
        api_1.fmtRequest(this.newOrHotTab, this.htid, this.currentCount, this.offset, true).then(function (res) {
            _this.itemElement.innerHTML = itemHBS({ res: res.re });
            _this.totalCount = res.count;
            _this.currentCount += _this.offset;
            _this.ResList = res.re;
            _this.bindEvent();
        });
    };
    // 标签切换
    ListModule.prototype.bindSwtichTab = function () {
        var _this = this;
        var hotDom = document.body.querySelector('.new_hot_list_title .hot_wrapper');
        var newDom = document.body.querySelector('.new_hot_list_title .new_wrapper');
        hotDom.addEventListener('click', function (e) {
            _this.newOrHotTab = 0;
            _this.initRequest();
            if (hotDom.classList.contains('active')) {
                return;
            }
            else {
                hotDom.classList.add("active");
                newDom.classList.remove("active");
            }
        });
        newDom.addEventListener('click', function (e) {
            _this.newOrHotTab = 1;
            _this.initRequest();
            if (newDom.classList.contains('active')) {
                return;
            }
            else {
                newDom.classList.add("active");
                hotDom.classList.remove("active");
            }
        });
    };
    // 滚动到底部的请求逻辑
    ListModule.prototype.bindScrollToBtn = function () {
        var _this = this;
        var el = document.body.querySelector("#body");
        util_2.execBtnFunc(el, function () {
            // 已经请求到底了
            if (_this.totalCount > 0 && _this.currentCount >= _this.totalCount)
                return;
            // 执行请求，将currentCount修改，将结果注入到hbs
            api_1.fmtRequest(_this.newOrHotTab, _this.htid, _this.currentCount, _this.offset).then(function (res) {
                var list = res.re;
                var _loop_1 = function (index) {
                    var item = res.re[index];
                    var postId = item.postid;
                    var ifHasPostIdInOldList = _this.ResList.some(function (v) { return v.postid == postId; });
                    // 如果发现列表中已经存在相同的postid，则删除
                    if (ifHasPostIdInOldList === true) {
                        var delRes = res.re.splice(Number(index), 1);
                        console.log("\u5220\u9664\u4E86\u7B2C" + index + "\u9879\uFF1A", delRes);
                    }
                };
                // 过滤相同的项
                for (var index in res.re) {
                    _loop_1(index);
                }
                _this.itemElement.insertAdjacentHTML("beforeend", itemHBS({ res: res.re }));
                _this.currentCount += list.length;
                _this.bindEvent();
            });
        }, {});
    };
    ListModule.prototype.JumptoUserInfo = function (selector) {
        document.querySelectorAll(selector).forEach(function (item, index) {
            item.onclick = function (event) {
                if (bridge_1.isHybrid()) { // app里
                    bridge_1.jumpToUser(event.currentTarget.dataset.userid);
                }
                else {
                    if (event.currentTarget.dataset.user_is_majia == "false") {
                        window.location.href = "//mguba.eastmoney.com/mguba/user/" + event.currentTarget.dataset.userid;
                    }
                    else {
                        window.location.href = "//mguba.eastmoney.com/mguba/list/" + event.currentTarget.dataset.stockcode;
                    }
                }
                event.preventDefault();
                event.stopPropagation();
            };
        });
    };
    ListModule.prototype.bindArticleItem = function () {
        this.JumpToArticle("#detail .new_hot_list_item .content");
    };
    ListModule.prototype.JumptoReply = function (selector) {
        document.body.querySelectorAll(selector).forEach(function (element) {
            element.onclick = function (event) {
                var postid = element.dataset.postid ? element.dataset.postid : "0";
                var third_id = event.currentTarget.dataset.third_id;
                var post_type = event.currentTarget.dataset.post_type;
                user_1.user.checkLogin(function () {
                    if (!user_1.user.isLogin()) {
                        user_1.user.login();
                        return;
                    }
                    // 跳转正文，且定位到评论区
                    bridge_1.jumpToPost(postid, third_id, post_type * 1, 1);
                });
            };
        });
    };
    ListModule.prototype.bindTitle = function () {
        this.JumpToArticle("#detail .new_hot_list_item .article_wrapper .title_wrapper_");
    };
    ListModule.prototype.JumpToArticle = function (selector) {
        document.querySelectorAll(selector).forEach(function (item, index) {
            item.onclick = function (event) {
                var third_id = event.currentTarget.dataset.third_id;
                var post_type = event.currentTarget.dataset.post_type;
                var postid = event.currentTarget.dataset.postid;
                console.log("postid: " + postid + " , third_id:" + third_id + " ,posttype:" + [post_type]);
                bridge_1.jumpToPost2(postid, third_id, post_type * 1, 0);
            };
        });
    };
    // 跳转到评论区
    ListModule.prototype.bindReply = function () {
        this.JumptoReply("#detail .operator_wrapper .comment");
        this.JumptoReply("#detail .see_more_wrapper .reply_see_more");
        this.JumptoReply("#detail .comments_wrapper .reply_text");
    };
    ListModule.prototype.bindLikeSty = function () {
        // 当前模式， 黑true 白 false
        // 如果当前存在点赞，则将红色设置为true，优先级最高
        // 如果当前不存在点赞，则根据皮肤选择，icon1 黑 icon2 白 icon3 红
        var _this = this;
        var likeWrapperList = document.querySelectorAll("#detail .operator_wrapper .like");
        likeWrapperList.forEach(function (likeWrapper, index) {
            var _a, _b, _c, _d, _e, _f;
            var postIsLike = likeWrapper.dataset.post_is_like == "false" ? false : true;
            (_a = likeWrapper.querySelector('.icon3')) === null || _a === void 0 ? void 0 : _a.classList.remove('true');
            (_b = likeWrapper.querySelector('.icon1')) === null || _b === void 0 ? void 0 : _b.classList.remove('true');
            (_c = likeWrapper.querySelector('.icon2')) === null || _c === void 0 ? void 0 : _c.classList.remove('true');
            if (postIsLike) { // 如果用户点赞了，则显示红色的按钮
                (_d = likeWrapper.querySelector('.icon3')) === null || _d === void 0 ? void 0 : _d.classList.add('true');
            }
            else {
                if (_this.themeFlag) { // 如果当前处于黑色背景下，则显示白色的按钮
                    (_e = likeWrapper.querySelector('.icon2')) === null || _e === void 0 ? void 0 : _e.classList.add('true');
                }
                else { // 如果当前处于白色的背景下，则显示黑色的按钮
                    (_f = likeWrapper.querySelector('.icon1')) === null || _f === void 0 ? void 0 : _f.classList.add('true');
                }
            }
        });
    };
    ListModule.prototype.bindLikeEvt = function () {
        var _this = this;
        // operate_btns like
        document.body.querySelectorAll("#detail .operator_wrapper .like").forEach(function (likeWrapper, index) {
            likeWrapper.onclick = function (event) {
                user_1.user.checkLogin(function () {
                    if (!user_1.user.isLogin()) {
                        user_1.user.login();
                        return;
                    }
                    else {
                        var post_id = String(likeWrapper.dataset.postid);
                        var likenumber_1 = parseInt(likeWrapper.dataset.likenumber);
                        var post_is_like_1 = likeWrapper.dataset.post_is_like == "false" ? true : false;
                        utils_1.handleLike(post_is_like_1, post_id).then(function (res) {
                            var _a, _b, _c;
                            // 清除所有点赞的icon样式
                            likeWrapper.querySelectorAll('.icon').forEach(function (v) {
                                v.classList.remove('true');
                            });
                            likeWrapper.dataset.post_is_like = String(post_is_like_1);
                            (new bubble_1.Bubble(post_is_like_1 ? '点赞成功' : '取消点赞成功')).enter();
                            var n = post_is_like_1 ? 1 : -1;
                            likenumber_1 += n;
                            if (post_is_like_1) {
                                (_a = likeWrapper.querySelector('.icon3')) === null || _a === void 0 ? void 0 : _a.classList.add('true');
                            }
                            else {
                                if (_this.themeFlag) { // 如果当前处于黑色背景下，则显示白色的按钮
                                    (_b = likeWrapper.querySelector('.icon2')) === null || _b === void 0 ? void 0 : _b.classList.add('true');
                                }
                                else { // 如果当前处于白色的背景下，则显示黑色的按钮
                                    (_c = likeWrapper.querySelector('.icon1')) === null || _c === void 0 ? void 0 : _c.classList.add('true');
                                }
                            }
                            likeWrapper.dataset.likenumber = String(likenumber_1);
                            if (likenumber_1 <= 0) {
                                likeWrapper.querySelector(".number_count").innerHTML = '';
                            }
                            else {
                                likeWrapper.querySelector(".number_count").innerHTML = String(likenumber_1);
                            }
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                });
            };
        });
    };
    ListModule.prototype.bindShare = function () {
        var shareList = document.body.querySelectorAll("#detail .operator_wrapper .share[data-flag='0']");
        shareList.forEach(function (item, index) {
            item.dataset.flag = '1';
            var desc = item.dataset.desc ? item.dataset.desc : "";
            var title = item.dataset.title ? item.dataset.title : "";
            var postid = item.dataset.postid ? item.dataset.postid : "0";
            var frombar = item.dataset.frombar ? item.dataset.frombar : "";
            var stockcode = item.dataset.stockcode ? item.dataset.stockcode : "";
            if (!title) {
                title = desc;
            }
            item.onclick = function (event) {
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Share({
                        "type": "weixin,pengyouquan,qq,qzone,weibo",
                        "img": "https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png",
                        "title": (title.length > 40 ? (title.substring(0, 40) + '...') : title) + "_" + frombar + "(" + stockcode + ")\u80A1\u5427_\u4E1C\u65B9\u8D22\u5BCC\u7F51\u80A1\u5427",
                        "url": "http://mguba.eastmoney.com/mguba/article/0/" + postid,
                        "desc": desc
                    });
                }
                else {
                    util_1.share((title.length > 40 ? (title.substring(0, 40) + '...') : title) + "_" + frombar + "(" + stockcode + ")\u80A1\u5427_\u4E1C\u65B9\u8D22\u5BCC\u7F51\u80A1\u5427", desc, "//mguba.eastmoney.com/mguba/article/0/" + postid, shareList);
                }
            };
        });
    };
    ListModule.prototype.bindImg = function () {
        var imagelist = document.querySelectorAll(".show_picture1");
        [].forEach.call(imagelist, function (v) {
            var url = v.dataset.url;
            if (!url || typeof url === undefined)
                return;
            v.onclick = function () {
                (new mask_1.MaskImage()).init(url);
            };
        });
    };
    ListModule.prototype.bindCommentsImage = function () {
        var imagelist = document.querySelectorAll(".right_wrapper .show_picture");
        [].forEach.call(imagelist, function (v) {
            var url = v.dataset.url;
            if (!url || typeof url === undefined)
                return;
            v.onclick = function () {
                (new mask_1.MaskImage()).init(url);
            };
        });
    };
    // 跳转到用户
    ListModule.prototype.bindUser = function () {
        this.JumptoUserInfo("#detail .new_hot_list_item .userinfo_wrapper");
        this.JumptoUserInfo("#detail .user_one_comment .left_wrapper .niki_name");
    };
    // 标题和内容重复，只显示内容不显示标题
    ListModule.prototype.bindUniq = function () {
        var articleLists = document.querySelectorAll(".article_wrapper");
        articleLists.forEach(function (el) {
            var titleText = el.dataset.articletitle;
            var contentText = el.dataset.articlecontent;
            if (titleText === contentText) {
                console.log("删除标题：", titleText);
                // 删除标题
                var titleDOM = el.querySelector(".title_wrapper_");
                if (titleDOM) {
                    titleDOM.parentNode.removeChild(titleDOM);
                }
            }
        });
    };
    // 评论超出三行显示省略号....
    ListModule.prototype.bindReplyEllipsis = function () {
        var EllipsisList = document.querySelectorAll(".reply_text");
        EllipsisList.forEach(function (el) {
            var text = el.dataset.reply || '';
            var length = 55;
            if (/\d{4,6}/.test(text)) {
                length = 60;
            }
            if (text.length > length) {
                el.innerHTML = text.substring(0, length) + "...";
            }
        });
    };
    return ListModule;
}());
exports.ListModule = ListModule;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskImage = void 0;
var css = __webpack_require__(167);
var maskHBS = __webpack_require__(168);
var MaskImage = /** @class */ (function () {
    function MaskImage() {
        this.root = document.createElement('div');
        this.root.className = "__mask_z mask_self";
        document.body.appendChild(this.root);
    }
    MaskImage.prototype.init = function (url) {
        this.root.innerHTML = maskHBS({ url: url });
        this.root.innerHTML = "\n        <img src=\"" + url + "\" class=\"__zoom-image\"></div>\n        ";
        // <img src="${url}" style="width: 300px;height:auto;"></div>
        this.bind();
    };
    MaskImage.prototype.bind = function () {
        this.root.onclick = function (e) {
            var mask = document.querySelector(".mask_self");
            mask.querySelector('img').className = "__zoom-image out";
            mask.style.opacity = "0";
            setTimeout(function () {
                var _a;
                (_a = mask === null || mask === void 0 ? void 0 : mask.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(mask);
            }, 300);
        };
    };
    return MaskImage;
}());
exports.MaskImage = MaskImage;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"mask\" style=\"width: 100%; height: 100vh;overflow:hidden; display:flex;justify-content:center;align-items:center; z-index: 1000;\">\n    \n</div>";
},"useData":true});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"new_hot_list_item\">\n    <div class=\"userinfo_wrapper _ifuserinfo_uniq\" data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"qmarket") : depth0), depth0))
    + "\" data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"stockcode") : depth0), depth0))
    + "\" data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"frombar") : depth0), depth0))
    + "\"\n        data-third_app_code=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"third_app_code") : depth0), depth0))
    + "\" data-user_is_majia=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_is_majia") : depth0), depth0))
    + "\" data-userid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"userid") : depth0), depth0))
    + "\">\n        <img class=\"user_avator\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"avatar") : depth0), depth0))
    + "\">\n        <div class=\"user_detail\">\n            <p class=\"user_name\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "\n            </p>\n            <p class=\"display_time\">"
    + alias2(__default(__webpack_require__(170)).call(alias3,(depth0 != null ? lookupProperty(depth0,"create_time") : depth0),{"name":"ftime2","hash":{},"data":data,"loc":{"start":{"line":10,"column":36},"end":{"line":10,"column":58}}}))
    + "</p>\n        </div>\n    </div>\n\n    <div \n        class=\"article_wrapper\" \n        tracker-eventcode=\"gbhty_hty_lb_wz\" \n        tracker-extinfo=\"htId:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + ";postId:"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\"\n        data-articleContent=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\" \n        data-articleTitle=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\"\n        >\n        <div \n            class=\"title_wrapper_\" \n            data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":62}}})) != null ? stack1 : "")
    + "\" \n            data-post_type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\"\n            data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\"\n            >\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"topflag") : depth0),1,{"name":"equal","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":29,"column":22}}})) != null ? stack1 : "")
    + "            <span class=\"title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</span>\n        </div>\n\n        <div class=\"content_wrapper\">\n            <div \n                class=\"content\" \n                data-h_name=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":36,"column":29},"end":{"line":36,"column":78}}})) != null ? stack1 : "")
    + "\"\n                data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":66}}})) != null ? stack1 : "")
    + "\" \n                data-post_type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\"\n                data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\n            </div>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? lookupProperty(depth0,"post_has_pic") : depth0),true,{"name":"equal","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":44,"column":22}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"isComments") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":95,"column":7}}})) != null ? stack1 : "")
    + "\n        <div class=\"operator_wrapper\" data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n            <div class=\"left\">\n                <div \n                    class=\"share icon_wrapper\" \n                    data-flag=\"0\" \n                    data-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\" \n                    data-desc=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "\"\n                    data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\" \n                    data-frombar=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"frombar") : depth0), depth0))
    + "\" \n                    data-stockcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"stockcode") : depth0), depth0))
    + "\"\n                >\n                    <em class=\"icon icon-z_share\"></em>\n                    <span>分享</span>\n                </div>\n                <div \n                    class=\"comment icon_wrapper\" \n                    data-h_name=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":113,"column":33},"end":{"line":113,"column":82}}})) != null ? stack1 : "")
    + "\"\n                    data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":35},"end":{"line":114,"column":70}}})) != null ? stack1 : "")
    + "\" \n                    data-post_type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\"\n                    data-CommentNumber=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0), depth0))
    + "\" \n                    data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\"\n                >\n                    <em class=\"icon icon-z_comments\"></em>\n                    <span class=\"comment_number\">"
    + alias2(__default(__webpack_require__(20)).call(alias3,(depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0),{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":120,"column":49},"end":{"line":120,"column":76}}}))
    + "</span>\n                </div>\n                <div \n                    class=\"like icon_wrapper\" \n                    data-post_is_like=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_is_like") : depth0), depth0))
    + "\" \n                    data-likenumber=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"LikeNumber") : depth0), depth0))
    + "\"\n                    data-postid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n                    <em class=\"icon icon_detail_like true icon1\"></em>\n                    <em class=\"icon icon_detail_like-w icon2\"></em>\n                    <em class=\"icon icon_dougu_like icon3\"></em>\n                    <span class=\"number_count\">"
    + alias2(__default(__webpack_require__(20)).call(alias3,(depth0 != null ? lookupProperty(depth0,"LikeNumber") : depth0),{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":130,"column":47},"end":{"line":130,"column":71}}}))
    + "</span>\n                </div>\n            </div>\n            <em class=\"right cancel icon\"></em>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"third_id") : depth0), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"top\">置顶</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"ip") : depth0), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_pic_url") : depth0), depth0))
    + "\" data-url=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_pic_url") : depth0), depth0))
    + "\" class=\"show_picture1\" style=\"min-width: 100px;\">\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"comments_wrapper\" data-postid=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"reply_list") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":8},"end":{"line":77,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isComments") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":4},"end":{"line":94,"column":11}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"user_one_comment\">\n            <span class=\"left_wrapper\">\n                <span class=\"niki_name _ifuserinfo_uniq\" data-userid=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"reply_user") : depth0)) != null ? lookupProperty(stack1,"user_id") : stack1), depth0))
    + "\">\n                    "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"reply_user") : depth0)) != null ? lookupProperty(stack1,"user_nickname") : stack1), depth0))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"reply_is_author") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":58,"column":27}}})) != null ? stack1 : "")
    + "                    : &nbsp;\n                </span>\n            </span>\n            <span class=\"right_wrapper\">\n                <span \n                    class=\"reply_text\" \n                    data-reply=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reply_text") : depth0), depth0))
    + "\" \n                    data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[1] != null ? lookupProperty(depths[1],"third_id") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":35},"end":{"line":66,"column":76}}})) != null ? stack1 : "")
    + "\" \n                    data-post_type=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"post_type") : depths[1]), depth0))
    + "\"\n                    data-postid=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"postid") : depths[1]), depth0))
    + "\"\n                >"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reply_text") : depth0), depth0))
    + "</span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"reply_has_picture") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":16},"end":{"line":74,"column":23}}})) != null ? stack1 : "")
    + "            </span>\n        </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                    <em class='icon icon_detail_author' style=\"vertical-align: -6px;\"></em>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"third_id") : depths[1]), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <em class='icon icon_detail_image_sm'></em>\n                <span class=\"show_picture\" data-url=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"reply_picture") : depth0), depth0))
    + "\">查看图片</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"see_more_wrapper\">\n        <div \n            class=\"reply_see_more\" \n            data-h_name=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":85,"column":25},"end":{"line":85,"column":74}}})) != null ? stack1 : "")
    + "\"\n            data-third_id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"third_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":27},"end":{"line":86,"column":62}}})) != null ? stack1 : "")
    + "\" \n            data-post_type=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"post_type") : depth0), depth0))
    + "\"\n            data-CommentNumber=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0), depth0))
    + "\" \n            data-postid=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"postid") : depth0), depth0))
    + "\">\n        查看全部"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"CommentNumber") : depth0), depth0))
    + "条评论\n        </div>\n        <em class=\" icon icon_detail_more\"\"></em>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"res") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":136,"column":13}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = function(time) {
    //  {{!-- post_time: "2021-07-06T17:17:47" --}}
    // time = "2020-08-13T17:17:47";
    var arr = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(?:\d{2})/.exec(time);
    var year = arr[1],
        mon = arr[2],
        day = arr[3],
        hour = arr[4],
        min = arr[5];

    arr = (new Date().toLocaleDateString()).split('/');
    var nYear = arr[0],
        nMonth = arr[1],
        nDay = arr[2];

    if (nMonth < 10) {
        nMonth = '0' + nMonth;
    }
    if (nDay < 10) {
        nDay = '0' + nDay;
    }

    // 不同年 返回 2020-12-31 15:00
    if (nYear == year && nMonth == mon && nDay == day) {
        // 同天 今天 14:30
        return "今天" + hour + ":" + min
    }
    if (nYear != year) {
        return year + "-" + mon + "-" + day + " " + hour + ":" + min;
    } else {
        return mon + "-" + day + " " + hour + ":" + min;
    }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"occupy\">\n<div class=\"new_hot_list_title\" id=\"suction\"> \n\n    <div class=\"hot_wrapper title_wrapper active\">\n        <div class=\"hot_text\">热门</div>\n        <div class=\"btn\"></div>\n    </div>\n\n    <div class=\"new_wrapper title_wrapper \">\n        <div class=\"new_text\">最新</div>\n        <div class=\"btn\"></div>\n    </div>\n\n</div>\n<div id=\"list_wrapper\">\n</div>\n</div>\n";
},"useData":true});

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerModule = void 0;
var bannerHBS = __webpack_require__(175);
var css = __webpack_require__(176);
var BannerModule = /** @class */ (function () {
    function BannerModule(root) {
        this.root = root;
        this.root.innerHTML = bannerHBS({});
    }
    BannerModule.prototype.init = function (res) {
        // res.isVote = false;
        // res.name +=res.name; // 延长lead标题
        this.root.innerHTML = bannerHBS(res);
    };
    return BannerModule;
}());
exports.BannerModule = BannerModule;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"banner_title_wrapper_is_vote\">\n        <span class=\"_v_uniq_vote_901\">投票</span>\n        <span class=\"_v_uniq_name_901\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":47}}}) : helper)))
    + "</span>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"banner_title_wrapper\">\n        <div class=\"banner_title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":42}}}) : helper)))
    + "</div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"banner_img\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"rectangleImg2") || (depth0 != null ? lookupProperty(depth0,"rectangleImg2") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"rectangleImg2","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":46}}}) : helper)))
    + "\" />\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isVote") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadModule = void 0;
var user_1 = __webpack_require__(8);
var api_1 = __webpack_require__(21);
var util_1 = __webpack_require__(17);
var bridge_1 = __webpack_require__(2);
var css = __webpack_require__(178);
var leadHBS = __webpack_require__(179);
var LeadModule = /** @class */ (function () {
    function LeadModule(root) {
        this.collectflag = false;
        this.root = root;
        // this.root.innerHTML = leadHBS({});
    }
    LeadModule.prototype.init = function (res) {
        // @ts-ignore
        res.isCollect = this.collectflag;
        // @ts-ignore
        res._leadInfo = res.lead; // 和文件名一样会导致无法渲染
        this.content = res._leadInfo;
        this.root.innerHTML = leadHBS(res);
        this.bindEllipsis();
        this.isCollect();
        this.bindCollectEvent();
    };
    ;
    // 是否超过4行 添加...全文
    LeadModule.prototype.bindEllipsis = function () {
        if (!bridge_1.isHybrid() && bridge_1.isAndroid()) {
            var leadElement_1 = this.root.querySelector(".text_info_wrapper .text_info");
            leadElement_1.classList.add('_ell');
            var content_1 = this.content;
            var extraString = "<div class=\"after_ellipsis\"><em class=\"icon icon_detail_zhankai\"></em></div>";
            var length_1 = 96;
            if (/\d{4,6}/.test(content_1)) {
                length_1 = 104;
            }
            if (content_1.length >= 100) {
                leadElement_1.innerHTML = content_1.substring(0, length_1) + "......" + extraString;
            }
            var after_ellipsis_1 = leadElement_1.querySelector(".after_ellipsis");
            after_ellipsis_1.onclick = function () {
                var _a;
                (_a = after_ellipsis_1.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("_ell");
                leadElement_1.innerHTML = content_1;
            };
        }
        else {
            var leadElement_2 = this.root.querySelector(".text_info_wrapper .text_info");
            var content_2 = this.content;
            var extraString = "<div class=\"after_ellipsis\"><em class=\"icon icon_detail_zhankai\"></em></div>";
            util_1.ellipsisMsg(leadElement_2, 4, 6, extraString);
            var after_ellipsis_2 = leadElement_2.querySelector(".after_ellipsis");
            if (!after_ellipsis_2)
                return;
            after_ellipsis_2.onclick = function () {
                var _a;
                (_a = after_ellipsis_2.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("ellipsis");
                leadElement_2.innerHTML = content_2;
            };
        }
    };
    LeadModule.prototype.isCollect = function () {
        var _this = this;
        user_1.user.checkLogin(function () {
            if (!user_1.user.isLogin()) {
                return;
            }
            else {
                api_1.getUserCollectRead().then(function (res) {
                    _this.collectflag = res.has_collect;
                    _this.refreshCollectFlag();
                });
            }
        });
    };
    LeadModule.prototype.bindCollectEvent = function () {
        var _this = this;
        var collectElement = this.root.querySelector(".collect_btn .text");
        var collectBtn = this.root.querySelector(".collect_btn");
        var text = collectElement.innerHTML;
        if (text === "已收藏") {
            collectBtn.classList.add("__yishoucang");
        }
        else {
            collectBtn.classList.remove("__yishoucang");
        }
        // __yishoucang
        collectElement.onclick = function () {
            user_1.user.checkLogin(function () {
                if (!user_1.user.isLogin()) {
                    user_1.user.login();
                    return;
                }
                else {
                    api_1.getTopicCollect(_this.collectflag).then(function (res) {
                        _this.collectflag = !_this.collectflag;
                        _this.refreshCollectFlag();
                    })
                        .catch(function (err) {
                        if (err.me == "已收藏") {
                            _this.collectflag = true;
                            // collectElement.classList.add("collected");
                            collectBtn.classList.add("__yishoucang");
                            collectElement.innerHTML = "已收藏";
                        }
                    });
                }
            });
        };
    };
    LeadModule.prototype.refreshCollectFlag = function () {
        var collectElement = this.root.querySelector(".collect_btn .text");
        collectElement.classList.remove("" + (!this.collectflag ? "collect" : "uncollect"));
        collectElement.classList.add("" + (this.collectflag ? "collect" : "uncollect"));
        collectElement.innerHTML = this.collectflag ? "已收藏" : "+ 收藏";
        this.bindCollectEvent();
    };
    return LeadModule;
}());
exports.LeadModule = LeadModule;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"collect_btn\">\n        <div class=\"text\">+ 收藏</div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"collect_btn __yishoucang\">\n        <div class=\"text\">已收藏</div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"text_info_wrapper\">\n    <div class=\"text_info ellipsis\">"
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"_leadInfo") : depth0), depth0))
    + "</div>\n</div>\n<div class=\"text_footer_wrapper\">\n    <div class=\"dynamic_data\">\n        <div class=\"read_count\">阅读"
    + alias1(__default(__webpack_require__(6)).call(alias2,(depth0 != null ? lookupProperty(depth0,"clickCount") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":6,"column":34},"end":{"line":6,"column":58}}}))
    + "</div>\n        <div class=\"discuss_count\">讨论"
    + alias1(__default(__webpack_require__(6)).call(alias2,(depth0 != null ? lookupProperty(depth0,"participantCount") : depth0),{"name":"formatNum","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":67}}}))
    + "</div>\n    </div>\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias2,(depth0 != null ? lookupProperty(depth0,"isCollect") : depth0),false,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":13,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias2,(depth0 != null ? lookupProperty(depth0,"isCollect") : depth0),true,{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":14}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var util_1 = __webpack_require__(13);
var util_2 = __webpack_require__(17);
__webpack_require__(181);
var headerHBS = __webpack_require__(182);
var Header = /** @class */ (function () {
    function Header(root, type) {
        this.root = root;
        this.type = 0;
        this.flag = false; // 拼音输入
        this.type = type ? type : 0;
        this.htid = utils_1.queryId();
        this.root.innerHTML = headerHBS({ type: type, 'htid': this.htid });
    }
    Header.prototype.enter = function (re) {
        var _this = this;
        util_2.msg(re, re.title);
        this.show();
        if (bridge_1.isWeixin()) {
            this.hide();
        }
        switch (this.type) {
            case 5: // 非内嵌中用的透明header 斗股
                var type5Header_1 = this.root.querySelector(".type5");
                type5Header_1.style.background = "transparent";
                setTimeout(function () {
                    var height = 200;
                    document.querySelector("#body").addEventListener('scroll', function (event) {
                        if (event.target.scrollTop > height) {
                            type5Header_1.style.background = bridge_1.getSkin() == "b" ? "#1c1c1c" : "#ee5504";
                        }
                        else if (event.target.scrollTop > 0 && event.target.scrollTop < height) {
                            type5Header_1.style.background = bridge_1.getSkin() == "b" ? "rgba(28, 28, 28, " + event.target.scrollTop / height + ")" : "rgba(234, 85, 4, " + event.target.scrollTop / height + ")";
                        }
                        else {
                            type5Header_1.style.background = "transparent";
                        }
                    });
                }, 500);
                break;
            default: // 0 最普通的头部 支持传标题
        }
        this.root.querySelector(".icon_left_arrow").onclick = function () {
            window.history.go(-1);
        };
        var shareElement = document.querySelector(".header_share_text");
        if (shareElement) {
            shareElement.addEventListener('click', function (e) {
                setTimeout(function () {
                    var _a, _b, _c, _d, _e;
                    // 数据埋点 100% 分享列表
                    var wechat = (_a = document.querySelector(".icons-share-wechat")) === null || _a === void 0 ? void 0 : _a.parentNode;
                    var moment = (_b = document.querySelector(".icons-share-moment")) === null || _b === void 0 ? void 0 : _b.parentNode;
                    var zone = (_c = document.querySelector(".icons-share-qzone")) === null || _c === void 0 ? void 0 : _c.parentNode;
                    var weibo = (_d = document.querySelector(".icons-share-weibo")) === null || _d === void 0 ? void 0 : _d.parentNode;
                    var qq = (_e = document.querySelector(".icons-share-qq")) === null || _e === void 0 ? void 0 : _e.parentNode;
                    wechat.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    moment.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    zone.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    weibo.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    qq.setAttribute("tracker-extinfo", "htid:" + _this.htid);
                    wechat.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.wxhy");
                    moment.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.pyq");
                    zone.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.QQkj");
                    weibo.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.xlwb");
                    qq.setAttribute("tracker-eventcode", "gbhty.dghtxqy.fxdc.QQhy");
                });
            });
        }
    };
    Header.prototype.show = function () {
        this.root.querySelector(".header_wrap").style.display = "-webkit-flex";
    };
    Header.prototype.hide = function () {
        this.root.querySelector(".header_wrap").style.display = "none";
    };
    Header.prototype.setShare = function (title, desc) {
        if (this.type == 5) { // 3 4 5类型的header才有分享按钮
            var shareElement_1 = this.root.querySelector(".header_share_text");
            util_2.msg(shareElement_1);
            shareElement_1.addEventListener('click', function (e) {
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5Share({
                        "type": "weixin,pengyouquan,qq,qzone,weibo",
                        "img": "https://gbfek.dfcfw.com/deploy/mguba2020/work/img/share.png",
                        "title": title,
                        "url": bridge_1.isIOS() ? encodeURIComponent(window.location.href) : window.location.href,
                        "desc": desc
                    });
                }
                else {
                    util_1.share(title, desc, window.location.href, shareElement_1);
                }
            });
        }
    };
    Header.prototype.setTitle = function (title) {
        if (this.type == 3) {
            this.root.querySelector(".title").innerHTML = title;
        }
    };
    return Header;
}());
exports.Header = Header;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n    <h4 class=\"title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h4>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <em class=\"icon icon_left_arrow\"></em>\n   <div class=\"title-wrapper\">\n        <div class=\"title _z_ellipsis\"></div>\n   </div>\n    <em class=\"header_share\" tracker-eventcode=\"gbhty.dghtxqy.db.fx\" tracker-extinfo=\"htId:"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"htid") : depth0), depth0))
    + "\">\n        <span class=\"header_share_text\">分享</span></em>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header_wrap type"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\">\n"
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),0,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":5,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = __default(__webpack_require__(1)).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),5,{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":13,"column":14}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterModule = void 0;
var utils_1 = __webpack_require__(3);
var bridge_1 = __webpack_require__(2);
var user_1 = __webpack_require__(8);
var router_1 = __webpack_require__(10);
var footerHBS = __webpack_require__(184);
var css = __webpack_require__(185);
var FooterModule = /** @class */ (function () {
    function FooterModule(root) {
        this.root = root;
    }
    FooterModule.prototype.init = function (res) {
        this.root.innerHTML = footerHBS(res);
        this.result = res;
        this.bindDisscuss();
        this.JumtoMoreDiscuss();
    };
    FooterModule.prototype.bindDisscuss = function () {
        var self = this;
        document.querySelector(".input_wrapper .discuss_content_wrapper").onclick = function (e) {
            e.preventDefault();
            if (bridge_1.isHybrid()) {
                user_1.user.checkLogin(function (res) {
                    if (!user_1.user.isLogin()) {
                        user_1.user.login();
                        return;
                    }
                    bridge_1.emH5PublishTopic('zssh000001', utils_1.queryId(), self.result.name, '上证指数', function () { });
                });
            }
            else {
                window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href) + "&tran1=trans&tran2=1";
            }
        };
    };
    // 更多热门话题
    FooterModule.prototype.JumtoMoreDiscuss = function () {
        var dom = this.root.querySelector(".more_discuss .more");
        dom.onclick = function () {
            if (bridge_1.isHybrid()) {
                router_1.router.navigate("/");
            }
            else {
                // 跳到下载页
                window.location.href = "http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=" + encodeURIComponent(window.location.href) + "&tran1=trans&tran2=1";
            }
        };
    };
    return FooterModule;
}());
exports.FooterModule = FooterModule;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input_wrapper\" tracker-eventcode=\"gbhty_hty_db_cytl\" tracker-extinfo=\"htId:"
    + alias4(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":95}}}) : helper)))
    + "\">\n    <div class=\"discuss_content_wrapper\">\n        <i class=\"icon icon_pencil icon-z_pencil\"></i>\n        <div class=\"text discuss\">和"
    + alias4(((helper = (helper = lookupProperty(helpers,"participantCount") || (depth0 != null ? lookupProperty(depth0,"participantCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participantCount","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":55}}}) : helper)))
    + "人一起讨论</div>\n    </div>\n</div>\n<div class=\"more_discuss\">\n    <div class=\"more\" tracker-eventcode=\"gbhty_hty_db_gdht\" tracker-extinfo=\"htId:"
    + alias4(((helper = (helper = lookupProperty(helpers,"htid") || (depth0 != null ? lookupProperty(depth0,"htid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htid","hash":{},"data":data,"loc":{"start":{"line":10,"column":82},"end":{"line":10,"column":90}}}) : helper)))
    + "\">更多话题</div>\n    <div class=\"icon icon_detail_db_arrow\"></div>\n</div>\n\n\n";
},"useData":true});

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.slideDOM = void 0;
var css = __webpack_require__(187);
function slideDOM() {
    var hotDOM = document.querySelector(".new_hot_list_title .hot_wrapper");
    var newDOM = document.querySelector(".new_hot_list_title .new_wrapper");
    var listDOM = document.querySelector("#list_wrapper");
    newDOM.addEventListener('click', function (e) {
        listDOM.style.transform = "translate(-50%, 0px)";
    });
    hotDOM.addEventListener('click', function (e) {
        listDOM.style.transform = "translate(0,0)";
    });
    var _sx = 0; // 开始X轴位置
    var _ex = 0; // 结束X轴位置
    var _sy = 0;
    var _ey = 0;
    var _st = 0; // 开始时间
    var _et = 0; // 结束时间
    var x = 0; // 水平滑动的差值，负数右滑倒最新，正数左滑倒热门
    var y = 0; // 垂直滑动的差值，如果振幅较大，则不滑动
    var INTERVAL = 300; // ms
    var diff = 0;
    var body = document.querySelector("#body");
    body.addEventListener("touchstart", function (e) {
        var touch = e.changedTouches[0];
        _sx = touch.pageX;
        _sy = touch.pageY;
        _st = e.timeStamp;
        console.log(_sx, _st);
    });
    body.addEventListener("touchmove", function (e) {
        var touch = e.changedTouches[0];
        _ex = touch.pageX;
        _ey = touch.pageY;
        _et = e.timeStamp;
        x = Math.floor(_ex - _sx);
        y = Math.floor(_ey - _sy);
        diff = Math.floor(_et - _st);
        if (diff > INTERVAL || y > 10 || y < -10)
            return;
        if (x > 50) {
            hotDOM.click();
        }
        else if (x < -50) {
            newDOM.click();
        }
        console.log(y);
    });
}
exports.slideDOM = slideDOM;
// 当没有相关股票、资讯和投票的时候，取消lead的下划线 ｜ 将list_wrapper距离top的值变小
function simplifyPage(res) {
    // 如果voteModule没有，则移除
    // RelateIndex stock_list voteEntity ZxInfo
    var RelateIndex = res.RelateIndex, stock_list = res.stock_list, voteEntity = res.voteEntity, ZxInfo = res.ZxInfo;
    var ifHaveModule = (RelateIndex && RelateIndex.length !== 0) || (stock_list && stock_list.length !== 0) || (voteEntity && voteEntity.length !== 0) || ZxInfo ? true : false;
    if (ifHaveModule)
        return; // 如果拥有，则返回
    // 缩小间距
    var detailListDOM = document.querySelector("#detail_list");
    if (!detailListDOM)
        return;
    var marginTop = getComputedStyle(detailListDOM).marginTop;
    detailListDOM.style.marginTop = parseInt(marginTop) / 2 + 'px';
    // 移除伪类
    var detailLeadDOM = document.querySelector("#detail_lead");
    if (detailLeadDOM.classList.contains("show_pseu")) {
        detailLeadDOM.classList.remove("show_pseu");
    }
    // 移除moduleBox
    var moduleBox = document.querySelector(".modules_box");
    // moduleBox.style.display = "none";
}
function init(res) {
    simplifyPage(res);
    // slideDOM();
}
exports.init = init;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageStocks = void 0;
var utils_1 = __webpack_require__(3);
var api_1 = __webpack_require__(21);
var util_1 = __webpack_require__(17);
var header_1 = __webpack_require__(12);
var bridge_1 = __webpack_require__(2);
var page_1 = __webpack_require__(7);
var css = __webpack_require__(190);
var stockHBS = __webpack_require__(191);
var itemHBS = __webpack_require__(192);
var PageStocks = /** @class */ (function (_super) {
    __extends(PageStocks, _super);
    function PageStocks() {
        var _this = _super.call(this) || this;
        _this.sort = true; // true 正序
        return _this;
    }
    PageStocks.prototype.enter = function (parent) {
        var header = new header_1.Header(utils_1.querySelector('header'), 0);
        header.enter({ title: "相关股票" });
        setTimeout(function () {
            bridge_1.setTop();
        }, 200);
        this.root.innerHTML = stockHBS({});
        this.getHashStocksCode(); // 获取行情数据
    };
    PageStocks.prototype.bindEvt = function () {
        this.bindSort();
        this.jumpToHqSinglePage();
    };
    /* 排序股票价格和股票的涨跌幅 */
    PageStocks.prototype.bindSort = function () {
        // 最新价格排序
        this.doSort(document.querySelector("#z_stocks .head_new span"), 'newPrice');
        // 涨跌幅排序
        this.doSort(document.querySelector("#z_stocks .head_rate span"), 'upDownRate');
    };
    /*
    @params:
        el: 点击的元素
        sortField 用以排序的字段，有价格和涨跌幅
     */
    PageStocks.prototype.doSort = function (el, sortField) {
        var _this = this;
        el.onclick = function (e) {
            var parentNode = el.parentElement;
            var arrows = document.querySelectorAll("#z_stocks em.icon_sort");
            var newArrow = arrows[0];
            var rateArrow = arrows[1];
            var targetBool = e.target.innerHTML === "最新" ? true : false;
            console.log(targetBool, newArrow, rateArrow);
            newArrow.classList.remove("up");
            newArrow.classList.remove("down");
            rateArrow.classList.remove("up");
            rateArrow.classList.remove("down");
            rateArrow.parentElement.classList.add("faker");
            newArrow.parentElement.classList.add("faker");
            if (targetBool) { // 如果是最新
                if (_this.sort === true) {
                    newArrow.classList.add("up");
                }
                else {
                    newArrow.classList.add("down");
                }
                newArrow.parentElement.classList.remove("faker");
            }
            else {
                if (_this.sort === true) {
                    rateArrow.classList.add("up");
                }
                else {
                    rateArrow.classList.add("down");
                }
                rateArrow.parentElement.classList.remove("faker");
            }
            _this.hqlist.sort(function (a, b) {
                util_1.msg(parseFloat(a[sortField]), parseFloat(b[sortField]));
                return parseFloat(a[sortField]) - parseFloat(b[sortField]);
            });
            if (_this.sort === false) {
                _this.hqlist.reverse();
            }
            _this.sort = !_this.sort;
            _this.root.querySelectorAll(".item").forEach(function (item) {
                item.remove();
            });
            _this.root.querySelector("ul").insertAdjacentHTML("beforeend", itemHBS({ fmtDataList: _this.hqlist }));
            _this.jumpToHqSinglePage();
        };
    };
    /*
    根据URL获取股票详情信息
     */
    PageStocks.prototype.getHashStocksCode = function () {
        var _this = this;
        var CLASS_UP = "up";
        var CLASS_DOWN = "down";
        // let codeList = getQueryVariable("code").split(",");
        var codeStr = decodeURIComponent(this.params.code);
        if (!codeStr) { // 如果不存在
            codeStr = utils_1.getQueryVariable("code");
        }
        var codeList = codeStr.split(',');
        api_1.getHqlistWithneedCode(codeList).then(function (res) {
            util_1.msg(res);
            var rawDataList = res.data.diff;
            var fmtDataList = [];
            if (rawDataList && rawDataList.length >= 1) {
                for (var _i = 0, rawDataList_1 = rawDataList; _i < rawDataList_1.length; _i++) {
                    var v = rawDataList_1[_i];
                    var upDownRate = v['f3']; // 涨跌幅
                    var name_1 = v['f14']; // 股票名称
                    var code = v['f12']; // 股票代码
                    var newPrice = v['f2']; // 股票最新价格
                    var market = v['f13']; // 市场号
                    var updownRate_class = void 0;
                    if (upDownRate > 0) {
                        updownRate_class = CLASS_UP;
                    }
                    else if (upDownRate < 0) {
                        updownRate_class = CLASS_DOWN;
                    }
                    fmtDataList.push({
                        upDownRate: upDownRate,
                        code: code,
                        name: name_1,
                        newPrice: newPrice,
                        updownRate_class: updownRate_class,
                        market: market
                    });
                }
                _this.root.innerHTML = stockHBS({ fmtDataList: fmtDataList });
                _this.hqlist = fmtDataList;
                _this.bindEvt();
            }
        });
    };
    // 点击股票跳转到行情单页
    PageStocks.prototype.jumpToHqSinglePage = function () {
        // 点击跳转
        this.root.querySelectorAll(".__z_stocks_list_single_item").forEach(function (item) {
            item.onclick = function () {
                var _a = item.dataset, qmarket = _a.qmarket, qcode = _a.qcode, name = _a.name;
                var rawQcode = qcode;
                switch (qmarket) {
                    case "0":
                        qcode = "SZ" + qcode;
                        break;
                    case "1":
                        qcode = "SH" + qcode;
                        break;
                    case "105":
                        qcode = "NASDAQ|" + qcode;
                        break;
                    case "106":
                        qcode = "NYSE|" + qcode;
                        break;
                    case "107":
                        qcode = "AMEX|" + qcode;
                        break;
                    case "116":
                        qcode = "HK|" + qcode;
                        break;
                    default:
                        break;
                }
                if (bridge_1.isHybrid()) {
                    bridge_1.emH5ToStock(qcode, name);
                }
                else {
                    // window.location.href = `http://emh5wap.eastmoney.com/h52n/CommScheme?linktype=838&h5url=${encodeURIComponent(window.location.href)}`;
                    window.location.href = "https://wap.eastmoney.com/quote/stock/" + qmarket + "." + rawQcode + ".html";
                }
            };
        });
    };
    return PageStocks;
}(page_1.Page));
exports.PageStocks = PageStocks;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        <li class=\"item __z_stocks_list_single_item\"\n            data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"market") : depth0), depth0))
    + "\"\n            data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"code") : depth0), depth0))
    + "\"\n            data-name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\"\n        >\n            <div class=\"code_name_wrapper\">\n                <p class=\"name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\n                <p class=\"code\">\n                    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"code") : depth0), depth0))
    + "\n                    <em class=\"icon icon_kc\"></em>\n                    <em class=\"icon icon_rong\"></em>\n                </p>\n            </div>\n            <div class=\"code_price_wrapper\">\n                <span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updownRate_class") : depth0), depth0))
    + " new_price\">\n                    "
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"newPrice") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":41,"column":20},"end":{"line":41,"column":39}}}))
    + "\n                </span>\n            </div>\n            <div class=\"code_rate_wrapper\">\n                <span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updownRate_class") : depth0), depth0))
    + "\">\n                    "
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"upDownRate") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":46,"column":20},"end":{"line":46,"column":41}}}))
    + "%\n                </span>\n            </div>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stocks\" id=\"z_stocks\">\n\n    <ul>\n        <li class=\"head\">\n            <div class=\"head_name\">名称/代码</div>\n            <div class=\"head_new faker\">\n                <span>最新</span>\n                <em class=\"icon icon_sort\"></em>\n            </div>\n            <div class=\"head_rate  faker\">\n                <span>涨幅</span>\n                <em class=\"icon icon_sort\"></em>\n            </div>\n\n        </li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fmtDataList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":50,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <li class=\"item __z_stocks_list_single_item\"\n            data-qmarket=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"market") : depth0), depth0))
    + "\"\n            data-qcode=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"code") : depth0), depth0))
    + "\"\n            data-name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\"\n        >\n            <div class=\"code_name_wrapper\">\n                <p class=\"name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\n                <p class=\"code\">\n                    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"code") : depth0), depth0))
    + "\n                    <em class=\"icon icon_kc\"></em>\n                    <em class=\"icon icon_rong\"></em>\n                </p>\n            </div>\n            <div class=\"code_price_wrapper\">\n                <span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updownRate_class") : depth0), depth0))
    + " new_price\">\n                    "
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"newPrice") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":39}}}))
    + "\n                </span>\n            </div>\n            <div class=\"code_rate_wrapper\">\n                <span class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"updownRate_class") : depth0), depth0))
    + "\">\n                    "
    + alias2(__default(__webpack_require__(4)).call(alias3,(depth0 != null ? lookupProperty(depth0,"upDownRate") : depth0),{"name":"adZero","hash":{},"data":data,"loc":{"start":{"line":42,"column":20},"end":{"line":42,"column":41}}}))
    + "%\n                </span>\n            </div>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fmtDataList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":46,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map