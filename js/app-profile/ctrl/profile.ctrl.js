import firebase from 'firebase';

let ProfileCtrl = function($scope, $state, ProfileService){

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			$scope.data = currentUser;
		}
	})

	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];

export default ProfileCtrl;