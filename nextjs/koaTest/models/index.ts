import Sequelize from 'sequelize';
import config from '../config/database.config';
const sequelize = new Sequelize(config);
export const user = sequelize.import(__dirname + '/user');
export default {
  user,
  sequelize,
};
