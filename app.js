// list of animals
var animalList = [
    "dog",
    "cat",
    "horse",
    "chicken",
    "fish",
    "bear",
    "bird",
    "shark",
    "snake",
    "pig",
    "lion",
    "turkey",
    "wolf",
    "spider",
    "rabbit",
    "duck",
    "deer",
    "cow",
    "monkey",
    "lobster"
];

// funtion to create buttons
function buttonCreate() {
    $("#buttonArea").empty();
    for (let i = 0; i < animalList.length; i++) {
        var button = $("<button>");
        button.addClass("animalButton");
        button.attr("data-name", animalList[i]);
        button.text(animalList[i]);
        $("#buttonArea").append(button);
    }
    setupClicks();
}

buttonCreate();



$("#addAnimal").click(function(){
    event.preventDefault();
    var animalSearch = $("#animalSearch").val().trim();
    animalList.push(animalSearch);
    $("#animalSearch").val("");
    buttonCreate();
});


$("#removeLast").click(function(){
    event.preventDefault();
    animalList.splice(-1,1)
    buttonCreate();
});


function setupClicks() {
    $(".animalButton").click(function() {
        event.preventDefault();
        var animalName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ animalName +"&api_key=vZpgnm2bVL7xRmIro5IPC0Ss59Tyyn2s&limit=9";
    
        $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function (response){
            $("#gifArea").empty();
            for (let i = 0; i < 9; i++) {
                var imgURL = response.data[i].images.fixed_height.url
                $("#gifArea").append("<img src= " + imgURL + " alt='movie poster'>");
            }
            
        })
    }); 
};







