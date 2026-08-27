document.addEventListener("DOMContentLoaded", function () {
	var aboutSection = document.getElementById("about");
	var ageValueElement = document.getElementById("age-value");
    var programmingTimeElement = document.getElementById("programming-time");

	if (!aboutSection || !ageValueElement) {
		return;
	}

	var birthdateText = aboutSection.getAttribute("data-birthdate");
	if (!birthdateText) {
		return;
	}

	var birthDate = new Date(birthdateText + "T00:00:00");
	if (Number.isNaN(birthDate.getTime())) {
		return;
	}

	var today = new Date();
	var age = today.getFullYear() - birthDate.getFullYear();
	var monthDifference = today.getMonth() - birthDate.getMonth();
	var birthdayHasPassedThisYear =
		monthDifference > 0 ||
		(monthDifference === 0 && today.getDate() >= birthDate.getDate());

	if (!birthdayHasPassedThisYear) {
		age -= 1;
	}

	ageValueElement.textContent = String(age);
	programmingTimeElement.textContent = String(age - 15);

});