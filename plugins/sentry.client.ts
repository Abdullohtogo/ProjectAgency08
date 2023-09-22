import * as Sentry from '@sentry/browser'

export default defineNuxtPlugin(() => {
  Sentry.init({
    dsn: 'https://564f99b4e89b5cbf7e584c885e92b2a9@dbg.commeta.io/8',
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ['localhost'],
      }),
      new Sentry.Replay(),
    ],
    sampleRate: 0.25,
    tracesSampleRate: 0.5,
  })
})
