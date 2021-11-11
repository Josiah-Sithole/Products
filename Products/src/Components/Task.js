import React from 'react';
//See more about Card components here: https://react-bootstrap.github.io/components/cards/
import Card from 'react-bootstrap/Card';
//See more about Container, Row and Col components here: https://react-bootstrap.github.io/layout/grid/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//The Columns, Container and Card Components are all React-Bootstap components.
function Tasks(props) {
    const listTasks = props.tasks.map((task) => 
       <>
    	<div  className='task'>
      <Col>
          <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src="https://i.pinimg.com/236x/d2/14/82/d21482222a56b235cb3780ea3336d452.jpg" />
            <Card.Body>
                  <Card.Title>
                     {task.task_name} <hr/>
                  </Card.Title>
                  <Card.Text>
                     {task.description1}
                  </Card.Text>
                  <Card.Link href="#">View More</Card.Link>
            </Card.Body>
          </Card>
      </Col>
      </div>

      <div className='task'>
      <Col>
          <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/18/b5/7b/18b57b262344d8c2f17c90d0be606752.jpg" />
            <Card.Body>
                  <Card.Title>
                     {task.task_name2}<hr/>
                  </Card.Title>
                  <Card.Text>
                     {task.description2}
                  </Card.Text>
                  <Card.Link href="#">View More</Card.Link>
            </Card.Body>
          </Card>
      </Col>
      </div>
      <div className='task'>
      <Col>
          <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/a1/d3/22/a1d322f8d2233a531723fadd7b31e330.jpg" />
            <Card.Body>
                  <Card.Title>
                     {task.task_name3} <hr/>
                  </Card.Title>
                  <Card.Text>
                     {task.description}
                  </Card.Text>
                  <Card.Link href="#">View More</Card.Link>
            </Card.Body>
          </Card>
      </Col>
      </div>
       </>
        ); 

        return (
          <Container>
                  <Row>
                      {listTasks}
                  </Row>
          </Container>
    );
}

/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'Tasks'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Tasks;