import { GestureResponderEvent } from 'react-native'

import * as S from './styles'

interface Props {
  active: boolean
  text: string
  onPress: (event: GestureResponderEvent) => void
}

export const TextFilter: React.FC<Props> = ({
  active,
  text,
  onPress
}) => {
  return (
    <S.TextFilterContainer
      activeOpacity={0.8}
      onPress={(e) => onPress(e)}
    >
      <S.TextFilter active={active}>{text}</S.TextFilter>
      <S.SpanBottom active={active} />
    </S.TextFilterContainer>
  )
}
