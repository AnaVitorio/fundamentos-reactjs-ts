import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";


interface Author{
  name: string,
  role: string;
  avatarUrl: string;
}

interface Contente{
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType{
  id: number;
  author: Author;
  pusblisheAt: Date;
  content: Contente[];
}

interface PostProps{
  post: PostType
}

export function Post({ post}: PostProps) {
  const [comentarios, setComentarios] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [novoComentarioTexto, setNovoComentarioTexto] = useState("");

  const pusblisheDateFormated = format(
    post.pusblisheAt,
    "d 'de' LLLL 'às' HH:mm'h'"
  );

  //Calcula a diferença da data atual menos a data passado como primeiro parâmetro
  const dataPublicacaoRelativaAgora = formatDistanceToNow(post.pusblisheAt, {
    addSuffix: true,
  });

  function handleCriarNovoComentario(event: FormEvent) {
    event.preventDefault();
    setComentarios([...comentarios, novoComentarioTexto]);
    setNovoComentarioTexto("");
  }

  function handleNovoComentarioTexto(event: ChangeEvent<HTMLTextAreaElement>) {
    setNovoComentarioTexto(event.target.value);
  }

  function deletarComentario(comentariosToDelete: string) {
    const novaListaComentarios = comentarios.filter(comentario =>{
      return comentario !== comentariosToDelete;
    })

    setComentarios(novaListaComentarios);
  }

  const novoComentarioVazio = novoComentarioTexto.length === 0;

  function handleComentarioInvalido(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={pusblisheDateFormated}
          dateTime={post.pusblisheAt.toISOString()}
        >
          {dataPublicacaoRelativaAgora}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((linha) => {
          if (linha.type === "paragraph") {
            return <p key={linha.content}>{linha.content}</p>;
          } else if (linha.type === "link") {
            return (
              <p key={linha.content}>
                {" "}
                <a href="">{linha.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCriarNovoComentario} className={styles.commentFarm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          onChange={handleNovoComentarioTexto}
          value={novoComentarioTexto}
          required
          onInvalid={handleComentarioInvalido}
        />

        <footer>
          <button disabled={novoComentarioVazio} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comentarios.map((item) => {
          return (
            <Comment
              key={item}
              conteudo={item}
              deletarComentario={deletarComentario}
            />
          );
        })}
      </div>
    </article>
  );
}
