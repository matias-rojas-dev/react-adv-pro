import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

// Esto es para poder cambiar el nombre del Chunk que se muestra en la web browser

const LazyLayoutComponent = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/components/layout/LazyLayout'
    )
)

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayoutComponent,
    name: 'LazyLayout',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]
