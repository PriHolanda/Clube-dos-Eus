import cabecalho from '../../assets/img/img-showcase.png'
import creators from '../../assets/img/project-creators.png'
import ebook from '../../assets/img/ebook.png'
import clipboard from '../../assets/img/clipboard.png'
import materials from '../../assets/img/img-materials.png'
import cards from '../../assets/img/img-material-cards.png'
import portrait from '../../assets/img/img-material-portrait.png'
import game from '../../assets/img/img-material-game.png'
import book from '../../assets/img/img-material-book.png'
import box from '../../assets/img/img-material-box.png'
import megaphone from '../../assets/img/megaphone.png'
import rael from '../../assets/img/img-rael.png'
import julia from '../../assets/img/img-julia.png'
import priscila from '../../assets/img/img-priscila.png'
import joyce from '../../assets/img/img-joyce.png'
import randson from '../../assets/img/img-randson.png'
import dimitry from '../../assets/img/img-dimitry.png'
import iphone from '../../assets/img/img-memory-game.png'
import alvo from '../../assets/img/img-alvo.png'

import './styles.css'


function HomePage() {
    return (
        // HOME PAGE

        <div className="homepage-global">
            <div className='showcase'>
                <img src={cabecalho} alt="Imagem cabecalho" className='img-showcase' />
                <div className="showcase-text">
                    EDUCAÇÃO RACIAL NA IFÂNCIA: A VIRADA DE CHAVE PARA CONSCIÊNCIA RACIAL NA ADOLESCÊNCIA
                </div>

            </div>

            {/* INTRODUÇÃO     */}

            <div className="introduction">
                <img src={creators} alt="Criadores" className='img-project-creators' />

                <div className='introduction-container'>
                    <div className='introduction-block'>
                        O que é o clube dos Eu's?
                    </div>
                    O Clube dos Eu’s, é muito mais que um projeto, é uma tentativa de mudança na sociedade. De maneira análoga ao pensamento de Leon Tolstói, no qual ele diz: “Se queres ser universal, começa por pintar a tua aldeia.” Acreditamos que uma mudança deva começar na nossa localidade. Então começamos, com ações antirracistas, e na base da educação, na educação   infantil. Com o auxílio da comunidade escolar, realizamos atividades interventivas nas quais propiciamos uma reflexão as crianças sobre sua própria identidade visual, e sua multiplicidade de identidades, realizamos uma pesquisa com as crianças que estão na primeira infância(0 a 6 anos) e constatamos a lacuna que foi gerada nesse processo. É notório a dificuldade de crianças, negras/pardas se identificarem como são. Por outro lado, os professores são nossos parceiros no processo, então para auxiliá-los, construímos um ebook com inúmeras formas de se trabalhar a temática na educação, além de construirmos materiais pedagógicos, que também se unem no processo de educação étnico-racial nessa faixa-etária.
                </div>
            </div>

            {/* CONTEXTO     */}

            <div className="context">
                <div className="context-img-book">
                    <img src={ebook} alt="Ebook" className='img-ebook' />
                </div>

                <div className='context-container'>
                    <div className="context-block"> Kit “Por crianças com conhecimento sobre si mesmo” </div>
                    Na nossa concepção, não adiantava encarar a realidade e não propormos uma intervenção. Pensamos em um ebook, com inúmeras formas de se trabalhar a temática racial na educação infantil. Não podemos negar o peso que esse tema tem na sociedade atual, e trabalhar uma problemática tão pesada com crianças de fato não é uma tarefa fácil. Estudamos, procuramos e elaboramos um plano para que possa servir de auxílio, pois a criatividade vai muito além, os professores são seres que conseguem pensar em atividades incríveis para serem trabalhadas, este material servirá de amigo para o professor, estará do seu lado, para qualquer busca de informação, e maneiras lúdicas de trabalhar com seus alunos. Foram dias de pesquisa, e sintetizamos o necessário para que possamos ter uma educação antirracista e mais inclusiva. Por encararmos a real face da educação pública infantil, entendemos as grandes dificuldades que rodeiam esse processo, então o professor será livre para adaptar para sua realidade, como disse anteriormente, esse material será um companheiro do professor, e juntos possibilitaremos uma maior inclusão e uma reflexão das crianças de si mesmo, ajudando-os a se aceitar, se entender, assim como aceitar e entender o outro. Essa é uma realidade que possui profusas e confusas faces, mas que com certeza, teremos uma melhora na educação do país.
                </div>
            </div>

            {/* MATERIAIS */}

            <div className="materials">
                <div className="materials-text-kit"></div>
                NO KIT VEM:
                <div className="materials-text-kit"></div>
            </div>

            <div className="materials-blocks">
                <img src={materials} alt="Materiais" className='img-materials' />

            </div>

            {/* FERRAMENTAS */}

            <div className="tools">
                <div className="tools-container">

                    <div className="tools-container-kit">
                        <h3>
                            MATERIAIS PEDAGÓGICOS
                        </h3>

                        <img src={clipboard} alt="Prancheta" className='tools-img-clipboard' />
                    </div>

                </div>

                <div className="tools-gallery">
                    <div className="tools-gallery-wrapper">
                        <div className="tools-gallery-container">
                            <img src={portrait} alt="Autoretrato com velcro" className='item' />
                            <img src={book} alt="Livro de Colorir" className='item' />
                            <img src={cards} alt="Cards com personagens" className='item' />
                            <img src={box} alt="Caixa do Tesouro" className='item' />
                            <img src={game} alt="Caixa do Tesouro" className='item' />

                        </div>
                    </div>
                </div>
            </div>

            {/* DOWNLOAD */}

            <div className="download-button-container">
                <button className="button-download">
                    <a href='https://projetoclube.files.wordpress.com/2022/11/clube-dos-eus-ebook.pdf' className='download-ebook'>DOWNLOAD EBOOK</a>
                </button>

                <img src={megaphone} alt="Megafone" className='img-megaphone' />

            </div>

            {/* JOGO DA MEMORIA  */}


            <div className="memory-game">
                <div className='memory-game-img'>
                    <img src={iphone} alt="Jogo da Memoria" className='img-memory-game' />
                </div>

                <div className='memory-game-container'>
                    <div className='memory-game-block'> JOGO DA MEMÓRIA ON-LINE </div>
                    Os materiais pedagógicos desenvolvidos são voltados para o contexto escolar, e pensando em dar continuidade a todo o processo de autoconhecimento e conhecimento sobre outro adaptamos um material físico para ser on-line. O jogo da memória on-line tem o objetivo de ultrapassar as paredes da escola, de chegar na família da criança, para que juntos possam construir cada vez mais conhecimento. É imprescindivel que esse conhecimento se expanda, pouco adianta o ensino dentro da instituição se a família reproduz de outra forma dentro do convívio familiar. Esse um jogo ilustrado e intuitivo, de fácil acesso, a criança pode jogar sozinha, assim como acompanhada.
                </div>
            </div>

            <div className="link">
                <button >
                    <a href='https://jogo-clube-dos-eus.netlify.app/' className='link-memory-game'>
                        JOGUE AQUI
                    </a>

                </button>

                <img src={alvo} alt="Alvo" />
            </div>


            {/* CRIADORES */}

            <div className="creators-gallery">
                <div className="creators-gallery-wrapper">
                    <div className="creators-gallery-container">
                        <a href="https://www.instagram.com/rae1zin/">
                            <img src={rael} alt="rael" className='creator' />
                        </a>
                        <a href="https://www.instagram.com/_julialsouza/">
                            <img src={julia} alt="julia" className='creator' />
                        </a>
                        <a href="https://www.instagram.com/pri_hollanda/">
                            <img src={priscila} alt="priscila" className='creator' />
                        </a>
                        <a href="https://www.instagram.com/joyce_geosales/">
                            <img src={joyce} alt="joyce" className='creator' />
                        </a>
                        <a href="	https://www.linkedin.com/in/randson-alves/">
                            <img src={randson} alt="randson" className='creator' />
                        </a>
                        <a href="https://www.instagram.com/dimitryyalves/">
                            <img src={dimitry} alt="dimitry" className='creator' />
                        </a>

                    </div>
                </div>
            </div>

            {/* RODAPÉ */}

            <footer className="footer">@clubedoeus</footer>
        </div>
    )
}

export default HomePage;

