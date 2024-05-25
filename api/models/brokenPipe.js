import { DataTypes, Sequelize } from 'sequelize'

class Database {
  constructor() {
    this._initializeConnection();
  }

  _initializeConnection() {
    this.sequelize = new Sequelize('brokenpipemanagement', 'metabase', 'mysecretpassword', {
      host: 'postgresnet',
      dialect: 'postgres',
    });

    this._testConnection();
  }

  async _testConnection() {
    try {
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  closeConnection() {
    return this.sequelize.close();
  }
}

const db_connector = new Database;

// Gracefully shutdown the database connection when the app exits
process.on('SIGINT', async () => {
  try {
    await db_connector.closeConnection();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error closing database connection:', error);
    process.exit(1);
  }
});


const BrokenPipe = db_connector.sequelize.define('BrokenPipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  broken_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  material: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thickness: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  installed_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  pipe_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  broken_specification: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pipe_material: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'brokenpipe',
  timestamps: false // or false if you don't want timestamps
});

export {
  BrokenPipe
}