import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCard } from "../../pages/UserCard";
import { userActions } from "../../store/user-slice";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    let url = "https://reqres.in/api/users";
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
        dispatch(
          userActions.addUsersToList({
            users: data.data,
          })
        );
        // console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [dispatch]);

  if (isLoading) return <div>Loading..</div>;
  return (
    <>
      {users.users.map((user) => (
        <NavLink to={`userdetails/${user.id}`}>
          <UserCard
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        </NavLink>
      ))}
      <Outlet />
    </>
  );
};

export default UserProfile;
