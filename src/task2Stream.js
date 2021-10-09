import fs from 'fs';
import csv from 'csvtojson';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';

const writable = fs.createWriteStream('./csv-to-txt-stream.txt', 'utf8');

function write(writableStream, data, callback) {
    writable.write(data);
    callback();
}

csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        write(writable, JSON.stringify(jsonObj), error => {
            if (error) {
                console.log('error occurred');
            }
            console.log('file has been written')
        })
    })