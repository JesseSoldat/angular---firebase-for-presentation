import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import LayoutCtrl from './ctrl/layout.ctrl';
import DashCtrl from './ctrl/dash.ctrl';
import LoginCtrl from './ctrl/login.ctrl';

import LoginService from './services/login.service';
import DashService from './services/dash.service';

import dashUpload from './directives/dash-upload.directive';
angular
	.module('app.core', ['ui.router'])
	
	.config(config)

	.controller('LayoutCtrl', LayoutCtrl)
	.controller('DashCtrl', DashCtrl)
	.controller('LoginCtrl', LoginCtrl)

	.service('LoginService', LoginService)
	.service('DashService', DashService)

	.directive('dashUpload', dashUpload)
	;