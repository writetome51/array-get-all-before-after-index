"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
// For this function, the index cannot be negative.
function _getAllAfterIndex(index, array) {
    error_if_index_is_negative_1.errorIfIndexIsNegative(index);
    return array_get_head_tail_1.getTail(array.length - index - 1, array);
}
exports._getAllAfterIndex = _getAllAfterIndex;
