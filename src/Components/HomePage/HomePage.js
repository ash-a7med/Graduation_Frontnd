import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Header = styled.div`
  background-color: #4E9D63;
};
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #4E9D63;
};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Section = styled.div`
  background-color: #f9f9f9;
  padding: 50px 0;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

function HomePage() {
  return (
    <div>
      <Header>
        <Container>
          <Title>Welcome to my React Application</Title>
          <Subtitle>This is the home page.</Subtitle>
          <Button to="/categories">Learn more</Button>
        </Container>
      </Header>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <Heading>Section 1</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                elit vel ligula volutpat sagittis. Nullam nec enim nec justo
                finibus placerat. Donec interdum ipsum vitae leo tristique, a
                fringilla urna vestibulum. Duis gravida, leo vel ultricies
                eleifend, dui magna dignissim diam, vel congue nibh purus a
                risus.
              </Text>
            </Col>
            <Col lg={6}>
              <Heading>Section 2</Heading>
              <Text>
                Nam efficitur, elit quis commodo tempor, nunc velit tristique
                nunc, non commodo orci nunc vel metus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Suspendisse nec libero ut
                lorem ultrices accumsan. Suspendisse potenti.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Heading>Section 3</Heading>
              <Text>
                Curabitur vel risus non lectus dictum iaculis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Etiam nec erat ut odio sodales auctor. Fusce
                quis mi vel metus ultrices bibendum. Praesent vel felis sapien.
                Nullam dapibus sapien eget velit pellentesque, vel bibendum enim
                tempor.
              </Text>
            </Col>
            <Col lg={6}>
              <Heading>Section 4</Heading>
              <Text>
                Aliquam erat volutpat. Vivamus elit justo, pulvinar et aliquet
                quis, malesuada sit amet nisi. Praesent vel condimentum libero,
                ut faucibus nulla. Donec sit amet mi in arcu facilisis interdum.
                Vivamus eleifend, eros et ornare vulputate, metus est posuere
                mauris, non fergit nulla ex at metus. Integer eget lectus
                aliquet, aliquet mauris a, dapibus arcu.
              </Text>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default HomePage;
