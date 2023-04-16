import styled from 'styled-components';

export const DataRecordWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DataLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: 600;
`;

export const DataValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
`;
