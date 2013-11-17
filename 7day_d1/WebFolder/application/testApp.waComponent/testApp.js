
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'testApp';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var testsession = {};	// @button
	var back = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	testsession.click = function testsession_click (event)// @startlock
	{// @endlock
		var dataSessione = new Date();
		var sessok=indexMenu.userScVal(data.userData.utente,dataSessione.dateFormat("DD/MM/YYYY"),data.userData.progsess,$$(getHtmlId('minuti')).getValue());
		
		alert(sessok);
	};// @lock

	back.click = function back_click (event)// @startlock
	{// @endlock
		
	    if(data.userData.utente[3]=="AM")
	    {
			$$('main1').loadComponent({path: '/application/indexMenuAm.waComponent', userData: {utente: data.userData.utente, progsess: data.userData.progsess}});
	    }
	
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_testsession", "click", testsession.click, "WAF");
	WAF.addListener(this.id + "_back", "click", back.click, "WAF");
	// @endregion// @endlock

	if(typeof(data.userData) == "undefined")		
	{
		window.location='/indexMenu.waPage';
	}


	};// @lock


}// @startlock
return constructor;
})();// @endlock
