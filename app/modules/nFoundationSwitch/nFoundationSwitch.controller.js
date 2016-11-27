(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationSwitchModule')
		.controller('NFoundationSwitchController', NFoundationSwitch);

	/* @ngInject */
	function NFoundationSwitch($log) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.switchModel = true;
		vm.switchNgValue = 'AWESOME';

		vm.onChange = function() {
			$log.info('ngChange Method: ', vm.switchModel);
		}
	}

})();
