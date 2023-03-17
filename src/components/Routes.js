import Operators from "../components/Operator"
import Admin from "../components/Admin"


const routes = [
  {
    path: "/",
    component: Operators,
    viewbyfaction: true,
  },
  {
    path: "/login",
    component: Admin,
    viewlogin: true,
    loggedin: false,
  },
  {
    path: "/dashboard",
    component: Admin,
    viewlogin: false,
    loggedin: true,
  },
  {
    path: "/operators",
    component: Operators,
    viewbyfaction: true,
  },
  {
    path: "/operators/faction",
    component: Operators,
    viewbyfaction: true,
  },
  {
    path: "/operators/faction/fbi",
    component: Operators,
    viewbyfaction: true,
    faction: 0
  },
  {
    path: "/operators/faction/gign",
    component: Operators,
    viewbyfaction: true,
    viewbyrelease: false,
    viewall: false,
    faction: 4
  },
  {
    path: "/operators/faction/sas",
    component: Operators,
    viewbyfaction: true,
    faction: 8
  },
  {
    path: "/operators/faction/spetsnaz",
    component: Operators,
    viewbyfaction: true,
    faction: 12
  },
  {
    path: "/operators/faction/gsg9",
    component: Operators,
    viewbyfaction: true,
    faction: 16
  },
  {
    path: "/operators/faction/jtf2",
    component: Operators,
    viewbyfaction: true,
    faction: 20
  },
  {
    path: "/operators/faction/seals",
    component: Operators,
    viewbyfaction: true,
    faction: 22
  },
  {
    path: "/operators/release",
    component: Operators,
    viewbyrelease: true
  },
  {
    path: "/operators/release/b",
    component: Operators,
    viewbyrelease: true,
    release: 0
  },
  {
    path: "/operators/release/y1",
    component: Operators,
    viewbyrelease: true,
    release: 1
  },
  {
    path: "/operators/release/y2",
    component: Operators,
    viewbyrelease: true,
    release: 2
  },
  {
    path: "/operators/all",
    component: Operators,
    viewall: true
  }
]

export default routes