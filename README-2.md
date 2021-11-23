## Technonogies used

- Language Used: **JS**
- Database : **MongoDB**
- Backend : **NodeJS**
- Framework : **ExpressJS**
- Frontend : **EJS, CSS, HTML**
- Deployed Using : **Heroku**

## Approach Taken

First and foremost I created the backend part to get the CRUD operations (GET, POST, PUT, DELETE). 'GET' request for getting the information about the items, 'POST' request for posting new item to the database, 'PUT' request for updating the existing item and 'DELETE' request for deleting the item. And then I created the database containing a collection of all the sample items to display. All 7 routes were taken for a model to make it **RESTful**. After completing the backend part I moved onto the frontend part which was done using EJS. On the frontend part I created the pages show, new, edit, index. The index page shows all the items and also contains a button to add new items. The show page shows the details about single item which also contain buttons for buying, editing and deleting the item. The edit button would redirect to the editing page from where we can edit the information and the edit button from that page would do the editing whereas the buy and delete button would perform the actual operation. And then I created routes for each of those pages connecting them to the backend. Then I styled all those pages using CSS. The files in this project were following the **MVC** file structure. After all the backend and frontend parts were done I deployed the project using the Heroku App.  The app was then live.


## User Stories

* As a user, I want to be able to scroll through a type of an item so that I can choose what fits the best from the whole stock.
* As a fashion designer, I want to be able to see all the types of items in the same place so that I can imagine how the design would look easily for a person.
* As a user, I want to be able to see all the details about the item so that I can see the brand, price and other information and buy accordingly.
* As a regular customer of a brand, I want to be able to communicate with the supplier of that brand so that I can know if I can get other items from that brand.
* As a supplier, I want to be able to upload items using only that app so that I dont have to worry about other third party apps.
* As a supplier, I want to be able to edit the information about the items so that other users can see the actual information about the item at that time.
* As a customer, I want to be able to locate the office of a brand so that I can visit the office and buy from there if I went somewhere near that place.


## Unsolved Problem

- It does not have a **sign up/login in**.
- CSS frameworks has not been used.
- **Google Maps** has not been incorporated
- User cannot upload images directly, they have to give the image address.
- Real time communication is not possible.


## Notes

- GET request should be done on the route **/products/seed** first to set up all the items to show for the project.

- GET request on the route **/new** will render the page for posting new items

- POST request on **/products** will create a new item in the database and redirect to the index page

Example request:

```json
{
  "name": "ABC",
  "description": "Comfortable shoe. Can wear in any type of road.",
  "price": 150,
  "qty": 10,
  "type": "sneakers",
  "img": {
    "src": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-shoes-1612805472.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  }
}
```

- GET request on **/products/:id** will render the show page which shows the details about the item.

- GET request on **/products/:id/edit** will render the edit page for editing the item with the provided id.

- PUT request on **/products/:id** wil update the item with the given id.
  Example request:
  Request on **/products/1**

```json
{
  "qty": 5
}
```

The above request will update the quantity of the item with id 1 to 5.
Similarly we can update other fields (name, description, price, type, img).

* PUT request on **/products/:id/buy** will decrease the quantity of the item with provided id.

* DELETE request on **/products/:id** will delete the item with provided id and redirect to index page.

* The BUY button does not have the function to operate transactions so online payment options like paypal, debit/credit card,etc can be added.

Link to Live app
https://kicksandcaps.herokuapp.com/products