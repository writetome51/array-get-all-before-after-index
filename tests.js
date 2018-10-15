"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _getAllAfterIndex_1 = require("./_getAllAfterIndex");
var _getAllBeforeIndex_1 = require("./_getAllBeforeIndex");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
var result = _getAllAfterIndex_1._getAllAfterIndex(0, arr);
if (result.length === 9 && result[0] === 2 && result[8] === 10)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
result = _getAllBeforeIndex_1._getAllBeforeIndex(arr.length - 1, arr);
if (result.length === 9 && result[0] === 1 && result[8] === 9)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
var errorTriggered = false;
try {
    result = _getAllBeforeIndex_1._getAllBeforeIndex(0, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
errorTriggered = false;
try {
    result = _getAllAfterIndex_1._getAllAfterIndex(arr.length - 1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
errorTriggered = false;
try {
    result = _getAllBeforeIndex_1._getAllBeforeIndex(-1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
errorTriggered = false;
try {
    result = _getAllAfterIndex_1._getAllAfterIndex(-5, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
