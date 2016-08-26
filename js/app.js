var app = angular.module("fides", []); 

app.controller('mainController', function ($scope) {

	// Init astronauts
	$scope.astronauts = [
	    {
	      first_name:'Barrack',
	      last_name: 'Obama',
	      birthday:  '14.12.1994',
	      superpower:'Presidency and football'
	    }, {
	      first_name:'Vladimir',
	      last_name: 'Putin',
	      birthday:  '12.10.1862',
	      superpower:'Combat power'
	    }, {
	      first_name:'Miloš',
	      last_name: 'Zeman',
	      birthday:  '19.11.1992',
	      superpower:'Very fast'
	    }
	];

	// Add Astronaut
	$scope.addAstronaut = function () {
        $scope.astronauts.push($scope.newAstronaut);
        $scope.newAstronaut = "";
    }

    // Delete Astronaut
    $scope.deleteAstronaut = function (position) {
        $scope.errortext = "";
        $scope.astronauts.splice(position, 1);
    }
	
});

