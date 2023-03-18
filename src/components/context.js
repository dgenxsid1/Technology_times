//Context API

//context creation
//provider
//consumer-->lengthy, it is removed

// now we useContext hook
import React,{useContext,useEffect,useReducer} from 'react';
import reducer from './reducer';


let API = "https://hn.algolia.com/api/v1/search?";


const initialState = {
    isLoading: true,
    query:'',
    nbPages:0,
    page:0,
    hits:[]
};


const AppContext = React.createContext();
// to create a provider function 



// const [state,setstate] = useState(initialState);

const AppProvider = ({children})=>{

    
const [state, dispatch] = useReducer(reducer, initialState);
// dispatch will trigger the action method(reducer)


const fetchApiData = async (url)=>{

    dispatch({type: "SET_LOADING" });

    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        dispatch({type:"GET_STORIES",
        payload: {
        hits: data.hits,
        nbPages: data.nbPages,

    }, 
});
    }
    catch(err){
        console.log(err);
    }
};

// search

const searchPost = (searchQuery)=>{
    dispatch({type: "SEARCH_QUERY", payload: searchQuery});
}


// to remove the post

const RemovePost= (post_ID)=>{
    dispatch({type: "REMOVE_POST", payload: post_ID});
}


//pgination

const getNextPage = ()=>{
    dispatch({type: "NEXT_PAGE"});
}

const getPrevPage = ()=>{
    dispatch({type: "PREV_PAGE"});
}

//to call the api function

useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
},[state.query,state.page]);





    return(
        <AppContext.Provider value={{...state, RemovePost,searchPost, getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
        )
    
    
};


//custom hook create

// if we pass hooks inside a componenet/ fxn then it is called custom hook.

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext};

//export default xyz, we cant write this because it is if we wanted to export one thing, since we want to export 2 we will do destructing and pass.