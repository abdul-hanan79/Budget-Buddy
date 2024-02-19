const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();


const doCreateBook = async (req, res) => {
    try {
        const { name, userId } = req.body
        const createdBook = await prisma.ExpenseBook.create({
            data: {
                name,
                userId
            }
        })
        console.log("creted book", createdBook);
        const response = {
            result: createdBook,
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doUpdateBook = async (req, res) => {
    try {
        const bookId = req.params.id
        console.log("book id", bookId);
        console.log("req.body", req.body);
        const { name } = req.body;
        console.log("name in body", name);
        const updatedBook = await prisma.ExpenseBook.update({
            where: {
                id: bookId
            },
            data: {
                name
            }
        })
        console.log("updated book is", updatedBook);
        const response = {
            updatedBook,
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doDeleteBook = async (req, res) => {
    try {
        const bookId = req.params.id
        console.log("bookdId", bookId);
        const deleteExpenseItems = await prisma.ExpenseItems.deleteMany({
            where: {
                expenseBookId: bookId
            }
        })
        const deleteExpenseBook = await prisma.ExpenseBook.delete({
            where: {
                id: bookId
            }
        })
        const transaction = await prisma.$transaction([deleteExpenseItems, deleteExpenseBook]);
        console.log("transaction", transaction);
        const response = {
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doGetBooks = async (req, res) => {
    try {
        console.log("req.body", req)
        const userId = req.userId
        console.log("user id", userId)
        const allExpenseBooks = await prisma.ExpenseBook.findMany({
            where: {
                userId
            },
            include: {
                expenseItems: true,
                categories: true
            }
        })
        console.log("all books", allExpenseBooks);
        const response = {
            result: allExpenseBooks,
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
module.exports = { doCreateBook, doUpdateBook, doDeleteBook, doGetBooks }