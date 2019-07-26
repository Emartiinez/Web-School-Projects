// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload=function(){
   
	makeRequest(1);
}



function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
	var url;
	if (pageNum ===1){
	url ="https://reqres.in/api/users?page=1";
	}
	else if (pageNum ===2) {
	url = "https://reqres.in/api/users?page=2";
	}
	else if (pageNum === 3) {
		url = "https://reqres.in/api/users?page=3";
	}	
	else {
		url = "https://reqres.in/api/users?page=4";
	}
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {


// CAN DO A SWITCH CASE OR SELECTION
//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var mData = document.querySelector("#data").innerHTML = "";
				for (var i=0; i < 3 ; i++)
				{
					var tr = document.createElement("tr");
					var td= document.createElement("td");
					var hData = document.createTextNode(jsData.data[i].id);

					td.appendChild(hData);
					tr.appendChild(td);

					var td2 = document.createElement("td");
					var hData2= document.createTextNode(jsData.data[i].first_name);

					td2.appendChild(hData2);
					tr.appendChild(td2);

					var td3 = document.createElement("td");
					var hData3 = document.createTextNode(jsData.data[i].last_name);

					td3.appendChild(hData3);
					tr.appendChild(td3);

					var td4 = document.createElement("td");
					var img = document.createElement("img");
					img.src = jsData.data[i].avatar;
					
					td4.appendChild(img);
					tr.appendChild(td4);

					document.querySelector("#data").appendChild(tr);
				}
				
				
				document.getElementsByClassName("#pgbtn").removeClass('active');

				if (jsData.page===1) {
					var button=document.querySelector("#pgbtn1");
					button.className="active";
				}
				else if(jsData.page === 2) {
					var button=document.querySelector("#pgbtn2");
					button.className="active";
				}
				else if(jsData.page === 3) {
					var button=document.querySelector("#pgbtn3");
				button.className="active";
				}

				else
				var button=document.querySelector("#pgbtn4");
				button.className="active";


		} 
		else {
			console.log('There was a problem with the request.');
		}
	}
}	