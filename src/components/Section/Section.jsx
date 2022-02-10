import { StyledSection } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};

export default Section;
