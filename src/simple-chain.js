const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    position--;
    if(this.chain[position]){
      this.chain.splice(position, 1)
      return this
    }else{
      this.chain = []
      throw new Error('Can`t remove this position')
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = ''
    for(let i = 0; i < this.chain.length; i++){
      result += `( ${this.chain[i]} )`
      if(i != this.chain.length - 1)
        result += '~~'
    }
    this.chain = []
    return result //TODO: !~!
  }
};

chainMaker.addLink('GHI')
chainMaker.addLink('GHI').finishChain()

module.exports = chainMaker;