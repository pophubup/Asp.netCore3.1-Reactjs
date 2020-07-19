import React  from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Button } from 'react-bootstrap';

const App = ({ currentPosts, onChange_event, onClick_event }) => {
    

    return (
       
        
        <Table className="table table-bordered">
    
            <Thead>
                <Tr>
                    <Th>Product Name</Th>
                    <Th>Product Price</Th>
                    <Th>Product Quantity</Th>
                    <Th>Total</Th>
                    <Th>Product Description</Th>
                    <Th>Product Imagey</Th>
                    <Th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    currentPosts.length > 0 ? (

                        currentPosts.map((item, index) => {
                            return (

                                <Tr key={index}>
                                    <Td>{item.productName}</Td>
                                    <Td>{item.productPrice}</Td>
                                    <Td><input type="number" className="form-control" value={item.productQuantity} onChange={(e) => { onChange_event(e.target.value, item.productId) }}></input></Td>
                                    <Td>{item.productPrice * item.productQuantity }</Td>
                                    <Td>{item.productDescription}</Td>
                                    <Td><img style={{ width: "100px", height :"100px" }} src={item.productImage}></img></Td>
                                    <Td><Button variant="outline-danger" onClick={() => { onClick_event(item)}}>Delete</Button></Td>
                                </Tr>

                            )
                        })

                    ) : (
                            null
                        )
                }
            </Tbody>
        </Table>
    )
}

export default App;