import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';  // Assuming your connection.js exports the Sequelize instance

// Define the ReportAuthority model
class ReportAuthority extends Model {
  static associate(models) {
    ReportAuthority.belongsTo(models.User, { foreignKey: 'userId' });  // One user has many reports
  
  }

}

ReportAuthority.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    weather: {
      type: DataTypes.JSONB,  // Store weather data as JSON object
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,  // Full address
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,  // City name
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Assuming userId references the user who submitted the report
    }
  }, 
  {
    sequelize,
    modelName: "ReportAuthority",
    tableName: "ReportAuthority",
    timestamps: true,
  }
)

export default ReportAuthority;

// from report community js which I deleted

// import { DataTypes } from 'sequelize';
// import sequelize from "../config/connection.js"; 

// const Issue = sequelize.define('Issue', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.JSONB, 
//     allowNull: false,
//     defaultValue: { lat: 0, lon: 0 },
//   },
//   contacted: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM('reported', 'in progress', 'resolved'),
//     defaultValue: 'reported',
//   },
//   picture: {
//     type: DataTypes.STRING, 
//     allowNull: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// }, {
//   timestamps: true, 
// });

// export default Issue;
