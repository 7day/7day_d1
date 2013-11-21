/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('myDb').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
 exports.connetti = function()
{
		
	d1genssl=ds.Parametri.first().d1genssl;
	
	if (d1genssl==0){
 		d1genssl=false;
 	}
 	if (d1genssl==1){
 		d1genssl=true;
 	}
 	 		
 	
 	 var connectionParams = {
	        hostname: ds.Parametri.first().d1genhost,
	        port: ds.Parametri.first().d1genport,
	        user: ds.Parametri.first().d1genuser,
	        password: ds.Parametri.first().d1genpass,
	     	database: ds.Parametri.first().d1gendb,
	        charSet: 192,
	        ssl: d1genssl
	    };
	  
	    console.log("connetti a ");
		console.log(connectionParams);
		
		 return connectionParams;
 } 