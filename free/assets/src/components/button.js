import moment from 'moment-timezone'
import React from 'react'
import { Container, Grid, Icon, Button } from 'semantic-ui-react'
import { STATUS_URL, RUN_URL } from './url'





const ButtonFunction = () => {

 
  const handlerOnStart = () => {
    console.log('MonteCarlo handlerOnStart : ')

    moment.tz.setDefault('Europe/Lisbon');

    const payload = {
      'status': 'S',
      'start': moment(Date.now()).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
 
    const execution_id = 1
    
    // fetch(`${STATUS_URL}${execution_id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })
    //   .then(response => {
    //     console.log('validateResponse Response', response, response.ok, response.statusText)
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json()
    //   })
    //   .catch(error => {
    //     console.log('request Error : ', error);
    //   })
  }


  const handlerOnStop = () => {
    console.log('MonteCarlo handlerOnStop : ')
    moment.tz.setDefault('Europe/Lisbon');

    const payload = {
      'status': 'C',
      'end': moment(Date.now()).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
    const execution_id = 1

    // fetch(`${STATUS_URL}${execution_id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })
    //   .then(response => {
    //     console.log('validateResponse Response', response, response.ok, response.statusText)
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json()
    //   })
    //   .catch(error => {
    //     console.log('request Error : ', error);
    //   })
  }

 return (
    <>
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column width={1}>
          </Grid.Column>  
          <Grid.Column width={6}>
            <Container fluid text style={{ marginLeft: '40px', marginTop: '50px' }}>

              <Button color="teal" onClick={handlerOnStart}>
                Start
                <Icon name='play' style={{ paddingLeft: '10px' }}></Icon>
              </Button>
              <Button color="teal" onClick={handlerOnStop}>
                Stop
                <Icon name='stop' style={{ paddingLeft: '10px' }}></Icon>
              </Button>
            </Container>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
    </>
  )
}

export default ButtonFunction;  