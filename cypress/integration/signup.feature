Feature: User Sign Up on DemoBlaze

  Scenario: Successful sign-up
Given the user visits the DemoBlaze website
When the user clicks on the "Sign up" button
Then Verity that the sign up tag is displayed
When the user enters valid "username" and "password"
And the user submits the sign-up form

Scenario: user to be able to sign up
Given the user is able to sign up with valid username and password 
when lunch the browers and hit demoblaze website
Then l click on sign up button
Then the user should be able to sign up successful