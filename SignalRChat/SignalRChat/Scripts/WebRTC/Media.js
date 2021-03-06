﻿/**
 * Common Javascript code.
 * Author: Andrej Hristoliubov
 * email: anhr@mail.ru
 * About me: http://anhr.github.io/AboutMe/
 * source: https://github.com/anhr/WebFeatures
 * Licences: GPL, The MIT License (MIT)
 * Copyright: (c) 2015 Andrej Hristoliubov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Revision:
 *  2015-07-01, : 
 *       + init.
 *
 */

//Эту переменную добавил для устранения конфликта имен функций
var media = {
    onWaitPermissionOK: function (toJSON) {
        var to = JSON.parse(toJSON);
        var toID = to.toID, waitPermissionId = parseInt(to.waitPermissionId);
        consoleLog('chat.client.onWaitPermissionOK("' + toID + '", ' + waitPermissionId + ')');
        switch(waitPermissionId){
            case 1://take snapshot
                var snapshot = getVideoBlock(getCameraID(toID)).querySelector('#Snapshot');
                snapshot.querySelector('#waitPermission').style.display = 'none';
                snapshot.querySelector('#download').style.visibility = 'visible';
                snapshot.querySelector('#snapshotBlock').style.display = 'block';
                break;
            case 2://camera recording
                var record = getVideoBlock(getCameraID(toID)).querySelector('#Record');
                record.querySelector('#recordBlock').style.display = 'block';
                record.querySelector('#waitPermission').style.display = 'none';
                break;
            case 3://microphone recording
                var record = getVideoBlock(getMicrophoneID(toID)).querySelector('#Record');
                record.querySelector('#recordBlock').style.display = 'block';
                record.querySelector('#waitPermission').style.display = 'none';
                break;
            default: consoleError('waitPermissionId = ' + waitPermissionId);
        }
    }
    , onWaitPermissionDenie: function(toJSON) {
        var to = JSON.parse(toJSON);
        var toID = to.toID, waitPermissionId = parseInt(to.waitPermissionId);
        consoleLog('onWaitPermissionDenie("' + toID + '", ' + waitPermissionId + ')');
        var toolName, message, mediaID;
        switch (waitPermissionId) {
            case 1://take snapshot
                mediaID = getCameraID(toID);
                toolName = 'Snapshot';
                message = lang.snapshotDenie;//"The owner of the video camera does not allow to take a snapshot.
                break;
            case 2://camera recording
                mediaID = getCameraID(toID);
                toolName = 'Record';
                message = lang.videoRecordDenie;//"The owner of the video camera does not allow you to start the video recording.
                break;
            case 3://microphone recording
                mediaID = getMicrophoneID(toID);
                toolName = 'Record';
                message = lang.microphonRecordDenie;//"The owner of the microphone does not allow you to start the audio recording.
                break;
            default: consoleError('waitPermissionId = ' + waitPermissionId);
                return;
        }
        var waitPermission = getVideoBlock(mediaID).querySelector('#' + toolName).querySelector('#waitPermission');
        waitPermission.querySelector('#message').innerText = message;
        AddSmile(waitPermission.querySelector('#respoce'), '😕');
    }
    , onWaitPermissionIgnore: function (toJSON)
    {
        var to = JSON.parse(toJSON);
        var toID = to.toID, waitPermissionId = parseInt(to.waitPermissionId);
        consoleLog('chat.client.onWaitPermissionIgnore("' + toID + '", ' + waitPermissionId + ')');
        var mediaID, toolName, message, elementDisabledName;
        switch(waitPermissionId){
            case 1://take snapshot
                mediaID = getCameraID(toID);
                toolName = 'Snapshot';
                message = lang.snapshotNotAllow;//'The owner of the video camera does not allow to you to request a new permissions to take a snapshot'
                elementDisabledName = '#takeSnapshot';
                break;
            case 2://camera recording
                mediaID = getCameraID(toID);
                toolName = 'Record';
                message = lang.cameraRecordNotAllow;//'The owner of the video camera does not allow to you to request new permissions for video recording.'
                elementDisabledName = '#record';
                break;
            case 3://microphone recording
                mediaID = getMicrophoneID(toID);
                toolName = 'Record';
                message = lang.microphoneRecordNotAllow;//'The owner of the microphone does not allow to you to request new permissions for audio recording.'
                elementDisabledName = '#record';
                break;
            default: consoleError('waitPermissionId = ' + waitPermissionId);
                return;
        }
        var block = getVideoBlock(mediaID);
        var waitPermission = block.querySelector('#' + toolName).querySelector('#waitPermission');
        waitPermission.querySelector('#message').innerText = message;
        AddSmile(waitPermission.querySelector('#respoce'), '😡');
        block.querySelector(elementDisabledName).disabled = true;
    }
}
function hideMicrophoneBlockTools(microphoneID) {
    hideMediaBlockTools(microphoneID, function () {
        var microphoneSettings = document.getElementById(getMicrophoneSettingsID());
        var microphoneSettingsExpanded = false;
        if (microphoneSettings)
            microphoneSettingsExpanded = microphoneSettings.className.indexOf('expanded') != -1;
        if (
                microphoneSettingsExpanded
            ||
                document.getElementById(getRecordID(microphoneID)).className.indexOf('expanded') != -1
            )
            return false;//do not hide tools if microphone settings is visible
        return true;
    })
}
function hideMediaBlockTools(mediaID, isHide) {
    //consoleLog('hideVideoBlockTools(mediaID = ' + mediaID + ')');
    var element = document.getElementById(getToolsID(mediaID));
    if (!element)
        return;
    var mediaBlock = getVideoBlock(mediaID);
    if (mediaBlock.addMedia) {
        try {
            if (!isHide())
                return;
        } catch (e) {
            consoleError('hideMediaBlockTools(' + mediaID + ') failed! ' + e);
        }
        element.className = element.className.replace(' expanded', '');
        //consoleLog('hideMediaBlockTools(mediaID = ' + mediaID + ') element.className: ' + element.className);
        setTimeout(function () { resizeVideos(); }, 1000);
    }
}

