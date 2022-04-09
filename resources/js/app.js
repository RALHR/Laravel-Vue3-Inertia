import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  title: title => title ? `${title} - App` : 'App',
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})