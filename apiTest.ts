type Dictionary = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}[];

const dictionary: Dictionary = [
    {
      "word": "book",
      "phonetic": "/buːk/",
      "phonetics": [
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-uk.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9014290",
          "license": {
            "name": "BY 3.0 US",
            "url": "https://creativecommons.org/licenses/by/3.0/us"
          }
        },
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=380110"
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "A collection of sheets of paper bound together to hinge at one edge, containing printed or written material, pictures, etc.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "He was frustrated because he couldn't find anything about dinosaurs in the book."
            },
            {
              "definition": "A long work fit for publication, typically prose, such as a novel or textbook, and typically published as such a bound collection of sheets, but now sometimes electronically as an e-book.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "I have three copies of his first book."
            },
            {
              "definition": "A major division of a long work.",
              "synonyms": [
                "tome",
                "volume"
              ],
              "antonyms": [
                
              ],
              "example": "Genesis is the first book of the Bible."
            },
            {
              "definition": "A record of betting (from the use of a notebook to record what each person has bet).",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "I'm running a book on who is going to win the race."
            },
            {
              "definition": "A convenient collection, in a form resembling a book, of small paper items for individual use.",
              "synonyms": [
                "booklet"
              ],
              "antonyms": [
                
              ],
              "example": "a book of raffle tickets"
            },
            {
              "definition": "The script of a musical or opera.",
              "synonyms": [
                "libretto"
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "(usually in the plural) Records of the accounts of a business.",
              "synonyms": [
                "account",
                "record"
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "A book award, a recognition for receiving the highest grade in a class (traditionally an actual book, but recently more likely a letter or certificate acknowledging the achievement).",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "(whist) Six tricks taken by one side.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "Four of a kind",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "A document, held by the referee, of the incidents happened in the game.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "(by extension) A list of all players who have been booked (received a warning) in a game.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "The twenty-sixth Lenormand card.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "Any source of instruction.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            }
          ],
          "synonyms": [
            "account",
            "record",
            "booklet",
            "libretto",
            "tome",
            "volume"
          ],
          "antonyms": [
            
          ]
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/book"
      ]
    },
    {
      "word": "book",
      "phonetic": "/buːk/",
      "phonetics": [
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-uk.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9014290",
          "license": {
            "name": "BY 3.0 US",
            "url": "https://creativecommons.org/licenses/by/3.0/us"
          }
        },
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=380110"
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To reserve (something) for future use.",
              "synonyms": [
                "reserve"
              ],
              "antonyms": [
                
              ],
              "example": "I can book tickets for the concert next week."
            },
            {
              "definition": "To write down, to register or record in a book or as in a book.",
              "synonyms": [
                "make a note of",
                "note down",
                "record",
                "write down"
              ],
              "antonyms": [
                
              ],
              "example": "They booked that message from the hill"
            },
            {
              "definition": "(law enforcement) To record the name and other details of a suspected offender and the offence for later judicial action.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "The police booked him for driving too fast."
            },
            {
              "definition": "To issue with a caution, usually a yellow card, or a red card if a yellow card has already been issued.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "To travel very fast.",
              "synonyms": [
                "bomb",
                "hurtle",
                "rocket",
                "shoot",
                "speed",
                "whiz"
              ],
              "antonyms": [
                
              ],
              "example": "He was really booking, until he passed the speed trap."
            },
            {
              "definition": "To record bets as bookmaker.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "(law student slang) To receive the highest grade in a class.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "The top three students had a bet on which one was going to book their intellectual property class."
            },
            {
              "definition": "To leave.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "He was here earlier, but he booked."
            }
          ],
          "synonyms": [
            "bomb",
            "hurtle",
            "rocket",
            "shoot",
            "speed",
            "whiz",
            "make a note of",
            "note down",
            "record",
            "write down",
            "reserve"
          ],
          "antonyms": [
            
          ]
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/book"
      ]
    },
    {
      "word": "book",
      "phonetic": "/buːk/",
      "phonetics": [
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-uk.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9014290",
          "license": {
            "name": "BY 3.0 US",
            "url": "https://creativecommons.org/licenses/by/3.0/us"
          }
        },
        {
          "text": "/buːk/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=380110"
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "(with person as subject) To cook (something) in an oven.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "I baked a delicious cherry pie."
            },
            {
              "definition": "(with baked thing as subject) To be cooked in an oven.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "The cake baked at 350°F."
            },
            {
              "definition": "To be warmed to drying and hardening.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "The clay baked in the sun."
            },
            {
              "definition": "To dry by heat.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "They baked the electrical parts lightly to remove moisture."
            },
            {
              "definition": "To be hot.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ],
              "example": "I'm baking after that workout in the gym."
            },
            {
              "definition": "To cause to be hot.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "To smoke marijuana.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "To harden by cold.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "To fix (lighting, reflections, etc.) as part of the texture of an object to improve rendering performance.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            },
            {
              "definition": "(with \"in\" or \"into\") To incorporate into something greater.",
              "synonyms": [
                
              ],
              "antonyms": [
                
              ]
            }
          ],
          "synonyms": [
            
          ],
          "antonyms": [
            
          ]
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/bake",
        "https://en.wiktionary.org/wiki/book"
      ]
    }
]

  
dictionary.map((w) => {

  console.log(w.phonetics[0].audio)
})

