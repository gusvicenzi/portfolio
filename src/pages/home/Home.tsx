import { ProfileImage } from "../../components/profileImage/ProfileImage"
import './home.scss'

export function Home() {
  return (
    <section id="home">
      <h1>Hi! I'm <span>&lt; Gustavo Vicenzi \&gt;</span></h1>
      <ProfileImage imgUrl="https://avatars.githubusercontent.com/u/87548627?v=4" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum optio, voluptate quod ullam atque praesentium nulla! Dicta voluptatem itaque consequatur est a, explicabo id, distinctio natus sunt deserunt dolorem doloremque.</p>
    </section>
  )
}