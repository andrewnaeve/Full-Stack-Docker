import bcrypt from 'bcrypt';

export function Password(Model) {
  const bcryptRegex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9./]{53}$/;

  return class extends Model {
    $beforeInsert(context) {
      const maybePromise = super.$beforeInsert(context);
      return Promise.resolve(maybePromise).then(() => {
        return this.hashPassword();
      });
    }

    $beforeUpdate(queryOptions, context) {
      const maybePromise = super.$beforeUpdate(queryOptions, context);
      return Promise.resolve(maybePromise).then(() => {
        if (queryOptions.patch && this.password === undefined) {
          return;
        }
        return this.hashPassword();
      });
    }

    hashPassword() {
      const saltRounds = 12;
      const password = this.password;
      if (password) {
        if (this.constructor.isBcryptHash(password)) {
          throw new Error('Password already hashed');
        }
        return bcrypt.hash(this.password, saltRounds).then(hash => {
          this.password = hash;
        });
      }
      return Promise.resolve();
    }

    verifyPassword(plainText) {
      return bcrypt.compare(plainText, this.password);
    }

    static isBcryptHash(str) {
      return bcryptRegex.test(str);
    }
  };
}
