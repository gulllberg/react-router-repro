import {useEffect, useState} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

const routerBlue = createBrowserRouter([
    {
        path: "/",
        element: <div style={{background: "blue", height: "400px", width: "400px"}}>Blue router</div>,
    },
]);

const routerRed = createBrowserRouter([
    {
        path: "/",
        element: <div style={{background: "red", height: "400px", width: "400px"}}>Red router</div>,
    },
]);

function App() {
  const [routerColor, setRouterColor] = useState("blue")

    useEffect(function () {
        setTimeout(function () {
            console.log("changing to red router")
            setRouterColor("red");
        }, 2000)
    }, []);

  console.log("router color", routerColor)

  return (
    <RouterProvider
        // Adding this key makes it work again
        // key={routerColor}
        router={routerColor === "blue" ? routerBlue : routerRed} />
  )
}

export default App
