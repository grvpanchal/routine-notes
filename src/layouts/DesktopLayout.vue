<template>
  <div id="desktopLayout">
    <v-navigation-drawer fixed clipped v-model="drawer" width="240" mobile-break-point="1024"
      v-if="$route.name !== 'login'">

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleClickSignOut">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="$route.name !== 'login'" dark color="primary" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="pendingDialog = true">
        <v-icon>checklist</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-dialog v-model="pendingDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="pendingDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Pending Items</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        Pending List
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      drawer: null,
      pendingDialog: false,
      items: [
        { title: 'Home', icon: 'home', route: '/' },
      ],
    };
  },
  computed: {
    name() {
      return this.$root.$data.name;
    },
    email() {
      return this.$root.$data.email;
    },
    picture() {
      return this.$root.$data.picture;
    },
    pageTitle() {
      return (this.$route.name && this.$route.name[0].toUpperCase() + this.$route.name.substr(1))
        || 'Routine Notes';
    },
  },
  methods: {
    handleClickSignOut() {
      console.log('hello');
    },
  },
};
</script>

<style>
.v-toolbar__title:not(:first-child) {
  margin-left: 8px;
}

@media (min-width: 1200px) {
  .v-toolbar__side-icon {
    display: none;
  }
}

@media (min-width: 1024px) {

  .v-navigation-drawer--open~main.v-content {
    padding-left: 240px !important;
  }

  .v-navigation-drawer--fixed {
    padding-top: 64px;
  }
}
</style>
