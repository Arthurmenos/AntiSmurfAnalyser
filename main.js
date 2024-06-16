// main.js
import promptSync from 'prompt-sync';
import { isProfilePublic } from './isProfilePublic.js';
import { antiSmurfTest } from './antiSmurfTest.js';

const prompt = promptSync();

const playersInput = prompt("Digite aqui os IDs separados por vírgula: ");
const playersList = playersInput.split(',').map(player => player.trim());

playersList.forEach(player => {
    isProfilePublic(player)  // Passa apiToken como argumento aqui
        .then(result  => {
            if (result === 'Aberto') {
                antiSmurfTest(player)
                    .then(result => {
                        if (result == true) {
                            console.log(`Status do perfil ${player}: passou no Anti-Smurf`)
                        } else {
                            console.log(`Status do perfil ${player}: Recusado pelo Anti-Smurf`)
                        }
                    })
            } else {
                console.log(`Status do perfil ${player}: `, result)
            }
        })
        .catch(error => console.error(`Erro ao verificar perfil ${player}: `, error));
});
