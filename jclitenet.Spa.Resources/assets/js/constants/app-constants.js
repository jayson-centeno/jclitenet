'use strict';

define(['angular' , 'app'], function (ng, app) {

    app.constant('APP_CONST', {
        url: {
            tutorials: '/app/getalltutorials',
            authentication: '/login',
            resumeDetails: '/resume/get/details',
            updateResumeIntroduction: '/resume/update/intro',
            updateEmail: '/resume/update/email'
        },
        state: {
            login : "login",
            home : "index"
        },
        auth : {
            name : 'default'
        },
        profileEditor: {
            introduction: "introduction",
            email: "email"
        },
        message: {
            norecord : "No Records"
        }
    });

})