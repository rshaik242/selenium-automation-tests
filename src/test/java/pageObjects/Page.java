package pageObjects;

import org.openqa.selenium.WebDriver;

import stepDefinitions.InitialiseDriver;

public class Page {

    public WebDriver driver;
    
    
    public Page() {
         this.driver = InitialiseDriver.driver;
    	
    }
}

