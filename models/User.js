module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "student"],
        allowNull: false,
        defaultValue: "student",
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
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
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};
