function difference(a, b) {
    return Math.abs(a - b);
}

function diviseurs(number){
    let diviseurArray = [];
    let indexDiffMin = 0;
    let diffMin = number; //on considere que diviseur min est 0 ce qui est pas possible donc diffMin = number
    
    for(let i = 1; i < number; i++) {
        if(number % i === 0){
            let resultat = number / i;
            let indexdiviseurArray = 0;
            let diff = Math.abs(resultat-i);
           
            
            
            diviseurArray.push({colonne: resultat, ligne: i, diff: diff, index:indexdiviseurArray});
            // console.log(diviseurArray[diviseurArray.length - 1].diff);
            // console.log(diviseurArray[diviseurArray.length - 1].diff);
            if(diffMin > diff) {
                diffMin = diff;
                //indexDiffMin = indexdiviseurArray;
                indexDiffMin = diviseurArray.length - 1;
            }
            indexdiviseurArray++;
           
            
        }
    }

    console.log(diffMin , indexDiffMin);
     return diviseurArray[indexDiffMin];
    
}


console.log(diviseurs(12))