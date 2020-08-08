// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
function dividers(num){
    let factors = [1, num];
    let nextFactor = 2;
    while(!factors.includes(nextFactor)){
        if(num % nextFactor === 0){
            factors.push(nextFactor);
            if(!factors.includes(num/nextFactor)){
                factors.push(num/nextFactor)
            }
        }
       // console.log(nextFactor, factors);
        nextFactor = nextFactor + 1;
    }
    return factors;
}

function isDivider(num, arr){
    let divides = true;
    arr.forEach(elt=>{
        if(elt % num !==0){
            divides = false;
        }     
    });
    return divides;
}

// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED


function generalizedGCD(num, arr){
    // WRITE YOUR CODE HERE 
    arr.sort(function(a, b) {
         return a - b;
    });
    let smallest = arr[0];
    let factorsSmallest =  dividers(smallest);
    
    factorsSmallest.sort(function(a, b) {
         return b - a;
    });
    
    let counter = 0;
    let found = false;
    
    while(!found && counter<num){
        if(isDivider(factorsSmallest[counter], arr)){
            found = true;
        } else {
            counter = counter + 1;
        }
    }
    
    if(found){
        return factorsSmallest[counter];
    }
    
}
// FUNCTION SIGNATURE ENDS