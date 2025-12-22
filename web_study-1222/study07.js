//for 반복문 두 번 사용하기 

const _2dArray = []
const rows = 5
const columns = 2

for (let i = 0; i < rows; i++) { // i: 0, 1, 2, 3, 4
    const element = []
    for (let j = 0; j < columns; j++) { // j: 0, 1
        element.push( (columns * i + 1) + j ) // 
    }
    _2dArray.push(element)
}
console.log(_2dArray) // const _2dArray = [[1, 2], [3, 4], [5, 6], [7,8], [9, 10]]