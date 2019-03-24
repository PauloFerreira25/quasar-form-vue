<template>
  <q-page class="flex flex-center">
    <QForm :c="c1"/>
  </q-page>
</template>

<style>
</style>

<script>
import QForm from "./form/QForm";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      c1: {
        type: "QInput",
        store: "user",
        value: "temp.name"
      }
    };
  },
  components: {
    QForm
  }
};
</script>
