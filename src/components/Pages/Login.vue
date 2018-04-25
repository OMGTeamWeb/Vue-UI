<template>
<div>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form v-model="valid">
          <v-text-field
            label="E-mail"
            v-model="email"
            required
          ></v-text-field>
          <v-text-field
          label="Password"
          v-model="password"
          :counter="10"
          required
          ></v-text-field>
        </v-form>
      </v-flex>
      <v-flex xs12 sm5 md5 offset-xs10 offset-lg2>
         <v-btn color="info">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-container>

</div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      email: ''
    }
  }
}
</script>
