import React from 'react';
import {  Col } from 'react-bootstrap';


const App = ({ pageNumbers, activePage, paginate }) => {
  
    return (


        <Col xs={8} md={8} lg={8} style={{width :"100px"}}>
                <nav style={{ marginTop: "10px" }}>
                    <ul className="pagination">
                        {

                            pageNumbers.map((number, index) => {
                                return (
                                    <li key={number} className={activePage === number ? "page-item active" : "page-item"} onClick={() => { paginate(number); }} >
                                        <a href="#" key={index} className="page-link">
                                            {number}
                                        </a>
                                    </li>
                                )

                            })



                        }
                    </ul>
                </nav>
            </Col>
     

    )

}

export default App;