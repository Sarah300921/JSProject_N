import employees from './data/data.json' assert {type: 'json' }
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const command = process.argv[2].toLowerCase();

switch (command) {
    case 'list':
        console.log('Lista de empleados *****************');;
       
        for (let emp of employees) {
            for (var property in emp) {
                console.log(`${property}:${emp[property]}`);
            }
            console.log('');
            prompt('press enter to continue...');
        }
        console.log('fin');
        break;

    default:
        console.log('opcion desconocidad')
        process.exit(1);
}