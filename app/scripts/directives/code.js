/// <reference path='../definitions/references.d.ts' />

//'use strict';

angular.module('portfolio.directives').
    directive('code', [function () {
        return {
            scope: {
                highlightedLines: "=",
                brush: '@',
                gutter: '=',
                autoLinks: '=',
                firstLine: '=',
                smartTabs: '=',
                collapse: '=',
                tabSize: '=',
                toolbar: '=',
                className: '@',
                htmlScript: '='
            },
            link: function (scope, element, attrs) {
                if (['c-sharp', 'c#', 'csharp'].indexOf(scope.brush) !== -1) {
                    var brush = new SyntaxHighlighter.brushes.CSharp();
                } else if (['xml', 'xhtml', 'xslt', 'html', 'xhtml'].indexOf(scope.brush) !== -1) {
                    var brush = new SyntaxHighlighter.brushes.Xml();
                } else if (['css'].indexOf(scope.brush) !== -1) {
                    var brush = new SyntaxHighlighter.brushes.CSS();
                } else {
                    var brush = new SyntaxHighlighter.brushes.JScript();
                }

                brush.init({
                    'toolbar': false,
                    'highlight': scope.highlightedLines,
                    'gutter': scope.gutter === false ? false : true,
                    'auto-links': scope.autoLinks === false ? false : true,
                    'first-line': scope.firstLine || 1,
                    'smart-tabs': scope.smartTabs === false ? false : true,
                    'collapse': scope.collapse,
                    'tab-size': scope.tabSize || 4,
                    'toolbar': scope.toolbar,
                    'class-name': scope.className || '',
                    'html-script': scope.htmlScript
                });

                element.html($('<div>').addClass('code-container').html(brush.getHtml(element.html())));
            }
        };
    }]);
