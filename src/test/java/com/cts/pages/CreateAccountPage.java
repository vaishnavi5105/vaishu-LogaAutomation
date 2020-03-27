package com.cts.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class CreateAccountPage {

	private By clickOnRadioButtonLoc = By.id("id_gender2");
	private By enterFirstNameLoc = By.id("customer_firstname");
	private By enterLastNameLoc = By.id("customer_lastname");
	private By enterPasswordLoc = By.id("passwd");
	private By addressLoc = By.id("address1");
	private By cityLoc = By.id("city");
	private By selectStateLoc = By.id("id_state");
	private By postCodeloc = By.id("postcode");
	private By countryLoc = By.id("id_country");
	private By mobileNum = By.id("phone_mobile");
	private By address1Loc = By.id("alias");
	private By registerLoc = By.id("submitAccount");
	private By selectDayLoc = By.id("days");
	private By selectMonthLoc = By.id("months");
	private By selectYearLoc = By.id("years");
	private By clickOnCheckBoxLoc=By.id("newsletter");
	private By accErrorTextMsgLoc=By.xpath("//li[contains(text(),'An account using this email address has already been registered. ')]//parent::ol");
	private WebDriver driver;

	public CreateAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	public void fillRegForm(String firstname, String lastname, String password, String address, String city,
			String pincode, String mobilenum, String address1) {

		driver.findElement(clickOnRadioButtonLoc).click();
		driver.findElement(enterFirstNameLoc).sendKeys(firstname);
		driver.findElement(enterLastNameLoc).sendKeys(lastname);
		driver.findElement(enterPasswordLoc).sendKeys(password);
		driver.findElement(addressLoc).sendKeys(address);
		driver.findElement(cityLoc).sendKeys(city);
		

		Select state = new Select(driver.findElement(selectStateLoc));
		state.selectByVisibleText("Indiana");

		Select day = new Select(driver.findElement(selectDayLoc));
		day.selectByVisibleText("8  ");
		Select month = new Select(driver.findElement(selectMonthLoc));
		month.selectByVisibleText("August ");
		Select year = new Select(driver.findElement(selectYearLoc));
		year.selectByVisibleText("2003  ");
		driver.findElement(postCodeloc).sendKeys(pincode);
		Select country = new Select(driver.findElement(countryLoc));
		country.selectByVisibleText("United States");

		driver.findElement(mobileNum).sendKeys(mobilenum);
		driver.findElement(address1Loc).sendKeys(address1);

	}

	public void clickOnRegButton() {
		driver.findElement(registerLoc).click();
	}
	public void clickOnCheckBox() {
		driver.findElement(clickOnCheckBoxLoc).click();
		
	}
	public String accErrorMsg() {
		String actualText=driver.findElement(accErrorTextMsgLoc).getText();
		return actualText;
		
	}
}