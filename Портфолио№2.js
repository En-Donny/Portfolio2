let floors = document.getElementsByClassName("floor");//массив этажей


let num = document.getElementById("number");//счетчик этажей

let numfl = document.getElementById("number-fl");//счетчик этажей

document.getElementById("up").addEventListener("click", upfloor);//кнопка вверх

document.getElementById("down").addEventListener("click", downfloor);//кнопка вниз

let body = document.getElementById("body");

let flats = document.getElementsByClassName("flat-link");
let plans = document.getElementsByClassName("flats");







let modall = document.getElementById("modall");




let modbut = document.getElementById("modbut").addEventListener("click", function () {//вызывает модальное окно
	modall.classList.toggle("is-open");
	if (f < 10) {
		numfl.innerHTML = "0" + f;
	}
	else {
		numfl.innerHTML = f;
	}
	body.style.overflow = "hidden";
});


let closemod = document.getElementById("close").addEventListener("click", function () {//закрывает модальное окно
	modall.classList.toggle("is-open");
	body.style.overflow = "auto";
});






for (let i = 0; i < flats.length; ++i) {
	flats[i].addEventListener("click", function (event) {

		for (let j = 0; j < plans.length; ++j) {
			plans[j].style.opacity = "0";
		}


		for (let j = 0; j < flats.length; ++j) {
			flats[j].style.cssText = "color: #635854; font-weight:normal;";
		}
		plans[i].style.opacity = "1";
		flats[i].style.cssText = "color: #3596F5; font-weight:600;";
	});
}



for (let i = 0; i < plans.length; ++i) {
	plans[i].addEventListener("click", function (event) {

		for (let j = 0; j < plans.length; ++j) {
			plans[j].style.opacity = "0";
		}

		for (let j = 0; j < flats.length; ++j) {
			flats[j].style.cssText = "color: #635854; font-weight:normal;";
		}
		plans[i].style.opacity = "1";
		flats[i].style.cssText = "color: #3596F5; font-weight:600;";
	});
}



let flag = true;






let f = 2;
let c;
function upfloor(event) {//кнопка увеличения этажа

	if (flag) {
		floors[0].style.opacity = "1";
		flag = false;
		num.innerHTML = "02";
	}



	else {
		f++;
		if (f == (floors.length + 2)) {
			for (let i = 0; i < floors.length; ++i) {
				floors[i].style.opacity = "0";
			}
			f = 2;
			floors[0].style.opacity = "1";
			num.innerHTML = "02";
		}
		else {
			for (let i = 0; i < floors.length; ++i) {
				floors[i].style.opacity = "0";
			}
			floors[f - 2].style.opacity = "1";
			if (f < 10) {
				num.innerHTML = "0" + f;
			}
			else {
				num.innerHTML = f;
			}
		}
	}
	return f;
}



function downfloor(event) {//кнопка уменьшения этажа

	if (flag) {
		floors[0].style.opacity = "1";
		flag = false;
		num.innerHTML = "02";
	}



	else {
		f--;
		if (f == 1) {
			for (let i = 0; i < floors.length; ++i) {
				floors[i].style.opacity = "0";
			}
			f = 18;
			floors[floors.length - 1].style.opacity = "1";
			num.innerHTML = "18";
		}
		else {
			for (let i = 0; i < floors.length; ++i) {
				floors[i].style.opacity = "0";
			}
			floors[f - 2].style.opacity = "1";
			if (f < 10) {
				num.innerHTML = "0" + f;
			}
			else {
				num.innerHTML = f;
			}
		}
	}
	return f;
}




for (let i = 0; i < floors.length; ++i) {//при клике на этаж
	let c = i;
	floors[i].addEventListener("click", function () {
		flag = false;
		for (let j = 0; j < floors.length; ++j) {
			floors[j].style.opacity = "0";
		}
		floors[c].style.opacity = "1";
		f = c + 2;
		if ((c + 2) < 10) {
			num.innerHTML = "0" + (c + 2);

		}
		else {
			num.innerHTML = (c + 2);
		}




	}, f, flag, floors, c);



}






// floors[floors.length-1].addEventListener("click",floorLight);

// function floorLight(event){
// 	floors[i].style.opacity="0.75";
// }





let form = document.getElementById("main-form");
let email = document.getElementById("emailHelp");
let pass = document.getElementById("passwordHelp");


document.getElementById("hacksub").addEventListener("click", function (event) {



	if (form.email.value == "") {
		email.innerHTML = "Заполните это поле!";
		email.style.color = "red";
	}


	if (form.password.value == "") {
		pass.innerHTML = "Заполните это поле!";
		pass.style.color = "red";
	}
});


