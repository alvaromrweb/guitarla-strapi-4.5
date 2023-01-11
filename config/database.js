module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cee6f5kgqg43c939p3o0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_b9lv'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'OqSu0btpbtDVNMqSxjitOeah1dZkcDlM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
