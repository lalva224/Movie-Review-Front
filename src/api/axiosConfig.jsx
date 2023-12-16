import axios from 'axios'

//export axios object 
// default is to export 1 object, rather than explicitly mentioning it.

export default axios.create(
    {
        baseURL : "http://localhost:8080",
        headers: {
            "ngrok-skip-browser-warning":"true"

        }
    }
);

//Where TF is that baseURL coming from??

// {} is for key value pair
//ngrok - to expose local server to internet!
//ngrok skip browser warning- to supress the security warnings that may come