<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">Tasks summary</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs10>
          <v-card dark color="grey darken-4">
            <v-card-text class="px-0">Completed tasks</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="grey darken-4">
            <v-card-text class="px-0">{{ totalCompleted }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <v-card dark color="green">
            <v-card-text class="px-0">Before due date</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="green">
            <v-card-text class="px-0">{{ before }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <v-card dark color="amber darken-4">
            <v-card-text class="px-0">After due date</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="amber darken-4">
            <v-card-text class="px-0">{{ after }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs10>
          <v-card dark color="red">
            <v-card-text class="px-0">Delayed tasks</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="red">
            <v-card-text class="px-0">{{ delayed }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs10>
          <v-card dark color="grey darken-4">
            <v-card-text class="px-0">Available tasks</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="grey darken-4">
            <v-card-text class="px-0">{{ available }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <v-card dark color="yellow darken-4">
            <v-card-text class="px-0">Due today</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="yellow darken-4">
            <v-card-text class="px-0">{{ today }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        totalCompleted:100,
        before:80,
        after:20,
        delayed:30,
        available:450,
        today:50,
        items:[]
      }
    }
    ,beforeMount(){
      this.$store.dispatch('getTasks').then(tasks => {
        console.log(tasks)
         JSON.parse(tasks).forEach(t =>{
           console.log('getting data')
           console.log(t)
           console.log(typeof t)
         })
         console.log(this.items)
      //  console.log(this.items[0])
      //  console.log(tasks[0])
      })
      //this.items = //get items from api

      // localstorage.getItem('userId')
      // this.items.push({title:"hola", description:'gayyy'})
      // this.items.push({title:"hola", description:'gayyy'})
      // this.items.push({title:"hola", description:'gayyy'})


    },
    props: {
      source: String
    },
    methods: {
      report(){

        console.log(this.items);
      }
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>
