(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationResponsiveMenu')
		.component('nFoundationResponsiveMenu', {
			bindings: {
				responsiveMenu: '<',
				hideFor: '<'
			},
			controller: nFoundationResponsiveMenuController
		});

	// The plugin matches the plugin classes with these plugin instances.
	var MenuPlugins = {
		dropdown: {
			cssClass: 'dropdown',
			plugin: Foundation._plugins['dropdown-menu'] || null
		},
		drilldown: {
			cssClass: 'drilldown',
			plugin: Foundation._plugins['drilldown'] || null
		},
		accordion: {
			cssClass: 'accordion-menu',
			plugin: Foundation._plugins['accordion-menu'] || null
		}
	};

	/* @ngInject */
	function nFoundationResponsiveMenuController($element, $window) {
		/*jshint validthis: true */
		var vm = this;

		var $container = $element.children().first('.menu');
		var containerRef;

		if(!$container || $container.length < 1) {
			throw new $exceptionHandler('missing element', 'You must nest a .menu item inside this component');
		}
		if(!vm.responsiveMenu) {
			throw new $exceptionHandler('missing attribute', 'You must defined the different menus.');
		}

		vm.$onInit = function() {

			// A little manual attribute binding to inline with other nFoundation* components
			// (config happens on the component, not any children)
			// $container.data('responsive-menu', vm.responsiveMenu);
			$container.data('responsive-menu', vm.responsiveMenu);

		};

		vm.$postLink = function() {
			var opts = {
				hideForm: vm.hideFor || 'medium'
			};

			// Set up Foundation Media Query listening
			Foundation.MediaQuery._init();
			containerRef = new Foundation.ResponsiveMenu($container, opts);
		};

		vm.$onDestroy = function () {
			$($window).off('.zf.ResponsiveMenu');
		};

	}

})();
