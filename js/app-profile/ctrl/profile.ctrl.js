import firebase from 'firebase';

let ProfileCtrl = function($scope, $state, ProfileService){

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			$scope.data = currentUser;

			let avatarData = ProfileService.getAvatar(user);

			avatarData.$loaded().then(function(){
				if(avatarData.length > 0){
					$scope.avatar = avatarData[0].$value;
					$scope.haveAvatar = true;
				} else {
					$scope.haveAvatar = false;
				}
			})

		}
	});


	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];

export default ProfileCtrl;