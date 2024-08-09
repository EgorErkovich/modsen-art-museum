import {
  StyledBlockTitle,
  BlockTitleTitle,
  BlockTitleSubtitle,
} from '@components/blockTitle/styled';

const BlockTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <StyledBlockTitle>
      <BlockTitleSubtitle>{subtitle}</BlockTitleSubtitle>
      <BlockTitleTitle>{title}</BlockTitleTitle>
    </StyledBlockTitle>
  );
};

export default BlockTitle;
