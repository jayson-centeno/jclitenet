define(['angular', 'moduleController',
            'headerFixed',
            'editorSetup',
            'addressEditor',
            'introductionEditor',
            'emailEditor',
            'editorValue'], function (ng, moduleController) {

    'use strict';

    return moduleController.controller('HomeController', ['$scope', function ($scope) {

        console.log('HomeController');

    }]);

});