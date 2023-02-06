import axios from "axios"

// const mainUrl = axios.create({
//      baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
// })

 export const getWordData = async (searchedWord: string) => {
    const { data } = await axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
		);
   
 
    return data
}
 

