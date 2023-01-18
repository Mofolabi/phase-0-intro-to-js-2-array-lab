// Write your solution here!
const cats = ['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let cats2 = [...cats]
    cats2.push(name)
    return cats2 
}
function prependCat(name){
    let cats2 = [...cats]
    cats2.unshift(name)
    return cats2
}
function removeLastCat(){
    let cats2 = [...cats]
    cats2.pop()
    return cats2
}
function removeFirstCat(){
    let cats2 = [...cats]
    cats2.shift()
    return cats2
}