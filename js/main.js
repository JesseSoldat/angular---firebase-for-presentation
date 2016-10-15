import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';

import './app-core/index';

import fireConfig from './fireConfig';

firebase.initializeApp(fireConfig);



angular
	.module('app', ['app.core','ui.router', 'firebase']);


