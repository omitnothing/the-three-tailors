var pointerFree = true;
document.body.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
	width = document.body.clientWidth;
	height = document.body.clientHeight;
	diffX = width - mouseX;
	diffY = height - mouseY;

	topp = mouseY;
	left = mouseX;
	if(diffX  <= 77) { left = width - 77; }
	if(mouseX <= 77) { left = 77; }
	if(diffY  <= 77) { topp = height - 77; }
	if(mouseY <= 77) { topp = 77; }

	if(pointerFree){
		document.getElementById('mouse').style.top = topp + 'px';
		document.getElementById('mouse').style.left = left + 'px';
	}
});

function mouseShow(ele){
	document.getElementById('mouse').style.opacity = '1';
	document.getElementById('mouse').style.transition = '1000ms all';
	pointerFree = false;

}
function aaa(ele){
	var centerX = ele.offsetLeft + ele.offsetWidth / 2;
	var centerY = ele.offsetTop + ele.offsetHeight / 2;
	document.getElementById('mouse').style.top = centerY -
		2 + 'px';
	document.getElementById('mouse').style.left = centerX - 2 + 'px';
}
function mouseOut(ele){
	document.getElementById('mouse').style.opacity = '0';
		document.getElementById('mouse').style.transition = '10ms all';
	pointerFree = true;
}
