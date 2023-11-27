
# MotivationalQuotesFinder
This is a simple web application designed to help users find a dose of motivation through quotes. Whenever you need a quick pick-me-up or a bit of wisdom, this app delivers a random motivational quote from a collection of inspiring individuals.

<img width="568" alt="截圖 2023-11-27 10 16 35" src="https://github.com/LiuBenny0206/MotivationalQuotesFinder/assets/109209156/3b469759-adab-4ffe-b87b-bcd6df137dea">

## Features

- Fetches the Quote of the Day from FavQs API.
- Presents the quote in a clean and minimalistic user interface.
- Displays the author and the number of favorites for each quote.

## Motivation

The motivation behind this project is to provide a seamless and immediate way for individuals to find inspiration and motivation with just a click, especially during times when they need an emotional or intellectual boost.

## Build status

(Here you would include build status badges if you have a CI/CD pipeline, such as Travis CI, Jenkins, etc.)

## Tech/Framework Used

This project is built with the following technologies:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com)
- [Axios](https://github.com/axios/axios) for API calls
- [EJS](https://ejs.co) for server-side rendering

## Code Example

```javascript
app.get("/", async (req, res) => {
  try{
    const quoteResponse = await axios.get("https://favqs.com/api/qotd");
    const quoteData = quoteResponse.data.quote;
    res.render("index.ejs", {
        quote: quoteData,
    });
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});
