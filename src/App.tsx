import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";



const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/AnaVitorio.png",
      name: "Ana Carolina",
      role: "Analista de TI"
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋,"},
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifolio. É um rojeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀. "},
      {type: 'link', content:" jane.design/doctorcare"}
    ],

    pusblisheAt: new Date('2023-11-06 18:00:00')
  },

  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/AnaVitorio.png",
      name: "Ana Carolina",
      role: "Analista de TI"
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋,"},
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifolio. É um rojeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀. "},
      {type: 'link', content:" jane.design/doctorcare"}
    ],

    pusblisheAt: new Date('2023-11-04 18:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id} 
                post={post}
                />
            )
          })}
        </main>
      </div>
    </div>
  );
}
