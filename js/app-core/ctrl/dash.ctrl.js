import firebase from 'firebase';

let DashCtrl = function($scope, $state, $firebaseArray, DashService){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			let getBackground = DashService.getBackground(user);

			getBackground.$loaded().then(function(){
				if(getBackground.length > 0){

					let url = getBackground[0].$value;
					let img = document.querySelector('#dashBackground');
					img.style.backgroundImage = 'url('+url+')';

				} else {

				}
			})

		} else {
			$state.go('login');
		}
	});

	$scope.changeDash = function(){
		$state.go('root.editDash');
	}

}

DashCtrl.$inject = ['$scope', '$state', '$firebaseArray','DashService'];

export default DashCtrl;