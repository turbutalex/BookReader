import { createTheme, MantineTheme} from "@mantine/core";

export const theme = createTheme({
  fontFamily: 'arial',
  components: {
    Button: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: '#73F9CE',
          color: 'black',
          fontFamily: 'Georgia'
        }
      })
    },
    Notification: {
      styles: (theme: MantineTheme) => ({
        root: {
          marginBottom: 10
        }
      })
    },
    TextInput: {
      styles: (theme: MantineTheme) => ({
        label: {
          fontSize: 18,
        }
      })
    },
    Modal: {
      styles: (theme: MantineTheme) => ({
        content: {
          alignSelf: 'center'
        }
      })
    }
  }
});

