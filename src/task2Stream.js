import fs from 'fs';
import csv from 'csvtojson';
import os from 'os';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';

const writable = fs.createWriteStream('./src/csv-to-txt-stream.txt', 'utf8');

function write(writableStream, data, callback) {
    writableStream.write(data);
    callback();
}

csv({delimeter: ';'})
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        for (let i = 0; i < jsonObj.length; i++) {
            write(writable, (JSON.stringify(jsonObj[i]) + os.EOL), error => {
                if (error) {
                    console.log('error occurred');
                }
                console.log('line has been added')
            })
        }
    })
