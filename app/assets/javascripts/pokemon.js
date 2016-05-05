// This is the javascript I wrote out to start making api calls and sending data to my controller. I learned that using a ruby helper can get me there sooner and I write less code
// though I don't think that it's necessarily faster. I don't like how the pokeapi is set up i guess it takes a long time to make all of the separate api calls to get the info that you need
// this function works and you will get a list of links of all of the pokemon depending on the limit you set, but I stopeed there. I went with the ruby way, but still wanted to show that I can write Javascript 

// $(document).ready( function() {
   
//   function getPokemon() {
//     $.ajax({
//       url: 'https://pokeapi.co/api/v2/pokemon/?limit=50',
//       type: 'GET',
//       success: function(data) {
//         var pokemon = data.results;
//         for(var i = 0; i < pokemon.length; i++) {
//           var monster = pokemon[i];
//           $.ajax({
//             url: '/pokemon_link',
//             type: 'GET',
//             data: { animal: monster },
//             success: function(data) {
//               $('#pokemons').append(data)
//             },
//             error: function(data) {
//               console.log(data);
//             }
//           });
//         }
//       },
//       error: function(data) {
//         console.log(data);
//       }
//     });      
//   }
  
//   getPokemon();
  
    
// });