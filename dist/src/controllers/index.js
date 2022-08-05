"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNull = void 0;
function checkNull(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined) {
            return false;
        }
    }
    return true;
}
exports.checkNull = checkNull;
