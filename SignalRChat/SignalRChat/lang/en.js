﻿/**
 * Contains the dictionary of language entries.
 */
var lang = {
    enterNickname: 'Enter your nickname'
    , onunload: 'All chat content will be lost forever.'
    , incompatibleBrowser: 'Incompatible browser.'
    , openPage: 'opening page...'
    , nicknameBusy: 'The %s nickname is busy'
    , chatRoomError: 'The name of the chat room is not defined'
    , nicknameError: 'The nickname is not defined'
    , userJoined: ' joined'
    , userLeft: 'Visitor %s has left the chat.'
    , user: 'Visitor '
    , users: 'Visitors'
    , roomUsers: 'Visitors to the %s room'
    , duplicateUsernameInRoom: 'You are already in the "%s" room'
    , duplicateOtherUserInRoom: 'The %s visitor already in the "%s2" room'
    , userUpdatePrifile: 'User %s has updated profile. New name:'
    , queries: 'Queries'
    , queriesTitle: 'The list of queries to you from visitors of the chat'
    , noInvitations: 'No invitations'
    , rooms: 'Rooms'
    , room: 'room'
    , gotoRoom: 'Go to %s room'
    , privateUser: 'Private'
    , privateTitle: 'Invite %s for a private chat'
    , forPrivate: 'for a private conversation'
    , invite: 'Invite'
    , inviteTo: 'Invite %s user to the %s2 room'
    , invitationsText: 'Invitations text'
    , invitation: 'Invitation'
    , WaitingAnswer: 'Waiting for a visitor answer'
    , youInvited: 'You invited '
    , inPrivateRoom: ' into a private room. '
    , invitationAccepted: 'Your invitation has been accepted'
    , invitationRejected: 'Your invitation has been rejected'
    , hasRejected: ' has rejected your invitation.'
    , hasAccepted: ' has accepted your invitation.'
    , hasIgnore: ' does not allow to you to make a new invitations.'
    , inviteeNotAllow: 'The invitee does not allow to you to make a new invitations'
    , go: 'Go'
    , goTitle: 'Go to private room with '
    , privateRoomTitle: 'The name of the private room with '
    , privateRoomName: 'Private room name'
    , roomIsBusy: 'room is busy'
    , typeRoomName: 'Type a name of the room first'
    , strPrivate: 'private'
    , myProfile: 'My profile'
    , aboutUser: 'About'
    , from: 'from'
    , to: 'to'
    , accessDenied: 'You do not have access into "%s" private room'
    , invalidParameter: 'Invalid privateID : "%s" parameter'
    , ie6notCompatible: 'Your Internet Explorer 6 browser is not compatible with our web page'
    , contextMenu: 'Context Menu'
    , closeSmilesToolbar: 'Closes smiles toolbar'
    , openSmilesToolbar: 'Opens smiles toolbar'
    , smiles: 'smiles'
    , SingleLineMode: 'Single line mode'
    , MultilineMode: 'Multiline mode'
    , sendMessage: 'Send a message to the chat'
    , broadcastVideo: 'Video camera on'
    , stopBroadcastVideo: 'Video camera off'
    , broadcastMicrophone: 'Microphone on'
    , stopBroadcastMicrophone: 'Microphone off'
    , fileTransfer: 'File Transfer'
    , menu: 'Menu'
    , sendFile: 'Send File'
    , sendPicture: 'Send Picture'
    , sendVideo: 'Send Video'
    , sendAudio: 'Send Audio'
    , exit: 'Exit'
    , receiveFile: 'Receive File from '
    , cancelReceive: 'Cancel Receive from '
    , cancelStream: 'Cancel Broadcast from '
    , cancelStream2: 'Cancel Broadcast'
    , videos: 'Cameras'
    , videosTitle: 'List of video broadcasts'
    , noVideos: 'No video broadcasts'
    , microphones: 'Microphones'
    , microphonesTitle: 'List of microphone broadcasts'
    , noMicrophones: 'No microphone broadcasts'
    , fileTransfers: 'Files'
    , pictureTransfers: 'Pictures'
    , videoTransfers: 'Videos'
    , audioTransfers: 'Audioclips'
    , fileTransfersTitle: 'File transfers list'
    , noFileTransfer: 'No file transfer'
    , myVideoBroadcast: 'My camera'
    , myMicrophone: 'My microphone'
    , myScreen: 'My screen'
    , videoFrom: 'Turn on camera from '
    , microphoneOf: 'Turn on microphone from '
    , screenOf: 'Screen of '
    , p2pServerUnavailable: 'Probably the peer to peer server is temporarily unavailable. Pleasy try again later.'
    , viewersNumber: 'Viewers number'
    , listenersNumber: 'Listeners number'
    , startedVideo: ' has started the broadcast from camera'
    , startedAudio: ' has started the broadcast from microphone'
    , startedScreen: '  began to show their screen'
    , closedVideo: ' has closed the broadcast from camera. '
    , closedMicrophone: ' has closed the broadcast from microphone. If your microphone is setup correctly, probably to access your microphone is not allowed in your browser.'
    , restartedVideo: ' has restarted the broadcast from camera'
    , captureScreen: 'Capture Screen'
    , stopCaptureScreen: 'Stop Capture Screen'
    , notGetMedia: 'Could not get media. '
    , installScreenSharingExtension: '<br><br>Click <a href="%s" target="_blank">"Install Screen-Sharing Extension"</a> to install screen-sharing extension.<br><br>Please update web page after installing of the extention.'
    , inlineInstallationFailed: 'Inline installation failed. %s\n\n<a href="%s2" target="_blank">Open Chrome Web Store</a>'
    , muteMyAudio: 'Mute my audio'
    , unmuteMyAudio: 'Unmute my audio'
    , invalidAudio: 'The audio tracks is not avaialble on your system. Please setup a microphone. '
    , uncompatibleBrowser: 'Your web browser is not compatible with our web site.\n\n%s\n\n Please use Google Chrome or Mozilla Firefox or Opera web browser.'
    , pause: 'Pause'
    , play: 'Play'
    , continueBroadcast: 'Continue broadcast'
    , setupWebcam: '1. Please setup your webcam first.\n2. Reload web page after setup of your webcam.'
    , setupMicrophone: '1. Please setup your microphone first.\n2. Reload web page after setup of your microphone.'
    , freeWebcam: 'Your webcam is not setup or busy by other application. Please setup or free your webcam and try again.\n\nIf you sure, your webcamera is free, please setup it:\n\n1. Move the mouse cursor to your webcam screen and click ⚙.\n\n2. Select your webcam and microphone.\n\nAttention! Select your microphone correctly. You can not use your webcam if microphone is broken.'
    , freeMicrophone: 'Your microphone is busy by other application. Please free your microphone and try again.'
    , cameraSettings: 'My camera settings'
    , microphoneSettings: 'My microphone settings'
    , audioSource: 'Audio source'
    , videoSource: 'Video source'
    , restartSession: 'Restart session'
    , audioVolume: 'Audio volume'
    , permissionDenied: 'Permission to media devices is denied. Please use protocol for secure communication HTTPS for opening this web page.'
    , permissionDeniedShort: 'Permission to media devices is denied.'
    , permissionMediaChrome: 'For permission to media devices open the Chrome settings and go to "Privacy/Content settings"'
    , permissionMediaChromeMobile: 'For permission to media devices open the Chrome settings and go to "Site settings"'
    , permissionMediaOpera: 'For permission to media devices open the Opera settings and go to Websites'
    , permissionMediaOperaMobile: 'For permission to media devices open the Opera settings ⚙ and go to "Website Settings"'
    , securityError: 'Permission to media devices is denied.\n\n%s\n\nPlease allow to use the camera and microphone in your web browser for our web site.'
    , permissionCameraDenied: 'Permission to camera devices is denied. Please allow to use the camera in your web browser for our web site.'
    , allowCamera: '1. Go to Chrome Settings.\n2. Click the "Show advanced settings..."\n3. In the "Privacy" click the "Content settings..."\n4. In the "Content settings" dialog go to "Camera" and click the "Manage exceptions..."\n5. In the "Camera exceptions" dialog go to our site.\n6. If our site is blocked please delete this item.\n7. If our site is allowed, please plug in and setup your camera.'
    , currentTime: 'Broadcast duration'
    , recordDuration: 'Record duration'
    , takeSnapshot: 'Take snapshot'
    , videoRecording: 'Video recording'
    , microphoneRecording: 'Audio recording'
    , startRecording: 'Start recording'
    , stopRecording: 'Stop Recording'
    , mediaRecorderError: 'MediaRecorder is not supported by this browser.\n\n%s\n\nTry Firefox 29 or later, or Chrome 47 or later, with Enable experimental Web Platform features enabled from chrome://flags.'
    , download: 'Download'
    , downloadVideo: 'Download. You can play the downloaded video clip by Google Chrome or Mozilla Firefox or Opera browser.'
    , downloadAudio: 'Download. You can play the downloaded audio clip by Google Chrome or Mozilla Firefox or Opera browser.'
    , playMediaFailed: 'Your browser can not play\n\n%s\n\nmedia clip. Use Google Chrome or Mozilla Firefox or Opera browser.'
    , waitSnapshotPermission: 'Waiting for permission from %s to take a snapshot'
    , waitSnapshotPermissionFrom: '<span id="user"></span> viewer awaits permission to take a snapshot from your camera.'
    , allow: 'Allow'
    , denie: 'Denie'
    , ignore: 'Ignore'
    , ignoreTitle: 'Ignore of this viewer'
    , ignoreListenerTitle: 'Ignore of this listener'
    , snapshotDenie: 'The owner of the video camera does not allow to take a snapshot.'
    , snapshotNotAllow: 'The owner of the video camera does not allow to you to request a new permissions to take a snapshot'
    , cameraRecordNotAllow: 'The owner of the video camera does not allow to you to request new permissions for video recording.'
    , microphoneRecordNotAllow: 'The owner of the microphone does not allow to you to request new permissions for audio recording.'
    , allowAll: 'Allow All'
    , allowAllViewersTitle: 'Allow all viewers to take snapshot and video recording from my video camera'
    , allowAllListenersTitle: 'Allow all listeners to record sound from my microphone'
    , allowAllConfirm: 'Any viewer can take a snapshot and video recording from my video camera without permission.\n\nYou can change the permissions in the settings of my camera. Place your mouse over my video camera and click the ⚙ button for this.\n\nAre you shure you want to allow all the viewers to take a snapshot and video recording from my video camera without permission?'
    , allowAllConfirmMicrophone: 'Any listener can make audio recording from my microphone without permission.\n\nYou can change the permissions in the settings of my microphone. Place your mouse over my microphone and click the ⚙ button for this.\n\nAre you shure you want to allow all the listeners can make audio recording from my microphone without permission?'
    , permissions: 'Permissions'
    , neverAllowSnapshot: 'Never allow to take snapshot and video recording'
    , neverAllowAudioRecord: 'Never allow to record sound from my microphone'
    , askPermission: 'Ask permission'
    , denyAll: 'Deny All'
    , denyAllViewersTitle: 'Deny all viewers to take a snapshot and video recording from your video camera'
    , denyAllListenersTitle: 'Deny all listeners to record sound from my microphone'
    , denieAllConfirm: 'Any viewer can not take a snapshot and video recording from your video camera.\n\nYou can change the permissions in the settings of your camera. Place your mouse over your video broadcasting and click the ⚙ button for this.\n\nAre you shure you want to deny all the viewers to take a snapshot and video recording from your video camera?'
    , denieAllConfirmMicrophone: 'Any listener can not recording from your microphone.\n\nYou can change the permissions in the settings of your microphone. Place your mouse over your audio broadcasting and click the ⚙ button for this.\n\nAre you shure you want to deny for all listeners to record from your microphone?'
    , waitVideoRecordPermission: 'Waiting for permission from %s for start of the video recording'
    , waitAudioRecordPermission: 'Waiting for permission from %s for start of the audio recording'
    , waitVideoRecordPermissionFrom: '<span id="user"></span> viewer awaits permission for start of the video recording from your camera.'
    , waitMicrophoneRecordPermissionFrom: '<span id="user"></span> listener awaits permission for start of the audio recording from your microphone.'
    , videoRecordDenie: 'The owner of the video camera does not allow you to start the video recording.'
    , microphonRecordDenie: 'The owner of the microphone does not allow you to start the audio recording.'
    , attempt: 'attempt'
    , cancelSendFile: 'Cancel file transfer'
    , cancelSendPicture: 'Cancel picture transfer'
    , fileName: 'File'
    , size: 'Size'
    , sendingFile: ' sends a file'
    , canceledSendingFile: ' canceled sending file'
    , fileTransferFailed: 'File transfer failed'
    , received: 'Received'
    , remaining: 'Remaining'
    , speed: 'Kb/sec.'
    , sec: 'sec.'
    , kb: 'Kb'
    , fileReceived: 'Received successfully!'
    , fileSent: 'Sent successfully!'
    , fileCancelReceiver: 'File transfer has been cancelled on the receiver side'
    , receivingCanceled: 'Receiving canceled.'
    , broadcastingCanceled: 'The broadcasting canceled.'
    , connectionWaiting: 'Connection waiting.'
    , successfulConnection: 'Successful connection'
    , sendFileTwice: 'You trying to send "%s" file twice'
    , imageError: 'Image loading is failed!'
    , videoError: 'Video loading is failed!'
    , audioError: 'Audio loading is failed!'
    , cannotPlayType: 'Cannot play file type '
    , receivePicture: 'Receive picture from '
    , receiveVideo: 'Receive video from '
    , receiveAudio: 'Receive audio from '
    , userNotExists: 'The visitor %s does not exist'
    , userExistsInRoom: 'The visitor %s is exists in the %s2 room'
    , canceledFileTransfer: 'The visitor %s has canceled the file transfer'
    , male: 'male'
    , giy: 'giy'
    , female: 'female'
    , girl: 'girl'
    , couple: 'couple'
    , another: 'another'
    , age: 'Age'
    , name: 'Name'
    , aboutMe: 'About Me'
    , gender: 'Gender'
    , visitorTime: "visitor's local time"
    , time: 'Time'
    , hoursDifference: 'Difference %s hours'
    , location: 'Location'
    , geolocationPrompt: 'Geolocation'
    , geolocationWait: 'Waiting of the visitor location.'
    , ignore: 'Ignore'
    , pressKey: 'The visitor is typing text'
    , currentLocation: 'Visitor location'
    , circleHint: 'The visitor can be anywhere in this circle with radius %s meters'
    , userNotFound: 'The visitor left the room'
    , browser: 'Browser'
    , device: 'Device'
    , mobile: 'mobile'
    , desktop: 'desktop'
    , os: 'OS'
    , broadcastFailed: ' could not begin broadcasting!'
    , MediaNotDetected: 'Media device is not detected.'
    , MediaBusy: 'Media device is busy. Close any other programs that may be using the webcam.'
    , MediaError: 'Error of the media device.'
    , restartLocalMedia: 'Restart media device.'
    , cameraNotReady: 'Camera is not ready. Please wait somtime and try again.'
    , pupupBlocked: 'Pupup window is blocked in your browser. Please unblok pupup windows for our site and try again.'
    , notAwailable: 'not available'
    , camera: 'Camera'
    , microphone: 'Microphone'
    , error: 'Error'
};


