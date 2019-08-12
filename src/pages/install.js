import React from "react"
import { 
  Card,
  Divider,
  Grid,
  Message,
  Header,
  Image,
 } from "semantic-ui-react"
import { rhythm } from "../utils/grandViewTypography"
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

          用汉语方言拼音打字
        </Header>
        <p className="lead">
          要实现用家乡话拼音在电脑和手机上打字，需要先安装中州韵系列的输入法。中州韵（Rime）是一个开源的输入法引擎，不同的平台上有以其为核心开发的输入法，例如Windows上的小狼毫，macOS的鼠须管，iOS上的iRime等等。采用中州韵为引擎的输入法和搜狗、微软拼音等输入法相比的最大特点是可以任意自定义输入方案。所以民间各位有识之士纷纷为自己的方言母语编写了对应的拼音方案。本教程旨在手把手教读者用方言拼音打字，总结起来仅有两步：
        </p>
        <ol>
          <li>在电脑或手机上安装中州韵输入法（在Windows上装小狼毫，iOS上装iRime……）</li>
          <li>部署你的方言的拼音方案（复制粘贴两个文件而已）</li>
        </ol>
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