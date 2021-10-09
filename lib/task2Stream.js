"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csvFilePath = './csv/nodejs-hw1-ex1.csv';

var writable = _fs["default"].createWriteStream('./csv-to-txt-stream.txt', 'utf8');

function write(writableStream, data, callback) {
  writable.write(data);
  callback();
}

(0, _csvtojson["default"])().fromFile(csvFilePath).then(function (jsonObj) {
  write(writable, JSON.stringify(jsonObj), function (error) {
    if (error) {
      console.log('error occurred');
    }

    console.log('file has been written');
  });
});