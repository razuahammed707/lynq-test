import * as React from "react";
import { AppBar, Container, Typography,Box} from "@mui/material";


export default function MenuAppBar() {
  return (
    <>
      <AppBar position="static" style={{ background: "#1A1B1C" }}>
      <Container component="main" style={{ maxWidth: "640px"}}>
          <Box sx={{display:"fex",justifyContent:"space-between",color:"#4CC9F0",padding:"20px 0"}}>
              <Typography>Follow</Typography>
              <Typography>Sign In</Typography>
          </Box>
      </Container>
      </AppBar>
    </>
  );
}
