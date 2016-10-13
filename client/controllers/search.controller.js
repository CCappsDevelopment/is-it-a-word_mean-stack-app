(function() {
    "use strict";
    
    angular
        .module("search", [])
        .controller("SearchController", SearchController);
    
    SearchController.$inject = ["$scope", "$http", "regexEscapeService"];
    
    function SearchController($scope, $http, regexEscapeService) {
        var vm = this;
        
        vm.searchFormString = "";

        vm.search = function() {
            var req = {
                payload: regexEscapeService.escapeRegex(vm.searchFormString)
            };

            $http.post("/search", req)
                .then(function(response) {
                    vm.words = response.data;
                },
                function(response) {
                    console.log(response.data);
                });
        };
    }
})();
