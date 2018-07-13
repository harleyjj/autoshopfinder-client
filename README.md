# Auto Shop Finder

This app allows Auto Shops to list themselves in a database for car owners to find them.  Auto Shops can create a user account by registering and submit their shop's contact information and services offered.  Car owners can see a list of the shops available, and click on the shop name to get more information about the shop.

The app is deployed [here](https://polar-lake-59245.herokuapp.com/)

The server side is deployed as well and is hosted in this [repository](https://github.com/harleyjj/autoshopfinder-server)

# User Stories (Auto Shop Customers, Auto Shops)

* The landing page is where users can decide whether they want to find an autoshop or be listed.

![landing page](./src/images/screenshots/1.png?raw=true "Landing Page")

## Auto Shop Customers

* A shop customer can select "I'm looking for an autoshop" 

![landing page-1](./src/images/screenshots/2.png?raw=true "Landing Page")

* The list of shops hosted in the database are displayed, with the details for the first one open by default

![shop list](./src/images/screenshots/3.png?raw=true "Shop List")

* The customer can click another autoshop's name to see those details instead 

![shop list-1](./src/images/screenshots/4.png?raw=true "Shop List")

* How the list looks with all shop details collapsed

![shop list-2](./src/images/screenshots/5.png?raw=true "Shop List")

* The Auto Shop Finder Logo at the top can be clicked any time to go back to the landing page.

## Auto Shops

* An autoshop can select "I am an autoshop" 

![landing page-2](./src/images/screenshots/6.png?raw=true "Landing Page")

* The autoshop rep can log in if they have an account or click "register"

![login page](./src/images/screenshots/7.png?raw=true "Login Page")

* If the autoshop wants to register to list their autoshop, it can be done on the Registration page, which will create a new autoshop entry upon successful form submission.

![registration page](./src/images/screenshots/8.png?raw=true "Registration Page")

* Upon login, the autoshop is brought to the dashboard, which features a form to update their information.  The form is pre-populated with their information from the database and requires them to be authenticated.

![autoshop dashboard](./src/images/screenshots/9.png?raw=true "Autoshop Dashboard")

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
