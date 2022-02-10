import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfileDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  //   const dispatch = useDispatch();
  //   const users = useSelector((state) => state.users);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setIsLoading(true);
    let url = `https://reqres.in/api/users/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Not fetched Properly";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log(data.data);
        // dispatch(
        //   userActions.addUsersToList({
        //     users: data.data,
        //   })
        // );
        setUserDetails(data.data);
        // console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  if (isLoading) return <div>Loading..</div>;
  return (
    <div style={{ paddingLeft: "20px" }}>
      <h5>First Name: {userDetails.first_name}</h5>
      <h5>Last Name: {userDetails.last_name}</h5>
      <h5>Email: {userDetails.email}</h5>
    </div>
  );
};

export default ProfileDetails;
