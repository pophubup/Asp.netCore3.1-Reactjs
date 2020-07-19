import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { Button } from 'react-bootstrap';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../styled/tableSticky.css'
const App = ({ currentPosts, onClick_sort_Submit, isSorted, onClick_deleteSumbitObject }) => {
    let NameComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Name') {
        NameComponment = <img id="Name" data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Name') {
        NameComponment = <img id="Name" data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME DESC' />;
    } else {
        NameComponment = <img id="Name" data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
    }
    let QuantityComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Quantity') {
        QuantityComponment = <img id={"Quantity"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Quantity') {
        QuantityComponment = <img id={"Quantity"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME DESC' />;
    } else {
        QuantityComponment = <img id={"Quantity"} data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
    }
    let PriceComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Price') {
        PriceComponment = <img id={"Price"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Price') {
        PriceComponment = <img id={"Price"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='NAME DESC' />;
    } else {
        PriceComponment = <img id={"Price"} data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
    }

    if (currentPosts.length == 0) {
        NameComponment = <img id="Name" data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
        QuantityComponment = <img id={"Quantity"} data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
        PriceComponment = <img id={"Price"} data-action={"DESC"} onClick={(e) => { onClick_sort_Submit(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='NAME DESC' />;
    }
    return (

        <div className="wrapper">
            <Table className="table table-bordered" >
                <Thead>
                    <Tr>
                        <Th className="thsticky">Name {NameComponment}</Th>
                        <Th className="thsticky">Price {PriceComponment} </Th>
                        <Th className="thsticky">Quantity{QuantityComponment}</Th>
                        <Th className="thsticky">Description</Th>
                        <Th className="thsticky">Image</Th>
                        <Th className="thsticky">Category</Th>
                        <Th className="thsticky"></Th>
                    </Tr>
                </Thead>
                <Tbody >

                    {
                        currentPosts.length > 0 ? (

                            currentPosts.map((item, index) => {
                                return (

                                    <Tr key={index} >
                                        <Td>{item.productName}</Td>
                                        <Td>{item.productPrice}</Td>
                                        <Td>{item.productQuantity}</Td>
                                        <Td>{item.productDescription}</Td>
                                        <Td><img style={{ width: "100px", height: "100px" }} src={item.productImage}></img></Td>
                                        <Td>{item.category.categoryName}</Td>
                                       <Td><Button variant="danger" onClick={() => onClick_deleteSumbitObject({ productId: item.productId, productName: item.productName, productPrice: item.productPrice, productQuantity: item.productQuantity, productDescription: item.productDescription, productImage: item.productImage, productCategory: item.category})}>Delete</Button></Td>
                                    </Tr>

                                )
                            })

                        ) : (
                                null
                            )
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default App;
