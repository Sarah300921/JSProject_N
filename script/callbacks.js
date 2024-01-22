import { readFile } from 'node:fs';

readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.log('error reading file');
        throw err;
    }
    try {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("complete");
    } catch (err) {
        console.error('Not a JSON file');
        throw err;
    }
});