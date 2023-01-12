
const fightIncreaseButton = document.querySelector("#fight-increase");
const fightDecreaseButton = document.querySelector("#fight-decrease");
const intelligenceIncreaseButton = document.querySelector("#intelligence-increase");
const intelligenceDecreaseButton = document.querySelector("#intelligence-decrease");
const shotIncreaseButton = document.querySelector("#shot-increase");
const shotDecreaseButton = document.querySelector("#shot-decrease");
const atletismIncreaseButton = document.querySelector("#atletism-increase");
const atletismDecreaseButton = document.querySelector("#atletism-decrease");
const ocultismIncreaseButton = document.querySelector("#ocultism-increase");
const ocultismDecreaseButton = document.querySelector("#ocultism-decrease");
const medicineIncreaseButton = document.querySelector("#medicine-increase");
const medicineDecreaseButton = document.querySelector("#medicine-decrease");
const therapyIncreaseButton = document.querySelector("#therapy-increase");
const therapyDecreaseButton = document.querySelector("#therapy-decrease");
const attributeButtons = document.querySelectorAll(".attribute-icon");
const resetButton = document.querySelector("#reset-button");
const confirmResetScreen = document.querySelector(".confirm-reset-screen");
const confirmResetButton = document.querySelector(".confirm-reset-button");
const cancelResetButton = document.querySelector(".cancel-reset-button");


const skill1IncreaseButton = document.querySelector("#skill1-increase");
const skill1DecreaseButton = document.querySelector("#skill1-decrease");
const skill2IncreaseButton = document.querySelector("#skill2-increase");
const skill2DecreaseButton = document.querySelector("#skill2-decrease");

const statsArea = document.querySelector(".stats-area");
const statsAreaToggleButton = document.querySelector(".character-stats-toggle-button");
const statsAreaSwitchButton = document.querySelector(".character-stats-switch-button");
const skillsArea = document.querySelector(".skills-area");



const lifeBar = document.querySelector(".life-bar");
const sanityBar = document.querySelector(".sanity-bar");
const lifeValue = document.querySelector(".life-value");
const sanityValue = document.querySelector(".sanity-value");


const fightAttribute = document.querySelector("#fight");
const intelligenceAttribute = document.querySelector("#intelligence");
const shotAttribute = document.querySelector("#shot");
const atletismAttribute = document.querySelector("#atletism");
const ocultismAttribute = document.querySelector("#intelligence");
const medicineAttribute = document.querySelector("#shot");
const therapyAttribute = document.querySelector("#atletism");


const skillDescriptionScreen = document.querySelector(".skill-description");
const skillDescriptionScreenCloseButton = document.querySelector(".skill-description .close-button");
const skillDescriptionText = document.querySelector(".skill-description p");
const skill1Label = document.querySelector("#skill1-label");
const skill2Label = document.querySelector("#skill2-label");

const skill1 = document.querySelector("#skill1");
const skill2 = document.querySelector("#skill2");

const skill1Text = 'Hemomancia: Controle total do sangue.<br/> "Dizem ser possível matar o oponente de dentro para fora com isso, mas só alguns de sangue puro conseguem".';
const skill2Text = 'Frenesi: Se transformar na sua real forma.<br/>"Dizem ser preciso perder bem mais que apenas a sanidade para se transformar em tal forma".';


let trevor;


function increaseAttribute(propertyName, element){
	trevor[propertyName] ++;
	element.innerHTML = trevor[propertyName];
}

function decreaseAttribute(propertyName, element){
	trevor[propertyName] --;
	element.innerHTML = trevor[propertyName];
}

function displayAttributes(){
	lifeValue.innerHTML = trevor.life;
	sanityValue.innerHTML = trevor.sanity;
	lifeBar.style.width = `${percentage(trevor.life, trevor.maxLife)}%`;
	sanityBar.style.width = `${percentage(trevor.sanity, trevor.maxSanity)}%`;
	fightAttribute.innerHTML = trevor.fight;
	intelligenceAttribute.innerHTML = trevor.intelligence;
	shotAttribute.innerHTML = trevor.shot;
	atletismAttribute.innerHTML = trevor.atletism;
	ocultismAttribute.innerHTML = trevor.atletism;
	medicineAttribute.innerHTML = trevor.atletism;
	therapyAttribute.innerHTML = trevor.atletism;
	skill1.innerHTML = trevor.skill1;
	skill2.innerHTML = trevor.skill2;
}

