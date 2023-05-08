import { Stack, Avatar } from "@mui/material";
import { useState } from "react";

export const MealAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={1} >
            <Avatar sx={{ bgcolor: 'success.dark'}}>BW</Avatar>
            </Stack>

        </Stack>
    )
}