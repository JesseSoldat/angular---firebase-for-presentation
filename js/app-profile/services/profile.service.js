import firebase from 'firebase';

let ProfileService = function($firebaseArray, $firebaseObject, $state){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;
	this.getAvatar = getAvatar;
	this.fileUpload =fileUpload;

	function getAvatar(user){
		let ref = firebase.database().ref('/users/'+user.uid+'/avatar');
		let array = $firebaseArray(ref);
		return array;
	}

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

	function editProfile(data){
		let user = firebase.auth().currentUser;

		let ref = firebase.database().ref('users/'+user.uid+'/bio');
		let array = $firebaseArray(ref);

		array.$loaded().then(function(){
			let item = array.$getRecord(data.$id);
			item.fName = data.fName;
			item.lName = data.lName;
			item.address = data.address;
			item.city = data.city;
			item.state = data.state;
			item.zip = data.zip;
			item.country = data.country;
		array.$save(item).then(function(){
			$state.go('root.profile');
		});

		});
	}

	function fileUpload(file, type, uploader){
		let user = firebase.auth().currentUser;
		let storageRef = firebase.storage().ref();
		let fileName = file.name;

		if(type === "avatar"){
			let ext = fileName.substring(fileName.lastIndexOf('.'+1)).toLowerCase();
			let avatarRef = storageRef.child(user.uid+'/avatar/avatar.'+ext);
			let uploadTask = avatarRef.put(file);
			uploadTask.on('state_changed', function progress(snapshot){
				let percent = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
				uploader.value = percent;
			}, function error(err){
				console.log(err);
			}, function complete(){
				let url = avatarRef.getDownloadURL().then(function(url){

					let ref= firebase.database().ref('users/'+user.uid+'/avatar');
					let obj = $firebaseObject(ref);
					obj.url = url;
					obj.$save().then(function(ref){
						// console.log(ref.key);
						// console.log(ref.key === obj.$id);
						$state.go('root.profile');
					}, function(err){
						
					})
				})
			})
		}
	}

}
ProfileService.$inject = ['$firebaseArray', '$firebaseObject', '$state'];
export default ProfileService;