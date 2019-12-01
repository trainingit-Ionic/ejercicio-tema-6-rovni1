export class Geo {
  lat: string;
  lng: string;
}

export class Address {
  constructor(
    public street?: string,
    public suite?: string,
    public city?: string,
    public zipcode?: string,
    public geo?: Geo
  ) {}
}

export class Company {
  constructor(
    public name?: string,
    public catchPhrase?: string,
    public bs?: string
  ) {}
}

export class User {
  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public email?: string,
    public address?: Address,
    public phone?: string,
    public website?: string,
    public company?: Company
  ){}
}
