import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import BlogPage from './pages/blog/blog.page';
import BlogPageService from './pages/service/blog.page.service';

const App=()=> {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<BlogPage/>}/>
        <Route path='/service' element={<BlogPageService/>}/>
      </Routes>
    </div>
  );
}

export default App;
