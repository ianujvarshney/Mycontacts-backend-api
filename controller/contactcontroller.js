const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route Get /
//@access public

const getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
}

//@desc Create New contacts
//@route Post /
//@access public

const createContact = async (req, res) => {
    console.log("post method of the body", JSON.stringify(req.body))
    const { name, email, phone } = res.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All field are mandatory");
    }
    res.status(201).json({ message: "Create Contact" });
}

//@desc Get all contacts
//@route Get /:id
//@access public

const getContact = async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
}


//@desc update the contacts
//@route put /:id
//@access public

const updateContact = async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
}


//@desc delete the contacts
//@route delete /:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };