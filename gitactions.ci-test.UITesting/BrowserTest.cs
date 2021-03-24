using System;
using System.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;

namespace gitactions.ci_test.UITesting 
{
    [TestClass]
    public class BrowserTest 
    {
        [TestMethod]
        public void CanWriteToTextbox() 
        {
            // Go to the site.
            var env = Environment.GetEnvironmentVariable("SITE_URL");
            var url = string.Concat("http://", env);
            Console.WriteLine(url);

            var options = new ChromeOptions();
            options.AddArgument("--user-data-dir=~/.config/google-chrome");
            //options.AddArgument("--headless");
            options.AddArgument("--disable-gpu");

            using(var driver = new ChromeDriver(".", options))
            {
                // go to local website
                driver.Navigate().GoToUrl(url);

                // Find the textbox
                var element = driver.FindElementByClassName("textcapture__input");

                // See that we are not null.
                Assert.IsNotNull(element);

                ActionBuilder builder = new ActionBuilder();
                var series = new Actions(driver)
                    .MoveToElement(element)
                    .Click(element)
                    .SendKeys(element, "Shitbag")
                    .Build();
                
                series.Perform();
                var value = element.GetAttribute("value");
                Console.WriteLine($"e.GetAttribute(value) == {value}; e.Text == {element.Text}");
                
                Assert.IsTrue(element.GetAttribute("value") == "Shitbag");
            }
        }
    }
}