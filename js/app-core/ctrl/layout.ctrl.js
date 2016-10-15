import firebase from 'firebase';

let LayoutCtrl = function($state, $scope){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){

		} else {
			$state.go('login');
		}
	});

	$scope.logout = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}, function(err){
			console.log(err);
		});
	}




}
LayoutCtrl.$inject = ['$state', '$scope'];
export default LayoutCtrl;