app.directive('validatePhone', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(phone) {
                if (/^\+[0-9]{11}$/.test(phone)) {
                    ctrl.$setValidity('phone', true);
                    return phone;
                } else {
                    ctrl.$setValidity('phone', false);
                    return undefined;
                }
            });
        }
    };
});
