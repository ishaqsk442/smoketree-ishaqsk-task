const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize to connect to MySQL
const sequelize = new Sequelize('user_address_db', 'ishaqsk', 'itsMysql@1', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the Address model
const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,  // 'User' table
      key: 'id',
    },
    onDelete: 'CASCADE',  // If the user is deleted, delete their addresses
  },
});

// Define the relationship between User and Address
User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Address };
