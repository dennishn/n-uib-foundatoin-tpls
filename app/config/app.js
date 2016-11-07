(function() {
	'use strict';

	/**
	 * @name gn-test
	 * @description
	 *
	 * Root Application Module
	 */
	angular
		.module('gn-test', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'APPLICATION_SETTINGS',
			'ui.router',
			'ui.bootstrap',
			'angular-loading-bar',
			'angulartics',
			'angulartics.google.analytics',
			'ngAnimate',
			'ngSanitize',
			'ngTouch',
			'config',
			'application',
			'index',
			'n.ui.foundation.tpls',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();
