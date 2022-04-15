import React from 'react'
import { app, provider } from '../firebase'
import { signInWithPopup, getAuth } from 'firebase/auth'
import { Container, Row } from 'react-bootstrap'
import { AiOutlineGoogle } from 'react-icons/ai'
import axios from 'axios'
export default function Login() {
  const auth = getAuth()

  const signin = () => {
    signInWithPopup(auth, provider).then(async (user) => {

      console.log(user)
      const { data } = await axios.post(`https://backbooknew.herokuapp.com/user/regis`, { email: user.user.email })
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    // <div>Login</div>
    <Container>
      <Row style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className='shadow'
          style={{
            backgroundColor: '#407EE9', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '200px', color: 'white'
            , border: '1px solid white', padding: '7px 10px', fontSize: '15px', fontFamily: 'serif', fontWeight: 'bold', textAlign: 'center',
            borderRadius: '7px', cursor: 'pointer'
          }} onClick={signin}> <AiOutlineGoogle size={30} style={{ marginLeft: '10px' }} />   Sign in With Google</button>
      </Row>
    </Container>

  )
}
