import React, { useState } from 'react'
import Navbar from './Navbar'
import { Row, Col, Container, Card,Button } from 'react-bootstrap'
import { ImSearch } from 'react-icons/im'
import axios from 'axios'
import book from './images/book.jpg'
import { NavLink } from 'react-router-dom'
import { getAuth ,onAuthStateChanged} from "firebase/auth";

function Home() {
  const [value, setvalue] = useState()
  const [booklist,setbooklist] = useState()
  const auth = getAuth()
  const user = auth.currentUser
  console.log('userrxx', user)
  const search = async () => {
    
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=20`)

    console.log((data))
    setbooklist(data?.items)
    const dataupdate  = await axios.patch(`https://backbooknew.herokuapp.com/user/update`, { email: user.email,key:value })

  }
  return (
    <>
      <div className='home'>
        <Navbar />
        <div className='homemain'>
          <div className='inputdiv'>
            <h2>GOOGLE BOOKS</h2>
            <div className='inputmain'>
              <input placeholder='Search Book' type='text' onChange={(e) => setvalue(e.target.value)} />
              <button onClick={search}><ImSearch /></button>
            </div>
          </div>

        </div>

      </div>
      <Container>
        <Row>
          {
            booklist?.map((v,i)=>{
              return <Col sm={12} md={4} xl={3} className="mt-3" key={i}>
              <Card >
                <Card.Img style={{height:'200px',objectFit:'contain',padding:'10px 0'}} src={v?.volumeInfo?.imageLinks?.thumbnail?v?.volumeInfo?.imageLinks?.thumbnail:book} />
                <Card.Body>
                  <Card.Title style={{fontSize:'18px',fontFamily:'monospace',height:'30px'}}>{v?.volumeInfo?.title?.length>22?`${v?.volumeInfo?.title?.slice(0,22)}...`:v?.volumeInfo?.title}</Card.Title>
                  <Card.Text style={{fontSize:'12px',fontFamily:'monospace',height:'110px',fontWeight:'lighter'}}>
                  {
                    // v?.volumeInfo?.description
                    v?.volumeInfo?.description?.length>180?`${v?.volumeInfo?.description?.slice(0,170)}...`:v?.volumeInfo?.description
                  }
                  </Card.Text>
                  <NavLink to={`/detail/${v?.id}`}>
                  <Button variant="outline-info">More Info</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            })
          }
          
          

        </Row>
      </Container>
    </>
  )
}

export default Home