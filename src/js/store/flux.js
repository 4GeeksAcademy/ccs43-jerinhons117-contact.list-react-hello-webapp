const getState = ({ getStore, getActions, setStore }) => {
	return {
		
			store: {
			  baseURL: "https://playground.4geeks.com/apis/fake/contact/",
			  contactList: [],
			},
			actions: {
			  getContacts: async function () {
				let store = getStore();
				try {
				  const response = await fetch(`${store.baseURL}agenda/agenda_jesus`);
				  // waits until the request completes...
				  console.log(response);
				  if (response.ok) {
					let data = await response.json();
					setStore({ contactList: data });
					console.log(data);
				  }
				} catch (error) {
				  console.log(error);
				}
			  },
			  addContacts: async function (data) {
				let store = getStore();
				try {
				  const response = await fetch(`${store.baseURL}`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				  });
				  if (response.ok) {
					getActions().getContacts();
					return true;
				  } else {
					return false;
				  }
				} catch (error) {
				  console.log(error);
				}
			  },
			  removeContacts: async function (id) {
				let store = getStore();
				try {
				  const response = await fetch(`${store.baseURL}${id}`, {
					method: "DELETE",
					headers: {
					  "Content-Type": "application/json",
					},
				  });
				  if (response.ok) {
					getActions().getContacts();
				  }
				} catch (error) {
				  console.log(error);
				}
			  },
			  updateContacts: async function (data, id) {
				console.log(data)
				let store = getStore();
				try {
				  const response = await fetch(`${store.baseURL}${id}`, {
					method: "PUT",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				  });
				  if (response.ok) {
					getActions().getContacts();
					console.log("edito contacto");
					return true;
				  } else {
					return false;
				  }
				} catch (error) {
				  console.log(error);
				}
			  },
			  addContacts: async (data) => {
				let store = getStore();
				try {
				  const response = await  fetch(`${store.baseURL}`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				  });
				  if (response.ok) {
					getActions().getContacts();
					console.log("edito contacto");
					return true;
				  } else {
					return false;
				  }
				} catch (error) {
				  console.log(error);
				}
				
			  }
			},
		  };
		
		
	}

		
		export default getState;
		
		// 		store: {
		// 			demo: [
		// 				{
		// 					title: "FIRST",
		// 					background: "white",
		// 					initial: "white"
		// 				},
		// 				{
		// 					title: "SECOND",
		// 					background: "white",
		// 					initial: "white"
		// 				}
		// 			]
		// 		},
		// 		actions: {
		// 			// Use getActions to call a function within a fuction
		// 			exampleFunction: () => {
		// 				getActions().changeColor(0, "green");
		// 			},
		// 			loadSomeData: () => {
		// 				/**
		// 					fetch().then().then(data => setStore({ "foo": data.bar }))
		// 				*/
		// 			},
		// 			changeColor: (index, color) => {
		// 				//get the store
		// 				const store = getStore();
		
		// 				//we have to loop the entire demo array to look for the respective index
		// 				//and change its color
		// 				const demo = store.demo.map((elm, i) => {
		// 					if (i === index) elm.background = color;
		// 					return elm;
		// 				});
		
		// 				//reset the global store
		// 				setStore({ demo: demo });
		// 			}
		// 		}
		// 	};
		// };