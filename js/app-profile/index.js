import angular from 'angular';
import firebase from 'firebase';

import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';

angular
	.module('app.profile', [])
		.controller('ProfileCtrl', ProfileCtrl)
		.controller('EditProfileCtrl', EditProfileCtrl)

		;