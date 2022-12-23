import styled, { css } from 'styled-components/native'

export const TextFilterContainer = styled.TouchableOpacity`

`

interface TextFilterProps {
  active: boolean
}

export const TextFilter = styled.Text<TextFilterProps>`
  transition: all .2s ease;
  margin-right: 40px;

  ${({ active }) => active
? css`
    font-size: ${({ theme }) => theme.FONT_SIZE.SXL};
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    `
: css`
    margin-top: 5px;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `}
`

export const SpanBottom = styled.View<TextFilterProps>`
  transition: all .2s ease;
  opacity: ${({ active }) => active ? 1 : 0};
  width: 30px;
  height: 2px;
  margin-left: 1px;
  margin-top: 2px;
  background-color:  ${({ theme }) => theme.COLORS.ORANGE};
`
