import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/share_components/PagationArea';
import TableArea from '../components/sub_components/EditProducts_TableArea';
import TableSubmit from '../components/sub_components/EditProducts_TableChangeSubmit';
import FormChange from '../components/sub_components/EditProducts_FormChange';
import { Row, Col, Form, Button } from 'react-bootstrap';
import allActions from '../reactRedux/actions/allActions';
import getCroppedImg from './sub_components/EditProducts_CropImage';

const App = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.productReducer.categories)
    const [imgae, setImgae] = useState({ src: '../images/default.jpg', isCorrectFormat: null, fileName: 'File name' })
    const [trimImage, setTrimImage] = useState({ src: '../images/default.jpg' })
    const [currentRow, setCurrentRow] = useState({productID :"" ,productName : "", productPrice: "", productQuantity: "", productDescription: "", productImage: "", productCategory :"" });
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    ///Table on the right
    const products = useSelector(state => state.productReducer.products)
    const [activePage, setActivePage] = useState(0)
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPage = currentpage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPage, indexOfLastPage);
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(products.length / postsPerPage); i++) {

        if (i === 0) {
            pageNumbers.push('<')
        }
        pageNumbers.push(i + 1)

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
    const [isSorted, setSort] = useState({ "action": "ASC", "column": "ID" })
    const onClick_sort = (action1, column1) => {
        switch (action1.id) {
            case "Name":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Name" }) : setSort({ ...isSorted, action: "ASC", column: "Name" })

                if (isSorted.action === "ASC") {
                    products.sort((a, b) => {

                        if (a.productName > b.productName) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    products.sort((a, b) => {

                        if (a.productName < b.productName) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }


                break;
            case "Price":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Price" }) : setSort({ ...isSorted, action: "ASC", column: "Price" })


                if (isSorted.action === "ASC") {
                    products.sort((a, b) => {

                        if (a.productPrice > b.productPrice) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    products.sort((a, b) => {

                        if (a.productPrice < b.productPrice) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }


                break;
            case "Quantity":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Quantity" }) : setSort({ ...isSorted, action: "ASC", column: "Quantity" })
                if (isSorted.action === "ASC") {
                    products.sort((a, b) => {

                        if (a.quantity > b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    products.sort((a, b) => {

                        if (a.quantity < b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }
                break;
         

        }

    }
    ///////////////////
    const [productChagne_Submit, setproductChange_Submit] = useState({ product : [] });
    const currentPosts_Submit = productChagne_Submit.product;
    const [isSorted_Submit, setSort_Submit] = useState({ "action": "ASC", "column": "ID" })
    const onClick_sort_Submit = (action1, column1) => {
        console.log(action1.id)
        switch (action1.id) {
            case "Name":
                action1.getAttribute('data-action') === "ASC" ? setSort_Submit({ ...isSorted_Submit, action: "DESC", column: "Name" }) : setSort_Submit({ ...isSorted_Submit, action: "ASC", column: "Name" })

                if (isSorted_Submit.action === "ASC") {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.productName > b.productName) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.productName < b.productName) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }


                break;
            case "Price":
                action1.getAttribute('data-action') === "ASC" ? setSort_Submit({ ...isSorted_Submit, action: "DESC", column: "Price" }) : setSort_Submit({ ...isSorted_Submit, action: "ASC", column: "Price" })

                console.log(productChagne_Submit.product)
                if (isSorted_Submit.action === "ASC") {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.productPrice > b.productPrice) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.productPrice < b.productPrice) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }


                break;
            case "Quantity":
                action1.getAttribute('data-action') === "ASC" ? setSort_Submit({ ...isSorted_Submit, action: "DESC", column: "Quantity" }) : setSort_Submit({ ...isSorted_Submit, action: "ASC", column: "Quantity" })
                if (isSorted_Submit.action === "ASC") {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.quantity > b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    productChagne_Submit.product.sort((a, b) => {

                        if (a.quantity < b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }
                break;


        }

    }
    ////////////////////
    const onClick_CurrentRow = (obj) => {     
        let imageName = obj.productImage.split('/')
        setImgae({ ...imgae, src: obj.productImage, fileName: imageName[2]})
        setTrimImage({ ...trimImage, src: obj.productImage  })
        setCurrentRow({ ...currentRow, productId: obj.productId, productName: obj.productName, productQuantity: obj.productQuantity, productPrice: obj.productPrice, productDescription: obj.productDescription, productImage: obj.productImage, productCategory: obj.productCategory })
    } 
    const onChange_AllEditInput = (e) => {
        switch (e.id) {
            case "Name":
                setCurrentRow({ ...currentRow, productName: e.value})
                break;
            case "Quantity":
                setCurrentRow({ ...currentRow, productQuantity: e.value })
                break;
            case "Price":
                setCurrentRow({ ...currentRow, productPrice: e.value })
                break;
            case "Categories":
                setCurrentRow({ ...currentRow, productCategory: e.value })
                break;
            case "Description":
                setCurrentRow({ ...currentRow, productDescription: e.value })
                break;
        }
    }
    const onClick_SumbitAll_Edit_ADD_products = () => {
        let isduplicated = productChagne_Submit.product.filter(x => x.productId === currentRow.productId);
        
        if (isduplicated.length == 0) {
            var productModel = [{
                productId: currentRow.productId,
                productName: currentRow.productName,
                productQuantity: currentRow.productQuantity,
                productPrice: currentRow.productPrice,
                category: currentRow.productCategory,
                categoryId: currentRow.productCategory.categoryId,
                productDescription: currentRow.productDescription,
                productImage: trimImage.src
            }]
           
            setproductChange_Submit({ ...productChagne_Submit, product: productChagne_Submit.product.concat(productModel) })
        } else {
            alert("Item is changed already")
        }
       
       
    }
    const onClick_deleteSumbitObject = (obj) => {
        
        
        let removeItem = productChagne_Submit.product.filter(x => x.productId !== obj.productId);
        setproductChange_Submit({ ...productChagne_Submit, product: removeItem })
        
    }
    const onChange_fileloaded = (e) => {
 
        if (e.target.files[0].type === "image/png" || e.target.files[0].type === "image/jepg") {
            const reader = new FileReader();
            let filename = `${e.target.files[0].name}`; 
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                let dataURL = reader.result;
                setImgae({ ...imgae, src: dataURL, isCorrectFormat: true, fileName: filename  })
                
            };
        } else {
            setImgae({ ...imgae, src: '../images/default.jpg', isCorrectFormat: false, fileName: 'upload file'})
        } 
    }
    const showCroppedImage =  async () => {
        try {
            console.log(croppedAreaPixels)
            const croppedImage = await getCroppedImg(
                imgae.src,
                croppedAreaPixels,
                
            )
           
            setTrimImage({ ...trimImage, src: croppedImage })
            
        } catch (e) {
            console.error(e)
        }
    }
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    async function postData2(Input_products) {
        const result = await fetch('http://localhost:50424/api/Default/AddorEdit_Products', { headers: { 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(Input_products) })
        const result2 = JSON.parse(JSON.stringify(await result.json()))
        return result2;
    }
    const onClick_SumbitChanges = async () => {
       
        const result = await postData2(currentPosts_Submit)
        let content = '';
        result.map((item) => {
            content += item +"\n"
        })
        alert(content)
    }
    useEffect(() => {
        dispatch( allActions.defaultCategories.default_CategoryAction());
        dispatch(allActions.defaultAction.default_ProductAction())
    }, [dispatch])
    return (
        <div style={{ maxWidth: "100%", marginTop: "10px" }}>
            <Row>
                <Col xs="9" sm="9" lg="9" md="9">
                </Col>
                <Col xs="2" sm="2" lg="2" md="2">
                    <Button variant="success" type="submit" style={{ marginBottom: "10px" }}>
                        Add New Product </Button>

                </Col>
            </Row>
            <Row>

                <Col xs="7" sm="7" lg="7" md="7" style={{marginLeft: "5px"}} >
                    <TableArea currentPosts={currentPosts} onClick_sort={onClick_sort} isSorted={isSorted} onClick_CurrentRow={onClick_CurrentRow}></TableArea>
                    <Pagination pageNumbers={pageNumbers} activePage={activePage} paginate={paginate}></Pagination>
                  
               </Col>
             
                <Col xs="4" sm="4" lg="4" md="4" >
                    <FormChange
                        currentRow={currentRow}
                        onChange_AllEditInput={onChange_AllEditInput}
                        categories={categories}
                        onChange_fileloaded={onChange_fileloaded}
                        imgae={imgae}
                        crop={crop}
                        zoom={zoom}
                        setCrop={setCrop}
                        onCropComplete={onCropComplete}
                        setZoom={setZoom}
                        trimImage={trimImage}
                        showCroppedImage={showCroppedImage}
                        onClick_SumbitAll_Edit_ADD_products={onClick_SumbitAll_Edit_ADD_products}
                    ></FormChange>
                </Col>
            </Row>
            <Row>
                <Col xs={11} md={11} md={11}>
                    <Button variant="success"  style={{
                        position: "relative",
                        left: "530px",
                        marginBottom: "5px"
                    }} onClick={() => onClick_SumbitChanges()} >Submit changes</Button>
                </Col>
                <Col xs={11} lg={11} md={11} >
                    <TableSubmit currentPosts={currentPosts_Submit} onClick_sort_Submit={onClick_sort_Submit} isSorted={isSorted_Submit} onClick_deleteSumbitObject={onClick_deleteSumbitObject}></TableSubmit>
                </Col>
            </Row>
           
        </div>
    )
}

export default App;