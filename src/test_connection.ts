import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.sqlite'
})

/*class User extends Model {
	declare firsName: string;
	declare lastName: string;
	declare id: number;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize
	},
);

const user = new User({ id: 1, firstName: "John", lastName: "Snow" });
console.log(user.id);

await sequelize.sync({ force: true });
console.log('All models were synchronized successfully.');
*/

const User = sequelize.define('user', {
	name: DataTypes.TEXT,
	favoriteColor: {
		type: DataTypes.TEXT,
		defaultValue: 'green',
	},
	age: DataTypes.INTEGER,
	cash: DataTypes.INTEGER,
});

(async () => {
	await sequelize.sync({ force: true });
	// Code here
	const jane = await User.create({ name: 'Jane' });
})();


/*const jane = User.build({ name: 'Jane' });
console.log(jane instanceof User);
// @ts-ignore
console.log(jane.name);

await jane.save();
console.log("Jane saved to the database");
*/






