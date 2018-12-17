package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty","html:target/cucumber", "json:target/cucumber.json"},
		features = {"src/test/resources/features"},
		glue = {"classpath:stepDefinitions"},
		tags = {"@part1"}   )
public class TestRunner {

}
