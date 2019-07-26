var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function () 
{
    loadTableWithFilters();
}




function loadTableWithFilters()
{
    var main = document.querySelector("#main-table-body").innerHTML = "";
    for (var i = 0; i < petData.length; i++)
    {
        if ((filterType === "Dog" && petData[i].type === "dog") || (filterType === "Cat" && petData[i].type === "cat") || (filterType === "Birds" && petData[i].type === "bird") || (filterType === ""))
        {
            if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
            {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var img = document.createElement("img");
                img.src = petData[i].image.src;
                img.alt = petData[i].image.alt;
                img.height = petData[i].image.height;
                img.width = petData[i].image.width;
                td.appendChild(img);

                var td1 = document.createElement("td");
                var h4 = document.createElement("h4");
                var hdg = document.createTextNode(petData[i].name);
                h4.appendChild(hdg);

                var p = document.createElement("p");
                p.innerHTML = petData[i].description;
                var span = document.createElement("span");
                var t = document.createTextNode("Age: ");
                var t1 = document.createTextNode(petData[i].age);
                var t2 = document.createTextNode(" years old.");

                span.appendChild(t);
                span.appendChild(t1);
                span.appendChild(t2);
                td1.appendChild(h4);
                td1.appendChild(p);
                td1.appendChild(span);
                tr.appendChild(td);
                tr.appendChild(td1);
                document.querySelector("#main-table-body").appendChild(tr);
            }
        }   
       
    }
    
}


function filterAllPets()
{
	filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();  
}



function filterDog()
{
	filterType = "Dog";
	
	loadTableWithFilters();
}
	

var filterCat = function()
{
	filterType = "Cat";

	loadTableWithFilters();
}

	
var filterBird = function()
{
	filterType = "Birds";
	filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}


	
var filter_zero_1 = function()
{
	filterType = "";
	filterAgeMin = 0;
	filterAgeMax = 1;
	loadTableWithFilters();
}


	
var filter_1_3 = function()
{
	filterType = "";
	filterAgeMin = 1;
	filterAgeMax = 3;
	loadTableWithFilters();
}

	
var filter_4_plus = function()
{
	filterType = "";
	filterAgeMin = 4;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}

