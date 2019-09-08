import React from "react"
import { 
  Card,
  Divider,
  Grid,
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
      <Message>
        <Header 
          size="huge"
          as="h1"
          color="blue"
          textAlign="right"
          style={{
            display:'inline-block',
            marginBottom: rhythm(0.5),
          }}>
          用漢語方言拼音打字
        </Header>
        <p className="lead">
        要實現用家鄉話拼音在電腦和手機上打字，需要先安裝中州韻系列的輸入法。中州韻（Rime）是一個開源的輸入法引擎，不同的平臺上有以其為核心開發的輸入法，例如Windows上的小狼毫，macOS的鼠須管，iOS上的iRime等等。採用中州韻為引擎的輸入法和搜狗、微軟拼音等輸入法相比的最大特點是可以任意自定義輸入方案。所以民間各位有識之士紛紛為自己的方言母語編寫了對應的拼音方案。本教程旨在手把手教讀者用方言拼音打字，總結起來僅有兩步：
        </p>
        <List ordered>
          <List.Item>在電腦或手機上安裝中州韻輸入法（在Windows上裝小狼毫，iOS上裝iRime……）</List.Item>
          <List.Item>部署你的方言的拼音方案（複製粘貼兩個文件而已）</List.Item>
        </List>
      </Message>
      <Divider horizontal>选择平台</Divider>
      <Grid 
        columns='equal' 
        padded 
        stackable 
        divided='vertically'
      >
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card href='/install/windows'>
              <Image src='/windows.png' wrapped />
              <Card.Content>
                <Card.Header>Windows</Card.Header>
                <Card.Description>
                  以Win 10为例，安装小狼毫输入法并启用汉语方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/mac'>
              <Image src='/apple.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>macOS</Card.Header>
                <Card.Description>
                  以Mac为例，安装鼠须管输入法并启用汉语方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/linux'>
              <Image src='/ubuntu.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Linux</Card.Header>
                <Card.Description>
                  以Ubuntu 18.04为例，安装ibus-rime并启用汉语方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Card href='/install/ios'>
              <Image src='/ios.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>iOS</Card.Header>
                <Card.Description>
                  以iOS为例，安装iRime输入法并启用汉语方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href='/install/android'>
              <Image src='/android.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Android</Card.Header>
                <Card.Description>
                  以Android为例，安装同文输入法并启用汉语方言拼音方案
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </InstallPageLayout>
  )
}