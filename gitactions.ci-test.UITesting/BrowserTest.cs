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

            using(var driver = new ChromeDriver("."))
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
                
                Assert.IsTrue(element.GetAttribute("value") == "Shitbag");
            }
        }
    }
}