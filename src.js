var tingy = function() {
  
var input = document.getElementById("input").value;

if(input == "Gupta" || input = "gupta"){
  document.getElementById("thing").innerHTML = "The Gupta Lineage as roots traceable all the way back to countries such as Nigeria, Ireland, and India" + "<br>" + "Today the Guptas are:" + "<br>" + "12.5% Irish" + "<br>" + "37.5% Nigerian" + "<br>" + "50% Indian";
}
  
else{
 document.getElementById("thing").innerHTML = "Sorry, We don't have any records of that name"; 
}

};
