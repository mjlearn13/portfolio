import { nanoid } from 'nanoid'
import vanLife from '../src/assets/project-images/vanlife.png'
import notesApp from '../src/assets/project-images/notes-app.png'
import picSome from '../src/assets/project-images/pic-some.png'
import speedTypingGame from '../src/assets/project-images/speedTypingGame.png'
import tenzies from '../src/assets/project-images/tenzies.jpg'
import memeGenerator from '../src/assets/project-images/meme-generator.png'
import twimba from '../src/assets/project-images/twimba.png'
import splash from '../src/assets/project-images/splash.png'
import paint from '../src/assets/project-images/paint.png'
import kanban from '../src/assets/project-images/kanban.png'
import calculator from '../src/assets/project-images/calculator.png'
import basketball from '../src/assets/project-images/basketball.png' 
import nasa from '../src/assets/project-images/nasa.png'
import spock from '../src/assets/project-images/spock.png'
import video from '../src/assets/project-images/video.png'
import navigation from '../src/assets/project-images/navigation.png'
import template from '../src/assets/project-images/template.png'
import infinite from '../src/assets/project-images/infinite.png'
import joke from '../src/assets/project-images/joke.png'
import bookmark from '../src/assets/project-images/bookmark.png'
import countdown from '../src/assets/project-images/countdown.png'
import form from '../src/assets/project-images/form.png'
import math from '../src/assets/project-images/math-sprint.png'
import mode from '../src/assets/project-images/mode.png'
import music from '../src/assets/project-images/music-player.png'
import picture from '../src/assets/project-images/picture.png'
import quote from '../src/assets/project-images/quote.png'
import dashboard from '../src/assets/project-images/dashboard.png'
import lead from '../src/assets/project-images/lead.png'
import password from '../src/assets/project-images/password.png'
import addToCart from '../src/assets/project-images/addToCart.png'