function resetStats(){
	window.localStorage.removeItem("trevor_key");
	getTrevor();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getTrevor = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		trevor = JSON.parse(window.localStorage.getItem("trevor_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável trevor possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = trevor.life;
		sanityValue.innerHTML = trevor.sanity;
		lifeBar.style.width = `${percentage(trevor.life, trevor.maxLife)}%`;
		sanityBar.style.width = `${percentage(trevor.sanity, trevor.maxSanity)}%`;
		fightAttribute.innerHTML = trevor.fight;
		intelligenceAttribute.innerHTML = trevor.intelligence;
		shotAttribute.innerHTML = trevor.shot;
		atletismAttribute.innerHTML = trevor.atletism;
		ocultismAttribute.innerHTML = trevor.atletism;
		medicineAttribute.innerHTML = trevor.atletism;
		therapyAttribute.innerHTML = trevor.atletism;
		skill1.innerHTML = trevor.skill1;
		skill2.innerHTML = trevor.skill2;
	}
	catch {
		trevor = {
		life: 250,
		sanity: 200,
		maxLife: 250,
		maxSanity: 200,
		fight: 1,
		intelligence: 1,
		shot: 1,
		atletism: 1,
		skill1: 1,
		skill2: 1
		};
	}
	finally{
		displayAttributes();
	}
};

getTrevor();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpMp(bar, barValue, propertyName, maxPropertyName){
	let newValue = prompt("Insira o novo valor:");
	if (newValue !== "" && newValue !== null){
		if (newValue > trevor[maxPropertyName]){
			trevor[maxPropertyName] = newValue;
		}
		trevor[propertyName] = newValue;
		bar.style.width = `${percentage(trevor[propertyName], trevor[maxPropertyName])}%`;
	}
	barValue.innerHTML = trevor[propertyName];
	window.localStorage.setItem("trevor_key", JSON.stringify(trevor));
}


function displayDescriptionScreen(text){
	skillDescriptionScreen.classList.remove("d-none");
	statsAreaToggleButton.classList.add("pe-none");
	statsAreaSwitchButton.classList.add("pe-none");
	skillDescriptionText.innerHTML = text;
}



fightIncreaseButton.addEventListener("click", function(){
	increaseAttribute("fight", fightAttribute);
});

fightDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("fight", fightAttribute);
});

intelligenceIncreaseButton.addEventListener("click", function(){
	increaseAttribute("intelligence", intelligenceAttribute);
});

intelligenceDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("intelligence", intelligenceAttribute);
});

shotIncreaseButton.addEventListener("click", function(){
	increaseAttribute("shot", shotAttribute);
});

shotDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("shot", shotAttribute);
});

atletismIncreaseButton.addEventListener("click", function(){
	increaseAttribute("atletism", atletismAttribute);
});

atletismDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("atletism", atletismAttribute);
});

skill1IncreaseButton.addEventListener("click", function(){
	increaseAttribute("skill1", skill1);
});

skill1DecreaseButton.addEventListener("click", function(){
	decreaseAttribute("skill1", skill1);
});

skill2IncreaseButton.addEventListener("click", function(){
	increaseAttribute("skill2", skill2);
});

skill2DecreaseButton.addEventListener("click", function(){
	decreaseAttribute("skill2", skill2);
});

lifeValue.addEventListener("click", function(){
	changeHpMp(lifeBar, lifeValue, "life", "maxLife");
});
sanityValue.addEventListener("click", function(){
	changeHpMp(sanityBar, sanityValue, "sanity", "maxSanity");
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("trevor_key", JSON.stringify(trevor));
	});
});

resetButton.addEventListener("click", function(){
	confirmResetScreen.classList.remove("d-none");
});

confirmResetButton.addEventListener("click", function(){
	resetStats();
});

cancelResetButton.addEventListener("click", function(){
	confirmResetScreen.classList.add("d-none");
});


statsAreaToggleButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.toggle("character-stats-toggle-button-hidden");
	statsArea.classList.toggle("stats-area-disabled");
	statsAreaSwitchButton.classList.toggle("opacity-0");
	statsAreaSwitchButton.classList.toggle("pe-none");
});

statsAreaSwitchButton.addEventListener("click", function(){
	statsArea.classList.add("stats-area-disabled");
	setTimeout(function(){
		skillsArea.classList.toggle("d-none");
		statsArea.classList.remove("stats-area-disabled");
	}, 700);
});

skillDescriptionScreenCloseButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.remove("pe-none");
	statsAreaSwitchButton.classList.remove("pe-none");
	skillDescriptionScreen.classList.add("d-none");
});

skill1Label.addEventListener("click", function(){
	displayDescriptionScreen(skill1Text);
});

skill2Label.addEventListener("click", function(){
	displayDescriptionScreen(skill2Text);
});
