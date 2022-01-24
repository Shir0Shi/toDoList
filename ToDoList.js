let n = 0;
$(function (){
    $("#addBtn").on("click", function (){
        if($("#inp").val()=="")
        {
            console.log($("#inp").val());
            alert("First you need to write something!");
        }
        else
        {
            console.log($("#inp").val());
            addTask();
            $("#inp").val("");
        }
    });
    $("main").on("click",".qlineText",function (){

        console.log($(this).attr("id"));
        if($(this).css("text-decoration")=="none solid rgb(0, 0, 0)")
        {
            $(this).css({"text-decoration": "line-through"});


        }
        else
        {
            $(this).css({"text-decoration": "none"});
        }

    });

    $("main").on("click",".qlineBtn", function (){
        $(this).parent().remove();

    });

});
function addTask()
{
    $("<div>").addClass("quest").appendTo("main");
    $("div").last().append("<p class='qlineText' id='task"+n+"'>"+$("#inp").val()+"</p><button class='qlineBtn' id='tbtn"+n+"'>×</button>");
    n++;
}
