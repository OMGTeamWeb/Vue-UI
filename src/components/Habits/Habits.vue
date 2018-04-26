<template>
<div>
  <v-card-text style="position: relative">
    <v-btn absolute dark fab top right color="info" @click.stop="dialog2 = true">
      <v-icon>+</v-icon>
    </v-btn>


  </v-card-text>
  <v-list two-line>
    <template v-for="(habit, index) in habits">

            <v-list-tile avatar :key="habit._Id" @click="">
             <v-list-tile
              @click="minScore(index)">
               <v-container fluid class="pa-0">
               <v-layout row wrap>
                 <v-btn flat icon color="red">
                   <v-icon>thumb_down</v-icon>
                 </v-btn>
              </v-layout>
            </v-container>
          </v-list-tile>


               <v-list-tile-content>
                 <v-list-tile-title v-html="habit.name"></v-list-tile-title>
                 <v-list-tile-sub-title v-html="habit.typeHabit"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="habit.difficult"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-bind:class="colorScore(habit.score)" v-html="habit.score">
                 </v-list-tile-sub-title>
               </v-list-tile-content>

               <v-list-tile
               @click="sumScore(index)">
              <v-container fluid class="pa-0">
               <v-layout row wrap>
                   <v-btn flat icon color="green">
                     <v-icon>thumb_up</v-icon>
                   </v-btn>
               </v-layout>
             </v-container>
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
    selected: [4],
    habit: {
      _Id: '',
      name: '',
      typeHabit: '',
      difficult: '',
      score: '',
      color: ''
    },
    habits: [{
    }
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

    getType(index){
      let newHabit = this.habits[index]
      console.log(newHabit);
      if(newHabit.typeHabit == "Good"){
        newHabit.score=this.calculateGoodScore(newHabit.score, newHabit.difficult)
        console.log(newHabit.score);
        this.$store.dispatch('updateHabit', newHabit)

      }
      else if(newHabit.typeHabit == "Bad"){
        newHabit.score = this.calculateBadScore(newHabit.score, newHabit.difficult)
        console.log(newHabit.score);

        this.$store.dispatch('updateHabit', newHabit)

      }
    },

    calculateGoodScore(score, type){
      if(score < 0){
        return score = this.getScore(difficult)
      }
      else if(score >= 0 && score < 10){
        return score = this.getScore(difficult)
      }
      else if(score >= 10 && score < 40){
        return score = this.getScore(difficult)
      }
      else if(score >= 40 && score < 50){
        return score = score + this.getScore(difficult) / 2
      }
      else{
        return score = score + 1
      }
    },

    calculateBadScore(score, type){
      if(score < 0){
        return score = score - this.getScore(difficult)*2
      }
      else if(score >= 0 && score < 10){
        return score = score - this.getScore(difficult)*1.5
      }
      else if(score >= 10 && score < 40){
        return score = this.getScore(difficult)
      }
      else if(score >= 40 && score < 50){
        return score = this.getScore(difficult)
      }
      else{
        return score = this.getScore(difficult)
      }
    },

    getScore(difficult){
      if (difficult == "Easy") {
        return 2
      }else if(difficult == "medium"){
        return 3
      }else{
        return 5
      }
    },

    colorScore(score){

      console.log("para color", score);
      if(score < 0){
        return {
          'red': true
        }
      }
      else if(score >= 0 && score < 10){
        return {
          'orange': true
        }
      }
      else if(score >= 10 && score < 40){
        return {
          'yellow':true
        }
      }
      else if(score >= 40 && score < 50){
        return {
          'green': true
        }
      }
      else{
        console.log("Color azul")
        return {
          'blue':true
        }
      }

  },

        sumScore(index){
          //console.log(index)
          let newScore = this.habits[index]
          //console.log(newScore.score)
          if(newScore.difficult == "easy"){
            newScore.score = newScore.score+2
            this.habit.score=newScore.score
          }
          else if(newScore.difficult == "medium"){
            newScore.score = newScore.score+3
            this.habit.score=newScore.score
          }
          else{
            newScore.score = newScore.score+5
            this.habit.score=newScore.score
          }
          //console.log("Viejo: ", this.habit.score)
          newScore.score=this.habit.score
          //console.log("Nuevo", newScore.score)
          this.$store.dispatch('updateHabit', newScore)
          //console.log("Mi nuevo habito: ", newScore)
          this.colorScore(newScore.score)
        },
        minScore(index){
          //console.log(index)
          let newScore = this.habits[index]
        //  console.log(newScore.score)
          if(newScore.difficult == "easy"){
            newScore.score = newScore.score-2
            this.habit.score=newScore.score
          }
          else if(newScore.difficult == "medium"){
            newScore.score = newScore.score-3
            this.habit.score=newScore.score
          }
          else{
            newScore.score = newScore.score-5
            this.habit.score=newScore.score
          }
          //console.log("Viejo: ", this.habit.score)
          newScore.score=this.habit.score
          //console.log("Nuevo", newScore.score)
          this.$store.dispatch('updateHabit', newScore)
          this.colorScore(newScore.score)
          //console.log("Mi nuevo habito: ", newScore)
        }

      },

}
</script>

<style>
.red{
  background:none !important;
  color: red !important;
}

.blue{
  background:none !important;
  color: blue !important;
}

.yellow{
  background:none !important;
  color: #ffc200 !important;
}

.green{
  background:none !important;
  color:green !important;
}
.orange{
  background:none !important;
  color:orange !important;
}
#keep main .container {
  height: 660px;
}

.navigation-drawer__border {
  display: none;
}

.subtitulo {
  font-size: 20px;
  color: pink !important;
}
.list__tile__content{
  max-width: 800px !important;
}
v-text-field {}

.text {
  font-weight: 400;
}
</style>
