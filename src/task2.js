import fs from 'fs';
import csv from 'csvtojson';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';

csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        fs.writeFile('./src/csv-to-txt.txt', (JSON.stringify(jsonObj) + '\n'), (error) => {
            if (error) {
                console.log('error occurred')
            }
            console.log('file has been written');
        })

    })
