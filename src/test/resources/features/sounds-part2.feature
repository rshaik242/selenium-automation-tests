Feature: Sounds Homepage
  
        AS a user
        I WANT to navigate to the Sounds page
        So THAT I can see and access all logos and content in one place

  Background: 
    Given I am on the BBC Sounds Homepage

  @part2
  Scenario: Listen live carousel takes user to the next available stations
    When I click on "right arrow" sign
    Then I am able to see next available stations
    And I click on "left arrow" sign
    Then I see previous available stations

  @part2
  Scenario: Sounds logo takes user back to the Listen page
    When I click the Stations link
    Then I am on the Stations page
    And I see Sounds logo
    And I click on Sounds logo
    Then I am on the Sounds Homepage

  @part2
  Scenario: Mouseover network logo on the Stations page shows an orange line underneath
    When I click the Stations link
    Then I am on the Stations page
    And I see 17 network station logos
    And I move the cursor to Radio 1 logo
    Then I see orange line underneath Radio 1 logo
