import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Navbar from './components/navbar/navbar.component';
import BlogList from './pages/blog-list/Blog.list';
import BlogPage from './pages/blog/blog.page';
import Contact from './pages/contact/contact';
import BlogPageService from './pages/service/blog.page.service';
import BlogDetail from "./pages/blog-detail/blog.detail";

const App=()=> {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<BlogPage/>}/>
        <Route exact path='/about' element={<Header/>}/>
        <Route path='/service' element={<BlogPageService/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Contact/>
    </div>
  );
}

export default App;
