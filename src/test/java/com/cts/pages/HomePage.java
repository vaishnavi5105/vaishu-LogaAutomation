package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage {
	private  By clickOnsigninLoc = By.partialLinkText("Sign in");
	private  By searchLoc = By.name("search_query");
	private  By submitLoc = By.name("submit_search");
	private  By errorLoc = By.xpath("//p[@class='alert alert-warning']");
	private  By searchShirtLoc = By.xpath("(//a[@title='Faded Short Sleeve T-shirts'])[2]");
	private WebDriver driver;
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
	}

	public void clickOnSignIn() {
		driver.findElement(clickOnsigninLoc).click();
	}

	public void clickSearchIcon(String searchproduct) {
		driver.findElement(searchLoc).sendKeys(searchproduct);
	}

	public void clickSubmitIcon() {
		driver.findElement(submitLoc).click();
	}

	public String getSearchShirtDetail() {
		String shirtActualText = driver.findElement(searchShirtLoc).getText();

		return shirtActualText;
	}

	public void enterInvalidDetails(String product) {
		driver.findElement(searchLoc).sendKeys(product);
		driver.findElement(submitLoc).click();
	}

	public String getFailedmessage() {
		String err = driver.findElement(errorLoc).getText();
		return err;
	}


}
