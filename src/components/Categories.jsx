import './Categories.css';

export default function Categories() {
    return (
        <section id="collection-1577">
            <div className="cs-container reducedBottomMargin">
                <div className="cs-content">
                    <span className="cs-topper">CATEGORIAS</span>
                    <h2 className="cs-title">CATEGORIAS DESTACADAS</h2>
                </div>
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <span className="cs-category">Categoria 1</span>
                            <picture className="cs-background" aria-hidden="true">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                                    width={365}
                                    height={201}
                                    alt="t-shirt"
                                />
                            </picture>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <span className="cs-category">Categoria 2</span>
                            <picture className="cs-background" aria-hidden="true">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                                    width={365}
                                    height={201}
                                    alt="purse"
                                />
                            </picture>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <span className="cs-category">Categoria 3</span>
                            <picture className="cs-background" aria-hidden="true">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                                    width={365}
                                    height={201}
                                    alt="shoes"
                                />
                            </picture>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <span className="cs-category">Categoria 4</span>
                            <picture className="cs-background" aria-hidden="true">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                                    width={365}
                                    height={201}
                                    alt="perfume"
                                />
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}