package com.cts.stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import com.cts.pages.CreateAccountPage;
import com.cts.pages.HomePage;
import com.cts.pages.SignOutPage;
import com.cts.pages.SigninPage;
import com.cts.utils.ExcelUtils;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class logaStepDefinition {
	public WebDriver driver;
	
	@Before
	public void beforeScenario() {
		System.setProperty("webdriver.chrome.driver","src/test/resources/driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}
	
	@After
	public void afterScenario() {
		driver.quit();
	}

	@Given("User have a browser with logaAutomationpage")
	public void user_have_a_browser_with_logaAutomationpage() {
		
		driver.get("http://automationpractice.com/index.php");

	}
	// Create the account with valid
	@When("click on signin button and User have to get the account details from ExcelSheet {string} and sheetname {string} and User should click on Register Button")
	public void click_on_signin_button_and_User_have_to_get_the_account_details_from_ExcelSheet_and_sheetname_and_User_should_click_on_Register_Button(String fileDetails, String sheetName) throws IOException {
		String str[][] = ExcelUtils.getSheetIntoStringArray(fileDetails, sheetName);
		HomePage home=new HomePage(driver);
		home.clickOnSignIn();
		SigninPage signIn=new SigninPage(driver);
		signIn.enterEmail(str[0][0]);
		signIn.clickOnCreateAccount();
		CreateAccountPage createacc=new CreateAccountPage(driver);
		createacc.fillRegForm(str[0][1], str[0][2],str[0][3],str[0][4],str[0][5],str[0][6],str[0][7],str[0][8]);
		createacc.clickOnCheckBox();
		createacc.clickOnRegButton();
	}
	@Then("user should access the portal with title as My account and click on SignOut")
	public void user_should_access_the_portal_with_title_as_My_account_and_click_on_SignOut() {
		SignOutPage signOut=new SignOutPage(driver);
	  signOut.clickOnSignOut();
	}
	
	//Create account with invalid details
@When("click on signin button and User give emailid as {string}")
public void click_on_signin_button_and_User_give_emailid_as(String email) {
	HomePage home=new HomePage(driver);
	home.clickOnSignIn();
	SigninPage signIn=new SigninPage(driver);
	signIn.enterEmail(email);
	signIn.clickOnCreateAccount();
}
@Then("the error message should be asserted")
public void the_error_message_should_be_asserted() throws InterruptedException {
	CreateAccountPage createacc=new CreateAccountPage(driver);
	Thread.sleep(5000);
	String actualText=createacc.accErrorMsg();
	String expecMsg="An account using this email address has already been registered. Please enter a valid password or request a new one.";
	System.out.println(actualText);
	Assert.assertEquals(expecMsg, actualText);
}

// Login with multiple details
@When("click on signin button and user should click on login button and enter username as {string} and enter password as {string}")
public void click_on_signin_button_and_user_should_click_on_login_button_and_enter_username_as_and_enter_password_as(String userId, String password) {
	HomePage home=new HomePage(driver);
	home.clickOnSignIn();
	SigninPage signIn=new SigninPage(driver);
	signIn.enterValidEmailAddresss(userId);
	signIn.enterValidPassword(password);
	signIn.clickOnLogin();
}

@Then("i should access to the portal with title as My account and click on SignOut")
public void i_should_access_to_the_portal_with_title_as_My_account_and_click_on_SignOut() {
   SignOutPage signOut=new SignOutPage(driver);
   signOut.clickOnSignOut();
  
}

//Login with Invalid details
@When("click on signin button and user should click login button and enter username as {string} and enter password as {string} and click on signin button")
public void click_on_signin_button_and_user_should_click_login_button_and_enter_username_as_and_enter_password_as_and_click_on_signin_button(String emailId, String password) {
	HomePage home=new HomePage(driver);
	home.clickOnSignIn();
	SigninPage signIn=new SigninPage(driver);
	signIn.enterValidEmailAddresss(emailId);
	signIn.enterValidPassword(password);
	signIn.clickOnLogin();
}
@Then("error message should print in the console")
public void error_message_should_print_in_the_console() {
	SigninPage signIn=new SigninPage(driver);
	String expectedMsg="Authentication failed.";
	String actualMsg=signIn.getErrorText();
	Assert.assertEquals(expectedMsg, actualMsg);
	System.out.println(actualMsg);
	
}

}