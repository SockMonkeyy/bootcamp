const restaurant = {
   name: 'Ichiran Ramen',
   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
   city: 'Brooklyn',
   state: 'NY',
   zipcode: '11206',

   name: 'Top Ramen',
   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
   city: 'Brooklyn',
   state: 'NY',
   zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const name1 = restaurant['name'];
const name2 = restaurant['address'];
const name3 = restaurant['city'];
const name4 = restaurant['state'];
const name5 = restaurant['zipcode'];
const fullAddress = `${name1} ${name2}, ${name3}, ${name4} ${name5}`;
console.log(fullAddress);

