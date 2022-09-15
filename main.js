let cars = ["Ford", "Mini Cooper", "Nissan", "Subaru"];

// console.log(cars.length); 

let moreCars= ["Toyota", "Jetta", "Vokswagon", "Honda"];

let totalCars = cars.concat(moreCars);

// console.log(totalCars); 

// console.log(totalCars.indexOf("Honda")); 



let stringOfCars = totalCars.join();
// console.log(stringOfCars); 

let carsFromString = stringOfCars.split(","); 
// console.log(carsFromString); 

let carsInReverse = totalCars.reverse();

// console.log(carsInReverse);


// console.log(carsInReverse.sort()); 
// console.log(carsInReverse.indexOf("Subaru")); 

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

// console.log(pets.slice(4,6));


let removedReptiles = pets.splice(4,2, "hamster"); 

// console.log(pets);

let removedPet = pets.pop(); 

// console.log(pets); 

pets.push(removedPet);

// console.log(pets); 

pets.shift();

//console.log(pets.shift()); 

pets.unshift('turtle'); 

// console.log(pets);

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {

    arr[index] = num + 2

   
}

numbers.forEach(addTwo)
console.log(numbers)