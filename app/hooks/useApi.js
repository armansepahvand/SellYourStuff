export default useApi = ()=>{
     //listings srtate, default set to empty array
  const [listings, setListings] = useState([]);

  //State to check for any server error
  const [error, setError] = useState(false);

  //state to set the loding status
  const [loading, setLoading] = useState(false);

  //function to get the listings from server and set the listings state to the result of the server request
  const loadListings = async () => {

    //set loding status to true before sending the get request
    setLoading(true);
    //sending the http request to server to get the data
    setTimeout(()=>{}, 5000)
    const response = await listingsApi.getlistings();
    //set loading to false after getting the data
    setLoading(false);

    //if response status is not ok set error state to true
    if (!response.ok) return setError(true);

    //if there is no error set error state to false and put the response datat into listings state
    setError(false);
    setListings(response.data);
  };
  
}

