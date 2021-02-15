import React from 'react';
import './Tabs.css';
import { Tab, Col, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Tabs() {
  const history = useHistory()
  return (
    <div className="tabs">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Col>
          <Col sm={3}>
            <Nav variant="pills" className="flex-Row">
              <Nav.Item onClick={() => { history.push('/browse-job') }}>
                <Nav.Link eventKey="first">Freelancer</Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => history.push('/post-Job')}>
                <Nav.Link eventKey="second">Hirer</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <span className='tab'>
                  <h4><Link to="/browse-job">Browse Jobs</Link></h4>
                  <h4><Link to="/proposals">Proposals</Link> </h4>
                  <h4><Link to="/contract">Contracts</Link> </h4>
                </span>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <span className='tab'>
                  <h4><Link to="/post-Job">Post Job</Link></h4>
                  <h4><Link to="/Hiproposals">Proposals</Link> </h4>
                  <h4><Link to="/Hicontract">Contracts</Link> </h4>
                </span>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Col>
      </Tab.Container>
    </div>
  )
}

export default Tabs