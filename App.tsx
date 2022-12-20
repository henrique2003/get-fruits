import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { useFonts } from '@expo-google-fonts/lato/useFonts'
import { Lato_400Regular, Lato_700Bold, Lato_100Thin, Lato_900Black } from '@expo-google-fonts/lato'

import theme from './src/theme'
import { Text } from 'react-native'
import { Introduction } from './src/screens/Introduction'

function App (): JSX.Element {
  const [fontLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_100Thin,
    Lato_900Black
  })

  return (
    <ThemeProvider theme={theme}>
        {fontLoaded
          ? <Introduction />
          : <Text>Loading</Text>}
      <StatusBar
        backgroundColor='transparent'
        translucent
      />
    </ThemeProvider>
  )
}

export default App
