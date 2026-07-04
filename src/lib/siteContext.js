import { createContext, useContext } from 'react'

export const SiteContext = createContext({
  loaderDone: false,
  theme: 'dark',
  toggleTheme: () => {},
})

export function useSite() {
  return useContext(SiteContext)
}
