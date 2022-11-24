import { TurnedIn } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open={true}
        sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Kevin Sandoval
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedIn />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={'zado en los 60s con la creación de las hojas "Letraset"'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
