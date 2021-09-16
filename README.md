# @lifeeric/react-localstroage

Synchronous localStorage package for NodeJs apps.

## Install

```bash
yarn add @lifeeric/react-localstroage
```

Or with npm

```bash
npm install --save @lifeeric/react-localstroage
```

## Usage

#### Set Item

set item in localStorage for later usage

```jsx
import { getLocalStorage } from "@lifeeric/react-localstroage";

function login({ payload }) {
  try {
    const results = apiCall("/auth", payload, null, "POST");
    const token = results.data.access_token;

    setLocalStorage("acccess_token_appname", token);
    setLocalStorage("login_obj", JSON.stringify(results.data));
  } catch (error) {
    console.log("login", error);
  }
}
```

---

#### Get Item

now get the item from the localStorage

```jsx
import { getLocalStorage } from "@lifeeric/react-localstroage";

function getUser({ userId }) {
  try {
    // get the token from the localStorage
    const token = getLocalStorage("acccess_token_appname");
    const login_obj = getLocalStorage("login_obj");

    const results = apiCall("/user", userId, null, "GET");

    console.log(results);
    console.log(JSON.parse(login_obj));
  } catch (error) {
    console.log("GetUser", error);
  }
}
```

---

#### Remove Item

removing the item from the localStorage

```jsx
import { rmLocalStorage } from "@lifeeric/react-localstroage";

function logOut({ userId }) {
  try {
    // remove the token from the localStorage
    const token = rmLocalStorage("acccess_token_appname");
  } catch (error) {
    console.log("LogOut", error);
  }
}
```

## License

- [ ] MIT ©
