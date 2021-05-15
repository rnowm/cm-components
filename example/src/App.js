import React from 'react'
import { Example, Code } from './components/Example'
import {
  AppWrapper,
  Column,
  Row,
  // Circle,
  Header,
  MainWrapper,
  Content,
  H1,
  H2,
  H3,
  Label,
  P
} from 'cmr-components'
import 'cmr-components/dist/index.css'

const App = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <Header title='CMR Components' />
        <Content>
          <Column paddingAll>
            <Column bkg='white' paddingAll radius='8'>
              <Row marginBottom='30' center>
                <H1>Typography</H1>
              </Row>
              <Example
                prepend="import { H1 } from 'cmr-components';"
                code='<H1>H1</H1>'
                scope={{ H1 }}
              />
              <Example
                prepend="import { H2 } from 'cmr-components';"
                code='<H2>H2</H2>'
                scope={{ H2 }}
              />
              <Example
                prepend="import { H3 } from 'cmr-components';"
                code='<H3>H3</H3>'
                scope={{ H3 }}
              />
              <Example
                prepend="import { Label } from 'cmr-components';"
                code='<Label>Label</Label>'
                scope={{ Label }}
              />
              <Example
                prepend="import { Label } from 'cmr-components';"
                code='<Label color="blue" bold large>Label</Label>'
                scope={{ Label }}
              />
              <Example
                last
                prepend="import { P } from 'cmr-components';"
                code='<P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>'
                scope={{ P }}
              />
            </Column>

            <Column bkg='white' paddingAll radius='8' marginTop='30'>
              <Row marginBottom='30'>
                <H1>Colors</H1>
              </Row>
              {/* <Example
                code='<Circle color="gray" fade="0.5" radius="20">gray/0.05</Circle>'
                scope={{ Circle }}
              /> */}
            </Column>
          </Column>
        </Content>
      </MainWrapper>
    </AppWrapper>
  )
}

export default App