export default [
  {
    id: nanoid(),
    name: 'VANLIFE',
    url: 'https://van-life-mj-portfolio.netlify.app/',
    image: vanLife,
    type: 'React',
    github: 'https://github.com/mjlearn13/van-life.git',
    desc: 'VanLife is a single page web app for renting decked-out travel vans for your next road trip adventure!  It is built using React Router v6, the most popular routing library for React applications and one of the most downloaded React support libraries ever.',
    topics: ['Deploying with Netlify', 'Using Firebase for data storage'],
  },
  {
    id: nanoid(),
    name: 'Notes',
    url: 'https://notes-mj-portfolio.netlify.app/',
    image: notesApp,
    type: 'React',
    github: 'https://github.com/mjlearn13/notes-app.git',
    desc: '',
    topics: ['Deploying with Netlify', 'Using Firebase for data storage'],
  },
  {
    id: nanoid(),
    name: 'Add to Cart',
    url: 'https://add-to-cart-mj-portfolio.netlify.app/',
    image: addToCart,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/add-to-cart.git',
    desc: "Add to Cart is a Progressive web app, used for keeping track of a shopping list. It's not technically a native mobile app, it's a web app that's disguised as a mobile app.  The web application manifest file was used to transform the web application to make it look like a native app on our phone. Our app will look and feel like a native mobile app and we will also be able to put it on the home screen of our phones for both iOS and Android.",
    topics: [
      'Progressive web app',
      'Web Application Manifest',
      'Deploying with Netlify',
      'Using Firebase for data storage',
    ],
  },
  {
    id: nanoid(),
    name: 'Pic Some',
    url: 'https://pic-some-mj-portfolio.netlify.app/',
    image: picSome,
    type: 'React',
    github: 'https://github.com/mjlearn13/pic-some.git',
    desc: '',
    topics: ['Deploying with Netlify'],
  },
  {
    id: nanoid(),
    name: 'Speed Typing',
    url: 'https://speed-typing-game-mj-portfolio.netlify.app/',
    image: speedTypingGame,
    type: 'React',
    github: 'https://github.com/mjlearn13/speedTypingGame.git',
    desc: '',
    topics: ['Deploying with Netlify'],
  },
  {
    id: nanoid(),
    name: 'Tenzies',
    url: 'https://tenzies-mj-portfilio.netlify.app/',
    image: tenzies,
    type: 'React',
    github: 'https://github.com/mjlearn13/tenzies.git',
    desc: '',
    topics: ['Deploying with Netlify'],
  },
  {
    id: nanoid(),
    name: 'Meme Generator',
    url: 'https://meme-generator-mj-portfolio.netlify.app/',
    image: memeGenerator,
    type: 'React',
    github: 'https://github.com/mjlearn13/meme-generator.git',
    desc: '',
    topics: ['Deploying with Netlify'],
  },
  {
    id: nanoid(),
    name: 'Twimba',
    url: 'https://mjlearn13.github.io/twitter-clone/',
    image: twimba,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/twitter-clone.git',
    desc: '',
    topics: ['Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Splash',
    url: 'https://mjlearn13.github.io/splash-page/',
    image: splash,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/splash-page.git',
    desc: 'Splash was built from a design using the Figma platform.  The web app has a toggle feature allowing us to choose a different background',
    topics: ['DOM Basics', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Paint Clone',
    url: 'https://mjlearn13.github.io/paint-clone/',
    image: paint,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/paint-clone.git',
    desc: 'Paint Clone is a basic version of MS Paint. It allows us to save, load and clear from localStorage and save an image file.',
    topics: [
      'Advanced HTML Canvas',
      'localStorage',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Kanban',
    url: 'https://mjlearn13.github.io/drag-and-drop/',
    image: kanban,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/drag-and-drop.git',
    desc: 'Kanban Board is a task tracker web app. The board is divided into different columns, the tasks in each column can be moved to the other columns and edited.  The app showcases the Drag and Drop API and the data is stored in local storage. The app uses content editable attributes in order to add and modify items.',
    topics: [
      'Drag and Drop API',
      'Editable Content',
      'focusOut Event',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Calculator',
    url: 'https://mjlearn13.github.io/calculator/',
    image: calculator,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/calculator.git',
    desc: 'Calculator is a mobile responsive basic calculator web app.  It has a gradient background and uses CSS Grid.',
    topics: ['Math Methods', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Math Sprint',
    url: 'https://mjlearn13.github.io/math-sprint-game/',
    image: math,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/math-sprint-game.git',
    desc: 'Math Sprint is a math based game. It highlights the usage of timing events as well as generating random correct and incorrect math equations. From the splash screen we can select our round based on amount of questions.  There is a best score that is stored in local storage for each corresponding amount of questions. There is a random amount of correct and incorrect answers. We get a score page with our time, base time and penalties.',
    topics: [
      'SetInterval',
      'DOM',
      'localStorage',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Nasa Pictures',
    url: 'https://mjlearn13.github.io/nasa-api-pictures/',
    image: nasa,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/nasa-api-pictures.git',
    desc: 'Nasa Pictures is a mobile responsive web app that uses the Nasa API to get random astronomy pictures of the day.  The results are formatted into cards with relevant information.  When an image is clicked we can view the full resolution image of that image. We also have the ability to add or remove images to our favourites page using local storage. The images are lazy loaded to improve performance.',
    topics: [
      'Fetch',
      'Async/Await',
      'NASA API',
      'DOM',
      'localStorage',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Spock Rock',
    url: 'https://mjlearn13.github.io/spock-rock-game/',
    image: spock,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/spock-rock-game.git',
    desc: 'Spock Rock is a mobile responsive game similar to Rock Paper Scissors.  There are five possible choices.  When you hover over each image there is a title for each. The user will select a icon to select their weapon, the logic will allow the computer to make a random selection and then it will evaluate which player won or if they choose the same thing there is a tie.',
    topics: ['Confetti.js', 'Modules', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Video Player',
    url: 'https://mjlearn13.github.io/video-player/',
    image: video,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/video-player.git',
    desc: 'Video Player is a custom video player with its own custom UI with which we can control it&#39;s functionality.  If we click anywhere on the video we can play or pause. If we hover toward the bottom our controls UI will load.  We have a mute and unmute button and can drag the volume to different levels. We have the ability with our progress bar to jump around in the video. It allows us to track the current time in the videos as well as duration and also select a playback speed. We can also toggle full-screen.',
    topics: ['HTML5 Video API', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Animated Nav',
    url: 'https://mjlearn13.github.io/animated-navigation/',
    image: navigation,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/animated-navigation.git',
    desc: 'Animated Nav is a mobile responsive website that has advanced CSS Animations and uses CSS Variables.',
    topics: ['CSS Animations', 'CSS Variables', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Animated Template',
    url: 'https://mjlearn13.github.io/animated-template/',
    image: template,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/animated-template.git',
    desc: 'Animated Template is a website built from a Creative Tim Template. It has been modified adding  text, images and icons.  It has animations using a third party animate on scroll library.  It uses defer, to defer the execution of the script until the very end of html parsing. This allows it to download the JavaScript as soon as possible, not blocking parsing of html. It has some content above the fold which shows up right away, making our website look faster while allowing the JavaScript to load and execute.',
    topics: [
      'Defer attribute on script tag',
      'Tailwind CSS',
      'Animate on Scroll Library',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Infinite Scroll',
    url: 'https://mjlearn13.github.io/infinite-scroll/',
    image: infinite,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/infinite-scroll.git',
    desc: 'Infinite Scroll is a mobile responsive, infinite scroll functionality web app.  A network request is made when we scroll to bottom of page, but it happens before we reach the bottom, so we do not see it. We are seamlessly scrolling forever. The photos are fetched from the unsplash api. We see a description when we hover over an image. If we click on an image we can see that image on the Unsplash website so we can see the author or download the photo if we want.',
    topics: [
      'Fetch',
      'Async/Await',
      'Unsplash API',
      'DOM',
      'Scroll Event Listener',
      'Loading animation with loading.io ',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Joke Teller',
    url: 'https://mjlearn13.github.io/joke-teller/',
    image: joke,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/joke-teller.git',
    desc: 'Joke Teller is an animated gif robot that will tell you a joke out loud if you ask it to.  It calls a joke api, to get a random joke, then it will pass that to a text to speech api and it will tell us that joke.',
    topics: [
      'Fetch',
      'Async/Await',
      'Joke API',
      'Text-to-Speech API',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Bookmark',
    url: 'https://mjlearn13.github.io/bookmark-app/',
    image: bookmark,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/bookmark-app.git',
    desc: 'Bookmark is a mobile responsive web app that allows users to save bookmarks and be able to click on the links to go to those websites. It has localStorage functionality, allowing users to refresh the page or come back to the page another day and the bookmarks will still be there.',
    topics: ['DOM', 'localStorage', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Custom Countdown',
    url: 'https://mjlearn13.github.io/custom-countdown/',
    image: countdown,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/custom-countdown.git',
    desc: 'Custom Countdown is a mobile responsive web app which allows users to enter a title of something they want to count down to and select or enter the date.  It has a video background and we store the countdown information in local storage, so it allows users to refresh the page or come back to the page another day and the countdown will still be running.',
    topics: [
      'Date object',
      'Timing events setInterval and clearInterval',
      'localStorage',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Form Validation',
    url: 'https://mjlearn13.github.io/form-validation/',
    image: form,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/form-validation.git',
    desc: 'Form Validation builds on HTML form validation with JavaScript to validate our form data on the front-end.  Input fields have a red outline until fields are filled out, at which point the outline turns green. It specifies specific formats for every field, that if not followed will result in red outline. We get a message bellow the register button if passwords do not match.',
    topics: ['DOM', 'Forms', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Basketball Scorecard',
    url: 'https://mjlearn13.github.io/basketball-scorecard/',
    image: basketball,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/basketball-scorecard.git',
    desc: '',
    topics: ['Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Light/Dark Mode',
    url: 'https://mjlearn13.github.io/light-dark-mode/',
    image: mode,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/light-dark-mode.git',
    desc: 'Light Dark Mode is a basic website.  It has custom google fonts, an SVG pattern background from Hero Patterns, a navigation that changes colour as we hover over it and if we click on one of these it will smoothly scroll to that section of the page.  It has illustrations from Undraw that match our primary colour which is orange.  We have a series of buttons as well as a text box and a section with FontAwesome icons that also change colour as you hover over them. If we flip the switch on the light/dark mode it will change to dark mode and an icon of the moon appears and everything will change colour.',
    topics: [
      'CSS Variables',
      'DOM',
      'localStorage',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Music Player',
    url: 'https://mjlearn13.github.io/music-player/',
    image: music,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/music-player.git',
    desc: 'Music Player display all relevant information about the song currently playing. It uses the HTML5 audio api to control stop, start and pause.',
    topics: ['HTML5 Audio API', 'Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Picture In Picture',
    url: 'https://mjlearn13.github.io/picture-in-picture/',
    image: picture,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/picture-in-picture.git',
    desc: 'Picture in Picture is designed for the desktop. Once picture-in-picture support is enabled we get a mini window on the bottom-right side of the screen by default, which we can move around. We then use the screen capture api to select a screen or a portion of a screen to capture in the form of a media stream. We can resize it, move it and it will always stay on top. ',
    topics: [
      'Picture-in-Picture API',
      'Screen Capture API',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Quote Generator',
    url: 'https://mjlearn13.github.io/quote-generator/',
    image: quote,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/quote-generator.git',
    desc: 'Quote Generator is a mobile responsive, random quote generator web app. It makes an asynchronous fetch request to a rest API in order to get the quotes. It uses a loader between prolonged new quote requests, signalling to the user that something is happening behind the scenes.  It has a button that opens Twitter in a new tab allowing user to tweet the quote once they are logged in. ',
    topics: [
      'Fetch',
      'Async/Await',
      'Quote API',
      'Deploying with GitHub Pages',
    ],
  },
  {
    id: nanoid(),
    name: 'Dashboard',
    url: 'https://mjlearn13.github.io/dashboard/',
    image: dashboard,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/dashboard.git',
    desc: '',
    topics: ['Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Lead Tracker',
    url: 'https://mjlearn13.github.io/lead-tracker/',
    image: lead,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/lead-tracker.git',
    desc: '',
    topics: ['Deploying with GitHub Pages'],
  },
  {
    id: nanoid(),
    name: 'Password Generator',
    url: 'https://mjlearn13.github.io/password-generator/',
    image: password,
    type: 'JavaScript',
    github: 'https://github.com/mjlearn13/password-generator.git',
    desc: '',
    topics: ['Deploying with GitHub Pages'],
  },
]

