export class Subscription {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, email: string, lastName: string) {
    this.email = email;
    this.lastName = lastName;
    this.firstName = firstName;
  }

}
