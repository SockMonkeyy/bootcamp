const ShoeCatalog = [
   Jordan4 = [
      'PSG', 'FIRE RED', 'LIGHTNING YELLOW', 'BLACK CAT', 'MILITARY BULE'],

   Jordan5 = [
      used = '********Used*****',
      'FIRE RED', 'STEALTH BLUE', 'BEL AIR', 'TOP 3', 'SHATTERED BACKBOARD',

      other = '****New*****',
      'FIRE RED', 'STEALTH BLUE', 'BEL AIR', 'TOP 3', 'SHATTERED BACKBOARD'
   ],

   Jordan11 = [
      'BRED', 'COOL GREY', 'WHITE BRED', 'CAP AND GOWN', 'CONCORD', 'SPACE JAM'],
]
for (let Jordan = 0; Jordan < ShoeCatalog.length; Jordan++) {
   const cat = ShoeCatalog[Jordan];
   let Retro = 'retro';
   console.log(`Retro ${Jordan + 1}`)
   for (let j = 0; j < cat.length; j++) {
      console.log(`${cat}`)
   }
}
let text = "";

for (let num = 0; num < 5; num++) {
    text += `The number is ${num} `;
  }
  console.log(text);