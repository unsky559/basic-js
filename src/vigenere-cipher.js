const ALPH = ['A', 'B', 'C', 'D', 'E',
              'F', 'G', 'H', 'I', 'J',
              'K', 'L', 'M', 'N', 'O',
              'P', 'Q', 'R', 'S', 'T',
              'U', 'V', 'W', 'X', 'Y', 'Z']

class VigenereCipheringMachine {
  constructor(isReversed = true){
    this.isReversed = isReversed
  }
  encrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined")
      throw new Error('no req params')
    let encrypted = [];
    let result = ''
    let j = 0
    for (let i = 0; i < message.length; i++) {
        if(ALPH.indexOf(message[i].toUpperCase()) >= 0){
          encrypted[i] = (ALPH.indexOf(message[i].toUpperCase()) + ALPH.indexOf(key[(j)%key.length].toUpperCase())) % ALPH.length
          j++
        }else{
          encrypted[i] = message[i]
        }
    }
    for(let j = 0; j < encrypted.length; j++) {
      if(typeof encrypted[j] === "number")
        result += ALPH[encrypted[j]]
      else
        result += encrypted[j]
    }
    if(this.isReversed)
      return result
    else
      return result.split('').reverse().join('')
  }
  decrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined")
      throw new Error('no req params')
    let encrypted = [];
    let result = ''
    let j = 0
    for (let i = 0; i < message.length; i++) {
        if(ALPH.indexOf(message[i].toUpperCase()) >= 0){
          encrypted[i] = (ALPH.indexOf(message[i].toUpperCase()) + ALPH.length - ALPH.indexOf(key[(j)%key.length].toUpperCase())) % ALPH.length
          j++
        }else{
          encrypted[i] = message[i]
        }
    }
    for(let j = 0; j < encrypted.length; j++) {
      if(typeof encrypted[j] === "number")
        result += ALPH[encrypted[j]]
      else
        result += encrypted[j]
    }
    if(this.isReversed)
      return result
    else
      return result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
