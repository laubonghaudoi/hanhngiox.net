import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"
import { css } from "@emotion/core"
import { rhythm } from "../utils/grandViewTypography"
import {
  Button,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

import PageLayout from "../layouts/PageLayout";

export default ({ data }) => {
  console.log(data)
  return (
    <PageLayout>
      <Grid container stackable>
        <Grid.Row>
          <Segment basic>
            <Header as="h1" size="massive">
              <Header.Content>杂谈</Header.Content>
              <Divider hidden />
              <Header.Subheader>
                关于汉语方言的一切
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={11}>
            <Header size="large" as="h2">
              <Header.Content>关于本汉语方言拼音项目的宗旨</Header.Content>
            </Header>
            <Divider hidden />
            <blockquote>
              本项目致力于推广方言拼音输入。为什么要推广方言拼音输入？本文将详细阐明这项事业的动机和理念。
            </blockquote>
            <Button 
              positive
              as={Link}
              to='/blog/mission'>
              读
            </Button>{" "}
            <Divider />

            <Header as="h3" size="large">
              Heading
            </Header>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <Header as="h3" size="medium">
              Sub-heading
            </Header>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <Segment secondary>
              <code>Example code block</code>
            </Segment>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
              malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa.
            </p>
            <Header size="medium">Sub-heading</Header>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod.
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <ul>
              <li>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et.
              </li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
              elit libero, a pharetra augue.
            </p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </li>
              <li>
                Maecenas sed diam eget risus varius blandit sit amet non
                magna.
              </li>
            </ol>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Sed posuere
              consectetur est at lobortis.
            </p>
            <Button basic circular size="huge">
              <a href="#root">Next</a>
            </Button>
            <Divider hidden />
          </Grid.Column>
          <Grid.Column width={4} floated="right">
            <Segment secondary>
              <Header as="h4">杂谈</Header>
              <p>
              本板块将连载各种关于汉语方言拼音的资料和文章，帮助读者了解汉语方言拼音的知识。
              </p>
            </Segment>
            <Header as="h4">Archives</Header>
            <List>
              <List.Item as="a">Septempber 2017</List.Item>
              <List.Item as="a">August 2017</List.Item>
              <List.Item as="a">June 2017</List.Item>
              <List.Item as="a">April 2017</List.Item>
              <List.Item as="a">March 2017</List.Item>
              <List.Item as="a">February 2017</List.Item>
              <List.Item as="a">January 2017</List.Item>
              <List.Item as="a">December 2016</List.Item>
              <List.Item as="a">October 2016</List.Item>
              <List.Item as="a">July 2016</List.Item>
              <List.Item as="a">July 2016</List.Item>
              <List.Item as="a">May 2016</List.Item>
              <List.Item as="a">April 2016</List.Item>
              <List.Item as="a">January 2016</List.Item>
              <List.Item as="a">May 2015</List.Item>
            </List>
            <Header as="h4">Elsewhere</Header>
            <List>
              <List.Item as="a">Github</List.Item>
              <List.Item as="a">Twitter</List.Item>
              <List.Item as="a">Facebook</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`