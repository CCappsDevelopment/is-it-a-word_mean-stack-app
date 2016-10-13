(function() {
    "use strict";

    angular
        .module("input-form", [])
        .directive("inputForm", inputForm);
    
    function inputForm() {
        return {
            restrict: "A",
            templateUrl: "/views/_input-form.html",
            controller: "SearchController",
            controllerAs: "searchCtrl"
        };
    }
})();
