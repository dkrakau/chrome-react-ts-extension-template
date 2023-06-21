# chrome-react-ts-extension-template

This is a template for building interactive chrome extensions using React with TypeScript and is based on [Himanshu Batra's YouTube](https://www.youtube.com/watch?v=rAZXWkVhCgg&list=PLBS1L3Ug2VVods9GnWbJc__STt9VnrJ9Z&index=1) tutorial series.

## Installation

Clone this repository and install dependencies.
```
git clone https://github.com/dkrakau/chrome-react-ts-extension-template.git
cd chrome-react-ts-extension-template
npm install
```

## Build chrome extension

* Use ```npm run dev``` for development
* Use ```npm run build``` for production

## Load chrome extension

1. Open up chrome browser
2. Open up chrome extensions tab ```chrome://extensions```
3. Enable ```developer mode```
4. Select ```Load unpacked```
5. Choose ```dist``` folder after building

## Version of Node.js, React, Webpack, Chrome API

[Node.js](https://nodejs.org/en) v18.16.0, [React](https://react.dev/) v18.2.0, [Webpack](https://webpack.js.org/) v5.87.0 and [Chrome API](https://developer.chrome.com/docs/extensions/mv3/getstarted/) mv3 was used for this template. To check which version of Node.js is installed on your system, run command below in terminal.
```
node --version
```

## Happy coding!