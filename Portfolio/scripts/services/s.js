
angular.module('portfolio.services')
    .factory('s', function () {
        var l = { 'dmw': 'Pneartvr Zryyba', 'xdu': 'Vbjn Fgngr', 'tdm': 'Trbetvn Grpu', 'emd': 'Havirefvgl bs Jnfuvatgba', 'txd': 'ZVG', 'mid': 'Orexryrl', 'dim': 'Fgnasbeq', 'idm': 'Havirefvgl bs Vyyvabvf' };
        var r = function (s) { return s.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); }); };
        return function (i) { var o = l[r(i)]; return o ? (', ' + r(o)) : ''; }
    });
