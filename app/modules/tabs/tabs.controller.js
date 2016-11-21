(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('tabs')
		.controller('TabsController', Tabs);

	/* @ngInject */
	function Tabs($window) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.tabs = [
			{ title:'Dynamic Title 1', content:'Dynamic content 1' },
			{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
		];
		
		vm.alertMe = function() {
			setTimeout(function() {
				$window.alert('You\'ve selected the alert tab!');
			});
		};
		
		vm.model = {
			name: 'Tabs'
		};
	}

})();
