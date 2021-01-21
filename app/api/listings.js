import client from './client';

//save the common endpoint to be able to change in one place
const endpoint = '/listings';

//function to get all the listings from server
const getlistings = () => client.get(endpoint);

export default {
  getlistings,
};
