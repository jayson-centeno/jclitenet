define(["angular", "moduleDirective", 'resumeService'], function (ng, moduleDirective, resumeService) {

    'use strict'

    return moduleDirective.directive('emailEditor', function (resumeService) {

        return {

            restrict: 'A',
            link: function (scope, element, attributes) {

                console.log('emailEditor link loaded');

                resumeService
                     .getDetailsOnly()
                     .then(function (data) {
                         scope.data = data;
                     })

                scope.save = Save;

                function Save() {

                    resumeService
                        .saveEmail(scope.data.Email)
                        .then(function () {

                            $("[editor-setup=" +
                                attributes.$attr.emailEditor + "]")
                                    .text(scope.data.Email);

                            $('#mainModal').modal('hide');

                        })
                }

            },
            templateUrl: '/assets/views/partial/email-editor.html',
        }

    });

})