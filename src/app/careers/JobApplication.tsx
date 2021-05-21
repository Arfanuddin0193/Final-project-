import React, { useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap'
import './careers.css'

function JobApplication() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <section>
            <div className="jobTitle row p-3 border-bottom border-dark">
              <div className="col-md-10">
                  <h4 className="">Job Title</h4>
              </div>
              <div className="col-md-2">
              <Button className="shadow" onClick={() => setLgShow(true)}>Apply</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
 
 <Form.Group>
   <Form.File id="exampleFormControlFile1" label="Upload CV" />
 </Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
 <Form.Label className="text-danger font-weight-bold">Write a short summary about yourself.</Form.Label>
 <Form.Control as="textarea" rows={3} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
 <Form.Label className="text-danger font-weight-bold">Why did you choose this line of work?</Form.Label>
 <Form.Control as="textarea" rows={3} />
</Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
 <Form.Label className="text-danger font-weight-bold">What are your expectations from your employers overall?</Form.Label>
 <Form.Control as="textarea" rows={3} />
</Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
 <Form.Label className="text-danger font-weight-bold">If you had to solve a worldly problem in your line of work. How would you solve it?</Form.Label>
 <Form.Control as="textarea" rows={3} />
</Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
 <Form.Label className="text-danger font-weight-bold">Which programming language do you prefer and why?</Form.Label>
 <Form.Control as="textarea" rows={3} />
</Form.Group>

<Button variant="primary" type="submit">
 Submit
</Button>
</Form>
        </Modal.Body>
      </Modal>
              </div>
            </div>
        </section>
    )
}

export default JobApplication
