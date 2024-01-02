import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'; 
import InputGroup from 'react-bootstrap/InputGroup'; 
import FormControl from 'react-bootstrap/FormControl'; 


export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageBoddy, setMessageBody] = useState('');

  const supportHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

   const submitHandler = () => {
    if (messageBoddy.trim()){
        alert(`Error plese enter the massege `);
    }
    else{
        
    }
   };

  return (
    <div className='chatbox'>
      {!isOpen ? (
        <Button onClick={supportHandler} variant="primary">
          ChatBox
        </Button>
      ) : (
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <strong>Support box</strong>
              </Col>
              <Col>
                <Button
                  className='btn-s btn-secondary'
                  type='button'
                  onClick={closeHandler}
                >
                  Close
                </Button>
              </Col>
            </Row>
            <hr />
            <ListGroup>
              <ListGroup.Item action href="#link1">
                This is some text within a list group item.
              </ListGroup.Item>
            </ListGroup>
            <form  onSubmit={submitHandler}>
                <InputGroup  className='col-6'>
                    <FormControl  value={ messageBoddy}
                        onChange={(e) => setMessageBody (e.target.value)}
                        type='text'
                        placeholder='Message body'>
                        
                    </FormControl>
                    <Button type='submit' variant='primary'>
                        send
                    </Button>
                </InputGroup>

            </form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
