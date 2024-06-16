import { stratz, apiToken } from './token.js';

export async function antiSmurfTest(playerID) {
    try {
        let matchData = (await stratz.getPlayerSummary(playerID))
        let playerData = (await stratz.getPlayerBasic(playerID))

        let dataFilted = {
            rank: playerData.steamAccount.seasonRank,
            alltime: matchData.allTime.matches.matchCount, 
            sixMonths: matchData.sixMonths.matches.matchCount
        }

        if (
            dataFilted.alltime >= 1000 && 
            dataFilted.sixMonths >= 250 && 
            dataFilted.rank != 0
        ){
            let result = true
            return result
        } else {
            let result = false
            return result
        }
        
    } catch (error) {
        console.error(error)
    }
}
