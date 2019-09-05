import React, { Component, createRef } from 'react';
import _ from 'lodash';
import {
  Header,
  Icon,
  Image,
  Menu,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

import { Link } from 'gatsby-plugin-transition-link';


const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />;
class Toc extends Component {
  contextRef = createRef();

  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Segment>
          {_.times(10, (i) => (
            <Placeholder key={i} />
          ))}

          <Rail position='right'>
            {_.times(3, (i) => (
              <Placeholder key={i} />
            ))}

            <Sticky context={this.contextRef} pushing>
              <Header as='h3'>Stuck Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Sticky>
          </Rail>
        </Segment>
      </Ref>
    )
  }
}

export default Toc;