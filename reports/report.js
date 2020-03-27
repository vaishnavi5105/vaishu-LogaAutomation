$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/logaapp.feature");
formatter.feature({
  "name": "LogaAutomation",
  "description": "\tI have to order in logaAutomation\nAs a customer",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an Account  with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on signin button and User have to get the account details from ExcelSheet \"src/test/resources/resource/accountdetails.xlsx\" and sheetname \"CreateAccount\" and User should click on Register Button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_User_have_to_get_the_account_details_from_ExcelSheet_and_sheetname_and_User_should_click_on_Register_Button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should access the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_should_access_the_portal_with_title_as_My_account_and_click_on_SignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an Account  with Invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on signin button and User give emailid as \u0027sreenu@gmail.com\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_User_give_emailid_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message should be asserted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.the_error_message_should_be_asserted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with multiple username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on signin button and user should click on login button and enter username as \"\u003cuserId\u003e\" and enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should access to the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "sreenu@gmail.com",
        "Vaishu123"
      ]
    },
    {
      "cells": [
        "yandravvparvathi@gmail.com",
        "Parvathi@1"
      ]
    },
    {
      "cells": [
        "chetuna@gmail.com",
        "Vaishu123"
      ]
    },
    {
      "cells": [
        "srividya@gmail.com",
        "Vaishu123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on signin button and user should click on login button and enter username as \"sreenu@gmail.com\" and enter password as \"Vaishu123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_user_should_click_on_login_button_and_enter_username_as_and_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should access to the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.i_should_access_to_the_portal_with_title_as_My_account_and_click_on_SignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on signin button and user should click on login button and enter username as \"yandravvparvathi@gmail.com\" and enter password as \"Parvathi@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_user_should_click_on_login_button_and_enter_username_as_and_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should access to the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.i_should_access_to_the_portal_with_title_as_My_account_and_click_on_SignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on signin button and user should click on login button and enter username as \"chetuna@gmail.com\" and enter password as \"Vaishu123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_user_should_click_on_login_button_and_enter_username_as_and_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should access to the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.i_should_access_to_the_portal_with_title_as_My_account_and_click_on_SignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on signin button and user should click on login button and enter username as \"srividya@gmail.com\" and enter password as \"Vaishu123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_user_should_click_on_login_button_and_enter_username_as_and_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should access to the portal with title as My account and click on SignOut",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.i_should_access_to_the_portal_with_title_as_My_account_and_click_on_SignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have a browser with logaAutomationpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.user_have_a_browser_with_logaAutomationpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Username and Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on signin button and user should click login button and enter username as \u0027v@gmail.com\u0027 and enter password as \u0027shu123\u0027 and click on signin button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.click_on_signin_button_and_user_should_click_login_button_and_enter_username_as_and_enter_password_as_and_click_on_signin_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should print in the console",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.logaStepDefinition.error_message_should_print_in_the_console()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});