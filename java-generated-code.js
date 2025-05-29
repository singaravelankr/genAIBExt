
package com.salesforce.pages;

import com.framework.selenium.api.design.Locators;
import com.framework.testng.api.base.ProjectSpecificMethods;

/**
 * Page Object class for OpenTaps Login Page
 */
public class LoginPage extends ProjectSpecificMethods {

    // Locators for Login Page elements
    public static final Locators USERNAME_INPUT = new Locators(By.id("username"), "Username Input Field");
    public static final Locators PASSWORD_INPUT = new Locators(By.id("password"), "Password Input Field");
    public static final Locators LOGIN_BUTTON = new Locators(By.xpath("//input[@class='decorativeSubmit' and @value='Login']"), "Login Button");

    /**
     * Enters the username in the username input field
     * @param username The username to be entered
     */
    public void enterUsername(String username) {
        element(USERNAME_INPUT).sendKeys(username);
        reportStep("Entered username: " + username + " on Login Page");
    }

    /**
     * Enters the password in the password input field
     * @param password The password to be entered
     */
    public void enterPassword(String password) {
        element(PASSWORD_INPUT).sendKeys(password);
        reportStep("Entered password on Login Page");
    }

    /**
     * Clicks the Login button
     */
    public void clickLogin() {
        element(LOGIN_BUTTON).click();
        reportStep("Clicked Login button on Login Page");
    }
}
