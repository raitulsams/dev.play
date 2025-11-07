const ages = [12, 14, 17, 21, 23]
const ages2 = [25, 23, 19, 11, 13]
const ages3 = [25, 23, 19, 11, 13]
const allAges = ages.concat(ages2).concat([4]).concat(ages3)
console.log(allAges)

const allAges2 = [...ages, ...ages2, 5, ...ages3]
console.log(allAges2)