
import './App.css'
import Nav from "./components/Nav/index.jsx";
import AuthButtons from "./components/AuthButtons/index.jsx";
import Header from "./components/Header/index.jsx";

function App() {


  return (
      <div className='grid grid-cols-5'>
          <Nav />
          <main className='col-span-4 bg-cyan-50 px-12 py-6'>
              <AuthButtons />
              <Header />
          </main>
      </div>)
}

export default App
