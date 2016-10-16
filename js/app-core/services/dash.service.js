import firebase from 'firebase';

let DashService = function($state, $firebaseArray, $firebaseObject){

	this.getBackground = getBackground;
	this.fileUpload = fileUpload;

	function getBackground(user){
		let ref = firebase.database().ref('users/'+user.uid+'/dashImg');
		
		let array = $firebaseArray(ref);

		return array;
	}

	function fileUpload(file, uploader){
		//Save the file to Storage
		let user = firebase.auth().currentUser;

		let fileName = file.name;

		let ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();

		let dashRef = firebase.storage().ref(user.uid+'/dash/dashImg.'+ext);

		let uploadTask = dashRef.put(file);

		uploadTask.on('state_changed', function(snapshot){

			let percent = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
			uploader.value = percent;

		}, function error(err){

		}, function complete(){

			//Save the URL to the Database
			let url = dashRef.getDownloadURL().then(function(url){
				//Location to store in the database
				let databaseRef = firebase.database().ref('users/'+user.uid+'/dashImg');

				let obj = $firebaseObject(databaseRef);

				obj.url = url;

				obj.$save().then(function(ref){

				}, function(err){
					console.log(err);
				});

				$state.go('root.dash');


			}) //getDownloadURL()
				.catch(function(err){
					console.log(err);
				})
			});
		
	} //fileUpload()
};

DashService.$inject = ['$state','$firebaseArray','$firebaseObject'];

export default DashService;