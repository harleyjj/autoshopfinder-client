# Auto Shop Finder

This app allows Auto Shops to list themselves in a database for car owners to find them.  Auto Shops can create a user account by registering and submit their shop's contact information and services offered.  Car owners can see a list of the shops available, and click on the shop name to get more information about the shop.

The app is deployed [here](https://polar-lake-59245.herokuapp.com/)

The server side is deployed as well and is hosted in this [repository](https://github.com/harleyjj/autoshopfinder-server)

# User Stories (Auto Shop Customers, Auto Shops)

* The landing page is where users can decide whether they want to find an autoshop or be listed.

[landing page](./src/images/screenshots/1.png?raw=true "Landing Page")

## Auto Shop Customers

*

## Folder Structure

The client side of the app is organized like this:

```
client/
  README.md
  node_modules/
  package.json
  package-lock.json
  static.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    config.js
    index.css
    index.js
    local-storage.js
    registerServiceWorker.js
    services.js
    store.js
    validators.js
    actions/
    components/
    images/
    reducers/
```

The app uses Redux, so the store is where the states are kept, with React components manipulating the state through actions, kept in the actions folder, where actions are used to update the state in reducers, kept in the reducers folder.  All react components are kept in the components folder.

## Built With

* [React.js](https://reactjs.org/) - The web framework used
* [Node.js](https://nodejs.org/en/) - The server framework used
* [PostgreSQL](https://www.postgresql.org/) - The database used

## Authors

* **Harley Jackson** - *Initial work* - [harleyjj](https://github.com/harleyjj)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* ReadMe Template by [PurpleBooth](https://github.com/PurpleBooth)
* CSS Template from [Template Monster](http://www.templatemonster.com/free-templates/free-website-template-car-business-jquery-slider.php)
* Server starter code by [Thinkful](http://www.thinkful.com)
* Accordion from React Responsive Accordion (https://www.npmjs.com/package/react-responsive-accordion)
