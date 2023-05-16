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

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        console.log("post method of the body", JSON.stringify(req.body))
        res.status(400);
        throw new Error("All field are mandatory");
    }
    console.log("post method of the body", JSON.stringify(req.body))
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

//@desc Get all contacts
//@route Get /:id
//@access public

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});


//@desc update the contacts
//@route put /:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json(updateContact);
});


//@desc delete the contacts
//@route delete /:id
//@access public

const deleteContact = asyncHandler
(async (req, res) =>
 {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
}
);
module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };