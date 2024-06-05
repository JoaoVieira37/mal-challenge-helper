import { Sequelize, DataTypes, Models } from "sequelize";
import axios from "axios";
import express from express;


const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.sqlite'
})