function elementMediaHeader(peersCountTitle) {
    return ' <span>: </span>'
                + '<span id="PeersCount" title="' + peersCountTitle + '">0</span> ♦ '
                + '<span id="currentTime" title="' + lang.currentTime + '">0</span>'//'Broadcast duration'
    ;
}

function elementMediaTools(options) {
    var fileTransfer = options.fileTransfer;
    var blockId = fileTransfer.getBlockID();

    var elementMedia = '';
    if (typeof options.toolButtons != 'undefined')
        elementMedia += options.toolButtons;
    elementMedia +=
            '<h1 onclick="javascript: ' + options.options.onRecordMedia + '(\'' + blockId + '\')" class="sendButton" style="position: relative;" title="' + options.mediaRecording + '">'
        + options.recordIcon + '</h1>';//📼✇🖭
    if ((typeof options.options != 'undefined') && (typeof options.options.localMediaTools != 'undefined'))
        elementMedia += options.options.localMediaTools;

    elementMedia = '<div style="width:inherit;overflow:auto;">' + elementMedia + '</div>';//этот див нужен что бы правильно устанвливались ширина окна, которые появляются при нажатии некоторых кнопок интструметов

    if (typeof options.toolFunctions != 'undefined')
        elementMedia += options.toolFunctions;

    //media recording
    elementMedia += '<div id="Record" class="b-toggle gradient_gray" style="width:inherit;padding:0px">'
        + '<div align="center"><h2>' + options.recordIcon + ' ' + options.mediaRecording + '</h2></div>'//📼
        + '<div id="recordBlock">'
            + '<div style="overflow: auto;">'
                + '<h1 id="record" onclick="javascript: ' + options.toggleMediaRecording + '(\'' + blockId + '\')" class="sendButton" style="float:left;" title="' + lang.startRecording + '">'//Start recording
                + '<font style="COLOR: red;">●</font></h1>'//⏺
                + '<span id="RecordDuration" style="float:left;margin-top:13px;padding-top:5px" title="' + lang.recordDuration + '"></span>'//'Record duration'
                + '<h1 id="download" onclick="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').mediaRecording'// + fileTransfer.options.options.mediaRecordingFunction
                        + '.download()" class="sendButton" style="float:left;display:none" title="' + options.downloadMedia + '">'//Download
                    + '💾</h1>'
            + '</div>'
            + '<' + options.media + ' id="recorded" style="display:none;width:inherit" controls'
/*
                        + ' onplay ="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').' + fileTransfer.options.options.mediaRecordingFunction + '.onplay()"'
                        + ' onpause="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').' + fileTransfer.options.options.mediaRecordingFunction + '.onpause()"'
                        + ' onended="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').' + fileTransfer.options.options.mediaRecordingFunction + '.onended()"'
*/
                        + ' onplay ="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').mediaRecording.onplay()"'
                        + ' onpause="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').mediaRecording.onpause()"'
                        + ' onended="javascript: document.getElementById(\'' + blockId + '\').querySelector(\'#Record\').mediaRecording.onended()"'
                    + '>'
                    + '</' + options.media + '>'
        + '</div>'
        + '<div id="waitPermission">'
            + '<span id="message"></span>'
            + ' ' + '<span id="respoce"></span>'
        + '</div>'
    + '</div>'
    //media settings
    + ((typeof options.options != 'undefined') ? '<div id="Settings" class="b-toggle gradient_gray"></div>' : '')
    ;
    return elementMedia;
}

function onRecordMedia(blockId, options) {
    consoleLog('onRecordMedia(blockId = ' + blockId + ')');
    onbranchelement(document.getElementById(blockId).querySelector('#Record'));
}

function toggleMediaRecording(blockId, MediaRecording) {
    consoleLog('toggleMediaRecording(' + blockId + ')');
    loadScript("Scripts/WebRTC/Recording.js", function () {
        var elementRecord = document.getElementById(blockId).querySelector('#Record');
        if (typeof elementRecord.mediaRecording == "undefined")
            elementRecord.mediaRecording = new MediaRecording(blockId);
        elementRecord.mediaRecording.toggleRecording();
    });
}

function getElementMedia(media) {
    return '<img id="wait" src="../img/Wait.gif" alt="wait" style="width:12px; height:12px;display:none" />'
        + '<span id="Message"'
        + ' class="Message"'//for Safari
        + '></span>'
        + media
    ;
}

function getSoundMeterID() {
    return "SoundMeter";
}

function elementSoundMeter(params) {
    //Audio stream volume https://webrtc.github.io/samples/src/content/getusermedia/volume/
    return '<div id="' + getSoundMeterID() + '"' + ((typeof params == 'undefined') ? '' : (' ' + params)) + '>'
          + '<span class="label">' + lang.audioVolume + ': </span>'//Audio volume
          + '<meter high="0.25" max="1" value="0"></meter>'
          + '<span class="value"></span>'
      + '</div>';
}



