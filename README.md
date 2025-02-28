# Technical Task for SDETs

## Introduction
Hello! Thank you so much for taking the time to dive into this exercise.

In this repository, you'll find all the code necessary to complete the associated tasks (except for the code you'll need to add ;) ). 

If you have any questions about the exercises or need more information, please don't hesitate to contact us—we'll get back to you as soon as possible.

Once you are done, you can share your changes with us via email using a ZIP file or create a repository in Github and share the link with us.

## Prerequisites
Before you get started, ensure you have the following:
- **Node.js v18** and **npm** installed on your machine. [Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Basic familiarity with **Playwright** and **GitHub Actions** is recommended.

## Setup and Running Instructions
1. Clone this repository to your local machine.
2. Run the following commands in your terminal:

   ```bash
   npm install
   npx playwright install
   ```

3. To run the tests, execute:

   ```bash
   npm run test:goodstack
   ```

For more details, you can check out the [Playwright Documentation](https://playwright.dev/).

## Submission Guidelines
- **Commit your changes** as you complete each exercise.
- Once you're done, **push your changes** to your forked repository.
- Let us know when you've completed the exercises. We'd appreciate it if you could notify us **at least 2 days before your next catch-up** with our team so we have time to review your work.

---

## Exercises

### Instructions for the Exercises
And here’s where the fun begins! Below are **3 different exercises** designed to challenge your amazing skills.

**Important:** Please don't spend more than **1 hour** on the exercises. If you don't complete all of them, no worries! We understand these tasks can be time-consuming. We're primarily interested in understanding your technical approach and having some code to discuss during our next meeting.

### Exercise 1: Fix and improve Existing Test
Take a look at the test within the file `goodstack/tests/tests.spec.ts`.

Your first task is to **fix and improve that test**. Feel free to add, modify, or delete any code you need to make the test pass and make it better.

The test scenario that we are looking to automate is one that visits our "Donations" page using the navigation menu and takes a screenshot once we are sure we are in the correct page. It will be great if the screenshots were not overwriten every time a new test runs. 

**But what does "better" mean?** That’s up to you! Whether it’s improving test reliability, arquitecture, readability, or performance, we’re interested in your thought process. Just make sure to **comment within the code** to explain the changes you made and why.

### Exercise 2: Set Up Tests for a New Site  
*(Extra: Run Them in Parallel with GitHub Actions)*

Time to level up! :) For this exercise:

1. **Choose any public website** you like (make sure it's accessible without login and isn’t highly dynamic).
2. Identify some functionality you think is worth testing.
3. Create a new test for this functionality.
4. Set it up so that we can run it using the following command:

   ```bash
   npm run test:newsite
   ```

**Bonus:** If you have extra time, take a look at our existing GitHub workflows and integrate your new test into the pipeline.

### [ABOVE AND BEYOND] Exercise 3: Run All Tests in GitHub Actions Using Docker

Feeling adventurous? Here’s your final challenge:

Our current GitHub Actions workflow runs tests **natively** within the GitHub agent. We would love for you to **configure the workflow to execute the tests inside a Docker container** instead.

- You can create your own Dockerfile or use Playwright base image. 
- Remember to commit the modified workflows.
- If you have questions about setup or dependencies, feel free to reach out.

---

## Closing Thoughts
Thank you again for dedicating your time to this exercise. We’re really looking forward to meeting you and discussing your work!

Remember to **commit and push your changes** once you're finished, and notify us so we can review your work. Again, we’d appreciate hearing from you **at least 2 days before our next meeting** to give us time to review everything thoroughly.

Good luck, and most importantly—have fun!
