import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
`

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 400px;
  justify-content: space-between;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    width: 200px;
    height: 250px;
  }
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LockImage = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    height: 80px;
    width: 80px;
  }
`

export const LockStatus = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    font-weight: 400;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #06b6d4;
  height: 45px;
  width: 125px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 85px;
    font-size: 12px;
  }
`
