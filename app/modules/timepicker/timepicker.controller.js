(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('timepicker')
		.controller('TimepickerController', Timepicker);

	/* @ngInject */
	function Timepicker($log) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.mytime = new Date();
		
		vm.hstep = 1;
		vm.mstep = 15;
		
		vm.options = {
			hstep: [1, 2, 3],
			mstep: [1, 5, 10, 15, 25, 30]
		};
		
		vm.ismeridian = true;
		vm.toggleMode = function() {
			vm.ismeridian = ! vm.ismeridian;
		};
		
		vm.update = function() {
			var d = new Date();
			d.setHours( 14 );
			d.setMinutes( 0 );
			vm.mytime = d;
		};
		
		vm.changed = function () {
			$log.log('Time changed to: ' + vm.mytime);
		};
		
		vm.clear = function() {
			vm.mytime = null;
		};
	}

})();
