import React, { useEffect }from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../reactRedux/actions/allActions';

const App = () => {
    const data = useSelector(state => state.productReducer.products)
    const after_update = useSelector(state => state.productReducer.chekout_Product)
    const dispatch = useDispatch();
   
    useEffect(() => {

        if (after_update.length === 0) {
            dispatch(allActions.defaultAction.default_ProductAction())
        }

    }, [dispatch, after_update.length]); 
    
    const Buy_Product = (obj) => {
         dispatch(allActions.buyAction.buy_ProductAction( obj ))
         dispatch(allActions.checkoutAction.checkout_products( obj ))
       
    }
   
    return (
        <Row>
                {
                
                    data.length > 0 ? (

                        data.map((item, index) => {
                            return (

                                <Col xs="auto" lg="auto" md="auto" style={{ margin: "10px" }} key={index}>

                                    <Card style={{ width: '300px' }}>
                                        <Card.Img variant="top" style={{ height: "150px" }} src={item.productImagePath} />
                                        <Card.Body>
                                            <Card.Title>{item.productName}</Card.Title>
                                            <Row>
                                                <Col sm="auto" lg="auto" md="auto"><Card.Text> Price : $ {item.productPrice}</Card.Text></Col>
                                                <Col sm="auto" lg="auto" md="auto"><Card.Text> Category : {item.categoryID}  </Card.Text></Col>
                                                <Col sm="auto" lg="auto" md="auto"><Card.Text> Description :  {item.productDescription}  </Card.Text></Col>
                                            </Row>
                                           
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col sm="auto" style={{ left: "170px" }}>
                                                    <Button variant="primary" id={item.productID} onClick={(e) => Buy_Product(data.filter(x => x.productID === e.target.id))} >Purchase</Button>
                                                </Col>
                                            </Row>
                                           
                                        </Card.Footer>
                                    </Card>
                                </Col>

                            )
                        })
                    ) : (

                            null
                        )

                } 
               
            
        </Row>
   )
}

export default App;

