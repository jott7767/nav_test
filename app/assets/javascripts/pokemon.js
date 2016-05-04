$(document).ready( function() {
   
  function getPokemon() {
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/6',
      type: 'GET',
      success: function(data) {
        var moves = data.moves
        for(var i = 0; i < moves.length; i++) {
          var attack = moves[i];
          console.log(attack.move.name);
        }
        debugger;
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });      
  }
  
  getPokemon();
    
});