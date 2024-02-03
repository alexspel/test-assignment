export const getNextStep = (step: string) => {
    switch (step) {
    case 'step1':
        return 'step2';
    case 'step2':
        return 'step3';
    default:
        return null;
    }
};

export const getPrevStep = (step: string) => {
    switch (step) {
    case 'step3':
        return 'step2';
    case 'step2':
        return 'step1';
    default:
        return null;
    }
};
