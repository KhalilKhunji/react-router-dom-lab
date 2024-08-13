import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    _id: 0,
    boxSize: '',
    boxholder: '',
};

const mailboxForm = ({addBox}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    };

    return(
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Box Holder:</label>
                <input type="text" id="boxholder" name="boxholder" value={formData.boxholder} onChange={handleChange} />
                <label htmlFor="boxSize">Box Size:</label>
                <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option>Select a size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default mailboxForm;