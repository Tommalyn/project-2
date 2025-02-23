Feature: User Sign Up on DemoBlaze

  Scenario: Successful sign-up
Given the user visits the DemoBlaze website
When the user clicks on the "Sign up" button
Then Verity that the sign up tag is displayed
When the user enters valid "username" and "password"
And the user submits the sign-up form

