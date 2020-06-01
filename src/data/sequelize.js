
import Sequelize from 'sequelize';
import config from '../../server/config';


const sequelize = new Sequelize(config.databaseUrl, {
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
