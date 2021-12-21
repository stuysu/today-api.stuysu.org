'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class day extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			day.belongsTo(models.schedule);
			//day.hasOne(models.schedule);
		}
	};
	day.init({
		date: DataTypes.DATEONLY,
		scheduleId: DataTypes.INTEGER,
		testing: DataTypes.STRING,
		block: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'day',
	});
	return day;
};
