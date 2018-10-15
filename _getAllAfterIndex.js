"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var getTail_1 = require("./getTail");
function _getAllAfterIndex(index, array) {
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        return getTail_1.getTail(array.length - index - 1, array);
    });
}
exports._getAllAfterIndex = _getAllAfterIndex;
