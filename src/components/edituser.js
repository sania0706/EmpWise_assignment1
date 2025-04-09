import { useState } from "react";

function EditUserModal({ user, onClose, onSave }) {
  const [fname, setFirstName] = useState(user.first_name);
  const [lname, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave({ ...user, first_name: fname, last_name: lname, email });
  };

  return (
    <div style={{
      position: 'fixed', top: '30%', left: '30%', padding: '20px', background: 'grey', border: '1px solid black ', zIndex: 1000
    }}>
      <h3>Edit User details</h3>
      <input value={fname} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lname} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <br /><br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
    </div>
  );
}

export default EditUserModal;
