import React from "react";
import { Segment, Container, Icon } from "semantic-ui-react";
import './styles/footer.css'

// The /**/ before the function name is important.
// It serves as an annotation to export the react component to use in django.
/**/function FooterReactComponent(props) {
  const footerIcon = 'react'
  const label = 'semantic-ui-react menu example with django_react_components'

  return (
    <>
      <Segment className="footer" inverted>
        <Container className="footer2"  textAlign="center">
          { label }
          <Icon name={ footerIcon } style={{ marginLeft: "5px" }} />
        </Container>
      </Segment>
    </>
  )
}

