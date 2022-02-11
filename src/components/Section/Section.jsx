import { StyledSection, Container } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </StyledSection>
  );
};

export default Section;
