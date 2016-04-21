define(["angular", "moduleService"], function (ng, moduleService) {

    'user strict';

    return moduleService.service('resumeService', ['$http', '$q', '$log', 'APP_CONST', 'AuthenticationService',

    function ($http, $q, $log, APP_CONST, AuthenticationService) {

        console.log("resumeService loaded");

        if (!AuthenticationService.isAuthenticated()) return;

        return {

            getDetailsOnly: getDetailsOnly,
            saveIntroduction: saveIntroduction,
            saveEmail: saveEmail
        }

        function saveEmail(email)
        {
            var deferred = $q.defer();
            $http.post(APP_CONST.url.updateEmail, { "Data": email })
                 .success(function () {
                     deferred.resolve();
                 }).error(function () {
                     $log.error('error posting data');
                 });

            return deferred.promise;
        }

        function getDetailsOnly() {

            var deferred = $q.defer();

            $http.get(APP_CONST.url.resumeDetails)
                 .success(function (data) {
                     if (data) { deferred.resolve(data); }
                }).error(function (data) {
                    deferred.reject(data);
                    $log.error('error retrieving resume details');
                });

            return deferred.promise;

        }

        function saveIntroduction(introduction) {
                    
            var deferred = $q.defer();
            $http.post(APP_CONST.url.updateResumeIntroduction, { "Data": introduction })
                 .success(function () {
                     deferred.resolve();
                 }).error(function () {
                     $log.error('error posting data');
                 });

            return deferred.promise;

        }

    }])


})