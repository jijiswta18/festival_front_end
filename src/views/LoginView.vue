<template>
    <div class="box-login">
        <!-- <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4 m-auto>
                  <v-card class="elevation-12">
                     <v-toolbar class="header-form">
                        <v-toolbar-title class="title-form">Login</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn-login" to="/">Login_test</v-btn>
                        <v-btn class="btn-login" @click="login">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
        </v-container> -->
    </div>
</template>
<script>
export default {
    // name: 'Login',
    methods:{
        login(){
            
        }
    },
};
</script>
<style>
    .box-login{
        height: 100%;
    }
    .header-form{
        background-color: #213862!important;
    }
    .title-form{
        color: white;
    }
    .btn-login{
        background-color: #213862!important;
        color: white!important;

    }
</style>