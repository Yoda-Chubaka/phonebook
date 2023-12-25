import { selectFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectPhoneBookValue } from "redux/phoneBook/phoneSelector";
import { getContactsThunk } from "services/fetchContacts";
import { useEffect, useState } from "react";
import * as React from 'react';
import { Box, List, Typography } from "@mui/material";
import { Loader } from "components/Loader/Loader";
import { ContactItem } from "./ContactItem";
import { boxListStyle } from "./StyleContactList";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);
    const phoneBook = useSelector(selectPhoneBookValue);
    const filterPhoneBook = useSelector(selectFilter);

    useEffect(() => {
        setLoad(false);
    }, [])

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch]);

    const lowerFilter = filterPhoneBook.toLowerCase();
    const visibleContacts = phoneBook.filter(({ name }) =>
        (name.toLowerCase().includes(lowerFilter)));
    
    return (
        <Box sx={boxListStyle}>
            <Typography component="h1" variant="h6" sx= {{textDecoration: 'underline'}}>
                Your Contacts
            </Typography>
            {load && <Loader/>}
            <List sx={{ width: '350px' }}>
                {visibleContacts.map((contact) =>
                    <ContactItem contact={contact} key={contact.id} />
                )}
            </List>
        </Box>
    );
};