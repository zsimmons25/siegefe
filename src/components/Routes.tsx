import React from "react"
import { ReactElement } from "react";
import Operators from "./Operators"
import Login from "./Login"
import Dashboard from "./Dashboard"
import EditOps from "./EditOps"
import Users from "./Users";

interface Route {
  path: string;
  element: ReactElement;
  props?: any;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    element: <Operators />,
    props: {
    },
  },
  {
    path: "/operators",
    element: <Operators />,
    props: {
    },
    children: [
      {
      path: '/operators/faction',
      element: <Operators />,
      props: {
        viewbyfaction: true,
      },
      },
      {
        path: '/operators/faction/fbi',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "FBI",
        },
      },
      {
        path: '/operators/faction/gign',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "GIGN",
        },
      },
      {
        path: '/operators/faction/sas',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "SAS",
        },
      },
      {
        path: '/operators/faction/spetsnaz',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "Spetsnaz",
        },
      },
      {
        path: '/operators/faction/gsg9',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "GSG 9",
        },
      },
      {
        path: '/operators/faction/jtf2',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "JTF-2",
        },
      },
      {
        path: '/operators/faction/seals',
        element: <Operators />,
        props: {
          viewbyfaction: true,
          faction: "SEALS",
        },
      },
      {
        path: '/operators/release/',
        element: <Operators />,
        props: {
          viewbyrelease: true,
        },
      },
      {
        path: '/operators/release/b',
        element: <Operators />,
        props: {
          viewbyrelease: true,
          release: "Base",
        },
      },
      {
        path: '/operators/release/y1',
        element: <Operators />,
        props: {
          viewbyrelease: true,
          release: "Year1",
        },
      },
      {
        path: '/operators/release/y2',
        element: <Operators />,
        props: {
          viewbyrelease: true,
          release: "Year2",
        },
      },
      {
        path: '/operators/all',
        element: <Operators />,
        props: {
          viewall: true,
        },
      },
    ]
  },
  {
    path: "/admin",
    element: <Login />,
    props: {
      admin: true,
    }
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    props: {
      loggedin: true,
    }
  },
  {
    path: "/editops",
    element: <EditOps />,
    props: {
      editops: true,
    }
  },
  {
    path: "/users",
    element: <Users />,
    props: {
      users: true,
    }
  },
]

export default routes