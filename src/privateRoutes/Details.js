import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Col, Container,Row,Button } from 'react-bootstrap'
import book from './images/book.jpg'
import { useParams } from 'react-router'
function Details() {
    const [bookdetails,setbookdetails] = useState()
    const {id} = useParams()
    useEffect(()=>{
        if(id){
            detail()
        }
      
    },[id])
   
    const detail = async () => {
      const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      console.log((data))
    //   setbooklist(data?.items)
    setbookdetails(data)
  
    }
  return (
    <div className='detail'>
        <Navbar/>
        <Container className='mt-3'>
            <Row>
                <Col sm={12} md={4} xl={3} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={bookdetails?.volumeInfo?.imageLinks?.thumbnail?bookdetails?.volumeInfo?.imageLinks?.thumbnail:book} className="img-fluid" />

                </Col>
                <Col sm={12} md={8} xl={9}>
                   <h2 className='title'>{bookdetails?.volumeInfo?.title}</h2>
                   <h2 className='subtitle'>{bookdetails?.volumeInfo?.subtitle}</h2>
                   <p style={{fontWeight:'bold'}} >Authors: {bookdetails?.volumeInfo?.authors?.map((v)=>{
                       return <span style={{fontWeight:'lighter'}}>{v},</span> 
                   }  )}</p>
                   {/* publishedDatepublisher */}
                   <p style={{fontWeight:'bold'}}>Published Date :<span style={{fontWeight:'lighter'}}>{bookdetails?.volumeInfo?.publishedDate}</span>  </p>
                   <p style={{fontWeight:'bold'}}>Publisher :<span style={{fontWeight:'lighter'}}>{bookdetails?.volumeInfo?.publisher}</span>  </p>
                   <p style={{fontWeight:'bold'}}>Page Count :<span style={{fontWeight:'lighter'}}>{bookdetails?.volumeInfo?.pageCount}</span>  </p>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                   <Button variant="outline-info" href= {`https://books.google.co.in/books?id=${id}&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false`} >Preview</Button>
                   <Button variant="outline-info" href={bookdetails?.volumeInfo?.infoLink} className='ml-3'>More Info</Button>
                   </div>

                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h2 className='descrip'>Description</h2>
                    <p>{bookdetails?.volumeInfo?.description}</p>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Details