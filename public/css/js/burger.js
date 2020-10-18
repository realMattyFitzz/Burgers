$(function() {
    // call for devouring a burger
    $(".devBtn").on("click", function(e){
        e.preventDefault();
        const id = $(this).data("id");
        const dev = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: dev
        }).then(function(){
            console.log("burger devoured!")
            location.reload();
        });
    });
    // call for creating a new burger
    $("#addBurger").on("click", function(e){
        e.preventDefault();
        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("prepared a new burger");
            location.reload();
        });
    });
});