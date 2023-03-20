
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Row from './Components/Row/Row'
import requests from './requests'


function App() {

  return (
    <div className="App">
    <Nav /> 
    <Banner />

     <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title ='Trending' fetchUrl={requests.fetchTrending}/>
     <Row title ='Top Rated' fetchUrl={requests.fetchTopRatedMovies}/>
     <Row title ='Action Movies' fetchUrl={requests.fetchActionMovies}/>
     <Row title ='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
     <Row title ='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title ='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
     <Row title ='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
     <Row title ='New Release' fetchUrl={requests.fetchNewRelease}/>
     <Row title ='Kids Movies' fetchUrl={requests.fetchKidsMovies}/>

     <Footer />
    </div>
  )
}

export default App
