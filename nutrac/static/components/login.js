"use strict";
"format cjs";
var ajax = require("can-ajax");
var LoginViewModel = require("./login-view-model");
var Component = require("can-component");

//import template from "./nav.stache";
var loginTemplate = require("./login.stache");

var helpers = {

};

Component.extend({
    tag: "login-form",
    view: loginTemplate,
    ViewModel: LoginViewModel,
    events: {
        "#signinButton click": function (button, event) {
            ajax({
                url: "/login",
                type: "POST",
                data: this.viewModel.getFormData(),
                dataType: "json"
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error)
            });
        }
    },
    helpers: helpers
});
