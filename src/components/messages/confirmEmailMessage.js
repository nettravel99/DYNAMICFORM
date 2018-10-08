import React from 'react';
import {Message} from 'semantic-ui-react'

const ConfirmEmailMessage = () => (
    <Message info>
        <Message.Header>
            An email has been sent to you as part of our 2 step verification process -
            please select the link provided.</Message.Header>
    </Message>
);

export default ConfirmEmailMessage;
