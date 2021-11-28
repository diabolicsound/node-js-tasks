"use strict";

function argsToShow(buffer) {
  var str = buffer.toString();
  process.stdout.write(str.split('').reverse().join('') + '\n');
}

process.openStdin().addListener('data', argsToShow);