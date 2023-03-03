const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('social_network', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo_id: {
        type: DataTypes.INTEGER,
      allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
      allowNull: true
    },
    country: {
        type: DataTypes.STRING,
      allowNull:true
    },
    city: {
        type: DataTypes.STRING,
      allowNull:true
    },
    gender: {
        type: DataTypes.ENUM(['male', 'female']),
      allowNull:true
    },
    balance: {
        type: DataTypes.FLOAT,
      allowNull:true,
      defaultValue: 0
    },
  }, {
    tableName: 'users',
    timestamps: false
  });


;(async () => {
    try {
        await User.sync({ 
            alter: true,
            force: false
        });

        const userfindAll = await User.findAll();
        console.log(userfindAll);

        
        const userfindByPk = await User.findByPk(5);


        const userfindAllWhere = await User.findAll({ 

            where: {
                city: 'Москва',
                gender: 'male'
            }
        });
        console.log(userfindAllWhere);


        const userCreate = await User.create({ 
            first_name: "Jane", 
            last_name: "Doe",
            email: 'sdfghjkl@fghj.ru',
            password: 'sdfghjkl'

        });
        console.log(userCreate);

        const userCreateDel = await User.create({ 
            first_name: "Del", 
            last_name: "Del",
            email: 'del@del.ru',
            password: 'del'

        });
        console.log(userCreate2);



        const userdestroy = await User.destroy({ 
            
            where: {
                first_name: "Del"
            }
        

        });
        console.log(userdestroy);

        const userupdate = await User.update({email: 'janedoe@gmail.com'}, { 
            where:{
                where: {
                    first_name: "Del"
                }
            }

        });
        console.log(userupdate);
    }
    catch (error) {
        console.error(error);
    }
})();