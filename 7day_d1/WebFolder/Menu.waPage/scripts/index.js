
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton4 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		$$('frame1').setValue("/Configurazione.waPage/index.html");
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		$$('frame1').setValue("/Funzioni.waPage/index.html");
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$('frame1').setValue("/Dipendenti.waPage/index.html");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
// @endregion
};// @endlock
