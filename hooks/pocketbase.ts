import { useState } from "react";
import Pocketbase from "pocketbase";

import pb from "../config/pocketbase";

const useLogin = async (email: string, password: string) => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    // console.log(authData);
    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    return authData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// // autenticate with email and password
// // this will also set the auth data in the authStore
// const authenticateWithEmailAndPass = async () => {
//   const authData = pb
//     .collection("users")
//     .authWithPassword("YOUR_USERNAME_OR_EMAIL", "YOUR_PASSWORD");
//   return authData;
// };

// // after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// // console.log(pb.authStore.model.id);

// // "logout" the last authenticated account
// // pb.authStore.clear();

export { useLogin };
