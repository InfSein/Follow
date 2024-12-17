/// <reference types="nativewind/types" />

declare namespace NodeJS {
  export interface ProcessEnv {
    EXPO_PUBLIC_FOLLOW_LOGIN_URL: string
    EXPO_PUBLIC_API_URL: string
    [key: string]: string | undefined
  }
}
