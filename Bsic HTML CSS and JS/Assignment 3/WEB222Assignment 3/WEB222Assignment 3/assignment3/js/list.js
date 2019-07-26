// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
window.onload = function() {
    var list_Index = document.querySelector("#List-of-fruits");
    var open_List = "<ol>", close_List = "</ol>";
     var openUList = "<ul>",closeList ="</ul>";
    

    for (var i = 0; i < fruits.length; i++) 
    { 
        open_List += "<li>" + fruits[i] + "</li>"; 
    }

    open_List += close_List;
    list_Index.innerHTML = open_List;



    var openUList = "<ul>";
    var directory_Index = document.querySelector("#List-of-files");

    for (var i = 0; i < directory.length; i++) {
        if (directory[i].type === "file") {
            openUList += "<li>" + directory[i].name + "</li>";
        }

   
        else if (directory[i].type === "directory") {
            openUList += "<li>" + directory[i].name + "</li>";
            for (var j = 0; j < directory[i].files.length; j++) {
                openUList += "<ul><li>" + directory[i].files[j].name + "</li></ul>";
            }
        }
    }

    directory_Index.innerHTML = openUList;
}
