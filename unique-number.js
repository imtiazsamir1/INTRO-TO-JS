const names= ['abul','babul','kabul','moinul','monirul','monu','abul','babul','didarul'];

function removeDuplicate(names){
    const unique=[];

    for(const element of names){
        // console.log(element);
        if ( unique.indexOf(element) == -1)
        {
            unique.push(element);
        }
    
    }
    return unique;
}
const uniqueNames=removeDuplicate(names);
console.log(uniqueNames);

