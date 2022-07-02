// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-FT'
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL + 'players/')
        const result = await response.json()
        console.log(result.data)
        return result.data.players 
    } catch (error) {
        console.error(error, 'something broke')
    }
    

};

export const fetchSinglePlayer = async (playerId) => {

};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
