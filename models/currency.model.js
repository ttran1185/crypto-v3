module.exports = (sequelize, Sequelize) => {
  const Currency = sequelize.define("currency", {
    id: {
      type: Sequelize.STRING,
    },
    rank: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    symbol: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    supply: {
      type: Sequelize.DOUBLE,
    },
    maxSupply: {
      type: Sequelize.DOUBLE,
    },
    marketCapUsd: {
      type: Sequelize.DOUBLE,
    },
    volumeUsd24Hr: {
      type: Sequelize.DOUBLE,
    },
    priceUsd: {
      type: Sequelize.DOUBLE,
    },
    changePercent24Hr: {
      type: Sequelize.DOUBLE,
    },
    vwap24Hr: {
      type: Sequelize.DOUBLE,
    },
  });

  return Currency;
};
