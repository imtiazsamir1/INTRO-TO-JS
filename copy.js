function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends.length == 100000000) {
            
            break;
        }
        else if (friends[i].length % 2 != 0) {
            return friends[i];
        }
    }
}
const friends = ['kamrul', 'shuaib','jihad', 'jahid', 'kobita', 'bobita'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);