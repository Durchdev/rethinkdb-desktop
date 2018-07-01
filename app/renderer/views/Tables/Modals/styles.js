import styled, { css } from 'react-emotion'

export const StyledModal = styled('div')({
  h4: {
    margin: '15px 0'
  },
  ul: {
    listStyle: 'none',
    li: {
      marginBottom: '10px',
      a: {
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        color: '#444258',
        transition: 'all fadeIn 300ms',
        '&:hover': {
          color: '#eb48ca'
        }
      }
    }
  }
})

export const StyledModalActions = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
  paddingTop: '10px'
})

export const ActionButton = css({
  marginLeft: '8px',
  padding: '5px 12px',
  background: 'transparent',
  border: '1px solid #603e85',
  color: '#603e85',
  transition: 'all ease-in 250ms',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#eb48ca',
    color: '#eb48ca'
  },
  '&:focus': {
    outline: 'none'
  },
  '&:disabled': {
    border: '1px solid #aaa',
    color: '#aaa',
    cursor: 'auto'
  }
})