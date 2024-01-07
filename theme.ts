import { createTheme, MantineTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: {
      styles: (theme: MantineTheme) => ({
        visibility: 'hidden'
      })
    },
    Notification: {
      styles: (theme: MantineTheme) => ({
        root:{
          marginBottom: 10
        }
      })
    },
    Modal: {
      styles: (theme: MantineTheme) => ({
        content:{
          alignSelf: 'center'
        }
      })
    }
  }
});
