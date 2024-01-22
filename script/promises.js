import  fs  from 'node:fs/promises';
import fsc from 'node:fs';

fs.readFile('./data.json', 'utf8')
    .then(data => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("complete");
    })
    .then(() => readFile("data.json"))
    .then(data=>console.log(data))
    .catch(err => {
        console.log("ERROR");
        throw err;
    });

const readFile = async(filename) => {
    return new Promise((resolve, reject) => {
        fsc.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
