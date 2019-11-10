

init();
//setTimeout(() => init(), 3000);

function init(){
	console.log("bubu")
	let template_1 = document.getElementById("template-1");
	let popper_1 = new PopBuilder({
		content: template_1,
		handleSelector: "#attributes-info",
		relation: "bottom",
		tol: 5,
		align: "CC",
		deviation: 0,
		atClick: false,
		classes: "light-theme",
		trigger: "click"
	});
	popper_1.init();

}
