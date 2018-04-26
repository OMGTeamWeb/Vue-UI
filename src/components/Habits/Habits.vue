<template>
<div>
  <v-card-text style="position: relative">
    <v-btn absolute dark fab top right color="info" @click.stop="dialog2 = true">
      <v-icon>+</v-icon>
    </v-btn>


  </v-card-text>
  <v-list two-line>
    <template v-for="(habit, indexD, indexx) in habits">

             <v-list-tile avatar :key="habit._Id" @click="">
               <v-list-tile
               @click="tumbDown(indexD)">
               <v-list-tile-action>
                 <v-icon
                 color="grey lighten-1"
                   v-if="selected.indexOf(indexD) < 0"
                 >thumb_down</v-icon>
                 <v-icon
                   color="yellow darken-2"
                   v-else
                 >thumb_down</v-icon>
               </v-list-tile-action>
             </v-list-tile>
               <v-list-tile-content>
                 <v-list-tile-title v-html="habit.name"></v-list-tile-title>
                 <v-list-tile-sub-title v-html="habit.typeHabit"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="habit.difficult"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="habit.score"></v-list-tile-sub-title>
               </v-list-tile-content>
               <v-list-tile
               @click="tumbUp(indexx)">
               <v-list-tile-action>
                 <v-icon
                 v-if="selected.indexOf(indexx) < 0"
                   color="grey lighten-1"
                 >thumb_up</v-icon>
                 <v-icon
                   color="yellow darken-2"
                   v-else
                 >thumb_up</v-icon>
               </v-list-tile-action>
             </v-list-tile>
             </v-list-tile>
             <v-divider></v-divider>
           </template>
  </v-list>




  <v-dialog v-model="dialog2" max-width="500px">
    <form style="background:white;padding:1em;">
      <v-subheader class="subtitulo">Title</v-subheader>
      <v-text-field
       label="Habit's title"
       v-model="habit.name"
       color="orange" required>
      </v-text-field>
      <v-subheader class='subtitulo'>Difficult</v-subheader>
      <v-radio-group v-model="habit.difficult" row>
        {{habit.difficult}}
      <v-radio
        label="Easy"
        color="success"
        value="easy">
      </v-radio>
      <v-radio
        label="Medium"
        color="orange darken-3"
        value="medium">
      </v-radio>
      <v-radio
        label="Hard"
        color="red darken-3"
        value="hard">
      </v-radio>
      </v-radio-group>
      <v-subheader class="subtitulo">Type</v-subheader>
      <v-radio-group v-model="habit.typeHabit" row>
      <v-radio
        label="Good"
        color="success"
        value="good">
      </v-radio>
      <v-radio
        label="Bad"
        color="orange darken-3"
        value="bad">
      </v-radio>
      <v-radio
        label="Both"
        color="red darken-3"
        value="both">
      </v-radio>
      </v-radio-group>
      <v-btn @click="addHabit()" color="success" @click.stop="dialog2 = false">Create Habit</v-btn>
    </form>
  </v-dialog>
</div>
</template>

<script>
export default {

  data: () => ({
    drawer: null,
    dialog2: false,
    selected: [2],
    habit: {
      _Id: '',
      name: '',
      typeHabit: '',
      difficult: '',
      score: ''
    },
    habits: [
      //{title:"hola", description:'gayyy'}
    ]
  }),
  beforeMount() {
    //this.items = //get items from api
    let userId = 'd290f1ee-6c54-4b01-90e6-d701748f0852'
    // localstorage.getItem('userId')
    console.log(userId)
    // this.items.push({title:"hola", description:'gayyy'})
    // this.items.push({title:"hola", description:'gayyy'})
    // this.items.push({title:"hola", description:'gayyy'})
    this.$store.dispatch('getAllHabits', userId).then(habits => this.habits = habits)
  },
  props: {
    source: String
  },
  methods: {
    addHabit() {
      this.habits.push(this.habit),
        this.habit = {
          name: this.habit.name,
          typeHabit: this.habit.typeHabit,
          difficult: this.habit.difficult,
          score: 0,
          userId: 'd290f1ee-6c54-4b01-90e6-d701748f0852'
        }
      //post
      this.$store.dispatch('addHabit', this.habit)
      this.habit = ""
    },
    tumbDown (indexD) {
      const i = this.selected.indexOf(indexD)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(indexD)
        }
      },
      tumbUp (indexx) {
        const i = this.selected.indexOf(indexx)

          if (i > -1) {
            this.selected.splice(i, 1)
          } else {
            this.selected.push(indexx)
          }
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

.subtitulo {
  font-size: 20px;
  color: orange !important;
}

v-text-field {}

.text {
  font-weight: 400;
}
</style>
