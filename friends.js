function bestFriends(friends){
    let oddName="";
    for(let i=0;i<friends.length;i++){
        if(friends[i].length%2 !=0){
            oddName=friends[i];
        }
    }
    return oddName;
}
let friends=['kamrul','shuaib','hasan','nahid','jihad','kamrul'];
console.log(bestFriends(friends));