import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users: { id: number; name: string; }[];
  getHello(): string {
    return 'Hello World!';
  }

  constructor() {
    // 임시 데이터
    this.users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === parseInt(id));
  }

  create(user: any) {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: any, updateData: any) {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updateData);
      return user;
    }
    return null;
  }

  remove(id: string) {
    const index = this.users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }
}
