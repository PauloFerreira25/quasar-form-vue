<template>
  <q-page class="flex flex-center">
    <QAutoForm :myProp="myProp"/>
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
      myProp: {
        type: "QCard",
        childrens: [
          {
            type: "QInput",
            store: "user",
            state: "temp.name",
            get: "name"
          },
          {
            type: "QInput",
            store: "user",
            state: "temp.name",
            get: "name"
          }
        ]
      }
    };
  },
  components: {
    QAutoForm
  }
};
</script>
