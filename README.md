We're going to practice consuming APIs by recreating your GitHub profile page.

After completing this assignment, you should now:

* Be comfortable breaking the functionality of a web app down into a series of statements in JavaScript
* Be able to demonstrate functional programming methods
* Understand the basics of AJAX
* Understand the basics of Promises

You also be able to effectively use:

* `Promise`
* `fetch`

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Was it harder to get the data from GitHub, or to assemble the page once you'd pulled the data down?
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `18-github-api`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `18-github-api` directory run `startfrom tiy-lr-fee/assignments 18-github-api` to download the boilerplate.

3. Recreate the HTML and CSS for the repository tab of the GitHub profile page (https://github.com/jbarket?tab=repositories).

4. Use two AJAX requests (and Promises) to pull your own profile information:
  * Profile: `https://api.github.com/users/<username>`
  * Repositories: `https://api.github.com/users/<username>/repos`

5. After loading the data from the GitHub API, write at least the following fields to the DOM:
  * name
  * blog
  * location
  * email
  * an `<img>` with its source as the avatar_url
  * html_url
  * for each repo owned by your user, list that repo in a `<ul>`

## Adventurer Mode

Create a `GithubClient` class that implements all the functionality from Explorer Mode, but allows you to display multiple profiles on the page by creating multiple instances:

```js
var matt = new GithubClient('matthiasak')
var jesse = new GithubClient('jwo')

matt.renderTo('.container')
jesse.renderTo('.container')
```

## Epic Mode

Nothing yet!
