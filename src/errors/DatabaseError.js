class DatabaseError extends Error {
  constructor(error) {
    super(error.message);
    this.name = this.constructor.name;
    this.code = error.code || 422;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = DatabaseError;

/*
pg error

error: database "fake" does not exist

{
  length: 89,
  severity: 'FATAL',
  code: '3D000',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postinit.c',
  line: '885',
  routine: 'InitPostgres'
}

ver: https://www.postgresql.org/docs/current/errcodes-appendix.html

error: SELECT * FROM t_fake; - relation "t_fake" does not exist
error: database "fake" does not exist

*/
