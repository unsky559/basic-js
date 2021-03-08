module.exports = function repeater(str, options) {
  if(typeof str === 'undefined')
    throw new Error('No string input')
  if(typeof options.repeatTimes === 'undefined')
    options.repeatTimes = 1
  if(typeof options.separator === 'undefined')
    options.separator = '+'
  if(typeof options.additionSeparator === 'undefined')
    options.additionSeparator = '|'
  if(typeof options.additionRepeatTimes === 'undefined')
    options.additionRepeatTimes = 1

  let result = '';
  for(let i = 0; i < options.repeatTimes; i++){
    result += String(str);
    if(typeof options.addition !== 'undefined'){
      for(let j = 0; j < options.additionRepeatTimes; j++){
        result += String(options.addition)
        if(j != options.additionRepeatTimes-1)
          result += String(options.additionSeparator)
      }
    }
    if(i != options.repeatTimes-1)
      result += String(options.separator)
  }
  return result
};
