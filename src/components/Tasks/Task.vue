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

             <v-list-tile avatar :key="item._Id" @click="">

               <v-list-tile-action>
                 <v-checkbox
                  v-model = "item.doneDate"
                  @click="taskDate(index)"
                ></v-checkbox>
               </v-list-tile-action>
               <v-list-tile-content>
                 <v-list-tile-title v-html="item.title" v-model = "item.title"></v-list-tile-title>
                 <v-list-tile-sub-title v-html="item.description" v-model = "item.description"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="item.dueDate" v-model = "item.dueDate"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="item.reminder" v-model = "item.reminder"></v-list-tile-sub-title>
               </v-list-tile-content>

             </v-list-tile>
             <v-divider></v-divider>
           </template>
         </v-list>

                 <v-dialog v-model="dialog2" max-width="500px">
                   <div class="white">
                      <h1>Create New Task</h1>
                     <form style="background:white;padding:1em;">
                      <v-text-field
                        label="title"
                        v-model="task.title"
                        required
                      ></v-text-field>
                      <v-text-field
                        label="description"
                        v-model="task.description"
                        required
                      ></v-text-field>
                      <!-- Menu DueDate -->
                      <v-menu
                        ref="menu"
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        min-width="290px"
                        :return-value.sync="task.dueDate"
                      >
                        <v-text-field
                          slot="activator"
                          label="Due Date"
                          v-model="task.dueDate"
                          prepend-icon="event"
                          readonly
                          required
                        ></v-text-field>
                        <v-date-picker v-model="task.dueDate" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu.save(task.dueDate)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>
                        <!-- menu2 reminder -->
                        <v-menu
                          ref="menu2"
                          lazy
                          :close-on-content-click="false"
                          v-model="menu2"
                          transition="scale-transition"
                          offset-y
                          full-width
                          :nudge-right="40"
                          min-width="290px"
                          :return-value.sync="task.reminder"
                        >
                        <v-text-field
                          slot="activator"
                          label="Reminder"
                          v-model="task.reminder"
                          prepend-icon="alarm_add"
                          readonly
                        ></v-text-field>
                        <v-date-picker v-model="task.reminder" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu2.save(task.reminder)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>

                    <v-btn @click="addTask()" color="success" @click.stop="dialog2 = false">Create Task</v-btn>
                  </form>
                </div>
                 </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'

  export default {

    data: () => ({
      drawer: null,
      dialog2: false,
      date: null,
      menu: false,
      menu2: false,
      modal: false,
      task: {_Id:'', title:'', description: '', dueDate: '', reminder:'', doneDate: ''},
      items: [
        {
          // title: ''
        }
         //{title:"hola", description:'gayyy'}
       ]
    }),
    beforeMount(){
      //this.items = //get items from api
      let userId = 'd290f1ee-6c54-4b01-90e6-d701748f0852'
      console.log(userId)
      this.$store.dispatch('getAllTasks', userId).then(tasks => this.items = tasks)
    },
    props: {
      source: String
    },
    methods: {
      addTask(){
        this.items.push(this.task),
        this.task = {title: this.task.title, description: this.task.description, dueDate: this.task.dueDate, userId: 'd290f1ee-6c54-4b01-90e6-d701748f0852', reminder: this.task.reminder}
        //post
        this.$store.dispatch('addTask', this.task)
        this.task = ''
      },
      taskDate(index){
        let newTask = this.items[index]
        console.log("Ant:", this.task.doneDate)
        if (this.task.doneDate) {
          this.task.doneDate = moment().format("YYYY-MM-DD")+"T05:00:00.000Z"
          newTask.doneDate =  moment().format("YYYY-MM-DD")+"T05:00:00.000Z"
        }else{
          this.task.doneDate = ''
          newTask.doneDate = ''
        }
        // this.task.doneDate = (!this.task.doneDate) ? moment().format("YYYY-MM-DD") :'' ;
        console.log("Des:", this.task.doneDate)
        newTask.doneDate = this.task.doneDate
        console.log("New:", newTask.doneDate)
        this.$store.dispatch('updateTask', newTask)
        console.log("Mi neuva tarea: ",newTask);
      }
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .white{
    background: white;
  }
  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>
