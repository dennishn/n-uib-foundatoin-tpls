(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationDropdownMenu')
		.component('nFoundationDropdownMenu', {
			bindings: {
				disableHover: '<',
				autoclose: '<',
				hoverDelay: '<',
				clickOpen: '<',
				closingTime: '<',
				alignment: '<',
				closeOnClick: '<',
				closeOnClickInside: '<',
				verticalClass: '<',
				rightClass: '<',
				forceFollow: '<'
			},
			controller: nFoundationDropdownMenuController
		});

	var DropdownMenuDefaults = {
		disableHover: false,
		autoclose: true,
		hoverDelay: 50,
		clickOpen: false,
		closingTime: 500,
		alignment: 'left',
		closeOnClick: true,
		closeOnClickInside: true,
		verticalClass: 'vertical',
		rightClass: 'align-right',
		forceFollow: true
	};

	/* @ngInject */
	function nFoundationDropdownMenuController($element, $exceptionHandler, $document) {
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
				if(vm.hasOwnProperty(key) && DropdownMenuDefaults.hasOwnProperty(key)) {
					opts[key] = vm[key];
				}
			}

			menuRef = new Foundation.DropdownMenu($menu, opts);
		};

		vm.$onDestroy = function() {
			menuRef.$menuItems.off('.zf.dropdownmenu');
			$($document.body).off('.zf.dropdownmenu');
			Foundation.Nest.Burn(menuRef.$element, 'dropdown');
		}
	}

})();
