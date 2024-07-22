import { SmallCard } from '../../index';
import StyledOtherWorks from './styled';

const OtherWorks = () => {
  return (
    <StyledOtherWorks>
      {Array.from({ length: 9 }, (_, index) => (
        <SmallCard key={index} />
      ))}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
