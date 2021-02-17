'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.receiveNotifications = receiveNotifications;
exports.dismissNotification = dismissNotification;
var RECEIVE_NEW_NOTIFICATIONS = exports.RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS';
var DISMISS_NOTIFICATION = exports.DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
function receiveNotifications(newNotifications) {
    return { type: RECEIVE_NEW_NOTIFICATIONS, payload: newNotifications };
}
function dismissNotification(notificationUuid) {
    return { type: DISMISS_NOTIFICATION, payload: notificationUuid };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsicmVjZWl2ZU5vdGlmaWNhdGlvbnMiLCJkaXNtaXNzTm90aWZpY2F0aW9uIiwiUkVDRUlWRV9ORVdfTk9USUZJQ0FUSU9OUyIsIkRJU01JU1NfTk9USUZJQ0FUSU9OIiwibmV3Tm90aWZpY2F0aW9ucyIsInR5cGUiLCJwYXlsb2FkIiwibm90aWZpY2F0aW9uVXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLG9CLEdBQUFBLG9CO1FBR0FDLG1CLEdBQUFBLG1CO0FBTFQsSUFBTUMsZ0VBQTRCLDJCQUFsQztBQUNBLElBQU1DLHNEQUF1QixzQkFBN0I7QUFDQSxTQUFTSCxvQkFBVCxDQUE4QkksZ0JBQTlCLEVBQWdEO0FBQ25ELFdBQU8sRUFBRUMsTUFBTUgseUJBQVIsRUFBbUNJLFNBQVNGLGdCQUE1QyxFQUFQO0FBQ0g7QUFDTSxTQUFTSCxtQkFBVCxDQUE2Qk0sZ0JBQTdCLEVBQStDO0FBQ2xELFdBQU8sRUFBRUYsTUFBTUYsb0JBQVIsRUFBOEJHLFNBQVNDLGdCQUF2QyxFQUFQO0FBQ0giLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRUNFSVZFX05FV19OT1RJRklDQVRJT05TID0gJ1JFQ0VJVkVfTkVXX05PVElGSUNBVElPTlMnO1xyXG5leHBvcnQgY29uc3QgRElTTUlTU19OT1RJRklDQVRJT04gPSAnRElTTUlTU19OT1RJRklDQVRJT04nO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZU5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucykge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogUkVDRUlWRV9ORVdfTk9USUZJQ0FUSU9OUywgcGF5bG9hZDogbmV3Tm90aWZpY2F0aW9ucyB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNtaXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblV1aWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IERJU01JU1NfTk9USUZJQ0FUSU9OLCBwYXlsb2FkOiBub3RpZmljYXRpb25VdWlkIH07XHJcbn1cclxuIl19