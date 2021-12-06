module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        product_id:{
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        product_name :{
            type: Sequelize.STRING(50)
        },
        product_quantity:{
            type:Sequelize.INTEGER(4)
        }
    },
    {
        underscored: true,
        paranoid: false
    })
    return Product
}