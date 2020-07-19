
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const App = ({ currentPosts, onClick_sort, isSorted }) => {
    let IDComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'ID') {
        IDComponment = <img id={"ID"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='ID ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'ID') {
        IDComponment = <img id={"ID"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='ID DESC' />;
    } else {
        IDComponment = <img id={"ID"} data-action={"DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/updownArrow.png" style={{
           width: "10 %", height: '5%',
           marginLeft: '5px',
           marginBottom: '5px' }} alt='ID DESC' />;
    }
    let NameComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Price') {
        NameComponment = <img id={"Price"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Price ASC' /> ;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Price') {
        NameComponment = <img id={"Price"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Price DESC' />;
    } else {
        NameComponment = <img id={"Price"} data-action={"DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='Price DESC' />;
    }
    let QuantityComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Quantity') {
        QuantityComponment = <img id={"Quantity"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Quantity ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Quantity') {
        QuantityComponment = <img id={"Quantity"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Quantity DESC' />;
    } else {
        QuantityComponment = <img id={"Quantity"} data-action={"DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='Quantity DESC' />;
    }
    let AmoutComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Amout') {
        AmoutComponment = <img id={"Amout"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Amout ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Amout') {
        AmoutComponment = <img id={"Amout"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Amout DESC' />;
    } else {
        AmoutComponment = <img id={"Amout"} data-action={"DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='Amout DESC' />;
    }
    let DateComponment;
    if (isSorted.action === "ASC" && isSorted.column === 'Date') {
        DateComponment = <img id={"Date"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/up-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Date ASC' />;
    } else if (isSorted.action === "DESC" && isSorted.column === 'Date') {
        DateComponment = <img id={"Date"} data-action={isSorted.action === "ASC" ? "ASC" : "DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/down-arrow.png" style={{ width: "10 %", height: "10%" }} alt='Date DESC' />;
    } else {
        DateComponment = <img id={"Date"} data-action={"DESC"} onClick={(e) => { onClick_sort(e.target) }} src="../images/updownArrow.png" style={{
            width: "10 %", height: '5%',
            marginLeft: '5px',
            marginBottom: '5px'
        }} alt='Date DESC' />;
    }
    return (


        <Table className="table table-bordered">

            <Thead>
                <Tr>
                    <Th>Transcation ID {IDComponment}
                    </Th>
                    <Th>Product Price  {NameComponment}
                    </Th>
                    <Th>Quantity  {QuantityComponment}
                    </Th>
                    <Th>Amout{ AmoutComponment }
                    </Th>
                    <Th>Tracation Create Date { DateComponment }
                    </Th>
                </Tr>
            </Thead>
            <Tbody>

                {
                    currentPosts.length > 0 ? (


                        currentPosts.map((item, index) => {

                            return (

                                <Tr key={index}>
                                    <Td>{item.transcationId}</Td>
                                    <Td>$ {item.product.productPrice}</Td>
                                    <Td>{item.quantity}</Td>
                                    <Td>$ {item.amout}</Td>
                                    <Td>{item.tracationCreateDate}</Td>
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