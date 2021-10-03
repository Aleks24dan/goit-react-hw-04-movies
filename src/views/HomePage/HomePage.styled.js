import styled from '@emotion/styled';
export const Container = styled.div`
  padding: 10px;
  align-items: center;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding-inline-start: 0px;
`;
export const MovieItems = styled.li`
  list-style: none;
  box-shadow: 0px 0px 8px 0px rgb(12 11 12);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #061922;
`;
