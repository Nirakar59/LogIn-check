import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'



const Navbar = () => {

    const [Name, setName] = useState("Nirakar")

    const changeHandler = (e) => {
        setName(e.target.value)
    }
const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
console.log(user);

  return (
    <div>
      <nav>
        <div className="logo">
          {isAuthenticated && <h2>Hello {user.name} </h2>}
            <img src="" alt="logo" />
        </div>
        <ul>
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
            <li className="item">Services</li>
            {/* <li className="item"></li> */}
        </ul>
        <div className='search&login'>

        <input type="text" placeholder='Search ' onChange={changeHandler} value={Name}/>
        {isAuthenticated? 
        (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>):
        (
            <button onClick={() => loginWithRedirect()}>Log In</button>

    )
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
