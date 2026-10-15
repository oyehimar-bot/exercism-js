/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  } else if (timer === 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, time = 2) {
  return layers.length * time 
}

export function quantities(arr) {
  let ingredient = {noodles: 0, sauce: 0}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'noodles'){
      ingredient.noodles += 50
    } else if(arr[i] === 'sauce') {
      ingredient.sauce += 0.2
    }
  }
  return ingredient
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, num) {
  let rep = {}

  for (let i in recipe) {
    rep[i] = recipe[i] * (num/2)
  }
  return rep
}