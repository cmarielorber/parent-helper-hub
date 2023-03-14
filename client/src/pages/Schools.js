import React, {useEffect, useState} from 'react';
import { Jumbotron, Container, Form, Col, Button } from 'react-bootstrap';

function Schools() {
    const [formState, setFormState] = useState({ searchCity: '', searchState: '', searchZip: '', searchLevel: '' });

    useEffect(() => {
        let apiURL=`https://api.schooldigger.com/v2.0/schools`;
            apiURL+=`?st=CA`;
            apiURL+=`&city=San%20Diego`;
            apiURL+=`&zip=92130`;
            apiURL+=`&level=Elementary`;
            apiURL+=`&appID=${process.env.REACT_APP_API_ID}`;
            apiURL+=`&appKey=${process.env.REACT_APP_API_KEY}`;
        console.log(apiURL);

        // fetch(apiURL, { mode: 'no-cors'})
        // .then((response) => {
        //     console.log("***********response", response);
        //     response.json()
        // })
        // .then((data) => {
        //     console.log("***********data", data);
        //     console.log(data)
        // })
        // .catch((err) => console.error(err));

    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    return (
        <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Schools!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Control
                  name='searchCity'
                  value={formState.searchCity}
                  onChange={handleChange}
                  type='text'
                  size='sm'
                  placeholder='city'
                />
              </Col>
              
            </Form.Row>
            <Form.Row>       
              <Col xs={12} md={3}>
              <Form.Control
                  name='searchState'
                  value={formState.searchState}
                  onChange={handleChange}
                  type='text'
                  size='sm'
                  placeholder='state'
                />
                
              </Col>
              <Col xs={12} md={3}>
                <Form.Control
                  name='searchZip'
                  value={formState.searchZip}
                  onChange={handleChange}
                  type='text'
                  size='sm'
                  placeholder='zip'
                  />
              </Col>
            </Form.Row>
            
            <Form.Row>
            <Col xs={12} md={6}>
                <Form.Control
                  name='searchLevel'
                  value={formState.searchLevel}
                  onChange={handleChange}
                  type='text'
                  size='sm'
                  placeholder='level'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='sm'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    )
}

export default Schools;

