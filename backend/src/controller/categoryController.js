const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const doCreateCategory = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const { name, expenseBookId } = req.body
        const newCategory = {
            name,
            expenseBookId,
        }
        console.log("new newCategory", newCategory);
        const createdCategory = await prisma.Category.create({
            data: newCategory
        })
        console.log("new category", createdCategory);
        const response = {
            result: createdCategory,
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
const doGetCategories = async (req, res) => {
    try {
        const { expenseBookId } = req.body.expenseBookId;
        const allCategories = await prisma.Category.findMany({
            where: {
                expenseBookId,
            },
            include:{
                ExpenseItems:true
            }
        })
        console.log("all categories of particualr book is", allCategories);
        const response = {
            result: allCategories,
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
const doUpdateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const { name, expenseBookId } = req.body
        const updateCategoryData = {
            name,
            expenseBookId,
        }
        console.log("updateCategoryData", updateCategoryData);
        const updatedEntry = await prisma.Category.update({
            where: {
                id: categoryId
            },
            data: updateCategoryData
        })
        console.log("update category is", updateCategoryData);
        const response = {
            result: updateCategoryData,
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
const doDeleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        console.log("categoryId", categoryId);
        await prisma.Category.delete({
            where: {
                id: categoryId
            }
        })
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
module.exports = { doCreateCategory, doUpdateCategory, doDeleteCategory, doGetCategories }
