const students = [{
    id: 21,
    name: 'Oman Sunny'
}, {
    id: 31,
    name: 'Mannan'
}, {
    id: 41,
    name: 'Myouri'
}, {
    id: 51,
    name: 'Deepjal'
}]

const names = students.map(s => s.id + ' ' + s.name)
console.log(names)
const bigger = students.filter(s => s.id < 32)
console.log(bigger)