package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class InitialiseDriver {

	public static WebDriver driver;

	@Before
	public void setWebDriver() throws Exception {

			String browser = System.getProperty("browser");
			if (browser == null) {
				browser = "chrome";
			}
			switch (browser) {
			case "chrome":
				ChromeOptions chromeOptions = new ChromeOptions();
				chromeOptions.addArguments("start-maximized");
				System.setProperty("webdriver.chrome.driver", "src/test/java/drivers/chromedriver.exe");
				driver = new ChromeDriver(chromeOptions);

				break;
			case "firefox":
				driver = new FirefoxDriver();
				System.setProperty("webdriver.gecko.driver", "src/test/java/drivers/geckodriver.exe");
				driver.manage().window().maximize();
				break;
			default:
				throw new IllegalArgumentException("Browser \"" + browser + "\" isn't supported.");
			}
			driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
		
	}

	@After
	public void quitDriver() {

		driver.quit();
	}

}
