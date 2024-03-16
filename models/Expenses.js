module.exports = (sequelize,DataTypes)=>{
    const Expenses = sequelize.define("Expenses",{
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        category:{
            type: DataTypes.STRING,
            allowNull:false,
        }
        
    });
    return Expenses;
};