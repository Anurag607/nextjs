/** @type {import('next').NextConfig} */
import { defaultConfig } from 'next/dist/server/config-shared'
import { PHASE_DEVELOPMENT_BUILD, PHASE_DEVELOPEMENT_SERVER } from 'next/dist/shared/lib/constants'
import nextEnv from 'next-env'
import dotenvload from 'dotenv-load'

dotenvload()

const withEnv = nextEnv();

const nextConfig = (Phase, { defaultConfig }) => {
  if (Phase === PHASE_DEVELOPEMENT_SERVER) {
    console.log("DEV Mode")
    return {
      ...defaultConfig,
      reactStrictMode: true,
      swcMinify: true,
    }
  }

  else {
    console.log("BUILD Mode")
    return {
      ...defaultConfig,
      reactStrictMode: true,
      swcMinify: true,
    }
  }
}

export {withEnv, nextConfig}
