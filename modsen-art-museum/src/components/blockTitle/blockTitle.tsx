import { StyledBlockTitle, BlockTitleTitle, BlockTitleSubtitle } from './styled';

const BlockTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <StyledBlockTitle>
      <BlockTitleSubtitle>{subtitle}</BlockTitleSubtitle>
      <BlockTitleTitle>{title}</BlockTitleTitle>
    </StyledBlockTitle>
  );
};

export default BlockTitle;
