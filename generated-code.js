
Feature: Login Functionality

  Scenario Outline: Successful login with valid credentials
    Given I open "http://leaftaps.com/opentaps/control/login"
    When I type <username> into the Username field
    And I type <password> into the Password field
    And I click the Login button
    Then I should be logged in successfully

  Examples:
    | username   | password   |
    | "user123"  | "pass123"  |
    | "admin"    | "admin456" |
