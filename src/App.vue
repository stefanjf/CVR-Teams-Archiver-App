<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
   <h3>CVR Teams Channel Archiver</h3>

      <v-spacer></v-spacer>
            <v-btn color="grey darken-2" href="https://github.com/stefanjf/CVR-Teams-Archiver-App" target="_blank">
          Source Code
          <v-icon>
            mdi-open-in-new
          </v-icon>
        </v-btn>
   
    </v-app-bar>

    <v-main>
      <MessageArchiver/>
    </v-main>
  </v-app>
</template>

<script>
import MessageArchiver from './components/MessageArchiver';

export default {
  name: 'App',

  components: {
    MessageArchiver,
  },

  data: () => ({
    //
  }),
};
</script>
