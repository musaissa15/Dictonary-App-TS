import axios from "axios"


 export const getWordData = async (searchedWord: string) => {
    const { data } = await axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
		);
   

 
    return data
}
 

