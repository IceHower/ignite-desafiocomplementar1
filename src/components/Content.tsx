

interface ContentProps {
  title: string;
  children: React.ReactNode;
}

export function Content(props: ContentProps) {
  return(
  <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.children}
          </div>
        </main>
  </div>
  )
}