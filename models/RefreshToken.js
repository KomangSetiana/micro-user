

module.exports = (Sequelize, DataTypes) => {
  const RefreshToken = Sequelize.define(
    "RefreshToken",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: "refresh_tokens",
      timestamps: true,
    }
  );
  return RefreshToken;
};
