(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('progressbar')
		.controller('ProgressbarController', Progressbar);

	/* @ngInject */
	function Progressbar() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.max = 200;
		
		vm.random = function() {
			var value = Math.floor(Math.random() * 100 + 1);
			var type;
			
			if (value < 25) {
				type = 'success';
			} else if (value < 50) {
				type = 'secondary';
			} else if (value < 75) {
				type = 'warning';
			} else {
				type = 'alert';
			}
			
			vm.showWarning = type === 'alert' || type === 'warning';
			
			vm.dynamic = value;
			vm.type = type;
		};
		
		vm.random();
		
		vm.randomStacked = function() {
			vm.stacked = [];
			var types = ['success', 'secondary', 'warning', 'alert'];
			
			for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
				var index = Math.floor(Math.random() * 4);
				vm.stacked.push({
					value: Math.floor(Math.random() * 30 + 1),
					type: types[index]
				});
			}
		};
		
		vm.randomStacked();
	}

})();
