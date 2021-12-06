module.exports = (sequelize, Sequelize) => {
    const Variant = sequelize.define("variant", {
        variant_id:{
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        variant_color :{
            type: Sequelize.STRING(50)
        },
        variant_size:{
            type:Sequelize.STRING(4)
        },
        variant_pattern:{
            type:Sequelize.STRING(50)
        }
    },
    {
        underscored: true,
        paranoid: false
    })
    return Variant
}