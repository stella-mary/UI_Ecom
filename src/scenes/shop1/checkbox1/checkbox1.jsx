import { useTheme } from "@mui/material";
import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { tokens } from "../../../theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


export default function CheckBox() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [state, setState] = React.useState({
        // top: false,
        // left: false,
        // bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box
            display="grid"
            gridTemplateColumns="5fr 1fr 1fr"
            gap="1px"
        >

            <div className="checkOut"><span className="bgColor4"><LocalMallOutlinedIcon /></span><span className="space" />E-commerece</div>
            <Box
                // backgroundColor={colors.primary[400]}
                border="solid 2px #33383f"
                width="100px"
                display="flex"
                padding="1px"
                flexDirection="row"
                borderRadius="5px"
                justifyContent="space-between"
            >
                <Button onClick={toggleDrawer("filter", true)}><span className="bgcolorW"><FilterListOutlinedIcon /> Filter</span></Button>
                <Drawer
                    anchor="right"
                    open={state["filter"]}
                    onClose={toggleDrawer("filter", false)}
                >
                    {list("filter")}
                </Drawer>
            </Box>

            < Box
                // backgroundColor={colors.primary[400]}
                border="solid 2px #33383f"
                width="100px"
                padding="10px"
                textAlign="center"
                display="flex"
                flexDirection="row"
                cursor="pointer"
                borderRadius="5px"
                justifyContent="space-between"

            >
                Sort by <ExpandMoreIcon />
            </Box>
        </Box>
    );
}