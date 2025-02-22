import { NavLink } from "react-router-dom"


function Header() {
  return (
    <header> 
        <h1>My Book Shelf</h1>
        <p>A virtual bookshelf to help discover your next great read and to organize your books with ease.</p>
        <div className="links">
            <NavLink to='/' className='link'>Books List</NavLink>
            <NavLink to='/add' className='link'>Add a Book to your shelf</NavLink>
        </div>
    </header>
  )
}

export default Header
