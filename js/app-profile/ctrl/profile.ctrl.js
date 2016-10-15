let ProfileCtrl = function($scope, $state){
	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$scope', '$state'];

export default ProfileCtrl;