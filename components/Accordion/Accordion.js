import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Container from '@material-ui/core/Container';
import BackMyProject from 'layouts/BackMyProject';

import brief from 'assets/img/brief.svg'

import ExclusiveContent from "common/ExclusiveContentBody/index.js";

const styles = {
  accorionWrapper: {
    backgroundColor: "transparent",
    boxShadow: 'none',
    marginBottom: '1.5em',
    '& .Mui-expanded': {
      minHeight: 'auto!important',
      // margin: 'auto 0'
    },
    '&:before': {
      display: "none"
    },
    '& .MuiIconButton-label': {
      '& svg': {
        '& path': {
          fill: '#fff'
        }
      }
    },
    '& #panel1bh-header-new': {
      '& .MuiAccordionSummary-content': {
        '&::before': {
          position: 'absolute',
          left: '10px',
          content: `url(${brief})`,
          top: '8px'
        }
      }
    }
  },
  header: {
    background: '#5A27E7',
    borderRadius: '100px',
    color: '#FFFFFF',
    alignItems: 'center',
    '&.Mui-expanded': {
      background: '#381C85',
      '& .MuiAccordionDetails-root': {
        padding: '8px 16px 10px'
      }
    },
    '& .Mui-expanded.MuiAccordionSummary-content': {
      margin: '0'
    },
    '& .MuiAccordionSummary-content': {
      justifyContent: 'center',
      '& p': {
        fontWeight: '600',
        fontSize: "16px"
      }
    }
  }
};

export default function Accordions() {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth='sm'>
      <Accordion className={classes.accorionWrapper} expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
        <AccordionSummary
          expandIcon={expanded === 'panel0' ? <RemoveCircleIcon /> : <AddCircleIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header-new"
          className={classes.header}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Back My Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BackMyProject />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accorionWrapper} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveCircleIcon /> : <AddCircleIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.header}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Exclusive Content
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExclusiveContent />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accorionWrapper} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveCircleIcon /> : <AddCircleIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.header}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>1:1 Video Call</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accorionWrapper} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveCircleIcon /> : <AddCircleIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.header}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Personal Video Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accorionWrapper} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={expanded === 'panel4' ? <RemoveCircleIcon /> : <AddCircleIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.header}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Personal Video Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}