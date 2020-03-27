Feature: LogaAutomation 
	I have to order in logaAutomation
As a customer
Background: 
	Given User have a browser with logaAutomationpage 
	
	
Scenario: Create an Account  with valid credentials 
	When click on signin button and User have to get the account details from ExcelSheet "src/test/resources/resource/accountdetails.xlsx" and sheetname "CreateAccount" and User should click on Register Button 
	Then user should access the portal with title as My account and click on SignOut
	
	
	Scenario: Create an Account  with Invalid credentials 
	When click on signin button and User give emailid as 'sreenu@gmail.com'
	Then the error message should be asserted
	
	Scenario Outline: Login with multiple username and password
	When click on signin button and user should click on login button and enter username as "<userId>" and enter password as "<password>"
	Then i should access to the portal with title as My account and click on SignOut
	Examples:
	|userId|password|
	|sreenu@gmail.com|Vaishu123|
	|yandravvparvathi@gmail.com|Parvathi@1|
	|chetuna@gmail.com|Vaishu123|
	|srividya@gmail.com|Vaishu123|
	
	
	
	Scenario: Login with Invalid Username and Password
	When click on signin button and user should click login button and enter username as 'v@gmail.com' and enter password as 'shu123' and click on signin button
	Then error message should print in the console