module.exports = (sequelize, Sequelize) => {
    const Log = sequelize.define("logs", {
      DateTime: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      API: {
        type: Sequelize.STRING
      },
      Param: {
        type: Sequelize.STRING
      }
    },{
        timestamps: false
    });
  
    return Log;
  };