import React from "react";
import { useParams } from "react-router-dom";

const Person = ({ people }) => {
  const { personId } = useParams();
  const currentItem = people.filter((entry) => {
    return entry.id === personId;
  });
  const { fullName, bio } = currentItem[0];

  return (
    <>
      <h4>Staff Member: {fullName}</h4>
      <p>{bio}</p>
    </>
  );
};

export default Person;
 