let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'LayoutCtrl',
			templateUrl: 'templates/app-core/layout.html'
		})
		//app-core
		.state('root.dash', {
			url: '/',
			controller: 'DashCtrl',
			templateUrl: 'templates/app-core/dash.html'
		})
		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/login.html'
		})
		.state('register', {
			url: '/register',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/register.html'
		})

		//app-profile
		.state('root.profile', {
			url: '/profile',
			controller: 'ProfileCtrl',
			templateUrl: 'templates/app-profile/profile.html'
		})
		.state('root.editProfile', {
			url: '/editprofile',
			controller: 'EditProfileCtrl',
			templateUrl: 'templates/app-profile/edit-profile.html'
		})
		;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;