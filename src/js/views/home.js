import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = () => {
  const { store, actions } = useContext(Context);
  // const [title, setTitle] = useState(false)
  return (
    <div className="">
      {/* <div>
        <h1>Para crear un nuevo contacto haga click en New Contact</h1>
      </div>   */}
      {
        store.contactList.length == 0 && <h1 className=" title text-light d-flex justify-content-center">Para crear un nuevo contacto haga click en New Contact</h1>
      }   
      { store.contactList.length != 0 && store.contactList.map((contact) => {
        // {title ? <h1>para crear un nuevo contacto haga click en New Contact</h1> : contactList}
      //   if (store.contactList == 0){
      //     return <h1>para crear un nuevo contacto haga click en New Contact</h1>
      //  }
        return (
          <div key={contact.id}
          className="bg-transparent p-5" >
            <div className=" d-flex justify-content-center">
              <img
                className="contact-image rounded-start"
                src="https://picsum.photos/200/300"
              
              />
              <div className="cardlist">
                <ul className="list-group list-group-flus bg-transparent">
                  <li className="list-group-item text-center p-5 bg-transparent">
                    <h3 className="text-light">{contact.full_name}</h3>
                  </li>
                  <li className="list-group-item bg-transparent text-light">
                    <strong>Phone: </strong>
                    {contact.phone}
                  </li>
                  <li className="list-group-item bg-transparent text-light">
                    <strong>Email: </strong>
                    {contact.email}
                  </li>
                  <li className="list-group-item bg-transparent text-light">
                    <strong>Address: </strong>
                    {contact.address}
                  </li>
                  <li className="list-group-item bg-transparent text-light d-flex align-content-center justify-content-between">
                    <span
                      onClick={() => {
                        actions.removeContacts(contact.id);
                      }}
                    >
                      <Link>
                        <i className="fas fa-trash"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to={`/newcontact/${contact.id}`}>
                        <i className="fa-solid fa-pencil ms-2 btn btn-primary">Edit</i>
                      </Link>
                    </span>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};