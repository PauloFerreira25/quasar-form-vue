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
                properties: {
                  props: {
                    label: "name1",
                    counter: true
                  },
                  class: {
                    "cursor-pointer": true
                  }
                },
                store: {
                  module: "user",
                  state: "temp.name"
                }
              },
              {
                type: "QInput",
                properties: {
                  props: {
                    label: "name2"
                  }
                },
                store: {
                  module: "user",
                  state: "temp.name"
                },
                i18n: {
                  handler: {
                    t: {
                      gettext: "message.user.name",
                      settext: "properties.props.label"
                    }
                  }
                },
                event: [
                  {
                    name: "input",
                    handler: {
                      store: {
                        module: "user",
                        action: "updateState",
                        state: true
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "QCardActions",
            childrens: [
              {
                type: "QBtn",
                properties: {
                  nativeOn: {
                    click: () => {
                      alert("ola");
                    }
                  },
                  domProps: {
                    innerHTML: "b1"
                  }
                },
                i18n: {
                  handler: {
                    t: {
                      gettext: "message.button.alert",
                      settext: "properties.domProps.innerHTML"
                    }
                  }
                }
              },
              {
                type: "QBtn",
                properties: {
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
