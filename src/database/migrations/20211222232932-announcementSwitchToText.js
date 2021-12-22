'use strict';
import { DataTypes } from "sequelize"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		queryInterface.changeColumn("announcements", "announcement", { type: DataTypes.TEXT })
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		queryInterface.changeColumn("announcements", "announcement", { type: DataTypes.STRING })
	}
};
