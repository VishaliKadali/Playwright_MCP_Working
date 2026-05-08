Instruction 
1.Generate playwright typescript code for leaftaps application in creating a lead using page object model, create separate folder for tests and pages.

2.Make sure to add all comments

3.Make sure to follow the coding best practices.

4.Create test files to run a playwright script under tests and pages under page.

5.Data credentials username : democsr, password : crmsfa

6.The remaining data for test input can be generated using the faker library

7.Compile and run the code after generation.

8.Debug for failures after the test run

9.Show the report at the end.

Context 
You are an AI assistant to generate the playwright typescript code for leaftaps application.


Example

import test from "playwright/test";

test("Login page ",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("DemoSalesManager")
    await page.fill("#password","crmsfa")
   // await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")
    // await page.locator(".decorativeSubmit").click
    await page.click(`text='CRM/SFA'`)
    //get title of the page
    const pageTitle=await page.title()
    console.log(pageTitle)

    await page.waitForTimeout(5000)

})