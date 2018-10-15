"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var getHead_1 = require("./getHead");
function _getAllBeforeIndex(index, array) {
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        return getHead_1.getHead(index, array);
    });
}
exports._getAllBeforeIndex = _getAllBeforeIndex;
