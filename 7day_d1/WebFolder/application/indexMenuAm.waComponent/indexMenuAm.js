
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'indexMenuAm';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var applicazioneTest = {};	// @icon
	var logout = {};	// @icon
	var testsess = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	applicazioneTest.click = function applicazioneTest_click (event)// @startlock
	{// @endlock
		$$('main1').loadComponent({path: '/application/testApp.waComponent', userData: {utente: data.userData.utente, progsess: data.userData.progsess}});
	};// @lock

	logout.click = function logout_click (event)// @startlock
	{// @endlock
		window.location='/indexMenu.waPage';
	};// @lock

	testsess.click = function testsess_click (event)// @startlock
	{// @endlock
		//Verifca della sessione (utente, d1datsess, progsess, time) 
		//dataSessione.dateFormat("DD/MM/YYYY")
		var dataSessione = new Date();
		var sessok=indexMenu.userScVal(data.userData.utente,dataSessione.dateFormat("DD/MM/YYYY"),data.userData.progsess,10);
		
		alert(sessok);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_applicazioneTest", "click", applicazioneTest.click, "WAF");
	WAF.addListener(this.id + "_logout", "click", logout.click, "WAF");
	WAF.addListener(this.id + "_testsess", "click", testsess.click, "WAF");
	// @endregion// @endlock

    
	if(typeof(data.userData) == "undefined")		
	{
		window.location='/indexMenu.waPage';
	}
	else
	{
		$$(getHtmlId('whouser')).setValue(data.userData.utente[2])
	}


	};// @lock


}// @startlock
return constructor;
})();// @endlock
