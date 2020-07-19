import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import Pagination from '../components/share_components/PagationArea'
import TableArea from '../components/sub_components/ProductConsumption_TableArea'
import allActions from '../reactRedux/actions/allActions';


const App = () => {
    const transcations = useSelector(state => state.productReducer.transcation)
    const [activePage, setActivePage] = useState(0)
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPage = currentpage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = transcations.slice(indexOfFirstPage, indexOfLastPage);
    const pageNumbers = [];
    const dispatch = useDispatch()
    for (let i = 0; i < Math.ceil(transcations.length / postsPerPage); i++) {

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
    const [isSorted, setSort] = useState({ "action": "ID", "column": "DESC" })
    const onClick_sort = (action1, column1) => {
        console.log(action1.id)
        switch (action1.id) {
            case "ID":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "ID" }) : setSort({ ...isSorted, action: "ASC", column: "ID" })
                console.log(action1.id)
                if (isSorted.action === "ASC") {
                    transcations.sort((a, b) => {
                        
                        if (a.transcationId > b.transcationId) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {
                        if (a.transcationId < b.transcationId) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }
                break;
            case "Name":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Name" }) : setSort({ ...isSorted, action: "ASC", column: "Name" })

                if (isSorted.action === "ASC") {
                    transcations.sort((a, b) => {
                        
                        if (a.product.productName > b.product.productName) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {
                       
                        if (a.product.productName < b.product.productName) {
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
                    transcations.sort((a, b) => {
                    
                        if (a.product.productPrice > b.product.productPrice) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {
                      
                        if (a.product.productPrice < b.product.productPrice) {
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
                    transcations.sort((a, b) => {
                       
                        if (a.quantity > b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {
                       
                        if (a.quantity < b.quantity) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }
                break;
            case "Amout":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Amout" }) : setSort({ ...isSorted, action: "ASC", column: "Amout" })
                if (isSorted.action === "ASC") {
                    transcations.sort((a, b) => {

                        if (a.amout > b.amout) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {

                        if (a.amout < b.amout) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                }
                break;
            case "Date":
                action1.getAttribute('data-action') === "ASC" ? setSort({ ...isSorted, action: "DESC", column: "Date" }) : setSort({ ...isSorted, action: "ASC", column: "Date" })
                
                if (isSorted.action === "ASC") {
                    transcations.sort((a, b) => {

                        if (a.tracationCreateDate > b.tracationCreateDate) {
                            return -1
                        } else {
                            return 1
                        }
                        return 0
                    })
                } else {
                    transcations.sort((a, b) => {

                        if (a.tracationCreateDate < b.tracationCreateDate) {
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
   
    useEffect(() => {
        console.log(transcations)
        if (transcations.length == 0) {
            dispatch(allActions.defaultTranscation.default_Transcation())
        }
       
    }, [dispatch]);
    return (
        
        <div style={{ maxWidth: "100%" }}>
            <TableArea currentPosts={currentPosts} onClick_sort={onClick_sort} isSorted={isSorted}></TableArea>
            <Row>
                <Pagination pageNumbers={pageNumbers} activePage={activePage} paginate={paginate}></Pagination>
            </Row>
        </div>
        
    )

}

export default App;