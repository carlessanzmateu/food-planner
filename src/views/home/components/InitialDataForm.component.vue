<template>
  <section class="initial-data-form">
    <form v-on:submit.prevent>
      <section class="gender flex flex-col">
        <input type="radio" id="male" class="m-2" value="male" v-model="gender">
        <label for="male">Hombre</label>
        <input type="radio" id="female" class="m-2" value="female" v-model="gender">
        <label for="female">Mujer</label>
      </section>

      <section class="age">
        <input v-model="age" type="number" placeholder="Edad (años)">
      </section>

      <section class="weight">
        <input v-model="weight" type="number" placeholder="Peso (kg)">
      </section>

      <section class="height">
        <input v-model="height" type="number" placeholder="Altura (cm)">
      </section>

      <section class="activity-factor flex flex-col">
        <input type="radio" id="none" class="m-2" value="none" v-model="activityFactor">
        <label for="none">Poco o ningún ejercicio</label>

        <input type="radio" id="low" class="m-2" value="low" v-model="activityFactor">
        <label for="low">Ejercicio ligero (1-3 días a la semana)</label>

        <input type="radio" id="moderate" class="m-2" value="moderate" v-model="activityFactor">
        <label for="moderate">Ejercicio moderado (3-5 días a la semana)</label>

        <input type="radio" id="high" class="m-2" value="high" v-model="activityFactor">
        <label for="high">Ejercicio alto (6-7 días a la semana)</label>

        <input type="radio" id="extreme" class="m-2" value="extreme" v-model="activityFactor">
        <label for="extreme">Ejercicio muy alto (dos veces al día, entrenamientos muy duros)</label>
      </section>

      <section class="submit">
        <a v-on:click="onSubmit">Enviar</a>
      </section>

      <p>{{ basalMetabolicRate }}</p>
    </form>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'InitialDataForm',
  data: () => ({
    gender: undefined,
    age: undefined,
    weight: undefined,
    height: undefined,
    activityFactor: undefined
  }),
  computed: {
    ...mapGetters('bodyData', ['basalMetabolicRate'])
  },
  methods: {
    ...mapMutations('bodyData', ['setAllBodyData']),
    onSubmit () {
      const payload = {
        gender: this.gender,
        age: this.age,
        weight: this.weight,
        height: this.height,
        activityFactor: this.activityFactor
      }
      this.setAllBodyData(payload)
    }
  }
}
</script>
