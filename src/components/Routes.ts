import Operators from "./Operator"
import Dashboard from "./Dashboard"
import EditOps from "./EditOps"
import ImgMng from "./ImgMng"
import Approval from "./Approval"
import Login from "../functions/Login"


const routes = [
  {
    path: "/",
    component: Operators,
    viewbyfaction: true,
  },
  {
    path: "/admin",
    component: Login,
    admin: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    loggedin: true,
  },
  {
    path: "/editops",
    component: EditOps,
    editops: true,
    props: "",
  },
  {
    path: "/imgmng",
    component: ImgMng,
    imgmng: true,
  },
  {
    path: "/queue",
    component: Approval,
    queue: true,
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
    faction: 'FBI'
  },
  {
    path: "/operators/faction/gign",
    component: Operators,
    viewbyfaction: true,
    viewbyrelease: false,
    viewall: false,
    faction: 'GIGN'
  },
  {
    path: "/operators/faction/sas",
    component: Operators,
    viewbyfaction: true,
    faction: 'SAS'
  },
  {
    path: "/operators/faction/spetsnaz",
    component: Operators,
    viewbyfaction: true,
    faction: 'Spetsnaz'
  },
  {
    path: "/operators/faction/gsg9",
    component: Operators,
    viewbyfaction: true,
    faction: 'GSG 9'
  },
  {
    path: "/operators/faction/jtf2",
    component: Operators,
    viewbyfaction: true,
    faction: 'JTF-2'
  },
  {
    path: "/operators/faction/seals",
    component: Operators,
    viewbyfaction: true,
    faction: 'SEALS'
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
    release: 'Base'
  },
  {
    path: "/operators/release/y1",
    component: Operators,
    viewbyrelease: true,
    release: 'Year 1'
  },
  {
    path: "/operators/release/y2",
    component: Operators,
    viewbyrelease: true,
    release: 'Year 2'
  },
  {
    path: "/operators/all",
    component: Operators,
    viewall: true
  }
]

export default routes