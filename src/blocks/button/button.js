import React from 'react';
import { Button } from 'semantic-ui-react'

const PButton               = ({label, onClick}) => <Button onClick={onClick}>{label}</Button>;
const PPrimaryButton        = ({label, onClick}) => <Button onClick={onClick} primary>{label}</Button>;
const PSecondaryButton      = ({label, onClick}) => <Button onClick={onClick} secondary>{label}</Button>;

export {
    PButton,
    PPrimaryButton,
    PSecondaryButton
};