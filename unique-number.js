const names= ['babul','kabul','moinul','monirul','monu','abul','babul','didarul'];

function removeDuplicate(names){
    
    const unique=[];

    for(i=0;i<names.length;i++){
        //  console.log(element);
        if ( names[i>=0])
         {
            unique.push(names[i]);
         }
         else{
             break;
         }
    
    }
    return unique;
}
const uniqueNames=removeDuplicate(names);
console.log(uniqueNames);

