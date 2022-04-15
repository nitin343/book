import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
function Navbar() {
    const auth = getAuth()
    async function logout() {
        signOut(auth)

    }
    return (
        <div className='navbar'>
            <h2 onClick={()=>window.history.back()} style={{cursor:'pointer'}}>Book</h2>
            {/* <NavLink to='/details' >Details</NavLink> */}
            <button onClick={logout} >Logout</button>

        </div>
    )
}

export default Navbar