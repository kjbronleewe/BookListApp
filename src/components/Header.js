import { NavLink } from "react-router-dom"


function Header() {
  return (
    <header> 
        <h1>My Book List</h1>
        <div className="links">
            <NavLink to='/' className='link'>Books List</NavLink>
            <NavLink to='/add' className='link'>Add a Book</NavLink>
        </div>
    </header>
  )
}

export default Header
