import { useParams } from 'react-router-dom';

const MailboxDetails = ({mailboxes}) => {
    const { mailboxId } = useParams();
    const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    return(
        <>
            {!mailbox ? 'Mailbox not found!' :
            <div>
                <h2>Mailbox ID: {mailbox._id}</h2>
                <dl>
                    <dt>Box Holder:</dt>
                    <dd>{mailbox.boxholder}</dd>
                    <dt>Box Size:</dt>
                    <dd>{mailbox.boxSize}</dd>
                </dl>
            </div>
            }
        </>
    );
};

export default MailboxDetails;