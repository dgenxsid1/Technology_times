import React from 'react'
import Stories from './components/Stories';
import Search from './components/Search';
import Pagination from './components/Pagination';

const App = () => {

  // const data = useContext(AppContext);


  return (
    <>
    <div> <h1>TECHNOLOGY TIMES
      <h4> Your daily dose of tech news</h4>
    </h1>
    </div>
    <Search/>
    <Pagination/>
    <Stories/>

    </>
  )
}

export default App