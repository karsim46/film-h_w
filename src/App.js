import './App.css';
import FilmBox from './containers/FilmBox';
// import ButtonBox from './containers/ButtonBox';

function App() {
  return (
    <>
    <FilmBox/>

    {/* <ButtonBox/> */}

    <form action="https://www.imdb.com/calendar/?region=gb">
            <button>View More for Upcoming Releases >> </button>
        </form>
        </>

  );
}

export default App;
