import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

import { HomeRoutes } from "./home.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
