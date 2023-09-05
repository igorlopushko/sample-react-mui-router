import { Box, Typography } from "@mui/material";

export default function AboutPage() {
	return (
		<Box
			sx={{
			flexGrow: 1,
			backgroundColor: "whitesmoke",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			}}
		>
			<Typography variant="h3">About</Typography>
		</Box>
	);
};