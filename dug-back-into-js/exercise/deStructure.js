const person = {
    name: 'jack william',
    age: 17,
    job: 'facebooker',
    gfName: 'Ema Watson',
    phone: '01982618304'
}

const gfName = person.gfName
const phn = person.phone

console.log(gfName)
console.log(phn)
console.log(gfName, phn)

//array destructure

const friends = ['Sakib khan', 'Arman Khan', 'Saad Khan', 'Helal Khan']
const [_1stFriend, _2ndFriend] = friends
console.log(_1stFriend)
console.log(_2ndFriend)