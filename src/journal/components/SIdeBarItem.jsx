import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { TurnedIn } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal'

export const SIdeBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }))
  }

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedIn />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
