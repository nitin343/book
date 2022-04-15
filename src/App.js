import { getAuth ,onAuthStateChanged} from "firebase/auth";
import React, { useEffect, useState } from "react";
import PrivateRoutes from './privateRoutes/index.js'
import PublicRoutes from './publicRoutes'


function App() {
  const auth = getAuth()
  const user = auth.currentUser
  console.log('userr', user)
  const [ckuser,setckuser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log('lll', user)
        if(user?.emailVerified){
            setckuser(true)
            // dispatch(loadNormalUser(user?.uid))
        }else{
            setckuser(false)
            console.log('nouser')
        }

    })

}, [])
const isUserLoggedIn = ckuser;
  return isUserLoggedIn?<PrivateRoutes/>:<PublicRoutes/>
}

export default App;
