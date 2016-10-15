import firebase from 'firebase';

let LoginCtrl = function($scope, $state, LoginService){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$state.go('root.dash');
		}
	});

	$scope.login = function(user){
		LoginService.login(user);
	}

	$scope.register = function(user){
		LoginService.register(user);
	}



}
LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;