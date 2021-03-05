module.exports = function transform(arr) {
  const seq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if(!Array.isArray(arr)){
    throw new Error('this is not array');
  }
  let copy = arr.slice();
  let result = [];
  let k = 0;
  for(let i = 0; i <= arr.length; i++){
    switch (copy[i]) {
      case '--discard-next':
          if(i != arr.length-1)
            copy[i+1] = null;
          else
             copy.pop()
        break
      case '--discard-prev':
          if(i != 0)
            copy[i-1] = null;
        break
      case '--double-next':
          if(i != arr.length-1)
            copy.splice(i+1, 0, copy[i+1]);
        break
      case '--double-prev':
          if(i != 0)
            copy.splice(i+1, 0, copy[i-1]);
        break
    }
  }
  for(let j = 0; j < copy.length; j++){
    if(!seq.includes(copy[j]) && copy[j] !== null){
      result[k] = copy[j]
      k++
    }
  }
  return result;

};



/**2 */

  // for(let i = 0; i < arr.length; i++){
  //   if(arr[i]){
  //     switch (arr[i]) {
  //       case '--discard-next':
  //         if(i != arr.length-1){
  //           i++
  //         }
  //         break
  //       case '--discard-prev':
  //         if(i != 0)
  //           i--
  //         break
  //       case '--double-next':
  //         if(i != arr.length-1){
  //           result[k] = arr[i+1]
  //           k++
  //         }
  //         break
  //       case '--double-prev':
  //         if(i != 0){
  //           result[k] = arr[i-1]
  //           k++
  //         }
  //         break
  //       default:
  //         if(arr[i]){
  //           result[k] = arr[i]
  //           k++
  //           console.log(k,i)
  //           console.log(result)
  //         }
          
  //         break
  //     }
  //   }
  // }


/* Хоть решение ниже не решает условие задачи, 
  я решил его оставить в виде комментария потому 
  что мне жалко его удалять -_- */
  // let result = arr;
  // resultLen = result.length;
  // for(let i = 0; i < resultLen; i++){
  //   if(result[i]){

  //     if(result[i] == '--discard-next'){
  //       if(i == resultLen-1){
  //         result.splice(i,1);
  //       }
  //       result.splice(i,2);
  //       resultLen = result.length;
  //       i = 0;
  //     }else if(result[i] == '--discard-prev'){
  //       if(i == 0){
  //         result.splice(0,1);
  //       }else{
  //         result.splice(i-1,2);
  //         resultLen = result.length;
  //         i = 0;
  //       }
  //     }else if(result[i] == '--double-next'){
  //       if(i == resultLen-1){
  //         result.splice(i,1);
  //       }else{
  //         result.splice(i, 1, result[i+1]);
  //         result.splice(i, 1, result[i+1]);
  //         resultLen = result.length;
  //         i = 0;
  //       }
  //     }else if(result[i] == '--double-prev'){
  //       if(i == 0){
  //         result.splice(0,1);
  //       }else{
  //         result.splice(i, 1, result[i-1]);
  //         result.splice(i, 1, result[i-1]);
  //       }
        
  //     }
      
  //   }
  // }