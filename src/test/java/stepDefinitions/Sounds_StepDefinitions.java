package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HiphopPage;
import pageObjects.SoundsPage;
import pageObjects.StationsPage;

public class Sounds_StepDefinitions {

	SoundsPage soundsPage = new SoundsPage();
	StationsPage stationsPage = new StationsPage();
	HiphopPage hiphopPage;

	@Given("^I am on the BBC Sounds Homepage$")
	public void i_am_on_the_BBC_Sounds_Homepage() throws Throwable {
		soundsPage.navigateToSoundsPage();
	}

	@When("^I select the Listen logo$")
	public void i_select_the_Listen_logo() throws Throwable {
		soundsPage.clickOnListenLogo();
	}

	@Then("^I am on the Sounds Homepage$")
	public void i_am_on_the_Sounds_Homepage() throws Throwable {
		String logoTitle = soundsPage.isSoundsPageDisplayed();

		Assert.assertEquals("Sounds home page is not displayed", "Sounds home page", logoTitle);
	}

	@Then("^I can see Radio 1 logo$")
	public void i_can_see_Radio_logo() throws Throwable {
		Assert.assertTrue("Radio 1 logo is not displayed", soundsPage.isRadio1LogoDisplayed());
	}

	@Then("^I can see Radio 2 logo$")
	public void i_can_see_Radio_2_logo() throws Throwable {
		Assert.assertTrue("Radio 2 logo is not displayed", soundsPage.isRadio2LogoDisplayed());
	}

	@When("^I click the Stations link$")
	public void i_click_the_Stations_link() throws Throwable {
		soundsPage.clickOnStations();

	}

	@Then("^I am on the Stations page$")
	public void i_am_on_the_Stations_page() throws Throwable {
		stationsPage.isPageDisplayed();
	}

	@Then("^I see (\\d+) network station logos$")
	public void i_see_network_station_logos(int numberOfStations) throws Throwable {
		int actualNumberOfStations = stationsPage.numberOfStationsLogos();

		Assert.assertEquals("Number of stations logos are not matched", numberOfStations, actualNumberOfStations);
	}

	@When("^I select (.*) Category$")
	public void i_select_Hip_Hop_Category(String categoryName) throws Throwable {

		hiphopPage = soundsPage.clickOnCategory(categoryName);
	}

	@Then("^I am on Hip Hop Category page$")
	public void i_am_on_Hip_Hop_Category_page() throws Throwable {
		hiphopPage.isPageDisplayed();
	}

	@Then("^I see Category page is sorted by popular$")
	public void i_see_Category_page_is_sorted_by_popular() throws Throwable {
		hiphopPage.isSortedByPopular();
	}

}
