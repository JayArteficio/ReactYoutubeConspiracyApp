ConspiracyApp notes

1. DL and set-up Boilerplate

    git clone SSH link
              (git@github.com:StephenGrider/ReduxSimpleStarter.git)
    cd tothatprojectname
    npm install
    npm start
    atom .
    delete src folder and make your own src folder and index.js

2. Set-up own git
  remove existing git file and make your own git
     >git init
     >git add .
     >git commit -m 'initial commit'
     Make repo in github and connect it
     >git remote add origin https://github.com/JayArteficio/ReactYoutubeConspiracyApp.git
     >git push origin master

 3. Get youtube API key from google developers console

 4. install package for youtube videos

  >npm install --save youtube-api-search
  (--save puts it into the package.json file)



a component = js functions that give out HTML

always import react on top and export the cpomponent on the bottom


functional compnent is a 'dumb' component
eg.

    import React from 'react';

    const SearchBar = () => {
      return <input />;
    };

    export default SearchBar;


class based components have states or are 'smart'

eg.
    import React from 'react';

    class SearchBar extends React.component {
      render() {
        return <input />;
      }
    };

    export default SearchBar;

    import React, { Component } from 'react';

    // same as vv
    // const Component = React.Component;

On change of the input, run the event handler function

    import React, { Component } from 'react';

    class SearchBar extends Component {
      render() {
        return <input onChange={this.onInputChange} />;
        // create a new input element and pass it a prop 'onChange'
        // with a value of the onInputChange
      }

      onInputChange (event) {
        console.log(event.target.value);
      }
      //this is the event handler

    }

    export default SearchBar;


you can also shorten it out with ES6

    class SearchBar extends Component {
      render() {
        return <input onChange={event => console.log(event.target.value)} />;
      }
    }

Explanation of adding the callback to be able to select a video:
lecture 239. Video Selection
1.in index, in app component, <VideoDetail video={ this.state.selectedVideo} />
this updates the app's state
2. This is passed as a property into videoList
3. VideoList in turn passes this to VideoListItem
4. VideoListItem says whenever I am clicked, call that function (onVideoSelect) with the video that I was passed.


lodash

> npm install --save lodash
this enab0les the unbounce ability to throttle the search function
