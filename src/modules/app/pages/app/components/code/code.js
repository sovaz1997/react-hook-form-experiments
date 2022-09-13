import * as S from './style';

export const Code = ({ value }) => (
  <S.Wrapper>
    {JSON.stringify(value, null, 2)}
  </S.Wrapper>
);
