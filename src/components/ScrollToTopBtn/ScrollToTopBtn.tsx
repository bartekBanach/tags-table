import { useCallback } from 'react';
import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopBtn() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default ScrollToTopBtn;

/*<Zoom in={showButton}>
  <div onClick={backToTop} role="presentation">
    <IconButton>
      <KeyboardArrowUpIcon />
    </IconButton>
    <Typography variant="subtitle1">Scroll to the top</Typography>
  </div>
</Zoom>;*/
