const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if( typeof sampleActivity !== 'string' || isNaN( sampleActivity ) || sampleActivity < 0){
      return false
  }
  const N = MODERN_ACTIVITY/sampleActivity
  const K = Math.LN2/HALF_LIFE_PERIOD
  const RESULT = Math.ceil( Math.log(N)/K );
  if( RESULT == Infinity || RESULT < 0 ){
    return false
  }else{
    return Math.ceil(Math.log(N)/K)
  }
};
