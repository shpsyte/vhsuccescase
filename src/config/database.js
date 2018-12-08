module.exports = {
  uri:
    'postgres://qxldrlqtmsyyxd:5fcd5ebcfb09c3bcd2ff83d0855cd2cda8df87091ac4ce9b5486a043a57a3973@ec2-184-72-239-186.compute-1.amazonaws.com:5432/d3pp9b25a2mks2',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  host: 'ec2-184-72-239-186.compute-1.amazonaws.com',
  username: 'qxldrlqtmsyyxd',
  password: '5fcd5ebcfb09c3bcd2ff83d0855cd2cda8df87091ac4ce9b5486a043a57a3973',
  database: 'd3pp9b25a2mks2',
  operatorAliases: false,
  port: 5432,
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false
  }
}
