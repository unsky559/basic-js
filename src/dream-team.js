const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let result = '';
  let firstLett = [];
  let k = 0;
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
        memb = members[i].trim().split(' ')
        if (memb[0] && memb[0][0] !== '' && memb[0][0] !== ' ') {
          firstLett[k] = memb[0][0]
          k++
        }
      }
    }

  firstLett = firstLett.sort()
  for(let m = 0; m < firstLett.length; m++){
    if(firstLett[m]){
      result += firstLett[m].toUpperCase();
    }
  }
  return result.split('').sort().join('');
};
