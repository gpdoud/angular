/*
	This is the definition of the angular service
*/

angular.module("StuMod").service("StuSvc", StuSvc);
StuSvc.$inject = ['$http'];
function StuSvc($http) {
	var self = this;
	var students = [];
	$http.get("http://localhost:60863/api/student")
		.then(function(resp) { // success
			resp.data.forEach(function(student) {
				students.push({
					Name: student.Name,
					Sat: student.Sat,
					Gpa: student.Gpa
				})
			})
		},function(err) { // failure

		});

	return {
		about: "About Angular Service",
		all: students
	};
};