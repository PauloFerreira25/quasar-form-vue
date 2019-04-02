<template>
  <q-page class="flex flex-center">
    <QAutoForm :item="item"/>
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
      item: {
        type: "QCard",
        childrens: [
          {
            type: "QCardSection",
            childrens: [
              {
                type: "QInput",
                vconf: {
                  props: {
                    label: "name1",
                    counter: true
                  },
                  class: {
                    "cursor-pointer": true
                  }
                },
                store: "user",
                state: "temp.name",
                get: "name"
              },
              {
                type: "QInput",
                vconf: {
                  props: {
                    label: "name2"
                  }
                },
                store: "user",
                state: "temp.name",
                get: "name"
              }
            ]
          },
          {
            type: "QCardActions",
            childrens: [
              {
                type: "QBtn",
                vconf: {
                  nativeOn: {
                    click: () => {
                      alert("ola");
                    }
                  },
                  domProps: {
                    innerHTML: "b1"
                  }
                }
              },
              {
                type: "QBtn",
                vconf: {
                  domProps: {
                    innerHTML: "b2"
                  }
                }
              }
            ]
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
