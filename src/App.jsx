
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/blogs/blogs'
import Header from './Components/Header/Header'


function App() {

  return (
    <>
     

      <Header></Header>
      <main className='flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>

      
      
    </>
  )
}

export default App
