import angular from 'angular';
import firebase from 'firebase';

import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';

import ProfileService from './services/profile.service';


import fileUpload from './directives/file-upload.directive';

angular
	.module('app.profile', [])
		.controller('ProfileCtrl', ProfileCtrl)
		.controller('EditProfileCtrl', EditProfileCtrl)

		.service('ProfileService', ProfileService)
		.directive('fileUpload', fileUpload)
		;