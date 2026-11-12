//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click",()=>{
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			let value = Number(input.value);
			output.textContent = `Result: ${value}`;
			resolve(value);
		},2000);
	});

	myPromise
		.then((result) => {
			return new Promise((resolve) => {
				setTimeout(() =>{
					let mult = result*2;
					output.textContent = `Result: ${mult}`;
					resolve(mult);
				},2000);
			});
		})
		.then((result) => {
			return new Promise((resolve) => {
				setTimeout(() =>{
					let sub = result-3;
					output.textContent = `Result: ${sub}`;
					resolve(sub);
				},1000);
			});
		})
		.then((result) => {
			return new Promise((resolve) => {
				setTimeout(() =>{
					let divide = result/2;
					output.textContent = `Result: ${divide}`;
					resolve(divide);
				},1000);
			});
		})
		.then((result) => {
			return new Promise((resolve) => {
				setTimeout(() =>{
					let add = result + 10;
					output.textContent = `Final Result: ${add}`;
					resolve(add);
				},1000);
			});
		});
});





