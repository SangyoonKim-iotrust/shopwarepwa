import { setup, onConfigChange } from '@shopware-pwa/shopware-6-client'
import { setStore } from '@shopware-pwa/composables'

export default ({ app, store }) => {
  if (!app.$cookies) {
    throw 'Error cookie-universal-nuxt module is not applied in nuxt.config.js'
  }
  const contextToken = app.$cookies.get('sw-context-token') || ''
  /**
   * Setup Shopware API client
   */
  setup({
    endpoint: 'http://192.168.0.64:8000/sales-channel-api/v1',
    accessToken: 'SWSCY0XDBVNVYVBTDU56ELBYYQ',
    contextToken
  })
  /**
   * Save current contextToken when its change
   */
  onConfigChange(({ config }) => {
    try {
      app.$cookies.set('sw-context-token', config.contextToken, {
        maxAge: 60 * 60 * 24 * 365
      })
    } catch (e) {
      // Sometimes cookie is set on server after request is send, it can fail silently
    }
  })

  // Temporary fix for SSR and reactivity
  setStore(store)
}
