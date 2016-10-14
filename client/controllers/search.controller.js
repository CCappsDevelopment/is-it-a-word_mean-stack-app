(function() {
    "use strict";
    
    angular
        .module("search", [])
        .controller("SearchController", SearchController);
    
    SearchController.$inject = ["$scope", "$http", "regexEscapeService"];
    
    function SearchController($scope, $http, regexEscapeService) {
        var vm = this;
        vm.wordMatch = false;
        
        vm.searchFormString = "";

        vm.search = function() {
            var req = {
                payload: regexEscapeService.escapeRegex(vm.searchFormString)
            };

            $http.post("/search", req)
                .then(function(response) {
                    vm.wordMatch = false;
                    vm.words = response.data;
                    
                    if(vm.words[0] == vm.searchFormString) {
                        vm.wordMatch = true;
                    }
                },
                function(response) {
                    console.log(response.data);
                });
        };
    }
})();
