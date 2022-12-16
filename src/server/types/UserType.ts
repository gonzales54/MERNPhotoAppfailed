export interface UserType {
  _id: number,
  userName: string,
  email: string,
  password: string,
  getSignedJwtToken(user: UserType): string
}
