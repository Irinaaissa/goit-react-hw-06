
// import css from './ContactList.module.css';
// import Contact from '../Contact/Contact';
// export default function ContactList({ contacts, onDelete }) {
  // return (
    // <div className={css.contactList}>
      {/* {contacts.map(({ id, name, number }) => ( */}
        // <Contact
          // key={id}
          // id={id}
          // name={name}
          // number={number}
          // onDelete={onDelete}
        // />
      // ))}
    {/* </div> */}
  // );
// }

import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const allContacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const contacts =
    search.trim() === ''
      ? allContacts.slice()
      : allContacts.filter(contact =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}