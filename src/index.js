
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let towelArr = [];
  if (typeof (matrix) === 'undefined') {
    towelArr = [];
  } else {
    matrix.map((item, i) => {
      if (!matrix) {
        towelArr = [];
      }

      if ((i + 1) % 2 !== 0) {
        item.map(newItem => {
          towelArr.push(newItem)
        })
      } else {
        item.sort((a, b) => b - a).map(newItem => {
          towelArr.push(newItem)
        })
      }
    })
  }


  return towelArr;
}
