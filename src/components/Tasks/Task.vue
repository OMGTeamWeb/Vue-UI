<template>
  <div>
   <v-card-text style="position: relative">
     <v-btn
     absolute
     dark
     fab
     top
     right
     color="blue"
     @click.stop="dialog2 = true"
     >
     <v-icon>+</v-icon>
   </v-btn>


  </v-card-text>
      <v-list two-line>
           <template v-for="(item, index) in items">

             <v-list-tile avatar :key="item.title" @click="">

               <v-list-tile-content>
                 <v-list-tile-title v-html="item.title"></v-list-tile-title>
                 <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="item.dueDate"></v-list-tile-sub-title>
               </v-list-tile-content>
             </v-list-tile>
           </template>
         </v-list>


                 <v-dialog v-model="dialog2" max-width="500px">
                   <form style="background:white;padding:1em;">
                    <v-text-field
                      label="name"
                      v-model="task.title"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="description"
                      v-model="task.description"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="dueDate (aaaa-mm-dd)"
                      v-model="task.dueDate"
                      required
                    ></v-text-field>
                  <v-btn @click="addTask()" color="success">Create Task</v-btn>
                </form>
                 </v-dialog>
  </div>
</template>

<script>
  export default {

    data: () => ({
      drawer: null,
      dialog2: false,
      task: {title:'', description: '', dueDate: ''},
      items: [
         //{title:"hola", description:'gayyy'}
       ]
    }),
    beforeMount(){
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
