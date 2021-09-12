import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { Component } from "react";

class LatestRelease extends Component {

    state = {
        book : this.props.horror
    }

    render(){
    return (
        <Container>

            <Button variant="danger"
             onClick = { () =>{
                this.setState({
                    book : this.props.scifi
                })

             }
                 
             }
            >scifiy</Button>
            <Button variant="warning"
            onClick = { () =>{
                this.setState({
                    book : this.props.romance
                })

             }
                 
             }
            >horror</Button>
           
            <Row>
                {this.state.book.slice(0,25).map(ele => {
                  return  <Col className='my-2 no-gutters' sm={6} md={4} lg={3}  >
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.img} className='img-fluid' style ={{height:'25rem', objectFit:'cover'}}/>
                        <Card.Body style ={{height:'10rem', backgroundColor:'teal'}} >
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                                 ${ele.price}
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    )
}
}

export default LatestRelease