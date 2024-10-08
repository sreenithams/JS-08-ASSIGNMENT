/*let i=1
while(i<5){
    console.log(i)
    i++
}*/

/*let i=10
do{
    console.log(i)
    i++
}while(i<5)
*/
/*let obj={
    in:"linkedIn",
    ig:"instagram",
    fb:"facebook",
    yt:"youTube"
}
for(let i in obj){
    console.log(obj[i])
}*/

/*let  arr=["one","two","three","four"]
let myData=arr.filter((item)=
})
console.log(myData)*/

/*let  arr=["one","two","three","four"]
for(let i of arr){
    console.log(i)
}*/


/*if(true){
    console.log(1)
}
if(false){
    console.log(2)
}
if(true){
    console.log(3)
}*/
/*let user = ""
if(user){
    console.log("there is user")
}else{
    console.log("the user has a falsy value")
}*/


/*let user="2"
if(user==2){
    console.log("true statement")
}else{
    console.log("wrong statement")
}*/
/*add()
function add(){
    console.log(3+2)
}
*/
/*add()
let add = function(){
    console.log(3+2)
}*/

/*let arr=[1,2,3,4]
let newArr=[...arr,5,6]
console.log(newArr)*/

/*let myFun=(a,b,...rest)=>{
    console.log(rest)
}
myFun(1,2,3,4,5,6)*/

/*let user={
    firstName:"zareel",
    lastName:"kalam",
    courseCount:7,
    role:"admin",
    sayRole:function(){
        return this.role
    }
}
console.log(user.sayRole())
*/

/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.filter((item)=>{
    return item > 5
})
console.log(newArr)*/

let firstFunction =()=>{
    let firstName="Zareel"
    let secondFunction =()=>{
        (firstName)
        let lastName="kalam"
        let thirdFunction=()=>{
            console.log(firstName+lastName)
        }
        thirdFunction()
    }
    secondFunction()
}
firstFunction()