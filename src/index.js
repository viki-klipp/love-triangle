/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  
  for (let i = 0; i < preferences.length; i++) {
    preferences[i]--;
  }

  for (let i = 0; i < preferences.length; i++) {
    if (preferences[i] == i) {
      preferences[i] = undefined;
    }

    if (preferences[preferences[[preferences[i]]]] == i) {
      result++;
      preferences[i] = undefined;
      preferences[preferences[i]] = undefined;
      preferences[preferences[preferences[i]]] = undefined;
    }
  }

  return result;
};
