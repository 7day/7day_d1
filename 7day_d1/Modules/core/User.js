﻿/*	    Modulo per recuperare l'utente (Da implementare)*/exports.userLogin = function userLogin (d1codazie, d1coduten, d1genpass) {    	var sqlfactory = require('core/SqlFactory');	var connessione = require('core/Connect');	var field = [];    var resulset;			//Verifico se la sessione è scaduta    field[0]=new Array(":d1codazie","N",d1codazie);    field[1]=new Array(":d1coduten","S",d1coduten);    field[2]=new Array(":d1genpass","S",d1genpass);        resulset=sqlfactory.selectDB(                                   sqlfactory.readSqlText("d1anaguten.readUser"),                                 connessione.connectParam(d1codazie),                                 field                                );		               if(typeof(resulset)=="string")	{	   //Si è verificato un errore	   return 0;		}     	else	{       return resulset;		}                     };exports.userCreate = function userCreate (d1codazie, d1coduten, d1genpass, d1gentipo, d1codmatr, d1codvalu, d1codmenu) {	//Funzione di servizio per creare gli utenti dell'applicativo	var sqlfactory = require('core/SqlFactory');	var connessione = require('core/Connect');	var field = [];	field[0]=new Array(":d1codazie","N",d1codazie);    field[1]=new Array(":d1coduten","S",d1coduten);    field[2]=new Array(":d1genpass","S",d1genpass);    field[3]=new Array(":d1gentipo","S",d1gentipo);    field[4]=new Array(":d1codmatr","N",d1codmatr);    field[5]=new Array(":d1codvalu","S",d1codvalu);    field[6]=new Array(":d1codmenu","S",d1codmenu);    sqlfactory.updateDB(					     sqlfactory.readSqlText("d1anaguten.createUser"),					     connessione.connectParam(d1codazie),					     field                       );	}/* Creo la sessione utente */exports.userSessionCreate = function userSessionCreate (d1codazie, d1coduten, d1datsess) {		var sqlfactory = require('core/SqlFactory');	var connessione = require('core/Connect');	var field = [];	var resulset;	var prog;	//debugger;	field[0]=new Array(":d1codazie","N",d1codazie);    field[1]=new Array(":d1coduten","S",d1coduten);    field[2]=new Array(":d1datsess","D",d1datsess);        /* Cerco l'ultimo progressivo per la sessione */    resulset=sqlfactory.selectDB(                                    sqlfactory.readSqlText("d1userinfo.maxProg"),                                  connessione.connectParam(d1codazie),                                  field                                );	prog=resulset[0].d1genprse+1;	for(i=1;i<=5;i++)	{		/* Verifico il prossimo progressivo di sessione utente */		field=[];		field[0]=new Array(":d1codazie","N",d1codazie);        field[1]=new Array(":d1coduten","S",d1coduten);        field[2]=new Array(":d1datsess","D",d1datsess);	    field[3]=new Array(":d1genprse","N",prog++);				resulset=null;        resulset=sqlfactory.selectDB(                                        sqlfactory.readSqlText("d1userinfo.readSession"),                                      connessione.connectParam(d1codazie),                                      field                                    );						if(typeof(resulset)=="string")		{		   //Si è verificato un errore		   return 0;			}		else		{			//Scrivo la nuova sessione				if(resulset.length==0)			{						    sqlfactory.updateDB(								     sqlfactory.readSqlText("d1userinfo.createSession"),								     connessione.connectParam(d1codazie),								     field			                       );			        			    //Sessione creata: restituisco il progressivo della sessione          			    return prog-1;			}							}			}			//Si è verificato un errore. Non si è potuta creare la sessione	return 0;	}/* Verifico se la sessione è scaduta */exports.userSessionValidation = function userSessionValidation (d1codazie, d1coduten, d1datsess, d1genprse, time) {	var sqlfactory = require('core/SqlFactory');	var connessione = require('core/Connect');	var field = [];    var resulset;	debugger;		//Verifico se la sessione è scaduta    field[0]=new Array(":d1codazie","N",d1codazie);    field[1]=new Array(":d1coduten","S",d1coduten);    field[2]=new Array(":d1datsess","D",d1datsess);    field[3]=new Array(":d1genprse","N",d1genprse);    field[4]=new Array(":time","N",time);	        resulset=sqlfactory.selectDB(                                   sqlfactory.readSqlText("d1userinfo.sessionValidation"),                                 connessione.connectParam(d1codazie),                                 field                                );		        if(typeof(resulset)=="string")	{	   //Si è verificato un errore	   return true;		}	else	{		if(resulset.length==0)		{		   //Sessione scaduta			   return true;		}		else		{						if(resulset[0].sessend==1)			 return true; //Sessione scaduta			else			{				//Aggiorno la data della sessione				field=[];							    field[0]=new Array(":d1codazie","N",d1codazie);			    field[1]=new Array(":d1coduten","S",d1coduten);			    field[2]=new Array(":d1datsess","D",d1datsess);			    field[3]=new Array(":d1genprse","N",d1genprse);			    			    sqlfactory.updateDB(								     sqlfactory.readSqlText("d1userinfo.updateSession"),								     connessione.connectParam(d1codazie),								     field			                       );			    			                    return false; //Sessione valida							}				}			}    		}