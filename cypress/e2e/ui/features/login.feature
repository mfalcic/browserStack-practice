Feature: OrangeHM login page

Scenario: Login using valid credentials
    Given I access the OrangeHM login page
    When I enter a username Admin
    And I enter password admin123
    And I click on the login button
    Then i should be login 


