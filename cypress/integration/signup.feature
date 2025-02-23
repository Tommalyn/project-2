 Feature: User sign-up process
 

 Scenario: User should be able to open the sign-up tag

    Given I open the Demoblaze homepage

    When I click on the "Sign up" button

    Then I should see the sign-up tag



Scenario: User successfully signs up

    Given I open the Demoblaze homepage

    When I click on the "Sign up" button

    Then I should see the sign-up tag

    When I enter a valid username and password

    Then I submit the sign-up form



Scenario: User signs up with existing username and password

    Given I open the Demoblaze homepage

    When I click on the "Sign up" button

    When I enter an existing valid username and password

    Then I submit the sign-up form

    Then I should see an error message 'This user already exist'

Scenario: User signs up without password

    Given I open the Demoblaze homepage

    When I click on the "Sign up" button

    When I enter a valid username

    Then I submit the sign-up form

    Then I should see an error message 'Please fill out Username and Password'.