'use strict';

angular.module('portfolio.controllers').
    controller('LandingController', ['$scope', function ($scope) {
        $scope.something = 'sofisodifjsdf';
        
        var code = " var replacementRegexes = [];\n\
    replacements.forEach(function (element, index, array) {\n\
        var regexString = element[2] ? '\\\\b' : '';\n\
        for (var i = 0; i < element[0].length; i++) {\n\
            regexString += element[0].substr(i, 1);\n\
            if (i < element[0].length - 1) {\n\
                regexString += '[^a-zA-Z]*';\n\
            } else if (element[2]) {\n\
                regexString += '\\\\b';\n\
            }\n\
        }\n\
        replacementRegexes.push([new RegExp(regexString, 'gi'), element[1]]);\n\
    });\n\
\n\
    return {\n\
        clean: function(text) {\n\
            if (angular.isDefined(text) && angular.isString(text)) {\n\
                replacementRegexes.forEach(function (element, index, array) {\n\
                    text = text.replace(element[0], element[1]);\n\
                });\n\
            }\n\
            return text;\n\
        }\n\
    };";


        var brush = new SyntaxHighlighter.brushes.JScript();
        brush.init({
            toolbar: false,
            highlight: [4, 8, 9]
        });
        $scope.html = brush.getHtml(code);
    }]);