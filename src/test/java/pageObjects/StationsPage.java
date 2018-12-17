package pageObjects;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StationsPage extends Page {

	@FindBy(css = ".nations-and-national-logo-list li")
	public List<WebElement> station_logos;

	// constructor
	public StationsPage() {
		PageFactory.initElements(driver, this);
	}

	public void isPageDisplayed() {
		String title = driver.getTitle();
		Assert.assertTrue("Stations page is not displayed", title.contains("Stations"));
	}

	public int numberOfStationsLogos() {
		int number = station_logos.size();
		return number;
	}


}
