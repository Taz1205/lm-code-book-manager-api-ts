import { Model, DataTypes, } from "sequelize";
import { sequelize } from "../database/database";
export class Book extends Model {
}
Book.init({
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: "Book",
    timestamps: false,
    sequelize: sequelize,
});
// Sync the model with the database
Book.sync({ force: false });
// Create a new book
Book.create({
    bookId: 1,
    title: 'A book title',
    author: 'An author',
    description: 'A book description'
});
// Find all books
Book.findAll();
Book.destroy({
    where: {
        bookId: 1
    }
});
/*Book.delete({
  where: {
      bookId: 1
  }
})*/ 
