// i update here so this was done by me 

// import App.css
import './css/App.css';

// learn in lab 7 (useState)
import React, { useState } from 'react';

// I made components and json data just to show data here and import those things
import Button from './Components/Button';
import Description from './Components/description';
import {data} from './Components/jsonDataBlog';

function App() {
  // to show the data from the jsonDataBlog
  const [record, setRecord] = useState(data);
  return (
    <>
    <main>
      {/* name of the page and description */}
      <h1 className="App"> Blog </h1>
      <h2 className="App"> Here are some Information about the Computer Science </h2>
      <h4 className="App"> I used Dummy text in the description Click on the name of topic  </h4>
      {
        /* 
          showing blog here using map and use state.
        */
        record.map((Data, index) => 
            <div key={index} className='blog'>
              <Button name={Data.blogName} hideDescription={Data.blogId}/>
              <br/>
              <Description Description={Data.Description} blogid={Data.blogId} />
            </div>
        )
      }
    </main>

    <footer>
        CopyRight &nbsp; &#169;PRANAV MAHINDRU &nbsp; 2022
    </footer>
    </>
  );
}

export default App;
