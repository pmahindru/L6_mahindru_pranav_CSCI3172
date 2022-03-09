import './css/App.css';
import React from 'react';
import Button from './Components/Button.js';
import Description from './Components/description';

function App() {
  // there are 17 element in the blogs for now
  const array = ['Artifical Intelligence', 'Data Structure and Algorithms', 'Web Centric Computing', 'Network Security', 'Ethics', 'Server Side Scripting', 'Mobile Computing', 'Advance Web Services', 'Web Intelligence', 'Cloud Computing', 'Network and Communication', 'Operating System', 'Cryptography', 'Web Development', 'Software Development', 'Database System','Maths']
  return (
    <>
    <main>

      {/* name of the page  */}
      <h1 className="App"> Blog </h1>

      <h2 className="App"> Here are some Information about the Computer Science </h2>
      <h4 className="App"> I used Dummy text in the description </h4>

      {/* blog name, description and date posted */}
      <div className='blog'>
        {
          /* 
            showing blog here using map.
          */
        }
        {
          array.map((name,i)=> {
            return(
              <>
                {/* start from 1 index to n+1 */}
                <Button name={name} hideDescription={i+1}/>
                <br/>
                <Description blogid={i+1} />
                <br/>
              </>
            );
          })
        }

      </div>

    </main>

    <footer>
        @CopyRight &nbsp; PRANAV MAHINDRU &nbsp; 2022
    </footer>
    </>
  );
}

export default App;
