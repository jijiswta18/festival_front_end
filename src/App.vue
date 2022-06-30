<template>
   <v-app id="inspire">
    <v-navigation-drawer
      class="sidebar"
      v-model="drawer"
      app
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Festival
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list 
      class="mt-5"
        dense 
        nav
      >
        <router-link 
          class="d-flex align-center menu-link"
          to="/"
        >
          <v-list-item link>
            <!-- <v-list-item-icon class="menu-icon"> -->
              <i class="fa-solid fa-list menu-icon"></i>
            <!-- </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title class="menu-text">
               รายการเทศกาล
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link
          class="d-flex align-center menu-link"
          to="/user"
        >
          <v-list-item link>
            <!-- <v-list-item-icon class="menu-icon"> -->
              <i class="fa-solid fa-users menu-icon"></i>
            <!-- </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title class="menu-text">
              รายการบุคลากร
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        
        <router-link 
          class="d-flex align-center menu-link"
          to="/report"
        >
          <v-list-item link>
            <!-- <v-list-item-icon class="menu-icon"> -->
              <i class="fa-solid fa-file-export menu-icon"></i>
              <!-- <v-icon mdi-view-dashboard></v-icon> -->
            <!-- </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title class="menu-text">
              รายงาน
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="navbar" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <i class="fa-solid fa-right-from-bracket"></i> -->

    </v-app-bar>

    <v-main>
      <v-container>
         <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>



</template>

<script>


export default {
    name: "App",
    data: () => ({
        drawer: null,
          items: [
          { title: 'รายการเทศกาล', icon: 'mdi-view-dashboard', path:'/' },
          { title: 'รายการบุคลากร', icon: 'mdi-image' , path: '/user' },
          { title: 'รายงาน', icon: 'mdi-help-box' },
        ],
        right: null,
        //
    }),
};
</script>
<style>
  /* body{
    font-family: 'Prompt', sans-serif;
  } */
  .btn-submit{
      background-color: #0170c2;
      border: 1px solid #0170c2;
      color: white!important;
  }
  .btn-cancel{
      color: #0170c2!important;
      border: 1px solid #0170c2;
      margin-right: 0.5rem;
  }

  .sidebar{
    background-color: #1e1e2d!important;
  }
  .navbar{
    background-color: white!important;
  }
  .text-h6{
    color: white;
  }
  .menu-link{
    text-decoration: none;
  }
  .menu-icon {
    width: 20px;
    margin-right: 1rem;
    color: #a2a3b7!important;
  }
  .menu-text{
    color: #a2a3b7;
  }
</style>
