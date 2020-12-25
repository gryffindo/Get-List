// DOM Selection Start
const name = document.querySelector('#name');
const wFavourite = document.querySelector('#wFavourite');
const pubName = document.querySelector('#pubName');
const url = document.querySelector('#url');
const btn = document.querySelector('#btn');
const gameList = document.querySelector('#game-list');

// DOM Selection End

// Adding Event Listener Start
btn.addEventListener('click', function (e) {
	// Stable The Data Start
	e.preventDefault();
	// Stable The Data End

	// Basic Validation Start
	if(name.value == '' && wFavourite.value == '' && pubName.value == '') {
		alert('Please Enter a Valid Information');
		// Basic Validation End
	}else {
		// Creating New Elements and Appending
		const newRow = document.createElement('tr');

		const newName = document.createElement('th');
		newName.innerHTML = name.value;
		newRow.appendChild(newName);

		const newFavourite = document.createElement('th');
		newFavourite.innerHTML = wFavourite.value;
		newRow.appendChild(newFavourite);

		const newPubName = document.createElement('th');
		newPubName.innerHTML = pubName.value;
		newRow.appendChild(newPubName);

		const newURL = document.createElement('th');
		newURL.innerHTML = url.value;
		newRow.appendChild(newURL);

		gameList.appendChild(newRow);
	}
	

	
})
// Adding Event Listener End


