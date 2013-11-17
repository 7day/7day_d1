
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'indexMenuAm';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var testsess = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	testsess.click = function testsess_click (event)// @startlock
	{// @endlock
		//Verifca della sessione (utente, d1datsess, progsess, time) 
		//dataSessione.dateFormat("DD/MM/YYYY")
		var dataSessione = new Date();
		var sessok=indexMenu.userScVal(data.userData.utente_,dataSessione.dateFormat("DD/MM/YYYY"),data.userData.progsess_,10);
		
		alert(sessok);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_testsess", "click", testsess.click, "WAF");
	// @endregion// @endlock

    
	if(typeof(data.userData) == "undefined")		
	{
		window.location='/indexMenu.waPage';
	}


	};// @lock


}// @startlock
return constructor;
})();// @endlock
