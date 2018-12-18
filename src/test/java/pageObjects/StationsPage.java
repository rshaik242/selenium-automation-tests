package pageObjects;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StationsPage extends Page {

	@FindBy(css = ".nations-and-national-logo-list li")
	public List<WebElement> station_logos;

	@FindBy(xpath = "//img[@alt='BBC Radio 1']")
	public WebElement radio1_station;
	
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

	public void hoverOn() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,5);
				wait.until(ExpectedConditions.visibilityOf(radio1_station));
		Actions action = new Actions(driver);

		action.moveToElement(radio1_station).build().perform();

     }

	public String getBorderProperties() {
		String colour = (radio1_station.getCssValue("border-bottom"));
		return colour;
	}
}
