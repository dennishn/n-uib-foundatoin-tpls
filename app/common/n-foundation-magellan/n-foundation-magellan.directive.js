(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationMagellan')
	  	.directive('nFoundationMagellan', NFoundationMagellan);

	var MagellanDefaults = {
		animationDuration: 500,
		animationEasing: 'linear',
		threshold: 50,
		activeClass: 'active',
		deepLinking: false,
		barOffset: 0
	};

	/* @ngInject */
	function NFoundationMagellan() {
		var directive = {
			link: link,
			restrict: 'A',
			scope: {
				animationDuration: '<',
				animationEasing: '<',
				threshold: '<',
				activeClass: '<',
				deepLinking: '<',
				barOffset: '<'
			}
		};

		return directive;

		function link(scope, element, attrs) {
			var vm = scope;

			var menuRef;

			_init();

			function _init() {
				
				var opts = {};

				for(var key in vm) {
					if(vm.hasOwnProperty(key) && MagellanDefaults.hasOwnProperty(key)) {
						opts[key] = vm[key];
					}
				}

				menuRef = new Foundation.Magellan(element, opts);
			}

			scope.$on('$destroy', function() {
				menuRef.$element.off('.zf.trigger .zf.magellan');
			});

		}
	}
})();
