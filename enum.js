"use strict";
exports.__esModule = true;
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["Down"] = 2] = "Down";
    direction[direction["Right"] = 3] = "Right";
    direction[direction["Left"] = 4] = "Left";
})(direction || (direction = {}));
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 3] = "ReadWrite";
})(FileAccess || (FileAccess = {}));
var userResponse;
(function (userResponse) {
    userResponse[userResponse["No"] = 0] = "No";
    userResponse[userResponse["Yes"] = 1] = "Yes";
})(userResponse || (userResponse = {}));
function response(recipient, message) {
    console.log("Recipient: ".concat(recipient, " \nRepsonse: ").concat(message));
}
response("Bob Marsh", userResponse.Yes);
