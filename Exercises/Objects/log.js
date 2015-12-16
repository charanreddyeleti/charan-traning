function log(){
	var id = document.getElementById("username").value;
	var pwd = document.getElementById("pword").value;
	var elementResult = document.getElementById("wd");
	var clear = document.getElementById("clr");
	//console.log(id,pwd)
	if (id === "js" && pwd === "javascript") {
		clear.innerHTML = " ";
		var x = "welcome";
		elementResult.innerHTML = x;
	} else{
		var y = "username/password invalid"
		elementResult.innerHTML = y;
	}
}