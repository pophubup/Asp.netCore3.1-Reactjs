import React, { useState} from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import Pagination from '../components/share_components/PagationArea'
import TableArea from '../components/sub_components/CheckOut_TableArea'
import allActions from '../reactRedux/actions/allActions';

class PostProducts {
    constructor(_ProductId, _ProductName, _ProductPrice, _ProductDescription, _ProductQuantity, _ProductImage, _CategoryId ) {
        this.ProductId = _ProductId
        this.ProductName = _ProductName
        this.ProductPrice = _ProductPrice
        this.ProductDescription = _ProductDescription
        this.ProductQuantity = _ProductQuantity
        this.ProductImage = _ProductImage
        this.CategoryId = _CategoryId
    }
}
const App = () => {

    const transcations = useSelector(state => state.productReducer.chekout_Product)
    const [activePage, setActivePage] = useState(0)
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPage = currentpage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = transcations.slice(indexOfFirstPage, indexOfLastPage);
    const pageNumbers = [];
    const dispatch = useDispatch();

    for (let i = 0; i < Math.ceil(transcations.length / postsPerPage); i++) {

        if (i === 0) {
            pageNumbers.push('<') 
        }
         pageNumbers.push(i+1)
     
    }
    pageNumbers.length !== 0 && pageNumbers.push('>')

    const paginate = (pagenumber) => {
      
        if (pagenumber === ">") {

            if (pageNumbers[pageNumbers.length - 2] >= activePage + 1) {
                setActivePage(activePage + 1)
                setCurrentPage(activePage + 1)
            }
           
        } else if (pagenumber === "<") {

            if (activePage - 1 !== 0) {

                setActivePage(activePage - 1);
                setCurrentPage(activePage - 1);
            } 
          
        } else {

            setActivePage(pagenumber)
            setCurrentPage(pagenumber)

        }
    }
    const onChagneQTY = (val, productId) => {
         dispatch(allActions.editQtyAction.edit_qty_product({ productID: productId, quantity: val }))
        console.log(val, productId)
    }
    async function postData2(data) {
        var arr = [];
        // transcations.map(item => {
        //    return arr.push(new PostProducts(item.productID, item.productName, item.productPrice, item.productDescription, item.quantity, item.productImagePath, item.categoryID ))
        // })
        console.log(transcations)
        // const result = await fetch('http://localhost:5000/api/Home/Add_Transcation_Test', { headers: { 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(arr) })
        // const result2 = JSON.parse(JSON.stringify(await result.json()))
        return transcations;
    }
    const onClick_submitOrder = async (data) => {
        console.log(data)
        var data = await postData2(data); 
       // dispatch(allActions.defaultAction.default_ProductAction())
        //dispatch(allActions.restCheckOutProducts.reset_products())
        var text = '';
        // data.resultMsg.map(msg => {
        //     return text += msg +'\n'
        // })
        //alert(text)
       // window.open(`${data.lineResponseModel.info.paymentUrl.web}`);
    }
    const onClick_DeleteProduct = (product) => {

        dispatch(allActions.editCheckOutList.edit_CheckOutList(product))
    }
    return (
        <div style={{ maxWidth: "100%" }}>
            <TableArea currentPosts={currentPosts} onChange_event={onChagneQTY} onClick_event={onClick_DeleteProduct} ></TableArea>
            <Row>
                <Pagination pageNumbers={pageNumbers} activePage={activePage} paginate={paginate}></Pagination>
                <Col xs={4} md={4} lg={4} style={{ left: "110px" }}>
                    <Button type="submit" variant="primary" onClick={() => { onClick_submitOrder(currentPosts)}} >Check Out!!</Button>
                </Col>
            </Row>
           
        </div>  
    );
}

export default App;