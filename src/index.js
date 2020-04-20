import React from 'react';
import ReactDOM from 'react-dom';

function ButtonHello()
{
  return (
    <div>
      <h1>
      Vote for the songs you like!
      </h1>
      <p>If you like a song, click thumbs up. 
        If you dont want to listen to a song, click thumbs down.
      </p>
      <button>
        thumbs up
      </button>
      
      <button>
        thumbs down
      </button>
    </div>
    
  )
}
ReactDOM.render(<ButtonHello />, document.getElementById('root'));

