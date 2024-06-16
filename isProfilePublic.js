import { stratz, apiToken } from './token.js';
// Import dependecies

export async function isProfilePublic(player) {
    try {
     let isStratzPublic = (await stratz.getPlayerBasic(player)).steamAccount.isAnonymous
        // Check if Stratz is public for player (Result is a boolen like true or false)

     if (isStratzPublic == false) {
        let result = 'Aberto'
        return result
     } else if (isStratzPublic == true) {
        let result = "Privado"
        return result
     }  else {
        let result = "????"
        return result
     }
     
    } catch {
     let result = 'ID incorreto ou não encontrado'
     return result
    }
}


       