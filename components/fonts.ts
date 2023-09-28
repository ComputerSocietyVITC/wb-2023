import { Inter, Space_Grotesk } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'


export const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: "400" })
export const inter = Inter({ subsets: ['latin'] })
export const grotesk = Space_Grotesk({ subsets: ['latin'] })