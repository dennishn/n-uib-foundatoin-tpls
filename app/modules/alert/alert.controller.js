(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('alert')
		.controller('AlertController', Alert);

	/* @ngInject */
	function Alert() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.alerts = [
			{
				msg: 'info',
				type: 'info'
			},
			{
				msg: 'success',
				type: 'success'
			},
			{
				msg: 'warning',
				type: 'warning'
			},
			{
				msg: 'alert',
				type: 'alert'
			},
			{
				msg: 'primary',
				type: 'primary'
			},
			{
				msg: 'secondary',
				type: 'secondary'
			}
		];
		
		vm.addAlert = function() {
			vm.alerts.push({msg: 'Another alert!'});
		};
		
		vm.closeAlert = function(index) {
			vm.alerts.splice(index, 1);
		};
	}

})();
