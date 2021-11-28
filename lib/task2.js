"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csvFilePath = './csv/nodejs-hw1-ex1.csv';
(0, _csvtojson["default"])().fromFile(csvFilePath).then(function (jsonObj) {
  _fs["default"].writeFile('./csv-to-txt.txt', JSON.stringify(jsonObj) + '\n', function (error) {
    if (error) {
      console.log('error occurred');
    }

    console.log('file has been written');
  });
});