import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(name: string, email: string) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(name: string, email: string): User {
    return new User(name, email);
  }
}

export { User };
