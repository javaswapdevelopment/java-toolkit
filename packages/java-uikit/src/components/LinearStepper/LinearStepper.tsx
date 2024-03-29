import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import clsx from 'clsx';
import { Check } from 'react-feather';
import { baseColors } from '../../theme/colors';
import { color } from 'styled-system';
import { StepperProps } from '.';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  icon: {
      color: theme.palette.text.primary
  }
  
}));

function getSteps() {
  return ['Go to Dex', 'Add Liquidity', 'Stake LP in Farms', 'Earn BREW'];
}

const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: baseColors.primary,
      zIndex: 1,
      color: baseColors.primary,
      width: 30,
      height: 30,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      background:
        'red',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      color:
        'white',
    },
  });

  function ColorlibStepIcon(props: any) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        { completed ? <Check className={classes.completed} /> : <div /> }
      </div>
    );
  }

const LinearStepperComponent: React.FC<StepperProps> = ({text1, text2, text3, text4}) => {
  const classes = useStyles();
  const steps = [text1, text2, text3, text4];


  return (
    <div style={{width: "100%"}} >
      <Stepper className={classes.root} activeStep={4} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} ><a style={{color:useTheme().colors.textSubtle}}>{label}</a></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default LinearStepperComponent