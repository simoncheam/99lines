let person1 = {
    name: 'Vishal'
    }
    
    let person2 = {
    name: 'Luke'
    }
    
    let person3 = {
    name: 'Daniel'
    }
     
    let person4 = {
    name: 'Drew'
    }
    
    let person5 = {
    name: 'Matt'
    }
    
    let friends = [person1, person2, person3, person4, person5 ];
    

// (Loop 1 - outer loop)
for ( let i=0; i<friends.length; i++) {
    console.log(friends[i].name +":");  
    
// (Loop 2 - inner loop)
for ( let k = 99; k > 0; --k) {
let j= k-1;
    if (k > 2 ){

          
        console.log(" " +k +" lines of code in the file "+ k+ " lines of code, "+ friends[i].name + " strikes one out, clears it all out, " + j + " lines of code in the file");

    } else if (2 == k ){

            console.log(" " +k +" lines of code in the file "+ k+ " lines of code, "+ friends[i].name + " strikes one out, clears it all out, " + j + " line of code in the file");


    } else if (k=1) {

        console.log('OMG!!! ' +k + " line of code in the file, "+ k+" line of code, "+ friends[i].name + " strikes one out, clears it all out, no more lines of code in the file");
    }

    }

}
















    