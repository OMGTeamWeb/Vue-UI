<template>
  <div>
    <v-container grid-list-md>
      <v-layout v-bind="binding">
        <v-flex>
          <v-card dark color="primary">
            <v-card-text>Tasks due today</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-data-table
         :headers="headers"
         :items="items"
         hide-actions
         hide-headers
         class="elevation-1"
       >
         <template slot="items" slot-scope="props">
           <td>{{ props.item.name }}</td>
         </template>
     </v-data-table>
     <v-layout v-bind="binding">
       <v-flex>
         <v-card dark color="yellow darken-4">
           <v-card-text>Delayed Tasks</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
     <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        hide-headers
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
        </template>
    </v-data-table>
     <v-layout v-bind="binding">
       <v-flex>
         <v-card dark color="green darken-1">
           <v-card-text>Good Habits</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
     <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        hide-headers
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
        </template>
    </v-data-table>
     <v-layout v-bind="binding">
       <v-flex>
         <v-card dark color="red darken-4">
           <v-card-text>Bad Habits</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
     <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        hide-headers
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
        </template>
    </v-data-table>
    </v-container>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        headers: [
          {
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
        items: [
          {
            name: 'Frozen Yogurt'
          },
          {
            name: 'Ice cream sandwich'
          }
        ]
      }
    }
    /*,beforeMount(){
      //this.items = //get items from api
      let userId = 'd290f1ee-6c54-4b01-90e6-d701748f0852'
      // localstorage.getItem('userId')
      console.log(userId)
      // this.items.push({title:"hola", description:'gayyy'})
      // this.items.push({title:"hola", description:'gayyy'})
      // this.items.push({title:"hola", description:'gayyy'})
      this.$store.dispatch('getAllTasks', userId).then(tasks => this.items = tasks)
    },
    props: {
      source: String
    },
    methods: {
      addTask(){
        this.items.push(this.task),
        this.task = {title: this.task.title, description: this.task.description, dueDate: this.task.dueDate, userId: 'd290f1ee-6c54-4b01-90e6-d701748f0852'}
        //post
        this.$store.dispatch('addTask', this.task)
      }
    }*/
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
