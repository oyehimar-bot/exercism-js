//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,n) => {
  if (n%100==11 || n%100==12 || n%100==13) {
    return `${name}, you are the ${n}th customer we serve today. Thank you!`
  } else if (n%10==1) {
    return `${name}, you are the ${n}st customer we serve today. Thank you!`
  } else if (n%10==2) {
    return `${name}, you are the ${n}nd customer we serve today. Thank you!`
  } else if (n%10==3) {
    return `${name}, you are the ${n}rd customer we serve today. Thank you!`
  } else {
    return `${name}, you are the ${n}th customer we serve today. Thank you!`
  }
};
