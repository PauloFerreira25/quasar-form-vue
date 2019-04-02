<template>
  <q-page class="flex flex-center">
    <QAutoForm :c="c1"/>
  </q-page>
</template>

<style>
</style>

<script>
import QAutoForm from "./autoForm/QAutoForm";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      c1: {
        type: "QInput",
        store: "user",
        state: "temp.name",
        get: "name"
      }
    };
  },
  components: {
    QAutoForm
  }
};
</script>
