namespace hospital;

entity Patient {
  key ID        : UUID;
      name      : String;
      birthDate : Date;
      gender    : String;
}

entity Doctor {
  key ID        : UUID;
      name      : String;
      specialty : String;
}
