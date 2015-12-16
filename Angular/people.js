var app = angular.module('peopleApp', []);

app.controller('peopleController',function($scope){
$scope.people = [
	{
		firstname: 'Srini',
		lastname: 'Kusunam',
		dob: '07/07/1950',
		hourlyRate: '30'
	}, 
	{
		firstname: "Rahul",
		lastname: "Kulkarni",
		dob: "12/04/1962", 
		hourlyRate: "50"
	}, 
	{
		firstname: "Charan",
		lastname: "Eleti",
		dob: "01/18/1975",
		hourlyRate: "100"
	}
];
});