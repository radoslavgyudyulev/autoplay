let totalSpins = document.querySelector('#spins');
let lossLimit = document.querySelector('#limit');
let jackpotWin = document.querySelector('#jackpot');
let bonusWin = document.querySelector('#bonus');
let options = document.querySelector('#options');
let dropDownIcon = document.querySelector('#drop-icon');
let autoPlaySettings = document.querySelector(".autoplay-setting");
let btn = document.querySelector('#button');

function toggleAdvancedOptions() {
    if (autoPlaySettings.style.display === "none") {
        autoPlaySettings.style.display = "block";
        dropDownIcon.style.display = "none"
    } else {
        autoPlaySettings.style.display = "none";
        dropDownIcon.style.display = "block"
    }
}

function buildObjectWithOptions() {
    let options = {
        spins : totalSpins.value,
        limit : lossLimit.value,
        stopOnJackpot : jackpotWin.checked,
        stopOnBonus : bonusWin.checked
    }

    console.log(options)
    return options
}


btn.onclick = () => buildObjectWithOptions();
options.onclick = () => toggleAdvancedOptions();


