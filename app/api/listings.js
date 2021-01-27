import client from './client';

//save the common endpoint to be able to change in one place
const endpoint = '/listings';

//function to get all the listings from server
const getlistings = () => client.get(endpoint);

//function to post a listing to the server
const addListing = (listing) => {
  //create a new formData object to store the listing object in the form type
  const data = new FormData();

  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  );

  //if the listting has a location associated to it set add it to the data
  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getlistings,
};
