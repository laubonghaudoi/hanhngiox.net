import React from "react"
import {
  Card,
  Divider,
  Grid,
  Icon,
  List,
  Message,
  Header,
  Image,
} from "semantic-ui-react"
import { rhythm } from "../utils/grandViewTypography"
import '../css/install.css'
import InstallPageLayout from "../layouts/InstallPageLayout";

export default () => {
  return (
    <InstallPageLayout>
      <Message positive>
        <Header
          size="huge"
          as="h1"
          color="violet"
          textAlign="right"
          style={{
            display: 'inline-block',
            marginBottom: rhythm(0.5),
          }}>
          用漢語方言拼音打字
        </Header>
        <p className="lead">
          本教程旨在手把手教讀者用方言拼音打字，總結起來僅有兩步：
        </p>
        <List ordered>
          <List.Item>在電腦或手機上安裝中州韻輸入法（在Windows上裝小狼毫，iOS上裝iRime……）</List.Item>
          <List.Item>部署你的方言的拼音方案（複製粘貼兩個文件而已）</List.Item>
        </List>
      </Message>
      <Message info>
          <Icon name='info circle' />
          中州韻（Rime）是一個開源的輸入法引擎，不同的平臺上有以其為核心開發的輸入法，例如Windows上的小狼毫，macOS的鼠須管，iOS上的iRime等等。採用中州韻為引擎的輸入法和搜狗、微軟拼音等輸入法相比的最大特點是可以任意自定義輸入方案。所以民間各位有識之士紛紛為自己的方言母語編寫了對應的拼音方案。
        </Message>
      <Divider horizontal>選擇平臺</Divider>
      <Grid
        columns='equal'
        padded
        stackable
        divided='vertically'
      >
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card href='/install/windows'>
              <Image src='/card/windows.png' wrapped />
              <Card.Content>
                <Card.Header>Windows</Card.Header>
                <Card.Description>
                  以Win 10爲例，安裝小狼毫輸入法並啓用漢語方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/mac'>
              <Image src='/card/apple.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>macOS</Card.Header>
                <Card.Description>
                  以Mac爲例，安裝鼠須管輸入法並啓用漢語方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/linux'>
              <Image src='/card/ubuntu.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Linux</Card.Header>
                <Card.Description>
                  以Ubuntu 18.04爲例，安裝ibus-rime並啓用漢語方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Card href='/install/ios'>
              <Image src='/card/ios.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>iOS</Card.Header>
                <Card.Description>
                  以iOS爲例，安裝iRime輸入法並啓用漢語方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/android'>
              <Image src='/card/android.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Android</Card.Header>
                <Card.Description>
                  以Android爲例，安裝同文輸入法並啓用漢語方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </InstallPageLayout>
  )
}