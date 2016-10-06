// Controller for wordlist search

(function(){
    "use strict";
    
    angular
        .module("search", [])
        .controller("SearchController", SearchController);
    
    // Escapes any special characters in string passed in by inputForm
    function EscapeRegEx(string){
        if(string){
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
    }
    
    // Defines SearchController
    function SearchController($scope, $http) {
        
        var vm = this;
        var regex;
        
        $scope.search = "";
       

        // Requests the wordlist array from the server
        vm.getWords = function() {
            $http.get("/search")
                .then(function(response) {
                    vm.words = response.data;
                },
                function(response) {
                    console.log(response.data);
                });
        };

        
        // Watches for input in the search bar
        $scope.$watch('search', function(value) {
            regex = new RegExp('\\b' + EscapeRegEx(value), 'i');
            console.log(regex);
        });
        
        // Filters out array while searching
        vm.filterBySearch = function(word) {
            if(!$scope.search) {
                return false;
            }
            return regex.test(word);
        };

        // Get wordlist array from server
        vm.getWords(); 
        
       
    }

})();