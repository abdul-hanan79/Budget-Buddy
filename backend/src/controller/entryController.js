const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const doCreateEntry = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const { amount, description, category, type, expenseBookId } = req.body
        const newEntry = {
            amount,
            description,
            category,
            type,
            expenseBookId,
        }
        console.log("new Entry", newEntry);
        const createdEntry = await prisma.ExpenseItems.create({
            data: newEntry
        })
        console.log("new Entry", createdEntry);
        const response = {
            result: createdEntry,
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
const doGetEntries = async (req, res) => {
    try {
        const { expenseBookId } = req.body.expenseBookId;
        const allEntries = await prisma.ExpenseItems.findMany({
            where: {
                expenseBookId,
            }
        })
        console.log("all entries of particualr book is", allEntries);
        const response = {
            result: allEntries,
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
const doUpdateEntry = async (req, res) => {
    try {
        const entryId = req.params.id
        const { amount, description, category, type, expenseBookId } = req.body
        const updateEntryData = {
            amount,
            description,
            category,
            type,
            expenseBookId,
        }
        console.log("updateEntryData", updateEntryData);
        const updatedEntry = await prisma.ExpenseItems.update({
            where: {
                id: entryId
            },
            data: updateEntryData
        })
        console.log("update entry is", updatedEntry);
        const response = {
            result: updatedEntry,
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
const doDeleteEntry = async (req, res) => {
    try {
        const entryId = req.params.id
        console.log("entryId", entryId);
        await prisma.ExpenseItems.delete({
            where: {
                id: entryId
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
module.exports = { doCreateEntry, doUpdateEntry, doDeleteEntry, doGetEntries }