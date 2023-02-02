import axios from "axios"

const mainUrl = axios.create({
     baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
})

const getWordData = async (searchedWord: string) => {
    const { data } = await mainUrl.get(`${searchedWord}`);
   
    
}
 

