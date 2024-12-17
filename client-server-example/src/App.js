// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let [authors, setAuthors] = useState([]);

  let onButtonClick = async () => {
    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:2629/authorsArray",reqOptions);
    let JSOData = await JSONData.json();
    setAuthors(JSOData);
    console.log(JSOData);
  }


  return (
    <div className="App">
      <h1 className='headingOne'>2-TIER-CLIENT-SERVER</h1>
      <button type="button" onClick = { ()=> {
        onButtonClick();
      }}>Click here to get the Books Authors Details!</button>

      <div className='authorsContainer'>
        {authors.map((author,index)=>{
          return <div key={index} className='authorsDiv'>
                    <h2 className='headingTwo'>{author.name}</h2>
                    <img src={author.image} alt={author.name} width="150" />
                    <p><strong>Birth Year:</strong> {author.birthYear}</p>
                    <p><strong>Death Year:</strong> {author.deathYear}</p>
                    <p><strong>Nationality:</strong> {author.nationality}</p>
                    <p><strong>Genres:</strong> {author.genre.join(", ")}</p>
                    <p><strong>Notable Works:</strong> {author.notableWorks.join(", ")}</p>
                    <p><strong>Award:</strong> {author.award}</p>
                    <p><strong>Biography:</strong> {author.biography}</p>
                </div>
        })}
      </div>
    </div>
  );
}

export default App;
