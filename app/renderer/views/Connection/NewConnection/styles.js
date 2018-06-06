import styled from 'react-emotion'
import theme from '@/style/common'

export const StyledNewConnection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  .row {
    width: 100%;
    padding: 15px 0;
    input[type='text'] {
      width: 100%;
      height: 38px;
      background: transparent;
      border: none;
      border-bottom: 1px solid #603e85;
      transition: all ease-in 500ms;
      color: ${theme.mainTextColor};
      &:focus {
        outline: none;
        border-bottom-color: #eb48ca;
      }
    }
    button {
      width: 90px;
      height: 34px;
      background: transparent;
      border: 1px solid #603e85;
      color: #603e85;
      transition: all ease-in 500ms;
      cursor: pointer;
      &:hover {
        border-color: #eb48ca;
        color: #eb48ca;
      }
      &:focus {
        outline: none;
      }
    }
    &.actions {
      display: flex;
      flex-flow: row-reverse;
    }
  }
`

export const ConnectionInfo = styled('p')({
  fontSize: '10px',
  letterSpacing: '1px',
  color: theme.secTextColor,
  position: 'absolute',
  bottom: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '> span': {
    fontWeight: 700
  }
})

export const ConnectionError = styled('p')({
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '1px',
  color: theme.error,
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})

export const Connecting = styled('p')({
  fontSize: '14px',
  fontWeight: 700,
  color: theme.info,
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})