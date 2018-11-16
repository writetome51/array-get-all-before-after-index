"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
// For this function, the index cannot be negative.
function _getAllBeforeIndex(index, array) {
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        return array_get_head_tail_1.getHead(index, array);
    });
}
exports._getAllBeforeIndex = _getAllBeforeIndex;
