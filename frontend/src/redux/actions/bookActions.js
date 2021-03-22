import axios from "axios";
import { 
    CREATE_BOOK_FAIL, 
    CREATE_BOOK_REQUEST, 
    CREATE_BOOK_SUCCESS, 
    FETCH_BOOK_FAIL, 
    FETCH_BOOK_REQUEST, 
    FETCH_BOOK_SUCCESS 
} from "../actionTypes";

const createBookAction = (bookData) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: CREATE_BOOK_REQUEST
            });
    
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
    
            const { data } = await axios.post('api/book/add', bookData, config);
    
            dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data
            });
            
        } catch (error) {

            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: error.response && error.response.data.message
            });
            
        }
    };
};


const fetchBooksAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_BOOK_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.get('api/book',config);

            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };
};


export { createBookAction, fetchBooksAction };