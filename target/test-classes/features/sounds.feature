@part1
Feature: Sounds Homepage
        AS a user
        I WANT to navigate to the Sounds page
        So THAT I can see and access all logos and content in one place

  Background: 
    Given I am on the BBC Sounds Homepage

  Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage
    When I select the Listen logo
    Then I am on the Sounds Homepage
    And I can see Radio 1 logo
    And I can see Radio 2 logo

  Scenario: Verify network station logos are displayed on the Stations page
    When I click the Stations link
    Then I am on the Stations page
    And I see 17 network station logos

  Scenario: Selecting the Hip Hop category from the Categories module on the Sounds Homepage
    When I select Hip Hop Category
    Then I am on Hip Hop Category page
    And I see Category page is sorted by popular
