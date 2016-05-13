/*
To add a new response to the array you only need to appened it to the end of the array.  You'll need to do 2 things for each response.
1. seperate each of the responses with a comma
2. encpsulate each response with qoutes -- you can use double-qoutes as I have or you ccan use single-qoutes.  whichever one you choose is fine but understand that if you
double-qoutes then you CAN NOT use double qoutes inside your reponse
To update an excisting respnse you need only replace the text inside the corresponding spot adhearing to the above rules.  The responses appear in decending order on the page 
starting from left to right.  This correspondes to the same postion in the Title array.
*/
var rep_text = ["Response text 1<br>response text 1", "Response text 2", "Response text 3", "Response text 4", "Response text 5", "Response text 6", "Response text 7", "Response text 8", "Response text 9", "Response text 10"];
/*
When you add a new response to the above array you need to add a appropriate title to the below array  this is done the same way as with a reponse
1. seperate each of the titles with a comma
2. encpsulate each title with qoutes -- you can use double-qoutes as I have or you ccan use single-qoutes.  whichever one you choose is fine but understand that if you
double-qoutes then you CAN NOT use double qoutes inside your title
*/
var rep_title = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6", "Title 7", "Title 8", "Title 9", "Title 10"];
/*
You can leave the shortcut array alone for now I will continue to work out how to set it up.  But if you want to you can continue to add to it in the same way as above.
1. seperate each of the shortcuts with a comma
2. encpsulate each shortcut with qoutes -- you can use double-qoutes as I have or you ccan use single-qoutes.  whichever one you choose is fine but understand that if you
double-qoutes then you CAN NOT use double qoutes inside your shortcut
*/
var rep_shortcut = ["shortcut1", "shortcut2", "shortcut3", "shortcut4", "shortcut5", "shortcut6", "shortcut7", "shortcut8", "shortcut9", "shortcut10"]

/*-----------------------------------------EVERYTHING BELOW THIS LINE IS THE PROGRAM.  DON'T TOUCH OR IT WONT WORK ANYMORE---------------------------------------------------------*/

//next we propagate these values onto the page
window.addEventListener('load', propagate);
function propagate(){
	var htmloutput = "";
	
	for(i=0; i<rep_text.length; i++){
		var title = "<h2 style='display:inline;'>" + rep_title[i] + "</h2>";
		var response = "<div class='motivate'>" + rep_text[i] + "</div><hr>";
		htmloutput += title + response;
	}
	document.getElementById("motivatebox").innerHTML = htmloutput;
}

//now we set the update list to the length of the arrays
function update_list(){
	var htmloutput = "<option></option><option value='newrep'>New Response</option>";
	
	for(i=0; i<rep_text.length; i++){
		var number = i+1;
		htmloutput += "<option value='" + number + "'>" + number + "</option>";
	}
	document.getElementById("curr_total").innerHTML = htmloutput;
}

function copySelectionText(){
	var copysuccess // var to check whether execCommand successfully executed
	try{
		copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
	} catch(e){
		copysuccess = false
	}
	return copysuccess
}
		
function selectElementText(el){
	var range = document.createRange() // create new range object
	range.selectNodeContents(el) // set range to encompass desired element text
	var selection = window.getSelection() // get Selection object from currently user selected text
	selection.removeAllRanges() // unselect any user selected text (if any)
	selection.addRange(range) // add range to Selection object to select it
}
		
	var motivatebox = document.getElementById('motivatebox')

	
motivatebox.addEventListener('dblclick', function(e){
	var e = e || event // equalize event object between modern and older IE browsers
	var target = e.target || e.srcElement // get target element mouse is over
	if (target.className == 'motivate'){
		selectElementText(target) // select the element's text we wish to read
		var copysuccess = copySelectionText()
	}
}, false)

motivatebox.addEventListener('mousedown', function(e){
	var e = e || event // equalize event object between modern and older IE browsers
	var target = e.target || e.srcElement // get target element mouse is over
	if (target.className == 'motivate'){
		selectElementText(target) // select the element's text we wish to drag
	}
}, false)