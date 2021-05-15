import React from 'react'
import { Column, H3, Row } from 'cmr-components'
import styled from 'styled-components'

import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

export const Example = ({ name, code, scope, prepend, last }) => (
  <Column paddingBottom={last ? '10' : '60'}>
    <LiveProvider code={code} scope={scope}>
      {name && <H3>{name}</H3>}
      {/* <LiveError style={{ fontSize: 16, lineHeight: 1.3 }} /> */}
      <Row marginBottom='30'>
        <LivePreview />
      </Row>
      <Row bkg='rgb(50, 42, 56)' style={{ borderRadius: '8px' }}>
        <CodeWrapper>
          <Column>
            {prepend && <PrependWrapper>{prepend}</PrependWrapper>}
            <LiveEditor style={{ fontSize: 16, lineHeight: 1.3 }} />
          </Column>
        </CodeWrapper>
      </Row>
    </LiveProvider>
  </Column>
)

const CodeWrapper = styled.div`
  display: inline-flex;
  background-color: rgb(50, 42, 56);
  padding: 10px 20px;
  border-radius: 8px;
`

const PrependWrapper = styled.pre`
  margin: 10px;
  font-size: 16px;
  font-family: monospace;
  color: #ebbf6b;
`

const CodeInner = styled.pre`
  display: inline-flex;
  background-color: rgb(50, 42, 56);
  margin: 10px 20px;
  font-size: 16px;
  font-family: monospace;
  color: #d1949e;
`

export const Code = ({ name, content }) => (
  <Column paddingTop='40' paddingBottom='60'>
    {name && <H3>{name}</H3>}
    <CodeWrapper>
      <CodeInner>{content}</CodeInner>
    </CodeWrapper>
  </Column>
)
