angular.module('dotdotdot-angular', [])
	.directive('dotdotdot', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                scope.$watch(function() {
                    var option = {};
                        option.watch = true;
                    if( attr.dotdotdotUrl && attr.dotdotdotId ) {
                        attr.dotdotdotEllipsis = (attr.dotdotdotEllipsis)?attr.dotdotdotEllipsis:'(...)';
                        element.append(' <a class="readMore" href="' + attr.dotdotdotUrl + attr.dotdotdotId+ '"> '+attr.dotdotdotEllipsis+' </a> ');
                        option.after = '.readMore';
                        option.ellipsis = '';
                    }
                    else
                        option.ellipsis	= (attr.dotdotdotEllipsis)? " "+attr.dotdotdotEllipsis : "";
                    element.dotdotdot(option);
                });
            }
        }
    });
