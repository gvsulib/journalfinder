
var alertDiv = document.querySelector('.SS_ToolNotes');
alertDiv.className = "alert alert-info";
alertDiv.style.marginTop = '1em';

document.getElementById('submit-title-search-type').className = 'btn btn-primary ng-binding';

	// Alert adding
	var alertScript = document.createElement('script');
alertScript.src = 'https://prod.library.gvsu.edu/labs/alert/alert.js';
document.body.appendChild(alertScript);