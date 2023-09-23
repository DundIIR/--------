const LIGHTS = {
	red: 0,
	yellow: 1,
	grin: 2,
	redWalker: 3,
	grinWalker: 4
}

const circles = document.querySelectorAll(".circle");

function q0() {
	for(item in circles){
		item.classList.remove('active');
	}
	q1();
}

function q1() {
	circles[LIGHTS.yellow].classList.remove('active');
	circles[LIGHTS.redWalker].classList.remove('active');
	circles[LIGHTS.red].classList.add('active');
	circles[LIGHTS.grinWalker].classList.add('active');
	setTimeout(q2, 10000);
}

function q2() {
	circles[LIGHTS.grinWalker].classList.remove('active');
	circles[LIGHTS.yellow].classList.add('active');
	circles[LIGHTS.redWalker].classList.add('active');
	setTimeout(q3, 2000);
}

function q3() {
	circles[LIGHTS.red].classList.remove('active');
	circles[LIGHTS.yellow].classList.remove('active');
	circles[LIGHTS.grin].classList.add('active');
	setTimeout(q4, 10000);
}

function q4() {
	circles[LIGHTS.grin].classList.remove('active');
	circles[LIGHTS.yellow].classList.add('active');
	setTimeout(q1, 2000);
}

q0();
