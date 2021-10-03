import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding-inline-start: 0px;
`;

export const ActorCard = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgb(9 9 9);
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ActorCharachter = styled.p`
  font-weight: 700;
  font-style: italic;
`;
export const Span = styled.span`
  font-weight: 400;
`;
export const NameHolder = styled.div`
  padding: 0 5px;
`;
