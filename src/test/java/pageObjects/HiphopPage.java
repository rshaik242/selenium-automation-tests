package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class HiphopPage extends Page {

	public HiphopPage() {
		PageFactory.initElements(driver, this);
	}

	public void isPageDisplayed() {
		String title = driver.getTitle();
		Assert.assertTrue("Hip hop page is not displayed",
				title.contains("Categories - Music: Hip Hop, RnB & Dancehall: Hip Hop"));
	}

	public void isSortedByPopular() {
		String currentUrl = driver.getCurrentUrl();
		Assert.assertTrue("Category is not sorted by popular", currentUrl.contains("sort=popular"));

	}

}
