let printEachCharacter = (string) => {
  string.forEach(function(element){
    console.log(element);
  })
}

printEachCharacter(["ant", "bat", "cat", 43]);

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

let a = [8,17,42,99];

a.forEach(function(element){
  console.log(element);
})
