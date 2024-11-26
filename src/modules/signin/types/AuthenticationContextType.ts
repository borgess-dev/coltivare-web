export type AuthenticationContextType = {
    accessToken: string,
    refreshToken: string,
    login: Promise<void>,
    logout: Promise<void>
}