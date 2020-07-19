import React from 'react';
import { Col, Form, Button, Image } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import Cropper from 'react-easy-crop'

const App = ({ currentRow, onChange_AllEditInput, categories, onChange_fileloaded, imgae, crop, zoom, setCrop, onCropComplete, setZoom, trimImage, showCroppedImage, onClick_SumbitAll_Edit_ADD_products }) => {
    let isCorrectFormat_input;
    if (imgae.isCorrectFormat) {
        isCorrectFormat_input = <Form.File.Input isValid onChange={(e) => onChange_fileloaded(e)} />
    } else if (imgae.isCorrectFormat === false) {
        isCorrectFormat_input = <Form.File.Input isInvalid onChange={(e) => onChange_fileloaded(e)} />
    } else {
        isCorrectFormat_input = <Form.File.Input onChange={(e) => onChange_fileloaded(e)} />
    }
    return (

        <Form>
            <Form.Row>
                <Form.Label column="sm" lg={3} >Name</Form.Label>
                <Col>
                    <Form.Control id="Name" size="sm" type="text" placeholder="Name" value={currentRow.productName} onChange={(e) => { onChange_AllEditInput(e.target) }} />
                </Col>

            </Form.Row>
            <Form.Row>
                <Form.Label column="sm" lg={3}>Quantity</Form.Label>
                <Col>
                    <Form.Control id="Quantity" size="sm" type="number" placeholder="Quantity" value={currentRow.productQuantity} onChange={(e) => { onChange_AllEditInput(e.target) }} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Label column="sm" lg={3}>Price</Form.Label>
                <Col>
                    <Form.Control id="Price" size="sm" type="number" placeholder="Price" value={currentRow.productPrice} onChange={(e) => { onChange_AllEditInput(e.target) }} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Label column="sm" lg={3}>State</Form.Label>
                <Col>
                    <Form.Control id="Categories" size="sm" as="select" value={currentRow.productCategory} onChange={(e) => { onChange_AllEditInput(e.target) }}  >
                        {
                            categories.map((item, index) => {

                                return (
                                    <option key={index} value={item.categoryId}>{item.categoryName}</option>
                                )
                            })

                        }
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Label column="sm" lg={3}>Description</Form.Label>
                <Col>
                    <Form.Control id="Description" size="sm" as="textarea" style={{ resize: "none" }} placeholder="Description" value={currentRow.productDescription} onChange={(e) => { onChange_AllEditInput(e.target) }} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col style={{ marginTop: "10px" }}>
                    <Form.File id="formcheck-api-custom" custom value={currentRow.productImage}>
                        {isCorrectFormat_input}
                        <Form.File.Label data-browse="upload file" style={{ paddingLeft: "150px" }}>
                            {imgae.fileName}
                        </Form.File.Label>
                        <Form.Control.Feedback type="valid">Correct format</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">only accept .png and .jpg file</Form.Control.Feedback>
                    </Form.File>
                </Col>
            </Form.Row>
            <Form.Row style={{ marginTop: "10px", marginBottom:"10px" }}>
                <Col xs={7} sm={7} md={7}>
                    <div >
                        <Cropper
                            image={imgae.src}
                            crop={crop}
                            zoom={zoom}
                            aspect={10 / 10}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                </Col>
                <Col xs={5} sm={5} md={5} >
                    <Image src={trimImage.src} style={{ height: "150px", width: "160px", margin: "10px" }}></Image>
                </Col>

            </Form.Row>
            <Form.Row>
                <Col xs={5} md={5} sm={5}>

                    <label style={{
                        width: '100%',
                        display: 'inline-flex'
                    }}> Zoom :
        
                                <Slider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e, zoom) => setZoom(zoom)}
                            style={{ marginLeft: "15px" }}
                        />
                    </label>

                </Col>
                <Col xs={2} md={2} sm={2}>
                    <Button variant="success" style={{ marginLeft: "15px" }} onClick={() => showCroppedImage()} >Crop</Button>
                </Col>
                <Col xs={4} md={4} sm={4}>
                    <Button variant="primary" type="button" onClick={() => onClick_SumbitAll_Edit_ADD_products()}> Edit Product </Button>
                </Col>
            </Form.Row>


        </Form>

    )
}

export default App;