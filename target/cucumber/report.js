$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sounds.feature");
formatter.feature({
  "line": 2,
  "name": "Sounds Homepage",
  "description": "      AS a user\r\n      I WANT to navigate to the Sounds page\r\n      So THAT I can see and access all logos and content in one place",
  "id": "sounds-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@part1"
    }
  ]
});
formatter.before({
  "duration": 19446625382,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 13870888553,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;radio-1-and-radio-2-logos-are-displayed-in-the-listen-live-module-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I select the Listen logo",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am on the Sounds Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see Radio 1 logo",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can see Radio 2 logo",
  "keyword": "And "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_select_the_Listen_logo()"
});
formatter.result({
  "duration": 4403790690,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 350096389,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_can_see_Radio_logo()"
});
formatter.result({
  "duration": 237758864,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_can_see_Radio_2_logo()"
});
formatter.result({
  "duration": 164431291,
  "status": "passed"
});
formatter.after({
  "duration": 1916799944,
  "status": "passed"
});
formatter.before({
  "duration": 14038213607,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 12342346683,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify network station logos are displayed on the Stations page",
  "description": "",
  "id": "sounds-homepage;verify-network-station-logos-are-displayed-on-the-stations-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click the Stations link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am on the Stations page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I see 17 network station logos",
  "keyword": "And "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_click_the_Stations_link()"
});
formatter.result({
  "duration": 3181299397,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 148296737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 6
    }
  ],
  "location": "Sounds_StepDefinitions.i_see_network_station_logos(int)"
});
formatter.result({
  "duration": 524705054,
  "status": "passed"
});
formatter.after({
  "duration": 7029394665,
  "status": "passed"
});
formatter.before({
  "duration": 12116833633,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 131331716497,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Selecting the Hip Hop category from the Categories module on the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;selecting-the-hip-hop-category-from-the-categories-module-on-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I select Hip Hop Category",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I am on Hip Hop Category page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see Category page is sorted by popular",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Hip Hop",
      "offset": 9
    }
  ],
  "location": "Sounds_StepDefinitions.i_select_Hip_Hop_Category(String)"
});
formatter.result({
  "duration": 4453121707,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_Hip_Hop_Category_page()"
});
formatter.result({
  "duration": 21161961,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_see_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "duration": 11770061,
  "status": "passed"
});
formatter.after({
  "duration": 1666568860,
  "status": "passed"
});
});ace",
  "id": "sounds-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15029362062,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 11608848164,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;radio-1-and-radio-2-logos-are-displayed-in-the-listen-live-module-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I select the Listen logo",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I am on the Sounds Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see Radio 1 logo",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see Radio 2 logo",
  "keyword": "And "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_select_the_Listen_logo()"
});
formatter.result({
  "duration": 5359020987,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 109899591,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_can_see_Radio_logo()"
});
formatter.result({
  "duration": 138778655,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_can_see_Radio_2_logo()"
});
formatter.result({
  "duration": 142931232,
  "status": "passed"
});
formatter.after({
  "duration": 1900871872,
  "status": "passed"
});
formatter.before({
  "duration": 17054424836,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 9532506078,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify network station logos are displayed on the Stations page",
  "description": "",
  "id": "sounds-homepage;verify-network-station-logos-are-displayed-on-the-stations-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click the Stations link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am on the Stations page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I see 17 network station logos",
  "keyword": "And "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_click_the_Stations_link()"
});
formatter.result({
  "duration": 2926116375,
  "status": "passed"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 741069515,
  "error_message": "java.lang.AssertionError: Stations page is not displayed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat pageObjects.StationsPage.isPageDisplayed(StationsPage.java:23)\r\n\tat stepDefinitions.Sounds_StepDefinitions.i_am_on_the_Stations_page(Sounds_StepDefinitions.java:53)\r\n\tat ✽.Then I am on the Stations page(sounds.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 6
    }
  ],
  "location": "Sounds_StepDefinitions.i_see_network_station_logos(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4643061339,
  "status": "passed"
});
formatter.before({
  "duration": 81993585181,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.21 seconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MUNEERESHMA\u0027, ip: \u0027192.168.1.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: InitialiseDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat stepDefinitions.InitialiseDriver.setWebDriver(InitialiseDriver.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Selecting the Hip Hop category from the Categories module on the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;selecting-the-hip-hop-category-from-the-categories-module-on-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I select Hip Hop Category",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am on Hip Hop Category page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I see Category page is sorted by popular",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Hip Hop",
      "offset": 9
    }
  ],
  "location": "Sounds_StepDefinitions.i_select_Hip_Hop_Category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_am_on_Hip_Hop_Category_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sounds_StepDefinitions.i_see_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44678,
  "status": "passed"
});
});