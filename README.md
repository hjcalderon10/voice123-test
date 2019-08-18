This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Work progress:

10:30 start, looking for understanding api and requirements.

- Use postman to see the headers and response.
- Initialize the project with create-react-app
- Analize the structure to think on the way to store and display the information on the app.
 
10:54 ready with the api. Installing dependencies.
- Conclude that the keywords came from the summary.
- Install redux, material-ui, react-router.
  
11:01 looking for material components.
- What I should use to make it presentable.
  
11:30 implementing redux.
- With the structure of the application, I started to use it on a small project
- Implementation as it was a feature to a large application.
- In the store, an object called searchReducer, has the following properties:

  _ data -> List of all profiles.
  
  _ isSearching -> if the app is waiting the server response.
  
  _ page -> which page we are currently.
  
  _ totalPage -> numbers of pages. This came from a header.
  
  _ isRendered -> true if the app change his url, false if the app got refreshed.
  
  _ text -> the searching keywords.
  
12:00 break.

13:00 continue work.

13:20 finishing redux setup and app store.
- All logic finalized.

14:10 starting to display results.
- Using the API to start visualizing results and working on the visual interface.

15:00 break.

15:40 continue work.

16:20 looking for the samples on the API. Didn't find anything that I saw could help me.
- Wasn't possible for me get the URL to the voice samples, in order to get them into my app.

17:00 Realizing the requirements didn't specify all the information.

17:26 writing this doc to upload.

Total dev hours: 5 hours.

future improvements:

- The information wasn't enough, I'd like to ask about the information we are gonna take, because as in the early stage of the test, I believed the keywords would came for only the summary, as my postman tests only showed me that. Also, I wasn't able to collect the samples videos. A good requirements document is the key to start working in the best way.

- As my implementation doesn't cover the edgy cases, this' one good improvement.

- Display the text in better ways, also compare it. I had to lowerCase to compare and to display, changing what voice123 server sends to me and what I display to the user.
