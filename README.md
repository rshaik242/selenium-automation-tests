# selenium-automation-tests

# Pre-requisites
- <a href="https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html#javasejdk" target="_blank">Java</a>
- <a href="https://maven.apache.org/download.cgi" target="_blank">Maven</a>
- <a href="https:https://eclipse.org/downloads/" target="_blank">Eclipse</a>
- Eclipse Plugins
  - <a href="http://download.eclipse.org/technology/m2e/releases/1.4" target="_blank">Maven</a> 
  - <a href="http://cucumber.github.io/cucumber-eclipse/update-site/" target="_blank">Cucumber</a>
  
# Setting up selenium-cucumber-java
- Install Java and set path.
- Install Maven and set path.
- Clone respective repository or download zip.


# Running features
- Goto project directory.
- Use "**mvn clean install**" command to run features.
- Use "**mvn clean install -Dbrowser=browser_name**" to run features on specific browser. framework supports both chrome and firefox browsers and default browser is chrome.

# Packages and features

### src/test/java/drivers
This package contains driver executables for chrome and firefox drivers and its references in initialiseDriver.java file.

### src/test/java/pageObjects
This package contains all the page objects classes and each page object class has all the relevant element locators and methods within that page.

### src/test/java/stepDefinitions
This package contains step definition files.

### src/test/java/testRunner
This package contains cucumber test runner class and initialiseDriver class

### src/test/resources/features
This package contains .feature files, please refer part2.feature for part 2 BDD scenarios






