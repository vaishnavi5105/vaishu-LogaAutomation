package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SignOutPage {

	private By clickOnSignOutLoc=By.partialLinkText("Sign out");
	WebDriver driver;
	
	public SignOutPage(WebDriver driver) {
		this.driver = driver;
	}

	public void clickOnSignOut() {
		driver.findElement(clickOnSignOutLoc).click();
	}
}
