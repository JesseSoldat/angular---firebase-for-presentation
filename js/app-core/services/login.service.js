import firebase from 'firebase';

let LoginService = function(){
	this.login = login;
	this.register = register;

	let fb = firebase.auth();

	function login(user){
		fb.signInWithEmailAndPassword(user.logEmail, user.logPass)
			.catch(function(err){
				console.log(err)
			});
	}

	function register(user){
		fb.createUserWithEmailAndPassword(user.regEmail, user.regPass)
			.catch(function(err){
				console.log(err);
			});
	}
};
LoginService.$inject = [];

export default LoginService;