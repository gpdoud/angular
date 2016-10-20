/*
	This is the definition of the angular controller. It is defined for an 
	existing angular module. 

	The StuCtrl without quotes is just a symbol (could be anything).

	The $inject is for any dependency injection.

	The function defines the body of the controller.

	VAR SELF = THIS is so there is no problem if 'this' is redefined.
*/
angular.module("StuMod").controller("StuCtrl", StuCtrl);
StuCtrl.$inject = ['$http', 'StuSvc'];
function StuCtrl($http, StuSvc){
	var self = this;

	self.about = "About Student using AngularJS";
	self.about += " - " + StuSvc.about;

	self.students = StuSvc.all;

	// $http.get("http://localhost:60863/api/student")
	// 	.then(function(resp) {
	// 		// console.log("Response received...", resp);
	// 		self.students = resp.data;
	// 	},function(err) {
	// 		console.log("Error!");
	// 	});
	
};
