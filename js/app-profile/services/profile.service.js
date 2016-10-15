import firebase from 'firebase';

let ProfileService = function($firebaseArray, $firebaseObject, $state){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;

	function getProfile(user){
		let ref = firebase.database().ref('users/'+user.uid+'/bio');
		let array = $firebaseArray(ref);

		return array;
	}

	function addProfile(data){
		let user = firebase.auth().currentUser;
		
		let ref = firebase.database().ref('users/'+user.uid+'/bio');
		let array = $firebaseArray(ref);

		array.$add({
			email: user.email,
			id: user.uid,
			fName: data.fName,
			lName: data.lName,
			address: data.address,
			city: data.city,
			state: data.state,
			zip: data.zip,
			country: data.country
		});
	}

	function editProfile(userData){
		let user = firebase.auth().currentUser;

		let ref = firebase.database().ref('users/'+user.uid+'/bio');
		let array = $firebaseArray(ref);

		array.$loaded().then(function(){
			let item = array.$getRecord(userData.$id);
			
		})
	}

}
ProfileService.$inject = ['$firebaseArray', '$firebaseObject', '$state'];
export default ProfileService;