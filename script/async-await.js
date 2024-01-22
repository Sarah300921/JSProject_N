import fs from 'node:fs/promises';
//async function loadData() {
    try {
        const data = await fs.readFile('./data/data.json', 'utf8');
        console.log('File read 1');
        await fs.readFile('./data/data.json', 'utf8');
        console.log('File read 2');
        await fs.readFile('./data/data.json', 'utf8');
        console.log('File read 3');
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("complete");
    } catch (err) {
        console.log("Couldn´t load & parse the file");
        throw (err);
    }
//}
//    loadData().then(() => console.log("promise completed"));
    