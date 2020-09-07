Hi, you can view a demo of this slideshow at milicas.se

The code is based on https://codepen.io/alexdevero/pen/rzqxpG?editors=0110

I tweeked it to my needs and design. Why reinvent the wheel?
Also my memory is not the best, remembering syntax is my darkside. Google is my salvation and damnation.
I'm pro at reading and finding buggs in the code.

lets begin:
 in src/Components/App.js I import a file carouselSlidesData with classnames with all the background images and send them to a component called Carousel.js.

 In carousel we have 2 onClick (line 24, 42 src/Components/Carousel.js) functions that alters the index on the active slide and change the state. 
 Then pass it to like props to CarouselSlide which gives it classname background__image1, background__image2 or background__image3. Also sets an "active" class that changes between dispay: block/none.

 CarouselLeftArrow and CarouselRightArrow return the arrows icons.

 src/Css/App.scss is alla the style

 on line 49 53 and 58 is where I set the backgorund images from src/Images/

 also it is kind of responsive. Pictures are not the best for mobile.

 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
