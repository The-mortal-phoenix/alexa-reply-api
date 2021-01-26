const artificialIntelligence = require('./ai.js');
const translate = require('@iamtraction/google-translate');

class Alexa {

  constructor() {
  }
  
  async getReply(message, language) {
    if(!message) {
      throw new TypeError('Message Cannot be empty in getReply()')
    }
    if(!language) {
      console.log("No language has been provided defaulting to english as destination language")
      try{
        const text = await artificialIntelligence(message)
        const trans = await translate(text, { to: 'en' })
        return trans.text
      }catch(err){
        console.error(err)
      }
    }
    try{
      const text = await artificialIntelligence(message)
      const trans = await translate(text, { to: language })
      return trans.text
    }catch(err){
      console.error(err)
    }
  }
}

module.exports = Alexa;