import React,{useEffect} from 'react';
import { useGlobalContext } from './context';

const Stories = () => {

    const {hits,nbPages,isLoading, RemovePost} = useGlobalContext();

    // let isLoading = true;

    // // let API = "https://hn.algolia.com/api/v1/serach?query=html";
    // let API = "https://hn.algolia.com/api/v1/search?query=html";

    // const fetchApiData = async (url)=>{
    //     try{
    //         const res = await fetch(url);
    //         const data = await res.json();
            
    //         console.log(data);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }


    // useEffect(()=>{
    //     fetchApiData(API);
    // });

    if(isLoading){
        return( 
        <>
        <h1>Loading...</h1>
        </>
        )
    }


  return (
    <>
    <div className = "stories-div">
    {hits.map((curPost)=>{

        const {title, author, objectID, url, num_comments} = curPost;

        return( 
        <>
        <div className = "card">
            <h2>{title}</h2>
            <p>
                By <span>{author}</span> | <span> {num_comments}</span> comments
            </p>
            <div className = "card-button">
                <a href = {url} target = "_blank">
                    Read More 
                </a>
                <span> </span>
                <a href = "#" onClick = {() => RemovePost(objectID)}>Remove</a>
            </div>
        </div>
        </>
        );
    })}
    </div>
    </>
  );
};

export default Stories;