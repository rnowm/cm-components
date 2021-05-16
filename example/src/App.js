import React from 'react';
import { Example } from './components/Example';
import {
  AppWrapper,
  Column,
  Row,
  Circle,
  Header,
  MainWrapper,
  Content,
  H1,
  H2,
  H3,
  Label,
  P,
  Button,
  Rate,
  Progress,
  Image,
  Thumbnail,
} from 'cmr-components';
import 'cmr-components/dist/index.css';
import Back from './images/arrow-left.svg';
import Movie from './mocks/movie.json';
import Broken from './mocks/broken_url.json';

const App = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <Header title="CMR Components" />
        <Content>
          <Column paddingAll="40">
            <Column bkg="white" paddingAll radius="8">
              <Row marginBottom="30">
                <H1>Typography</H1>
              </Row>
              <Example
                prepend="import { H1 } from 'cmr-components';"
                code="<H1>H1</H1>"
                scope={{ H1 }}
              />
              <Example
                prepend="import { H2 } from 'cmr-components';"
                code="<H2>H2</H2>"
                scope={{ H2 }}
              />
              <Example
                prepend="import { H3 } from 'cmr-components';"
                code="<H3>H3</H3>"
                scope={{ H3 }}
              />
              <Example
                prepend="import { Label } from 'cmr-components';"
                code="<Label>Label</Label>"
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
                code={`<>
  <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
  <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
</>`}
                scope={{ P }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Colors</H1>
              </Row>
              <Example
                code={`<>
  <Circle bkg="gray" fade="0.05" radius="60">gray/0.05</Circle>
  <Circle bkg="gray" fade="0.1" radius="60">gray/0.1</Circle>
  <Circle bkg="gray" fade="0.2" radius="60">gray/0.2</Circle>
  <Circle bkg="gray" fade="0.3" radius="60">gray/0.3</Circle>
  <Circle bkg="gray" fade="0.4" radius="60">gray/0.4</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="gray" fade="0.5" radius="60">gray/0.5</Circle>
  <Circle bkg="gray" fade="0.6" radius="60">gray/0.6</Circle>
  <Circle bkg="gray" fade="0.7" radius="60">gray/0.7</Circle>
  <Circle bkg="gray" fade="0.8" radius="60">gray/0.8</Circle>
  <Circle bkg="gray" fade="0.9" radius="60">gray/0.9</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="blue" fade="0.3" radius="60">blue/0.3</Circle>
  <Circle bkg="blue" fade="0.5" radius="60">blue/0.5</Circle>
  <Circle bkg="blue"  radius="60">blue</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="gold" fade="0.3" radius="60">gold/0.3</Circle>
  <Circle bkg="gold" fade="0.5" radius="60">gold/0.5</Circle>
  <Circle bkg="gold"  radius="60">gold</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="green" fade="0.3" radius="60">green/0.3</Circle>
  <Circle bkg="green" fade="0.5" radius="60">green/0.5</Circle>
  <Circle bkg="green"  radius="60">green</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="magenta" fade="0.3" radius="60">magenta/0.3</Circle>
  <Circle bkg="magenta" fade="0.5" radius="60">magenta/0.5</Circle>
  <Circle bkg="magenta"  radius="60">magenta</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="red" fade="0.3" radius="60">red/0.3</Circle>
  <Circle bkg="red" fade="0.5" radius="60">red/0.5</Circle>
  <Circle bkg="red"  radius="60">red</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="salmon" fade="0.3" radius="60">salmon/0.3</Circle>
  <Circle bkg="salmon" fade="0.5" radius="60">salmon/0.5</Circle>
  <Circle bkg="salmon"  radius="60">salmon</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="yellow" fade="0.3" radius="60">yellow/0.3</Circle>
  <Circle bkg="yellow" fade="0.5" radius="60">yellow/0.5</Circle>
  <Circle bkg="yellow"  radius="60">yellow</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="purple" fade="0.3" radius="60">purple/0.3</Circle>
  <Circle bkg="purple" fade="0.5" radius="60">purple/0.5</Circle>
  <Circle bkg="purple"  radius="60">purple</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                code={`<>
  <Circle bkg="teal" fade="0.3" radius="60">teal/0.3</Circle>
  <Circle bkg="teal" fade="0.5" radius="60">teal/0.5</Circle>
  <Circle bkg="teal"  radius="60">teal</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
              <Example
                last
                code={`<>
  <Circle bkg="navy" fade="0.3" radius="60">navy/0.3</Circle>
  <Circle bkg="navy" fade="0.5" radius="60">navy/0.5</Circle>
  <Circle bkg="navy"  radius="60">navy</Circle>
</>`}
                gray
                scope={{ Circle }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Layout</H1>
              </Row>
              <Example
                name="Row"
                prepend="import { Row } from 'cmr-components';"
                code={`<>
  <Row bkg="blue" fade="0.5" paddingAll expand>Default (top - left)</Row>
  <Row bkg="blue" fade="0.3" paddingAll expand center>Center</Row>
  <Row bkg="blue" fade="0.5" paddingAll expand right>Right</Row>
</>`}
                gray
                scope={{ Row }}
              />
              <Example
                name="Column"
                prepend="import { Column } from 'cmr-components';"
                code={`<>
  <Column bkg="green" fade="0.5" paddingAll stretch>Default (top - left)</Column>
  <Column bkg="green" fade="0.3" paddingAll stretch center>Center</Column>
  <Column bkg="green" fade="0.5" paddingAll stretch right>Right</Column>
</>`}
                gray
                scope={{ Column }}
              />
              <Example
                name="Vertical alignment"
                prepend="import { Row, Circle } from 'cmr-components';"
                code={`<Row>
    <Row bkg="gold" fade="0.5" paddingAll>
      <Circle radius="10" bkg="white" />
      <Circle radius="20" bkg="white" />
      <Circle radius="30" bkg="white" />
    </Row>
    <Row bkg="gold" fade="0.3" paddingAll middle>
      <Circle radius="10" bkg="white" />
      <Circle radius="20" bkg="white" />
      <Circle radius="30" bkg="white" />
    </Row>
    <Row bkg="gold" fade="0.5" paddingAll bottom>
      <Circle radius="10" bkg="white" />
      <Circle radius="20" bkg="white" />
      <Circle radius="30" bkg="white" />
    </Row>
  </Row>`}
                gray
                scope={{ Row, Circle }}
              />
              <Example
                last
                name="Responsive"
                comment={
                  <Column>
                    <P>
                      Reduce/increase your browser size to see how the layout
                      changes from Row to Column, when reaching 'tablet'
                      breackpoint.
                    </P>
                    <P>Other posible breakpoint values are:</P>
                    <Column marginLeft>
                      <P>
                        <b>- mobileS</b> (320px),
                      </P>
                      <P>
                        <b>- mobileM</b> (425px),
                      </P>
                      <P>
                        <b>- mobileL</b> (550px),
                      </P>
                      <P>
                        <b>- mobileXL</b> (640px),
                      </P>
                      <P>
                        <b>- tablet</b> (768px),
                      </P>
                      <P>
                        <b>- tabletL</b> (900px),
                      </P>
                      <P>
                        <b>- laptop</b> (1024px),
                      </P>
                      <P>
                        <b>- laptopL</b> (1118px),
                      </P>
                      <P>
                        <b>- desktop</b> (1400px)
                      </P>
                      <P>
                        <b>- desktopL</b> (2560px)
                      </P>
                    </Column>
                  </Column>
                }
                prepend="import { Row, Circle } from 'cmr-components';"
                code={`<Row bkg="gold" toColumn="tablet" paddingAll>
    <Circle radius="10" bkg="white" />
    <Circle radius="10" bkg="white" />
    <Circle radius="10" bkg="white" />
  </Row>`}
                gray
                scope={{ Row, Circle }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Buttons</H1>
              </Row>
              <Example
                last
                name="Icon button"
                prepend={`import { Button } from 'cmr-components';
import Back from './images/arrow-left';`}
                code={`<Button icon={Back} />`}
                gray
                scope={{ Button, Back }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Progress and Rating indicators</H1>
              </Row>
              <Rate autoColor value={10} />
              <Rate color="purple" value={4.5} />
              <Example
                last
                name="Progress"
                prepend={`import { Progress } from 'cmr-components';`}
                code={`<Row>
  <Progress color="purple" value={10} />
  <Progress autocolor value={10} />
  <Progress autoColor value={50} />
  <Progress autoColor value={80} />
</Row>`}
                gray
                scope={{ Progress, Row }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Thumbnails</H1>
              </Row>
              <Example
                name="Image"
                prepend={`import { Image } from 'cmr-components';`}
                code={`<Image movie={Movie} />`}
                gray
                scope={{ Image, Movie }}
              />
              <Example
                name="Home Thumbnail"
                comment="Animated and contains Rating and title"
                prepend={`import { Thumbnail } from 'cmr-components';`}
                code={`<Thumbnail movie={Movie} />`}
                gray
                scope={{ Thumbnail, Movie }}
              />
              <Example
                last
                name="Details Thumbnail"
                comment="Static image with fewer options than in the Home page, adding 'details' prop."
                prepend={`import { Thumbnail } from 'cmr-components';`}
                code={`<Thumbnail details movie={Movie} />`}
                gray
                scope={{ Thumbnail, Movie }}
              />
            </Column>

            <Column bkg="white" paddingAll radius="8" marginTop="40">
              <Row marginBottom="30">
                <H1>Header</H1>
              </Row>

              <Example
                last
                commnent="Adding 'reletive' option as defeult header has fixed position, and would not stick in place for this demo"
                prepend={`import { Header } from 'cmr-components';`}
                code={`<Header relative title="Title"/>`}
                gray
                scope={{ Header }}
              />
            </Column>
          </Column>
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
