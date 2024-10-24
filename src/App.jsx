
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/blogs/blogs'
import Header from './Components/Header/Header'


function App() {

  const [bookmark, setBookmark] = useState([])
  const [redingTime, ReadingTime] = useState(0)

  const handelClickBtn = blog => {
    const newBookMarks = [...bookmark, blog]
    setBookmark(newBookMarks);
  }

  const handelReadingTime = (time)=>{
    const read = redingTime + time
    ReadingTime(read)
  }


  return (
    <div className='w-10/12 mx-auto'>
     

      <Header></Header>
      <main className='flex '>
        <Blogs 
        handelClickBtn = {handelClickBtn}
        handelReadingTime = {handelReadingTime}
   
        ></Blogs>
        <Bookmarks 
        bookmark = {bookmark}
        redingTime = {redingTime}
        ></Bookmarks>
      </main>    
    </div>
  )
}

export default App
