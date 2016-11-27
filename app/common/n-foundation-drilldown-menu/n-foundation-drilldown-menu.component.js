(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationDrilldownMenu')
		.component('nFoundationDrilldownMenu', {
			bindings: {
				backButton: '<',
				wrapper: '<',
				parentLink: '<',
				closeOnClick: '<'
			},
			controller: nFoundationDrilldownMenuController
		});

	var DrillMenuDefaults = {
		backButton: '<li><a>Back</a></li>',
		wrapper: '<div class="is-drilldown"></div>',
		parentLink: false,
		closeOnClick: false
	};

	/* @ngInject */
	function nFoundationDrilldownMenuController($element, $exceptionHandler) {
		/*jshint validthis: true */
		var vm = this;

		var $menu = $element.children().first('.menu');

		var menuRef;

		if(!$menu || $menu.length < 1) {
			throw new $exceptionHandler('missing element', 'You must nest a .menu item inside this component');
		}

		// This Foundation Plugin mutates the dom, which apparently will cause Angular to throw up at us.
		// To circumvent this, we init the drilldown plugin in the $postLink lifecycle hook instead of the $onInit.
		// https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
		vm.$postLink = function() {

			var opts = {};

			for(var key in vm) {
				if(vm.hasOwnProperty(key) && DrillMenuDefaults.hasOwnProperty(key)) {
					opts[key] = vm[key];
				}
			}

			menuRef = new Foundation.Drilldown($menu, opts);
		};

		vm.$onDestroy = function() {
			menuRef.$element.off('.zf.drilldown', menuRef._bindHandler);

			menuRef.$submenuAnchors.each(function() {
				$(this).off('.zf.drilldown');
			});

			Foundation.Nest.Burn(menuRef.$element, 'drilldown');
		};
	}

})();
