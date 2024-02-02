import { useSelector } from 'react-redux';
import { Stepper } from '../../../../widgets/Stepper';
import { getStep, getSteps } from '../../model/selectors';

function CreationStepper() {
    const step = useSelector(getStep);
    const steps = useSelector(getSteps);
    return <Stepper current={step} steps={steps} />;
}

export default CreationStepper;
