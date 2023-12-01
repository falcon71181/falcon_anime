function LogOut() {
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/logout`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if(data.sessionEnd === true){
        return window.location.replace(`${process.env.NEXT_PUBLIC_CLIENT}/login`);
      }
      
      // Redirect or perform other actions on successful logout
    })
    .catch(error => {
      console.error('Logout failed:', error);
      // Handle error as needed
    });
  }
  
  export { LogOut };
  