package pageObjects;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SoundsPage extends Page {

	// elements
	@FindBy(id = "sn__listen-logo")
	public WebElement listen_logo;
	
	@FindBy(id = "sn__logo-link")
	public WebElement sounds_logo;

	@FindBy(linkText = "Stations")
	public WebElement stations_link;

	@FindBy(css = ".sc-c-brand--radio1")
	public WebElement radio1_logo;

	@FindBy(css = ".sc-c-brand--radio2")
	public WebElement radio2_logo;
	
	@FindBy(css = ".gs-u-display-inline-block:nth-child(1) > .sc-c-paddle__button")
	public WebElement previousArrow;
	
	@FindBy(css = ".gs-u-display-inline-block:nth-child(2) > .sc-c-paddle__button")
	public WebElement nextArrow;
	
	// .gs-u-display-inline-block:nth-child(1) > .sc-c-paddle__button

	// constructor
	public SoundsPage() {
		PageFactory.initElements(driver, this);
	}

	// methods
	public void navigateToSoundsPage() {
		driver.get("https://www.bbc.co.uk/sounds");
		WebElement soundsLinkName = (new WebDriverWait(driver, 10))
				.until(ExpectedConditions.presenceOfElementLocated(By.id("sn__logo-link")));
		String expected = "Sounds home page";
		String actual = soundsLinkName.getAttribute("aria-label");
		Assert.assertEquals("Sounds page is not displayed", expected, actual);
	}

	public void clickOnListenLogo() {
		listen_logo.click();

	}

	public void clickOnStations() {
		stations_link.click();
	}

	public boolean isRadio1LogoDisplayed() {
		return radio1_logo.isDisplayed();
	}

	public boolean isRadio2LogoDisplayed() {
		return radio2_logo.isDisplayed();
	}
	
	public boolean isSoundsLogoDisplayed() {
		return sounds_logo.isDisplayed();
	}
	
	public void clickOnSoundsLogo() {
		if(isSoundsLogoDisplayed()) {
			sounds_logo.click();
		};
	}
	
	public String isSoundsPageDisplayed() {
		String title = driver.findElement(By.id("sn__logo-link")).getAttribute("aria-label");
		return title;
	}

	public HiphopPage clickOnCategory(String categoryName) {
		HiphopPage hiphopPage;
		List<WebElement> cards = driver.findElements(By.cssSelector(".sc-c-category-card-slice > div > div ul li"));

		for (WebElement element : cards) {
			String myText = element.findElement(By.cssSelector(".sc-c-category-card .sc-c-category-card__title"))
					.getText();
			if (myText.contains(categoryName)) {
				element.click();
				break;
			}
		}
		hiphopPage = new HiphopPage();
		return hiphopPage;
	}

	public void clickArrow(String arrow) throws InterruptedException {
		if (arrow.contains("right")) {
		     nextArrow.click();;
		} else if (arrow.contains("left")) {
		   previousArrow.click();
		}
		
	}
	
	public boolean isPreviousArrowEnabled() {
		boolean isEnabled = previousArrow.isEnabled();
		return isEnabled;
	}
	
	public boolean isNextArrowEnabled(String arrow) {
		boolean isEnabled = false;
		if (arrow.contains("right")) {
			isEnabled = nextArrow.isEnabled();
		}
		if (arrow.contains("left")) {
			isEnabled = previousArrow.isEnabled();
		}

		return isEnabled;
	}
	
}
