(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationAccordionMenu')
		.component('nFoundationAccordionMenu', {
			bindings: {
				slideSpeed: '<',
				multiOpen: '<'
			},
			controller: nFoundationAccordionMenuController
		});

	var DrillMenuDefaults = {
		slideSpeed: 250,
		multiOpen: true
	};


	/* @ngInject */
	function nFoundationAccordionMenuController($element, $exceptionHandler, $document) {
		/*jshint validthis: true */
		var vm = this;

		var $menu = $element.children().first('.menu');

		var menuRef;

		if(!$menu || $menu.length < 1) {
			throw new $exceptionHandler('missing element', 'You must nest a .menu item inside this component');
		}

		vm.$onInit = function() {

			var opts = {};

			for(var key in vm) {
				if(vm.hasOwnProperty(key) && DrillMenuDefaults.hasOwnProperty(key)) {
					opts[key] = vm[key];
				}
			}

			menuRef = new Foundation.AccordionMenu($menu, opts);
		};

		vm.$onDestroy = function() {
			menuRef.$element.find('a').off('click.zf.accordionMenu');
			Foundation.Nest.Burn(menuRef.$element, 'accordion');
		};
	}

})();
