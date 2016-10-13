(function() {
    "use strict";

    angular
        .module("regex-escape", [])
        .factory("regexEscapeService", regexEscapeService);
    
    function regexEscapeService() {
        var escapeRegex = function(string) {
            if(string) {
                return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            }
        };
        
        return {
            escapeRegex: escapeRegex
        };
    }
})();
