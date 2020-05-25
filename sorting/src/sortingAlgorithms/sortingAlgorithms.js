export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

function switchSpot(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(
  array,
  animations,
) {
  let check = true;
  while(check) {
    check = false;
    for (var i = 0; i < array.length-1; i++) {
      animations.push([i, i+1]); 
      animations.push([i, i+1]);
      if (array[i] > array[i+1]) {
        animations.push([i, array[i+1]]);
        animations.push([i+1, array[i]]);
        switchSpot(array, i, i+1);
        check = true;
      } else {
         animations.push([i, array[i]]);
         animations.push([i, array[i]]);
      }
    }
  }
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSortHelper(array, animations);
  return animations;
}

function insertionSortHelper(
  array,
  animations,
) {
    for (var i = 1; i < array.length; i++) {
      let j = i;

      while (j > 0) {
        animations.push([j-1, j]); 
        animations.push([j-1, j]);
        if (array[j] < array[j-1]){
          animations.push([j-1, array[j]]);
          animations.push([j, array[j-1]]);
          switchSpot(array, j-1, j);
        } else {
          animations.push([j, array[j]]);
          animations.push([j, array[j]]);
          break;
        }

        j--;
    }
  }
}


export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(
  array,
  animations,
) {
  let startIdx = 0;
  while(startIdx < array.length-1) {
    let smallestIdx = startIdx;
    for (var i = startIdx; i < array.length; i++) {
      animations.push([i, smallestIdx]); 
      animations.push([i, smallestIdx]); 
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i;
      }
      animations.push([i, array[i]]);
      animations.push([i, array[i]]);
    }
    
    animations.push([startIdx, smallestIdx]); 
    animations.push([startIdx, smallestIdx]); 

    animations.push([startIdx, array[smallestIdx]]);
    animations.push([smallestIdx, array[startIdx]]);
    switchSpot(array, startIdx, smallestIdx);
    startIdx++;
  }
}


