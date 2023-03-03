export const getAvatarInitials = (firstName: string, lastName: string) =>
  `${firstName.substring(0, 1) + lastName.substring(0, 1)}`
