angular.module('n.ui.foundation.tpls', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('uib/template/accordion/accordion-group.html',
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"accordion-item\" ng-class=\"{'is-active': isOpen}\" ng-keypress=\"toggleOpen($event)\">\n" +
    "        <a role=\"button\" class=\"accordion-title\" data-toggle=\"collapse\" aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle>\n" +
    "            <span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">\n" +
    "                {{heading}}\n" +
    "            </span>\n" +
    "        </a>\n" +
    "    <!--</h4>-->\n" +
    "    <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" uib-collapse=\"!isOpen\">\n" +
    "        <div class=\"accordion-content\" ng-transclude></div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/accordion/accordion.html',
    "<div role=\"tablist\" class=\"accordion\" ng-transclude></div>"
  );


  $templateCache.put('uib/template/alert/alert.html',
    "<button class=\"close-button\" aria-label=\"Dismiss alert\" type=\"button\" ng-show=\"closeable\" ng-click=\"close({$event: $event})\">\n" +
    "    <span aria-hidden=\"true\">&times;</span>\n" +
    "</button>\n" +
    "<div ng-transclude></div>"
  );


  $templateCache.put('uib/template/modal/window.html',
    "<div class=\"reveal {{size ? size : ''}}\" uib-modal-transclude>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/pager/pager.html',
    "<li class=\"pagination-previous\" ng-class=\"{'disabled':noPrevious()||ngDisabled}\">\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('previous')}} <span class=\"show-for-sr\">page</span>\n" +
    "    </a>\n" +
    "\n" +
    "</li>\n" +
    "\n" +
    "<li class=\"pagination-next\" ng-class=\"{disabled: noNext()||ngDisabled, next: align}\">\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('next')}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/pagination/pagination.html',
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\n" +
    "    <a ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('first')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('previous')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\">\n" +
    "    <a ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>\n" +
    "        {{page.text}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('next')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\n" +
    "    <a ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('last')}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/popover/popover-html.html',
    "<!--<div class=\"arrow\"></div>-->\n" +
    "\n" +
    "<div class=\"\">\n" +
    "    <h3 class=\"\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover-template.html',
    "<!--<div class=\"arrow\"></div>-->\n" +
    "\n" +
    "<div class=\"\">\n" +
    "    <h3 class=\"\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"\" uib-tooltip-template-transclude=\"contentExp()\" tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover.html',
    "<!--<div class=\"arrow\"></div>-->\n" +
    "\n" +
    "<div>\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div ng-bind=\"content\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/bar.html',
    "<div class=\"progress-meter\" role=\"progressbar\" ng-class=\"type\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\n" +
    "    <p class=\"progress-meter-text\" ng-transclude></p>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/progress.html',
    "<div class=\"progress\" ng-class=\"type\" ng-transclude aria-labelledby=\"{{::title}}\"></div>"
  );


  $templateCache.put('uib/template/progressbar/progressbar.html',
    "<div class=\"progress\" ng-class=\"type\">\n" +
    "    <div class=\"progress-meter\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\n" +
    "        <p class=\"progress-meter-text\" ng-transclude></p>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/tabs/tab.html',
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
    "    <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>\n" +
    "        {{heading}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/tabs/tabset.html',
    "<div>\n" +
    "    <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude>\n" +
    "    </ul>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <div class=\"tab-pane\" ng-repeat=\"tab in tabset.tabs\" ng-class=\"{active: tabset.active === tab.index}\" uib-tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
