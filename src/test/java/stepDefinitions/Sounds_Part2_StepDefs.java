package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.SoundsPage;
import pageObjects.StationsPage;

public class Sounds_Part2_StepDefs {

	SoundsPage soundsPage = new SoundsPage();
	StationsPage StationsPage = new StationsPage();

	@Then("^I am able to see next available stations$")
	public void i_am_able_to_see_next_available_stations() throws Throwable {
		boolean leftArrow = soundsPage.isPreviousArrowEnabled();
		Assert.assertTrue("Previous arrow is not enabled", leftArrow);
	}

	@Then("^I click on \"([^\"]*)\" sign$")
	public void i_click_on_sign(String arrow) throws Throwable {
		soundsPage.clickArrow(arrow);
	}

	@Then("^I see previous available stations$")
	public void i_see_previous_available_stations() throws Throwable {
		Thread.sleep(1000);
		boolean leftArrow = soundsPage.isPreviousArrowEnabled();
		Assert.assertFalse("Previous arrow is enabled", leftArrow);
	}

	@Then("^I see Sounds logo$")
	public void i_see_Sounds_logo() throws Throwable {

		Assert.assertTrue("Sounds logo is not displayed", soundsPage.isSoundsLogoDisplayed());
	}

	@Then("^I click on Sounds logo$")
	public void i_click_on_Sounds_logo() throws Throwable {
		soundsPage.clickOnSoundsLogo();
	}

	@Then("^I move the cursor to Radio (\\d+) logo$")
	public void i_move_the_cursor_to_Radio_logo(int arg1) throws Throwable {
		StationsPage.hoverOn();
	}

	@Then("^I see orange line underneath Radio (\\d+) logo$")
	public void i_see_orange_line_underneath_Radio_logo(int arg1) throws Throwable {
      String borderCss = StationsPage.getBorderProperties();
	  Assert.assertEquals("Orange border is not displayed", "3px solid rgb(255, 73, 0)", borderCss);
		
	}

}
