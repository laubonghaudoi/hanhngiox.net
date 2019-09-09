import React, { Component } from 'react';
import { 
  Accordion, 
  Icon,
  Table,
} from 'semantic-ui-react';

const recipe = require('./recipe.json');

export default class RecipeList extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          官話
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["cmn"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          吴语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["wuu"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          莆仙语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["cpx"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          闽南语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["nan"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          客家話
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["hak"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>
        
        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          粤语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Table textalign='center' color='gray' inverted>
            <Table.Header>
              <Table.Row>
                <Table.Cell>語言</Table.Cell>
                <Table.Cell>方案名</Table.Cell>
                <Table.Cell>代號</Table.Cell>
              </Table.Row>
            </Table.Header>
            {recipe["yue"].map((lang) => (
              <Table.Row>
                <Table.Cell>{lang["language"]}</Table.Cell>
                <Table.Cell>{lang["name"]}</Table.Cell>
                <Table.Cell><code>{lang["code"]}</code></Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Accordion.Content>
      </Accordion>
    )
  }
}