import React, { useEffect } from "react";

import ReactDOM from "react-dom";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container main my-5 d-flex justify-content-center text-white">
				<div className="col-2 bg-dark text-center   m-4 " id="clock">
					<p className="align-middle py-5">
						<i className="far fa-clock"></i>
					</p>
				</div>
				<div className="col-1 numbers py-5 m-4 bg-dark  " id="x100000">
					<p>0</p>
				</div>
				<div className="col-1 numbers py-5 m-4  bg-dark  " id="x10000">
					<p>0</p>
				</div>
				<div className="col-1 numbers py-5  m-4 bg-dark  " id="x1000">
					<p>0</p>
				</div>
				<div className="col-1 numbers py-5  m-4 bg-dark  " id="x100">
					<p>0</p>
				</div>
				<div className="col-1 numbers py-5  m-4 bg-dark  " id="x10">
					<p>0</p>
				</div>
				<div className="col-1 numbers py-5 m-4  bg-dark  " id="x1">
					<p>0</p>
				</div>
			</div>
			<BonusFunctions />
		</div>
	);
};
let counter = 0;
let array = ["#x100000", "#x10000", "#x1000", "#x100", "#x10", "#x1"];
let alertMe = 5000000;
function count() {
	counter += 1;
	let countString = counter.toString().padStart(6, "0");

	array.forEach(function (value, index) {
		ReactDOM.render(countString[index], document.querySelector(value));
	});
	if (counter == alertMe) {
		alert(`The counter reached ${alertMe}`);
	}
}
let countString = "";
function countdown() {
	if (counter == 1) {
		stopCounter();
	}
	counter -= 1;
	countString = counter.toString().padStart(6, "0");

	array.forEach(function (value, index) {
		ReactDOM.render(countString[index], document.querySelector(value));
	});
	if (counter == alertMe) {
		alert(`The counter reached ${alertMe}`);
	}
}

let counting = setInterval(count, 1000);

function goCount() {
	counting = setInterval(count, 1000);
}

const BonusFunctions = () => {
	return (
		<div>
			<div className="container main d-flex justify-content-center text-dark">
				<div
					className="col-3 bg-dark redondear d-flex justify-content-center p-2 m-4"
					id="">
					<div className="p-2">
						<button
							type="button"
							onClick={resetCounter}
							className="btn-light ">
							Reset
						</button>
					</div>
					<div className=" p-2">
						<button
							type="button"
							onClick={resumeCounter}
							className="btn-light">
							Resume
						</button>
					</div>
					<div className=" p-2">
						<button
							type="button"
							onClick={stopCounter}
							className="btn-light">
							Stop
						</button>
					</div>
				</div>
				<div
					className="col-3 bg-dark redondear p-2 m-4 d-flex justify-content-center"
					id="">
					<input
						className="form-control-sm me-3 my-1 countdownInput"
						type="text"
						placeholder="Countdown"
					/>
					<button
						type="button"
						onClick={countdownMode}
						className="btn-light my-1">
						Go!
					</button>
				</div>
				<div
					className="col-3 bg-dark redondear p-2 m-4 d-flex justify-content-center"
					id="">
					<input
						className="form-control-sm me-3 my-1 alert-me"
						type="text"
						placeholder="Alert when it reaches..."
					/>
					<button
						type="button"
						onClick={alertMeNow}
						className="btn-light my-1">
						Set
					</button>
				</div>
			</div>
		</div>
	);
};

function stopCounter() {
	clearInterval(counting);
}
function resumeCounter() {
	goCount();
}

function resetCounter() {
	counter = 0;
	countString = counter.toString().padStart(6, "0");

	array.forEach(function (value, index) {
		ReactDOM.render(countString[index], document.querySelector(value));
	});
}
function alertMeNow() {
	alertMe = document.querySelector(".alert-me").value;
}
function countdownMode() {
	stopCounter();
	counter = parseInt(document.querySelector(".countdownInput").value);
	counting = setInterval(countdown, 1000);
}
export default Home;
