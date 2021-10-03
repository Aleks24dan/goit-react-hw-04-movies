import styled from '@emotion/styled';
export const Container = styled.div`
  padding: 15px;
`;
export const Button = styled.button`
  padding: 8px 16px;
    margin-top: 15px;
    margin-bottom: 40px;
    border-radius: 12px;
    background-color: #3f91b5;
    -webkit-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    border: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 1px 5px 10px rgb(15 16 16);
`;
export const MovieCard = styled.div`
  display: flex;
  box-shadow: 0px 0px 6px rgb(9 9 9);
  margin-bottom: 30px;
`;

export const MovieInfo = styled.div`
  padding: 10px 25px;
`;
export const Poster = styled.img`
  display: block;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  margin-right: 5px;
`;
