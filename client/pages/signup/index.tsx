import React from "react";
import ButtonComponent from "../../components/Buttons/button";
import Link from "next/link";
import SignupComponent from "../../components/Signup/signup";

const Signup = () => {
  return (
    <>
      <SignupComponent
        login={
          <Link href="/login">
            <ButtonComponent
              label={"LOGIN"}
              styles={{
                width: 273 / 2,
                color: "#fffffb",
                backgroundColor: "#663399",
                height: 90 / 2,
                borderRadius: 50,
                fontWeight: "bold",
                fontStyle: "Segoe UI",
                border: "0.01mm solid white",
                fontSize: 37 / 2,
              }}
            />
          </Link>
        }
      />
    </>
  );
};

export default Signup;
