<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
   <h3>CVR Teams Channel Archiver</h3>

      <v-spacer></v-spacer>
    
   
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
