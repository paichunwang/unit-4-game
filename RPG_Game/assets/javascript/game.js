$(document).ready(function () {

    var pokemonChoice = [
        "../RPG_Game/assets/images/pokeball.png",
        "../RPG_Game/assets/images/001.png",
        "../RPG_Game/assets/images/004.png",
        "../RPG_Game/assets/images/007.png",
        "../RPG_Game/assets/images/010.png",
        "../RPG_Game/assets/images/019.png"]

     $("#1").mouseover(function () {
        this.src = pokemonChoice[1]
        $("#chosen").text("Bulbasaur");
        $("#1").on('click', function () {
            console.log("Bulbasaur");
            $("#pokemon img").attr('src',pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#1").attr('src',pokemonChoice[1]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');
       });
     }).mouseout(function () {
         this.src= "../RPG_Game/assets/images/pokeball.png"
         $("#chosen").text("");
     });

     $("#4").mouseover(function () {
        this.src = pokemonChoice[2]
        $("#chosen").text("Charmander");
        $("#4").on('click', function () {
            console.log("Charmander");
            $("#pokemon img").attr('src',pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#4").attr('src',pokemonChoice[2]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');
        });
     }).mouseout(function () {
         this.src= "../RPG_Game/assets/images/pokeball.png"
         $("#chosen").text("");
     });

     $("#7").mouseover(function () {
        this.src = pokemonChoice[3]
        $("#chosen").text("Squirtle");
        $("#7").on('click', function () {
            console.log("Squirtle");
            $("#pokemon img").attr('src',pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#7").attr('src',pokemonChoice[3]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');
        });
     }).mouseout(function () {
         this.src= "../RPG_Game/assets/images/pokeball.png"
         $("#chosen").text("");
     });
});

function gameStart() {
    
}